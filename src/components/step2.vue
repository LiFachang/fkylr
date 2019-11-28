<template>
  <div class="main">
    <img class="step-img" src="../assets/img/step2.png" alt="">
    <p class="title-1">填写信息</p>
    <div class="readonly-box">
      <span class="required">喷涂地址</span>
      <span>{{pentudizhi}}</span>
    </div>
    <div class="readonly-box">
      <span class="required">证载地址</span>
      <span>{{zhengzaidizhi}}</span>
    </div>
    <div class="readonly-box">
      <span class="required">其他地址</span>
      <span>{{qitadizhi}}</span>
    </div>
    <div class="readonly-box">
      <span class="required">规划用途</span>
      <span>{{guihuayongtuName}}</span>
    </div>

    <div class="huxing">
      <p class="title-2 title-required">户型</p>
      <div class="flex">
        <div @click="setPicker('shi')">
          <span>{{huxing.shi}}</span>室
        </div>
        <div @click="setPicker('ting')">
          <span>{{huxing.ting}}</span>厅
        </div>
        <div @click="setPicker('chu')">
          <span>{{huxing.chu}}</span>厨
        </div>
        <div @click="setPicker('wei')">
          <span>{{huxing.wei}}</span>卫
        </div>
        <div @click="setPicker('yang')">
          <span>{{huxing.yang}}</span>阳
        </div>
      </div>
    </div>
    <div class="chaoxiang">
      <p class="title-2 title-required">朝向</p>
      <div class="flex cx-box">
        <label class="lable-checkbox" v-for="(item, index) in chaoxiangList" :key="index">
          <input type="checkbox" v-model="chaoxiangChecked[item.valueCode]"><span>{{item.valueName}}</span>
        </label>
<!--        <label class="lable-checkbox">-->
<!--          <input type="checkbox">西-->
<!--        </label>-->
<!--        <label class="lable-checkbox">-->
<!--          <input type="checkbox">南-->
<!--        </label>-->
<!--        <label class="lable-checkbox">-->
<!--          <input type="checkbox">北-->
<!--        </label>-->
      </div>
    </div>
    <div class="big-input-box" v-if="guihuayongtuName != '车库'">
      <span class="required">总楼层数</span>
      <input type="text" v-model="zongloucengshu">
    </div>
    <div class="big-input-box">
      <span class="required">建筑面积</span>
      <input type="text" v-model="jianzhumianji">
      <span>平方米</span>
    </div>
    <div class="big-input-box" v-if="guihuayongtuName != '车库'">
      <span class="required">建筑年代</span>
      <input type="text" v-model="jianzhuniandai">
      <span>年</span>
    </div>
    <div @click="setPicker('jianzhuleixing')" class="big-input-box" v-if="guihuayongtuName != '别墅' && guihuayongtuName != '写字楼' && guihuayongtuName != '工业厂房' && guihuayongtuName != '车库'">
      <span class="required">建筑类型</span>
      <span>{{jianzhuleixing.valueName}}</span>
    </div>
    <div @click="setPicker('bieshuleixing')" class="big-input-box" v-if="guihuayongtuName == '别墅'">
      <span class="required">别墅类型</span>
      <span>{{bieshuleixing.valueName}}</span>
    </div>
    <div @click="setPicker('diejiafangshi')" class="big-input-box" v-if="guihuayongtuName == '别墅'">
      <span class="required">叠加方式</span>
      <span>{{diejiafangshi}}</span>
    </div>
    <div @click="setPicker('jianzhujiegou')" class="big-input-box" v-if="guihuayongtuName != '车库'">
      <span class="required">建筑结构</span>
      <span>{{jianzhujiegou.valueName}}</span>
    </div>
    <div @click="setPicker('chanquanxingzhi')" class="big-input-box">
      <span class="required">产权性质</span>
      <span>{{chanquanxingzhi.valueName}}</span>
    </div>
    <div @click="setPicker('huxingjiegou')" class="big-input-box" v-if="guihuayongtuName == '住宅' || guihuayongtuName == '公寓（住宅类）' || guihuayongtuName == '综合' || guihuayongtuName == '其他'">
      <span class="required">户型结构</span>
      <span>{{huxingjiegou.valueName}}</span>
    </div>
    <div @click="setPicker('zhuangxiuzhuangkuang')" class="big-input-box">
      <span class="required">装修状况</span>
      <span>{{zhuangxiuzhuangkuang.valueName}}</span>
    </div>
    <div @click="setPicker('shiyongxianzhuang')" class="big-input-box">
      <span class="required">使用现状</span>
      <span>{{shiyongxianzhuang.valueName}}</span>
    </div>
    <div @click="setPicker('laiyuanqudao')" class="big-input-box">
      <span class="required">来源渠道</span>
      <span>{{laiyuanqudao.valueName}}</span>
    </div>
    <div class="big-input-box">
      <span class="required">押金要求</span>
      <span></span>
    </div>
    <div @click="setPicker('tudinianxian')" class="big-input-box">
      <span class="">土地使用年限</span>
      <span>{{tudinianxian.valueName}}</span>
    </div>
    <div @click="setPicker('weishengjiandaichuang')" class="big-input-box" v-if="guihuayongtuName == '住宅' || guihuayongtuName == '别墅' || guihuayongtuName == '公寓（住宅类）' || guihuayongtuName == '综合' || guihuayongtuName == '其他'">
      <span class="">卫生间是否带窗</span>
      <span>{{weishengjiandaichuang.valueName}}</span>
    </div>
    <div class="big-input-box" v-if="guihuayongtuName != '住宅' || guihuayongtuName != '别墅' || guihuayongtuName != '公寓（住宅类）'">
      <span class="">首层层高</span>
      <input type="text">
      <span>米</span>
    </div>
    <div class="big-input-box" v-if="guihuayongtuName == '住宅' || guihuayongtuName == '别墅' || guihuayongtuName == '公寓（住宅类）' || guihuayongtuName == '综合' || guihuayongtuName == '其他'">
      <span class="">是否有私家花园</span>
      <span>1234</span>
    </div>
    <div class="big-input-box" v-if="guihuayongtuName == '住宅' || guihuayongtuName == '别墅' || guihuayongtuName == '公寓（住宅类）' || guihuayongtuName == '综合' || guihuayongtuName == '其他'">
      <span class="">是否有地下室</span>
      <span>rf</span>
    </div>
    <div class="big-input-box" v-if="guihuayongtuName == '别墅' || guihuayongtuName == '综合' || guihuayongtuName == '其他'">
      <span class="">是否有车库</span>
      <span>er</span>
    </div>
    <div @click="setPicker('gongnuan')" class="big-input-box">
      <span class="">供暖方式</span>
      <span>{{gongnuan.valueName}}</span>
    </div>
    <div @click="setPicker('kongtiao')" class="big-input-box" v-if="guihuayongtuName != '车库'">
      <span class="">空调方式</span>
      <span>{{kongtiao.valueName}}</span>
    </div>
    <div class="big-input-box" v-if="guihuayongtuName == '写字楼' || guihuayongtuName == '综合' || guihuayongtuName == '其他'">
      <span class="">等级</span>
      <span>ef</span>
    </div>
    <div class="big-input-box" v-if="guihuayongtuName == '住宅' || guihuayongtuName == '别墅' || guihuayongtuName == '公寓（住宅类）' || guihuayongtuName == '综合' || guihuayongtuName == '其他'">
      <span class="">车位数量</span>
      <input type="text" v-model="chewei">
    </div>
    <div class="big-input-box" v-if="guihuayongtuName == '公寓（商业类）' || guihuayongtuName == '商业' || guihuayongtuName == '工业厂房' || guihuayongtuName == '综合' || guihuayongtuName == '其他'">
      <span class="">总高</span>
      <span>ef</span>
    </div>
    <div class="big-input-box" v-if="guihuayongtuName == '公寓（商业类）' || guihuayongtuName == '商业' || guihuayongtuName == '写字楼' || guihuayongtuName == '工业厂房' || guihuayongtuName == '综合' || guihuayongtuName == '其他'">
      <span class="">进深</span>
      <span>ef</span>
    </div>
    <div class="big-input-box" v-if="guihuayongtuName == '公寓（商业类）' || guihuayongtuName == '商业' || guihuayongtuName == '写字楼' || guihuayongtuName == '工业厂房' || guihuayongtuName == '综合' || guihuayongtuName == '其他'">
      <span class="">净高</span>
      <span>ef</span>
    </div>
    <div class="big-input-box" v-if="guihuayongtuName == '公寓（商业类）' || guihuayongtuName == '商业' || guihuayongtuName == '写字楼' || guihuayongtuName == '工业厂房' || guihuayongtuName == '综合' || guihuayongtuName == '其他'">
      <span class="">门宽</span>
      <span>ef</span>
    </div>
    <div class="big-input-box" v-if="guihuayongtuName == '公寓（商业类）' || guihuayongtuName == '商业' || guihuayongtuName == '写字楼' || guihuayongtuName == '工业厂房' || guihuayongtuName == '综合' || guihuayongtuName == '其他'">
      <span class="">实得率</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">电梯</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">楼梯</span>
      <span>ef</span>
    </div>
    <div @click="setPicker('zhuangxiunianxian')" class="big-input-box">
      <span class="">装修年限</span>
      <span>{{zhuangxiunianxian.valueName}}</span>
    </div>
    <div @click="setPicker('tengkong')" class="big-input-box">
      <span class="">腾空时间</span>
      <span>{{tengkong.valueName}}</span>
    </div>
    <div @click="setPicker('chuzufangshi')" class="big-input-box">
      <span class="">出租方式</span>
      <span>{{chuzufangshi.valueName}}</span>
    </div>
    <div @click="setPicker('daoqiri')" class="big-input-box">
      <span class="">预计租赁到期日</span>
      <span>{{daoqiri}}</span>
    </div>
    <div class="big-input-box">
      <span class="">录入方式</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">房源状态</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">房源评价</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">轨道</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">审核状态</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">暖气费</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">物业费</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">证贷情况</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">契税票日期</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">房产证签发日期</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">所属人</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">录入人</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">房源归属人</span>
      <span>ef</span>
    </div>
    <awesome-picker
      ref="picker"
      :type="picker.type"
      :data="picker.data"
      @confirm="handlePickerConfirm">
    </awesome-picker>
    <awesome-picker
      ref="datePicker"
      type="date"
      @confirm="handleDatePickerConfirm">
    </awesome-picker>
    <div class="bottom-btn" @click="test">下一步</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      picker: {
        data: [],
        type: '' // date time string
      },
      ghyt: '',
      pentudizhi: '',
      zhengzaidizhi: '',
      qitadizhi: '',
      guihuayongtuId: '',
      guihuayongtuName: '住宅',
      pickerType: '',
      huxingPicker: [],
      jianzhuleixingPicker: [],
      jianzhujiegouPicker : [],
      chanquanxingzhiPicker: [],
      zhuangxiuzhuangkuangPicker: [],
      shiyongxianzhuangPicker: [],
      laiyuanqudaoPicker: [],
      tudinianxianPicker: [],
      gongnuanPicker: [],
      kongtiaoPicker: [],
      zhuangxiunianxianPicker: [],
      huxingjiegouPicker: [],
      chuzufangshiPicker: [],
      tengkongPicker: [],
      bieshuleixingPicker: [],
      diejiafangshiPicker: [],
      shifouPicker: [],
      chaoxiangList: [],
      huxing: {
        shi: '0',
        ting: '0',
        chu: '0',
        wei: '0',
        yang: '0'
      }, // 户型值
      chaoxiangChecked: {}, // 朝向值
      zongloucengshu: '', // 总楼层数
      jianzhumianji: '', // 建筑面积
      jianzhuniandai: '', // 建筑年代
      jianzhuleixing: {
        valueCode: '',
        valueName: ''
      }, // 建筑类型
      jianzhujiegou: {
        valueCode: '',
        valueName: ''
      }, // 建筑结构
      chanquanxingzhi: {
        valueCode: '',
        valueName: ''
      }, // 产权性质
      zhuangxiuzhuangkuang: {
        valueCode: '',
        valueName: ''
      }, // 装修状况
      shiyongxianzhuang: {
        valueCode: '',
        valueName: ''
      }, // 使用现状
      laiyuanqudao: {
        valueCode: '',
        valueName: ''
      }, // 来源渠道
      tudinianxian: {
        valueCode: '',
        valueName: ''
      }, // 土地使用年限
      gongnuan: {
        valueCode: '',
        valueName: ''
      }, // 供暖方式
      kongtiao: {
        valueCode: '',
        valueName: ''
      }, // 空调方式
      zhuangxiunianxian: {
        valueCode: '',
        valueName: ''
      }, // 装修年限
      huxingjiegou: {
        valueCode: '',
        valueName: ''
      }, // 户型结构
      chuzufangshi: {
        valueCode: '',
        valueName: ''
      }, // 出租方式
      tengkong: {
        valueCode: '',
        valueName: ''
      }, // 腾空时间
      bieshuleixing: {
        valueCode: '',
        valueName: ''
      }, // 别墅类型
      diejiafangshi: {
        valueCode: '',
        valueName: ''
      }, // 叠加方式
      chewei: '', //车位数量
      daoqiri: '', // 预计租赁到期日
    }
  },
  created () {
    let params = {
      currentUserId: sessionStorage.getItem('userId'),
      id: JSON.parse(sessionStorage.getItem('menpaihao')).id,
      businessType: sessionStorage.getItem('busiType')
    }
    this.$http.post('/house_customer/house_source_insert/findBuildingHouseDetailFromApp', params).then((res) => {
      console.log('++++', res)
      let data = res
      // 规划用途的id
      this.guihuayongtuId = data.guihuayongtu
      // 喷涂地址
      let txt = ''
      txt += data.spraypropertyname ? data.spraypropertyname : ''
      txt += data.spraybuildingname ? data.spraybuildingname : ''
      txt += data.sprayunitname ? data.sprayunitname : ''
      txt += data.sprayfloorname ? data.sprayfloorname : ''
      txt += data.sprayhouseno ? data.sprayhouseno : ''
      this.pentudizhi = txt
      // 证载地址
      txt = data.propertyname ? data.propertyname : ''
      txt += data.buildingname ? data.buildingname : ''
      txt += data.unitname ? data.unitname : ''
      txt += data.floorname ? data.floorname : ''
      txt += data.houseno ? data.houseno : ''
      this.zhengzaidizhi = txt
      // 其他地址
      txt = data.propertyothername ? data.propertyothername : ''
      txt += data.buildingothername ? data.buildingothername : ''
      txt += data.unitothersname ? data.unitothersname : ''
      txt += data.otherno ? data.otherno : ''
      this.qitadizhi = txt
      // 获取规划用途字典
      this.getGHYT()
    })
    let arrApi = [
      'locHouseType', // 获取户型
      'orientation', // 获取朝向
      'buildType', // 获取建筑类型
      'architecture', // 获取建筑结构
      'houseown', // 获取产权性质
      'housedecorationstatus', // 获取装修状况
      'useStatus', // 获取使用现状
      'customerSource', // 获取来源渠道
      'landUseLife', // 获取土地使用年限
      'heatingMode', // 获取供暖方式
      'airConditionType', // 获取空调方式
      'fitmentYear', // 获取装修年限
      'layoutStructure', // 获取户型结构
      'rentType', // 获取出租方式
      'freetimeType', // 获取腾空时间
      'villaType', // 获取别墅类型
      'BDStackeWay', // 获取叠加方式
      'haveOrNot', // 获取是否
    ]
    arrApi.forEach((item, index) => {
      this.getItemsOption(item)
    })

  },
  methods: {
    getGHYT () { // 获取规划用途字典
      let params = {
        userId: sessionStorage.getItem('userId'),
        keyCode: 'plannedUses'
      }
      params = this.$qs.stringify(params)
      let headers = {
         'Content-Type': 'application/x-www-form-urlencoded'
      }
      this.$http.post('/house_customer/house_source_insert/findDictinaryValueList', params, { headers }).then((res) => {
        res.forEach((item, index) => {
          if (Number(item.valueCode) == Number(this.guihuayongtuId)) {
            this.guihuayongtuName = item.valueName
            sessionStorage.setItem('guihuayongtu', JSON.stringify({
              id: this.guihuayongtuId,
              name: this.guihuayongtuName
            }))
          }
        })
      })
    },
    getItemsOption (type) {
      let params = {
        userId: sessionStorage.getItem('userId'),
        keyCode: type
      }
      params = this.$qs.stringify(params)
      let headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      this.$http.post('/house_customer/house_source_insert/findDictinaryValueList', params, { headers }).then((res) => {
        switch (type) {
          case 'locHouseType': // 户型
            res.forEach((item, index) => {
              this.huxingPicker.push(item)
            })
            break
          case 'orientation': // 朝向
            this.chaoxiangList = res
            res.forEach((item, index) => {
              this.chaoxiangChecked[item.valueCode] = false
            })
            break
          case 'buildType': // 建筑类型
            res.forEach((item, index) => {
              this.jianzhuleixingPicker.push(item)
            })
            break
          case 'architecture': // 建筑结构
            res.forEach((item, index) => {
              this.jianzhujiegouPicker.push(item)
            })
            break
          case 'houseown': // 产权性质
            res.forEach((item, index) => {
              this.chanquanxingzhiPicker.push(item)
            })
            break
          case 'housedecorationstatus': // 装修状况
            res.forEach((item, index) => {
              this.zhuangxiuzhuangkuangPicker.push(item)
            })
            break
          case 'useStatus': // 使用现状
            res.forEach((item, index) => {
              this.shiyongxianzhuangPicker.push(item)
            })
            break
          case 'customerSource': // 来源渠道
            res.forEach((item, index) => {
              this.laiyuanqudaoPicker.push(item)
            })
            break
          case 'landUseLife': // 土地使用年限
            res.forEach((item, index) => {
              this.tudinianxianPicker.push(item)
            })
            break
          case 'heatingMode': // 供暖方式
            res.forEach((item, index) => {
              this.gongnuanPicker.push(item)
            })
            break
          case 'airConditionType': // 空调方式
            res.forEach((item, index) => {
              this.kongtiaoPicker.push(item)
            })
            break
          case 'fitmentYear': // 装修年限
            res.forEach((item, index) => {
              this.zhuangxiunianxianPicker.push(item)
            })
            break
          case 'layoutStructure': // 户型结构
            res.forEach((item, index) => {
              this.huxingjiegouPicker.push(item)
            })
            break
          case 'rentType': // 出租方式
            res.forEach((item, index) => {
              this.chuzufangshiPicker.push(item)
            })
            break
          case 'freetimeType': // 腾空时间
            res.forEach((item, index) => {
              this.tengkongPicker.push(item)
            })
            break
          case 'villaType': // 别墅类型
            res.forEach((item, index) => {
              this.bieshuleixingPicker.push(item)
            })
            break
          case 'BDStackeWay': // 叠加方式
            res.forEach((item, index) => {
              this.diejiafangshiPicker.push(item)
            })
            break
        }

      })
    },
    setPicker (type) {
      this.pickerType = type
      this.picker.data = []
      let arr = []
      this.picker.type = 'String'
      switch (type) {
        case 'shi': case 'ting': case 'chu': case 'wei': case 'yang':
          this.huxingPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'jianzhuleixing':
          this.jianzhuleixingPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'jianzhujiegou':
          this.jianzhujiegouPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'chanquanxingzhi':
          this.chanquanxingzhiPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'zhuangxiuzhuangkuang':
          this.zhuangxiuzhuangkuangPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'shiyongxianzhuang':
          this.shiyongxianzhuangPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'laiyuanqudao':
          this.laiyuanqudaoPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'tudinianxian':
          this.tudinianxianPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'gongnuan':
          this.gongnuanPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'kongtiao':
          this.kongtiaoPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'zhuangxiunianxian':
          this.zhuangxiunianxianPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'huxingjiegou':
          this.huxingjiegouPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'chuzufangshi':
          this.chuzufangshiPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'tengkong':
          this.tengkongPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'bieshuleixing':
          this.bieshuleixingPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
        case 'daoqiri':
          this.$refs.datePicker.show()
          break
        case 'diejiafangshi':
          this.diejiafangshiPicker.forEach((item, index) => {
            arr.push(item.valueName)
          })
          break
      }
      if (type != 'daoqiri') {
        this.picker.data = [arr]
        this.$refs.picker.show()
      }
    },
    handlePickerConfirm (val) {
      switch (this.pickerType) {
        case "shi":
          this.huxingPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.huxing.shi = item.valueCode
            }
          })
          break
        case "ting":
          this.huxingPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.huxing.ting = item.valueCode
            }
          })
          break
        case "chu":
          this.huxingPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.huxing.chu = item.valueCode
            }
          })
          break
        case "wei":
          this.huxingPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.huxing.wei = item.valueCode
            }
          })
          break
        case "yang":
          this.huxingPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.huxing.yang = item.valueCode
            }
          })
          break
        case "jianzhuleixing":
          this.jianzhuleixingPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.jianzhuleixing.valueCode = item.valueCode
              this.jianzhuleixing.valueName = item.valueName
            }
          })
          break
        case "jianzhujiegou":
          this.jianzhujiegouPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.jianzhujiegou.valueCode = item.valueCode
              this.jianzhujiegou.valueName = item.valueName
            }
          })
          break
        case "chanquanxingzhi":
          this.chanquanxingzhiPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.chanquanxingzhi.valueCode = item.valueCode
              this.chanquanxingzhi.valueName = item.valueName
            }
          })
          break
        case "zhuangxiuzhuangkuang":
          this.zhuangxiuzhuangkuangPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.zhuangxiuzhuangkuang.valueCode = item.valueCode
              this.zhuangxiuzhuangkuang.valueName = item.valueName
            }
          })
          break
        case "shiyongxianzhuang":
          this.shiyongxianzhuangPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.shiyongxianzhuang.valueCode = item.valueCode
              this.shiyongxianzhuang.valueName = item.valueName
            }
          })
          break
        case "laiyuanqudao":
          this.laiyuanqudaoPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.laiyuanqudao.valueCode = item.valueCode
              this.laiyuanqudao.valueName = item.valueName
            }
          })
          break
        case "tudinianxian":
          this.tudinianxianPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.tudinianxian.valueCode = item.valueCode
              this.tudinianxian.valueName = item.valueName
            }
          })
          break
        case "gongnuan":
          this.gongnuanPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.gongnuan.valueCode = item.valueCode
              this.gongnuan.valueName = item.valueName
            }
          })
          break
        case "kongtiao":
          this.kongtiaoPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.kongtiao.valueCode = item.valueCode
              this.kongtiao.valueName = item.valueName
            }
          })
          break
        case "zhuangxiunianxian":
          this.zhuangxiunianxianPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.zhuangxiunianxian.valueCode = item.valueCode
              this.zhuangxiunianxian.valueName = item.valueName
            }
          })
          break
        case "huxingjiegou":
          this.huxingjiegouPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.huxingjiegou.valueCode = item.valueCode
              this.huxingjiegou.valueName = item.valueName
            }
          })
          break
        case "chuzufangshi":
          this.chuzufangshiPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.chuzufangshi.valueCode = item.valueCode
              this.chuzufangshi.valueName = item.valueName
            }
          })
          break
        case "tengkong":
          this.tengkongPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.tengkong.valueCode = item.valueCode
              this.tengkong.valueName = item.valueName
            }
          })
          break
        case "bieshuleixing":
          this.bieshuleixingPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.bieshuleixing.valueCode = item.valueCode
              this.bieshuleixing.valueName = item.valueName
            }
          })
          break
        case "daoqiri":
          this.daoqiri = val
          break
        case "diejiafangshi":
          this.diejiafangshiPicker.forEach((item, index) => {
            if (item.valueName == val[0].value) {
              this.diejiafangshi.valueCode = item.valueCode
              this.diejiafangshi.valueName = item.valueName
            }
          })
          break
      }
    },
    handleDatePickerConfirm (val) {
      switch (this.pickerType) {
        case "daoqiri":
          this.daoqiri = `${val[0].value}${val[1].value}${val[2].value}`
          break
      }

    },
    test () {
      this.$tips('123', 2000)
      console.log(this.chaoxiangChecked)
    }
  }
}
</script>

<style scoped lang="scss">
  .huxing{
    & .flex{
      flex-wrap: wrap;
    }
    & .flex>div{
      width: 33.3%;
      margin-bottom: 30px;
    }
    & .flex>div>span:first-child{
      padding: 10px 50px;
      border-radius: 40px;
      margin-right: 10px;
      border: 1px solid #E0E0E0;
    }
  }
  .cx-box{
    justify-content: space-around;
    & label{
      display: flex;
      align-items: center;
    }
  }
</style>
