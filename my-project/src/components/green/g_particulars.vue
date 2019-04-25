<template>
    <div id="g_particulars">
        <!-- 导航栏 -->
        <div class="nav">
            <!-- 面包屑导航 -->
            <div class="crumbs-nav">
                <router-link to="/green">绿色施工</router-link>
                <span>/</span>
                <a>环境监测</a>
            </div>
            <!-- 侧导航栏 -->
            <div class="side-nav">
                <div class="nav-box">
                    <ul>
                        <li v-for="(item,index) in dustEmissionListData" :key="index">
                            <a class="" @click="getDustEmissionData(item.id)">
                                {{item.comments}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 内容 -->
        <div class="main">
            <!-- 实时数据 -->
            <div class="real-time">
                <div class="title" v-for="(item,index) in dustEmissionData.newData" :key="index">{{item.comments}}</div>
                <div class="content" v-for="(item,index) in dustEmissionData.newData" :key="index">
                    <div class="content-left">
                        <div class="temperature">
                            <p>气温</p> 
                            {{item.Temperature}}℃
                        </div>
                        <div class="humidity">
                            <p>湿度</p> 
                            {{item.Humidity}}%
                        </div>
                        <div class="wind-speed">
                            <p>风速</p> 
                            {{item.WindSpeed}}m/s
                        </div>
                    </div>
                    <div class="content-right">
                        <div class="big-box">
                            <div class="sub-box" :class="item.PM25>50?item.PM25>75?item.PM25>150?item.PM25>250?item.PM25>300?'severeCircle':'seriousCircle':'moderateCircle':'mildCircle':'goodCircle':'excellentCircle'">
                                <p>PM2.5</p>
                                {{item.PM25}}
                            </div>
                        </div>
                    </div>
                    <div class="content-bottom">
                        <div class="PM25">
                            <p>PM2.5</p>
                            {{item.PM25}}ug/m³
                        </div>
                        <div class="PM10">
                            <p>PM10</p>
                            {{item.PM10}}ug/m³
                        </div>
                        <div class="PM100">
                            <p>PM100</p>
                            {{item.Tsp}}ug/m³
                        </div>
                    </div>
                </div>
                <div class="noise-title" v-for="(item,index) in dustEmissionData.newData" :key="index">
                    噪音实时数据:
                    <span class="green-color">{{item.Noise}}</span>
                    dB
                    <div class="pic-title">
                        最近6小时污染浓度
                    </div>
                    <div class="explain">
                        <i class="bule-dot"></i>
                        PM2.5
                        <i class="green-dot"></i>
                        PM10
                        &nbsp;&nbsp;&nbsp;
                        单位：ug
                    </div>
                </div>
                <div class="dust-pic" id="contaminate">
                </div>
            </div>
            <!-- 历史数据 -->
            <div class="history">
                <div class="dust-noise">
                    <div class="title">扬尘噪音历史数据</div>
                    <div class="scroll-box" id="dustNoiseBox">
                        <ul id="dustNoiseBox1">
                            <li v-for="(item,index) in dustEmissionData.dustEmissionListDatas" :key="index">
                                <span>{{item.date}}</span>
                                <span>PM2.5:<span class="green-color">{{item.pm25}}</span>ug/m³</span>
                                <span>PM10:<span class="green-color">{{item.pm10}}</span>ug/m³</span>
                                <span>PM100:<span class="green-color">{{item.tsp}}</span>ug/m³</span>
                                <span>噪音：<span class="green-color">{{item.noise}}</span>dB</span>
                            </li>
                        </ul>
                        <ul id="dustNoiseBox2"></ul>
                    </div>
                </div>
                <div class="weather">
                    <div class="title">天气历史数据</div>
                    <div class="scroll-box" id="weatherBox">
                        <ul id="weatherBox1">
                            <li v-for="(item,index) in dustEmissionData.dustEmissionListDatas" :key="index">
                                <span>{{item.date}}</span>
                                <span>气温:<span class="green-color">{{item.temperature}}</span>℃</span>
                                <span>湿度{{item.humidity}}%</span>
                                <span>风速：{{item.windSpeed}}m/s</span>
                            </li>
                        </ul>
                        <ul id="weatherBox2"></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #g_particulars {
        padding:  .5rem .4rem 0 .4rem;
        display: flex;
        // 导航栏样式
        .nav {
            width: 3rem;
            // 面包屑导航栏
            .crumbs-nav {
                height: .32rem;
                a {
                    color: #fff;
                    font-size: .12rem;
                }
                span {
                    padding: 0 .05rem;
                    color: #fff;
                    font-size: .12rem;
                }
            }
            // 侧边导航样式
            .side-nav{
                width: 3rem;
                height: 9.09rem;
                background-image: url('../../../static/images/g_p-navBorder.png');
                background-size: contain;
                .nav-box {
                    padding: .02rem;
                    width: 3rem;
                    height: 9.41rem;
                    ul {
                        li {
                            height: .57rem;
                            background-image: url('../../../static/images/m_select-border.png');
                            background-position: bottom center;
                            background-repeat: no-repeat;
                            background-size: 2.73rem .01rem;
                            a {
                                font-size: .2rem;
                                display: block;
                                width: 100%;
                                height: .56rem;
                                color: #3979fe;
                                position: relative;
                                line-height: .56rem;
                                text-align: center;
                            }
                            .active {
                                background-image: url('../../../static/images/location-active.png');
                                background-size: contain;
                            }
                        }
                    }
                    // .el-collapse {
                    //     border: 0;
                    //     position: relative;
                    //     .tower{
                    //         position: relative;
                    //         .el-collapse-item__header {
                    //             font-size: .16rem;
                    //             color: #3375fe;
                    //             background-color: #020521;
                    //             border-bottom: 0;
                    //             height: .56rem;
                    //             line-height: .56rem;
                    //             padding-left: .4rem;
                    //             background-image: url('../../../static/images/m_select-border.png'),url('../../../static/images/m_stair1.png');
                    //             background-size: contain,.17rem .17rem;
                    //             background-position: center .54rem,.13rem .2rem;
                    //         }
                    //         .el-collapse-item__wrap {
                    //             border-bottom: 0;
                    //             .el-collapse-item__content {
                    //                 padding: 0;
                    //                 >.detail {
                    //                     background-color: #020521;
                    //                     border-bottom: 0;
                    //                     height: .56rem;
                    //                     line-height: .56rem;
                    //                     background-image: url('../../../static/images/m_select-border.png');
                    //                     background-size: contain;
                    //                     background-position: center .54rem;
                    //                     a {
                    //                         padding-left: .64rem;
                    //                         display: block;
                    //                         width: 100%;
                    //                         height: 100%;
                    //                         font-size: .16rem;
                    //                         color: #3375fe;
                    //                     }
                    //                     .active {
                    //                         width: 2.94rem;
                    //                         height: .56rem;
                    //                         background-image: url('../../../static/images/location-active.png');
                    //                         background-position: center center;
                    //                         background-repeat: no-repeat;
                    //                         background-size: 2.94rem .56rem;
                    //                     }
                    //                 }
                    //             }
                    //         }
                    //     }
                    // }
                }
            }
        }
        // 主体样式
        .main {
            width: 100%;
            margin-left: .4rem;
            display: flex;
            justify-content: space-between;
            .real-time {
                width: 7.3rem;
                height: 9.41rem;
                padding: .4rem .4rem 0 .4rem;
                background-image: url('../../../static/images/g_p-mainBorder.png');
                background-position: center center;
                background-repeat: no-repeat;
                background-size: contain;
                .title {
                    color: #fff;
                    text-align: center;
                    font-size: .3rem;
                    font-weight: bolder;
                }
                .content {
                    margin-top: .68rem;
                    .content-left {
                        width: 1.4rem;
                        margin-right: 1rem;
                        display: inline-block;
                        >div {
                            color: #fff;
                            width: 1.4rem;
                            font-size: .22rem;
                            padding-left: .7rem;
                            p {
                                margin-bottom: .1rem;
                                font-weight: bolder;
                            }
                        }
                        .temperature {
                            background-image: url('../../../static/images/g_qiwen.png');
                            background-position: left center;
                            background-repeat: no-repeat;
                            background-size: .25rem .49rem;
                        }
                        .humidity {
                            margin-top: .4rem;
                            background-image: url('../../../static/images/g_wendu.png');
                            background-position: left center;
                            background-repeat: no-repeat;
                            background-size: .45rem .46rem;
                        }
                        .wind-speed {
                            margin-top: .4rem;
                            background-image: url('../../../static/images/g_fengsu.png');
                            background-position: left center;
                            background-repeat: no-repeat;
                            background-size: .48rem .38rem;
                        }
                    }
                    .content-right {
                        display: inline-block;
                        .big-box {
                            width: 3rem;
                            height: 3rem;
                            padding-top: 50%;
                            padding-left: 50%;
                            // transform: translateY(-0.4rem);
                            background-image: url('../../../static/images/g_hc.gif');
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: contain;
                            .sub-box {
                                width: 2.28rem;
                                height: 2.28rem;
                                padding-top: .3rem;
                                background-position: center center;
                                background-repeat: no-repeat;
                                background-size: contain;
                                transform: translate(-50%,-50%);
                                color: #fff;
                                font-size: .44rem;
                                font-weight: bolder;
                                text-align: center;
                                p {
                                    color: #b8b8bc;
                                    font-size: .26rem;
                                    text-align: center;
                                    font-weight: bolder;
                                    line-height: .68rem;
                                }
                            }
                            .excellentCircle {
                                background-image: url('../../../static/images/g_p-excellentCircle.png');
                            }
                            .goodCircle {
                                background-image: url('../../../static/images/g_p-goodCircle.png');
                            }
                            .mildCircle {
                                background-image: url('../../../static/images/g_p-mildCircle.png');
                            }
                            .moderateCircle {
                                background-image: url('../../../static/images/g_p-moderateCircle.png');
                            }
                            .seriousCircle {
                                background-image: url('../../../static/images/g_p-seriousCircle.png');
                            }
                            .severeCircle {
                                background-image: url('../../../static/images/g_p-severeCircle.png');
                            }
                        }
                    }
                    .content-bottom {
                        display: flex;
                        margin-top: .6rem;
                        justify-content: space-between;
                        >div {
                            color: #fff;
                            padding-left: .72rem;
                            font-size: .22rem;
                            background-position: left center;
                            background-repeat: no-repeat;
                            background-size: .51rem .47rem;
                            p {
                                margin-bottom: .15rem;
                                font-weight: bolder;
                            }
                        }
                        .PM25 {
                            background-image: url('../../../static/images/2.5.png');
                        }
                        .PM10 {
                            background-image: url('../../../static/images/10.png');
                        }
                        .PM100 {
                            background-image: url('../../../static/images/100.png');
                        }
                    }
                }
                .noise-title {
                    color: #fff;
                    margin-top: .5rem;
                    font-size: .26rem;
                    text-align: center;
                    position: relative;
                    span {
                        color: #24e974;
                        font-size: .3rem;
                    }
                    .pic-title {
                        position: absolute;
                        font-size: .14rem;
                        bottom: -0.5rem;
                    }
                    .explain {
                        position: absolute;
                        font-size: .12rem;
                        right: 0;
                        bottom: -0.5rem;
                        .bule-dot {
                            width: .06rem;
                            height: .06rem;
                            overflow: hidden;
                            margin-right: .1rem;
                            border-radius: .06rem;
                            display: inline-block;
                            background-color: #569acc;
                        }
                        .green-dot {
                            width: .06rem;
                            height: .06rem;
                            overflow: hidden;
                            margin-right: .1rem;
                            margin-left: .18rem;
                            border-radius: .06rem;
                            display: inline-block;
                            background-color: #24e974;
                        }
                    }
                }
                .dust-pic {
                    margin-top: .5rem;
                    height: 2.5rem;   
                }
            }
            .history {
                width: 7.3rem;
                .dust-noise,
                .weather {
                    width: 7.3rem;
                    height: 4.5rem;
                    padding: .3rem;
                    background-image: url('../../../static/images/g_p-rightBorder.png');
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: contain;
                    .title {
                        color: #fff;
                        font-size: .25rem;
                        text-align: center;
                    }
                    .scroll-box {
                        height: 3.4rem;
                        overflow: hidden;
                        margin-top: .19rem;
                        ul {
                            // height: 3.23rem;
                            li {
                                color: #fff;
                                display: flex;
                                justify-content: space-between;
                                span {
                                    font-size: .16rem;
                                    line-height: .34rem;
                                }
                                .green-color {
                                    color: #24e974;
                                }
                            }
                        }
                    }
                    >a {
                        display: block;
                        color: #fff;
                        font-size: .14rem;
                        text-align: center;
                    }
                }
                .weather {
                    margin-top: .41rem;
                    // ul {
                    //     // text-align: center;
                    //     // li {
                    //     //     // width: 4.16rem;
                    //     //     margin: 0 auto;
                    //     // }
                    // }
                }
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {
            pid: 0, // 项目id
            dustEmissionListData: "", // 扬尘设备列表
            dustEmissionData: "", // 扬尘监测数据
            dustPicMax: 60, // 污染度最大值
            scrollId: 0, // 滚动判断
        }
    },
    created() {
        this.getPid()
        // 发送请求
        this.getDustEmissionListData()
    },
    mounted() {

    },
    methods: {
        // 初始化污染度图
        contaminate(pmH, pm2, pm10) {
            let mysixwu = this.$echarts.init(document.getElementById("contaminate"));
            mysixwu.setOption({
              // backgroundColor: "#FBFBFB",
              grid: {
                x: 40,
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
                    color: "#fff"
                  },
                  axisLine: {
                    lineStyle: {
                      color: "#132e6d"
                    }
                  },
                  type: "category",
                  boundaryGap: false,
                //   data: ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
                  data: pmH
                }
              ],
              yAxis: [
                {
                  type: "value",
                  max: this.dustPicMax,
                  min: 0,
                  interval: 10,
                  axisLabel: {
                    textStyle: {
                      color: "#fff"
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
                  name: "pm2.5",
                  type: "line",
                  symbolSize: 0,
                  symbol: "none",
                  color: ["#508bb8"],
                //   data: [29, 19, 26, 34, 50, 25]
                  data: pm2
                },
                {
                  name: "pm10",
                  type: "line",
                  symbolSize: 0,
                  symbol: "none",
                  color: ["#24e974"],
                //   data: [19, 9, 16, 24, 40, 15]
                  data: pm10
                }
              ]
            });
        },

        // 获取扬尘设备列表
        getDustEmissionListData() {
            this.$axios.get(`/dustEmission/get/getDustEmissionList?pid=${this.pid}`).then(
                res => {
                    // console.log(res.data)
                    this.dustEmissionListData = res.data.dustEmissionList
                    // 默认显示第一台设备的数据
                    this.getDustEmissionData(this.dustEmissionListData[0].id)
                    this.contaminate()
                }
            )
        },

        // 获取设备id 
        // getSid(sid) {
        //     console.log(sid)
        // },

        // 获取扬尘监测数据
        getDustEmissionData(sid) {
            this.$axios.get(`/dustEmission/get/DustEmissionDatas?sid=${sid}`).then(
                res => {
                    console.log(res.data)
                    this.dustEmissionData = res.data
                    let pmH = []
                    let pm2 = []
                    let pm10 = []
                    for (let i = 0; i < this.dustEmissionData.PM.length; i++) {
                        pmH.push(this.dustEmissionData.PM[this.dustEmissionData.PM.length-1-i].time)
                        pm2.push(this.dustEmissionData.PM[this.dustEmissionData.PM.length-1-i].PM25)
                        pm10.push(this.dustEmissionData.PM[this.dustEmissionData.PM.length-1-i].PM10)
                    }
                     //判断y轴的最大值
                    for (let i = 0; i < pm2.length; i++) {
                      for (let i2 = 0; i2 < pm2.length; i2++) {
                        if (pm2[i]>this.dustPicMax || pm10[i]>this.dustPicMax) {
                          this.dustPicMax += 10
                        }
                      }
                    }
                    // 初始化污染度图
                    this.contaminate(pmH, pm2, pm10)
                    // console.log(this.dustEmissionData.PM)
                    // 初始化滚动
                    if (this.dustEmissionData.dustEmissionListDatas.length > 10 && this.scrollId != 1) {
                        this.scrollStart('dustNoiseBox','dustNoiseBox1','dustNoiseBox2')
                        this.scrollStart('weatherBox','weatherBox1','weatherBox2')
                        this.scrollId = 1
                    }
                }
            )
        },

        // 滚动启动函数
        scrollStart(id,id1,id2) {
            // clearInterval(this.timeId)
            setTimeout(() => {
                var speed = 45;
                var colee2 = document.getElementById(id2);
                var colee1 = document.getElementById(id1);
                var colee = document.getElementById(id);
                colee2.innerHTML = colee1.innerHTML; //克隆colee1为colee2
                function Marquee1() {
                    // console.log(colee1.offsetHeight)
                    //当滚动至colee1与colee2交界时
                    if (colee2.offsetTop - colee.scrollTop <= 0) {
                        colee.scrollTop -= colee1.offsetHeight; //colee跳到最顶端
                    } else {
                        colee.scrollTop++;
                        if (colee.scrollTop == colee1.offsetHeight) {
                            colee.scrollTop = 0;
                        }
                    }
                }   
                let MyMar1 = setInterval(Marquee1, speed); //设置定时器
                //鼠标移上时清除定时器达到滚动停止的目的
                colee.onmouseover = function() {
                    clearInterval(MyMar1)
                }
                //鼠标移开时重设定时器
                colee.onmouseout = function() {
                    MyMar1 = setInterval(Marquee1, speed);
                }
            }, 30);
        },

        // 获取项目id
        getPid() {
          this.pid = localStorage.getItem('pid')
        }
    }
}
</script>

