<template>
    <div id="systemLiangZhi_home">
        <div class="centent-box">
            <!-- 顶部盒子 -->
            <div class="top-box">
                <div class="title">
                    <div class="text">
                        <span>当前工程：</span>
                        <span class="project-name">
                            盐田区11项管网改造工程（施工）
                        </span>
                    </div>
                    <!-- 完工=accomplish 正常=normal 停工=lockout -->
                    <div class="state normal">
                        正常施工
                    </div>
                </div>
                <div class="condition">
                    <div class="worker">
                        <div class="icon"></div>
                        <div class="text">
                            <div class="title">劳务工人情况</div>
                            <ul>
                                <li>
                                    <p>90</p>
                                    <span>劳务工人总数</span>
                                </li>
                                <li>
                                    <p>0</p>
                                    <span>在场劳务工人</span>
                                </li>
                                <li>
                                    <p>0</p>
                                    <span>今日考勤人数</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="manage">
                        <div class="icon"></div>
                        <div class="text">
                            <div class="title">管理人员情况</div>
                            <ul>
                                <li>
                                    <p>90</p>
                                    <span>管理人员总数</span>
                                </li>
                                <li>
                                    <p>0</p>
                                    <span>在场管理人员</span>
                                </li>
                                <li>
                                    <p>0</p>
                                    <span>今日考勤人数</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 中部盒子 -->
            <div class="middle-box">
                <!-- 考勤统计表 -->
                <div class="left-box">
                    <div class="title">
                        <span>最近10天考勤统计</span>
                        <div class="select-box">
                            劳务工人
                        </div>
                        <div class="label-box">
                            <ul>
                                <li>
                                    <i></i>
                                    <span>考勤总人数</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span>当前在场人数</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="attendance"></div>
                </div>
                <div class="right-box">
                    <!-- 分账情况 -->
                    <div class="routing">
                        <div class="title">分账情况</div>
                        <ul>
                            <li>
                                <i class="dot"></i>
                                <span>三方协议：</span>
                                <a class="blue-color">点击上传</a>
                            </li>
                            <li>
                                <i class="dot"></i>
                                <span>工资专户：</span>
                                <span class="green-color">已上传</span>
                            </li>
                            <li>
                                <i class="dot"></i>
                                <span>工资保证金：</span>
                                <span class="green-color">已上传</span>
                            </li>
                        </ul>
                    </div>
                    <!-- 安全培训情况 -->
                    <div class="safety">
                        <div class="title">安全培训情况</div>
                        <ul>
                            <li>
                                <i class="dot"></i>
                                <span>在场劳务工人未培训数：</span>
                                <span class="blue-color">0人</span>
                            </li>
                            <li>
                                <i class="dot"></i>
                                <span>在场劳务工人未培训率：</span>
                                <span class="blue-color">0%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 底部盒子 -->
            <div class="bottom-box">
                <!-- 工资发放统计 -->
                <div class="title"></div>
                <div class="grant"></div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #systemLiangZhi_home {
        width: 100%;
        .centent-box {
            width: 100%;
            padding: .3rem;
            border-radius: .1rem;
            background-color: #fff;
            .top-box {
                height: 1.6rem;
                padding-left: .2rem;
                padding-right: .2rem;
                border-radius: .04rem;
                background-color: #fff;
                box-shadow: 0 0 .5rem -.3rem #666;
                >.title {
                    height: .39rem;
                    border-bottom: .01rem solid #bdbdbd;
                    >div {
                        float: left;
                    }
                    .text {
                        font-size: .15rem;
                        line-height: .38rem;
                        .project-name {
                            color: #0090ff;
                        }
                    }
                    .state {
                        color: #fff;
                        width: 1.08rem;
                        height: .22rem;
                        font-size: .15rem;
                        text-align: center;
                        line-height: .22rem;
                        margin-left: .18rem;
                        border-radius: .04rem;
                        transform: translateY(.08rem);
                    }
                    .accomplish {
                        background-color: #fd5101;
                    }
                    .normal {
                        background-color: #04c366;
                    }
                    .lockout {
                        background-color: #ffd14f
                    }
                }
                .condition {
                    display: flex;
                    height: 1.21rem;
                    padding-top: .31rem;
                    >div {
                        flex: 1;
                        .icon {
                            float: left;
                            width: .6rem;
                            height: .6rem;
                            border-radius: .04rem;
                            background-color: #04c366;
                        }
                        .text {
                            float: left;
                            padding-left: .2rem;
                            .title {
                                height: .16rem;
                                color: #4a4a4a;
                                font-size: .14rem;
                                line-height: .16rem;
                            }
                            ul {
                                display: flex;
                                margin-top: .1rem;
                                padding-top: .07em;
                                li {
                                    width: 1.84rem;
                                    height: .33rem;
                                    padding-left: .08rem;
                                    p {
                                        height: .14rem;
                                        font-size: .14rem;
                                        line-height: .14rem;
                                        font-weight: bolder;
                                    }
                                    span {
                                        height: .14rem;
                                        font-size: .12rem;
                                        line-height: .14rem;
                                        display: inline-block;
                                    }
                                    &:nth-child(1) {
                                        border-left: .02rem solid #0090ff;
                                    }
                                    &:nth-child(2) {
                                        border-left: .02rem solid #04c366;
                                    }
                                    &:nth-child(3) {
                                        border-left: .02rem solid #ffd14f;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .middle-box {
                display: flex;
                height: 2.79rem;
                margin-top: .3rem;
                justify-content: space-between;
                .left-box {
                    width: 50%;
                    height: 2.79rem;
                    border-radius: .04rem;
                    background-color: #fff;
                    box-shadow: 0 0 .5rem -.3rem #666;
                }
                .right-box {
                    width: 48.1%;
                    >div {
                        height: 1.25rem;
                        padding-top: .37rem;
                        padding-left: .29rem;
                        border-radius: .04rem;
                        background-color: #fff;
                        box-shadow: 0 0 .5rem -.3rem #666;
                        .title {
                            height: .16rem;
                            font-size: .14rem;
                            font-weight: bolder;
                            line-height: .16rem;
                        }
                        ul {
                            display: flex;
                            margin-top: .2rem;
                            li {
                                height: .14rem;
                                font-size: .12rem;
                                line-height: .14rem;
                                .dot {
                                    width: .06rem;
                                    height: .06rem;
                                    margin-right: .06rem;
                                    border-radius: .06rem;
                                    display: inline-block;
                                    background-color: #0090ff;
                                }
                                .green-color {
                                    color: #04c366;
                                }
                                .blue-color {
                                    color: #0090ff;
                                }
                            }
                        }
                    }
                    .routing {
                        ul {
                            li {
                                width: 2rem;
                            }
                        }
                    }
                    .safety {
                        margin-top: .29rem;
                        ul {
                            li {
                                width: 3.42rem;
                            }
                        }
                    }
                }
            }
            .bottom-box {
                width: 100%;
                height: 2.8rem;
                margin-top: .3rem;
                border-radius: .04rem;
                background-color: #fff;
                box-shadow: 0 0 .5rem -.3rem #666;
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