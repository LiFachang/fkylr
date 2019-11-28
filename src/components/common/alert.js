import Vue from 'vue'
import alert from './alert.vue'

let alertConstructor = Vue.extend(alert)

let myalert = function (text) {
  return new Promise((res, rej) => { //promise封装，ok执行resolve，no执行rejectlet
    let alertDom = new alertConstructor({
      el: document.createElement('div')
    })
    document.body.appendChild(alertDom.$el)  //new一个对象，然后插入body里面
    alertDom.msg = text || ''
    alertDom.ok = function () {
      res()
      alertDom.isShow = false
    }

  })
}

export default myalert
