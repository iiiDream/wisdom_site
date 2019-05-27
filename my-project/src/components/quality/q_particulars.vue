<template>
    <div id="q_particulars">
        <!-- 主体区域 -->
        <div class="centent-box">
            <!-- 面包屑导航 -->
            <div class="crumbs-nav">
                <router-link to="/quality/q_statistics">首页</router-link>
                <span>/</span>
                <router-link to="/quality/q_record">检查记录</router-link>
                <span>/</span>
                <span class="present">详情</span>
            </div>
            <!-- 表标题 -->
            <div class="list-title">
                <div class="title-left">
                    <div class="state green-color" :class="pollingDetail[pollingDetail.length-1].isAvailable==3?'red-color':pollingDetail[pollingDetail.length-1].isAvailable==5?'green-color':'orange-color'">
                        {{pollingDetail[pollingDetail.length-1].isAvailable==7?'待复查'
                        :pollingDetail[pollingDetail.length-1].isAvailable==6?'复查未通过'
                        :pollingDetail[pollingDetail.length-1].isAvailable==5?'复查通过'
                        :pollingDetail[pollingDetail.length-1].isAvailable==4?'待整改'
                        :pollingDetail[pollingDetail.length-1].isAvailable==3?'超期未整改'
                        :pollingDetail[pollingDetail.length-1].isAvailable==2?'复查未通过'
                        :pollingDetail[pollingDetail.length-1].isAvailable==1?'待复查'
                        :pollingDetail[pollingDetail.length-1].isAvailable==0?'待整改':''}}
                    </div>
                    <div class="creation-time">
                        创建时间：{{pollingList.createTime}}
                    </div>
                </div>
                <div class="title-right">
                    <div class="number">
                        编号:{{pollingList.pollingId}}
                    </div>
                    <div class="QRcode-box">

                    </div>
                </div>
            </div>
            <!-- 流程详细信息 -->
            <div class="flow">
                <!-- 安全检查 -->
                <div class="examine">
                    <div class="title">
                        安全检查
                    </div>
                    <div class="issue">
                        {{pollingList.describex}}
                        <i class="slight"></i>
                    </div>
                    <ul>
                        <li>
                            <span class="align">检查区域：</span>
                            <span>{{pollingList.place}}</span>    
                        </li>
                        <!-- <li>
                            <span class="align">隐患类型：</span>
                            <span>其他</span>
                        </li> -->
                        <li>
                            <span class="align">分包单位：</span>
                            <span>{{pollingList.unitTitle}}</span>
                        </li>
                        <li>
                            <span class="align">检查人：</span>
                            <span>检查人</span>
                        </li>
                        <li>
                            <span class="align">检查时间：</span>
                            {{pollingList.createTime}}
                        </li>
                    </ul>
                    <div class="pic-box" :style="`background-image:url(${pollingList.fileUrl})`">

                    </div>
                </div>
                <!-- 整改通知 -->
                <div class="inform">
                    <div class="title">
                        整改通知
                    </div>
                    <ul>
                        <li>
                            <span class="align">整改人：</span>
                            整改人
                        </li>
                        <li>
                            <span class="align">整改时限：</span>
                            {{pollingList.deadlineTime}}
                        </li>
                        <li>
                            <span class="align">整改要求：</span>
                            {{pollingList.rectification}}
                        </li>
                        <li>
                            表单创造时间：{{pollingList.createTime}}
                        </li>
                    </ul>
                </div>
                <!-- 详情 -->
                <div class="ergodic-box" v-for="(item,index) in pollingDetail" :key="index">
                    <!-- 整改情况 -->
                    <div class="dispose" v-if="item.isAvailable<3">
                        <div class="title">
                            第{{index/2+1}}次整改
                        </div>
                        <div class="name">
                            <span class="algin">整改人：</span>
                            <span>整改人</span>
                        </div>
                        <div class="situation">
                            <span>处理情况</span>
                            <br>
                            {{item.describex}}
                        </div>
                        <div class="pic-box" :style="`background-image:url(${item.fileUrl})`">

                        </div>
                        <div class="time">
                            <span class="align">整改时间：</span>
                            {{item.deadlineTime}}
                        </div>
                    </div>
                    <!-- 复查情况 -->
                    <div class="review" v-if="item.isAvailable==5||item.isAvailable==6">
                        <div class="opinion">
                            复查意见
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {{item.isAvailable==5?'通过':'不通过'}}
                            <br>
                            {{item.describex}}
                        </div>
                        <div class="person">
                            复查人：复查人
                        </div>
                        <div class="pic-box" :style="`background-image:url(${item.fileUrl})`"></div>
                        <div class="time">复查时间：{{item.deadlineTime}}</div>
                    </div>
                </div>
                <!-- 表单创建时间 -->
                <div class="establish-time">
                    表单创建时间：{{pollingList.createTime}}
                </div>
            </div>
            <!-- 流程进度 -->
            <!-- <div class="schedule">
                <div class="left-box">
                    <div class="top-title">流程</div>
                    <el-timeline :reverse="reverse">
                        <el-timeline-item
                            v-for="(activity, index) in activities"
                            :key="index"
                            :color="activity.color"
                            placement="top"
                            :timestamp="activity.timestamp">
                            {{activity.content}}
                        </el-timeline-item>
                    </el-timeline>
                    <div class="bottom-title">通知人</div>
                    <div class="inform">
                        无
                    </div>
                </div>
                <div class="right-box">
                    <ul>
                        <li>发起安全整改</li>
                        <li>整改完成</li>
                        <li>复查通过</li>
                    </ul>
                </div>
            </div> -->
        </div> 
    </div>
</template>

<style lang="less">
    #q_particulars {
        .centent-box {
            width: 18.4rem;
            margin: 0 auto;
            margin-top: .5rem;
            padding: .3rem .3rem .3rem .7rem;
            border: .02rem solid #142a6a;
            .crumbs-nav {
                a {
                    color: #fff;
                    font-size: .12rem;
                }
                span {
                    color: #fff;
                    padding: 0 .08rem;
                }
                .present {
                    color: #a8a9ae;
                    padding: 0;
                }
            }
            .list-title {
                background-color: #142a6a;
                height: 1.04rem;
                margin-top: .3rem;
                margin-bottom: .4rem;
                padding: .25rem .2rem 0 .2rem;
                .title-left {
                    float: left;
                    .state {
                        font-size: .18rem;
                    }
                    .green-color {
                        color: #20d46c;
                    }
                    .orange-color {
                        color: #ff721b;
                    }
                    .red-color {
                        color: #b1335d;
                    }
                    .creation-time {
                        color: #fff;
                        font-size: .13rem;
                        margin-top: .1rem;
                    }
                }
                .title-right {
                    float: right;
                    position: relative;
                    .number {
                        top: -0.24rem;
                        left: 0;
                        color: #fff;
                        font-size: .12rem;
                        position: absolute;
                    }
                    .QRcode-box {
                        width: .6rem;
                        height: .6rem;
                        background-color: #fff;
                    }
                }
            }
            .flow {
                color: #fff;
                display: inline-block;
                .pic-box {
                    width: 1.35rem;
                    height: 1.35rem;
                    margin-top: .3rem;
                    padding-left: .18rem;
                    background-image: url('../../../static/images/temp4.jpg');
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .examine {
                    .title {
                        height: .2rem;
                        line-height: .2rem;
                        font-size: .18rem;
                        font-weight: bolder;
                        padding-left: .15rem;
                        border-left: .03rem solid #0097fe;
                    }
                    .issue {
                        margin-top: .16rem;
                        padding-left: .18rem;
                        font-size: .15rem;
                        font-weight: bolder;
                        .slight {
                            display: inline-block;
                            width: .36rem;
                            height: .13rem;
                            margin-left: .2rem;
                            background-image: url('../../../static/images/q_r-slight.png');
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: contain;
                        }
                    }
                    ul {
                        margin-top: .21rem;
                        padding-left: .18rem;
                        li {
                            font-size: .12rem;
                            line-height: .32rem;
                            .align {
                                display: inline-block;
                                width: .6rem;
                                text-align: right;
                            }
                        }
                    }
                }
                .inform {
                    margin-top: .3rem;
                    .title {
                        height: .2rem;
                        line-height: .2rem;
                        font-size: .18rem;
                        font-weight: bolder;
                        padding-left: .15rem;
                        border-left: .03rem solid #0097fe;
                    }
                    ul {
                        padding-left: .18rem;
                        li {
                            font-size: .12rem;
                            line-height: .32rem;
                            .align {
                                display: inline-block;
                                width: .6rem;
                                text-align: right;
                            }
                        }
                    }
                }
                .dispose {
                    margin-top: .3rem;
                    .title {
                        height: .2rem;
                        line-height: .2rem;
                        font-size: .18rem;
                        font-weight: bolder;
                        padding-left: .15rem;
                        border-left: .03rem solid #0097fe;
                    }
                    .name {
                        padding-left: .18rem;
                        font-size: .12rem;
                        margin-top: .1rem;
                        .algin {
                            display: inline-block;
                            width: .6rem;
                            text-align: right;
                        }
                    }
                    .situation {
                        margin-top: .05rem;
                        font-size: .12rem;
                        span {
                            font-size: .14rem;
                            font-weight: bolder;
                        }
                    }
                    .time {
                        color: #fff;
                        font-size: .12rem;
                        margin-top: .2rem;
                        padding-left: .18rem;
                        .align {
                            display: inline-block;
                            width: .6rem;
                            text-align: right;
                        }
                    }
                }
                .review {
                    width: 8.88rem;
                    height: 3.4rem;
                    margin-top: .3rem;
                    padding-top: .3rem;
                    padding-left: .18rem;
                    background-color: #142a6a;
                    .opinion {
                        font-size: .14rem;
                        line-height: .34rem;
                    }
                    .time {
                        margin-top: .2rem;
                        font-size: .12rem;
                    }
                }
                .establish-time {
                    font-size: .12rem;
                    margin-top: .3rem;
                }
            }
            .schedule {
                width: 7.84rem;
                float: right;
                .left-box {
                    display: inline-block;
                    .top-title {
                        color: #fff;
                        height: .18rem;
                        line-height: .18rem;
                        font-size: .16rem;
                        padding-left: .15rem;
                        border-left: .03rem solid #0097fe;
                    }
                    .el-timeline {
                        margin-top: .2rem;
                        padding-left: .18rem;
                        .el-timeline-item {
                            color: #fff;
                            .el-timeline-item__tail {
                                border-color: #24e874;
                            }
                            .el-timeline-item__wrapper {
                                .el-timeline-item__timestamp {
                                    color: #fff;
                                }
                                .el-timeline-item__content {
                                    color: #fff;
                                }
                            }
                        }
                    }
                    .bottom-title {
                        color: #fff;
                        height: .18rem;
                        line-height: .18rem;
                        font-size: .16rem;
                        margin-top: .1rem;
                        padding-left: .15rem;
                        border-left: .03rem solid #0097fe;
                    }
                    .inform {
                        color: #fff;
                        font-size: .14rem;
                        margin-top: .15rem;
                        padding-left: .18rem;
                    }
                }
                .right-box {
                    float: right;
                    ul {
                        padding-top: .38rem;
                        padding-right: .2rem;
                        li {
                            color: #24e874;
                            height: .69rem;
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
            reverse: true,
            activities: [{
              content: '整改复检 安全工程师王家兴',
              timestamp: '2018-04-15',
              color: '#24e874',
            }, {
              content: '整改负责人 项目负责人伟业-韩子昂',
              timestamp: '2018-04-13',
              color: '#24e874',
            }, {
              content: '安全工程师王家兴',
              timestamp: '2018-04-11',
              color: '#24e874',
            }],
            getNameState: 0, // getName状态只调用一次
            pollingId: '', // 整改id
            pollingDetail: '', // 整改单详情
            pollingList: '', // 整改单基础信息
            pid: '', // 项目id
            number: 0, // 整改次数
        }
    },
    created() {
        this.getPid()
        this.getName()
        this.getPollingDetail()
        this.getQueryPollingInFo()
    },
    methods: {
        // 获取实时监控页面传过来的值
        getName() {
            // console.log(this.$route.query.orderId)
            if (this.$route.query.pollingId != undefined && this.getNameState == 0) {
                this.pollingId = this.$route.query.pollingId
                this.getNameState = 1
            }
            // console.log(this.pollingId)
        },

        // 根据整改id获取整改单详情
        getPollingDetail() {
            this.$axios.post(`/lz/polling/selectPollingDetail?pollingId=${this.pollingId}`).then(
                res => {
                    console.log(res.data)
                    this.pollingDetail = res.data.msg
                }
            )
        },

        // 获取整改单的基础信息
        getQueryPollingInFo() {
            this.$axios.post(`/lz/polling/queryPollingInFo?projectId=${this.pid}`).then(
                res => {
                    // console.log(res.data)
                    for (let i = 0; i < res.data.msg.length; i++) {
                        if (res.data.msg[i].pollingId == this.pollingId) {
                            this.pollingList = res.data.msg[i]
                        }
                    }
                    // console.log(this.pollingList)
                }
            )
        },

        // 获取项目id
        getPid() {
            this.pid = localStorage.getItem('pid')
        },
    }
}
</script>