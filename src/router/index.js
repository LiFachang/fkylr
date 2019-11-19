import Vue from 'vue'
import Router from 'vue-router'
const views = name => () => import(`@/components/${name}`)

Vue.use(Router)

const arrRoutes = [
  'home',
  'type',
  'step1',
  'step2',
  'step3',
  'step4',
  'step5',
  'step6',
  'step7',
  'step8'

]
const routes = []
arrRoutes.forEach((item, index) => {
  routes.push({
    path: `/${item}`,
    name: `${item}`,
    component: views(`${item}`)
  })
})
routes.push({
  path: '*',
  redirect: {name: 'home'}
})

export default new Router({
  routes
})
