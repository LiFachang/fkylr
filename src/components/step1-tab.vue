<template>
  <div class="main">
    <div class="search-box flex">
      <div class="flex">
        <div class="flex search">
          <img src="../assets/img/icon-search.png" alt="">
          <input v-model="searchTxt" type="text" placeholder="请输入关键字">
        </div>
        <img class="icon-close" src="../assets/img/icon-close.png" alt="">
      </div>
      <span @click="doSearch(true)">确定</span>
    </div>
    <ul class="tab-box flex" @click="changeTab($event)">
      <li :class="currentIndex == 0 ? 'current' : ''" data-current-index="0">小区名称</li>
      <li :class="currentIndex == 1 ? 'current' : ''" data-current-index="1">楼盘栋座</li>
      <li :class="currentIndex == 2 ? 'current' : ''" data-current-index="2">楼盘单元</li>
      <li :class="currentIndex == 3 ? 'current' : ''" data-current-index="3">楼盘楼层</li>
      <li :class="currentIndex == 4 ? 'current' : ''" data-current-index="4">楼盘门牌号</li>
    </ul>
    <ul class="result-list-box">
      <li @click="changeChoosed(item.id, item.name)" :class="choosedId == item.id ? 'choosed' : ''" v-for="(item, index) in resultList" :key="index" :data-id="item.id">
        <span>{{item.name}}</span>
        <img src="../assets/img/icon-choose.png" alt="">
      </li>
    </ul>
    <div class="chooded-result">{{choosedResultTxt}}</div>
    <div class="add-nx-btn">+ 添加虚拟房源</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        searchTxt: '',
        currentIndex: 0, //0小区1楼盘2单元3楼层4门牌号
        resultList: [], //搜索到的结果
        choosedId: '', //选择搜索到的结果的id
        choosedResultTxt: '',
        xiaoqu: {
          id: '',
          name: ''
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
      this.currentIndex = this.$route.query.currentIndex
    },
    methods: {
      changeTab (e) {
        this.resultList = []
        switch (Number(e.target.dataset.currentIndex)) {
          case 0:
            if (sessionStorage.getItem('xiaoqu')) {
              this.currentIndex = 0
            }
            break
          case 1:
            if (sessionStorage.getItem('xiaoqu') || sessionStorage.getItem('dongzuo')) {
              this.currentIndex = 1
            }
            break
          case 2:
            if ((sessionStorage.getItem('xiaoqu') && sessionStorage.getItem('dongzuo')) || sessionStorage.getItem('danyuan')) {
              this.currentIndex = 2
            }
            break
          case 3:
            if ((sessionStorage.getItem('xiaoqu') && sessionStorage.getItem('dongzuo') && sessionStorage.getItem('danyuan')) || sessionStorage.getItem('louceng')) {
              this.currentIndex = 3
            }
            break
          case 4:
            if ((sessionStorage.getItem('xiaoqu') && sessionStorage.getItem('dongzuo') && sessionStorage.getItem('danyuan') && sessionStorage.getItem('louceng')) || sessionStorage.getItem('menpaihao')) {
              this.currentIndex = 4
            }
            break
        }
      },
      doSearch (bool) {
        if (bool && (this.searchTxt == '' || this.searchTxt.trim() == '')) {
          return
        }
        let params = {}
        switch (Number(this.currentIndex)) {
          case 0:
            params = {
              userId: sessionStorage.getItem('userId'),
              compId: sessionStorage.getItem('compId'),
              busiType: sessionStorage.getItem('busiType'),
              name: this.searchTxt,
            }
            this.$ajaxPost('/query_comm_name', params).then((res) => {
              console.log(res)
              this.resultList = res
            })
            break
          case 1:
            params = {
              currentUserId: sessionStorage.getItem('userId'),
              id: JSON.parse(sessionStorage.getItem('xiaoqu')).id,
              type: 0
            }
            this.$ajaxPost('/query_houses_info', params).then((res) => {
              console.log(res)
              this.resultList = res
            })
            break
          case 2:
            params = {
              currentUserId: sessionStorage.getItem('userId'),
              id: JSON.parse(sessionStorage.getItem('dongzuo')).id,
              type: 1
            }
            this.$ajaxPost('/query_houses_info', params).then((res) => {
              console.log(res)
              this.resultList = res
            })
            break
          case 3:
            params = {
              currentUserId: sessionStorage.getItem('userId'),
              id: JSON.parse(sessionStorage.getItem('danyuan')).id,
              type: 2
            }
            this.$ajaxPost('/query_houses_info', params).then((res) => {
              console.log(res)
              this.resultList = res
            })
            break
          case 4:
            params = {
              currentUserId: sessionStorage.getItem('userId'),
              id: JSON.parse(sessionStorage.getItem('louceng')).id,
              type: 3
            }
            this.$ajaxPost('/query_houses_info', params).then((res) => {
              console.log(res)
              this.resultList = res
            })
            break
        }
      },
      changeChoosed (id, name) {
        this.choosedId = id
        this.searchTxt = ''
        this.resultList = []
        switch (Number(this.currentIndex)) {
          case 0:
            this.xiaoqu.id = id
            this.xiaoqu.id = '19964401'
            this.xiaoqu.name = name
            sessionStorage.setItem('xiaoqu', JSON.stringify(this.xiaoqu))
            this.choosedResultTxt += this.xiaoqu.name
            this.currentIndex = 1
            this.doSearch()
            break
          case 1:
            this.dongzuo.id = id
            this.dongzuo.name = name
            sessionStorage.setItem('dongzuo', JSON.stringify(this.dongzuo))
            this.choosedResultTxt += this.dongzuo.name
            this.currentIndex = 2
            this.doSearch()
            break
          case 2:
            this.danyuan.id = id
            this.danyuan.name = name
            sessionStorage.setItem('danyuan', JSON.stringify(this.danyuan))
            this.choosedResultTxt += this.danyuan.name
            this.currentIndex = 3
            this.doSearch()
            break
          case 3:
            this.louceng.id = id
            this.louceng.name = name
            sessionStorage.setItem('louceng', JSON.stringify(this.louceng))
            this.choosedResultTxt += this.louceng.name
            this.currentIndex = 4
            this.doSearch()
            break
          case 4:
            this.menpaihao.id = id
            this.menpaihao.name = name
            sessionStorage.setItem('menpaihao', JSON.stringify(this.menpaihao))
            this.choosedResultTxt += this.menpaihao.name
            this.currentIndex = ''
            this.$router.push({
              name: 'step1'
            })
            break
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .main{
    padding: 0 30px;
  }
  .search-box{
    margin: 30px auto;
    align-items: center;
    justify-content: space-between;
    &>div{
      padding: 10px;
      background: #F5F5F5;
      border-radius: 8px;
      align-items: center;
      justify-content: space-between;
      flex: 1;
    }
    &>span{
      font-size: 26px;
      padding: 8px 10px;
    }
  }
  .search{
    flex: 1;
    & img{
      width: 25px;
      height: 25px;
      margin-right: 20px;
    }
    & input{
      font-size: 24px;
    }
  }
  .icon-close{
    width: 34px;
    height: 34px;
  }
  .tab-box{
    align-items: center;
    justify-content: space-between;
    background: #F5F5F5;
    border-radius: 8px;
    overflow: hidden;
    font-size: 24px;
    & li{
      padding: 8px 10px;
      border-radius: 8px;
    }
    & li.current {
      background: #fdc915;
    }
  }
  .result-list-box{
    margin: 30px auto;
    height: 800px;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 26px;
    color: #888;
    padding-bottom: 30px;
    & li{
      padding: 20px 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #E0E0E0;
    }
    & li.choosed{
      color: #fdc915;
    }
    & li img{
      display: none;
      width: 30px;
      height: 30px;
    }
    & li.choosed img{
      display: block;
    }
  }
  .add-nx-btn{
    display: inline-block;
    font-size: 28px;
    padding: 20px 40px;
    background: #fdc915;
    border-radius: 50px;
  }
  .chooded-result{
    padding: 30px;
  }
</style>
