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
                        <div class="icon"></div>
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
                    <router-link to="/systemZhiHui">
                        <div class="icon"></div>
                        <span>智慧工地</span>
                    </router-link>
                </li>
                <li>
                    <a>
                        <div class="icon"></div>
                        <span>设置</span>
                    </a>
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
                            width: .6rem;
                            height: .59rem;
                            display: inline-block;
                        }
                        span {
                            width: .8rem;
                            vertical-align: top;
                            text-align: justify;
                            text-align-last:justify;
                            display: inline-block;
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
                        left: 50%;
                        border: 0;
                        padding: 0;
                        width: .2rem;
                        height: .2rem;
                        position: absolute;
                        background-color: #fff;
                        transform: translate(-50%,-50%);
                    }
                    a:hover {
                        background-color: #fff;
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