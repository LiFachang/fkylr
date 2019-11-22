<template>
  <div>
    <!--住宅-->
    <div v-if="false">
      <div>
        <p class="title-2 title-required">户型</p>
        <div class="flex hx-box">
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="22">22</option>
                <option value="33">33</option>
              </select>
            </label>
            <span>室</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厅</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厨</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>卫</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>阳</span>
          </div>
        </div>
      </div>
      <div>
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
        <select>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
        </select>
        <span>年</span>
      </div>
      <div class="big-input-box">
        <span class="required">建筑类型</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">建筑结构</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">产权性质</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">户型结构</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">装修状况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">使用现状</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">来源渠道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">押金要求</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">土地使用年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">卫生间是否带窗</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">是否有私家花园</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">是否有地下室</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">供暖方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">空调方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">车位数量</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">电梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">楼梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">装修年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">腾空时间</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">出租方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">预计租赁到期日</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">录入方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源评价</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">轨道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">审核状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">暖气费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">物业费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">证贷情况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">契税票日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">房产证签发日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">所属人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">录入人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">房源归属人</span>
        <input type="text">
      </div>
    </div>
    <!--别墅-->
    <div v-if="false">
      <div>
        <p class="title-2 title-required">户型</p>
        <div class="flex hx-box">
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="22">22</option>
                <option value="33">33</option>
              </select>
            </label>
            <span>室</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厅</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厨</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>卫</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>阳</span>
          </div>
        </div>
      </div>
      <div>
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
        <select>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
        </select>
        <span>年</span>
      </div>
      <div class="big-input-box">
        <span class="required">别墅类型</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">叠加方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">建筑结构</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">产权性质</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">装修状况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">使用现状</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">来源渠道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">押金要求</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">土地使用年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">卫生间是否带窗</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">是否有私家花园</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">是否有地下室</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">是否有车库</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">供暖方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">空调方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">车位数量</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">电梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">楼梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">装修年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">腾空时间</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">出租方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">预计租赁到期日</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">录入方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源评价</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">轨道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">审核状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">暖气费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">物业费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">证贷情况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">契税票日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">房产证签发日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">所属人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">录入人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">房源归属人</span>
        <input type="text">
      </div>
    </div>
    <!--公寓（住宅类）-->
    <div v-if="false">
      <div>
        <p class="title-2 title-required">户型</p>
        <div class="flex hx-box">
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="22">22</option>
                <option value="33">33</option>
              </select>
            </label>
            <span>室</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厅</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厨</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>卫</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>阳</span>
          </div>
        </div>
      </div>
      <div>
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
        <select>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
        </select>
        <span>年</span>
      </div>
      <div class="big-input-box">
        <span class="required">建筑类型</span>
        <select>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
        </select>
        <span>年</span>
      </div>
      <div class="big-input-box">
        <span class="required">建筑结构</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">产权性质</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">户型结构</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">装修状况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">使用现状</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">来源渠道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">押金要求</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">土地使用年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">卫生间是否带窗</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">是否有私家花园</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">是否有地下室</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">供暖方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">空调方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">车位数量</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">电梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">楼梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">装修年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">腾空时间</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">出租方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">预计租赁到期日</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">录入方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源评价</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">轨道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">审核状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">暖气费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">物业费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">证贷情况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">契税票日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">房产证签发日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">所属人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">录入人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">房源归属人</span>
        <input type="text">
      </div>
    </div>
    <!--公寓（商业类）和商业-->
    <div v-if="false">
      <div>
        <p class="title-2 title-required">户型</p>
        <div class="flex hx-box">
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="22">22</option>
                <option value="33">33</option>
              </select>
            </label>
            <span>室</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厅</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厨</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>卫</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>阳</span>
          </div>
        </div>
      </div>
      <div>
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
        <select>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
        </select>
        <span>年</span>
      </div>
      <div class="big-input-box">
        <span class="required">建筑类型</span>
        <select>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
        </select>
        <span>年</span>
      </div>
      <div class="big-input-box">
        <span class="required">建筑结构</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">产权性质</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">装修状况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">使用现状</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">来源渠道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">押金要求</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">土地使用年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">首层层高</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">供暖方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">空调方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">总高</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">进深</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">净高</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">门宽</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">实得率</span>
        <input type="text">
        <span>%</span>
      </div>
      <div class="big-input-box">
        <span class="">电梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">楼梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">装修年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">腾空时间</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">出租方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">预计租赁到期日</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">录入方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源评价</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">轨道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">审核状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">暖气费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">物业费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">证贷情况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">契税票日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">房产证签发日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">所属人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">录入人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">房源归属人</span>
        <input type="text">
      </div>
    </div>
    <!--写字楼-->
    <div v-if="false">
      <div>
        <p class="title-2 title-required">户型</p>
        <div class="flex hx-box">
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="22">22</option>
                <option value="33">33</option>
              </select>
            </label>
            <span>室</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厅</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厨</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>卫</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>阳</span>
          </div>
        </div>
      </div>
      <div>
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
        <select>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
        </select>
        <span>年</span>
      </div>
      <div class="big-input-box">
        <span class="required">建筑结构</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">产权性质</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">装修状况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">使用现状</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">来源渠道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">押金要求</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">土地使用年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">首层层高</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">供暖方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">空调方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">等级</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">进深</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">净高</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">门宽</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">实得率</span>
        <input type="text">
        <span>%</span>
      </div>
      <div class="big-input-box">
        <span class="">电梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">楼梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">装修年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">腾空时间</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">出租方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">预计租赁到期日</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">录入方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源评价</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">轨道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">审核状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">暖气费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">物业费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">证贷情况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">契税票日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">房产证签发日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">所属人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">录入人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">房源归属人</span>
        <input type="text">
      </div>
    </div>
    <!--工业厂房-->
    <div v-if="false">
      <div>
        <p class="title-2 title-required">户型</p>
        <div class="flex hx-box">
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="22">22</option>
                <option value="33">33</option>
              </select>
            </label>
            <span>室</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厅</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厨</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>卫</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>阳</span>
          </div>
        </div>
      </div>
      <div>
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
        <select>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
        </select>
        <span>年</span>
      </div>
      <div class="big-input-box">
        <span class="required">建筑结构</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">产权性质</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">装修状况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">使用现状</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">来源渠道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">押金要求</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">土地使用年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">首层层高</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">供暖方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">空调方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">总高</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">进深</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">净高</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">门宽</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">实得率</span>
        <input type="text">
        <span>%</span>
      </div>
      <div class="big-input-box">
        <span class="">电梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">楼梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">装修年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">腾空时间</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">出租方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">预计租赁到期日</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">录入方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源评价</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">轨道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">审核状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">暖气费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">物业费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">证贷情况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">契税票日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">房产证签发日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">所属人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">录入人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">房源归属人</span>
        <input type="text">
      </div>
    </div>
    <!--车库-->
    <div v-if="false">
      <div>
        <p class="title-2 title-required">户型</p>
        <div class="flex hx-box">
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="22">22</option>
                <option value="33">33</option>
              </select>
            </label>
            <span>室</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厅</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厨</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>卫</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>阳</span>
          </div>
        </div>
      </div>
      <div>
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
        <span class="required">建筑面积</span>
        <input type="text">
        <span>平方米</span>
      </div>
      <div class="big-input-box">
        <span class="required">产权性质</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">装修状况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">使用现状</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">来源渠道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">押金要求</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">土地使用年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">首层层高</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">供暖方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">总高</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">进深</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">净高</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">门宽</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">实得率</span>
        <input type="text">
        <span>%</span>
      </div>
      <div class="big-input-box">
        <span class="">电梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">楼梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">装修年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">腾空时间</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">出租方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">预计租赁到期日</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">录入方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源评价</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">轨道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">审核状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">暖气费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">物业费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">证贷情况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">契税票日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">房产证签发日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">所属人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">录入人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">房源归属人</span>
        <input type="text">
      </div>
    </div>
    <!--综合和其他-->
    <div v-if="false">
      <div>
        <p class="title-2 title-required">户型</p>
        <div class="flex hx-box">
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="22">22</option>
                <option value="33">33</option>
              </select>
            </label>
            <span>室</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厅</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>厨</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>卫</span>
          </div>
          <div class="select-box">
            <label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <span>阳</span>
          </div>
        </div>
      </div>
      <div>
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
        <select>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
        </select>
        <span>年</span>
      </div>
      <div class="big-input-box">
        <span class="required">建筑类型</span>
        <select>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
        </select>
        <span>年</span>
      </div>
      <div class="big-input-box">
        <span class="required">建筑结构</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">产权性质</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">户型结构</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">装修状况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">使用现状</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">来源渠道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="required">押金要求</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">土地使用年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">卫生间是否带窗</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">首层层高</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">私家花园</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">是否有地下室</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">是否有车库</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">等级</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">车位数量</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">供暖方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">空调方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">总高</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">进深</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">净高</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">门宽</span>
        <input type="text">
        <span>米</span>
      </div>
      <div class="big-input-box">
        <span class="">实得率</span>
        <input type="text">
        <span>%</span>
      </div>
      <div class="big-input-box">
        <span class="">电梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">楼梯</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">装修年限</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">腾空时间</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">出租方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">预计租赁到期日</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">录入方式</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">房源评价</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">轨道</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">审核状态</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">暖气费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">物业费</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">证贷情况</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="big-input-box">
        <span class="">契税票日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">房产证签发日期</span>
        <input type="date">
      </div>
      <div class="big-input-box">
        <span class="">所属人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">录入人</span>
        <input type="text">
      </div>
      <div class="big-input-box">
        <span class="">房源归属人</span>
        <input type="text">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

</style>
