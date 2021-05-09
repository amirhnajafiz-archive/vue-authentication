import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import UserBoard from '@/components/UserBoard'
import Admin from '@/components/Admin'

/* Defining out routers */
let router = new Router({
  mode: 'history',
  routes: [
      {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
      },
      {
          path: '/login',
          name: 'login',
          component: Login,
          meta: {
              guest: true
          }
      },
      {
          path: '/register',
          name: 'register',
          component: Register,
          meta: {
              guest: true
          }
      },
      {
          path: '/dashboard',
          name: 'userboard',
          component: UserBoard,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/admin',
          name: 'admin',
          component: Admin,
          meta: {
              requiresAuth: true,
              is_admin : true
          }
      },
  ]
})
