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
</style>
