// chunk 파일을 그룹핑 할 수 있다
export const AuthenticationLayout = {
  path: '/',
  component: () =>
    import(
      /* webpackChunkName "views-authentication */ '@/views/layouts/authentication/Index'
    ),
  children: [
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () =>
        import(
          /* webpackChunkName "views-authentication */ '@/views/page/SignUp'
        ),
      meta: {
        icon: 'mdi-login',
      },
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: () =>
        import(
          /* webpackChunkName "views-authentication */ '@/views/page/SignIn'
        ),
      meta: {
        icon: 'mdi-logout',
      },
    },
  ],
}
