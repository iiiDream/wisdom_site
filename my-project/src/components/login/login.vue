<template>
    <!-- 登录页面主体区域 -->
    <div class="main">
        <!-- 导航栏 -->
        <div class="nav">
            <div class="nav-logo">
                <div class="logo-img"></div>
                <div class="logo-URL">
                    <p>工地系统云平台</p>
                    <span>lz.hj-tec.com</span>
                </div>
                <span>智慧工地第一品牌</span>
            </div>
            <ul>
                <li>
                    <a>企业邮箱</a>
                </li>
                <li>
                    <a>VIP邮箱</a>
                </li>
                <li>
                    <a>国外用户登录</a>
                </li>
                <li>
                    <a>手机版</a>
                </li>
                <li>
                    <a>电脑版</a>
                </li>
                <li>
                    <a>帮助</a>
                </li>
                <li>
                    <a>常见问题</a>
                </li>
                <li>
                    <a>私人助理</a>
                </li>
                <li>
                    <a>登录反馈</a>
                </li>
            </ul>
        </div>
        <!-- 主体内容 -->
        <div class="content">
            <!-- 登录框 -->
            <div class="login">
                <div class="login-title">
                    用户登录
                </div>
                <div class="from">
                    <i class="user"></i>
                    <input type="text" placeholder="请输入账号" v-model="user_name" @keyup.enter="logined">
                    <i class="password"></i>
                    <input type="password" placeholder="请输入密码" v-model="pwd" @keyup.enter="logined">
                    <a @click="logined"></a>
                </div>
                <div class="logo"></div>
                <div class="copyright">
                    虎匠公司版权所有©1997-2019
                </div>
                <div class="light"></div>
            </div>
        </div>
        <!-- 底部通栏 -->
        <div class="bottom"></div>
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
            // if(this.user_name == '123' && this.pwd=='123'){
            //     localStorage.setItem('islogin','true');
            //     this.$router.push({path:'/home'})
            // }else{
            //     alert('账号或密码错误！请重新输入')
            //     this.user_name = ''
            //     this.pwd = ''
            // }
            // console.log(this.$md5(this.pwd))
            this.$axios.post('/lz/wisdom/wisdomLogin',{account:this.user_name,password:this.$md5(this.pwd)}).then(
                res => {
                    console.log(res.data)
                    if (res.data.msg != '账户或密码错误') {
                        localStorage.setItem('islogin','true')
                        localStorage.setItem('pid',res.data.pid)
                         this.$router.push({path:'/home'})
                    } else {
                        alert('账号或密码错误！请重新输入')
                        this.user_name = ''
                        this.pwd = ''
                    }
                }
            )
        }
    },
}
</script>

<style scoped>
    .main {
        height: 10.8rem;
        background-color: #fff;
    }
    .nav {
        height: 1.65rem;
        padding-top: .99rem;
    }
    .bottom {
        height: 1.65rem;
    }
    .content {
        width: 19.2rem;
        height: 7.5rem;
        background-image: url('../../../static/images/login_bg.png');
        background-size: contain;
        position: relative;
    }
    /* 登录框样式 */
    .content .login {
        width: 3.99rem;
        height: 4.17rem;
        background-image: url('../../../static/images/login_border.png');
        background-size: contain;
        position: absolute;
        right: 4.2rem;
        top: 1.44rem;
        padding-top: .38rem;
    }
    .content .login-title {
        color: #fff;
        font-size: .31rem;
        font-weight: bolder;
        line-height: .31rem;
        text-align: center;
    }
    .content .from {
        margin-top: .52rem;
        position: relative;
    }
    .content .from input {
        width: 2.92rem;
        height: .38rem;
        background-image: url('../../../static/images/login_input.png');
        background-size: contain;
        padding-left: .43rem;
        position: absolute;
        z-index: 10;
        left: 50%;
        transform: translate(-50%);
    }
    .content .from input:nth-child(4) {
        margin-top: .63rem;
    }
    .content .from a {
        width: 2.92rem;
        height: .38rem;
        background-image: url('../../../static/images/login_button.png');
        background-size: contain;
        position: absolute;
        z-index: 10;
        left: 50%;
        transform: translate(-50%);
        margin-top: 1.27rem;
    }
    .content .from i {
        position: absolute;
        width: .15rem;
        height: .15rem;
        background-size: contain;
    }
    .content .from .user {
        background-image: url('../../../static/images/login_user.png');
        left: .68rem;
        top: .11rem;
        z-index: 99;
    }
    .content .from .password {
        background-image: url('../../../static/images/login_password.png');
        left: .68rem;
        top: .77rem;
        z-index: 99;
    }
    .content .logo {
        width: 1.07rem;
        height: .19rem;
        margin-top: 2.17rem;
        background-image: url('../../../static/images/login_logo.png');
        background-size: contain;
        position: absolute;
        z-index: 10;
        left: 50%;
        transform: translate(-50%);
    }
    .content .copyright {
        font-size: .12rem;
        text-align: center;
        color: #d6d8de;
        line-height: .12rem;
        margin-top: 2.48rem;
        position: absolute;
        z-index: 10;
        left: 50%;
        transform: translate(-50%);
    }
    .content .light {
        width: 19.2rem;
        height: 7.5rem;
        background-image: url('../../../static/images/login_light.png');
        background-size: contain;
        position: absolute;
        top: -1.44rem;
        right: -4.2rem;
        z-index: 1;
    }
    /* 导航栏样式 */
    .nav .nav-logo {
        float: left;
        height: .4rem;
        margin-left: 4.2rem;
    }
    .nav .nav-logo>div {
        float: left;
    }
    .nav .logo-img {
        width: .88rem;
        height: .4rem;
        background-image: url('../../../static/images/login_zh.png');
        background-size: contain;
    }
    .nav .logo-URL {
        height: .4rem;
        padding-right: .16rem;
        border-right: .01rem solid #848484;
        margin-left: .05rem;
        margin-right: .17rem;
    }
    .nav .logo-URL p {
        font-size: .18rem;
        color: #848484;
        height: .2rem;
        font-weight: 500;
    }
    .nav .logo-URL span {
        font-size: .16rem;
        color: #848484;
    }
    .nav .nav-logo>span {
        font-size: .15rem;
        color: #848484;
        line-height: .4rem;
    }
    .nav ul {
        padding-top: .2rem;
        float: left;
        margin-left: 1.82rem;
    }
    .nav ul li {
        float: left;
        margin-left: .15rem;
    }
    .nav ul li a {
        color: #848484;
        font-size: .13rem;
    }
    /* 占位符样式 */
    ::-webkit-input-placeholder { color:#848484;}
    ::-moz-placeholder { color:#848484;} /* firefox 19+ */
    :-ms-input-placeholder { color:#848484;} /* Internet Explorer 10+ */
    :-moz-placeholder { color:#848484;} /* firefox 14-18 */
</style>
