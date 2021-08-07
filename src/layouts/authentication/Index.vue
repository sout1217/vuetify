<template>
  <v-app>
    <!-- view -->
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AuthenticationLayout',
}
</script>

<style scoped></style>
