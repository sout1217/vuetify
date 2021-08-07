<template>
  <v-row>
    <v-col v-for="count in 20" :key="count" cols="12" sm="6" md="4" lg="3">
      <ProductItem />
    </v-col>
  </v-row>
</template>

<script>
import ProductItem from '@/components/ProductItem'
export default {
  name: 'ProductList',
  components: { ProductItem },
  inject: {
    theme: {
      default: { isDark: true },
    },
  },
}
</script>

<style scoped></style>
