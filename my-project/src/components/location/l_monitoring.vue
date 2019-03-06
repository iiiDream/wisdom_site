<template>
    <div id="l_monitoring">
        <div class="content-box">
            <div class="nav">
                <el-collapse accordion>
                    <el-collapse-item title="虎匠罗芳项目" name="1">
                        <el-collapse @change="handleChange" accordion>
                            <el-collapse-item title="隆创工业园" name="1-1">
                                <div>
                                    <router-link to="/location/l_search" style="color:#fff">段裕德</router-link>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div class="map">
                <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
                </el-amap>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #l_monitoring{
        .content-box {
            width: 15rem;
            height: 9.39rem;
            padding: .07rem .07rem .07rem .28rem;
            background-image: url('../../../static/images/location-bigBorder.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            display: flex;
            .nav {
                width: 2.55rem;
                .el-collapse {
                    border: 0;
                    transform: translateY(.12rem);
                    .el-collapse-item__header {
                        border: 0;
                        color: #3375fe;
                        font-size: .17rem;
                        background-color: #030625;
                        height: .25rem;
                        line-height: .30rem;
                    }
                    .el-collapse-item__wrap {
                        background-color: #030625;
                        padding-left: .2rem;
                        border: 0;
                        a {
                            display: block;
                            width: 100%;
                            height: 100%;
                            font-size: .15rem;
                            color:#3375fe;
                        }
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
            polygon: '',
            text: '',
            marker: '',
            amapManager,
            zoom: 12,
            center: [114.003378,22.571492],
            events: {
              init: (o) => {
                this.marker = new AMap.Marker({
                    position: [114.003378,22.571492]
                });
                this.marker.setMap(o);
                // console.log(o.getCenter())
                // console.log(this.$refs.map.$$getInstance())
                // o.getCity(result => {
                //     console.log(result)
                // })
                this.text = new AMap.Text({
                    position: [114.003378,22.571492],
                    text: '20人在场',
                });
                this.text.setMap(o);
                this.text.hide();
                // let circle1 = new AMap.Circle({
                //     center: [113.994194,22.578189],
                //     fillOpacity: 1, //透明度
                //     zIndex: 100, //层级
                //     radius: 10, //半径
                //     fillColor: '#e10505', //填充颜色
                //     strokeColor: '#e10505', //轮廓线颜色
                // })
                // let circle2 = new AMap.Circle({
                //     center: [114.004537,22.563725],
                //     fillOpacity: 1, //透明度
                //     zIndex: 100, //层级
                //     radius: 10, //半径
                //     fillColor: '#e10505', //填充颜色
                //     strokeColor: '#e10505', //轮廓线颜色
                // })
                // let circle3 = new AMap.Circle({
                //     center: [114.009601,22.570383],
                //     fillOpacity: 1, //透明度
                //     zIndex: 100, //层级
                //     radius: 10, //半径
                //     fillColor: '#e10505', //填充颜色
                //     strokeColor: '#e10505', //轮廓线颜色
                // })
                // let circle4 = new AMap.Circle({
                //     center: [114.006167,22.580171],
                //     fillOpacity: 1, //透明度
                //     zIndex: 100, //层级
                //     radius: 10, //半径
                //     fillColor: '#e10505', //填充颜色
                //     strokeColor: '#e10505', //轮廓线颜色
                // })
                // circle1.setMap(o);
                // circle2.setMap(o);
                // circle3.setMap(o);
                // circle4.setMap(o);
                // // marker = [marker1,marker2]
                // // marker.setMap(o)
                // let polyline = new AMap.Polyline({
                //     path:[
                //         new AMap.LngLat(113.994194,22.578189),
                //         new AMap.LngLat(114.004537,22.563725),
                //         new AMap.LngLat(114.009601,22.570383),
                //         new AMap.LngLat(114.006167,22.580171)
                //     ],
                //     lineJoin: 'round', //折线拐点样式
                //     showDir: true, //移动方向
                //     strokeWeight: 3, //线条宽度
                //     strokeColor: '#3366ff', //线条颜色
                // })
                // polyline.setMap(o);
                this.polygon = new AMap.Polygon({
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
                this.polygon.setMap(o)
                this.polygon.hide()
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
    },
    methods: {
        handleChange(val) {
            if (val == '1-1') {
                this.center = [114.003378,22.571492]
                this.zoom = 15
                this.polygon.show()
                this.text.show()
                this.marker.hide()
            }
        }
    }
}
</script>