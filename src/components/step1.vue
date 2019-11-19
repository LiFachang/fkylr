<template>
  <div class="main">
    <img class="step-img" src="../assets/img/step1.png" alt="">
    <p class="title-1">报备信息</p>
    <div class="big-input-box">
      <span class="required">小区名称</span>
      <div class="flex">
        <span>请输入楼盘</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <div class="readonly-box">
      <span class="required">栋座</span>
      <div class="flex">
        <span>请选择</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <div class="readonly-box">
      <span class="required">单元</span>
      <div class="flex">
        <span>请选择</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <div class="readonly-box">
      <span class="required">楼层</span>
      <div class="flex">
        <span>请选择</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <div class="readonly-box">
      <span class="required">门牌号</span>
      <div class="flex">
        <span>请选择</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <div class="bottom-btn">下一步</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
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
  .readonly-box{
    width: 655px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #888;
    font-size: 26px;
    margin: 30px auto;
    background: #F5F5F5;
    border-radius: 39px;
    padding: 0 30px;
    &>.flex{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    & .required:before{
      content: '*';
      color: red;
      margin-right: 10px;
    }
    &>span:last-child {
      flex: 1;
      text-align: left;
      padding-left: 10px;
    }
    &>span.required{
      width: auto;
    }
  }
  .hx-box{
    flex-wrap: wrap;
  }
  .select-box{
    margin: 0 20px 20px 0;
  }
  .select-box select{
    border: 1px solid #E0E0E0;
    width: 178px;
    height: 60px;
    border-radius: 30px;
    text-align: center;
    text-align-last: center;
    appearance: none;
  }
  .select-box option{
    text-align: center;
    text-align-last: center;
  }
  .cx-box{
    justify-content: space-around;
  }
  .lable-checkbox {
    display: flex;
    align-items: center;
  }
  input[type='checkbox']{
    appearance: none;
    width: 40px;
    height: 40px;
    background: #F5F5F5;
    border-radius: 8px;
  }
  input[type='checkbox']:checked{
    background: #fdc915 url("../assets/img/duihao.png") center no-repeat;
    background-size: 22px 16px;
  }
  .big-input-box{
    width: 655px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 26px;
    margin: 30px auto;
    border: 1px solid #E0E0E0;
    border-radius: 39px;
    padding: 0 30px;
    &>.flex{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    & .required:before{
      content: '*';
      color: red;
      margin-right: 10px;
    }
    &>span.required{
      width: 140px;
    }
    &>input{
      flex: 1;
      font-size: 28px;
      padding: 0 10px;
    }
    &>select{
      flex: 1;
      padding: 0 10px;
      appearance: none;
    }
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
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: #fdc915;
    }
    &:after{
      content: '';
      position: absolute;
      top: 0;
      right: -100%;
      width: 100%;
      height: 100%;
      background: #fdc915;
    }
  }
</style>
