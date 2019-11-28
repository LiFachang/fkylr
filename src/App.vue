<template>
  <div id="app">
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
      showAlert: false,
      alertMsg: '',
      showTips: false,
      tipsMsg: ''
    }
  },
  mounted () {
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
</style>
