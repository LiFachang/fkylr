import Vue from 'vue'
import Router from 'vue-router'
const views = name => () => import(`@/components/${name}`)

Vue.use(Router)

const arrRoutes = [
  'home',
  'type',
  'step1',
  'step1-tab',
  'step2',
  'step2-xn',
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

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (process.env.NODE_ENV !== 'production') {
    to.query.userId = '94056'
    to.query.compId = '1'
  }
  if (to.query.userId != '' && to.query.compId != '' && to.name == 'home') {
    let userId = to.query.userId
    let compId = to.query.compId
    sessionStorage.setItem('userId', userId)
    sessionStorage.setItem('compId', compId)
  }
  next()
})

export default router
