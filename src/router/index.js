import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import type from '@/components/type'
import stepOne from '@/components/stepOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/type',
      name: 'type',
      component: type
    },
    {
      path: '/stepOne',
      name: 'stepOne',
      component: stepOne
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    }
  ]
})
