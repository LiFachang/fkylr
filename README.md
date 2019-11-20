# fkylr

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

*******************************************************************
this.$bus.$emit('showTips', {txt: '提示内容', times: 2500}) // 默认2500
this.$bus.$emit('showTips', {txt: '提示内容'})

this.$bus.$emit('showAlert', '弹窗内容')

