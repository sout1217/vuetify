<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460" class="px-12 py-16 text-center">
          <div class="text-h4 font-weight-black mb-10">로그인</div>
          <v-text-field label="이메일" clearable prepend-icon="mdi-email" />

          <v-text-field
            label="비밀번호"
            clearable
            prepend-icon="mdi-lock-outline"
          />

          <VCardText>
            회원가입을 하실건가요?
            <router-link to="/sign-up">회원가입</router-link>
          </VCardText>

          <v-btn class="mt-5" block x-large rounded color="primary">
            로그인
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'SignIn',
}
</script>

<style scoped></style>
