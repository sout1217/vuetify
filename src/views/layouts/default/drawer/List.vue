<template>
  <v-list dense nav expand>
    <template v-for="(item, index) in items">
      <default-list-group
        v-if="item.items"
        :item="item"
        :key="`group-${index}`"
      />
      <default-list-item v-else :item="item" :key="`item-${index}`" />
    </template>
  </v-list>
</template>

<script>
import DefaultListItem from '@/views/layouts/default/drawer/ListItem'
import DefaultListGroup from '@/views/layouts/default/drawer/ListGroup'

export default {
  name: 'List',
  components: { DefaultListGroup, DefaultListItem },
  props: {
    items: Array,
  },
}
</script>
