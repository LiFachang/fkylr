<template>
  <div class="main">
    <img class="step-img" src="../assets/img/step4.png" alt="">
    <p class="title-1">房源详细信息</p>
    <div class="big-input-box">
      <span class="required">装修状况</span>
      <select>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
      </select>
    </div>
    <div class="big-input-box">
      <span class="">装修年限</span>
      <select>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
      </select>
    </div>
    <div class="big-input-box">
      <span class="required">使用状况</span>
      <select>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
      </select>
    </div>
    <div class="big-input-box" v-if="tktime != '固定日期'">
      <span class="">腾空时间</span>
      <select v-model="tktime" @change="tksj">
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="固定日期">固定日期</option>
      </select>
    </div>
    <div class="big-input-box-tksj" v-if="tktime == '固定日期'">
      <div class="big-input-box">
        <span class="">腾空时间</span>
        <select v-model="tktime" @change="tksj">
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="固定日期">固定日期</option>
        </select>
      </div>
      <div class="big-input-box">
        <input type="date" placeholder="请选择日期">
        <img class="rili" src="../assets/img/rili.png" alt="">
      </div>
    </div>
    <div class="big-input-box">
      <span class="">出租方式</span>
      <select>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
      </select>
    </div>
    <div class="big-input-box">
      <span class="">预计租赁到期日</span>
      <input type="date">
      <img class="rili" src="../assets/img/rili.png" alt="">
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
      tktime: ''
    }
  },
  methods: {
    tksj () {
      console.log(this.tktime)
    }
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
  .big-input-box-tksj{
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
