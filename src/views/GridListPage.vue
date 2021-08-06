<template>
  <!-- 기본 12개의 Col 로 이루어져있어 cols 를 6으로 설정하면 너비의 반을 차지하게 된다 -->
  <!-- Breakpoint 는 xs, sm, md, lg, xl 있으면 기본값은 xs 이기 때문에 cols 로만 사용해도 된다 -->
  <v-container>
    <v-row>
      <!-- 6의 너비를 가지는 col 12개 생성 -->
      <!--
      12/12 = 1
      12/6 = 2
      12/4 = 3
      12/3 = 4
       -->
      <v-col v-for="count in 12" :key="count" cols="12" sm="6" md="4" lg="3">
        <v-card class="pa-3"> Col</v-card>
      </v-col>
    </v-row>
    <v-row>
      <!-- auto 는 해당 텍스트의 크기만 갖게 된다 -->
      <v-col cols="auto">
        <v-card class="pa-3"> Col</v-card>
      </v-col>
    </v-row>
    <v-card class="mt-5 pa-3">
      <!-- v-card 는 너비 100 -->
      <v-row>
        <!-- v-col 은 기본적으로 패딩을 가지고 있다 -->
        <v-col cols="auto">
          <v-card class="pa-3"> col</v-card>
        </v-col>
        <!-- 1~11칸 정도 건너 뛸 수 있다 -->
        <v-col cols="auto" offset="1">
          <v-card class="pa-3"> col</v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="pa-3"> col</v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
      <!-- justify: space-around -->
      <v-row justify="space-around">
        <v-col cols="auto">
          <v-card class="pa-3"> col</v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="pa-3"> col</v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="pa-3"> col</v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
      <!-- justify: space-between -->
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-card class="pa-3"> col</v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="pa-3"> col</v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="pa-3"> col</v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'GridListPage',
}
</script>

<style scoped></style>
