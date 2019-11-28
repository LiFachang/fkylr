<template>
  <transition name="fade">
    <div class="confirm" v-if="isShow">
      <div class="con_box">
        <div class="context">
          <h6>{{text.type}}</h6>
          <p>{{text.msg}}</p>
          <div class="btn">
            <span @click="close()" v-if="text.btn.no">{{text.btn.no}}</span>
            <span @click="ok()" v-if="text.btn.ok">{{text.btn.ok}}</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    data() {
      return {
        isShow: true,
        text: {
          type: '提示',
          msg: '确定删除此条信息？',
          btn: {
            ok: '确定',
            no: '取消'
          }
        }
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
  .confirm {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .con_box {
    width: 75%;
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
  }

  .context {
    padding: 10px 0 0;
    text-align: center;
  }

  .context h6 {
    font-size: 24px;
    padding: 15px;
  }

  .context p {
    font-size: 20px;
    padding: 35px 15px 50px;
    overflow: hidden;
  }

  .btn {
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .btn span {
    flex: 1;
    text-align: center;
    padding: 25px 35px;
    color: white;
  }

  .btn span:nth-child(1) {
    background-color: #f1f1f1;
    color: #333;
  }

  .btn span:nth-child(2) {
    background-color: #FDC915;
  }
</style>
