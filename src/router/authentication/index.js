import _AuthenticationLayout from '@/layouts/authentication/Index'
import SignUp from '@/views/SignUp'
import SignIn from '@/views/SignIn'

export const AuthenticationLayout = {
  path: '/',
  component: _AuthenticationLayout,
  children: [
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
      meta: {
        icon: 'mdi-login',
      },
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn,
      meta: {
        icon: 'mdi-logout',
      },
    },
  ],
}
