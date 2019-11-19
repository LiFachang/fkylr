<template>
  <div class="alert">
    <div>
      <p>{{msg}}</p>
      <div @click="closeAlert">确定</div>
    </div>
  </div>
</template>

<script>
  import Bus from '../../bus'
  export default {
    props: ['msg'],
    methods: {
      closeAlert () {
        Bus.$emit('hideAlert')
      }
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
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 28px;
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
