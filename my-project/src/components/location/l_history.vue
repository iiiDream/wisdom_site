<template>
    <div id="l_history">
        <div class="content-box">
            <div class="message">
                <div class="inquire">
                    <el-input v-model="input" placeholder="姓名或设备编号或电话"></el-input>
                    <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                    <button>查询</button>
                </div>
                <div class="message-box">
                    <ul>
                        <li>
                            姓名：<span>某某某</span>
                        </li>
                        <li>
                            电话：<span>11111111111</span>
                        </li>
                        <li>
                            所属公司：<span>创新劳务有限公司</span>
                        </li>
                        <li>
                            设备编号：<span>1111111</span>
                        </li>
                        <li class="enter">
                            进
                        </li>
                        <li>
                            设备电量：<span>11%</span>
                        </li>
                        <li>
                            时间：<span>2018-11-11 11:11:11</span>
                        </li>
                        <li>
                            位置：<span>深圳广隆大厦</span>
                        </li>
                        <li class="come">
                            出
                        </li>
                        <li>
                            设备电量：<span>11%</span>
                        </li>
                        <li>
                            时间：<span>2018-11-11 11:11:11</span>
                        </li>
                        <li>
                            位置：<span>深圳广隆大厦</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="map">
                <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
                </el-amap>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #l_history {
        .content-box {
            width: 15rem;
            height: 9.39rem;
            padding: .07rem .07rem .07rem .28rem;
            background-image: url('../../../static/images/location-bigBorder.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            display: flex;
            .message {
                width: 2.55rem;
                height: 1.41rem;
                .inquire {
                    transform: translateY(.18rem);
                    .el-input {
                        width: 2rem;
                        height: .5rem;
                        padding: .01rem;
                        .el-input__inner {
                            color: #fff;
                            height: .3rem;
                            line-height: .2rem;
                            font-size: .12rem;
                            padding-left: .07rem;
                            border: .01rem solid #3375fe;
                            border-radius: .05rem;
                            background-color: #1d1f3b;
                        }
                        .el-input__prefix {
                            display: none;
                        }
                    }
                    button {
                        font-size: .12rem;
                        min-width: .4rem;
                        height: .3rem;
                        border: 0;
                        color: #fff;
                        background-color: #00aefe;
                        border-radius: .05rem;
                        transform: translateY(.41rem);
                    }
                }
                .message-box {
                    color: #fff;
                    font-size: .14rem;
                    width: 2.5rem;
                    transform: translateY(.55rem);
                    .enter {
                        width: .3rem;
                        height: .3rem;
                        font-size: .16rem;
                        line-height: .3rem;
                        text-align: center;
                        margin-top: .15rem;
                        border-radius: .3rem;
                        background-color: #3ee09a;
                    }
                    .come {
                        width: .3rem;
                        height: .3rem;
                        font-size: .16rem;
                        line-height: .3rem;
                        text-align: center;
                        margin-top: .15rem;
                        border-radius: .3rem;
                        background-color: #c23864;
                    }
                }
            }
            .map {
                flex: 1;
            }
        }
    }
</style>

<script>
let amapManager = new VueAMap.AMapManager();
export default {
    data() {
        return {
            input: '',
            value1: '',
            amapManager,
            zoom: 15,
            center: [114.003378,22.571492],
            events: {
              init: (o) => {
                // console.log(o.getCenter())
                // console.log(this.$refs.map.$$getInstance())
                // o.getCity(result => {
                //     console.log(result)
                // })
                let circle1 = new AMap.Circle({
                    center: [113.994194,22.578189],
                    fillOpacity: 1, //透明度
                    zIndex: 100, //层级
                    radius: 10, //半径
                    fillColor: '#e10505', //填充颜色
                    strokeColor: '#e10505', //轮廓线颜色
                })
                let circle2 = new AMap.Circle({
                    center: [114.004537,22.563725],
                    fillOpacity: 1, //透明度
                    zIndex: 100, //层级
                    radius: 10, //半径
                    fillColor: '#e10505', //填充颜色
                    strokeColor: '#e10505', //轮廓线颜色
                })
                let circle3 = new AMap.Circle({
                    center: [114.009601,22.570383],
                    fillOpacity: 1, //透明度
                    zIndex: 100, //层级
                    radius: 10, //半径
                    fillColor: '#e10505', //填充颜色
                    strokeColor: '#e10505', //轮廓线颜色
                })
                let circle4 = new AMap.Circle({
                    center: [114.006167,22.580171],
                    fillOpacity: 1, //透明度
                    zIndex: 100, //层级
                    radius: 10, //半径
                    fillColor: '#e10505', //填充颜色
                    strokeColor: '#e10505', //轮廓线颜色
                })
                circle1.setMap(o);
                circle2.setMap(o);
                circle3.setMap(o);
                circle4.setMap(o);
                // marker = [marker1,marker2]
                // marker.setMap(o)
                let polyline = new AMap.Polyline({
                    path:[
                        new AMap.LngLat(113.994194,22.578189),
                        new AMap.LngLat(114.004537,22.563725),
                        new AMap.LngLat(114.009601,22.570383),
                        new AMap.LngLat(114.006167,22.580171)
                    ],
                    lineJoin: 'round', //折线拐点样式
                    showDir: true, //移动方向
                    strokeWeight: 3, //线条宽度
                    strokeColor: '#3366ff', //线条颜色
                })
                polyline.setMap(o);
                let polygon = new AMap.Polygon({
                    path: [
                        new AMap.LngLat(113.992992,22.581439),
                        new AMap.LngLat(114.01033,22.582786),
                        new AMap.LngLat(114.010287,22.562853),
                        new AMap.LngLat(113.996898,22.563329)
                    ],  
                    fillColor: '#fff', // 多边形填充颜色
                    fillOpacity: 0, //填充颜色透明度
                    borderWeight: 1, // 线条宽度
                    strokeColor: '#137ed2', // 线条颜色}
                })
                polygon.setMap(o)
              },
              'moveend': () => {
              },
              'zoomchange': () => {
              },
              'click': (e) => {
                alert('map clicked');
              }
            },
            plugin: [{
                pName: 'ToolBar',
                direction: false,
                events: {
                    init(instance) {
                        // console.log(instance);
                    },
                }
            }],
        }
    }
}
</script>
