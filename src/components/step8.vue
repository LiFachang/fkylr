<template>
  <div class="main">
    <img class="step-img" src="../assets/img/step8.png" alt="">
    <p class="title-1">备注</p>
    <textarea placeholder="最多输入500字"></textarea>

    <div class="bottom-btn">
      <div class="prev">上一步</div>
      <div class="next">保存</div>
    </div>
  </div>
</template>

<script>
import Bus from '../bus'
export default {
  data () {
    return {
      dkyh: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .main{
    padding: 0 30px;
  }
  .step-img{
    display: block;
    width: 525px;
    height: 40px;
    margin: 40px auto;
  }
  textarea{
    display: block;
    width: 655px;
    height: 395px;
    border: 1px solid #BFBFBF;
    border-radius: 8px;
    font-size: 28px;
    padding: 30px;
    margin: 30px auto;
  }
  .bottom-btn{
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    line-height: 100px;
    background: #fdc915;
    font-size: 32px;
    text-align: center;
    display: flex;
    &>div{flex: 1}
    & .prev{
      background: #fff;
      border-top: 2px solid #EEEFF4;
    }
    & .next{
      background: #fdc915;
    }
  }
</style>
