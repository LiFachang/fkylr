<template>
  <div class="main">
    <img class="step-img" src="../assets/img/step5.png" alt="">
    <p class="title-1">证贷情况</p>
    <div class="big-input-box">
      <span class="required">证贷情况</span>
      <select>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
      </select>
    </div>
    <div class="big-input-box">
      <span class="">契税票日期</span>
      <input type="date">
      <img class="rili" src="../assets/img/rili.png" alt="">
    </div>
    <div class="big-input-box">
      <span class="">房产证签发日期</span>
      <input type="date">
      <img class="rili" src="../assets/img/rili.png" alt="">
    </div>
    <div class="big-input-box" v-if="dkyh != '其他'">
      <span class="required">贷款银行</span>
      <select v-model="dkyh">
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
        <option value="其他">其他</option>
      </select>
    </div>
    <div class="dkyh-box" v-if="dkyh == '其他'">
      <div class="big-input-box">
        <span class="required">贷款银行</span>
        <select v-model="dkyh">
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="其他">其他</option>
        </select>
      </div>
      <div class="big-input-box">
        <input type="text" placeholder="请输入银行名称">
      </div>
    </div>
    <div class="big-input-box">
      <span class="required">抵押权人</span>
      <input type="text" placeholder="请填写">
    </div>
    <div class="big-input-box">
      <span class="required">贷款年限</span>
      <input type="text" placeholder="请填写">
      <span>年</span>
    </div>
    <div class="big-input-box">
      <span class="required">抵押权人</span>
      <input type="text" placeholder="请填写">
      <span>万元</span>
    </div>

    <div class="bottom-btn">
      <div class="prev">上一步</div>
      <div class="next">下一步</div>
    </div>
  </div>
</template>

<script>
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
  .big-input-box-tksj, .dkyh-box{
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
  .dkyh-box input{
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
</style>
