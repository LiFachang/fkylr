import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import type from '@/components/type'
import step1 from '@/components/step1'

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
      path: '/step1',
      name: 'step1',
      component: step1
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    }
  ]
})
