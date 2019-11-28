<template>
  <transition name="scale">
    <div class="alert" v-if="isShow">
      <div>
        <p>{{msg}}</p>
        <div @click="ok">确定</div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        isShow: false,
        msg: ''
      }
    },
    methods: {
      ok () {}
    }
  }
</script>

<style scoped lang="scss">
  .alert{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 30px;
    color: #000;
    &>div{
      background: #fff;
      border-radius: 12px;
      width: 600px;
      overflow: hidden;
    }
    &>div>p{
      padding: 70px 30px;
    }
    &>div>div{
      border-top: 1px solid #E0E0E0;
      padding: 30px;
    }
  }
</style>
