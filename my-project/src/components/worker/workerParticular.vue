<template>
    <div id="workerParticular">
        <!-- 顶部通栏 -->
        <div class="top-nav">
            <div class="top-nav-box">
                <div class="logo-box"></div>
            </div>
        </div>
        <!-- 页面头部 -->
        <div class="title-box">
            <div class="title-centent">
                <div class="left-box">
                    <div class="picture"></div>
                </div>
                <div class="right-box">
                    <div class="name">
                        <div class="name-box">
                            戴春永
                        </div>
                        <div class="authentication">
                            <i class="el-icon-check" style="font-weight:bolder"></i>
                            已实名认证
                        </div>
                    </div>
                    <div class="company">
                        班组长-深圳创新劳务有限公司
                    </div>
                    <div class="location">
                        <i class="location-icon"></i>
                        <span>
                            中国 广东 深圳
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
                        <li>
                            <p>
                                中建二局深圳创新科技园项目
                            </p>
                            <span>
                                木工班&nbsp;&nbsp;&nbsp;2016/12——2018/03
                            </span>
                        </li>
                        <li>
                            <p>
                                中建二局深圳创新科技园项目
                            </p>
                            <span>
                                木工班&nbsp;&nbsp;&nbsp;2016/12——2018/03
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
                        <span>电话：171********</span>
                        <a>点击获取号码</a>
                    </div>
                    <div class="amount">
                        <i class="people-icon"></i>
                        <span>人数：17人</span>
                    </div>
                    <div class="nation">
                        <i class="people-icon"></i>
                        <span>民族：汉</span>
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
                .logo-box {
                    width: 120px;
                    height: 54px;
                    background-image: url('../../../static/images/workerHome-logo.png');
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: contain;
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
                        background-color: aquamarine;
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

        }
    }
}
</script>

