<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>
<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
// https://codingbroker.tistory.com/66
.v-navigation-drawer__content::-webkit-scrollbar {
  width: 7px;
}
.v-navigation-drawer__content::-webkit-scrollbar-thumb {
  background-color: #121212;
  border-radius: 999px;
}
.v-navigation-drawer__content::-webkit-scrollbar-track {
  background-color: lightgrey;
  border-radius: 10px;
  box-shadow: inset 0 0 5px white;
}
</style>
