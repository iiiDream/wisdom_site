<template>
    <div id="dormitory">
        <!-- 顶部通栏 -->
        <div class="top-nav">
            <div class="top-nav-box">
                <div class="logo-box"></div>
                <div class="title-box">
                    智慧宿舍管理系统
                </div>
            </div>
        </div>
        <!-- 页面主体 -->
        <div class="main">
            <!-- 模块切换 -->
            <div class="search-box">
                <ul>
                    <li :class="activeShow==1?'active':''" @click="activeShow=1">
                        <a>数据统计</a>
                    </li>
                    <li class="middle" :class="activeShow==2?'active':''" @click="activeShow=2">
                        <a>宿舍管理</a>
                    </li>
                    <li :class="activeShow==3?'active':''" @click="activeShow=3">
                        <a>人员管理</a>
                    </li>
                </ul>
            </div>
            <!-- 数据统计 -->
            <div class="main-box" v-show="activeShow==1">
                <!-- 剩余床位 -->
                <div class="bed">
                    <div class="bed-title">
                        床位统计
                    </div>
                    <div class="bed-sum">
                        总床位：<span>300</span>
                    </div>
                    <div class="bed-residue">
                        剩余床位：<span>60</span>
                    </div>
                </div>
                <!-- 用水统计 -->
                <div class="water">
                    <div class="water-left">
                        <span class="water-name">最近7天用水</span>
                        <span class="water-unit">单位：m³</span>
                        <div id="water" style="width: 520px;height:200px;" class="water"></div>
                    </div>
                    <div class="water-right">
                        <div>
                            本月用水：
                            <span>2030</span>
                            m³
                        </div>
                        <div>
                            上月用水：
                            <span>3330</span>
                            m³
                        </div>
                    </div>
                </div>
                <!-- 用电统计 -->
                <div class="electricity">
                    <div class="electricity-left">
                        <span class="electricity-name">最近7天用电</span>
                        <span class="electricity-unit">单位：kwh</span>
                        <div id="electricity" style="width: 520px;height:200px;" class="electricity"></div>
                    </div>
                    <div class="electricity-right">
                        <div>
                            本月用电：
                            <span>1927</span>
                            kwh
                        </div>
                        <div>
                            上月用电：
                            <span>2301</span>
                            kwh
                        </div>
                    </div>
                </div>
            </div>
            <!-- 宿舍管理 -->
            <div class="main-box" v-show="activeShow==2">
                <div class="dorm-title">宿舍管理</div>
                <ul class="dorm-list">
                    <li>
                        
                    </li>
                </ul>
            </div>
            <!-- 人员管理 -->
            <div class="main-box" v-show="activeShow==3"></div>
        </div>
    </div>
</template>

<style lang="less">
    #dormitory {
        .top-nav {
            height: 54px;
            background-color: #fff;
            .top-nav-box {
                width: 1240px;
                height: 54px;
                margin: 0 auto;
                position: relative;
                .logo-box {
                    width: 120px;
                    height: 54px;
                    background-image: url('../../../static/images/workerHome-logo.png');
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: contain;
                }
                .title-box {
                    top: 50%;
                    left: 130px;
                    font-size: 16px;
                    transform: translateY(-50%);
                    color: #205198;
                    position: absolute;
                }

            }
        }
        .main {
            padding-top: 36px;
            min-height: 847px;
            background-color: #f5f5f5;
            .search-box {
                width: 280px;
                height: 30px;
                margin: 0 auto;
                ul {
                    height: 100%;
                    li {
                        width: 86px;
                        height: 100%;
                        float: left;
                        padding-left: 10px;
                        padding-right: 10px;
                        a {
                            width: 100%;
                            height: 100%;
                            display: block;
                            font-size: 16px;
                            font-weight: bolder;
                            line-height: 30px;
                            color: rgba(0, 0, 0, .5);
                            transition: all .5s;
                        }
                        a:hover {
                            color: #000;
                        }
                    }
                    .middle {
                        margin-left: 10px;
                        margin-right: 10px;
                    }
                    .active {
                        border: 1px solid #a5a5a5;
                        border-bottom: none;
                        background-color: #fff;
                        a {
                            color: #000;
                        }
                    }
                }
            }
            .main-box {
                min-height: 817px;
                width: 1200px;
                background-color: #fff;
                margin: 0 auto;
                .bed {
                    width: 600px;
                    padding-top: 36px;
                    margin: 0 auto;
                    .bed-title {
                        font-size: 22px;
                        font-weight: bolder;
                        text-align: center;
                        background-color: #f5f5f5;
                        line-height: 42px;
                    }
                    .bed-sum {
                        display: inline-block;
                        width: 300px;
                        font-size: 20px;
                        line-height: 60px;
                        text-align: center;
                        background-color: #f5f5f5;
                    }
                    .bed-residue {
                        display: inline-block;
                        width: 300px;
                        font-size: 20px;
                        line-height: 60px;
                        text-align: center;
                        background-color: #f5f5f5;
                    }
                }
                .water {
                    width: 1040px;
                    margin: 0 auto;
                    margin-top: 36px;
                    background-color: #f5f5f5;
                    position: relative;
                    .water-left {
                        display: inline-block;
                        position: relative;
                        width: 520px;
                        .water-name {
                            position: absolute;
                            left: 14px;
                            top: 18px;
                        }
                        .water-unit {
                            position: absolute;
                            right: 14px;
                            top: 18px;
                        }
                    }
                    .water-right {
                        display: inline-block;
                        width: 520px;
                        position: absolute;
                        right: 0;
                        >div {
                            height: 120px;
                            text-align: center;
                            font-size: 22px;
                            line-height: 120px;
                            span {
                                font-size: 30px;
                                color: #508bb8;
                            }
                        }
                    }
                }
                .electricity {
                    width: 1040px;
                    margin: 0 auto;
                    margin-top: 36px;
                    background-color: #f5f5f5;
                    position: relative;
                    .electricity-left {
                        display: inline-block;
                        position: relative;
                        width: 520px;
                        .electricity-name {
                            position: absolute;
                            left: 14px;
                            top: 18px;
                        }
                        .electricity-unit {
                            position: absolute;
                            right: 14px;
                            top: 18px;
                        }
                    }
                    .electricity-right {
                        display: inline-block;
                        width: 520px;
                        position: absolute;
                        right: 0;
                        >div {
                            height: 120px;
                            text-align: center;
                            font-size: 22px;
                            line-height: 120px;
                            span {
                                font-size: 30px;
                                color: #ffb70e;
                            }
                        }
                    }
                }
                .dorm-title {
                    padding-top: 36px;
                    width: 1040px;
                    margin: 0 auto;
                    font-size: 30px;
                    font-weight: bolder;
                }
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {
            activeShow: 2, // 当前选中的模块
        }
    },
    mounted() {
        this.water()
        this.electricity()
    },
    methods: {
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
        }
    }
}
</script>
