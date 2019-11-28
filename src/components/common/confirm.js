import Vue from 'vue'
import confirm from './confirm.vue'

let confirmConstructor = Vue.extend(confirm)

let myConfirm = function (text) {
  return new Promise((res, rej) => { //promise封装，ok执行resolve，no执行rejectlet
    let confirmDom = new confirmConstructor({
      el: document.createElement('div')
    })
    document.body.appendChild(confirmDom.$el)  //new一个对象，然后插入body里面
    if (text.type) {
      confirmDom.text.type = text.type
    } else {
      confirmDom.text.type = '提示'
    }
    if (text.msg) {
      confirmDom.text.msg = text.msg
    } else {
      confirmDom.text.type = '确定?'
    }
    if (text.btn) {
      confirmDom.text.btn.ok = text.btn.ok
      confirmDom.text.btn.no = text.btn.no
    } else {
      confirmDom.text.btn.ok = '确定'
      confirmDom.text.btn.no = '取消'
    }
    // confirmDom.text = text;
    confirmDom.ok = function () {
      res()
      confirmDom.isShow = false
    }
    confirmDom.close = function () {
      rej()
      confirmDom.isShow = false
    }

  })
}

export default myConfirm

//暴露出去，别忘记挂载到vue的原型上
//   => 在main.js里面先引入 import myConfirm from './components/confirm/confirm.js'
//   => 再挂载 Vue.prototype.$confirm = myConfirm;
//在需要的地方直接用以下方法调用即可：
//   this.$confirm({
//     type:'提示',
//     msg:'是否删除这条信息？',
//     btn:{
//         ok:'yes',
//         no:'no'
//     }
// }).then(() => {
//     console.log('ok')
// })
// .catch(() => {
//     console.log('no')
// })
