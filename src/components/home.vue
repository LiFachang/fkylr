<template>
  <div class="main">
    <p class="title-1">业务类型</p>
    <div class="flex choose-box">
      <div @click="type(1)">
        <img src="../assets/img/zulin.png" alt="">
        <p>租赁</p>
      </div>
      <div @click="type(2)">
        <img src="../assets/img/maimai.png" alt="">
        <p>买卖</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    type (num) {
      sessionStorage.setItem('busiType', num)
      this.$router.push({
        name: 'step1'
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .main{
    padding: 50px 30px;
  }
  .choose-box{
    margin: 60px auto;
    justify-content: space-between;
    color: #fdc915;
    font-size: 28px;
    &>div{
      flex: 1;
      text-align: center;
    }
    &>div:first-child{
      border-right: 1px solid #E0E0E0;
    }
    & img{
      width: 128px;
      height: 128px;
    }
  }
</style>
