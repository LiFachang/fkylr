<template>
  <div class="main">
    <img class="step-img" src="../assets/img/step3.png" alt="">
    <p class="title-1">联系人信息</p>
    <div class="add-btn">+添加联系人</div>
    <div class="contact-list-box">
      <div>
        <table>
          <tr>
            <td>
              <span>联系人类别</span>
              <span>业主</span>
            </td>
            <td>
              <span>姓名</span>
              <span>啦啦啦</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>性别</span>
              <span>男士</span>
            </td>
            <td>
              <span>与产权人关系</span>
              <span>本人</span>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <span>号码</span>
              <span>18888888888</span>
            </td>
          </tr>
        </table>
        <div class="flex contact-btn-box">
          <div><img src="../assets/img/shanchu.png" alt="">删除联系人</div>
          <div><img src="../assets/img/bianji.png" alt="">编辑内容</div>
        </div>
      </div>
    </div>
    <div class="big-input-box">
      <span class="required">来源</span>
      <select>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
      </select>
    </div>
    <div class="big-input-box">
      <span class="required">请选择</span>
      <select>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
      </select>
    </div>

    <div v-if="false" class="fixed-box add-contact-box">
      <div>
        <p class="fixed-box-title">联系人信息</p>
        <div class="big-input-box">
          <span class="required">联系人类别</span>
          <select>
            <option value="1">1</option>
            <option value="1">2</option>
          </select>
        </div>
        <div class="big-input-box">
          <span class="required">姓名</span>
          <input type="text">
        </div>
        <div class="big-input-box">
          <span class="required">性别</span>
          <select>
            <option value="1">男</option>
            <option value="1">女</option>
          </select>
        </div>
        <div class="big-input-box">
          <span class="required">与产权人关系</span>
          <select>
            <option value="1">1</option>
            <option value="1">2</option>
          </select>
        </div>
        <div class="big-input-box">
          <span class="required">号码</span>
          <input type="text">
        </div>
        <div class="fixed-box-btn">
          <div>取消</div>
          <div>确定</div>
        </div>
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
  .add-btn{
    width: 393px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 30px;
    font-size: 26px;
    background: #F5F5F5;
    margin: 50px auto;
  }
  .contact-list-box{
    border-bottom: 1px solid #F5F5F5;
    padding-bottom: 20px;
    &>div{
      width: 655px;
      background: #F8F7F7;
      border-radius: 8px;
      overflow: hidden;
      margin: 30px auto;
    }
    &>div>table{
      width: 100%;
      padding: 30px;
      font-size: 26px;
    }
    & table td{
      padding: 8px;
    }
    & table td>span:first-child{
      color: #888;
      padding-right: 10px;
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
  .big-input-box{
    width: 655px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 26px;
    margin: 30px auto;
    border: 1px solid #E0E0E0;
    border-radius: 39px;
    padding: 0 30px;
    & .required:before{
      content: '*';
      color: red;
      margin-right: 10px;
    }
    &>span.required{
      width: auto;
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
  .add-contact-box{
    &>div{
      width: 715px;
      margin: 200px auto 0;
      background: #fff;
      border-radius: 24px;
      overflow: hidden;
    }
  }
  .contact-btn-box{
    justify-content: center;
    border-top: 1px solid #E3E3E7;
    font-size: 20px;
    &>div{
      width: 185px;
      height: 50px;
      border-radius: 25px;
      line-height: 50px;
      text-align: center;
      margin: 20px 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &>div>img{
      width: 19px;
      height: 19px;
      margin-right: 10px;
    }
    &>div:first-child{
      border: 1px solid #ED5353;
    }
    &>div:last-child{
      border: 1px solid #fdc915;
    }
  }
  .fixed-box{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    background: rgba(0,0,0,0.7);
    & .fixed-box-title{
      text-align: center;
      font-size: 32px;
      margin: 50px 0;
    }
    & .fixed-box-btn{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    & .fixed-box-btn>div{
      flex: 1;
      height: 100px;
      line-height: 100px;
      text-align: center;
      font-size: 32px;
    }
    & .fixed-box-btn>div:first-child{
      background: #fff;
      border-top: 2px solid #EEEFF4;
    }
    & .fixed-box-btn>div:last-child{
      background: #fdc915;
    }
  }
</style>
