<template>
    <div id="l_rail">
        <div class="content-box">
            <div class="nav">
                <el-collapse accordion>
                    <el-collapse-item title="龙华大浪项目" name="1">
                        <div>
                            <a href="#">隆创工业园</a>
                        </div>
                        <div>
                            <a href="#" style="color:#fff" @click="handleChange">隆创工业园</a>
                        </div>
                        <div>
                            <a href="#">隆创工业园</a>
                        </div>
                        <div>
                            <a href="#">隆创工业园</a>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div class="map">
                <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
                </el-amap>
                <a>添加围栏</a>
                <a>编辑围栏</a>
                <a>删除围栏</a>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #l_rail {
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
                position: relative;
                a {
                    color: #fff;
                    width: .95rem;
                    height: .39rem;
                    position: absolute;
                    border-radius: .05rem;
                    background-color: #12b2fe;
                    z-index: 100;
                    font-size: .18rem;
                    text-align: center;
                    line-height: .39rem;
                    &:nth-child(2) {
                        top: .2rem;
                        left: .2rem;
                    }
                    &:nth-child(3) {
                        top: .2rem;
                        left: 1.23rem;
                    }
                    &:nth-child(4) {
                        top: .2rem;
                        left: 2.26rem;
                    }
                }
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
                position: 'RT',
                events: {
                    init(instance) {
                        // console.log(instance);
                    },
                }
            }],
        }
    },
    methods: {
        handleChange() {
                this.center = [114.003378,22.571492]
                this.zoom = 15
                this.polygon.show()
                this.marker.hide()
        }
    }
}
</script>