<template>
    <div id="systemHome">
        <!-- 侧导航栏 -->
        <div class="side-nav">
            <ul>
                <li class="button">
                    <a class="retract" @click="retractClick"></a>
                </li>
                <li>
                    <a class="active">
                        <div class="icon home"></div>
                        <span>首页</span>
                    </a>
                </li>
                <li>
                    <router-link to="/systemLiangZhi">
                        <div class="icon"></div>
                        <span>两制管理</span>
                    </router-link>
                </li>
                 <li>
                    <a>
                        <div class="icon"></div>
                        <span>人员管理</span>
                    </a>
                </li>
                <li>
                    <router-link to="/systemZhiHui">
                        <div class="icon"></div>
                        <span>设备管理</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/systemMonitoring">
                        <div class="icon"></div>
                        <span>视频监控</span>
                    </router-link>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>质量监督</span>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>安全管理</span>
                    </a>
                </li>
                <li>
                    <router-link to="/systemGreen">
                        <div class="icon"></div>
                        <span>绿色施工</span>
                    </router-link>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>资料管理</span>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>智慧宿舍</span>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>智能应用</span>
                    </a>
                </li>
                <li>
                    <router-link to="/systemSet">
                        <div class="icon"></div>
                        <span>平台设置</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 内容 -->
        <div class="centent">
            <div class="centent-box"></div>
        </div>
    </div>
</template>

<style lang="less">
    #systemHome {
        width: 100%;
        display: flex;
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
                            background-image: url('../../../static/images/system-home.png');
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
                        left: 50%;
                        border: 0;
                        padding: 0;
                        width: .22rem;
                        height: .22rem;
                        position: absolute;
                        background-repeat: no-repeat;
                        transform: translate(-50%,-50%);
                        background-position: center center;
                        background-image: url('../../../static/images/system-retract.png');
                    }
                    a:hover {
                        background-color: #2d83bb;
                    }
                }
            }
        }
        .centent {
            flex: 1;
            height: 5rem;
            padding-top: .4rem;
            padding-left: .3rem;
            padding-right: .3rem;
            // display: inline-block;
            .centent-box {
                height: 100%;
                border-radius: .1rem;
                background-color: #fff;
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {
            retractState: true, // 侧导航栏状态
            // lzShow: true,
        }
    },
    methods: {
        // 侧导航栏缩进
        retractClick() {
            if (this.retractState) {
                $('.side-nav').animate({
                    width:'.6rem'
                },500)
                $('.retract').animate({
                    left:'.3rem'
                })
                this.retractState = !this.retractState
            } else {
                $('.side-nav').animate({
                    width:'1.75rem'
                },500)
                $('.retract').animate({
                    left:'50%'
                })
                this.retractState = !this.retractState
            }
        },
    }
}
</script>