import _DefaultLayout from '@/views/layouts/default/Index'
import Dashboard from '@/views/page/Dashboard'
import GridSystem from '@/views/page/GridSystem'
import GridListPage from '@/views/page/GridListPage'
import Breakpoints from '@/views/page/Breakpoints'
import Typography from '@/views/page/Typography'
import Colors from '@/views/page/Colors'
import HelperClass from '@/views/page/HelperClass'
import Kotlin from '@/views/page/Kotlin'
import Python from '@/views/page/Python'
import Java from '@/views/page/Java'
// icon : https://pictogrammers.github.io/@mdi/font/5.4.55/
export const DefaultLayout = {
  path: '/',
  component: _DefaultLayout,
  children: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        icon: 'mdi-view-dashboard',
      },
    },
    {
      path: '/grid-system',
      name: 'GridSystem',
      component: GridSystem,
    },
    {
      path: '/grid-list-page',
      name: 'GridListPage',
      component: GridListPage,
    },
    {
      path: '/break-points',
      name: 'BreakPoints',
      component: Breakpoints,
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography,
    },
    {
      path: '/colors',
      name: 'Colors',
      component: Colors,
    },
    {
      path: '/helper-class',
      name: 'HelperClass',
      component: HelperClass,
    },
    {
      path: '/java',
      name: 'JavaPage',
      component: Java,
      meta: {
        isChild: true,
      },
    },
    {
      path: '/python',
      name: 'PythonPage',
      component: Python,
      meta: {
        isChild: true,
      },
    },
    {
      path: '/kotlin',
      name: 'KotlinPage',
      component: Kotlin,
      meta: {
        isChild: true,
      },
    },
  ],
}
