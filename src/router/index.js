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
  if (process.env.NODE_ENV !== 'production') {
    sessionStorage.setItem('userId', '94056')
    sessionStorage.setItem('compId', '1')
  } else {
    if (to.name == 'home' && to.query.userId != '' && to.query.compId != '') {
      let userId = to.query.userId
      let compId = to.query.compId
      sessionStorage.setItem('userId', userId)
      sessionStorage.setItem('compId', compId)
    }
  }
  next()
})

export default router
