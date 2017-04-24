import Vue from 'vue'
import Router from 'vue-router'

import notLoggedIn      from '@/components/NotLoggedIn'
import loggedInAsAdmin  from '@/components/LoggedInAsAdmin'
import loggedInAsUser   from '@/components/LoggedInAsUser'
import error            from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history', // remove the uggly '#' from the URL
  routes: [
    {
      path: '/',
      name: 'notLoggedIn',
      component: notLoggedIn
    },

    {
      path: '/admin',
      name: 'loggedInAsAdmin',
      component: loggedInAsAdmin
    },

    {
      path: '/user',
      name: 'loggedInAsUser',
      component: loggedInAsUser
    },

    {
      path: '/error',
      name: 'error',
      component: error
    },

  ]
})
