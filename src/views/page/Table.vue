<template>
  <v-container fluid>
    <default-table title="기본 테이블입니다">
      <!-- 자식 컴포넌트의 슬로 사용하기 -->
      <div class="pl-4" slot="top">Hello world</div>
    </default-table>
  </v-container>
</template>

<script>
import DefaultTable from '@/views/components/app/Table'
export default {
  name: 'Table',
  components: {
    DefaultTable,
  },
}
</script>

<style scoped></style>
