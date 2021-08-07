import _PageLayout from '@/views/layouts/page/Index'
import ProductList from '@/views/page/ProductList'

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
