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
</style>
