<template>
  <transition name="fade">
    <div class="tips" v-if="show">
      <p>{{msg}}</p>
    </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        show: true,
        msg: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .tips{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #000;
    &>p{
      max-width: 80%;
      background: rgba(0,0,0,0.7);
      color: #fff;
      font-size: 30px;
      border-radius: 8px;
      padding: 20px 40px;
      overflow: hidden;
    }
  }
</style>
