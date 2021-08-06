<template>
  <v-container>
    <!-- 배경색 적용 -->
    <v-card class="pa-3 primary"> bg primary </v-card>
    <!-- 색 연하게 주기 -->
    <v-card class="pa-3 mt-5 primary lighten-5"> bg primary lighten-5</v-card>
    <!-- 색 진하게 주기 -->
    <v-card class="pa-3 mt-5 primary darken-5-5"> bg primary darken-5</v-card>
    <v-card class="pa-3 secondary mt-5"> bg secondary </v-card>
    <v-card class="pa-3 error mt-5"> bg error </v-card>
    <v-card class="pa-3 success mt-5"> bg success </v-card>
    <v-card class="pa-3 warning mt-5"> bg warning </v-card>

    <!-- 텍스트 컬러 적용 -->
    <v-card class="pa-3 mt-5 error--text">error text</v-card>
    <v-card class="pa-3 mt-5 primary--text">error text</v-card>
    <v-card class="pa-3 mt-5 warning--text">error text</v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Colors',
}
</script>

<style scoped></style>
