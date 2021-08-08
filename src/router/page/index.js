export const PageLayout = {
  path: '/',
  name: 'PageLayout',
  component: () => import('@/views/layouts/page/Index'),
  children: [
    {
      path: '/product-list',
      name: 'ProductList',
      component: () => import('@/views/page/ProductList'),
      meta: {
        icon: 'mdi-reproduction',
      },
    },
  ],
}
