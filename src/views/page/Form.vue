<template>
  <v-container fluid>
    <v-card>
      <v-card-title> Form Validation </v-card-title>
      <v-card-text>
        <!-- observer 는 form 에 감싸주면 된다 -->
        <!-- observer 에서 slot 은 전체 집계를 얻어낼 수 있다 -->
        <validation-observer ref="observer" v-slot="{ invalid }">
          <v-form @submit.prevent="submit">
            <!-- provider 는 input 을 감싸주면 된다 -->
            <!-- name 은 에러 메시지의 { _filed_ } 명이 된다 -->
            <!-- v-slot 에서 error 를 받아온다 -->
            <validation-provider
              rules="required|limit:1,3"
              name="Name"
              v-slot="{ errors }"
            >
              <!-- v-model 을 사용하여 provider 가 value 를 가져올 수 있도록 한다 -->
              <!-- counter vuetify 에서 제공하는 보여주기용 이다 -->
              <!-- error-messages 는 vuetify 에서 제공하는 error message 다 -->
              <v-text-field
                v-model="name"
                label="Name"
                counter="3"
                :error-messages="errors"
                autocomplete="off"
              />
            </validation-provider>

            <validation-provider rules="min" v-slot="{ errors }">
              <v-text-field
                label="Nickname"
                :error-messages="errors"
                autocomplete="off"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="PhoneNumber"
              :rules="{
                required: true,
                numeric: true,
                digits: 11,
              }"
            >
              <v-text-field
                label="PhoneNumber"
                v-model="phoneNumber"
                counter="11"
                :error-messages="errors"
                autocomplete="off"
              />
            </validation-provider>

            <validation-provider
              name="E-Mail"
              :rules="{
                required: true,
                email: true,
              }"
              v-slot="{ errors }"
            >
              <v-text-field
                label="E-Mail"
                v-model="emailf"
                :error-messages="errors"
                autocomplete="off"
              />
            </validation-provider>

            <validation-provider
              name="Select"
              rules="required-select"
              v-slot="{ errors }"
            >
              <v-select
                v-model="select"
                label="Select"
                :items="items"
                :error-messages="errors"
                autocomplete="false"
              />
            </validation-provider>

            <validation-provider
              name="CheckBox"
              rules="required-select"
              v-slot="{ errors }"
            >
              <v-checkbox
                label="CheckBox"
                value="1"
                v-model="checkbox"
                :error-messages="errors"
              />
            </validation-provider>

            <v-card-actions>
              <v-btn color="primary" type="checkbox" :disabled="invalid"
                >Submit</v-btn
              >
              <v-btn type="reset">Clear</v-btn>
            </v-card-actions>
          </v-form>
        </validation-observer>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { min, required, digits, numeric, email } from 'vee-validate/dist/rules'

// 커스텀 validation
extend('limit', (value, params) => {
  const [min, max] = params
  if (value && value.length > max) {
    return `해당 {_field_}는 ${min}자 ~ ${max}자를 초과할 수 없습니다!`
  }
  return true
})

// 이미 존재하는 validation + message overriding
extend('min', {
  ...min,
  message: '{_filed_} 필드는 { length }자 미만일 수 없습니다', // _filed_ 는 provider 의 name 이다
})

extend('required', {
  ...required,
  message: '{_field_} 필드는 반드시 입력해야 합니다!',
})

extend('required-select', {
  ...required,
  message: '{_field_} 필드는 반드시 선택해야 합니다!',
})

extend('numeric', {
  ...numeric,
  message: '{_field_} 필드는 숫자로만 구성되어야 합니다.',
})
extend('digits', {
  ...digits,
  message: '{_field_} 필드는 11자리 여야 합니다',
})

extend('email', {
  ...email,
  message: '잘못 입력된 이메일 주소 입니다',
})

export default {
  name: 'Form',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      name: null,
      phoneNumber: null,
      emailf: null,
      select: null,
      checkbox: null,
      items: [
        { text: '아이템1', value: 1 },
        { text: '아이템2', value: 2 },
        { text: '아이템3', value: 3 },
      ],
    }
  },

  methods: {
    submit() {
      // 모든 필드에 검증을 진행하고 유효하지 않으면 각 필드에 error 를 리턴해준다
      this.$refs.observer.validate().then(result => {
        console.log(result)
        if (result) {
          alert('양식 제출')
        }
      })
    },
    clear() {
      this.name = null
      this.phoneNumber = null
      this.emailf = null
      this.select = null
      this.checkbox = null
    },
  },
}
</script>

<style scoped></style>
