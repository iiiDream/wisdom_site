<template>
  <div class="content">
      <div class="kuang">
          <h1>欢迎使用</h1>
            <input type="text" class="name" v-model="user_name" @keyup.enter="logined">
            <input type="password" class="name pwd" v-model="pwd" @keyup.enter="logined">
            <a class="btn" @click="logined"></a>
            <div class="logo">
                <img src="../../../static/images/d_hlogo.png" alt="">
                <img src="../../../static/images/d_ylogo.png" alt="">
            </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user_name:'',
            pwd:''
        }
    },
    methods: {
        logined(){
            if(this.user_name == '123' && this.pwd=='123'){
                localStorage.setItem('islogin','true');
                this.$router.push({path:'/home'})
            }else{
                alert('账号或密码错误！请重新输入')
                this.user_name = ''
                this.pwd = ''
            }
        }
    },
};
</script>

<style lang="less" scoped>
.content {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  zoom: 1;
  background-size: cover;
  width: 100%;
  height: 10.3rem;
  background: url("../../../static/images/d_bg.png") no-repeat center 0;
//   background-size: contain;
  .kuang{
    position: absolute;
    width: 4.73rem;
    height: 5.33rem;
    top: 2.44rem;
    right: 3rem;
    background: url("../../../static/images/d_kuang.png") no-repeat center center;
    background-size: contain;
    text-align: center;
    color: #fff;
    font-size: .16rem;
    h1{
        margin-top: .78rem;
    }
    .name{
        width: 3.74rem;
        height: .56rem;
        background: url("../../../static/images/d_login.png") no-repeat center center;
        background-size: contain;
        color: #fff;
        padding-left: .55rem;
        font-size: .24rem;
        margin-top: .28rem;
    }
    .pwd{
        background: url("../../../static/images/d_psd.png") no-repeat center center;
        background-size: contain;
        margin-top: .5rem;
    }
    .btn{
        display: block;
        width: 3.74rem;
        height: .56rem;
        background: url("../../../static/images/d_btn.png") no-repeat center center;
        background-size: contain;
        margin:  .5rem auto;
    }
    .logo{
        margin-left: -0.3rem;
        margin-top: -0.26rem;
        img{
            margin-left: .3rem;
        }
    }
  }
}
</style>

