<template>
    <div id="systemSet">
        <!-- 阴影框 -->
        <div class="shadow-box"></div>
        <!-- 侧导航栏 -->
        <div class="side-nav">
            <ul>
                <li class="button">
                    <router-link to="/systemHome" class="return" v-show="retractState"></router-link>
                    <a class="retract" @click="retractClick"></a>
                </li>
                <li @click="isActiveShow('/system_projectSet')">
                    <router-link to="/system_projectSet" :class="activeShow=='/system_projectSet'||activeShow=='/systemSet'?'active':''">
                        <div class="icon"></div>
                        <span>项目设置</span>
                    </router-link>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>权限设置</span>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>操作日志</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 内容 -->
        <router-view class="router-box"></router-view>
    </div>
</template>

<style lang="less">
    #systemSet {
        width: 100%;
        height: 100%;
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
                            display: inline-block;
                            text-align-last:justify;
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
                    position: relative;
                    border-bottom: .01rem solid #98c8e7;
                    a {
                        top: 50%;
                        border: 0;
                        padding: 0;
                        width: .22rem;
                        height: .22rem;
                        position: absolute;
                        // background-color: #fff;
                        transform: translateY(-50%);
                        background-repeat: no-repeat;
                        background-position: center center;
                    }
                    a:hover {
                        background-color: #2d83bb;
                    }
                    .return {
                        left: .4rem;
                        background-image: url('../../../../static/images/system-return.png');
                    }
                    .retract {
                        right: .4rem;
                        background-image: url('../../../../static/images/system-retract.png');
                    }
                }
            }
        }
        .router-box {
            flex: 1;
            padding-top: .3rem;
            padding-left: .3rem;
            padding-right: .2rem;
        }
    }
</style>

<script>
export default {
    data() {
        return {
            retractState: true, // 侧导航栏缩进状态
            activeShow: '/system_projectSet' // 当前选中的模块
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