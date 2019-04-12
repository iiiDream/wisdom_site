<template>
    <div id="l_history">
        <div class="content-box">
            <div class="message">
                <div class="inquire">
                    <el-input v-model="name" placeholder="姓名或设备编号或电话"></el-input>
                    <el-date-picker
                        v-model="createDate"
                        value-format="yyyy-MM-dd"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                    <button @click="getLocaltionListData">查询</button>
                </div>
                <div class="message-box">
                    <ul>
                        <li>
                            姓名：<span>{{localtionListData.hname}}</span>
                        </li>
                        <li>
                            电话：<span>{{localtionListData.phone}}</span>
                        </li>
                        <li>
                            所属公司：<span>{{localtionListData.laowu}}</span>
                        </li>
                        <li>
                            设备编号：<span>{{localtionListData.imei}}</span>
                        </li>
                        <li class="start">
                            开始
                        </li>
                        <li>
                            设备电量：<span>{{localtionListData.localtionList[localtionListData.localtionList.length-1].bat}}%</span>
                        </li>
                        <li>
                            时间：<span>{{localtionListData.localtionList[localtionListData.localtionList.length-1].createDate}}</span>
                        </li>
                        <li>
                            位置：<span>{{localtionListData.localtionList[localtionListData.localtionList.length-1].address}}</span>
                        </li>
                        <li class="end">
                            结束
                        </li>
                        <li>
                            设备电量：<span>{{localtionListData.localtionList[0].bat}}%</span>
                        </li>
                        <li>
                            时间：<span>{{localtionListData.localtionList[0].createDate}}</span>
                        </li>
                        <li>
                            位置：<span>{{localtionListData.localtionList[0].address}}</span>
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
                        .el-input__icon {
                            height: .3rem;
                            line-height: .3rem;
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
                    .start {
                        color: #3ee09a;
                        font-size: .16rem;
                    }
                    .end {
                        color: #fb497c;
                        font-size: .16rem;
                    }
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
                        background-color: #fb497c;
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
            pid: 0, //项目id
            name: '', //需要查询的人名或设备编号或手机号码
            createDate: '', //需要查询的定位数据的日期
            circle: '', // 电子围栏位置信息
            polyline: '', //历史轨迹
            localtionListData: {
                searchValue: null,
                createBy: null,
                createTime: null,
                updateBy: null,
                updateTime: null,
                remark: null,
                params: {},
                id: 1,
                imei: null,
                hid: null,
                haid: null,
                hname: null,
                phone: null,
                laowu: null,
                localtionList: [{
                    searchValue: null,
                    createBy: null,
                    createTime: null,
                    updateBy: null,
                    updateTime: null,
                    remark: null,
                    params: {},
                    id: null,
                    imei: null,
                    xloc: null,
                    yloc: null,
                    bat: null,
                    rssi: null,
                    watchDate: null,
                    createDate: null,
                    isPosition: null,
                    address: null
                }],
            }, //人员定位默认数据
            time: '', //时间
            amapManager,
            zoom: 12,
            center: [114.083372,22.544146],
            events: {
                init: (o) => {
                    // console.log(o.getCenter())
                    // console.log(this.$refs.map.$$getInstance())
                    // o.getCity(result => {
                    //     console.log(result)
                    // })
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
                    // marker = [marker1,marker2]
                    // marker.setMap(o)
                    // 历史轨迹
                    this.polyline = new AMap.Polyline({
                        path:[
                            [113.994194,22.578189],
                            [114.004537,22.563725],
                            [114.009601,22.570383],
                            [114.006167,22.580171]
                        ],
                        lineJoin: 'round', //折线拐点样式
                        showDir: true, //移动方向
                        strokeWeight: 2, //线条宽度
                        strokeColor: '#3366ff', //线条颜色
                    })
                    this.polyline.setMap(o)
                    this.polyline.hide()
                    // let polygon = new AMap.Polygon({
                    //     path: [
                    //         new AMap.LngLat(113.992992,22.581439),
                    //         new AMap.LngLat(114.01033,22.582786),
                    //         new AMap.LngLat(114.010287,22.562853),
                    //         new AMap.LngLat(113.996898,22.563329)
                    //     ],  
                    //     fillColor: '#fff', // 多边形填充颜色
                    //     fillOpacity: 0, //填充颜色透明度
                    //     borderWeight: 1, // 线条宽度
                    //     strokeColor: '#137ed2', // 线条颜色}
                    // })
                    // polygon.setMap(o)
                    // 渲染电子围栏
                    this.circle = new AMap.Circle({
                        center: [114.007675,22.663599], // 圆心位置
                        radius: 0,         // 圆半径
                        fillColor: 'none',   // 圆形填充颜色
                        fillOpacity: 0,      // 填充色透明度
                        strokeColor: '#3979fe', // 描边颜色
                        strokeWeight: 2,     // 描边宽度
                    })
                    this.circle.setMap(o)

                    // // 人员位置坐标点
                    // this.marker = new AMap.Marker({
                    //     position: [114.003378,22.571492]
                    // })
                    // this.marker.setMap(o)
                    // this.marker.hide()
                },
                'moveend': () => {
                },
                'zoomchange': () => {
                },
                'click': (e) => {
                //   alert('map clicked')
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
    created() {
        this.getPid()
    },
    methods: {
        // 获取人员定位数据
        getLocaltionListData() {
            this.$axios.get(`/lz/hire/localtionList?id=${this.pid}&string=${this.name}&createDate=${this.createDate}`).then(
                res => {
                    // console.log(res.data.length)
                    // 电子围栏渲染
                    let temp = []
                    let temp2 = []
                    let temp3 = []
                    if(res.data.length != 0) {
                        this.localtionListData = res.data[0]
                        temp.push(this.localtionListData.areaList[0].xloc)
                        temp.push(this.localtionListData.areaList[0].yloc)
                        // console.log(temp)
                        
                        // 遍历历史轨迹记录
                        for (let i = 0; i < this.localtionListData.localtionList.length; i++) {
                            temp2 = []
                            temp2.push(this.localtionListData.localtionList[this.localtionListData.localtionList.length-1-i].xloc)
                            temp2.push(this.localtionListData.localtionList[this.localtionListData.localtionList.length-1-i].yloc)
                            temp3.push(temp2)
                        }
                        this.circle.setCenter(temp)
                        this.circle.setRadius(this.localtionListData.areaList[0].radius)
                        // 地图中心点设为电子围栏中心点
                        this.center = temp
                        this.zoom = 14
                        // 渲染历史轨迹
                        this.polyline.setPath(temp3)
                        this.polyline.show()
                    } else {
                        this.$message({
                          message: '无此人定位数据',
                          type: 'warning'
                        })
                    }
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
