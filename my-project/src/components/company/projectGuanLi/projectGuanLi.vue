<template>
    <div id="projectGuanLi">
        <!-- 顶部通栏 -->
        <div class="top">
            <div class="nav-logo">
                <a class="logo-box"></a>
                <i class="line"></i>
            </div>
            <div class="company">深圳市市政总公司</div>
            <div class="nav">
                <ul>
                    <li>
                        <router-link to="/homePage">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/companyGuanLi">公司管理</router-link>
                    </li>
                    <li>
                        <router-link to="/projectGuanLi" class="active">项目管理</router-link>
                    </li>
                </ul>
            </div>
            <div class="user">
                <el-dropdown trigger="click">
                    <a class="el-dropdown-link">
                        用户名
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </a>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div> 
        <!-- 页面主体 -->
        <div class="main">
            <!-- 侧导航栏 -->
            <div class="side-nav">
                <ul>
                    <li class="button">
                    </li>
                    <li @click="isActiveShow('/projectGuanLi_set')">
                        <router-link to="/projectGuanLi_set" :class="activeShow=='/projectGuanLi_set'||activeShow=='/projectGuanLi'?'active':''">
                            <div class="icon home"></div>
                            <span>项目设置</span>
                        </router-link>
                    </li>
                    <li @click="isActiveShow('/projectGuanLi_user')">
                        <router-link to="/projectGuanLi_user" :class="activeShow=='/projectGuanLi_user'?'active':''">
                            <div class="icon"></div>
                            <span>项目用户</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <!-- 内容 -->
            <router-view class="router-box"></router-view>
        </div>
    </div>
</template>

<style lang="less">
    #projectGuanLi {
        .top {
            width: 19.2rem;
            height: 0.8rem;
            padding-top: 0.24rem;
            background-size: cover;
            background: linear-gradient(to right, #6cc4ff, #489cff);
            >div {
                float: left;
            }
            .nav-logo {
                height: 0.24rem;
                .line {
                    display: inline-block;
                    width: 0.01rem;
                    height: 0.18rem;
                    margin-left: 0.16rem;
                    margin-bottom: 0.03rem;
                    background-color: #fff;
                    vertical-align: text-top;
                }
            }
            .logo-box {
                display: inline-block;
                height: 0.45rem;
                width: 1.24rem;
                background-image: url("../../../../static/images/yzt-whiteLogo.png");
                background-size: contain;
                margin-left: 0.24rem;
                vertical-align: top;
            }
            .company {
                margin-left: 0.16rem;
                font-size: 0.18rem;
                color: #fff;
                line-height: 0.24rem;
                vertical-align: text-top;
                text-shadow: .02rem .02rem .02rem #666;
            }
            .nav {
                margin-left: 0.99rem;
                ul {
                    li {
                        float: left;
                        a {
                            display: block;
                            font-size: 0.2rem;
                            color: #fff;
                            padding-left: 0.16rem;
                            padding-right: 0.16rem;
                            height: 0.56rem;
                            margin-left: 0.17rem;
                            &.active {
                                border-bottom: 0.04rem solid #fff;
                            }
                        }
                    }
                }
            }
            .user {
                float: right;
                margin-right: 0.36rem;
                a {
                    font-size: 0.2rem;
                    color: #fff;
                }
            }
        }
        .main {
            width: 100%;
            display: flex;
            position: relative;
            background-color: #f7f7f7;
            .side-nav {
                width: 1.75rem;
                height: 10rem;
                overflow: hidden;
                // display: inline-block;
                background-color: #54a4d7;
                ul {
                    width: 1.75rem;
                    li {
                        height: .6rem;
                        position: relative;
                        a {
                            width: 100%;
                            height: .6rem;
                            color: #fff;
                            font-size: .2rem;
                            line-height: .6rem;
                            position: absolute;
                            transition: all .5s;
                            border-bottom: .01rem solid #98c8e7;
                            .icon {
                                opacity: .5;
                                width: .6rem;
                                height: .59rem;
                                transition: all .5s;
                                display: inline-block;
                                background-repeat: no-repeat;
                                background-position: center center;
                            }
                            span {
                                width: .8rem;
                                vertical-align: top;
                                text-align: justify;
                                text-align-last:justify;
                                display: inline-block;
                            }
                            .home {
                                background-image: url('../../../../static/images/system-home.png');
                            }
                        }
                        a:hover {
                            background-color: #2d83bb;
                            .icon {
                                opacity: 1;
                            }
                        }
                        .active {
                            z-index: 10;
                            background-color: #378dc5;
                            .icon {
                                opacity: 1;
                            }
                        }
                    }
                    .button {
                        height: .38rem;
                        position: relative;
                        border-bottom: .01rem solid #98c8e7;
                    }
                }
            }
            .router-box {
                flex: 1;
                padding-top: 0.3rem;
                padding-left: 0.3rem;
                padding-right: 0.3rem;
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {
            activeShow: "/projectGuanLi_set" // 当前选中的模块
        }
    },
    created() {
        this.getPath()
    },
    methods: {
        // 选择模块
    isActiveShow(i) {
        this.activeShow = i;
        $(".sanjiao").hide();
        $(".subnav").hide();
    },
    // 页面刷新时重新赋值
    getPath() {
        this.activeShow = this.$route.path;
    },
    }
}
</script>