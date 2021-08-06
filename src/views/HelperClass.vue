<template>
  <v-container>
    <!-- display: ?? 를 d를 통해 설정할 수 있다 -->
    <v-card class="mb-5"> mb-5 = 4x5 = 20px </v-card>
    <v-card class="d-none"> display : none </v-card>
    <v-card class="mt-3">margin-top 4x3 = 12px </v-card>
    <v-card class="ma-3">margin 4x3 = 12px </v-card>

    <!-- box shadow = elevation-12-->
    <v-card class="elevation-12"> hello </v-card>

    <!-- rounded -->
    <v-card rounded="0" class="pa-3 mt-3" width="100px">0</v-card>
    <v-card rounded="sm" class="pa-3 mt-3" width="100px">sm</v-card>
    <v-card rounded="circle" class="pa-3 mt-3" width="100px">circle 50%</v-card>
    <v-card rounded="pill" class="pa-3 mt-3" width="100px">pill 100%</v-card>

    <!-- t,r,b,l -->
    <div class="pa-3 mt-3 rounded-t-lg primary">rounded-t-lg</div>
    <div class="pa-3 mt-3 rounded-tl-circle primary">rounded-tl-circle</div>
  </v-container>
</template>

<script>
export default {
  name: 'HelperClass',
}
</script>

<style scoped></style>
