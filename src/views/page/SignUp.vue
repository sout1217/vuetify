<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <div class="mb-5">
          <router-link to="/">
            <v-img
              width="120"
              class="mx-auto"
              :src="require('@/assets/logo.png')"
            />
          </router-link>
        </div>

        <v-card width="460" class="px-12 py-16 text-center">
          <div class="text-h4 font-weight-black mb-10">회원가입</div>
          <v-text-field label="이메일" clearable prepend-icon="mdi-email" />

          <v-text-field
            label="비밀번호"
            clearable
            prepend-icon="mdi-lock-outline"
          />

          <v-text-field
            label="비밀번호 확인"
            clearable
            prepend-icon="mdi-lock-outline"
          />

          <VCardText>
            <p>
              홈으로 이동하시겠습니까?
              <router-link class="text-decoration-none" to="/">홈</router-link>
            </p>
            <p>
              로그인을 하실건가요?
              <router-link class="text-decoration-none" to="/sign-in">
                로그인
              </router-link>
            </p>
          </VCardText>

          <v-btn class="mt-5" block x-large rounded color="primary">
            회원가입
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignUp',
}
</script>

<style scoped></style>
