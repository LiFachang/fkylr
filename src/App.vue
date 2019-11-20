<template>
  <div id="app">
    <transition name="fade">
      <div id="loading" v-if="loading">
        <img src="./assets/img/loading.svg" alt="">
        <p>{{loadingTxt}}</p>
      </div>
    </transition>
    <transition name="fade">
      <tips v-if="showTips" :msg="tipsMsg"></tips>
    </transition>
    <transition name="scale">
      <alert v-if="showAlert" :msg="alertMsg"></alert>
    </transition>
    <router-view/>
  </div>
</template>

<script>
import alert from '../src/components/common/alert'
import tips from '../src/components/common/tips'
export default {
  name: 'App',
  data () {
    return {
      loading: false,
      loadingTxt: '加载中...',
      showAlert: false,
      alertMsg: '',
      showTips: false,
      tipsMsg: ''
    }
  },
  mounted () {
    this.$bus.$on('loading', (txt) => {
      this.loading = true
      this.loadingTxt = txt
    })
    this.$bus.$on('unloading', () => {
      this.loading = false
      this.loadingTxt = '加载中...'
    })
    this.$bus.$on('showAlert', (txt) => {
      this.showAlert = true
      this.alertMsg = txt
    })
    this.$bus.$on('hideAlert', () => {
      this.showAlert = false
      this.alertMsg = ''
    })
    this.$bus.$on('showTips', ({txt, times = 2500}) => {
      this.showTips = true
      this.tipsMsg = txt
      setTimeout(() => {
        this.showTips = false
        this.tipsMsg = ''
      }, times)
    })
  },
  methods: {
  },
  components: {
    alert,
    tips
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .scale-enter-active, .scale-leave-active {
    transition: transform .2s;
  }
  .scale-enter, .scale-leave-to {
    transform: scale(0);
  }
</style>
