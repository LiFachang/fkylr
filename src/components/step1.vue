<template>
  <div class="main">
    <img class="step-img" src="../assets/img/step1.png" alt="">
    <p class="title-1">报备信息</p>
    <div class="big-input-box" @click="navTo('step1-tab', 0, true)">
      <span class="required">小区名称</span>
      <div class="flex">
        <span v-if="!xiaoqu.name">请输入小区名称</span>
        <span v-if="xiaoqu.name">{{xiaoqu.name}}</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <div :class="xiaoqu.name ? 'big-input-box': 'readonly-box'" @click="navTo('step1-tab', 1, xiaoqu.name ? true : false)">
      <span class="required">栋座</span>
      <div class="flex">
        <span v-if="!dongzuo.name">请选择</span>
        <span v-if="dongzuo.name">{{dongzuo.name}}</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <div :class="dongzuo.name ? 'big-input-box': 'readonly-box'" @click="navTo('step1-tab', 2, dongzuo.name ? true : false)">
      <span class="required">单元</span>
      <div class="flex">
        <span v-if="!danyuan.name">请选择</span>
        <span v-if="danyuan.name">{{danyuan.name}}</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <div :class="danyuan.name ? 'big-input-box': 'readonly-box'" @click="navTo('step1-tab', 3, danyuan.name ? true : false)">
      <span class="required">楼层</span>
      <div class="flex">
        <span v-if="!louceng.name">请选择</span>
        <span v-if="louceng.name">{{louceng.name}}</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <div :class="louceng.name ? 'big-input-box': 'readonly-box'" @click="navTo('step1-tab', 4, louceng.name ? true : false)">
      <span class="required">门牌号</span>
      <div class="flex">
        <span v-if="!menpaihao.name">请选择</span>
        <span v-if="menpaihao.name">{{menpaihao.name}}</span>
        <i class="icon-jt icon-right"></i>
      </div>
    </div>
    <div class="bottom-btn" @click="nextStep">下一步</div>
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
      nextStep () {
        this.$alert('1234').then(() => {
          console.log(1)
        })
      },
      navTo (name, index, bool) {
        if (!bool) {return}
        this.$router.push({
          name: name,
          query: {currentIndex: index}
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
