import Vue from 'vue'
import tips from './tips.vue'     //引入组件
let tipsConstructor  = Vue.extend(tips) // 返回一个“扩展实例构造器”

let mytips = (text, duration) => {
  let tipsDom = new tipsConstructor({
    el:document.createElement('div')    //将tips组件挂载到新创建的div上
  })
  document.body.appendChild( tipsDom.$el )   //把tips组件的dom添加到body里

  tipsDom.msg = text
  tipsDom.duration = duration

  // 在指定 duration 之后让 tips消失
  setTimeout(()=>{
    tipsDom.show = false
  }, tipsDom.duration)
}
export default mytips
