import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import GridListPage from '@/views/GridListPage'
import Breakpoints from '@/views/Breakpoints'
import Typography from '@/views/Typography'
import Colors from '@/views/Colors'
import HelperClass from '@/views/HelperClass'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
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
]

export default routes
