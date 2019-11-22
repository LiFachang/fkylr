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
      <span>住宅</span>
    </div>

    <div class="huxing">
      <p class="title-2 title-required">户型</p>
      <div class="flex">
        <div>
          <span>1</span>室
        </div>
        <div>
          <span>1</span>厅
        </div>
        <div>
          <span>1</span>厨
        </div>
        <div>
          <span>1</span>卫
        </div>
        <div>
          <span>1</span>阳
        </div>
      </div>
    </div>
    <div class="chaoxiang">
      <p class="title-2 title-required">朝向</p>
      <div class="flex cx-box">
        <label class="lable-checkbox">
          <input type="checkbox">东
        </label>
        <label class="lable-checkbox">
          <input type="checkbox">西
        </label>
        <label class="lable-checkbox">
          <input type="checkbox">南
        </label>
        <label class="lable-checkbox">
          <input type="checkbox">北
        </label>
      </div>
    </div>
    <div class="big-input-box">
      <span class="required">总楼层数</span>
      <input type="text">
    </div>
    <div class="big-input-box">
      <span class="required">建筑面积</span>
      <input type="text">
      <span>平方米</span>
    </div>
    <div class="big-input-box">
      <span class="required">建筑年代</span>
      <span>哈哈</span>
      <span>年</span>
    </div>
    <div class="big-input-box">
      <span class="required">建筑类型</span>
      <span>1</span>
    </div>
    <div class="big-input-box">
      <span class="required">别墅类型</span>
      <span>ff</span>
    </div>
    <div class="big-input-box">
      <span class="required">叠加方式</span>
      <span>3</span>
    </div>
    <div class="big-input-box">
      <span class="required">建筑结构</span>
      <span>4</span>
    </div>
    <div class="big-input-box">
      <span class="required">产权性质</span>
      <span>fg</span>
    </div>
    <div class="big-input-box">
      <span class="required">户型结构</span>
      <span>34</span>
    </div>
    <div class="big-input-box">
      <span class="required">装修状况</span>
      <span>gefg</span>
    </div>
    <div class="big-input-box">
      <span class="required">使用现状</span>
      <span>234</span>
    </div>
    <div class="big-input-box">
      <span class="required">来源渠道</span>
      <span>fgf</span>
    </div>
    <div class="big-input-box">
      <span class="required">押金要求</span>
      <span>rfg</span>
    </div>
    <div class="big-input-box">
      <span class="">土地使用年限</span>
      <span>234r</span>
    </div>
    <div class="big-input-box">
      <span class="">卫生间是否带窗</span>
      <span>1234</span>
    </div>
    <div class="big-input-box">
      <span class="">首层层高</span>
      <input type="text">
      <span>米</span>
    </div>
    <div class="big-input-box">
      <span class="">是否有私家花园</span>
      <span>1234</span>
    </div>
    <div class="big-input-box">
      <span class="">是否有地下室</span>
      <span>rf</span>
    </div>
    <div class="big-input-box">
      <span class="">是否有车库</span>
      <span>er</span>
    </div>
    <div class="big-input-box">
      <span class="">供暖方式</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">空调方式</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">等级</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">车位数量</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">总高</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">进深</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">净高</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">门宽</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
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
    <div class="big-input-box">
      <span class="">装修年限</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">腾空时间</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">出租方式</span>
      <span>ef</span>
    </div>
    <div class="big-input-box">
      <span class="">预计租赁到期日</span>
      <span>ef</span>
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
      @cancel="handlePickerCancel"
      @confirm="handlePickerConfirm">
    </awesome-picker>
    <div class="bottom-btn">下一步</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      picker: {
        data: [
          ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'],
        ],
        type: ''
      },
      ghyt: '',
      pentudizhi: '',
      zhengzaidizhi: '',
      qitadizhi: '',
      guihuayongtu: ''
    }
  },
  created () {
    this.guihuayongtu = '住宅'
    // let params = {
    //   currentUserId: sessionStorage.getItem('userId'),
    //   id: JSON.parse(sessionStorage.getItem('menpaihao')).id,
    //   businessType: sessionStorage.getItem('busiType')
    // }
    // this.$ajaxPost('/find_building_house_detail', params).then((res) => {
    //   // 喷涂地址
    //   let txt = ''
    //   txt += res.spraypropertyname ? res.spraypropertyname : ''
    //   txt += res.spraybuildingname ? res.spraybuildingname : ''
    //   txt += res.sprayunitname ? res.sprayunitname : ''
    //   txt += res.sprayfloorname ? res.sprayfloorname : ''
    //   txt += res.sprayhouseno ? res.sprayhouseno : ''
    //   this.pentudizhi = txt
    //   // 证载地址
    //   txt = res.propertyname ? res.propertyname : ''
    //   txt += res.buildingname ? res.buildingname : ''
    //   txt += res.unitname ? res.unitname : ''
    //   txt += res.floorname ? res.floorname : ''
    //   txt += res.houseno ? res.houseno : ''
    //   this.zhengzaidizhi = txt
    //   // 其他地址
    //   txt = res.propertyothername ? res.propertyothername : ''
    //   txt += res.buildingothername ? res.buildingothername : ''
    //   txt += res.unitothersname ? res.unitothersname : ''
    //   txt += res.otherno ? res.otherno : ''
    //   this.qitadizhi = txt
    //   // 规划用途
    //   this.guihuayongtu = '住宅'
    // })
  },
  methods: {
    showPicker (type) {
      this.picker.type = type
      this.$refs.picker.show()
    },
    handlePickerCancel () {

    },
    handlePickerConfirm (val) {
      console.log(val)
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
