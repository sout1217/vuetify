<template>
  <v-list-group :prepend-icon="item.icon">
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </template>

    <template v-for="(child, index) in item.items">
      <list-item :item="child" :key="`child-${index}`" />
    </template>
  </v-list-group>
</template>

<script>
import ListItem from '@/views/layouts/default/drawer/ListItem'
export default {
  name: 'ListGroup',
  components: { ListItem },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped></style>
