import Vue from 'vue'
import loading from './loading.vue'     //引入组件
let loadingConstructor  = Vue.extend(loading) // 返回一个“扩展实例构造器”


let loadingDom = new loadingConstructor({
  el:document.createElement('div')    //将loading组件挂载到新创建的div上
})
document.body.appendChild( loadingDom.$el )   //把loading组件的dom添加到body里

let myLoading = {
  show (text) {
    loadingDom.isloading = true
    loadingDom.msg = text
  },
  hide () {
    loadingDom.isloading = false
    loadingDom.msg = ''
  }
}
export default myLoading
