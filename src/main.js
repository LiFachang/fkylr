// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.scss'
import 'lib-flexible/flexible.js'
import axios from "./httpRequest"
import qs from 'qs'
import Bus from './bus'
import '../src/assets/js/resize'
import AwesomePicker from 'vue-awesome-picker'
import myConfirm from "./components/common/confirm"
import mytips from "./components/common/tips"
import myloading from "./components/common/loading"
import myalert from "./components/common/alert"
Vue.use(AwesomePicker)

// Vue.prototype.$ajaxGet = ajaxGet
// Vue.prototype.$ajaxPost = ajaxPost
Vue.prototype.$http = axios
Vue.prototype.$qs = qs

Vue.prototype.$bus = Bus
Vue.prototype.$confirm = myConfirm
Vue.prototype.$tips = mytips
Vue.prototype.$loading = myloading
Vue.prototype.$alert = myalert

Vue.config.productionTip = false

/* eslint-disable no-new */
const myVue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

export default myVue
