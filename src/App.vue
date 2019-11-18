<template>
  <div id="app">
    <div id="loading" v-if="loading">
      <img src="./assets/img/loading.svg" alt="">
      <p>{{loadingTxt}}</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Bus from './bus'
export default {
  name: 'App',
  data () {
    return {
      loading: false,
      loadingTxt: '加载中...'
    }
  },
  mounted () {
    Bus.$on('loading', (txt) => {
      this.loading = true
      this.loadingTxt = txt
    })
    Bus.$on('unloading', () => {
      this.loading = false
      this.loadingTxt = '加载中...'
    })
  },
  methods: {
  }
}
</script>

<style scoped>
  #loading{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.7);
    color: #fff;
    font-size: 30px;
  }
  #loading img{
    width: 70px;
    margin: 20px;
    animation: loading 1s linear infinite;
  }
  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
