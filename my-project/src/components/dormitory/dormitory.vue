<template>
    <div id="dormitory">
        <!-- 顶部通栏 -->
        <div class="header-bar">
            <ul>
                <li>
                    <a class="aaaa">系统</a>
                </li>
                <li>
                    <a>发卡中心管理</a>
                </li>
                <li class="active">
                    <a>宿舍管理中心</a>
                </li>
                <li>
                    <a>数据统计查询</a>
                </li>
                <li>
                    <a>窗口</a>
                </li>
                <li>
                    <a>帮助</a>
                </li>
            </ul>
        </div>
        <!-- 导航栏 -->
        <div class="top-nav">
            <ul>
                <li>
                    <a>
                        <img src="../../../static/images/dormitory-homePage.png" alt="">
                        <span>首页</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../../static/images/dormitory-type.png" alt="">
                        <span>宿舍类型</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../../static/images/dormitory-manage.png" alt="">
                        <span>宿舍管理中心</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../../static/images/dormitory-allot.png" alt="">
                        <span>分配</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../../static/images/dormitory-accredit.png" alt="">
                        <span>批量授权</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../../static/images/dormitory-change.png" alt="">
                        <span>换房</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../../static/images/dormitory-inquire.png" alt="">
                        <span>异动查询</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../../static/images/dormitory-register.png" alt="">
                        <span>外寄登记</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../../static/images/dormitory-waterAndElectricity.png" alt="">
                        <span>水电记录</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../../static/images/dormitory-maintain.png" alt="">
                        <span>维修记录</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../../static/images/dormitory-sanitaton.png" alt="">
                        <span>卫生记录</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../../static/images/dormitory-cost.png" alt="">
                        <span>费用分摊</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../../static/images/dormitory-close.png" alt="">
                        <span>关闭</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 主体 -->
        <div class="main">
            <!-- 侧导航栏 -->
            <div class="side-nav">
                <a class="establis">
                    <span>宿舍建立</span>
                    <i>▶</i>
                </a>
                <div class="all">
                    全部宿舍
                </div>
                <ul>
                    <li class="active">
                        <a>宿舍01栋</a>
                    </li>
                    <li>
                        <a>宿舍02栋</a>
                    </li>
                    <li>
                        <a>宿舍03栋</a>
                    </li>
                    <li>
                        <a>宿舍04栋</a>
                    </li>
                    <li>
                        <a>宿舍05栋</a>
                    </li>
                    <li>
                        <a>宿舍06栋</a>
                    </li>
                    <li>
                        <a>宿舍07栋</a>
                    </li>
                    <li>
                        <a>宿舍08栋</a>
                    </li>
                    <li>
                        <a>宿舍09栋</a>
                    </li>
                    <li>
                        <a>宿舍10栋</a>
                    </li>
                </ul>
            </div>
            <!-- 宿舍详情 -->
            <div class="particulars">
                <div class="top-box">
                    <div class="search-box">
                        <div class="option-box">
                            <ul>
                                <li>
                                    <div class="select" :class="radioOne==1?'active':''">
                                        <a class="choice" @click="radioOne=1"></a>
                                    </div>
                                    <span>显示空房</span>
                                </li>
                                <li>
                                    <div class="select" :class="radioOne==2?'active':''">
                                        <a class="choice" @click="radioOne=2"></a>
                                    </div>
                                    <span>显示未住满房</span>
                                </li>
                                <li>
                                    <div class="select" :class="radioOne==3?'active':''">
                                        <a class="choice" @click="radioOne=3"></a>
                                    </div>
                                    <span>显示已住满房</span>
                                </li>
                                <li>
                                    <div class="select" :class="radioOne==4?'active':''">
                                        <a class="choice" @click="radioOne=4"></a>
                                    </div>
                                    <span>显示保留房</span>
                                </li>
                                <li>
                                    <div class="select" :class="radioOne==5?'active':''">
                                        <a class="choice" @click="radioOne=5"></a>
                                    </div>
                                    <span>显示不可用房</span>
                                </li>
                            </ul>
                            <ul style="margin-top:.16rem;">
                                <li>
                                    <span class="search">快速查询</span>
                                    <input type="text">
                                </li>
                                <li>
                                    <div class="select" :class="radioTwo==1?'active':''">
                                        <a class="choice" @click="radioTwo=1"></a>
                                    </div>
                                    <span>房号</span>
                                </li>
                                <li>
                                    <div class="select" :class="radioTwo==2?'active':''">
                                        <a class="choice" @click="radioTwo=2"></a>
                                    </div>
                                    <span>姓名</span>
                                </li>
                                <li>
                                    <div class="select" :class="radioTwo==3?'active':''">
                                        <a class="choice" @click="radioTwo=3"></a>
                                    </div>
                                    <span>人员编码</span>
                                </li>
                            </ul>
                        </div>
                        <a class="button">对应关系图</a>
                        <a class="button">入住明细</a>
                        <a class="button">刷新</a>
                    </div>
                    <div class="centent-box">
                        <ul>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="../../../static/images/dormitory-dormitory.png" alt="">
                                    <span>01-01-01</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="bottom-box">
                    <div class="bottom-left">
                        <div class="title">宿舍情况</div>
                        <div class="left">
                            <ul>
                                <li>
                                    <span>男空房数</span>
                                    <span class="number">0</span>
                                </li>
                                <li>
                                    <span>女空房数</span>
                                    <span class="number">0</span>
                                </li>
                                <li>
                                    <span>总空房数</span>
                                    <span class="number">0</span>
                                </li>
                            </ul>
                        </div>
                        <div class="middle">
                            <ul>
                                <li>
                                    <span>男未满房数</span>
                                    <span class="number">0</span>
                                </li>
                                <li>
                                    <span>女未满房数</span>
                                    <span class="number">0</span>
                                </li>
                                <li>
                                    <span>总未满房数</span>
                                    <span class="number">0</span>
                                </li>
                            </ul>
                        </div>
                        <div class="right">
                            <ul>
                                <li>
                                    <span>男已满房数</span>
                                    <span class="number">0</span>
                                </li>
                                <li>
                                    <span>女已满房数</span>
                                    <span class="number">0</span>
                                </li>
                                <li>
                                    <span>总未满房数</span>
                                    <span class="number">0</span>
                                </li>
                            </ul>
                        </div>
                        <div class="bottom">
                            <ul>
                                <li>
                                    <span>男已住数</span>
                                    <span class="number">0</span>
                                </li>
                                <li>
                                    <span>女已住数</span>
                                    <span class="number">0</span>
                                </li>
                                <li>
                                    <span>男可住数</span>
                                    <span class="number">0</span>
                                </li>
                                <li>
                                    <span>女可住数</span>
                                    <span class="number">0</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="bottom-right">
                        <div class="title">分配概括</div>
                        <div class="left">
                            <ul>
                                <li>
                                    <span>男外住数</span>
                                    <span class="number">0</span>
                                </li>
                                <li>
                                    <span>女外住数</span>
                                    <span class="number">0</span>
                                </li>
                                <li>
                                    <span>男入住数</span>
                                    <span class="number">0</span>
                                </li>
                                <li>
                                    <span>女入住数</span>
                                    <span class="number">0</span>
                                </li>
                            </ul>
                        </div>
                        <div class="right">
                            <ul>
                                <li>
                                    <span>男未分配数</span>
                                    <span class="number">0</span>
                                </li>
                                <li>
                                    <span>女未分配数</span>
                                    <span class="number">0</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #dormitory {
        .header-bar {
            height: .5rem;
            background-color: #2aa1d2;
            ul {
                padding-left: .1rem;
                li {
                    float: left;
                    height: .5rem;
                    a {
                        color: #fff;
                        display: block;
                        font-size: .21rem;
                        line-height: .5rem;
                        padding-left: .3rem;
                        padding-right: .3rem;
                        border-top-left-radius: .1rem;
                        border-top-right-radius: .1rem;
                        transition: all .5s;
                    }
                    a:hover {
                        background-color: #0079ab;
                    }
                }
                .active {
                    a {
                        background-color: #0079ab;
                    }
                }
            }
        }
        .top-nav {
            height: 1.2rem;
            background-color: #fff;
            ul {
                li {
                    float: left;
                    a {
                        display: block;
                        height: 1.2rem;
                        padding-top: .28rem;
                        transition: all .5s;
                        img {
                            display: block;
                            padding-left: .45rem;
                            padding-right: .45rem;
                        }
                        span {
                            margin-top: .15rem;
                            display: block; 
                            color: #4a4a4a;
                            font-size: .17rem;
                            text-align: center;
                        }
                    }
                    a:hover {
                        background-color: #e5e5e5;
                    }
                }
            }
        }
        .main {
            height: 9.1rem;
            background-color: #f3f3f3;
            .side-nav {
                width: 3rem;
                margin-right: .1rem;
                display: inline-block;
                vertical-align: top;
                .establis {
                    display: block;
                    width: 3rem;
                    background-color: #2aa1d2;
                    position: relative;
                    font-size: .19rem;
                    color: #fff;
                    padding-left: .2rem;
                    transition: all .5s;
                    span {
                        line-height: .5rem;
                    }
                    i {
                        position: absolute;
                        font-size: .38rem;
                        font-style: normal;
                        right: .1rem;
                        top: 50%;
                        transform: translateY(-55%);
                    }
                }
                .establis:hover {
                    background-color: #0079ab;
                }
                .all {
                    height: .51rem;
                    color: #2aa1d2;
                    background-color: #fff;
                    padding-left: .2rem;
                    line-height: .5rem;
                    font-size: .19rem;
                    border-bottom: .01rem solid #f3f3f3;
                }
                ul {
                    li {
                        a {
                            display: block;
                            height: .41rem;
                            font-size: .16rem;
                            line-height: .42rem;
                            padding-left: .2rem;
                            background-color: #fff;
                            border-bottom: .01rem solid #f3f3f3;
                            transition: all .5s;
                        }
                        a:hover {
                            background-color: #f3f3f3;
                        }
                    }
                    .active {
                        a {
                            background-color: #f3f3f3;
                        }
                    }
                }
            }
            .particulars {
                width: 15.93rem;
                display: inline-block;
                .top-box {
                    .search-box {
                        height: 1rem;
                        display: flex;
                        background-color: #fff;
                        justify-content: space-between;
                        .option-box {
                            height: 1rem;
                            width: 9.2rem;
                            padding-top: .12rem;
                            padding-left: .3rem;
                            background-color: #f2faff;
                            ul {
                                li {
                                    display: inline-block;
                                    vertical-align: top;
                                    .select {
                                        width: .26rem;
                                        height: .26rem;
                                        display: inline-block;
                                        background-position: center center;
                                        background-repeat: no-repeat;
                                        background-size: contain;
                                        padding-top: .06rem;
                                        margin-left: .3rem;
                                        margin-right: .1rem;
                                        .choice {
                                            width: .2rem;
                                            height: .2rem;
                                            display: block;
                                            border: .01rem solid #4b4b48;
                                        }
                                    }
                                    span {
                                        color: #4b4b4b;
                                        vertical-align: top;
                                        display: inline-block;
                                        line-height: .33rem;
                                        font-size: .15rem;
                                    }
                                    .search {
                                        margin-left: .3rem;
                                    }
                                    input {
                                        vertical-align: top;
                                        line-height: .33rem;
                                        height: .3rem;
                                        width: 1.2rem;
                                        border: .01rem solid #4a4a4a;
                                        margin-left: .26rem;
                                    }
                                    .active {
                                        background-image: url('../../../static/images/dormitory-select.png');
                                    }
                                }
                            }
                        }
                        .button {
                            height: 1rem;
                            width: 2.2rem;
                            background-color: #f2faff;
                            line-height: 1rem;
                            text-align: center;
                            color: #4a4a4a;
                            font-size: .21rem;
                            transition: all .5s;
                        }
                        .button:hover {
                            background-color: #c4e5fa;
                        }
                    }
                    .centent-box {
                        width: 100%;
                        height: 5.18rem;
                        background-color: #fff;
                        padding-left: .6rem;
                        padding-right: .6rem;
                        padding-top: .8rem;
                        ul {
                            width: 100%;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            li {
                                width: 10%;
                                a {
                                    display: block;
                                    text-align: center;
                                    padding-top: .32rem;
                                    padding-bottom: .32rem;
                                    transition: all .5s;
                                    img {
                                        display: block;
                                        margin: 0 auto;
                                        margin-bottom: .14rem;
                                    }
                                }
                                a:hover {
                                    background-color: #f5f5f5;
                                }
                            }
                        }
                    }
                }
                .bottom-box {
                    margin-top: .1rem;
                    height: 2.82rem;
                    display: flex;
                    justify-content: space-between;
                    >div {
                        width: 7.91rem;
                        padding-top: .22rem;
                        padding-left: .6rem;
                        padding-right: .6rem;
                        background-color: #fff;
                        .title {
                            color: #fff;
                            font-size: .19rem;
                            line-height: .4rem;
                            width: 1.6rem;
                            border-radius: .4rem;
                            background-color: #2aa1d2;
                            text-align: center;
                            margin: 0 auto;
                            margin-bottom: .28rem;
                        }
                        .number {
                            width: .76rem;
                            color: #2aa1d2;
                            text-align: center;
                            margin-left: .18rem;
                            display: inline-block;
                            border-bottom: .01rem solid #2aa1d2;
                        }
                        .left,
                        .middle {
                            float: left;
                            width: 2.4rem;
                            color: #666;
                            font-size: .17rem;
                            ul {
                                li {
                                    margin-bottom: .2rem;
                                }
                            }
                        }
                        .right {
                            float: left;
                            width: 1.8rem;
                            color: #666;
                            font-size: .17rem;
                            ul {
                                li {
                                    margin-bottom: .2rem;
                                }
                            }
                        }
                        .bottom {
                            float: left;
                            color: #2aa1d2;
                            font-size: .17rem;
                            ul {
                                li {
                                    float: left;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {
            radioOne: 1, // 1号单选框
            radioTwo: 1, // 2号单选框
        }
    },
    mounted() {
        this.unopenClick()
    },
    methods: {
        // 用水量折线图
        water() {
            let water = this.$echarts.init(
                document.getElementById("water")
            )
            water.setOption({
                // backgroundColor: "#FBFBFB",
                grid: {
                    x: 50,
                    y: 20,
                    x2: 20,
                    y2: 40
                },
                tooltip: {
                    trigger: "axis"
                },
                calculable: true,
                xAxis: [
                    {
                        axisLabel: {
                            rotate: 0,
                            interval: 0,
                            color: "#000"
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#132e6d"
                            }
                        },
                        type: "category",
                        boundaryGap: false,
                        data: ["04-19", "04-20", "04-21", "04-22", "04-23",  "04-24", "04-25"]
                        // data: sevenshuiH
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        max: 150,
                        min: 0,
                        interval: 50,
                        axisLabel: {
                            textStyle: {
                                color: "#000"
                            },
                            formatter: "{value}"
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#132e6d"
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ["#132e6d"],
                                width: 1,
                                type: "dotted"
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: "用水",
                        type: "line",
                        symbolSize: 4,
                        color: ["#508bb8"],
                        data: [67, 124, 126, 134, 90, 85, 70]
                    }
                ]
            })
        },

        // 用电量折线图
        electricity() {
            let electricity = this.$echarts.init(
                document.getElementById("electricity")
            )
            electricity.setOption({
                // backgroundColor: "#FBFBFB",
                grid: {
                    x: 50,
                    y: 20,
                    x2: 20,
                    y2: 40
                },
                tooltip: {
                    trigger: "axis"
                },
                calculable: true,
                xAxis: [
                    {
                        axisLabel: {
                            rotate: 0,
                            interval: 0,
                            color: "#000"
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#132e6d"
                            }
                        },
                        type: "category",
                        boundaryGap: false,
                        data: ["04-19", "04-20", "04-21", "04-22", "04-23",  "04-24", "04-25"]
                        // data: sevenshuiH
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        max: 100,
                        min: 0,
                        interval: 20,
                        axisLabel: {
                            textStyle: {
                                color: "#000"
                            },
                            formatter: "{value}"
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#132e6d"
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ["#132e6d"],
                                width: 1,
                                type: "dotted"
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: "用电",
                        type: "line",
                        symbolSize: 4,
                        color: ["#ffb70e"],
                        data: [67, 40, 96, 56, 90, 85, 60]
                    }
                ]
            })
        },

        // 功能暂未开放提示
        unopenClick() {
            let that=this
            $('a').on('click',function(){
                that.$message({
                    message: '该功能暂未开放',
                    type: 'warning'
                })
            })
        }
    }
}
</script>
