<template>
  <label>
    {{ label }}
    <v-text-field
      class="mt-1"
      :outlined="outlined"
      :dense="dense"
      v-bind="$attrs"
      v-on="$listeners"
    />

    <!-- 부모 컴포넌트에서 온 모든 v-bind 를 넘겨준다 -->
    <!-- 부모 컴포넌트에서 온 모든 v-on 를 넘겨준다 -->
    <!-- :outlined 처럼 속성을 명시하여 부분적으로도 따로 컨트롤 할 수 있다 (안적는 경우 $attrs 로 알아서 들어감) -->
    <!-- ★★★★★ 자세한 속성 정보는 assets/img.png 참고 바람 ★★★★★ -->
  </label>
</template>

<script>
export default {
  // inheritAttrs 부모 컴포넌트에서 정의 속성이 root 태그인 label 에 적용되지 않게 한다
  name: 'TextField',
  inheritAttrs: false,
  props: {
    label: { type: Object },
    outlined: { type: Boolean, default: true },
    dense: { type: Boolean, default: true },
  },
}
</script>

<style scoped></style>
