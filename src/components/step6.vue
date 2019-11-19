<template>
  <div class="main">
    <img class="step-img" src="../assets/img/step6.png" alt="">
    <p class="title-1">报价信息</p>
    <div class="yxzj-box">
      <div class="big-input-box">
        <span class="required">意向租金</span>
        <input type="text" placeholder="请填写">
      </div>
      <div class="big-input-box">
        <select>
          <option value="">请选择</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="其他">其他</option>
        </select>
      </div>
    </div>
    <div class="big-input-box">
      <span class="">暖气费</span>
      <input type="text" placeholder="请填写">
      <span class="">元/平方米/月</span>
    </div>
    <div class="big-input-box">
      <span class="">物业费</span>
      <input type="text" placeholder="请填写">
      <span class="">元/平方米/月</span>
    </div>
    <div class="big-input-box">
      <span class="required">押金要求</span>
      <select>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
      </select>
      <span>月</span>
    </div>
    <div class="big-input-box">
      <span class="required">付款方式</span>
      <select>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
      </select>
      <span>月</span>
    </div>

    <div class="bottom-btn">
      <div class="prev">上一步</div>
      <div class="next">下一步</div>
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
  input[type='date']{
    background: transparent;
  }
  .big-input-box-tksj, .dkyh-box, .yxzj-box{
    width: 655px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &>div{
      flex: 1;
      margin: 0;
    }
  }
  .yxzj-box{
    margin-top: 30px;
  }
  .dkyh-box input, .yxzj-box input{
    width: 100px;
  }
  .big-input-box{
    width: 655px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 26px;
    margin: 30px auto;
    border: 1px solid #E0E0E0;
    border-radius: 39px;
    padding: 0 30px;
    & .required:before{
      content: '*';
      color: red;
      margin-right: 10px;
    }
    &>span.required{
      width: auto;
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
