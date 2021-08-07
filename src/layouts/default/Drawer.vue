<template>
  <!-- v-model 속성이 없기 때문에 모든 속성을 반영을 하는 attrs 를 작성 -->
  <v-navigation-drawer app dark v-bind="$attrs">
    <template v-slot:img="props">
      <v-img
        :src="require('@/assets/vertical.jpg')"
        v-bind="props"
        :gradient="gradient"
      />
    </template>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Application</v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import routes from '@/router/routes'

export default {
  name: 'DefaultDrawer',
  computed: {
    items() {
      return routes
        .map(layout =>
          layout.children.map(route => ({
            title: route.name,
            icon: route.meta?.icon || 'mdi-image',
            to: route.path,
          })),
        )
        .flat()
    },
  },
  data() {
    return {
      gradient: 'rgba(0,0,0,.7), rgba(0,0,0,.7)',
    }
  },
}
</script>

<style scoped></style>
