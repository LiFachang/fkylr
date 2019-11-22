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
</style>
