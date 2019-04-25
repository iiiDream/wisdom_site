<template>
    <div id="q_statistics">
        <!-- 顶部盒子 -->
        <div class="top-box">
            <div>
                <div class="left-box">
                    <p>0</p>
                    <span>超期未整改</span>
                </div>
                <div class="right-box plaint1"></div>
            </div>
            <div>
                <div class="left-box">
                    <p>0</p>
                    <span>未整改</span>
                </div>
                <div class="right-box plaint1"></div>
            </div>
            <div>
                <div class="left-box">
                    <p>0</p>
                    <span>严重隐患超期未整改</span>
                </div>
                <div class="right-box plaint2"></div>
            </div>
            <div>
                <div class="left-box">
                    <p>0</p>
                    <span>严重隐患未整改</span>
                </div>
                <div class="right-box plaint2"></div>
            </div>
        </div>
        <!-- 主体盒子 -->
        <div class="main-box">
            <div class="time">
                <div class="button-box">
                    <a class="bolder">按周</a>
                    <a>按月</a>
                    <a>按年</a>
                    <a>累计</a>
                    <a>自定义</a>
                </div>
                <div class="time-box">
                    <!-- 按周选择 -->
                    <el-date-picker
                        style="display:none;"
                        v-model="value3"
                        type="week"
                        format="yyyy-MM-dd"
                        placeholder="选择周">
                    </el-date-picker>
                    <!-- 按月选择 -->
                    <el-date-picker
                        style="display:none;"
                        v-model="value4"
                        type="month"
                        placeholder="选择月">
                    </el-date-picker>
                    <!-- 按年选择 -->
                    <el-date-picker
                        style="display:none;"
                        v-model="value5"
                        type="year"
                        placeholder="选择年">
                    </el-date-picker>
                    <!-- 自定义选择 -->
                    <el-date-picker
                        style="display:none;"
                        v-model="value6"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </div>
            </div>
            <div class="generalize">
                <div class="generalize-title">
                    安检概括
                </div>
                <div class="generalize-main">
                    <div class="generalize-left">
                        0%
                        <br>
                        合格率
                    </div>
                    <div class="generalize-right">
                        <ul>
                            <li>
                                检查总数
                                <br>
                                <span>0</span>
                                项
                            </li>
                            <li>
                                合格
                                <br>
                                <span>0</span>
                                项
                            </li>
                            <li>
                                不合格
                                <br>
                                <span>0</span>
                                项
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="tendency">
                <div class="tendency-title">
                    隐患趋势
                </div>
                <div class="tendency-main">
                    <div id="histogram" class="histogram">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #q_statistics {
        .top-box {
            display: flex;
            justify-content: space-between;
            >div {
                display: flex;
                color: #fff;
                width: 3.45rem;
                height: 1.67rem;
                justify-content: space-between;
                padding: .48rem .32rem .47rem .42rem;
                background-image: url('../../../static/images/q_s-topBox.png');
                background-position: center center;
                background-repeat: no-repeat;
                background-size: contain;
                .left-box {
                    flex: 1;
                    p {
                        font-size: .32rem;
                        font-weight: bolder;
                        margin-bottom: .25rem;
                    }
                    span {
                        font-size: .18rem;
                    }
                }
                .right-box {
                    width: .61rem;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: contain;
                }
                .plaint1 {
                    background-image: url('../../../static/images/quality-plaint1.png');
                }
                .plaint2 {
                    background-image: url('../../../static/images/quality-plaint2.png');
                }
            }
        }
        .main-box {
            width: 15rem;
            height: 7.34rem;
            margin-top: .4rem;
            padding: .34rem .32rem 0 .22rem;
            background-image: url('../../../static/images/q_s-bottomBox.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            .time {
                // padding-bottom: .2rem;
                height: .44rem;
                border-bottom: .01rem solid #142a6a;
                .button-box {
                    width: 2.66rem;
                    float: left;
                    display: flex;
                    justify-content: space-between;
                    a {
                        color: #fff;
                        font-size: .17rem
                    }
                    .bolder {
                        font-weight: bolder;
                    }
                }
                .tiem-box {
                    // float: left;
                }
            }
            .generalize {
                margin-top: .24rem;
                .generalize-title {
                    color: #fff;
                    font-size: .17rem;
                }
                .generalize-main {
                    margin-top: .24rem;
                    padding-left: 1.08rem;
                    .generalize-left {
                        color: #fff;
                        width: 1.1rem;
                        height: 1.1rem;
                        font-size: .14rem;
                        text-align: center;
                        padding-top: .32rem;
                        display: inline-block;
                        background-image: url('../../../static/images/q_s-circleBg.png');
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: contain;
                    }
                    .generalize-right {
                        color: #fff;
                        width: 2.34rem;
                        font-size: .14rem;
                        margin-left: .64rem;
                        display: inline-block;
                        transform: translateY(-30px);
                        ul {
                            display: flex;
                            justify-content: space-between;
                            li {
                                line-height: .36rem;
                                span {
                                    font-size: .18rem;
                                }
                            }
                        }
                    }
                }
            }
            .tendency {
                margin-top: .6rem;
                .tendency-title {
                    color: #fff;
                    font-size: .17rem;
                }
                .tendency-main {
                    height: 3.6rem;
                    .histogram {
                        height: 100%;
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
            value3: '',
            value4: '',
            value5: '',
            value6: ''
        }
    },
    mounted() {
        this.temp()
    },
    methods: {
        // 柱状图初始化
        temp() {
            let myChart = this.$echarts.init(document.getElementById('histogram'));
            myChart.setOption({
                title: {
                    text: ''
                },
                tooltip: {},
                xAxis: {
                    //字体样式
                    axisLabel: {
                      textStyle: {
                        color: "#fff"
                      }
                    },
                    //坐标轴样式
                    axisLine: {
                      lineStyle: {
                        color: "#132e6d",
                        width: 2
                      }
                    },
                    //网格样式
                    // splitLine: {
                    //   show: true,
                    //   lineStyle: {
                    //     color: "#132e6d",
                    //     width: 1
                    //   }
                    // },
                    data: ['03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07', '03-08', '03-09', '03-10', '03-11', '03-12', '03-13', '03-14', '03-15', '03-16']
                },
                yAxis: {
                    max: 60, //最大值
                    min: 0, //最小值
                    interval: 10, //间隔
                    //字体样式
                    axisLabel: {
                      textStyle: {
                        color: "#fff"
                      }
                    },
                    //坐标轴样式
                    axisLine: {
                      lineStyle: {
                        color: "#132e6d",
                        width: 2
                      }
                    },
                    //网格样式
                    splitLine: {
                      show: true,
                      lineStyle: {
                        color: "#132e6d",
                        width: 1
                      }
                    }
                },
                series: [
                    {
                        name: '合格',
                        type: 'bar',
                        // barGap: 10,
                        barMaxWidth: 30,
                        // barMinWidth: 
                        data: [55, 30, 49, 10, 45, 29, 54, 20, 57, 34, 50, 42, 11, 26, 58, 37],
                        itemStyle: {
                            color: '#24e974'
                        }
                    },
                    {
                        name: '不合格',
                        type: 'bar',
                        barMaxWidth: 30,
                        barCategoryGap: '50%',
                        data: [29, 40, 20, 50, 12, 57, 24, 33, 47, 16, 30, 17, 36, 45, 19, 31],
                        itemStyle: {
                            color: '#fb497c',
                        }
                    },
                ],
                dataZoom: {
                    label: '#fff',
                    show: true,
                    realtime: true,
                    // y: 36,
                    // height: 20,
                    start: 0,
                    end: 100,
                    // fillerColor: '#269cdb',
                    showDetail: false,
                },
            });
        }
    },
}
</script>

