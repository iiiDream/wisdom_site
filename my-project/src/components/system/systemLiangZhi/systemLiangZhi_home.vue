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
                            <el-select v-model="attendanceValue" placeholder="请选择" size="mini">
                                <el-option
                                v-for="item in attendanceOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </div>
                        <div class="label-box">
                            <ul>
                                <li>
                                    <i class="orange-color">
                                        <i class="dot"></i>
                                    </i>
                                    <span>当前在场人数</span>
                                </li>
                                <li>
                                    <i class="blue-color">
                                        <i class="dot"></i>
                                    </i>
                                    <span>考勤总人数</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="attendance" id="attendance"></div>
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
                <div class="title">
                    <span>工资发放统计</span>
                    <div class="select-box">
                        <el-select v-model="grantValue" placeholder="请选择" size="mini">
                            <el-option
                            v-for="item in grantOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </div>
                    <div class="year-box">
                        <a class="last" @click="lastYear">
                            <i class="el-icon-arrow-left"></i>
                        </a>
                        <div class="year">{{year}}年</div>
                        <a class="next" @click="nextYear">
                            <i class="el-icon-arrow-right"></i>
                        </a>
                    </div>
                    <div class="label-box">
                        <ul>
                            <li>
                                <i class="orange-color"></i>
                                <span>发工资人数</span>
                            </li>
                            <li>
                                <i class="blue-color"></i>
                                <span>考勤人数</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="grant" id="grant"></div>
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
                    .title {
                        height: .47rem;
                        position: relative;
                        line-height: .3rem;
                        padding-top: .17rem;
                        padding-left: .2rem;
                        >span {
                            float: left;
                            height: .16rem;
                            font-size: .14rem;
                            line-height: .3rem;
                        }
                        .select-box {
                            float: left;
                            margin-left: .3rem;
                            input {
                                height: .3rem;
                                width: 1.05rem;
                                border-radius: .02rem;
                                border: .01rem solid #f1f1f1;
                            }
                        }
                        .label-box {
                            right: .3rem;
                            position: absolute;
                            ul {
                                li {
                                    float: right;
                                    height: .3rem;
                                    line-height: .3rem;
                                    span {
                                        font-size: .12rem;
                                    }
                                    &:first-child {
                                        margin-left: .3rem;
                                    }
                                    >i {
                                        width: .26rem;
                                        height: .01rem;
                                        position: relative;
                                        display: inline-block;
                                        vertical-align: middle;
                                        .dot {
                                            top: 50%;
                                            left: 50%;
                                            width: .13rem;
                                            height: .13rem;
                                            position: absolute;
                                            border-radius: .13rem;
                                            background-color: #fff;
                                            transform: translate(-50%,-50%);
                                        }
                                    }
                                    .blue-color {
                                        background-color: #0090ff;
                                        .dot {
                                            border: .01rem solid #0090ff;
                                        }
                                    }
                                    .orange-color {
                                        background-color: #fd5101;
                                        .dot {
                                            border: .01rem solid #fd5101;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .attendance {
                        width: 100%;
                        height: 2.32rem;
                    }
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
                .title {
                    height: .41rem;
                    position: relative;
                    line-height: .3rem;
                    padding-top: .11rem;
                    padding-left: .2rem;
                    >span {
                        float: left;
                        height: .16rem;
                        font-size: .14rem;
                        line-height: .3rem;
                    }
                    .select-box {
                        float: left;
                        margin-left: .3rem;
                        input {
                            height: .3rem;
                            width: 1.05rem;
                            border-radius: .02rem;
                            border: .01rem solid #f1f1f1;
                        }
                    }
                    .year-box {
                        top: .11rem;
                        left: 50%;
                        display: flex;
                        position: absolute;
                        transform: translate(-50%);
                        >a {
                            float: left;
                            width: .3rem;
                            height: .3rem;
                            color: #0090ff;
                            font-size: .16rem;
                            line-height: .3rem;
                            text-align: center;
                            transition: all .5s;
                            border-radius: .02rem;
                            &:hover {
                                background-color: #f7f7f7;
                            }
                        }
                        >div {
                            float: left;
                            font-size: .2rem;
                            font-weight: bolder;
                            padding: 0 .1rem;
                        }
                    }
                    .label-box {
                        right: .3rem;
                        position: absolute;
                        ul {
                            li {
                                float: right;
                                height: .3rem;
                                line-height: .3rem;
                                span {
                                    font-size: .12rem;
                                }
                                &:first-child {
                                    margin-left: .3rem;
                                }
                                >i {
                                    width: .12rem;
                                    height: .12rem;
                                    margin-right: .12rem;
                                    display: inline-block;
                                    vertical-align: middle;
                                }
                                .blue-color {
                                    background-color: #0090ff;
                                }
                                .orange-color {
                                    background-color: #fd5101;
                                }
                            }
                        }
                    }
                }
                .grant {
                    width: 100%;
                    height: 2.39rem;
                }
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {
            attendanceOptions: [{
                value: '选项1',
                label: '劳务工人'
            }, {
                value: '选项2',
                label: '管理人员'
            }], // 考勤统计选项
            attendanceValue: '劳务工人', // 考勤统计显示的人员类型
            grantOptions: [{
                value: '选项1',
                label: '劳务工人'
            }, {
                value: '选项2',
                label: '管理人员'
            }], // 工资发放统计选项
            grantValue: '劳务工人', // 工资发放统计显示的人员类型
            year: 2019, // 工资发放统计年份
        }
    },
    mounted() {
        this.attendance()
        this.grant()
    },
    methods: {
        // 考勤统计统计模块：ECharts图渲染
        attendance(aMTotal, aMZc, aMDay, aMZcGly) {
            let attendance = this.$echarts.init(
              document.getElementById("attendance")
            )
            attendance.setOption({
                // backgroundColor: "#FBFBFB",
                grid: {
                    x: 60,
                    y: 30,
                    x2: 50,
                    y2: 50,
                    containLabel: true
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
                        data: [
                          "05-02",
                          "05-03",
                          "05-04",
                          "05-05",
                          "05-06",
                          "05-07",
                          "05-08",
                          "05-09",
                          "05-10",
                          "05-11"
                        ]
                        // data: aMDay
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        max: 1000,
                        min: 0,
                        interval: 200,
                        axisLabel: {
                            textStyle: {
                                color: "#000"
                            }
                            //   formatter: "{value} 度"
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
                                type: "dashed"
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: "当日在场人数",
                        type: "line",
                        symbolSize: 10,
                        smooth: 0.2,
                        color: ["#fd5101"],
                        data: [600, 500, 500, 500, 400, 500, 500, 400, 400, 500]
                        // data: aMTotal
                    },
                    {
                        name: "考勤总人数",
                        type: "line",
                        symbolSize: 10,
                        smooth: 0.2,
                        color: ["#0090ff"],
                        data: [300, 200, 100, 500, 300, 300, 400, 300, 100, 300],
                        // data: aMZc
                    },
                    // {
                    //     name: "管理人员出勤人数",
                    //     type: "line",
                    //     symbolSize: 4,
                    //     smooth: 0.2,
                    //     color: ["#33577c"],
                    //     data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    //     // data: aMZcGly
                    // }
                ]
            });
        },

        // 工资发放统计模块：ECharts图渲染
        grant() {
            let grant = this.$echarts.init(
              document.getElementById("grant")
            )
            grant.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line'
                    }
                },
                grid: {
                    x: 20,
                    y: 20,
                    x2: 20,
                    y2: 20,
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        interval: 50,
                    }
                ],
                series : [
                    {
                        color: ["#0090ff"],
                        name:'考勤人数',
                        type:'bar',
                        barWidth: 20,
                        data:[20, 49, 70, 23, 25, 76, 135, 162, 32, 20, 64, 33],
                    },
                    {
                        color: ["#fd5101"],
                        name:'发放工资人数',
                        type:'bar',
                        barWidth: 20,
                        data:[16, 29, 39, 16, 18, 70, 75, 152, 28, 18, 60, 23],
                    }
                ]
            })
        },

        // 上一年
        lastYear() {
            this.year = this.year-1
        },

        // 下一年 
        nextYear() {
            this.year = this.year+1
        }
    }
}
</script>