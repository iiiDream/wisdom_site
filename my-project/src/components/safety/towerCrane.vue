<template>
    <div id="towerCrane">
        <div class="content">
            <div class="content-box" v-for="(val,key,index) in towerCraneData" :key="index">
                <div class="top-box">
                    <div class="status">
                        <span :class="val.State==0?'normal':'anomaly'">{{val.State==0?'正常运行':'异常运行'}}</span>
                    </div>
                    <div class="employee">
                        <span class="bolder">今日工作</span>
                        <span>{{val.Name}}</span>
                        <span class="bolder">上班时间</span>
                        <span>{{val.time}}</span>
                    </div>
                    <img :src="imgUrl+val.photo" alt="" class="pic">
                </div>
                <div class="bottom-box">
                    <div class="name">
                        <span class="bolder">{{val.DevName}}</span>
                    </div>
                    <div class="top-data">
                        <div class="top-left">
                            <p class="warning">安全起重</p>
                            <span>{{val.cs_qz}}t</span>
                        </div>
                        <div class="middle">
                            <div class="middle-img">
                                <span style="font-size:.24rem">{{val.cs_lj}}%</span>
                            </div>
                            <span>力距</span>
                        </div>
                        <div class="top-right">
                            <p class="warning">倍率</p>
                            <span>{{val.cs_bl}}倍</span>
                        </div>
                    </div>
                    <div class="bottom-data">
                        <ul>
                            <li>
                                <img src="../../../static/images/s_weight.png" alt="">
                                <div>
                                    <p class="warning">重量</p>
                                    <p>{{val.yx_zl}}t</p>
                                </div>
                            </li>
                            <li>
                                <img src="../../../static/images/s_range.png" alt="">
                                <div>
                                    <p class="warning">幅度</p>
                                    <p>{{val.yx_fd}}m</p>
                                </div>
                            </li>
                            <li>
                                <img src="../../../static/images/s_altitude.png" alt="">
                                <div>
                                    <p class="warning">高度</p>
                                    <p>{{val.yx_gd}}m</p>
                                </div>
                            </li>
                            <li>
                                <img src="../../../static/images/s_rotation.png" alt="">
                                <div>
                                    <p class="warning">回转</p>
                                    <p>{{val.yx_hz}}°</p>
                                </div>
                            </li>
                            <li>
                                <img src="../../../static/images/s_wind-speed.png" alt="">
                                <div>
                                    <p class="warning">风速</p>
                                    <p>{{val.yx_fs}}m</p>
                                </div>
                            </li>
                            <li>
                                <img src="../../../static/images/s_dip-angle.png" alt="">
                                <div>
                                    <p class="warning">倾角</p>
                                    <p>X{{val.yx_qjX}}°</p>
                                    <p>Y{{val.yx_qjY}}°</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="day">
                        <span class="bolder">检修倒计时： </span>
                        <span class="bolder" :class="val.jxdate>=10?'normal':val.jxdate>=1?'warning':'anomaly'">{{val.jxdate}}天</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            towerCraneData: '', //塔吊数据
            imgUrl:'http://gd.17hr.net:8018/', //图片地址
            xmid:'',
        }
    },
    created() {
        // 发送请求
        this.getTowerCraneData()
    },
    methods: {
        // 请求塔吊数据
        getTowerCraneData(){
            this.xmid = this.getQueryString('xmid')
            this.$axios.get(`/APP/XMPage/DeviceData.ashx?method=GetTaJiData&xmid=${this.xmid}`).then(res=>{
                if(res.data.success == 1){
                    this.$router.push('unopen')
                }else{
                    this.towerCraneData = res.data
                    // // console.log(this.towerCraneData.TaJiOne.Name)
                    // this.towerCraneData.push(res.data)
                    // console.log(this.towerCraneData)
                }
            })
        },
        getQueryString(name) {
          var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
          var r = window.location.search.substr(1).match(reg);
          if (r != null) {
            return unescape(r[2]);
          }
          return null;
        },
    },
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
        /* width: 30.5%; */
        /* margin-left: .4rem; */
        /* margin-top: .51rem; */
        display: flex;
        justify-content: space-between;
        /* overflow-x:scroll;
        overflow-y: hidden;
        width: 16.63rem;
        height: 9.41rem; */
        flex-wrap: wrap;
    }
    .bolder {
        font-weight: bolder;
    }
    .anomaly {
        color: #c23864;
    }
    .normal {
        color: #24e974;
    }
    .warning {
        color: #ff731c;
    }
    /* 上部盒子样式 */
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
    .pic {
        padding: .16rem;
        height: 1.61rem;
        width: 1.46rem;
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
    /* 下部盒子样式 */
    .bottom-box {
        height: 7.4rem;
        width: 5.3rem;
        background-image: url('../../../static/images/s_bottom-box.png');
        background-size: contain;
        margin-top: .4rem;
    }
    .bottom-box .name {
        height: .8rem;
    }
    .bottom-box .name>span {
        line-height: .8rem;
        font-size: .2rem;
        margin-left: .28rem;
    }
    .bottom-box .top-data {
        display: flex;
        height: 1.68rem;
    }
    .bottom-box .top-data>div {
        flex: 1;
        text-align: center;
    }
    .bottom-box .top-data .middle-img {
        height: 1.44rem;
        width: 1.44rem;
        background-image: url('../../../static/images/s_torque.png');
        background-size: contain;
        line-height: 1.44rem;
        margin-left: 50%;
        transform: translate(-50%);
    }
    .bottom-box .top-data>div>p {
        font-size: .18rem;
        margin-top: .6rem;
        margin-bottom: .12rem;
    }
    .bottom-box .top-data>div>span {
        font-size: .18rem;
    }
    .bottom-box .bottom-data {
        height: 3.6rem;
    }
    .bottom-box .bottom-data ul {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .bottom-box .bottom-data li {
        width: 50%;
    }
    .bottom-box .bottom-data li img {
        display: inline-block;
        line-height: 1.22rem;
        margin-left: .92rem;
        vertical-align: top;
        margin-top: .35rem;
    }
    .bottom-box .bottom-data li>div {
        display: inline-block;
        margin-top: .27rem;
        margin-left: .12rem;
    }
    .bottom-box .bottom-data li p {
        font-size: .18rem;
        line-height: .3rem;
    }
    .bottom-box .day{
        height: 1.27rem;
        text-align: center;
    }
    .bottom-box .day span {
        line-height: 1.27rem;
        font-size: .28rem;
    }

</style>
