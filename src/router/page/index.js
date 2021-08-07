import _PageLayout from '@/layouts/page/Index'
import ProductList from '@/views/ProductList'

export const PageLayout = {
  path: '/',
  name: 'PageLayout',
  component: _PageLayout,
  children: [
    {
      path: '/product-list',
      name: 'ProductList',
      component: ProductList,
      meta: {
        icon: 'mdi-reproduction',
      },
    },
  ],
}
