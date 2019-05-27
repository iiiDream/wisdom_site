<template>
    <div id="workerParticular">
        <!-- 顶部通栏 -->
        <div class="top-nav">
            <div class="top-nav-box">
                <div class="logo-box"></div>
                <a class="return" @click="$router.go(-1)">返回</a>
            </div>
        </div>
        <!-- 页面头部 -->
        <div class="title-box">
            <div class="title-centent">
                <div class="left-box">
                    <div class="picture">
                        <img :src="imageUrl+foremanData.photoName" alt="">
                    </div>
                </div>
                <div class="right-box">
                    <div class="name">
                        <div class="name-box">
                            {{foremanData.userName}}
                        </div>
                        <div class="authentication">
                            <i class="el-icon-check" style="font-weight:bolder"></i>
                            已实名认证
                        </div>
                    </div>
                    <div class="company">
                        班组长-{{foremanData.buildCompanyName}}
                    </div>
                    <div class="location">
                        <i class="location-icon"></i>
                        <span>
                            中国 广东 深圳 {{foremanData.teamName}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 页面主体 -->
        <div class="centent-box">
            <div class="center-box">
                <div class="left-box">
                    <div class="title">
                        项目经验
                    </div>
                    <ul>
                        <li v-for="(item,index) in flowData.teamList" :key="index">
                            <p>
                                {{item.projectTitle}}
                            </p>
                            <span>
                                {{item.groupTitle}}&nbsp;&nbsp;&nbsp;{{item.entranceDate}}——{{item.retreatDate}}
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="right-box">
                    <div class="message">
                        基本信息
                    </div>
                    <div class="phone">
                        <i class="phone-icon"></i>
                        <span>电话：{{foremanData.phone!=null?foremanData.phone.substring(0,3):''}}********</span>
                        <a>点击获取号码</a>
                    </div>
                    <div class="amount">
                        <i class="people-icon"></i>
                        <span>人数：{{flowData.count}}人</span>
                    </div>
                    <div class="nation">
                        <i class="people-icon"></i>
                        <span>民族：{{foremanData.nation}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #workerParticular{
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
                    background-image: url('../../../static/images/yzt-redLogo.png');
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: 120px 35px;
                }
                .return {
                    width: 50px;
                    font-size: 18px;
                    color: #205198;
                    border-radius: 5px;
                    display: inline-block;
                    border: 1px solid #205198;
                    vertical-align: top;
                    line-height: 26px;
                    text-align: center;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    transition: all .5s;
                }
                .return:hover {
                    color: #fff;
                    background-color: #205198;
                }
            }
        }
        .title-box {
            height: 350px;
            position: relative;
            background-color: #205198;
            .title-centent {
                width: 1200px;
                height: 274px;
                padding-top: 30px;
                padding-left: 30px;
                position: absolute;
                background-color: #fff;
                left: 50%;
                bottom: -52px;
                transform: translate(-50%);
                .left-box {
                    float: left;
                    .picture {
                        width: 215px;
                        height: 207px;
                        // background-color: aquamarine;
                        overflow: hidden;
                        text-align: center;
                        img {
                            height: 207px;
                        }
                    }
                }
                .right-box {
                    float: left;
                    margin-left: 30px;
                    .name {
                        padding-top: 32px;
                        position: relative;
                        .name-box {
                            font-size: 25px;
                        }
                        .authentication {
                            color: #fff;
                            width: 108px;
                            height: 20px;
                            line-height: 20px;
                            position: absolute;
                            border-radius: 20px;
                            text-align: center;
                            background-color: #205198;
                            left: 135px;
                            top: 32px;
                        }
                    }
                    .company {
                        margin-top: 40px;
                        font-size: 18px;
                    }
                    .location {
                        margin-top: 42px;
                        .location-icon {
                            width: 34px;
                            height: 25px;
                            display: inline-block;
                            vertical-align: top;
                            background-image: url('../../../static/images/workerHome-areaIcon.png');
                            background-position: left center;
                            background-repeat: no-repeat;
                        }
                        span {
                            font-size: 16px;
                        }
                    }
                }
            }
        }
        .centent-box {
            min-height: 533px;
            padding-top: 82px;
            background-color: #f5f5f5;
            .center-box {
                width: 1200px;
                margin: 0 auto;
                .left-box {
                    float: left;
                    width: 722px;
                    min-height: 274px;
                    background-color: #fff;
                    .title {
                        height: 53px;
                        font-size: 18px;
                        line-height: 51px;
                        padding-left: 22px;
                        border-bottom: 2px solid #f5f5f5;
                    }
                    ul {
                        padding-top: 18px;
                        padding-left: 22px;
                        li {
                            margin-bottom: 30px;
                            p {
                                font-size: 17px;
                                 margin-bottom: 8px;
                            }
                            span {
                                color: #585858;
                                font-size: 14px;
                            }
                        }
                    }
                }
                .right-box {
                    float: left;
                    width: 448px;
                    height: 274px;
                    margin-left: 30px;
                    padding-top: 38px;
                    padding-left: 22px;
                    background-color: #fff;
                    .message {
                        font-size: 20px;
                    }
                    .phone {
                        font-size: 18px;
                        margin-top: 36px;
                        position: relative;
                        .phone-icon {
                            display: inline-block;
                            vertical-align: top;
                            height: 24px;
                            width: 38px;
                        }
                        a {
                            left: 258px;
                            width: 127px;
                            height: 29px;
                            font-size: 16px;
                            color: #205198;
                            position: absolute;
                            line-height: 27px;
                            text-align: center;
                            border-radius: 29px;
                            border: 1px solid #205198;
                        }
                        a:hover {
                            color: #fff;
                            background-color: #205198;
                        }
                    }
                    .amount {
                        font-size: 18px;
                        margin-top: 36px;
                    }
                    .nation {
                        font-size: 18px;
                        margin-top: 36px;
                    }
                    .people-icon {
                        display: inline-block;
                        vertical-align: top;
                        height: 24px;
                        width: 38px;
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
            teamId: '', // 班组ID
            flowData: '', // 班组人数与项目经验
            foremanData: '', // 班组信息
            imageUrl: 'http://hujiang.oss-cn-shenzhen.aliyuncs.com/', // 图片地址
        }
    },
    created() {
        this.getTeamId()
        this.getQueryFlowData()
        this.getQueryForemanData()
    },
    methods: {
        // 获取产业工人首页传过来的值
        getTeamId() {
            // console.log(this.$route.query.orderId)
            if (this.$route.query.teamId != undefined) {
                this.teamId = this.$route.query.teamId
                // console.log(this.teamId)
            }
        },

        // 获取班组人数与项目经验
        getQueryFlowData() {
            this.$axios.post(`/lz/hujiangGroup/queryFlow?teamId=${this.teamId}`).then(
                res => {
                    // console.log(res.data)
                    this.flowData = res.data
                }
            )
        },

        // 获取班组的基础信息
        getQueryForemanData() {
            this.$axios.post(`/lz/hujiangGroup/queryForeman`).then(
                res => {
                    // console.log(res.data.msg.length)
                    for (let i = 0; i < res.data.msg.length; i++) {
                        if (res.data.msg[i].teamId == this.teamId) {
                            this.foremanData = res.data.msg[i]
                            return
                        }
                    }
                }
            )
        },
    }
}
</script>

