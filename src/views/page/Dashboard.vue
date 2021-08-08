<template>
  <div>
    홈 페이지
    <button-tab>
      <h1>Default</h1>
      <span slot="footer">Footer</span>
      <!-- = <template v-slot:default></template>> -->
      <template v-slot:nav> Nav </template>
      <template v-slot:img="prop">
        {{ prop.childData.username }}
      </template>
      <template v-slot:age="{ childData, something }">
        <p>{{ childData.age }} | {{ something.message }}</p>
      </template>
      <template #gender="{ message2 }"> {{ message2 }}</template>
      <span slot="header">Header</span>
    </button-tab>
  </div>
</template>

<script>
import ButtonTab from '@/views/components/app/ButtonTab'
export default {
  name: 'Dashboard',
  components: { ButtonTab },
  data() {
    return {}
  },
}
</script>

<style scoped></style>
