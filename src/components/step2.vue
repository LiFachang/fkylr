<template>
  <div class="main">
    <img class="step-img" src="../assets/img/step2.png" alt="">
    <p class="title-1">填写信息</p>
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
  .step-img{
    display: block;
    width: 525px;
    height: 40px;
    margin: 40px auto;
  }
  .title-1{
    font-size: 32px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &:before{
      content: '';
      width: 8px;
      height: 28px;
      background-color: $--act-color--;
      margin-right: 10px;
    }
  }
</style>
