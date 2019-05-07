<template>
    <div id="systemHeader">
        <div class="float-left">
            <a class="logo"></a>
            <div class="line"></div>
            <div class="project-name">中国市政建筑深圳某某某项目</div>
        </div>
        <div class="float-right">
            <a class="message">
                消息
            </a>
            <a class="home">
                首页
            </a>
            <a class="user">
                <el-dropdown>
                    <a class="el-dropdown-link">
                        用户名
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </a>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人设置</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </a>
        </div>
    </div>
</template>

<style lang="less">
    #systemHeader {
        width: 100%;
        height: .8rem;
        background: linear-gradient(to right, #98e2fb, #5db4f8);
        .float-left {
            float: left;
            height: .8rem;
            line-height: .8rem;
            padding-left: .24rem;
            a {
                width: 1.22rem;
                height: .22rem;
                display: inline-block;
                vertical-align: middle;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center center;
                background-image: url('../../../static/images/login_logo.png');
            }
            div {
                color: #fff;
                display: inline-block;
            }
            .line {
                height: .2rem;
                width: .01rem;
                // line-height: .8rem;
                margin-left: .16rem;
                margin-right: .16rem;
                vertical-align: middle;
                background-color: #fff;
            }
            .project-name {
                font-size: .2rem;
                vertical-align: middle;
            }
        }
        .float-right {
            float: right;
            margin-top: .27rem;
            padding-right: .3rem;
            >a {
                color: #fff;
                font-size: .2rem;
                a {
                    color: #fff;
                    font-size: .2rem;
                }
            }
            .user {
                margin-left: .56rem;
            }
            .home {
                margin-left: .38rem;
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

