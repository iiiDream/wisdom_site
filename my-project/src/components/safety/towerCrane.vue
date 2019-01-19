<template>
    <div id="towerCrane">
        <div class="content">
            <div class="top-box">
                <div class="status">
                    <span class="anomaly">异常运行</span>
                </div>
                <div class="employee">
                    <span class="bolder">今日工作</span>
                    <span>某某某</span>
                    <span class="bolder">上工时间</span>
                    <span>07:30</span>
                </div>
                <img src="../../../static/images/s_pic.png" alt="" class="pic">
            </div>
            <div class="bottom-box">
                <div class="name">
                    <span>吊塔一号机</span>
                </div>
                <div class="top-data">
                    <div class="top-left">
                        <p>安全起重</p>
                        <span>--t</span>
                    </div>
                    <div class="middle">
                        <div class="middle-img">
                            <span>--%</span>
                        </div>
                        <span>力距</span>
                    </div>
                    <div class="top-right">
                        <p>倍率</p>
                        <span>--倍</span>
                    </div>
                </div>
                <div class="bottom-data">
                    <ul>
                        <li>
                            <img src="../../../static/images/s_weight.png" alt="">
                            <p>重量</p>
                            <span>--t</span>
                        </li>
                        <li>
                            <img src="../../../static/images/s_range.png" alt="">
                            <p>幅度</p>
                            <span>--m</span>
                        </li>
                        <li>
                            <img src="../../../static/images/s_altitude.png" alt="">
                            <p>高度</p>
                            <span>--m</span>
                        </li>
                        <li>
                            <img src="../../../static/images/s_rotation.png" alt="">
                            <p>回转</p>
                            <span>--°</span>
                        </li>
                        <li>
                            <img src="../../../static/images/s_wind-speed.png" alt="">
                            <p>风速</p>
                            <span>--m</span>
                        </li>
                        <li>
                            <img src="../../../static/images/s_dip-angle.png" alt="">
                            <p>倾角</p>
                            <span>X--°</span>
                            <span>Y--°</span>
                        </li>
                    </ul>
                </div>
                <div class="day">
                    <span>检修倒计时： </span>
                    <span>90天</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    span,
    p{
        color: #fff;
    }
    #towercrane {
        display: flex;
    }
    .content {
        display: inline-block;
        /* width: 30.5%; */
        margin-left: .4rem;
        margin-top: .51rem;
    }
    .top-box {
        height: 1.61rem;
        width: 5.3rem;
        background-image: url('../../../static/images/s_top-box.png');
        background-size: contain;
        display: flex;
    }
    .status {
        display: inline-block;
        background-image: url('../../../static/images/s_status-background.png');
        background-repeat: no-repeat;
        background-position: center center;
        height: 1.57rem;
        width: 1.57rem;
        text-align: center;
        line-height: 1.57rem;
    }
    .status>span{
        font-size: .24rem;
        font-weight: bolder;
    }
    .anomaly {
        color: #c23864;
    }
    .normal {
        color: #21ff6a;
    }
    .pic {
        padding: .16rem;
    }
    .employee {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        padding-top: .29rem;
        padding-bottom: .29rem;
    }
    .employee span {
        text-align: center;
        width: 50%;
        color: #fff;
        font-size: .2rem;
        line-height: .5rem;
    }
    .bolder {
        font-weight: bolder;
    }
    .bottom-box {
        height: 7.4rem;
        width: 5.3rem;
        background-image: url('../../../static/images/s_bottom-box.png');
        background-size: contain;
        margin-top: .4rem;
    }
</style>
