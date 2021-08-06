<template>
  <v-container class="red">
    <!--
    Vuetify 의 그리드 시스템은 Flex Box 로 구성되어있다
    Container, Row, Gutters, Margin 으로 구성된다

    <v-row no-gutters> :  v-row직계 v-col자식 에서 음수 여백 과 패딩을 제거할 수 있습니다 .
    <v-spacer /> : 빈 col 공간
    <v-row align="end"> : align-contents: end
    -->

    <v-card class="pa-3">
      <v-row class="green">
        <v-spacer />
        <v-col class="pa-3" outlined>
          <v-card>Col</v-card>
        </v-col>
        <v-col class="pa-3" outlined>
          <v-card>Col</v-card>
        </v-col>
        <v-col class="pa-3" outlined>
          <v-card>Col</v-card>
        </v-col>
      </v-row>

      <v-row :style="{ height: '300px' }" align="end" class="yellow">
        <v-col class="pa-3" outlined>
          <v-card>Col</v-card>
        </v-col>
        <v-col class="pa-3" outlined>
          <v-card>Col</v-card>
        </v-col>
        <v-col class="pa-3" outlined>
          <v-card>Col</v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'GridSystem',
}
</script>

<style scoped></style>
