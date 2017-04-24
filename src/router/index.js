import Vue              from 'vue'
import VueRouter        from 'vue-router'

import notLoggedIn      from '@/components/NotLoggedIn'
import loggedInAsAdmin  from '@/components/LoggedInAsAdmin'
import loggedInAsUser   from '@/components/LoggedInAsUser'
import error            from '@/components/Error'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history', // remove the uggly '#' from the URL
  routes: [
    {
      path: '/',
      name: 'notLoggedIn',
      component: notLoggedIn,
      meta: {
        permission: 'admin|user|notloggedin',
        fail: '/error'
      },
    },

    {
      path: '/admin',
      name: 'loggedInAsAdmin',
      component: loggedInAsAdmin,
      meta: {
        permission: 'admin',
        fail: '/error'
      },
    },

    {
      path: '/user',
      name: 'loggedInAsUser',
      component: loggedInAsUser,
      meta: {
        permission: 'admin|user',
        fail: '/error'
      },
    },

    {
      path: '/error',
      name: 'error',
      component: error,
      meta: {
        permission: 'admin|user|notloggedin',
        fail: '/error'
      },
    },

  ]
})
