// icon : https://pictogrammers.github.io/@mdi/font/5.4.55/
export const DefaultLayout = {
  path: '/',
  component: () => import('@/views/layouts/default/Index'),
  children: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('@/views/page/Dashboard'),
      meta: {
        icon: 'mdi-view-dashboard',
      },
    },
    {
      path: '/grid-system',
      name: 'GridSystem',
      component: () => import('@/views/page/GridSystem'),
    },
    {
      path: '/grid-list-page',
      name: 'GridListPage',
      component: () => import('@/views/page/GridListPage'),
    },
    {
      path: '/break-points',
      name: 'BreakPoints',
      component: () => import('@/views/page/Breakpoints'),
    },
    {
      path: '/typography',
      name: 'Typography',
      component: () => import('@/views/page/Typography'),
    },
    {
      path: '/colors',
      name: 'Colors',
      component: () => import('@/views/page/Colors'),
    },
    {
      path: '/helper-class',
      name: 'HelperClass',
      component: () => import('@/views/page/HelperClass'),
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('@/views/page/Form'),
    },
    {
      path: '/java',
      name: 'JavaPage',
      component: () => import('@/views/page/Java'),
      meta: {
        isChild: true,
      },
    },
    {
      path: '/python',
      name: 'PythonPage',
      component: () => import('@/views/page/Python'),
      meta: {
        isChild: true,
      },
    },
    {
      path: '/kotlin',
      name: 'KotlinPage',
      component: () => import('@/views/page/Kotlin'),
      meta: {
        isChild: true,
      },
    },
  ],
}
