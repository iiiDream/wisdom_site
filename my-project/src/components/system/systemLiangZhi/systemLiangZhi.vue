<template>
    <div id="systemLiangZhi">
        <!-- 阴影框 -->
        <div class="shadow-box"></div>
        <!-- 侧导航栏 -->
        <div class="side-nav">
            <ul>
                <li class="button">
                    <router-link to="/systemHome" class="return" v-show="retractState"></router-link>
                    <a class="retract" @click="retractClick"></a>
                </li>
                <li @click="isActiveShow('/systemLiangZhi_home')">
                    <router-link to="/systemLiangZhi_home" :class="activeShow=='/systemLiangZhi_home'||activeShow=='/systemLiangZhi'?'active':''">
                        <div class="icon"></div>
                        <span>首页</span>
                    </router-link>
                </li>
                <li @click="isActiveShow('/systemLiangZhi_contractors')">
                    <router-link to="/systemLiangZhi_contractors" :class="activeShow=='/systemLiangZhi_contractors'?'active':''">
                        <div class="icon"></div>
                        <span>参建单位</span>
                    </router-link>
                </li>
                <li @click="isActiveShow('/systemLiangZhi_team')">
                    <router-link to="/systemLiangZhi_team" :class="activeShow=='/systemLiangZhi_team'?'active':''">
                        <div class="icon"></div>
                        <span>参建班组</span>
                    </router-link>
                </li>
                <li @click="isActiveShow('/systemLiangZhi_personnel')">
                    <router-link to="systemLiangZhi_personnel" :class="activeShow=='/systemLiangZhi_personnel'?'active':''">
                        <div class="icon"></div>
                        <span>项目人员</span>
                    </router-link>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>考勤记录</span>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>异常处理</span>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>黑名单</span>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>奖罚记录</span>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>工资上传</span>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>设备管理</span>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>两制服务</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 内容 -->
        <router-view class="router-box"></router-view>
    </div>
</template>

<style lang="less">
    #systemLiangZhi {
        width: 100%;
        display: flex;
        position: relative;
        background-color: #f7f7f7;
        .shadow-box {
            width: 100%;
            height: .15rem;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 20;
            box-shadow: 0 .07rem .14rem -0.1rem #666 inset;
        }
        .side-nav {
            width: 1.75rem;
            height: 10rem;
            overflow: hidden;
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
                            width: .6rem;
                            height: .59rem;
                            display: inline-block;
                        }
                        span {
                            width: .8rem;
                            vertical-align: top;
                            text-align: justify;
                            display: inline-block;
                            text-align-last:justify;
                        }
                    }
                    a:hover {
                        background-color: #2d83bb;
                    }
                    .active {
                        z-index: 10;
                        background-color: #378dc5;
                    }
                }
                .button {
                    position: relative;
                    a {
                        top: 50%;
                        border: 0;
                        padding: 0;
                        width: .2rem;
                        height: .2rem;
                        position: absolute;
                        background-color: #fff;
                        transform: translateY(-50%);
                    }
                    a:hover {
                        background-color: #fff;
                    }
                    .return {
                        left: .4rem;
                    }
                    .retract {
                        right: .4rem;
                    }
                }
            }
        }
        .router-box {
            flex: 1;
            padding-top: .4rem;
            padding-left: .3rem;
            padding-right: .3rem;
        }
    }
</style>

<script>
export default {
    data() {
        return {
            retractState: true, // 侧导航栏缩进状态
            activeShow: '/systemLiangZhi_home' // 当前选中的模块
        }
    },
    created() {
        this.getPath()
    },
    methods: {
        // 侧导航栏缩进
        retractClick() {
            if (this.retractState) {
                $('.side-nav').animate({
                    width:'.6rem'
                },500)
                $('.retract').animate({
                    right:'1.35rem'
                })
                this.retractState = !this.retractState
            } else {
                $('.side-nav').animate({
                    width:'1.75rem'
                },500)
                $('.retract').animate({
                    right:'.4rem'
                })
                this.retractState = !this.retractState
            }
        },

        // 选择模块
        isActiveShow(i) {
            this.activeShow=i;
        },

        // 页面刷新时重新赋值
        getPath(){
            this.activeShow=this.$route.path;
        }
    }
}
</script>