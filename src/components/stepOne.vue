<template>
  <div class="main">
    <div class="step">
      <img src="../assets/img/step1.png" alt="第一步">
    </div>
    <div class="title">
      <i></i>
      <span>报备信息</span>
    </div>
    <div class="content">
      <div class="item-box">
        <!--<div class="item-list">-->
          <!--<div class="must name"><i></i>小区名称</div>-->
          <!--<div class="list">-->
            <!--<input type="input" placeholder="请输入楼盘" >-->
            <!--<i></i>-->
          <!--</div>-->
        <!--</div>-->
        <div class="item-list">
          <div class="must name"><i></i>小区姓名</div>
          <div class="list select">
            <span  data-type="">请输入楼盘</span>
            <i></i>
          </div>
        </div>
        <div class="item-list readonly">
          <div class="must name"><i></i>栋座</div>
          <div class="list select">
              <span data-type="">请选择</span>
              <i></i>
          </div>
        </div>
        <div class="item-list readonly">
          <div class="must name"><i></i>单元</div>
          <div class="list select">
            <span data-type="">请选择</span>
            <i></i>
          </div>
        </div>
        <div class="item-list readonly">
          <div class="must name"><i></i>楼层</div>
          <div class="list select">
            <span data-type="">请选择</span>
            <i></i>
          </div>
        </div>
        <div class="item-list readonly">
          <div class="must name"><i></i>门牌号</div>
          <div class="list select">
            <span data-type="">请选择</span>
            <i></i>
          </div>
        </div>
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
    mounted (){
      let url = ''
      let params = {
        currentUserId: '',
        id: '',
        type: 0
      }
      this.$ajaxPost(url, params).then((res) => {
        console.log(res)
      })
    },
    request () {
      let params = {
        id: 1
      }
      this.$ajaxGet('/123', params).then((res) => {
        console.log(res)
      })
    }

  }
}
</script>

<style scoped>
  .main{
    font-size: 28px;
    margin:40px 30px 0 30px;
  }
  .item-box{
    width: 100%;
    height: 78px;
    line-height: 78px;
    padding-top: 55px;
  }
  .must{
    position: relative;
  }
  .must i{
    position: absolute;
    top: 33px;
    left: -20px;
    width: 12px;
    height: 12px;
    background: url("../assets/img/icon-must.png")  no-repeat center;
    background-size: 100%;
  }
  .item-list{
    border-radius:39px;
    border:1px solid rgba(224,224,224,1);
    font-size: 26px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .item-list.readonly{
    background: #F5F5F5;
  }
  .item-list .name{
    color: #000000;
    margin-right: 30px;
  }
  .list{
    flex: 1;
    overflow: hidden;
    position: relative;
  }
  .list input{
    color: #BFBFBF;
    text-align: left;
    float: right;
    border: none;
    width: 100%;
  }
  .list i{
    position: absolute;
    display: block;
    top: 33px;
    right: 10px;
    width: 12px;
    height: 22px;
    background: url("../assets/img/icon-right.png")  no-repeat center;
    background-size: 100%;
  }
  .list.select span{
    color: #BFBFBF;
    text-align: left;
    float: right;
    border: none;
    width: 100%;
  }
</style>
