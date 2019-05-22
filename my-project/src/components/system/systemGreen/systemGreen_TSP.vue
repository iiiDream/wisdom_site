<template>
    <div id="systemGreen_TSP">
        <div class="centent-box">
            <!-- 左边区域 -->
            <div class="left-box">
                <!-- 按钮模块 -->
                <div class="button-box">
                    <a class="history" @click="historyClikc">
                        <i class="icon"></i>
                        历史记录
                    </a>
                    <a class="equipment">
                        <i class="icon"></i>
                        切换设备
                    </a>
                    <a class="derive">
                        <i class="icon"></i>
                        导出Excel
                    </a>
                </div>
                <!-- 设备列表/天气与近30天污染度 -->
                <div class="left-bottom">
                    <!-- 天气模块 -->
                    <div class="weather-box">
                        <div class="title">
                            <div class="city">深圳市</div>
                            <div class="date">5月20日 周一 19：11</div>
                        </div>
                        <div class="weather-forecast">
                            <div class="first">
                                <div class="icon"></div>
                                <div class="real-temperature">
                                    <div class="temperature-text">30</div>
                                    <div class="degree">℃</div>
                                </div>
                                <div class="air-temperature">
                                    25~31℃
                                </div>
                                <div class="weather-type">
                                    多云
                                </div>
                                <div class="wind-direction">
                                    无持续风向
                                </div>
                            </div>
                            <div class="no-first">
                                <div class="week">
                                    周二
                                </div>
                                <div class="date">
                                    05月21日
                                </div>
                                <div class="icon"></div>
                                <div class="air-temperature">
                                    25~31℃
                                </div>
                                <div class="weather-type">
                                    多云
                                </div>
                                <div class="wind-direction">
                                    无持续风向
                                </div>
                            </div>
                            <div class="no-first">
                                <div class="week">
                                    周三
                                </div>
                                <div class="date">
                                    05月22日
                                </div>
                                <div class="icon"></div>
                                <div class="air-temperature">
                                    25~31℃
                                </div>
                                <div class="weather-type">
                                    多云
                                </div>
                                <div class="wind-direction">
                                    无持续风向
                                </div>
                            </div>
                        </div>
                        <div class="temperature-chart">
                            <div id="temperature"></div>
                            <div class="right-top">
                                <i class="dot"></i>
                                <span>气温&#12288;单位：℃</span>
                            </div>
                            <div class="middle-text">
                                24小时温度
                            </div>
                        </div>
                    </div>
                    <!-- 近30天污染度模块 -->
                    <div class="AQI-box">
                        <div class="top-text">最近30天</div>
                        <div class="bottom-text">AQI</div>
                        <ul>
                            <li class="excellent">
                                <div class="class">优</div>
                                <div class="progress-bar">
                                    0天
                                </div>
                            </li>
                            <li class="good">
                                <div class="class">良</div>
                                <div class="progress-bar">
                                    31天
                                </div>
                            </li>
                            <li class="mild">
                                <div class="class">轻度</div>
                                <div class="progress-bar">
                                    0天
                                </div>
                            </li>
                            <li class="moderate">
                                <div class="class">中度</div>
                                <div class="progress-bar">
                                    0天
                                </div>
                            </li>
                            <li class="severe">
                                <div class="class">重度</div>
                                <div class="progress-bar">
                                    0天
                                </div>
                            </li>
                            <li class="seriousness">
                                <div class="class">严重</div>
                                <div class="progress-bar">
                                    0天
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- 设备列表 -->
                    <div class="equipment-list">
                        
                    </div>
                </div>
            </div>
            <!-- 主体区域 -->
            <div class="main-box">
                <!-- 主体上半部分 -->
                <div class="main-top" v-show="!historyShow">
                    <div class="main-middle">
                        <div class="data-box">
                            <div class="background-box">
                                <div class="PM25">
                                    <div class="title">
                                        PM2.5
                                    </div>
                                    <div class="value">
                                        40
                                    </div>
                                    <div class="class">
                                        优
                                    </div>
                                    <div class="city">
                                        深圳市
                                        <span>20</span>
                                        | 高于本地20
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="other">
                            <div class="PM10">
                                <i class="icon"></i>
                                <div class="circle-box">
                                    <div class="top-text">PM10</div>
                                    <div class="bottom-text">20</div>
                                </div>
                            </div>
                            <div class="PM100">
                                <i class="icon"></i>
                                <div class="circle-box">
                                    <div class="top-text">PM100</div>
                                    <div class="bottom-text">20</div>
                                </div>
                            </div>
                            <div class="noise">
                                <i class="icon"></i>
                                <div class="circle-box">
                                    <div class="top-text">噪音</div>
                                    <div class="bottom-text">20</div>
                                </div>
                            </div>
                        </div>
                        <div class="standard">
                            
                        </div>
                        <div class="green-measure">
                            绿色措施
                        </div>
                        <div class="icon-box"></div>
                    </div>
                    <div class="main-right">
                        <div class="title-bar">
                            <div class="sum">
                                <i class="icon"></i>
                                <span>设备总数：10</span>
                            </div>
                            <div class="malfunction">
                                <i class="icon"></i>
                                <span>故障数量：0</span>
                            </div>
                        </div>
                        <div class="temperatuer">
                            <div class="text-box">
                                <i class="icon"></i>
                                <div>
                                    <span>气温</span>
                                    <span>29℃</span>
                                </div>
                            </div>
                            <div class="progress-box">
                                <div class="progress-bar"></div>
                            </div>
                        </div>
                        <div class="wind-speed">
                            <div class="text-box">
                                <i class="icon"></i>
                                <div>
                                    <span>风速</span>
                                    <span>29m/s</span>
                                </div>
                            </div>
                            <div class="progress-box">
                                <div class="progress-bar"></div>
                            </div>
                        </div>
                        <div class="humidity">
                            <div class="text-box">
                                <i class="icon"></i>
                                <div>
                                    <span>湿度</span>
                                    <span>29%</span>
                                </div>
                            </div>
                            <div class="progress-box">
                                <div class="progress-bar"></div>
                            </div>
                        </div>
                        <div class="wind-direction">
                            <div class="left-box">
                                <div>
                                    西南风
                                </div>
                                <div class="img-box"></div>
                                <div>风向</div>
                            </div>
                            <div class="right-box">
                                <div class="img-box"></div>
                                <div>点击播放监控</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 主体下半部分 -->
                <div class="main-bottom" v-show="!historyShow">
                    <!-- 污染物浓度折线图 -->
                    <div class="contaminate-chart">
                        <div class="title">24小时污染物浓度</div>
                        <div class="average">
                            PM2.5今日平均浓度：32
                            &#12288;&#12288;&#12288;
                            PM10今日平均浓度：61
                        </div>
                        <div class="lege">
                            <div class="PM25">
                                <div class="dot"></div>
                                PM2.5
                            </div>
                            <div class="PM10">
                                <div class="dot"></div>
                                PM10
                            </div>
                            <div>
                                单位：ug/m³
                            </div>
                        </div>
                        <div id="contaminate"></div>
                    </div>
                    <!-- 噪音饼状图 -->
                    <div class="noise-chart">
                            <div class="noise-text">
                                <div class="left">噪音</div>
                                <div class="right">
                                    <div class="qualified">
                                        <div class="dot"></div>
                                        合格
                                    </div>
                                    <div class="disqualification">
                                        <div class="dot"></div>
                                        不合格
                                    </div>
                                </div>
                            </div>
                            <div id="noise"></div>
                    </div>
                </div>

                <!-- 历史记录 -->
                <div class="history-box" v-show="historyShow">
                    <!-- 搜索栏 -->
                    <div class="search-box">
                        <ul>
                            <li class="date">
                                <span>日期：</span>
                                <el-date-picker
                                    v-model="dateValue"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                </el-date-picker>
                            </li>
                            <li>
                                <span>类型：</span>
                                <el-select v-model="historyValue" placeholder="请选择">
                                    <el-option
                                        v-for="item in historyType"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </li>
                        </ul>
                        <a class="search-button">搜索</a>
                    </div>
                    <!-- 列表 -->
                    <div class="table-box">
                        <el-table
                        :data="tableData"
                        stripe
                        border>
                            <el-table-column
                            type="selection"
                            width="35">
                            </el-table-column>
                            <el-table-column
                            prop="number"
                            label="序号"
                            width="50">
                            </el-table-column>
                            <el-table-column
                            prop="PM25"
                            label="pm2.5"
                            width="70">
                            </el-table-column>
                            <el-table-column
                            prop="PM10"
                            label="pm10"
                            width="70">
                            </el-table-column>
                            <el-table-column
                            prop="PM100"
                            label="pm100"
                            width="70">
                            </el-table-column>
                            <el-table-column
                            prop="noise"
                            label="噪音"
                            width="70">
                            </el-table-column>
                            <el-table-column
                            prop="humidity"
                            label="湿度"
                            width="70">
                            </el-table-column>
                            <el-table-column
                            prop="temperature"
                            label="气温"
                            width="70">
                            </el-table-column>
                            <el-table-column
                            prop="windSpeed"
                            label="风速"
                            width="100">
                            </el-table-column>
                            <el-table-column
                            prop="type"
                            label="状态"
                            width="100">
                            <template slot-scope="scope">
                                <div :class="scope.row.type=='合格'?'green-color':scope.row.type=='不合格'?'red-color':''">
                                    {{ scope.row.type }}
                                </div>
                            </template>
                            </el-table-column>
                            <el-table-column
                            prop="time"
                            label="时间">
                            </el-table-column>
                        </el-table>
                    </div>
                    <!-- 分页 -->
                    <div class="paging-box">
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[15, 30, 45]"
                            :page-size="15"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="2">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #systemGreen_TSP {
        width: 100%;
        .centent-box {
            display: flex;
            border-radius: .04rem;
            background-color: #fff;
            box-shadow: 0 0 .5rem -.3rem #666;
            .left-box {
                width: 4rem;
                .button-box {
                    height: .8rem;
                    padding-top: .2rem;
                    border-bottom: .1rem solid #f7f7f7;
                    a {
                        float: left;
                        height: .3rem;
                        color: #0090ff;
                        font-size: .14rem;
                        transition: all .5s;
                        margin-left: .2rem;
                        line-height: .28rem;
                        border-radius: .02rem;
                        padding-right: .09rem;
                        border: .01rem solid #0090ff;
                        &:hover {
                            color: #fff;
                            background-color: #0090ff;
                        }
                        .icon {
                            width: .37rem;
                            height: .28rem;
                            transition: all .5s;
                            display: inline-block;
                            vertical-align: middle;
                            background-repeat: no-repeat;
                            background-position: center center;
                        }
                    }
                }
                .left-bottom {
                    height: 8.7rem;
                    .weather-box {
                        height: 4.89rem;
                        .title {
                            // padding-top: .34rem;
                            // padding-left: .68rem;
                            padding: .34rem 0 .34rem .68rem;
                            .city {
                                color: #4a4a4a;
                                font-size: .24rem;
                                font-weight: bolder;
                                display: inline-block;
                            }
                            .date {
                                color: #4a4a4a;
                                margin-left: .22rem;
                                vertical-align: top;
                                display: inline-block;
                            }
                        }
                        .weather-forecast {
                            padding-left: .2rem;
                            .first {
                                width: 1.44rem;
                                display: inline-block;
                                .icon {
                                width: .52rem;
                                height: .52rem;
                                margin: 0 auto;
                                background-color: aquamarine;
                                }
                                .real-temperature {
                                    height: .43rem;
                                    text-align: center;
                                    padding-top: .15rem;
                                    .temperature-text {
                                        color: #4a4a4a;
                                        font-size: .32rem;
                                        font-weight: bolder;
                                        display: inline-block;
                                    }
                                    .degree {
                                        height: .1rem;
                                        color: #4a4a4a;
                                        font-size: .12rem;
                                        line-height: .1rem;
                                        vertical-align: top;
                                        display: inline-block;
                                    }
                                }
                                .air-temperature {
                                    height: .27rem;
                                    color: #4a4a4a;
                                    font-size: .12rem;
                                    text-align: center;
                                    padding-top: .15rem;
                                    line-height: .12rem;
                                }
                                .weather-type {
                                    height: .29rem;
                                    color: #4a4a4a;
                                    font-size: .12rem;
                                    text-align: center;
                                    line-height: .14rem;
                                    padding-top: .15rem;
                                }
                                .wind-direction {
                                    height: .29rem;
                                    color: #3ada76;
                                    font-size: .12rem;
                                    text-align: center;
                                    line-height: .14rem;
                                    padding-top: .15rem;
                                }
                            }
                            .no-first {
                                width: 1.06rem;
                                vertical-align: top;
                                display: inline-block;
                                border-left: .01rem solid #000;
                                .week {
                                    height: .14rem;
                                    color: #4a4a4a;
                                    font-size: .12rem;
                                    text-align: center;
                                    line-height: .14rem;
                                }
                                .date {
                                    height: .26rem;
                                    color: #bebebe;
                                    font-size: .12rem;
                                    text-align: center;
                                    line-height: .14rem;
                                    padding-top: .12rem;
                                }
                                .icon {
                                    width: .52rem;
                                    height: .52rem;
                                    margin: 0 auto;
                                    margin-top: .12rem;
                                    background-color: aquamarine;
                                }
                                .air-temperature {
                                    height: .24rem;
                                    color: #4a4a4a;
                                    font-size: .12rem;
                                    text-align: center;
                                    padding-top: .12rem;
                                    line-height: .12rem;
                                }
                                .weather-type {
                                    height: .26rem;
                                    color: #4a4a4a;
                                    font-size: .12rem;
                                    text-align: center;
                                    padding-top: .12rem;
                                    line-height: .14rem;
                                }
                                .wind-direction {
                                    height: .26rem;
                                    color: #3ada76;
                                    font-size: .12rem;
                                    text-align: center;
                                    line-height: .14rem;
                                    padding-top: .12rem;
                                }
                            }
                        }
                        .temperature-chart {
                            height: 2.08rem;
                            position: relative;
                            #temperature {
                                width: 4rem;
                                height: 2.08rem;
                            }
                            .right-top {
                                top: .1rem;
                                right: .2rem;
                                font-size: .12rem;
                                position: absolute;
                                .dot {
                                    width: .1rem;
                                    height: .1rem;
                                    margin-right: .05rem;
                                    display: inline-block;
                                    border-radius: .06rem;
                                    vertical-align: middle;
                                    background-color: #3ada76;
                                }
                            }
                            .middle-text {
                                left: 50%;
                                bottom: .06rem;
                                font-size: .14rem;
                                position: absolute;
                                transform: translateX(-50%);
                            }
                        }
                    }
                    .AQI-box {
                        height: 3.81rem;
                        padding-left: .5rem;
                        padding-top: .24rem;
                        border-top: .1rem solid #f7f7f7;
                        .top-text {
                            height: .26rem;
                            color: #4a4a4a;
                            font-size: .24rem;
                            font-weight: bolder;
                            line-height: .26rem;
                        }
                        .bottom-text {
                            height: .4rem;
                            color: #4a4a4a;
                            font-size: .18rem;
                            line-height: .2rem;
                            padding-top: .2rem;
                            font-weight: bolder;
                        }
                        ul {
                            padding-top: .34rem;
                            li {
                                height: .42rem;
                                padding-bottom: .18rem;
                                .class {
                                    width: .44rem;
                                    height: .24rem;
                                    color: #4a4a4a;
                                    font-size: .16rem;
                                    text-align: right;
                                    line-height: .24rem;
                                    display: inline-block;
                                    padding-right: .12rem;
                                }
                                .progress-bar {
                                    width: .5rem;
                                    color: #fff;
                                    height: .24rem;
                                    font-size: .16rem;
                                    line-height: .24rem;
                                    padding-left: .13rem;
                                    display: inline-block;
                                    border-radius: .24rem;
                                }
                            }
                            .excellent {
                                .progress-bar {
                                    background-color: #3ada76;
                                }
                            }
                            .good {
                                .progress-bar {
                                    width: 2.67rem;
                                    background-color: #f6c500;
                                }
                            }
                            .mild {
                                .progress-bar {
                                    background-color: #fd794b;
                                }
                            }
                            .moderate {
                                .progress-bar {
                                    background-color: #f23a3a;
                                }
                            }
                            .severe {
                                .progress-bar {
                                    background-color: #9e3af2;
                                }
                            }
                            .seriousness {
                                .progress-bar {
                                    background-color: #6d1e06;
                                }
                            }
                        }
                    }
                }
            }
            .main-box {
                flex: 1;
                .main-top {
                    width: 100%;
                    height: 5.69rem;
                    .main-middle {
                        width: 68.5%;
                        height: 5.69rem;
                        position: relative;
                        vertical-align: top;
                        display: inline-block;
                        border-left: .1rem solid #f7f7f7;
                        border-right: .1rem solid #f7f7f7;
                        .data-box {
                            margin: 0 auto;
                            width: 3.22rem;
                            height: 3.86rem;
                            padding-top: .64rem;
                            .background-box {
                                width: 3.22rem;
                                height: 3.22rem;
                                padding-top: .36rem;
                                border-radius: 3.22rem;
                                border: .01rem solid #3edb79;
                                .PM25 {
                                    width: 2.48rem;
                                    margin: 0 auto;
                                    height: 2.48rem;
                                    position: relative;
                                    padding-top: .53rem;
                                    border-radius: 2.48rem;
                                    background-color: #3ada76;
                                    .title {
                                        color: #fff;
                                        height: .22rem;
                                        font-size: .22rem;
                                        text-align: center;
                                        line-height: .22rem;
                                        font-weight: bolder;
                                    }
                                    .value {
                                        color: #fff;
                                        height: .68rem;
                                        font-size: .44rem;
                                        text-align: center;
                                        line-height: .44rem;
                                        font-weight: bolder;
                                        padding-top: .24rem;
                                    }
                                    .class {
                                        color: #fff;
                                        height: .58rem;
                                        font-size: .32rem;
                                        text-align: center;
                                        line-height: .34rem;
                                        font-weight: bolder;
                                        padding-top: .24rem
                                    }
                                    .city {
                                        bottom: -.8rem;
                                        width: 2.48rem;
                                        font-size: .17rem;
                                        position: absolute;
                                        text-align: center;
                                        span {
                                            font-size: .25rem;
                                            font-weight: bolder;
                                        }
                                    }
                                }
                            }
                        }
                        .other {
                            top: 0;
                            right: 0;
                            width: 1.9rem;
                            position: absolute;
                            padding-top: .46rem;
                            >div {
                                height: .92rem;
                                margin-bottom: .65rem;
                                .icon {
                                    width: .3rem;
                                    height: .3rem;
                                    display: inline-block;
                                    background-color: aquamarine;
                                }
                                .circle-box {
                                    width: .92rem;
                                    height: .92rem;
                                    margin-left: .2rem;
                                    display: inline-block;
                                    border-radius: .92rem;
                                    border: .15rem solid #e2eeff;
                                    .top-text {
                                        height: .26rem;
                                        font-size: .12rem;
                                        text-align: center;
                                        line-height: .11rem;
                                        padding-top: .15rem
                                    }
                                    .bottom-text {
                                        height: .26rem;
                                        font-size: .21rem;
                                        text-align: center;
                                        line-height: .21rem;
                                        padding-top: .05rem;
                                        font-weight: bolder;
                                    }
                                }
                            }
                        }
                        .standard {
                            width: 6.7rem;
                            height: .34rem;
                            margin: 0 auto;
                            margin-top: 1.2rem;
                            border-radius: .34rem;
                            background-color: #3ada76;
                        }
                        .green-measure {
                            top: .46rem;
                            left: .52rem;
                            width: .9rem;
                            height: .3rem;
                            color: #3ada76;
                            position: absolute;
                            text-align: center;
                            line-height: .28rem;
                            border-radius: .02rem;
                            border: .01rem solid #3ada76;
                        }
                        >.icon-box {
                            top: 3.56rem;
                            left: .52rem;
                            width: .64rem;
                            height: .64rem;
                            position: absolute;
                            background-color: #3ada76;
                        }
                    }
                    .main-right {
                        width: 31.5%;
                        height: 5.69rem;
                        display: inline-block;
                        .title-bar {
                            height: .8rem;
                            padding-left: .4rem;
                            border-bottom: .1rem solid #f7f7f7;
                            .sum {
                                line-height: .7rem;
                                display: inline-block;
                                .icon {
                                    width: .28rem;
                                    height: .28rem;
                                    margin-right: .09rem;
                                    display: inline-block;
                                    vertical-align: middle;
                                    background-color: #0090ff;
                                }
                                span {
                                    color: #0090ff;
                                    font-size: .16rem;
                                }
                            }
                            .malfunction {
                                line-height: .7rem;
                                padding-left: .3rem;
                                display: inline-block;
                                .icon {
                                    width: .28rem;
                                    height: .28rem;
                                    margin-right: .09rem;
                                    display: inline-block;
                                    vertical-align: middle;
                                    background-color: #ff7a81;
                                }
                                span {
                                    color: #ff7a81;
                                    font-size: .16rem;
                                }
                            }
                        }
                        .temperatuer,
                        .humidity,
                        .wind-speed {
                            padding-left: .4rem;
                            padding-bottom: .47rem;
                            .text-box {
                                width: 3.6rem;
                                height: .37rem;
                                padding-bottom: .12rem;
                                .icon {
                                    width: .25rem;
                                    height: .25rem;
                                    display: inline-block;
                                    border-radius: .25rem;
                                    vertical-align: middle;
                                    background-color: #84b4fd;
                                }
                                >div {
                                    width: 2.95rem;
                                    padding-left: .08rem;
                                    display: inline-flex;
                                    justify-content: space-between;
                                    span {
                                        font-size: .13rem;
                                    }
                                }
                            }
                            .progress-box {
                                width: 3.2rem;
                                height: .1rem;
                                border-radius: .1rem;
                                background-color: #e2eeff;
                            }
                        }
                        .temperatuer {
                            padding-top: .27rem;
                            .progress-box {
                                .progress-bar {
                                    width: 50%;
                                    height: .1rem;
                                    border-radius: .1rem;
                                    background: linear-gradient(to right,#ff868c,#ff787f);
                                }
                            }
                        }
                        .wind-speed {
                            .progress-box {
                                .progress-bar {
                                    width: 66%;
                                    height: .1rem;
                                    border-radius: .1rem;
                                    background: linear-gradient(to right,#ffb984,#ffb079);
                                }
                            }
                        }
                        .humidity {
                            .progress-box {
                                .progress-bar {
                                    width: 29%;
                                    height: .1rem;
                                    border-radius: .1rem;
                                    background: linear-gradient(to right,#76c3fe,#6aa4fd);
                                }
                            }
                        }
                        .wind-direction {
                            height: 1.52rem;
                            padding-left: .4rem;
                            .left-box {
                                width: 1.3rem;
                                height: 1.52rem;
                                display: inline-block;
                                div {
                                    font-size: .13rem;
                                    text-align: center;
                                }
                                .img-box {
                                    width: 1.3rem;
                                    height: .8rem;
                                    margin: .22rem 0;
                                    background-color: #77e5a0;
                                }
                            }
                            .right-box {
                                width: 1.6rem;
                                height: 1.6rem;
                                margin-left: .28rem;
                                vertical-align: top;
                                padding-top: .46rem;
                                display: inline-block;
                                .img-box {
                                    width: 1.6rem;
                                    height: .9rem;
                                    background-color: #e2e3e2;
                                }
                                div {
                                    color: #0090ff;
                                    font-size: .13rem;
                                    text-align: center;
                                }
                            }
                        }
                    }
                }
                .main-bottom {
                    display: flex;
                    height: 3.81rem;
                    border-top: .1rem solid #f7f7f7;
                    .contaminate-chart {
                        width: 68.5%;
                        height: 3.71rem;
                        position: relative;
                        #contaminate {
                            height: 3.71rem;
                        }
                        .title {
                            top: .1rem;
                            left: .56rem;
                            font-size: .2rem;
                            position: absolute;
                            font-weight: bolder;
                        }
                        .average {
                            top: .5rem;
                            left: .56rem;
                            font-size: .18rem;
                            position: absolute;
                        }
                        .lege {
                            top: .9rem;
                            right: .8rem;
                            position: absolute;
                            >div {
                                font-size: .12rem;
                                margin-left: .30rem;
                                display: inline-block;
                                .dot {
                                    width: .1rem;
                                    height: .1rem;
                                    display: inline-block;
                                }
                            }
                            .PM25 {
                                .dot {
                                    background-color: #3ada76;
                                }
                            }
                            .PM10 {
                                .dot {
                                    background-color: #0090ff;
                                }
                            }
                        }
                    }
                    .noise-chart {
                        width: 31.5%;
                        height: 3.71rem;
                        .noise-text {
                            height: .3rem;
                            position: relative;
                            .left {
                                top: .3rem;
                                left: .1rem;
                                font-size: .18rem;
                                position: absolute;
                            }
                            .right {
                                top: .2rem;
                                right: .3rem;
                                font-size: .16rem;
                                position: absolute;
                                .qualified {
                                    .dot {
                                        width: .15rem;
                                        height: .15rem;
                                        display: inline-block;
                                        vertical-align: middle;
                                        background-color: #3ada76;
                                    }
                                }
                                .disqualification {
                                    .dot {
                                        width: .15rem;
                                        height: .15rem;
                                        display: inline-block;
                                        vertical-align: middle;
                                        background-color: #ff7a81;
                                    }
                                }
                            }
                        }
                        #noise {
                            height: 3.41rem;
                        }
                    }
                }
                .history-box {
                    height: 9.5rem;
                    border-left: .1rem solid #f7f7f7;
                    .search-box {
                        height: .8rem;
                        border-bottom: .1rem solid #f7f7f7;
                        ul {
                            padding-left: 1.95rem;
                            li {
                                float: left;
                                margin-right: 1rem;
                                span {
                                    float: left;
                                    height: .7rem;
                                    font-size: .18rem;
                                    line-height: .7rem;
                                }
                                input {
                                    float: left;
                                    width: 2.6rem;
                                    height: .4rem;
                                    margin-top: .15rem;
                                    padding-left: .1rem;
                                    border-radius: .02rem;
                                    vertical-align: middle;
                                    border: .01rem solid #b6b6b6;
                                }
                                .el-input {
                                    height: .4rem;
                                }
                            }
                            .date {
                                .el-date-editor {
                                    width: 2.6rem;
                                    height: .4rem;
                                    overflow: hidden;
                                    margin-top: .15rem;
                                    border: .01rem solid #b6b6b6;
                                    span {
                                        padding: 0;
                                        width: .28rem;
                                        padding-left: .1rem;
                                    }
                                    input {
                                        margin: 0;
                                        border: 0;
                                        width: .95rem;
                                    }
                                }
                            }
                        }
                        .search-button {
                            float: right;
                            color: #fff;
                            height: .4rem;
                            width: 1.63rem;
                            font-size: .2rem;
                            margin-top: .15rem;
                            margin-right: .15rem;
                            text-align: center;
                            transition: all .5s;
                            line-height: .38rem;
                            border-radius: .02rem;
                            background-color: #ffd14f;
                            border: .01rem solid #d4ad40;
                            &:hover {
                                background-color: #d4ad40;
                            }
                        }
                    }
                    .table-box {
                        width: 100%;
                        padding: 0 .2rem;
                        margin-top: .2rem;
                        min-height: 7.8rem;
                        .el-table {
                            width: 12.28rem;
                            // width: 100%;
                            th {
                                padding: 0;
                                div {
                                    color: #4a4a4a;
                                    height: .35rem;
                                    line-height: .35rem;
                                    background-color: #c5e8ff;
                                }
                            }
                            td {
                                padding: 0;
                                div {
                                    height: .35rem;
                                    color: #646464;
                                    line-height: .35rem;
                                }
                            }
                            .red-color {
                                color: #fe8990;
                            }
                            .green-color {
                                color: #58de87;
                            }
                        }
                    }
                    .paging-box {
                        width: 100%;
                        height: .32rem;
                        margin-top: .2rem;
                        padding-right: .2rem;
                        .el-pagination {
                            float: right;
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
            historyShow: false, // 历史记录列表显示状态
            historyType: [{
              value: '选项1',
              label: '合格'
            }, {
              value: '选项2',
              label: '不合格'
            }], // 历史记录类型
            historyValue: '', // 历史记录类型当前选中值
            dateValue: '', // 日期值
            tableData: [{
                number: 1, // 序号
                PM25: 20, // pm2.5
                PM10: 50, // pm10
                PM100: 70, // pm100
                noise: 60, // 噪音
                humidity: '29%', // 湿度
                temperature: '30℃', // 气温
                windSpeed: '1.6m/s', // 风速
                type: '合格', // 状态
                time: '2019-04-29 10：51：43', // 时间
            },{
                number: 1, // 序号
                PM25: 20, // pm2.5
                PM10: 50, // pm10
                PM100: 70, // pm100
                noise: 60, // 噪音
                humidity: '29%', // 湿度
                temperature: '30℃', // 气温
                windSpeed: '1.6m/s', // 风速
                type: '不合格', // 状态
                time: '2019-05-29 10：51：43', // 时间
            }], // 表格数据
            currentPage: 1, // 当前页码
        }
    },
    mounted() {
        this.temperature()
        this.contaminate()
        this.noise()
    },
    methods: {
        // 24小时气温折线图：ECharts图渲染
        temperature() {
            let temperature = this.$echarts.init(
              document.getElementById("temperature")
            )
            temperature.setOption({
                // backgroundColor: "#FBFBFB",
                grid: {
                    x: 20,
                    y: 50,
                    x2: 30,
                    y2: 40,
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
                          "08时",
                          "11时",
                          "14时",
                          "17时",
                          "20时",
                          "23时",
                          "02时",
                          "05时"
                        ]
                        // data: aMDay
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        min: -10,
                        interval: 10,
                        axisLabel: {
                            textStyle: {
                                color: "#000"
                            },
                            formatter: "{value}℃"
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#fff"
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ["#0793ff"],
                                width: 1,
                                type: "dashed"
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: "气温",
                        type: "line",
                        symbolSize: 10,
                        smooth: 0.2,
                        symbol:'circle',
                        color: ["#3ada76"],
                        data: [20, 24, 26, 26, 18, 16, 15, 15]
                        // data: aMTotal
                    },
                ]
            })
        },

        // 24小时污染度浓度：ECharts图渲染
        contaminate() {
            let contaminate = this.$echarts.init(
              document.getElementById("contaminate")
            )
            contaminate.setOption({
                grid: {
                    y: 140,
                },
                tooltip: {
                    trigger: "axis"
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']
                },
                yAxis: {
                    interval: 20,
                    type: 'value'
                },
                series: [{
                    name: 'PM10',
                    data: [100, 93, 91, 94, 109, 103, 102, 80],
                    type: 'line',
                    color: '#7fc7ff',
                    symbolSize: 0,
                    areaStyle: {
                        color: '#7fc7ff'
                    }
                },{
                    name: 'PM2.5',
                    data: [82, 63, 79, 83, 89, 93, 92, 65],
                    type: 'line',
                    color: '#9cecba',
                    symbolSize: 0,
                    areaStyle: {
                        color: '#9cecba'
                    }
                }]
            })
        },

        // 噪音月占比：ECharts图渲染
        noise() {
            let noise = this.$echarts.init(
                document.getElementById("noise")
            )
            noise.setOption({
                color: [
                    "#3ada76",
                    "#ff7a81",
                ],
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c}天 ({d}%)"
                },
                // legend: {
                //     orient: "vertical",
                //     x: "445px",
                //     y: "75px",
                //     itemWidth: 16, // 设置图例图形的宽
                //     itemHeight: 16, // 设置图例图形的高
                //     textStyle: {
                //         fontSize: "16",
                //         color:"#000"
                //     },
                //     data: ["合格", "不合格"]
                // },
                series: [{
                    name: "噪音",
                    type: "pie",
                    radius: ["50%", "70%"],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: "center"
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: "30",
                                fontWeight: "bold"
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 0, name: "合格" },
                        { value: 0, name: "不合格" }
                    ]
                }]
            })
        },

        // 历史记录列表状态切换
        historyClikc() {
            this.historyShow = !this.historyShow
        },

        handleSizeChange(val) {
            console.log(`每页${val}条`)
        },
        handleCurrentChange(val) {
            console.log(`当前页：${val}`)
        },
    }
}
</script>