<template>
  <v-container>
    <v-card>
      <v-card-title>
        <!-- 뷰 포트의 이름을 출력해준다 -->
        $vuetify.breakpoint.name {{ $vuetify.breakpoint.name }}
      </v-card-title>
      <v-container class="grey lighten-3">
        <v-card class="pa-3" outlined :height="height"> 콘텐츠</v-card>
      </v-container>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        <p>
          <!-- 모바일 일 때만 true 를 리턴한다 -->
          $vuetify.breakpoint.name {{ $vuetify.breakpoint.mobile }}
        </p>
        <p>
          <!-- 모바일를 정의하는 데 너비값 출력 -->
          $vuetify.breakpoint.mobileBreakpoint
          {{ $vuetify.breakpoint.mobileBreakpoint }}px
        </p>
      </v-card-title>
      <v-container class="grey lighten-3">
        <!-- 모달창 -->
        <!-- full-screen 속성을 주는 경우 전체화면으로 보여준다 -->
        <!-- 모바일 일 때만 보여주게 설정할 수 도 있다 -->
        <!-- 모바일의 너비기준을 바꾸고 싶을 경우에는 vuetify.config 에 가서 조정하면 된다 -->
        <v-dialog
          v-model="dialog"
          width="500"
          :fullscreen="$vuetify.breakpoint.mobile"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
              Click Me
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        현재 뷰 포트의 높이와 너비를 알아낼 수 있다
        <v-card-text>
          <p>height: {{ $vuetify.breakpoint.height }}</p>
          <p>width: {{ $vuetify.breakpoint.width }}</p>
        </v-card-text>
      </v-card-title>
    </v-card>

    <v-card class="mt-5">
      <v-container>
        break point 가 설정된 기본값 변경하고 싶으면 vuetfiy.config 에서 바꾸면
        된다
      </v-container>
      <v-card-title class="pa-3 grey lighten-3">
        {{ $vuetify.breakpoint.thresholds }}
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Breakpoints',
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 100
        case 'sm':
          return 200
        case 'md':
          return 300
        case 'lg':
          return 400
        default:
          return 500
      }
    },
  },
}
</script>

<style scoped></style>
