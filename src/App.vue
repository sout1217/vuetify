<template>
  <!-- Layout -->
  <!-- v-app 최상단에 있어야 한다 (id="app")-->
  <v-app>
    <!-- app 속성은 초기화 설정이라고 보면 된다 -->
    <!-- 안적어주면 요상하게 화면 반을 차지함.. -->
    <!-- xsOnly 는 모바일 화면일 때만 보여주게 설정한 것이다 -->
    <!-- only 이외에 up 과 down 이 있으며 해당 사이즈 이하 이상이라고 생각하면 된다 -->
    <v-app-bar app v-if="$vuetify.breakpoint.xsOnly" />

    <!-- 레이아웃을 제외한 컨텐츠 영역을 나타낸다 (main 태그로 치환댐)-->
    <!-- 다른 레이아웃 컴포넌트(v-app-bar)들이 너비와 높이가 코어에 값이 저장되고 난 뒤
    그 값과 계산하여 적절한 너비와 높이를 제공해주는 컴포넌트이다 -->
    <!-- v-main 을 적지 않는 경우 내용이 v-app-bar 의 높이를 height:0 부터 시작하여 v-app-bar 에
    가려지게 된다 (absolut 와 z-index 가 높기 때문..) -->
    <!-- v-main 에 대해서 padding-top 을 보면 v-app-bar 만큼의 높이만큼이 떨어진 것을 확인이 가능하다 -->
    <v-main>
      <v-container> 컨텐츠 영역 </v-container>
    </v-main>
    <v-footer app />
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped></style>
