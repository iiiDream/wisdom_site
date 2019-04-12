<template>
    <div id="gas">
        <div class="content">
            <div class="content-box">
                <div class="top-box">
                    <div class="top-left normal">
                        气体正常
                    </div>
                    <div class="top-right">
                        <div class="text-box">
                            气体无异常
                            <!-- <p>120%</p>
                            <span>( 正常值100% )</span> -->
                        </div>
                    </div>
                </div>
                <div class="bottom-box">
                    <div class="name">
                        气体检测一号机
                    </div>
                    <div class="data-box">
                        <div class="EX normal">
                            --%LEL
                            <p>EX(易燃)</p>
                        </div>
                        <div class="O2 normal">
                            --%VOL
                            <p>O2(缺氧)</p>
                        </div>
                        <div class="H2S normal">
                            --PPM
                            <p>H2S(中毒)</p>
                        </div>
                        <div class="CO normal">
                            --PPM
                            <p>CO(中毒)</p>
                        </div>
                    </div>
                    <div class="history">
                        <a>查看历史记录</a>
                    </div>
                </div>
            </div>
            <div class="content-box">
                <div class="top-box">
                    <div class="top-left normal">
                        气体超标
                    </div>
                    <div class="top-right warning">
                        <div class="text-box">
                            EX气体超标
                            <p>120%</p>
                            <span>( 正常值100% )</span>
                        </div>
                    </div>
                </div>
                <div class="bottom-box">
                    <div class="name">
                        气体检测二号机
                    </div>
                    <div class="data-box">
                        <div class="EX warning">
                            --%LEL
                            <p>EX(易燃)</p>
                        </div>
                        <div class="O2 normal">
                            --%VOL
                            <p>O2(缺氧)</p>
                        </div>
                        <div class="H2S normal">
                            --PPM
                            <p>H2S(中毒)</p>
                        </div>
                        <div class="CO normal">
                            --PPM
                            <p>CO(中毒)</p>
                        </div>
                    </div>
                    <div class="history">
                        <a>查看历史记录</a>
                    </div>
                </div>
            </div>
            <div class="content-box">
                <div class="top-box">
                    <div class="top-left normal">
                        气体超标
                    </div>
                    <div class="top-right warning">
                        <div class="text-box">
                            EX气体超标
                            <p>120%</p>
                            <span>( 正常值100% )</span>
                        </div>
                    </div>
                </div>
                <div class="bottom-box">
                    <div class="name">
                        气体检测三号机
                    </div>
                    <div class="data-box">
                        <div class="EX warning">
                            --%LEL
                            <p>EX(易燃)</p>
                        </div>
                        <div class="O2 normal">
                            --%VOL
                            <p>O2(缺氧)</p>
                        </div>
                        <div class="H2S normal">
                            --PPM
                            <p>H2S(中毒)</p>
                        </div>
                        <div class="CO normal">
                            --PPM
                            <p>CO(中毒)</p>
                        </div>
                    </div>
                    <div class="history">
                        <a>查看历史记录</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    #gas {
        .content {
            display: flex;
            justify-content: space-between;
            .content-box {
                .top-box {
                    width: 5.3rem;
                    height: 1.61rem;
                    background-image: url('../../../static/images/s_top-box.png');
                    background-size: contain;
                    display: flex;
                    .top-left {
                        flex: 1;
                        font-size: .26rem;
                        text-align: center;
                        line-height: 1.61rem;
                        background-image: url('../../../static/images/s_status-background.png');
                        background-repeat: no-repeat;
                        background-position: center center;
                    }
                    .top-right {
                        flex: 1;
                        height: 1.61rem;
                        color: #fff;
                        font-size: .26rem;
                        text-align: center;
                        display: table;
                        .text-box {
                            display: table-cell;
                            vertical-align: middle;
                            font-size: .24rem;
                            font-weight: bolder;
                            p {
                                font-size: .2rem;
                                font-weight: normal;
                                line-height: .4rem;
                            }
                            span {
                                font-size: .18rem;
                                font-weight: normal;
                            }
                        }
                    }
                    .normal {
                        color: #24e974;
                    }
                    .warning {
                        color: #fb497c;
                    }
                }
                .bottom-box {
                    color: #fff;
                    width: 5.3rem;
                    height: 7.4rem;
                    background-image: url('../../../static/images/s_bottom-box.png');
                    background-size: contain;
                    margin-top: .4rem;
                    padding-top: .3rem;
                    .name {
                        font-size: .2rem;
                        margin-left: .3rem;
                    }
                    .data-box {
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        >div {
                            font-size: .22rem;
                            width: 50%;
                            height: 1.64rem;
                            margin-top: .74rem;
                            text-align: center;
                            line-height: 1.64rem;
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: contain;
                            position: relative;
                            >p {
                                color: #fff;
                                line-height: normal;
                                position: absolute;
                                left: 50%;
                                transform: translate(-50%);
                                bottom: -0.36rem;
                            }
                        }
                        .normal {
                            color: #24e974;
                            background-image: url('../../../static/images/s_g-green.png');
                        }
                        .warning {
                            color: #fb497c;
                            background-image: url('../../../static/images/s_g-red.png');
                        }
                    }
                    .history {
                        height: .9rem;
                        margin-top: .9rem;
                        text-align: center;
                        padding-top: .38rem;
                        background-image: url('../../../static/images/s_history.png');
                        background-position: top center;
                        background-repeat: no-repeat;
                        background-size: .3rem .3rem;
                        a {
                            color: #fff;
                            font-size: .16rem;
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
            
        }
    }
}
</script>

