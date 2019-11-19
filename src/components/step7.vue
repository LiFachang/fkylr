<template>
  <div class="main">
    <img class="step-img" src="../assets/img/step7.png" alt="">
    <p class="title-2 title-required">家居信息</p>
    <div class="flex boxes-box">
      <div class="box1">
        <input type="checkbox">
        <span>双人床</span>
        <div class="ctrl-box">
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
      </div>
      <div class="box1">
        <input type="checkbox">
        <span>单人床</span>
        <div class="ctrl-box">
          <span>-</span>
          <span>2</span>
          <span>+</span>
        </div>
      </div>
      <div class="box1">
        <input type="checkbox">
        <span>衣柜</span>
        <div class="ctrl-box">
          <span>-</span>
          <span>2</span>
          <span>+</span>
        </div>
      </div>
      <div class="box1">
        <input type="checkbox">
        <span>书桌</span>
        <div class="ctrl-box">
          <span>-</span>
          <span>2</span>
          <span>+</span>
        </div>
      </div>
      <div class="box1">
        <input type="checkbox">
        <span>餐桌</span>
        <div class="ctrl-box">
          <span>-</span>
          <span>2</span>
          <span>+</span>
        </div>
      </div>
      <div class="box1">
        <input type="checkbox">
        <span>沙发</span>
        <div class="ctrl-box">
          <span>-</span>
          <span>2</span>
          <span>+</span>
        </div>
      </div>
      <div class="box1">
        <input type="checkbox">
        <span>全部</span>
      </div>



    </div>
    <p class="title-2 title-required">房屋设施</p>
    <div class="flex boxes-box">
      <div class="box2">
        <input type="checkbox">
        <span>电话</span>
      </div>
      <div class="box2">
        <input type="checkbox">
        <span>洗衣机</span>
      </div>
      <div class="box2">
        <input type="checkbox">
        <span>管道燃气</span>
      </div>
      <div class="box2">
        <input type="checkbox">
        <span>空调</span>
      </div>
      <div class="box2">
        <input type="checkbox">
        <span>冰箱</span>
      </div>
      <div class="box2">
        <input type="checkbox">
        <span>彩电</span>
      </div>
      <div class="box2">
        <input type="checkbox">
        <span>暖气</span>
      </div>
      <div class="box2">
        <input type="checkbox">
        <span>热水器</span>
      </div>
      <div class="box2">
        <input type="checkbox">
        <span>全部</span>
      </div>


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
  .flex{
    flex-wrap: wrap;
  }
  .boxes-box{
    margin-top: 50px;
  }
  .box1{
    width: 50%;
    padding: 0 10px;
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 40px;
    & input[type='checkbox']{
      margin-right: 10px;
    }
    &>span{
      width: 85px;
    }
    & .ctrl-box{
      width: 180px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      border-radius: 30px;
      border: 1px solid #E0E0E0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &>span{
        width: 60px;
      }
      &>span:first-child{
        border-right: 1px solid #E0E0E0;
      }
      &>span:last-child{
        border-left: 1px solid #E0E0E0;
      }
    }
  }
  .box2{
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 40px;
    & input{
      margin-right: 5px;
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
