<template>
  <v-app>
    <page-bar />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PageBar from '@/views/layouts/page/app-bar/AppBar'
export default {
  name: 'PageLayout',
  components: {
    PageBar,
  },
}
</script>

<style scoped></style>
