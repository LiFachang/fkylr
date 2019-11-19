// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.scss'
import 'lib-flexible/flexible.js'
import { ajaxGet, ajaxPost } from "./httpRequest"


Vue.prototype.$ajaxGet = ajaxGet
Vue.prototype.$ajaxPost = ajaxPost

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
