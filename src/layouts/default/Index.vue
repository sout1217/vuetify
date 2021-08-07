<template>
  <v-app>
    <!-- 상단 바 -->
    <default-bar @drawer="drawer = !drawer" />

    <!-- 사이드 네비게이션 -->
    <default-drawer v-model="drawer" />

    <!-- 메인 -->
    <v-main class="hello2">
      <!-- 기본적으로 margin 을 주기 위해 한번 감싸준다 (page 컴포넌트 자체에서 마진을 줄 것면 없어도 됨 -->
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DefaultBar from '@/layouts/default/AppBar'
import DefaultDrawer from '@/layouts/default/Drawer'

export default {
  name: 'DefaultLayout',
  components: {
    DefaultBar,
    DefaultDrawer,
  },
  data() {
    return {
      right: null,
      drawer: true,
      group: null,
    }
  },
}
</script>

<style scoped></style>
