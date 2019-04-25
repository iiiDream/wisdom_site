<template>
    <div id="g_electricity">
        <!-- 导航栏 -->
        <div class="nav">
            <!-- 面包屑导航 -->
            <div class="crumbs-nav">
                <router-link to="/green">绿色施工</router-link>
                <span>/</span>
                <a>用电检测</a>
            </div>
            <!-- 侧导航栏 -->
            <div class="side-nav">
                <div class="nav-box">
                    <ul>
                        <li v-for="(item,index) in electricityListData" :key="index">
                            <a class="" @click="getElectricityMessageData(item.electricityBoxId)">
                                {{item.comments}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 内容 -->
        <div class="main">
            <div class="left-box">
                <div class="title">
                    {{comments}}
                </div>
                <div class="state green-color">
                    正常运行
                </div>
                <div class="circle-box">
                    <div class="sub-circle" :class="electricityMessageData.new.envirwarm>45?'red-circle':'green-circle'" style="padding-top:0.41rem">
                        &nbsp;{{electricityMessageData.new.envirwarm}}
                        <br>
                        ℃
                        <p class="">环境温度</p>
                    </div>
                    <div class="sub-circle" :class="electricityMessageData.new.current>150?'red-circle':'green-circle'">
                        &nbsp;{{electricityMessageData.new.current}}
                        <br>
                        kwh
                        <p class="">电箱漏电</p>
                    </div>
                </div>
                <ul>
                    <li>
                        <p class="name">A相温度</p>
                        <div class="schedule" :class="electricityMessageData.new.awarm>70?'red-bg':'green-bg'">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                        <p class="temperature" :class="electricityMessageData.new.awarm>70?'red-color':'green-color'">{{electricityMessageData.new.awarm}}℃</p>
                    </li>
                    <li>
                        <p class="name">B相温度</p>
                        <div class="schedule" :class="electricityMessageData.new.bwarm>70?'red-bg':'green-bg'">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                        <p class="temperature" :class="electricityMessageData.new.bwarm>70?'red-color':'green-color'">{{electricityMessageData.new.bwarm}}℃</p>
                    </li>
                    <li>
                        <p class="name">C相温度</p>
                        <div class="schedule" :class="electricityMessageData.new.cwarm>70?'red-bg':'green-bg'">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                        <p class="temperature" :class="electricityMessageData.new.cwarm>70?'red-color':'green-color'">{{electricityMessageData.new.cwarm}}℃</p>
                    </li>
                    <li>
                        <p class="name">N相温度</p>
                        <div class="schedule" :class="electricityMessageData.new.nwarm>70?'red-bg':'green-bg'">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                        <p class="temperature" :class="electricityMessageData.new.nwarm>70?'red-color':'green-color'">{{electricityMessageData.new.nwarm}}℃</p>
                    </li>
                </ul>
                <div class="door">
                    <span>箱门状态</span>
                    <div class="door-open" style="display:none">
                        <div class="open">开</div>
                    </div>
                    <div class="door-close" >
                        <div class="close">关</div>
                    </div>
                </div>
                <div class="bottom-text">
                    <div class="img-box"></div>
                    当前电箱状态
                </div>
            </div>
            <div class="right-box">
                <div class="top-box">
                    <div class="date">
                        日期
                        <el-date-picker
                            v-model="time"
                            value-format="yyyy-MM-dd"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </div>
                    <div class="trigger">
                        切换数据
                        <a :class="historyShow?'active':''" @click="historyShow=true">历史数据</a>
                        <a :class="historyShow?'':'active'" @click="historyShow=false">开关状态</a>
                    </div>
                </div>
                <div class="history-box" id="historyList" v-show="historyShow">
                    <ul id="historyList1">
                        <li v-for="(item,index) in electricityMessageData.currentTemperatures" :key="index">
                            <span>{{item.tm}}</span>
                            <span>环境温度<span :class="item.envirwarm>45?'red-color':'green-color'">{{item.envirwarm}}℃</span></span>
                            <span>电箱漏电<span :class="item.current>150?'red-color':'green-color'">{{item.current}}</span>kwh</span>
                            <span>A相温度：<span :class="item.awarm>70?'red-color':'green-color'">{{item.awarm}}℃</span></span>
                            <span>B相温度：<span :class="item.bwarm>70?'red-color':'green-color'">{{item.bwarm}}℃</span></span>
                            <span>C相温度：<span :class="item.cwarm>70?'red-color':'green-color'">{{item.cwarm}}℃</span></span>
                            <span>N相温度：<span :class="item.nwarm>70?'red-color':'green-color'">{{item.nwarm}}℃</span></span>
                        </li>
                    </ul>
                    <ul id="historyList2"></ul>
                </div>
                <div class="door-box" v-show="!historyShow" id="doorList">
                    <ul class="door" id="doorList1">
                        <li v-for="(item,index) in electricityMessageData.doorLocks" :key="index">
                            <span>电箱门开启时间：{{item.opendoorTime}}</span>
                            <span>电箱门关闭时间：{{item.closelockTime}}</span>
                            <span>电箱门状态：{{item.doorType==0?'关':'开'}}</span>
                        </li>
                    </ul>
                    <ul class="door" id="doorList2"></ul>
                </div>
                <!-- <div class="bottom-text">
                    <div class="img-box"></div>
                    历史数据
                </div> -->
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #g_electricity {
        padding:  .5rem .4rem 0 .4rem;
        display: flex;
        .green-color {
            color: #24e974;
        }
        .red-color {
            color: #fb497c;
        }
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
                }
            }
        }
        // 主体样式
        .main {
            width: 100%;
            margin-left: .4rem;
            display: flex;
            justify-content: space-between;
            .left-box {
                width: 4.7rem;
                height: 9.41rem;
                padding: .4rem .6rem 0 .6rem;
                background-image: url('../../../static/images/g_e-middleBorder.png');
                background-position: center center;
                background-repeat: no-repeat;
                background-size: contain;
                .title {
                    color: #fff;
                    font-size: .26rem;
                    font-weight: bolder;
                    text-align: center;
                }
                .state {
                    margin-top: .2rem;
                    height: .67rem;
                    line-height: .67rem;
                    font-size: .25rem;
                    font-weight: bolder;
                    text-align: center;
                    background-image: url('../../../static/images/s_status-background.png');
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: contain;
                }
                .circle-box {
                    width: 3.2rem;
                    display: flex;
                    margin: 0 auto;
                    margin-top: .2rem;
                    justify-content: space-between;
                    .sub-circle {
                        width: 1.29rem;
                        height: 1.29rem;
                        position: relative;
                        text-align: center;
                        font-size: .2rem;
                        padding-top: .36rem;
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: contain;
                        p {
                            font-size: .16rem;
                            position: absolute;
                            left: 50%;
                            transform: translate(-50%);
                            bottom: -.2rem;
                        }
                    }
                    .green-circle {
                        color: #24e974;
                        background-image: url('../../../static/images/s_c-green.png');
                    }
                    .red-circle {
                        color: #fb497c;
                        background-image: url('../../../static/images/s_c-red.png');
                    }
                }
                >ul {
                    margin-top: .4rem;
                    .name {
                        color: #fff;
                        font-size: .18rem;
                    }
                    .schedule {
                        height: .22rem;
                        margin-top: .1rem;
                        display: flex;
                        justify-content: space-between;
                        // overflow: hidden;
                        i {
                            display: inline-block;
                            width: .07rem;
                            height: .22rem;
                            background-color: #0f1f53;
                            // transform: rotate(30deg);
                            transform: skewX(-30deg);
                        }
                    }
                    .green-bg .on {
                        background-color: #24e974;
                    }
                    .red-bg .on {
                        background-color: #fb497c;
                    }
                    .temperature {
                        text-align: right;
                        margin-top: .05rem;
                        margin-bottom: .05rem;
                    }
                }
                .door {
                    color: #fff;
                    margin-top: .5rem;
                    font-size: .17rem;
                    font-weight: bolder;
                    display: flex;
                    justify-content: space-between;
                    .door-open {
                        height: .26rem;
                        .open {
                            width: .67rem;
                            height: .26rem;
                            display: inline-block;
                            text-align: center;
                            line-height: .26rem;
                            background-image: url('../../../static/images/g_e-closeBg.png');
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: contain;
                        }
                    }
                    .door-close {
                        height: .26rem;
                        .close {
                            width: .67rem;
                            height: .26rem;
                            display: inline-block;
                            text-align: center;
                            line-height: .26rem;
                            background-image: url('../../../static/images/g_e-openBg.png');
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: contain;
                        }
                    }
                }
                .bottom-text {
                    text-align: center;
                    color: #fff;
                    font-size: .16rem;
                    margin: 0 auto;
                    margin-top: .7rem;
                    .img-box {
                        width: .4rem;
                        height: .4rem;
                        margin: 0 auto;
                        margin-bottom: .16rem;
                        background-image: url('../../../static/images/g_e-presentBg.png');
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: contain;
                    }
                }
            }
            .right-box {
                width: 9.85rem;
                height: 9.41rem;
                padding: .4rem .34rem 0 .34rem;
                background-image: url('../../../static/images/g_e-rightBorder.png');
                background-position: center center;
                background-repeat: no-repeat;
                background-size: contain;
                .top-box {
                    display: flex;
                    justify-content: space-between;
                    .date {
                        color: #fff;
                        font-size: .14rem;
                        .el-input {
                            width: 2rem;
                            height: .5rem;
                            padding: .01rem;
                            margin-left: .15rem;
                            .el-input__inner {
                                color: #fff;
                                height: .3rem;
                                line-height: .2rem;
                                font-size: .12rem;
                                padding-left: .07rem;
                                border: .01rem solid #505165;
                                border-radius: .05rem;
                                background-color: #1d1f3b;
                            }
                            .el-input__prefix {
                                display: none;
                            }
                            .el-input__icon {
                                height: .3rem;
                                line-height: .3rem;
                            }
                        }
                    }
                    .trigger {
                        color: #fff;
                        font-size: .18rem;
                        >a {
                            display: inline-block;
                            color: #5e6480;
                            width: .97rem;
                            height: .26rem;
                            font-size: .16rem;
                            text-align: center;
                            line-height: .26rem;
                            background-image: url('../../../static/images/g_e-recordBg.png');
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: contain;
                        }
                        >a:first-child {
                            margin-left: .3rem;
                            transform: translateX(.08rem);
                        }   
                        .active {
                            color: #fff;
                            background-image: url('../../../static/images/g_e-recordActiveBg.png');
                        }
                    }
                }
                .history-box,
                .door-box {
                    height: 8.1rem;
                    margin-top: .22rem;
                    overflow: hidden;
                    ul {
                        li {
                            color: #fff;
                            display: flex;
                            font-size: .16rem;
                            line-height: .54rem;
                            justify-content: space-between;
                        }
                    }
                    .door {
                        width: 6rem;
                        margin: 0 auto;
                    }
                }
                // .bottom-text {
                //     text-align: center;
                //     color: #fff;
                //     font-size: .16rem;
                //     margin: 0 auto;
                //     margin-top: .02rem;
                //     .img-box {
                //         width: .3rem;
                //         height: .3rem;
                //         margin: 0 auto;
                //         margin-bottom: .16rem;
                //         background-image: url('../../../static/images/g_e-historyBg.png');
                //         background-position: center center;
                //         background-repeat: no-repeat;
                //         background-size: contain;
                //     }
                // }
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {
            pid: 0, // 项目id
            electricityListData: '', // 设备列表
            electricityBoxId: 1, // 设备id
            time: '', // 日期
            electricityMessageData: {
                "new": {
                    "electricityBoxId": "WPJZ10000002",
                    "envirwarm": 0,
                    "current": 0,
                    "cwarm": 0,
                    "nwarm": 0,
                    "awarm": 0,
                    "tm": "15:16",
                    "id": 1,
                    "bwarm": 0
                },
                "currentTemperatures": [
                    {
                        "electricityBoxId": "WPJZ10000002",
                        "envirwarm": 0,
                        "current": 0,
                        "cwarm": 0,
                        "nwarm": 0,
                        "awarm": 0,
                        "tm": "15:16",
                        "id": 1,
                        "bwarm": 0
                    }
                ],
                "doorLocks": [
                    {
                        "electricityBoxId": "WPJZ10000002",
                        "opendoorTime": "16:20",
                        "closelockTime": "16:20",
                        "handleTime": "16:20",
                        "closedoorTime": "16:20",
                        "openlockTime": "16:20",
                        "doorType": "0",
                        "id": 1,
                        "lockType": "0"
                    },
                    {
                        "electricityBoxId": "WPJZ10000002",
                        "opendoorTime": "16:20",
                        "closelockTime": "16:20",
                        "handleTime": "16:20",
                        "closedoorTime": "16:20",
                        "openlockTime": "16:20",
                        "doorType": "0",
                        "id": 2,
                        "lockType": "0"
                    }
                ]
            }, // 设备信息
            comments: '', // 当前选中的设备
            historyShow: true, // 历史记录
        }
    },
    created() {
        this.getPid()
        // 发送请求
        this.getElectricityListData()
    },
    methods: {
        // 获取设备列表
        getElectricityListData() {
            this.$axios.get(`/electricityBox/get/list?pid=${this.pid}`).then(
                res => {
                    // console.log(res.data[0].electricityBoxId)
                    this.electricityListData = res.data
                    this.electricityBoxId = this.electricityListData[0].electricityBoxId
                    this.comments = this.electricityListData[0].comments
                    this.getElectricityMessageData()
                }
            )
        },
        
        // 获取设备信息
        getElectricityMessageData() {
            this.$axios.get(`/electricityBox/get/message?electricityBoxId=${this.electricityBoxId}&Time=${this.time}`).then(
                res => {
                    // console.log(res.data)
                    this.electricityMessageData = res.data

                    // 渲染温度条长度
                    this.setScheduleLength()

                    // 滚动初始化
                    if (res.data.currentTemperatures.length > 15) {
                        this.scrollStart('historyList','historyList1','historyList2')
                    }
                    if (res.data.doorLocks.length > 15) {
                        this.scrollStart('doorList','doorList1','doorList2')
                    }
                }
            )
        },

        // 动态渲染温度条长度
        setScheduleLength() {
            // console.log($('.schedule:eq(1) i'))
            for (let i = 0; i < $('.schedule').length; i++) {
                // console.log(i)
                if (i == 0) {
                    // console.log($(`.schedule:eq(${i}) i`))
                    for (let i2 = 0; i2 < Math.ceil(this.electricityMessageData.new.awarm/5); i2++) {
                        // console.log(`123`)
                        // console.log(Math.ceil(this.electricityMessageData.new.bwarm/5))
                        // if (i == 0) {
                        //     console.log($(`.schedule:eq(${i}) i`)[Math.ceil(this.electricityMessageData.new.bwarm/5)])
                        // }
                        // console.log($(`.schedule:eq(${i}) i`)[i2])
                        $($(`.schedule:eq(${i}) i`)[i2]).addClass('on')
                    }
                } else if (i == 1) {
                    for (let i2 = 0; i2 < Math.ceil(this.electricityMessageData.new.bwarm/5); i2++) {
                        $($(`.schedule:eq(${i}) i`)[i2]).addClass('on')
                    }
                } else if (i == 2) {
                    for (let i2 = 0; i2 < Math.ceil(this.electricityMessageData.new.cwarm/5); i2++) {
                        $($(`.schedule:eq(${i}) i`)[i2]).addClass('on')
                    }
                } else {
                    for (let i2 = 0; i2 < Math.ceil(this.electricityMessageData.new.nwarm/5); i2++) {
                        $($(`.schedule:eq(${i}) i`)[i2]).addClass('on')
                    }
                }
            }
        },

        // 滚动启动函数
        scrollStart(id,id1,id2) {
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
                var MyMar1 = setInterval(Marquee1, speed); //设置定时器
                //鼠标移上时清除定时器达到滚动停止的目的
                colee.onmouseover = function() {
                    clearInterval(MyMar1);
                }
                //鼠标移开时重设定时器
                colee.onmouseout = function() {
                    MyMar1 = setInterval(Marquee1, speed);
                }
            }, 1000);
        },

        // 获取项目id
        getPid() {
          this.pid = localStorage.getItem('pid')
        }
    }
}
</script>

