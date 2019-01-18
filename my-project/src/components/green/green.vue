<template>
  <div id="content">
    <div id="left">
      <div class="leftTop">
        <div class="title">
          <h1>{{time}}</h1>
          <div>{{weather.currentCity}}环境检测动态显示</div>
        </div>
        <div class="content">
          <div class="one">
            <span>{{date}}</span>
            <span>{{zhouji}}</span>
              <img v-if="weatherInfo1.includes('云')" src="../../../static/images/g_duoyun.png">
              <img v-else-if="weatherInfo1.includes('晴')" src="../../../static/images/g_qing.png">
              <img v-else-if="weatherInfo1.includes('雪')" src="../../../static/images/g_xue.png">
              <img v-else-if="weatherInfo1.includes('雨')" src="../../../static/images/g_dayv.png">
              <img v-else-if="weatherInfo1.includes('阴')" src="../../../static/images/g_yin.png">
              <img v-else-if="weatherInfo1.includes('雷')" src="../../../static/images/g_lei.png">
              <img v-else src="../../../static/images/g_wan.png">
            <div class="name">{{weatherInfo1}}</div>
            <div class="wendu">{{weatherInfo3}}</div>
            <div class="fengx">{{weatherInfo2}}</div>
          </div>
          <div class="two">
            <div class="sub" v-for="(item, index) in ortherWeather" :key="index">
              <span>{{item.date}}</span>
              <img v-if="item.weather.includes('云')" src="../../../static/images/g_duoyun.png">
              <img v-else-if="item.weather.includes('晴')" src="../../../static/images/g_qing.png">
              <img v-else-if="item.weather.includes('雪')" src="../../../static/images/g_xue.png">
              <img v-else-if="item.weather.includes('雨')" src="../../../static/images/g_dayv.png">
              <img v-else-if="item.weather.includes('阴')" src="../../../static/images/g_yin.png">
              <img v-else-if="item.weather.includes('雷')" src="../../../static/images/g_lei.png">
              <img v-else src="../../../static/images/g_wan.png">
              <div class="name">{{item.weather}}</div>
              <div class="wendu">{{item.temperature}}</div>
              <div class="fengx noml">{{item.wind}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="leftMain">
        <div class="yangchen">
          <h3>扬尘监测分析</h3>
          <div class="top">
            <div class="left">
              <img src="../../../static/images/g_lv.png">
              <div>
                <span class="num">{{manyInfo.pm25}}</span>ug/m3
              </div>
            </div>
            <div class="right">
              <div class="title">PM2.5</div>
              <div class="day">本日平均浓度：</div>
              <div class="daynum noml">45ug/m3</div>
              <div class="month">本月平均浓度：</div>
              <div class="monthnum noml">45ug/m3</div>
            </div>
          </div>
          <div class="down">
            <div class="left">
              <img src="../../../static/images/g_hong.png">
              <div>
                <span class="num danger">{{manyInfo.pm10}}</span>ug/m3
              </div>
            </div>
            <div class="right">
              <div class="title">PM10</div>
              <div class="day">本日平均浓度：</div>
              <div class="daynum danger">100ug/m3</div>
              <div class="month">本月平均浓度：</div>
              <div class="monthnum noml">45ug/m3</div>
            </div>
          </div>
        </div>
        <div class="noise">
          <h3>噪音</h3>
          <div class="title">
            <div class="subtitle">
              实时数据：
              <span class="num noml">{{manyInfo.zs}}</span>dB
            </div>
            <div class="mintitle">
              <span>最近12小时噪音</span>
              <span>单位：db</span>
            </div>
          </div>
          <div
            id="noisePic"
            style="width: 380px;height:204px;transfrom:translateY(30px);"
            class="noisePic"
          ></div>
        </div>
      </div>
    </div>
    <div id="center">
      <div class="main">
        <h1>实时环境检测</h1>
        <div class="bgc">
          <img src="../../../static/images/g_lvse.png" class="mainImg">
        </div>
        <div class="mianInfo">
          <div class="global">
            <div class="title">PM2.5</div>
            <div class="num">{{manyInfo.pm25}}</div>
            <div class="yuan">
              <div class="bor">优</div>
            </div>
          </div>
        </div>
        <div class="leftInfo">
            <div class="box">
              <img src="../../../static/images/g_qiwen.png" style="transform: translateX(.02rem);">
              <div class="text">
                <p  style="font-weight: bold;">气温</p>
                <p class="info">{{manyInfo.wd}}℃</p>
              </div>
            </div>
            <div class="box">
              <img src="../../../static/images/g_wendu.png">
              <div class="text">
                <p style="font-weight: bold;">湿度</p>
                <p class="info">{{manyInfo.sd}}%</p>
              </div>
            </div>
            <div class="box">
              <img src="../../../static/images/g_fengsu.png">
              <div class="text" style="transform: translate(.2rem);">
                <p style="font-weight: bold;">风速</p>
                <p class="info">22m/s</p>
              </div>
            </div>
        </div>
        <div class="fengche">
          <div class="big">
            <img src="../../../static/images/g_dafs.png" class="bigshang">
            <img src="../../../static/images/g_dafx.png" class="bigxia">
          </div>
          <div class="small">
            <img src="../../../static/images/g_xxfs.png" class="smallshang">
            <img src="../../../static/images/g_xxfx.png" class="smallxia">
          </div>
        </div>
        <div class="bottonInfo">
          <ul>
            <li>0</li>
            <li>50</li>
            <li>75</li>
            <li>150</li>
            <li>250</li>
            <li>300</li>
            <li>500</li>
          </ul>
          <img src="../../../static/images/g_wenran.png" alt="">
        </div>
        <div class="downtable">
          <div class="left">
            <div class="mintitle">
              <span>最近6小时气温</span>
              <span>单位：℃</span>
            </div>
            <div
              id="sixwen"
              style="width: 443px;height:244px;transfrom:translateY(40px);"
              class="sixwen"
            ></div>
          </div>
          <div class="right">
            <div class="mintitle">
              <span>最近6小时污染度</span>
              <span>PM2.5</span>
              <span>PM10</span>
              <span>单位：ug</span>
            </div>
            <div
              id="sixwu"
              style="width: 443px;height:244px;transfrom:translateY(40px);"
              class="sixwu"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div id="right">
      <div class="up">
        <h3>用电管理</h3>
        <div class="title">
          <span>
            <img src="../../../static/images/g_shandian.png">
          </span>
          <span class="content">
            本月用电
            <span>21,286</span>
            <span class="danwei">&nbsp;kw/h</span>
          </span>
        </div>
        <div class="imgs">
          <div class="daydian">
            <div class="text">
              <p>200</p>
              <p>kwh</p>
            </div>
          </div>
          <div class="dianxiang">
            <div class="text">
              <p>80</p>
              <p>℃</p>
            </div>
          </div>
          <div class="loudian">
            <div class="text">
              <p>200</p>
              <p>kwh</p>
            </div>
          </div>
        </div>
        <div class="subtitle">
          <p class="huang">今日用电</p>
          <p class="huang">电箱温度</p>
          <p class="danger">电箱漏电</p>
        </div>
        <div class="biao">
          <div class="mintitle">
            <span>最近7天用电</span>
            <span>单位：KWH</span>
          </div>
          <div id="sevendian" style="width: 360px;height:180px;" class="sevendian"></div>
        </div>
      </div>
      <div class="down">
        <h3>用水管理</h3>
        <div class="title">
          <span>
            <img src="../../../static/images/g_shuidi.png">
          </span>
          <span class="content">
            本月用水
            <span>21,286</span>
            <span class="danwei">&nbsp;m³</span>
          </span>
        </div>
        <div class="one">
          <div class="mintitle">
            <span>最近7天用水</span>
            <span>单位：m³</span>
          </div>
          <div id="sevenworter" style="width: 360px;height:150px;" class="sevenworter"></div>
        </div>
        <div class="two">
          <div class="mintitle">
            <span>最近6月用水</span>
            <span>单位：m³</span>
          </div>
          <div id="sixworter" style="width: 360px;height:150px;" class="sixworter"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
moment.locale("zh-cn");
import moment from "moment";
export default {
  data() {
    return {
      time: {},
      date: {},
      zhouji: {},
      weather:{},
      weatherInfo1:'',
      weatherInfo2:'',
      weatherInfo3:'',
      ortherWeather:[],
      manyInfo:{},
    };
  },
  created() {
    this.getWeather(),
    this.getdatays(),
    this.gethourData(),
    this.getManyInfo()
  },
  mounted() {
      this.getTime()
  },
  methods: {
    //   噪音图形
    noisePic(zsH,zsV) {
      let mytemperature = this.$echarts.init(
        document.getElementById("noisePic")
      );
      mytemperature.setOption({
        // backgroundColor: "#FBFBFB",
        grid: {
          x: 50,
          y: 20,
          x2: 10,
          y2: 40
        },
        tooltip: {
          trigger: "axis"
        },
        calculable: true,
        xAxis: [
          {
            axisLabel: {
              rotate: 0,
              interval: 0,
              color: "#fff"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            type: "category",
            boundaryGap: false,
            // data: [
            //   "1",
            //   "2",
            //   "3",
            //   "4",
            //   "5",
            //   "6",
            //   "7",
            //   "8",
            //   "9",
            //   "10",
            //   "11",
            //   "12"
            // ]
            data: zsH
          }
        ],
        yAxis: [
          {
            type: "value",
            max: 100,
            min: 0,
            interval: 20,
            axisLabel: {
              textStyle: {
                color: "#fff"
              },
              formatter: "{value}"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#132e6d"],
                width: 1,
                type: "dashed"
              }
            }
          }
        ],
        series: [
          {
            name: "噪音",
            type: "line",
            symbolSize: 4,
            color: ["#508bb8"],
            // data: [42, 32, 54, 60, 65, 56, 49, 46, 54, 50, 52]
            data: zsV
          }
        ]
      });
    },
    getTime() {
      this.time = moment().format("HH:mm");
      this.date = moment().format("MMM Do");
      this.zhouji = moment().format("ddd");
      setInterval(() => {
        this.time = moment().format("HH:mm");
      }, 60000);
    },
    // 6小时温度图形
    sixwen(wdH,wdV) {
      let mysixwen = this.$echarts.init(document.getElementById("sixwen"));
      mysixwen.setOption({
        grid: {
          x: 50,
          y: 20,
          x2: 20,
          y2: 40
        },
        tooltip: {
          trigger: "axis"
        },
        calculable: true,
        xAxis: [
          {
            axisLabel: {
              rotate: 0,
              interval: 0,
              color: "#fff"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            type: "category",
            boundaryGap: false,
            // data: ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
            data: wdH
          }
        ],
        yAxis: [
          {
            type: "value",
            max: 50,
            min: 0,
            interval: 10,
            axisLabel: {
              textStyle: {
                color: "#fff"
              },
              formatter: "{value}"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#132e6d"],
                width: 1,
                type: "dotted"
              }
            }
          }
        ],
        series: [
          {
            name: "气温",
            type: "line",
            symbolSize: 4,
            symbol: "none",
            color: ["#508bb8"],
            // data: [29, 19, 26, 34, 50, 25]
            data: wdV
          }
        ]
      });
    },
    // 6小时污染度图形
    sixwu(pmH,pm2,pm10) {
      let mysixwu = this.$echarts.init(document.getElementById("sixwu"));
      mysixwu.setOption({
        // backgroundColor: "#FBFBFB",
        grid: {
          x: 50,
          y: 20,
          x2: 20,
          y2: 40
        },
        tooltip: {
          trigger: "axis"
        },
        calculable: true,
        xAxis: [
          {
            axisLabel: {
              rotate: 0,
              interval: 0,
              color: "#fff"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            type: "category",
            boundaryGap: false,
            // data: ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
            data: pmH
          }
        ],
        yAxis: [
          {
            type: "value",
            max: 50,
            min: 0,
            interval: 10,
            axisLabel: {
              textStyle: {
                color: "#fff"
              },
              formatter: "{value}"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#132e6d"],
                width: 1,
                type: "dotted"
              }
            }
          }
        ],
        series: [
          {
            name: "pm2.5",
            type: "line",
            symbolSize: 0,
            symbol: "none",
            color: ["#508bb8"],
            // data: [29, 19, 26, 34, 50, 25]
            data: pm2
          },
          {
            name: "pm10",
            type: "line",
            symbolSize: 0,
            symbol: "none",
            color: ["#21ff6a"],
            // data: [19, 9, 16, 24, 40, 15]
            data: pm10
          }
        ]
      });
    },
    // 七天用电图形
    sevendian(sevendianH,sevendianV) {
      let mysevendian = this.$echarts.init(
        document.getElementById("sevendian")
      );
      mysevendian.setOption({
        // backgroundColor: "#FBFBFB",
        grid: {
          x: 50,
          y: 20,
          x2: 20,
          y2: 40
        },
        tooltip: {
          trigger: "axis"
        },
        calculable: true,
        xAxis: [
          {
            axisLabel: {
              rotate: 0,
              interval: 0,
              color: "#fff"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            type: "category",
            boundaryGap: false,
            // data: ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
            data: sevendianH
          }
        ],
        yAxis: [
          {
            type: "value",
            max: 200,
            min: 0,
            interval: 50,
            axisLabel: {
              textStyle: {
                color: "#fff"
              },
              formatter: "{value}"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#132e6d"],
                width: 1,
                type: "dotted"
              }
            }
          }
        ],
        series: [
          {
            name: "用电",
            type: "line",
            symbolSize: 4,
            color: ["#508bb8"],
            // data: [67, 124, 126, 134, 90, 85]
            data: sevendianV
          }
        ]
      });
    },
    // 七天用水图形
    sevenworter(sevenshuiH,sevenshuiV) {
      let mysevenworter = this.$echarts.init(
        document.getElementById("sevenworter")
      );
      mysevenworter.setOption({
        // backgroundColor: "#FBFBFB",
        grid: {
          x: 50,
          y: 20,
          x2: 20,
          y2: 40
        },
        tooltip: {
          trigger: "axis"
        },
        calculable: true,
        xAxis: [
          {
            axisLabel: {
              rotate: 0,
              interval: 0,
              color: "#fff"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            type: "category",
            boundaryGap: false,
            // data: ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
            data: sevenshuiH
          }
        ],
        yAxis: [
          {
            type: "value",
            max: 150,
            min: 0,
            interval: 50,
            axisLabel: {
              textStyle: {
                color: "#fff"
              },
              formatter: "{value}"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#132e6d"],
                width: 1,
                type: "dotted"
              }
            }
          }
        ],
        series: [
          {
            name: "用水",
            type: "line",
            symbolSize: 4,
            color: ["#508bb8"],
            // data: [67, 124, 126, 134, 90, 85]
            data: sevenshuiV
          }
        ]
      });
    },
    // 六月用水图形
    sixworter(sixshuiH,sixshuiV) {
      let mysixworter = this.$echarts.init(
        document.getElementById("sixworter")
      );
      mysixworter.setOption({
        // backgroundColor: "#FBFBFB",
        grid: {
          x: 50,
          y: 20,
          x2: 20,
          y2: 40
        },
        tooltip: {
          trigger: "axis"
        },
        calculable: true,
        xAxis: [
          {
            axisLabel: {
              rotate: 0,
              interval: 0,
              color: "#fff"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            type: "category",
            boundaryGap: false,
            // data: ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
            data: sixshuiH
          }
        ],
        yAxis: [
          {
            type: "value",
            max: 150,
            min: 0,
            interval: 50,
            axisLabel: {
              textStyle: {
                color: "#fff"
              },
              formatter: "{value}"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#132e6d"],
                width: 1,
                type: "dotted"
              }
            }
          }
        ],
        series: [
          {
            name: "用水",
            type: "line",
            symbolSize: 4,
            color: ["#508bb8"],
            // data: [67, 124, 126, 134, 90, 85]
            data: sixshuiV
          }
        ]
      });
    },
    // 天气接口
    getWeather(){
      this.$axios.get('/APP/XMPage/XmData.ashx?method=XMData&xmid=281').then(res=>{
        this.weather=res.data.weather[0].results[0];
        this.weatherInfo1=res.data.weather[0].results[0].weather_data[0].weather;
        this.weatherInfo2=res.data.weather[0].results[0].weather_data[0].wind;
        this.weatherInfo3=res.data.weather[0].results[0].weather_data[0].temperature;
        let orther=res.data.weather[0].results[0].weather_data;
        // console.log(this.ortherWeather);
        this.ortherWeather=orther.splice(1);
        
      })
    },
    // 4小时刷新表数据
    getdatays(){
      this.$axios.get('/APP/XMPage/EnvData.ashx?method=GetXMDaysRealData&xmid=281').then(res=>{
        let sevendianH= [];
        let sevendianV = [];
        let sevenshuiH = [];
        let sevenshuiV = [];
        let sixshuiH = [];
        let sixshuiV = [];
        for (let i = 0; i < res.data.data_yd.length; i++) {
          sevendianH.push(res.data.data_yd[i].dayhour);
          sevendianV.push(res.data.data_yd[i].value);
        }
        for (let i = 0; i < res.data.data_ys.length; i++) {
          sevenshuiH.push(res.data.data_yd[i].dayhour);
          sevenshuiV.push(res.data.data_yd[i].value);
        }
        for (let i = 0; i < res.data.data_yd1.length; i++) {
          sixshuiH.push(res.data.data_yd[i].dayhour);
          sixshuiV.push(res.data.data_yd[i].value);
        }
         this.sevendian(sevendianH,sevendianV);
         this.sevenworter(sevendianH,sevendianV);
         this.sixworter(sixshuiH,sixshuiV);
      })
    },
    // 1小时刷新表数据
    gethourData(){
      this.$axios.get('/APP/XMPage/EnvData.ashx?method=GetEnvHoursData&xmid=281').then(res=>{
        let pmH=[];
        let pm2=[];
        let pm10=[];
        for (let i = 0; i < res.data.data_pm.length; i++) {
          pmH.push(res.data.data_pm[i].dayhour);
          pm2.push(res.data.data_pm[i].pm2);
          pm10.push(res.data.data_pm[i].pm10);
        }
        this.sixwu(pmH,pm2,pm10)

        let wdH=[];
        let wdV=[];
        for (let i = 0; i < res.data.data_wd.length; i++) {
          wdH.push(res.data.data_wd[i].dayhour);
          wdV.push(res.data.data_wd[i].value);
        }
        this.sixwen(wdH,wdV);

        let zsH=[];
        let zsV=[];
        for (let i = 0; i < res.data.data_zs.length; i++) {
          zsH.push(res.data.data_zs[i].dayhour);
          zsV.push(res.data.data_zs[i].value);
        }
        this.noisePic(zsH,zsV)
      })
    },
    // 其他数据
    getManyInfo(){
      this.$axios.get('/APP/XMPage/EnvData.ashx?method=GetEnvRealData&xmid=281').then(res=>{
        this.manyInfo=res.data.EnvRealData[0];
      })
    }
  }
};
</script>
<style lang='less' scoped>
.danger {
  color: #c23864 !important;
}
.noml {
  color: #21ff6a !important;
}
.huang {
  color: #ffb70e !important;
}
#content {
  display: flex;
  width: 100%;
  padding: 0.5rem 0.3rem 0 0.3rem;
  height: 10.3rem;
  overflow: hidden;
  background: url("../../../static/images/index.jpg") no-repeat center center;
  h3 {
    font-weight: 900;
  }
  #left {
    width: 22.22%;
    height: 100%;
    .leftTop {
      width: 4.14rem;
      height: 1.96rem;
      background: url("../../../static/images/g_zuoshang.png") no-repeat center
        center;
      padding: 0.2rem;
      padding: 0.15rem 0.2rem 0.18rem 0.11rem;
      .title {
        display: flex;
        color: #fff;
        justify-content: space-between;
        h1 {
          font-size: 0.3rem;
          margin-left: .14rem;
        }
        div {
          margin-right: 0.5rem;
          font-weight: 700;
        }
      }
      .content {
        color: #fff;
        margin-top: 0.05rem;
        .one {
          text-align: center;
          font-size: 0.12rem;
          position: relative;
          width: 1rem;
          float: left;
          &::after {
            content: "";
            height: 1.35rem;
            width: 0.01rem;
            background-color: #fff;
            position: absolute;
            top: 0.05rem;
            right: -0.2rem;
          }
          span {
            font-size: 12px;
            margin-left: 0.1rem;
          }
          img {
            margin-left: 0.2rem;
            width: 0.54rem;
            height: 0.54rem;
            display: block;
          }
          .wendu {
            margin: 0;
            transform: translateY(-0.05rem);
          }
          .fengx {
            margin-top: -0.05rem;
            margin-left: 0.2rem;
            background-color: #3ee19a;
            width: .7rem;
            height: 0.2rem;
            border-radius: 0.05rem;
            text-align: center;
            line-height: 0.2rem;
            // overflow: hidden;
          }
        }
        .two {
          text-align: center;
          transform: translateX(0.14rem);
          display: flex;
          margin-left: 0.6rem;
          font-size: 12px;
          .sub {
            width: 0.7rem;
            margin-left: 0.2rem;
            img {
              margin-left: 0.05rem;
              width: 0.54rem;
              height: 0.54rem;
              display: block;
            }
            .wendu {
              margin: 0;
              transform: translateY(-0.05rem);
            }
            .fengx {
              margin-top: -0.05rem;
              margin-left: 0.1rem;
              width: 0.5rem;
              height: 0.2rem;
              border-radius: 0.05rem;
              text-align: center;
              line-height: 0.2rem;
              overflow: hidden;
            }
          }
        }
      }
    }
    .leftMain {
      width: 4.14rem;
      height: 7.25rem;
      background: url("../../../static/images/g_zuoxia.png") no-repeat center
        center;
      margin-top: 0.3rem;
      .yangchen {
        .top,
        .down {
          position: relative;
          padding: 0 0.42rem;
          display: flex;
          justify-content: space-between;
          .left {
            position: relative;
            width: 50%;
            div {
              position: absolute;
              left: 19%;
              top: 52%;
              transform: translateY(-50%);
              color: #cbccce;
              .num {
                font-size: 0.18rem;
                color: #fff;
              }
            }
          }
          .right {
            color: #fff;
            font-size: 0.16rem;
            .title {
              font-size: 0.18rem;
            }
            .day {
              margin-top: 0.04rem;
            }
            .month {
              margin-top: 0.04rem;
            }
          }
        }
        .top {
          margin-top: 0.2rem;
        }
        .down {
          margin-top: 0.4rem;
        }
      }
      .noisePic {
        transform: translateY(0.65rem);
      }
      .noise {
        position: relative;
        margin-top: 0.35rem;
        .title {
          color: #fff;
          .subtitle {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.18rem;
          }
          .mintitle {
            position: absolute;
            margin-top: 0.4rem;
            span {
              &:nth-child(1) {
                float: left;
                margin-left: 0.2rem;
                font-size: 0.14rem;
              }
              &:nth-child(2) {
                float: right;
                margin-left: 2.1rem;
                font-size: 0.12rem;
                &::before {
                  position: absolute;
                  content: "";
                  width: 0.05rem;
                  height: 0.05rem;
                  border-radius: 50%;
                  background-color: #fff;
                  right: 0.55rem;
                  top: 0.1rem;
                }
              }
            }
          }
        }
      }
    }
  }

  #center {
    flex: 1;
    height: 100%;
    margin-left: 1.4%;
    .main {
      width: 100%;
      height: 9.51rem;
      background: url("../../../static/images/g_zhong.png") no-repeat center
        center;
      position: relative;
      color: #fff;
      padding: 0.34rem 0.4rem 0.4rem 0.45rem;
      h1 {
        position: absolute;
        top: 0.34rem;
        left: 50%;
        transform: translateX(-50%);
        font-weight: 900;
      }
      .bgc{
        width: 400px;
        height: 400px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: .9rem;
        background: url('../../../static/images/g_hc.gif') no-repeat center center;
        .mainImg {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: .66rem;
          // border-radius: 50%;
        }
      }
      .mianInfo {
        width: 2.74rem;
        height: 2.74rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 1.6rem;
        border-radius: 50%;
        .global {
          text-align: center;
          // display: flex;
          // flex-direction: column;
          .title {
            color: #b8b8bc;
            font-size: 0.32rem;
            margin-top: 0.55rem;
            font-weight: 700;
          }
          .num {
            color: #fff;
            font-weight: 900;
            font-size: 0.5rem;
            margin-top: 0.41rem;
          }
          .yuan {
            width: 1.24rem;
            height: 0.4rem;
            border: 0.02rem solid #656d6a;
            border-radius: 0.2rem;
            margin: 0 auto;
            transform: translateY(0.4rem);
            padding: 0.03rem;
            .bor {
              width: 100%;
              height: 100%;
              background-color: #21ff6a;
              border-radius: 0.2rem;
              text-align: center;
              line-height: 0.32rem;
              font-size: 0.22rem;
            }
          }
        }
      }
      .leftInfo{
        position: absolute;
        right: .64rem;
        top: .9rem;
        .box{
          margin-top:.4rem;
          display: flex;
          justify-content: space-between;
          text-align: center;
          
          img{
            transform: translateX(-.1rem);
          }
          .text{
            font-size: .22rem;
            text-align: left;
            margin-left: .02rem;
            .info{
              transform: translateY(.06rem);
              font-size: .2rem;
            }
          }
        }
      }
      .fengche{
        position: absolute;
        bottom: 5.5rem;
        left: .7rem;
        .big{
          .bigshang{
            transform: rotate(-88deg);
          }
          .bigxia{
            position: absolute;
            left: .42rem;
            top: .67rem;
          }
        }
        .small{
          
          .smallshang{
            position: absolute;
            left: .66rem;
            top: .68rem;
          }
          .smallxia{
            position: absolute;
            left: .94rem;
            top: 1.09rem;
          }
        }
      }
      .bottonInfo{
        position: absolute;
        bottom: 3.8rem;
        left:50%;
        transform: translateX(-50%);
        ul{
          display: flex;
          justify-content: space-between;
        }
      }
      .downtable {
        position: absolute;
        bottom: 0.75rem;
        width: 100%;
        display: flex;
        .left {
          flex: 1;
          .mintitle {
            position: absolute;
            margin-top: 0.4rem;
            transform: translateX(-0.2rem);
            span {
              &:nth-child(1) {
                float: left;
                margin-left: 0.2rem;
                font-size: 0.14rem;
                transform: translateY(-0.2rem);
              }
              &:nth-child(2) {
                float: right;
                margin-left: 2.1rem;
                font-size: 0.12rem;
                &::before {
                  position: absolute;
                  content: "";
                  width: 0.05rem;
                  height: 0.05rem;
                  border-radius: 50%;
                  background-color: #569acc;
                  right: 0.55rem;
                  top: 0.1rem;
                }
              }
            }
          }
        }
        .right {
          flex: 1;
          .mintitle {
            position: absolute;
            margin-top: 0.4rem;
            transform: translateX(-0.2rem);
            span {
              &:nth-child(1) {
                float: left;
                margin-left: 0.2rem;
                font-size: 0.14rem;
                transform: translateY(-0.2rem);
              }
              &:nth-child(2) {
                font-size: 0.12rem;
                margin-left: 1.2rem;
                &::before {
                  position: absolute;
                  content: "";
                  width: 0.05rem;
                  height: 0.05rem;
                  border-radius: 50%;
                  background-color: #569acc;
                  right: 1.85rem;
                  top: 0.1rem;
                }
              }
              &:nth-child(3) {
                font-size: 0.12rem;
                margin-left: 0.3rem;
                &::before {
                  position: absolute;
                  content: "";
                  width: 0.05rem;
                  height: 0.05rem;
                  border-radius: 50%;
                  background-color: #21ff6a;
                  right: 1.18rem;
                  top: 0.1rem;
                }
              }
              &:nth-child(4) {
                float: right;
                margin-left: 0.3rem;
                font-size: 0.12rem;
              }
            }
          }
        }
        .sixwen,
        .sixwu {
          transform: translate(-45px, 65px);
        }
      }
    }
  }

  #right {
    width: 22.22%;
    height: 100%;
    margin-left: 1.4%;
    .up {
      width: 4.14rem;
      height: 4.61rem;
      background: url("../../../static/images/g_youshang.png") no-repeat center
        center;
      .title {
        width: 3.72rem;
        height: 0.46rem;
        background-color: #071038;
        margin: 0 auto;
        color: #fff;
        line-height: 0.46rem;
        font-size: 0.16rem;
        padding-left: 0.34rem;
        .content {
          margin-left: 0.1rem;
          .danwei {
            font-size: 0.12rem;
          }
        }
      }
      .imgs {
        display: flex;
        justify-content: space-around;
        margin-top: 0.2rem;
        padding: 0 0.35rem;
        div {
          width: 0.84rem;
          height: 0.84rem;
          .text {
            color: #ffb70e;
            text-align: center;
            margin-top: 0.2rem;
            p {
              &:nth-child(1) {
                font-size: 0.18rem;
              }
              &:nth-child(2) {
                margin-top: -0.05rem;
                font-size: 0.12rem;
              }
            }
          }
        }
        .daydian {
          background: url("../../../static/images/g_ydhuang.png") no-repeat
            center center;
        }
        .dianxiang {
          background: url("../../../static/images/g_ydhuang.png") no-repeat
            center center;
        }
        .loudian {
          background: url("../../../static/images/g_ydhong.png") no-repeat
            center center;
          .text {
            color: #c23864;
          }
        }
      }
      .subtitle {
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding: 0 0.35rem;
        margin-top: 0.1rem;
        p {
          width: 84px;
        }
      }
      .biao {
        .mintitle {
          position: absolute;
          margin-top: 0.4rem;
          transform: translateX(-0.2rem);
          color: #fff;
          span {
            &:nth-child(1) {
              float: left;
              margin-left: 0.5rem;
              font-size: 0.14rem;
              transform: translateY(-0.2rem);
            }
            &:nth-child(2) {
              float: right;
              margin-left: 2.1rem;
              font-size: 0.12rem;
              &::before {
                position: absolute;
                content: "";
                width: 0.06rem;
                height: 0.06rem;
                border-radius: 50%;
                background-color: #fff;
                right: 0.68rem;
                top: 0.1rem;
              }
            }
          }
        }
        .sevendian {
          transform: translate(0.15rem, 0.55rem);
        }
      }
    }
    .down {
      margin-top: 0.3rem;
      width: 4.14rem;
      height: 4.6rem;
      background: url("../../../static/images/g_youxia.png") no-repeat center
        center;
      .title {
        width: 3.72rem;
        height: 0.46rem;
        background-color: #071038;
        margin: 0 auto;
        color: #fff;
        line-height: 0.46rem;
        font-size: 0.16rem;
        padding-left: 0.34rem;
        .content {
          margin-left: 0.1rem;
          .danwei {
            font-size: 0.12rem;
          }
        }
      }
      .one {
        color: #fff;
        .mintitle {
          position: absolute;
          margin-top: 0.3rem;
          transform: translateX(-0.2rem);
          color: #fff;
          span {
            &:nth-child(1) {
              float: left;
              margin-left: 0.5rem;
              font-size: 0.14rem;
              transform: translateY(-0.2rem);
            }
            &:nth-child(2) {
              float: right;
              transform: translateY(-0.05rem);
              margin-left: 2.1rem;
              font-size: 0.12rem;
              &::before {
                position: absolute;
                content: "";
                width: 0.06rem;
                height: 0.06rem;
                border-radius: 50%;
                background-color: #fff;
                right: 0.68rem;
                top: 0.1rem;
              }
            }
          }
        }
        .sevenworter {
          transform: translate(0.15rem, 0.35rem);
        }
      }
      .two {
        color: #fff;
        .mintitle {
          position: absolute;
          margin-top: 0.5rem;
          transform: translateX(-0.2rem);
          color: #fff;
          span {
            &:nth-child(1) {
              float: left;
              margin-left: 0.5rem;
              font-size: 0.14rem;
              transform: translateY(-0.2rem);
            }
            &:nth-child(2) {
              float: right;
              transform: translateY(-0.05rem);
              margin-left: 2.1rem;
              font-size: 0.12rem;
              &::before {
                position: absolute;
                content: "";
                width: 0.06rem;
                height: 0.06rem;
                border-radius: 50%;
                background-color: #fff;
                right: 0.68rem;
                top: 0.1rem;
              }
            }
          }
        }
        .sixworter {
          transform: translate(0.15rem, 0.6rem);
        }
      }
    }
  }
}
</style>
