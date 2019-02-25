<template>
    <div class="pM">
        <!-- 顶部通栏 -->
        <div class="top">
            <div class="nav-logo">
                <a href="#" class="logo-box"></a>
                <i class="line"></i>
            </div>
            <div class="company">
                深圳市市政总公司
            </div>
            <div class="nav">
                <ul>
                    <li>
                        <router-link to="/homePage">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/projectManagement" class="active">项目管理</router-link>
                    </li>
                </ul>
            </div>
            <div class="user">
                <el-dropdown>
                    <a class="el-dropdown-link">
                        用户名<i class="el-icon-arrow-down el-icon--right"></i>
                    </a>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    /* 顶部样式 */
    .top {
        width: 19.2rem;
        height: .8rem;
        background-image: url('../../../static/images/homePage_nav.png');
        background-size: contain;
        padding-top: .24rem;
        >div {
            float: left;
        }
        .nav-logo {
            height: .24rem;
            .line {
                display: inline-block;
                width: .01rem;
                height: .18rem;
                margin-left: .16rem;
                margin-bottom: .03rem;
                background-color: #fff;
            }
        }
        .logo-box {
            display: inline-block;
            height: .24rem;
            width: 1.24rem;
            background-image: url('../../../static/images/login_logo.png');
            background-size: contain;
            margin-left: .24rem;
        }
        .company {
            margin-left: .16rem;
            font-size: .18rem;
            color: #fff;
            line-height: .24rem;
            vertical-align: text-top;
        }
        .nav {
            margin-left: .99rem;
            ul li {
                float: left;
                a {
                    display: block;
                    font-size: .2rem;
                    color: #fff;
                    padding-left: .16rem;
                    padding-right: .16rem;
                    height: .56rem;
                    margin-left: .17rem;
                }
                .active {
                    border-bottom: .04rem solid #fff;
                }
            }
        }
        .user {
            float: right;
            margin-right: .36rem;
            a {
                font-size: .2rem;
                color: #fff;
            }
        }
    }
</style>


