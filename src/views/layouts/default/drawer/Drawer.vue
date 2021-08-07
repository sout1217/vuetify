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

    <drawer-header />
    <default-list :items="items" />

    <v-divider></v-divider>0
  </v-navigation-drawer>
</template>

<script>
import routes from '@/router/routes'
import DrawerHeader from '@/views/layouts/default/drawer/DrawerHeader'
import DefaultList from '@/views/layouts/default/drawer/List'

export default {
  name: 'DefaultDrawer',
  components: { DrawerHeader, DefaultList },
  computed: {
    items() {
      const rs = routes
        .map(layout =>
          layout.children
            .filter(route => !route.meta?.isChild)
            .map(route => ({
              title: route.name,
              icon: route.meta?.icon || 'mdi-image',
              to: route.path,
            })),
        )
        .flat()

      const rs2 = [
        ...rs,
        {
          title: 'pages',
          icon: 'mdi-menu',
          items: [
            { title: 'Kotlin', icon: 'mdi-image', to: '/kotlin' },
            { title: 'Java', icon: 'mdi-image', to: '/java' },
            { title: 'Python', icon: 'mdi-image', to: '/python' },
          ],
        },
      ]
      console.log(rs2)

      return rs2
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
