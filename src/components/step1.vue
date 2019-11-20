<template>
  <div class="main">
    <img class="step-img" src="../assets/img/step1.png" alt="">
    <p class="title-1">报备信息</p>
    <div class="big-input-box" @click="navTo('step1-tab', 0)">
      <span class="required">小区名称</span>
      <div class="flex">
        <span v-if="!xiaoqu.name">请输入小区名称</span>
        <span v-if="xiaoqu.name">{{xiaoqu.name}}</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <div :class="xiaoqu.name ? 'big-input-box': 'readonly-box'" @click="navTo('step1-tab', 1)">
      <span class="required">栋座</span>
      <div class="flex">
        <span v-if="!dongzuo.name">请选择</span>
        <span v-if="dongzuo.name">{{dongzuo.name}}</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <div :class="dongzuo.name ? 'big-input-box': 'readonly-box'" @click="navTo('step1-tab', 2)">
      <span class="required">单元</span>
      <div class="flex">
        <span v-if="!danyuan.name">请选择</span>
        <span v-if="danyuan.name">{{danyuan.name}}</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <div :class="danyuan.name ? 'big-input-box': 'readonly-box'" @click="navTo('step1-tab', 3)">
      <span class="required">楼层</span>
      <div class="flex">
        <span v-if="!louceng.name">请选择</span>
        <span v-if="louceng.name">{{louceng.name}}</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <div :class="louceng.name ? 'big-input-box': 'readonly-box'" @click="navTo('step1-tab', 4)">
      <span class="required">门牌号</span>
      <div class="flex">
        <span v-if="!menpaihao.name">请选择</span>
        <span v-if="menpaihao.name">{{menpaihao.name}}</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <router-link :to="{name: 'step2'}" tag="div" class="bottom-btn">下一步</router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        xiaoqu: {
          name: '',
          id: ''
        },
        dongzuo: {
          name: '',
          id: ''
        },
        danyuan: {
          name: '',
          id: ''
        },
        louceng: {
          name: '',
          id: ''
        },
        menpaihao: {
          name: '',
          id: ''
        }
      }
    },
    mounted () {
      let arr = [
        'xiaoqu',
        'dongzuo',
        'danyuan',
        'louceng',
        'menpaihao'
      ]
      arr.forEach((item, index) => {
        if (sessionStorage.getItem(`${item}`)) {
          this[item] = JSON.parse(sessionStorage.getItem(`${item}`))
        }
      })
    },
    methods: {
      navTo (name, index) {
        this.$router.push({
          name: name,
          query: {currentIndex: index}
        })
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
  .readonly-box{
    width: 655px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #888;
    font-size: 26px;
    margin: 30px auto;
    background: #F5F5F5;
    border-radius: 39px;
    padding: 0 30px;
    &>.flex{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    & .required:before{
      content: '*';
      color: red;
      margin-right: 10px;
    }
    &>span:last-child {
      flex: 1;
      text-align: left;
      padding-left: 10px;
    }
    &>span.required{
      width: auto;
      margin-right: 10px;
    }
  }
  .hx-box{
    flex-wrap: wrap;
  }
  .select-box{
    margin: 0 20px 20px 0;
  }
  .select-box select{
    border: 1px solid #E0E0E0;
    width: 178px;
    height: 60px;
    border-radius: 30px;
    text-align: center;
    text-align-last: center;
    appearance: none;
  }
  .select-box option{
    text-align: center;
    text-align-last: center;
  }
  .cx-box{
    justify-content: space-around;
  }
  .lable-checkbox {
    display: flex;
    align-items: center;
  }
  input[type='checkbox']{
    appearance: none;
    width: 40px;
    height: 40px;
    background: #F5F5F5;
    border-radius: 8px;
  }
  input[type='checkbox']:checked{
    background: #fdc915 url("../assets/img/duihao.png") center no-repeat;
    background-size: 22px 16px;
  }
  .big-input-box{
    width: 655px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 26px;
    margin: 30px auto;
    border: 1px solid #E0E0E0;
    border-radius: 39px;
    padding: 0 30px;
    &>.flex{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    & .required:before{
      content: '*';
      color: red;
      margin-right: 10px;
    }
    &>span.required{
      width: auto;
      margin-right: 10px;
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
