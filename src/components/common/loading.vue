<template>
  <transition name="fade">
    <div id="loading" v-if="isloading">
      <img src="../../assets/img/loading.svg" alt="">
      <p>{{msg}}</p>
    </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        isloading: false,
        msg: ''
      }
    }
  }
</script>

<style scoped lang="scss">
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
