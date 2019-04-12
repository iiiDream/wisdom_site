<template>
    <div id="l_rail">
        <div class="content-box">
            <div class="nav">
                <el-collapse @change="handleChange" accordion>
                    <el-collapse-item :title="monitoringData.title" name="1">
                        <div v-for="(item,index) in monitoringData.areaList" :key="index">
                            <a style="color:#fff" @click="setElectronicFence(item)">{{item.name}}</a>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div class="map">
                <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
                </el-amap>
                <a v-show="gid != ''" class="button" @click="importShow = true">编辑围栏</a>
                <!-- <el-button type="number" @click="open3" class="button">编辑围栏</el-button> -->
                <div class="import-box" v-show="importShow">
                    <p>请输入电子围栏半径（单位：米）</p>
                    <input v-model="radius" type="number">
                    <div class="button-box">
                        <a class="save" :plain="true" @click="saveClick">保存</a>
                        <a class="cancel" @click="cancelClick">取消</a>
                    </div>
                </div>
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
                        height: .5rem;
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
                .button {
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
                .import-box {
                    padding-top: .3rem;
                    color: #fff;
                    text-align: center;
                    width: 4rem;
                    height: 2rem;
                    position: absolute;
                    left: 50%;
                    top: 10%;
                    transform: translate(-50%);
                    border: .01rem solid #0f1f53;
                    border-radius: .03rem;
                    background-color: rgba(2, 5, 33, .9);
                    box-shadow: 0px 0px 50px #0f1f53 inset;
                    input {
                        margin-top: .25rem;
                        outline: none;
                        border: none;
                        border-radius: .03rem;
                        overflow: hidden;
                    }
                    .button-box {
                        margin: 0 auto;
                        margin-top: .25rem;
                        display: flex;
                        justify-content: space-between;
                        width: 2rem;
                        .save {
                            color: #fff;
                            display: inline-block;
                            width: .4rem;
                            height: .25rem;
                            background-color: #0164ff;
                            border-radius: .03rem;
                            overflow: hidden;
                        }
                        .cancel {
                            color: #000;
                            display: inline-block;
                            width: .4rem;
                            height: .25rem;
                            background-color: #fff;
                            border-radius: .03rem;
                            overflow: hidden;
                        }
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
            circle: '', // 电子围栏位置信息
            gid: '', // 工区id
            radius: '', // 电子围栏半径
            pid: 0, //项目id
            monitoringData: '', //项目列表数据
            importShow: false,
            polygon: '',
            text: '',
            marker: '',
            amapManager,
            zoom: 12,
            center: [114.003378,22.571492],
            events: {
              init: (o) => {
                // this.marker = new AMap.Marker({
                //     position: [114.003378,22.571492]
                // });
                // this.marker.setMap(o);
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

                // 电子围栏渲染
                this.circle = new AMap.Circle({
                    center: [114.007675,22.663599], // 圆心位置
                    radius: 0,         // 圆半径
                    fillColor: 'none',   // 圆形填充颜色
                    fillOpacity: 0,      // 填充色透明度
                    strokeColor: '#3979fe', // 描边颜色
                    strokeWeight: 2,     // 描边宽度
                })
                this.circle.setMap(o)
              },
              'moveend': () => {
              },
              'zoomchange': () => {
              },
              'click': (e) => {
                // alert('map clicked')
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
    created() {
        this.getPid()
        this.getMonitoringData()
    },
    methods: {
        //导航栏点击事件
        handleChange(val) {
            // console.log(val)
            // this.center = [114.003378,22.571492]
            // this.zoom = 15
            // this.polygon.show()
            // this.marker.hide()

            // let temp = []
            // for (let i = 0; i < this.monitoringData.areaList.length; i++) {
            //     // console.log(this.monitoringData.areaList[i].name)
            //     if (val == this.monitoringData.areaList[i].name) {
            //         temp.push(this.monitoringData.areaList[i].xloc)
            //         temp.push(this.monitoringData.areaList[i].yloc)
            //         this.circle.setCenter(temp)
            //         this.circle.setRadius(this.monitoringData.areaList[i].radius)
            //         this.center = temp
            //         this.zoom = 14
            //     }
            // }
        },

        // 获取项目工区数据
        getMonitoringData() {
            this.$axios.get(`/lz/project/listzh?id=${this.pid}`).then(
                res => {
                    // console.log(res.data)
                    this.monitoringData = res.data
                    // this.circleCenter = [114.007675,22.663599]
                    // this.circleRadius = 200                    
                    // this.circle.hide()
                }
            )
        },

        // 渲染选中工区的电子围栏
        setElectronicFence(areaList) {
            // console.log(areaList)
            let temp = []
            temp.push(areaList.xloc)
            temp.push(areaList.yloc)
            // 设置电子围栏圆心
            this.circle.setCenter(temp)
            // 设置电子围栏半径
            this.circle.setRadius(areaList.radius)
            // 设置地图中心点
            this.center = temp
            // 设置地图缩放等级
            this.zoom = 14
            // 保存当前选择工区的工区id
            // this.
            this.gid = areaList.id
            // 保存当前选择工区的半径
            this.radius = areaList.radius
        },

        // 编辑电子围栏信息
        setRailRadius() {
            // console.log(this.gid)

            // 设置电子围栏半径
            // this.$axios.get(`http://192.168.0.102:8989/lz/area/edit?id=${this.gid}&radius=${this.radius}`).then(
            //     res => {
            //         console.log(res.data)
                    
            //     }
            // )
        },

        // 取消点击事件
        cancelClick() {
            this.importShow = false
        },

        // 保存点击事件
        saveClick() {
            // 隐藏对话框
            this.importShow = false

            // 发送请求更改电子围栏半径 
            this.$axios.get(`/lz/area/edit?id=${this.gid}&radius=${this.radius}`).then(
                res => {
                    // console.log(res.data)
                    if (res.data.code == 0) {
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                    } else {
                        this.$message({
                            message: '更改失败，请重试',
                            type: 'warning'
                        })
                    }
                    // 重新获取数据
                    this.getMonitoringData()

                    setTimeout(() => {
                        // 重新渲染电子围栏
                        for (let i = 0; i < this.monitoringData.areaList.length; i++) {
                            // console.log(this.monitoringData.areaList[i])
                            if (this.monitoringData.areaList[i].id == this.gid) {
                                // console.log(`123`)
                                this.setElectronicFence(this.monitoringData.areaList[i])
                            }
                        }
                    }, 30)
                }
            )

            
        },

        // 获取项目id
        getPid() {
          this.pid = localStorage.getItem('pid')
        }
    }
}
</script>