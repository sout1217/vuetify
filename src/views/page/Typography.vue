<template>
  <v-container>
    <v-card>
      <v-card-title> Typography </v-card-title>
      <v-container class="grey lighten-3">
        <v-card class="pa-3" outlined>
          <p class="text-h1">Heading 1</p>
          <p class="text-h2">Heading 2</p>
          <!-- 기본 xs 이며, 뷰 포트에 따라 글씨 크기를 변환 해줄 수 있다 -->
          <p class="text-h3 text-sm-subtitle-1">Heading 3</p>
          <p class="text-h4">Heading 4</p>
          <p class="text-h5">Heading 5</p>
          <p class="text-h6">Heading 6</p>
          <p class="font-weight-bold">가장 굵은</p>
          <p class="font-weight-thin">가장 얇은</p>
          <!-- 텍스트의 양 옆을 맞추어 준다 -->
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            assumenda consequuntur deserunt enim esse expedita mollitia nemo
            perspiciatis suscipit. Adipisci aliquam consequatur earum expedita
            fugiat magnam non numquam quam sit velit! Ab distinctio natus nobis
            possimus voluptate. Doloribus enim inventore ipsam laborum maiores
            sit sunt, veniam! Commodi cupiditate itaque nesciunt officia quam
            voluptatibus. Adipisci aliquid aspernatur, aut consequuntur cumque
            voluptates? Animi assumenda consectetur consequuntur debitis dolorem
            eaque earum eius error eveniet ex exercitationem fugit harum hic in
            itaque iusto molestias mollitia, nesciunt obcaecati perferendis
            quisquam quod repellendus rerum temporibus vero voluptas
            voluptatibus? Adipisci aliquam at, cumque deserunt ducimus ea eum,
            ex laborum magnam qui quibusdam quos similique ullam, velit
            voluptatum. A accusantium eum perferendis quas ratione repellendus,
            sit. Ea eligendi exercitationem ipsum, itaque laboriosam molestias
            nobis odit qui sapiente, ullam, veniam vero voluptate? Adipisci
          </p>
          <!-- 텍스트 정렬 -->
          <p class="text-center">text center</p>
          <p class="text-right">text right</p>
          <p class="text-left">text left</p>
          <!-- 투명도 -->
          <p class="text--primary">100% 불투명도</p>
          <p class="text--secondary">50% 불투명도</p>
          <p class="text--disabled">30% 불투명도</p>
          <!-- 줄 바꿈 없애기 -->
          <div :style="{ width: '30px' }" class="blue text-no-wrap">
            no wrap
          </div>
        </v-card>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Typography',
}
</script>

<style scoped></style>
