<template>
    <div>
        <div class="top-box">
            <div class="headcount">
                <div class="left-box">
                    <p>0</p>
                    <span>应出勤人数</span>
                </div>
                <div class="img-box"></div>
            </div>
            <div class="attendance">
                <div class="left-box">
                    <p>0</p>
                    <span>实际出勤人数</span>
                </div>
                <div class="img-box"></div>
            </div>
        </div>
        <div class="map-box">
            <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
            </el-amap>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .top-box {
        color: #fff;
        display: flex;
        justify-content: space-between;
        >div {
            width: 7.3rem;
            height: 1.67rem;
            padding: 0 .42rem;
            background-image: url('../../../static/images/location-topBorder.png');
            background-size: contain;
            display: flex;
            justify-content: space-between;
            .left-box {
                p {
                    font-size: .31rem;
                    font-weight: bolder;
                    padding-top: .47rem;
                    height: .71rem;
                    margin-bottom: .22rem
                }
                span {
                    font-size: .18rem;                    
                }
            }
            .img-box {
                width: .96rem;
                height: 1.67rem;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: contain;
            }
            
        }
        .headcount {
            .img-box {
                background-image: url('../../../static/images/location-headcount.png');
            }
        }
        .attendance {
            .img-box {
                background-image: url('../../../static/images/location-attendance.png');
            }
        }
    }
    .map-box {
        width: 15rem;
        height: 7.34rem;
        padding: .07rem;
        margin-top: .4rem;
        background-image: url('../../../static/images/location-middleBorder.png');
        background-size: contain;
        
    }
</style>

<script>
let amapManager = new VueAMap.AMapManager();
export default {
    data() {
        return {
            amapManager,
            zoom: 12,
            center: [114.083372,22.544146],
            events: {
              init: (o) => {
                console.log(o.getCenter())
                console.log(this.$refs.map.$$getInstance())
                // o.getCity(result => {
                //     console.log(result)
                // })
                let marker = new AMap.Marker({
                    // icon: "https://webapi.amap.com/ui/1.0/ui/misc/PositionPicker/assets/position-picker.png?v=1.0.11&key=608d75903d29ad471362f8c58c550daf",
                    position: [113.997471,22.564146],
                    title: '虎匠罗芳工地',
                    label: {
                            content: '虎匠罗芳工地',
                            offset: new AMap.Pixel(-30, -24),
                            },
                    // content: ' ',
                });
                marker.setMap(o);
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
                        console.log(instance);
                    },
                }
            }],
        }
    }
}
</script>

