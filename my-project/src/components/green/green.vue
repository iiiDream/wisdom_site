<template>
  <div id="content">
    <!-- 左边 -->
    <div id="left">
      <div class="leftTop">
        <div class="title">
          <h1>{{time}}</h1>
          <div v-for="(item,key,index) in weatherData" :key="index" v-if="key=='city'">{{item}}市天气预报</div>
        </div>
        <div class="content">
          <div class="one" v-for="(item,key,index) in weatherData" :key="index" v-if="key=='data'">
            <span>{{item[0].week}}</span>
            <!-- <span>{{item[0].week}}</span> -->
            <img v-if="item[0].wea.includes('云')" src="../../../static/images/g_duoyun.png">
            <img v-else-if="item[0].wea.includes('晴')" src="../../../static/images/g_qing.png">
            <img v-else-if="item[0].wea.includes('雪')" src="../../../static/images/g_xue.png">
            <img v-else-if="item[0].wea.includes('雨')" src="../../../static/images/g_dayv.png">
            <img v-else-if="item[0].wea.includes('阴')" src="../../../static/images/g_yin.png">
            <img v-else-if="item[0].wea.includes('雷')" src="../../../static/images/g_lei.png">
            <img v-else src="../../../static/images/g_wan.png">
            <div class="name">{{item[0].wea}}</div>
            <div class="wendu">{{item[0].tem}}~{{item[0].tem2}}</div>
            <div class="fengx">{{item[0].win[0]}}</div>
          </div>
          <div class="two">
            <div class="sub" v-for="(item, index) in weatherData.data" :key="index" v-if="index>0&&index<4">
              <span>{{item.week}}</span>
              <img v-if="item.wea.includes('云')" src="../../../static/images/g_duoyun.png">
              <img v-else-if="item.wea.includes('晴')" src="../../../static/images/g_qing.png">
              <img v-else-if="item.wea.includes('雪')" src="../../../static/images/g_xue.png">
              <img v-else-if="item.wea.includes('雨')" src="../../../static/images/g_dayv.png">
              <img v-else-if="item.wea.includes('阴')" src="../../../static/images/g_yin.png">
              <img v-else-if="item.wea.includes('雷')" src="../../../static/images/g_lei.png">
              <img v-else src="../../../static/images/g_wan.png">
              <div class="name">{{item.wea}}</div>
              <div class="wendu">{{item.tem1}}~{{item.tem2}}</div>
              <div class="fengx noml">{{item.win[0]}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="leftMain">
        <div class="yangchen">
          <h3>扬尘监测分析</h3>
          <div class="top">
            <div class="left">
              <img
                src="../../../static/images/g_lv.png"
                style="width:1.31rem;height:1.2rem"
              >
              <!-- <img
                v-else
                src="../../../static/images/g_hong.png"
                style="width:1.31rem;height:1.2rem"
              > -->
              <div>
                <p class="num" style="font-weight:bolder" v-for="(item,index) in dustEmissionCentreData.newData" :key="index">{{item.PM25}}</p>
                <!-- <p class="num" style="font-weight:bolder">45</p> -->
                ug/m3
              </div>
            </div>
            <div class="right" v-for="(item,key,index) in dustEmissionCentreData" :key="index" v-if="key=='pm25avg'">
              <div class="title">PM2.5</div>
              <div class="day">本日平均浓度：</div>
              <div v-if="item.day<75" class="daynum noml">{{item.day}}ug/m3</div>
              <div v-else class="daynum danger">{{item.day}}ug/m3</div>
              <div class="month">本月平均浓度：</div>
              <div v-if="item.month<75" class="monthnum noml">{{item.month}}ug/m3</div>
              <div v-else class="monthnum danger">{{item.month}}ug/m3</div>
            </div>
          </div>
          <div class="down">
            <div class="left">
              <img
                src="../../../static/images/g_lv.png"
                style="width:1.31rem;height:1.2rem"
              >
              <!-- <img
                v-else
                src="../../../static/images/g_hong.png"
                style="width:1.31rem;height:1.2rem"
              > -->
              <div>
                <p class="num" style="font-weight:bolder" v-for="(item,index) in dustEmissionCentreData.newData" :key="index">{{item.PM10}}</p>
                <!-- <p class="num" style="font-weight:bolder">45</p> -->
                ug/m3
              </div>
            </div>
            <div class="right" v-for="(item,key,index) in dustEmissionCentreData" :key="index" v-if="key=='pm10avg'">
              <div class="title">PM10</div>
              <div class="day">本日平均浓度：</div>
              <div v-if="item.day<75" class="daynum noml">{{item.day}}ug/m3</div>
              <div v-else class="daynum danger">{{item.day}}ug/m3</div>
              <div class="month">本月平均浓度：</div>
              <div v-if="item.month<75" class="monthnum noml">{{item.month}}ug/m3</div>
              <div v-else class="monthnum danger">{{item.month}}ug/m3</div>
            </div>
          </div>
        </div>
        <div class="noise">
          <h3>噪音</h3>
          <div class="title">
            <div class="subtitle">
              实时数据：
              <span class="num noml" v-for="(item,index) in dustEmissionCentreData.newData" :key="index">{{item.Noise}}dB</span>
              <!-- <span v-else class="num danger">{{manyInfo.zs}}dB</span> -->
            </div>
            <div class="mintitle">
              <span>最近12小时噪音</span>
              <span>单位：db</span>
            </div>
          </div>
          <div
            id="noisePic"
            style="width: 3.8rem;height:2.04rem;transfrom:translateY(0.3rem);"
            class="noisePic"
          ></div>
        </div>
      </div>
    </div>
    <!-- 中间 -->
    <div id="center">
      <div class="main">
        <h1>实时环境检测</h1>
        <div class="bgc" v-for="(item,index) in dustEmissionCentreData.newData" :key="index">
          <img
            v-if="item.PM25<50"
            src="../../../static/images/g_lvse.png"
            class="mainImg"
            style="width:2.74rem;height:2.74rem"
          >
          <img
            v-else-if="item.PM25<75"
            src="../../../static/images/g_huang.png"
            class="mainImg"
            style="width:2.74rem;height:2.74rem"
          >
          <img
            v-else-if="item.PM25<150"
            src="../../../static/images/g_qingdu.png"
            class="mainImg"
            style="width:2.74rem;height:2.74rem"
          >
          <img
            v-else-if="item.PM25<250"
            src="../../../static/images/g_zhongdu.png"
            class="mainImg"
            style="width:2.74rem;height:2.74rem"
          >
          <img
            v-else-if="item.PM25<300"
            src="../../../static/images/g_zdu.png"
            class="mainImg"
            style="width:2.74rem;height:2.74rem"
          >
          <img
            v-else
            src="../../../static/images/g_yanzhong.png"
            class="mainImg"
            style="width:2.74rem;height:2.74rem"
          >
        </div>
        <router-link to="/green/g_particulars" class="mianInfo">
            <div class="global" v-for="(item,index) in dustEmissionCentreData.newData" :key="index">
              <div class="title">PM2.5</div>
              <div class="num">{{item.PM25}}</div>
              <div class="yuan">
                <div v-if="item.PM25<50" class="bor" style="background-color: #24e974;">优</div>
                <div v-else-if="item.PM25<75" class="bor" style="background-color: #feb113;">良</div>
                <div v-else-if="item.PM25<150" class="bor" style="background-color: #f06743;">轻度污染</div>
                <div v-else-if="item.PM25<250" class="bor" style="background-color: #d0021b;">中度污染</div>
                <div v-else-if="item.PM25<300" class="bor" style="background-color: #6c00cc;">重度污染</div>
                <div v-else class="bor" style="background-color: #6d1e06;">严重污染</div>
              </div>
            </div>
        </router-link>
        <div class="leftInfo" v-for="(item,index) in dustEmissionCentreData.newData" :key="index+1">
          <div class="box">
            <img
              src="../../../static/images/g_qiwen.png"
              style="transform: translateX(.02rem);width:0.25rem;height:0.49rem"
            >
            <div class="text" style="transform: translate(.12rem);">
              <p style="font-weight: bold;">气温</p>
              <p class="info">{{item.Temperature}}℃</p>
            </div>
          </div>
          <div class="box">
            <img src="../../../static/images/g_wendu.png" style="width:0.45rem;height:0.48rem">
            <div class="text"  style="transform: translate(.17rem);">
              <p style="font-weight: bold;">湿度</p>
              <p class="info">{{item.Humidity}}%</p>
            </div>
          </div>
          <div class="box">
            <img src="../../../static/images/g_fengsu.png" style="width:0.48rem;height:0.48rem">
            <div class="text"  style="transform: translate(.2rem);">
              <p style="font-weight: bold;">风速</p>
              <p class="info">{{item.WindSpeed}}m/s</p>
            </div>
          </div>
        </div>
        <div class="fengche">
          <div class="big">
            <img
              src="../../../static/images/g_dafs.png"
              class="bigshang"
              style="width:0.98rem;height:1.05rem"
            >
            <img
              src="../../../static/images/g_dafx.png"
              class="bigxia"
              style="width:0.09rem;height:0.93rem"
            >
          </div>
          <div class="small">
            <img
              src="../../../static/images/g_xxfs.png"
              class="smallshang"
              style="width:0.66rem;height:.61rem"
            >
            <img
              src="../../../static/images/g_xxfx.png"
              class="smallxia"
              style="width:0.06rem;height:0.58rem"
            >
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
          <img src="../../../static/images/g_wenran.png" style="width:5.18rem;height:0.25rem">
        </div>
        <div class="downtable">
          <div class="left">
            <div class="mintitle">
              <span>最近6小时气温</span>
              <span>单位：℃</span>
            </div>
            <div
              id="sixwen"
              style="width: 4.43rem;height:2.44rem;transfrom:translateY(0.4rem);"
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
              style="width: 4.43rem;height:2.44rem;transfrom:translateY(0.4rem);"
              class="sixwu"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右边 -->
    <div id="right">
      <router-link to="/green/g_electricity" class="up">
        <h3>用电管理</h3>
        <div class="title">
          <span>
            <img src="../../../static/images/g_shandian.png">
          </span>
          <span class="content">
            电箱运行状态：
            <span :class="electricBoxData.sb=='正常'?'noml':'danger'">{{electricBoxData.sb}}</span>
            <!-- <span class="danwei">&nbsp;kw/h</span> -->
          </span>
        </div>
        <div class="imgs">
          <div :class="electricBoxData.kg==0?'loudian':'loudian1'">
            <div class="text">
              <p style="font-size:.2rem; line-height:.45rem">{{electricBoxData.kg==0?'关':'开'}}</p>
              <!-- <p>kwh</p> -->
            </div>
          </div>
          <div :class="electricBoxData.envirwarm<45?'loudian':'loudian1'">
            <div class="text">
              <p>{{electricBoxData.envirwarm}}</p>
              <p>℃</p>
            </div>
          </div>
          <div :class="electricBoxData.current<150?'loudian':'loudian1'">
            <div class="text">
              <p>{{electricBoxData.current}}</p>
              <p>kwh</p>
            </div>
          </div>
        </div>
        <div class="subtitle">
          <p :class="electricBoxData.kg==0?'huang':'danger'">箱门开关</p>
          <p :class="electricBoxData.envirwarm<45?'huang':'danger'">电箱温度</p>
          <p :class="electricBoxData.current<150?'huang':'danger'">电箱漏电</p>
          <!-- <p v-else class="danger">电箱漏电</p> -->
        </div>
        <div class="door-state">
          <div class="door-title">电箱开关</div>
          <div class="door-data" id="doorList">
            <ul id="doorList1">
              <li v-for="(item,index) in electricBoxData.kgjl" :key="index">
                <span>开门时间：{{item.opendoorTime}}</span>
                <span>关门时间：{{item.closelockTime}}</span>
                <span>状态：{{item.doorType==0?'关':'开'}}</span>
              </li>
            </ul>
            <ul id="doorList2"></ul>
          </div>
        </div>
      </router-link>
      <div class="down">
        <h3>用水管理</h3>
        <div class="title">
          <span>
            <img src="../../../static/images/g_shuidi.png">
          </span>
          <span class="content">
            本月用水
            <span>{{byys}}</span>
            <span class="danwei">&nbsp;m³</span>
          </span>
        </div>
        <div class="one">
          <div class="mintitle">
            <span>最近7天用水</span>
            <span>单位：m³</span>
          </div>
          <div id="sevenworter" style="width: 3.6rem;height:1.5rem;" class="sevenworter"></div>
        </div>
        <div class="two">
          <div class="mintitle">
            <span>最近6月用水</span>
            <span>单位：m³</span>
          </div>
          <div id="sixworter" style="width: 3.6rem;height:1.5rem;" class="sixworter"></div>
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
      weather: {},
      weatherInfo1: "",
      weatherInfo2: "",
      weatherInfo3: "",
      ortherWeather: [],
      manyInfo: {},
      pm25isA: "",
      pm10isA: "",
      zsisA: "",
      yongdianInfo: {},
      byys: "",
      byyd: "",
      pm25: "",
      pm10: "",
      pmyd25: "",
      pmyd10: "",
      xmid: "",
      pid: 0, // 项目id
      dustEmissionCentreData: "", // 扬尘监测器数据
      weatherData: "", // 天气数据
      dustPicMax: 60, // 污染度最大值
      noiseMax: 100, // 噪音最大值
      electricBoxData: "", // 电箱数据
    };
  },
  created() {
    this.getPid()
    // this.getWeather(),
    // this.getdatays(),
    // this.gethourData(),
    // this.getManyInfo(),
    this.getDustEmissionCentreData()
    this.getWeatherData()
    // this.scrollStart('doorList','doorList1','doorList2')
    this.getElectricBoxData()
  },
  mounted() {
    this.getTime()
    this.sevenworter()
    this.sixworter()
  },
  methods: {
    //   噪音图形
    noisePic(zsH, zsV) {
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
            max: this.noiseMax,
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
    temperaturePic(wdH, wdV) {
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
            max: 45,
            min: -30,
            interval: 15,
            axisLabel: {
              textStyle: {
                color: "#fff"
              },
              formatter: "{value}℃"
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
    dustPic(pmH, pm2, pm10) {
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
            max: this.dustPicMax,
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
            color: ["#24e974"],
            // data: [19, 9, 16, 24, 40, 15]
            data: pm10
          }
        ]
      });
    },
    // 七天用电图形
    sevendian(sevendianH, sevendianV) {
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
    sevenworter(sevenshuiH, sevenshuiV) {
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
            data: ["04-01", "04-02", "04-03", "04-04", "04-05",  "04-06","04-07"]
            // data: sevenshuiH
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
            data: [67, 124, 126, 134, 90, 85, 70]
            // data: sevenshuiV
          }
        ]
      });
    },
    // 六月用水图形
    sixworter(sixshuiH, sixshuiV) {
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
            data: ["11月", "12月", "1月", "2月", "3月", "4月"],
            // data: sixshuiH
            // formatter: "{value}月"
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
            data: [67, 124, 126, 134, 90, 85]
            // data: sixshuiV
          }
        ]
      });
    },
    // 天气接口
    getWeather() {
      this.xmid = this.getQueryString("xmid");
            this.$axios
        .get(`/APP/XMPage/XmData.ashx?method=XMData&xmid=${this.xmid}`)
        .then(res => {
          if(res.data.success == 1){
            this.$router.push('unopen')
          }else{
            this.weather = res.data.weather[0].results[0];
            this.weatherInfo1 =
              res.data.weather[0].results[0].weather_data[0].weather;
            this.weatherInfo2 =
              res.data.weather[0].results[0].weather_data[0].wind;
            this.weatherInfo3 =
              res.data.weather[0].results[0].weather_data[0].temperature;
            let orther = res.data.weather[0].results[0].weather_data;
            this.ortherWeather = orther.splice(1);
          }
        });

      setInterval(() => {
              this.$axios
        .get(`/APP/XMPage/XmData.ashx?method=XMData&xmid=${this.xmid}`)
        .then(res => {
          if(res.data.success == 1){
            this.$router.push('unopen')
          }else{
            this.weather = res.data.weather[0].results[0];
            this.weatherInfo1 =
              res.data.weather[0].results[0].weather_data[0].weather;
            this.weatherInfo2 =
              res.data.weather[0].results[0].weather_data[0].wind;
            this.weatherInfo3 =
              res.data.weather[0].results[0].weather_data[0].temperature;
            let orther = res.data.weather[0].results[0].weather_data;
            this.ortherWeather = orther.splice(1);
          }
        });

      }, 60000);
    },
    // 4小时刷新表数据
    getdatays() {
      this.xmid = this.getQueryString("xmid");
      this.$axios
        .get(
          `/APP/XMPage/EnvData.ashx?method=GetXMDaysRealData&xmid=${this.xmid}`
        )
        .then(res => {
          if(res.data.success == 1){
            this.$router.push('unopen')
          }else{
            this.byys = res.data.byys;
            this.byyd = res.data.byyd;

            let sevendianH = [];
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
              sixshuiH.push(res.data.data_yd1[i].dayhour);
              sixshuiV.push(res.data.data_yd1[i].value);
            }
            // this.sevendian(sevendianH, sevendianV);
            // this.sevenworter(sevendianH, sevendianV);
            // this.sixworter(sixshuiH, sixshuiV);
          }
        });
    },
    // 1小时刷新表数据
    gethourData() {
      this.xmid = this.getQueryString("xmid");
      this.$axios
        .get(
          `/APP/XMPage/EnvData.ashx?method=GetEnvHoursData&xmid=${this.xmid}`
        )
        .then(res => {
          if(res.data.success == 1){
            this.$router.push('unopen')
          }else{
            this.pm25 = res.data.pm25;
            this.pm10 = res.data.pm10;
            this.pmyd25 = res.data.pmyd25;
            this.pmyd10 = res.data.pmyd10;

            let pmH = [];
            let pm2 = [];
            let pm10 = [];
            for (let i = 0; i < res.data.data_pm.length; i++) {
              pmH.push(res.data.data_pm[i].dayhour);
              pm2.push(res.data.data_pm[i].pm2);
              pm10.push(res.data.data_pm[i].pm10);
            }
            // this.sixwu(pmH, pm2, pm10);

            let wdH = [];
            let wdV = [];
            for (let i = 0; i < res.data.data_wd.length; i++) {
              wdH.push(res.data.data_wd[i].dayhour);
              wdV.push(res.data.data_wd[i].value);
            }
            // this.sixwen(wdH, wdV);

            let zsH = [];
            let zsV = [];
            for (let i = 0; i < res.data.data_zs.length; i++) {
              zsH.push(res.data.data_zs[i].dayhour);
              zsV.push(res.data.data_zs[i].value);
            }
            // this.noisePic(zsH, zsV);
          }
        });
      setInterval(() => {
        this.$axios
          .get(`/APP/XMPage/EnvData.ashx?method=GetEnvHoursData&xmid=${this.xmid}`)
          .then(res => {
            this.pm25 = res.data.pm25;
            this.pm10 = res.data.pm10;
            this.pmyd25 = res.data.pmyd25;
            this.pmyd10 = res.data.pmyd10;

            let pmH = [];
            let pm2 = [];
            let pm10 = [];
            for (let i = 0; i < res.data.data_pm.length; i++) {
              pmH.push(res.data.data_pm[i].dayhour);
              pm2.push(res.data.data_pm[i].pm2);
              pm10.push(res.data.data_pm[i].pm10);
            }
            this.sixwu(pmH, pm2, pm10);

            let wdH = [];
            let wdV = [];
            for (let i = 0; i < res.data.data_wd.length; i++) {
              wdH.push(res.data.data_wd[i].dayhour);
              wdV.push(res.data.data_wd[i].value);
            }
            this.sixwen(wdH, wdV);

            let zsH = [];
            let zsV = [];
            for (let i = 0; i < res.data.data_zs.length; i++) {
              zsH.push(res.data.data_zs[i].dayhour);
              zsV.push(res.data.data_zs[i].value);
            }
            this.noisePic(zsH, zsV);
          });
      }, 3600000);
    },
    // 其他数据
    getManyInfo() {
      this.xmid = this.getQueryString("xmid");
      setInterval(() => {
      this.$axios
        .get(`/APP/XMPage/EnvData.ashx?method=GetEnvRealData&xmid=${this.xmid}`)
        .then(res => {
          if(res.data.success == 1){
            this.$router.push('unopen')
          }else{
            this.manyInfo = res.data.EnvRealData[0];
            this.pm25isA = this.manyInfo.pm25IsA;
            this.pm10isA = this.manyInfo.pm10IsA;
            this.zsisA = this.manyInfo.zsIsA;
            this.yongdianInfo = res.data.YDRealData[0];
          }
        });
      }, 1000);
    },

    // 获取url中的项目id
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    },

    // 获取扬尘监测数据
    getDustEmissionCentreData() {
      this.$axios.get(`/dustEmission/get/HomeDustEmissionCentre?pid=${this.pid}`).then(
        res => {
          // console.log(res.data)
          this.dustEmissionCentreData = res.data
          let zsH = []
          let zsV = []
          let wdH = []
          let wdV = []
          let pmH = []
          let pm2 = []
          let pm10 = []
          for (let i = this.dustEmissionCentreData.ZY.length-1; i >= 0; i--) {
            zsH.push(this.dustEmissionCentreData.ZY[i].time)
            zsV.push(this.dustEmissionCentreData.ZY[i].Noise)
          }
          for (let i = this.dustEmissionCentreData.QW.length-1; i >= 0; i--) {
            wdH.push(this.dustEmissionCentreData.QW[i].time)
            wdV.push(this.dustEmissionCentreData.QW[i].temperature)
          }
          for (let i = this.dustEmissionCentreData.PM.length-1; i >= 0 ; i--) {
            pmH.push(this.dustEmissionCentreData.PM[i].time)
            pm2.push(this.dustEmissionCentreData.PM[i].PM25)
            pm10.push(this.dustEmissionCentreData.PM[i].PM10)
          }
          // 判断污染度y轴的最大值
          for (let i = 0; i < pm2.length; i++) {
            for (let i2 = 0; i2 < pm2.length; i2++) {
              if (pm2[i]>this.dustPicMax || pm10[i]>this.dustPicMax) {
                this.dustPicMax += 10
              }
            }
          }
          // 判断噪音y轴最大值
          for (let i = 0; i < zsV.length; i++) {
            for (let i2 = 0; i2 < zsV.length; i2++) {
              if (zsV[i]>this.noiseMax || zsV[i]>this.noiseMax) {
                this.noiseMax += 20
              }
            }
          }


          this.noisePic(zsH, zsV)
          this.temperaturePic(wdH, wdV)
          this.dustPic(pmH, pm2, pm10)
        }
      )
    },

    // 获取天气监测数据
    getWeatherData() {
      this.$axios.get(`/lz/get/getWeather?pid=${this.pid}`).then(
        res => {
          // console.log(res.data)
          this.weatherData = res.data
          // console.log(this.weatherData)
        }
      )
    },

    // 获取电箱设备
    getElectricBoxData() {
      this.$axios.get(`/electricityBox/get/getElectricBoxState?pid=${this.pid}`).then(
        res => {
          console.log(res.data)
          this.electricBoxData = res.data

          // 开关记录多于4条时 开启滚动
          if (res.data.kgjl.length >= 4) {
            this.scrollStart('doorList','doorList1','doorList2')
          }
        }
      )
    },

    // 滚动启动函数
    scrollStart(id,id1,id2) {
        setTimeout(() => {
            var speed = 45;
            var colee2 = document.getElementById(id2);
            var colee1 = document.getElementById(id1);
            var colee = document.getElementById(id);
            colee2.innerHTML = colee1.innerHTML; //克隆colee1为colee2
            function Marquee1() {
                // console.log(colee1.offsetHeight)
                //当滚动至colee1与colee2交界时
                if (colee2.offsetTop - colee.scrollTop <= 0) {
                    colee.scrollTop -= colee1.offsetHeight; //colee跳到最顶端
                } else {
                    colee.scrollTop++;
                    if (colee.scrollTop == colee1.offsetHeight) {
                        colee.scrollTop = 0;
                    }
                }
            }   
            var MyMar1 = setInterval(Marquee1, speed); //设置定时器
            //鼠标移上时清除定时器达到滚动停止的目的
            colee.onmouseover = function() {
                clearInterval(MyMar1);
            }
            //鼠标移开时重设定时器
            colee.onmouseout = function() {
                MyMar1 = setInterval(Marquee1, speed);
            }
        }, 1000);
    },

    // 获取项目id
    getPid() {
      this.pid = localStorage.getItem('pid')
    }
  }
};
</script>
<style lang='less' scoped>
.danger {
  color: #fb497c !important;
}
.noml {
  color: #24e974 !important;
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
  // background-image: url('./2.5.png');
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
      background-size: 100% 100%;
      padding: 0.2rem;
      padding: 0.15rem 0.2rem 0.18rem 0.11rem;
      .title {
        display: flex;
        color: #fff;
        justify-content: space-between;
        h1 {
          font-size: 0.3rem;
          margin-left: 0.14rem;
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
            font-size: 0.12rem;
            margin-left: 0.1rem;
          }
          img {
            margin-left: 0.25rem;
            width: 0.54rem;
            height: 0.54rem;
            display: block;
            padding: 0.05rem;
          }
          .wendu {
            margin: 0;
            transform: translateY(-0.05rem);
          }
          .fengx {
            margin-top: -0.05rem;
            margin-left: 0.2rem;
            background-color: #3ee19a;
            width: 0.7rem;
            height: 0.2rem;
            border-radius: 0.05rem;
            text-align: center;
            line-height: 0.2rem;
            overflow: hidden;
          }
        }
        .two {
          text-align: center;
          transform: translateX(0.14rem);
          display: flex;
          margin-left: 0.6rem;
          font-size: 0.12rem;
          .sub {
            width: 0.8rem;
            margin-left: 0.1rem;
            img {
              margin-left: 0.13rem;
              width: 0.54rem;
              height: 0.54rem;
              display: block;
              padding: 0.05rem;
            }
            .wendu {
              margin: 0;
              transform: translateY(-0.05rem);
            }
            .fengx {
              margin-top: -0.05rem;
              margin-left: 0.15rem;
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
      background-size: 100% 100%;
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
              text-align: center;
              margin-left: 12px;
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
      background-size: 100% 100%;
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
      .bgc {
        width: 4rem;
        height: 4rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0.9rem;
        background: url("../../../static/images/g_hc.gif") no-repeat center
          center;
        background-size: 100% 100%;
        .mainImg {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0.66rem;
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
              color: #fff;
              width: 100%;
              height: 100%;
              background-color: #24e974;
              border-radius: 0.2rem;
              text-align: center;
              line-height: 0.3rem;
              font-size: 0.18rem;
              font-weight: 600;
            }
          }
        }
      }
      .leftInfo {
        position: absolute;
        right: 0.64rem;
        top: 1.4rem;
        width: 1.6rem;
        .box {
          margin-top: 0.4rem;
          display: flex;
          justify-content: space-between;
          // text-align: center;
          img {
            transform: translateX(-0.1rem);
          }
          .text {
            font-size: 0.22rem;
            text-align: left;
            margin-left: 0.02rem;
            width: .8rem;
            .info {
              text-align: left;
              transform: translateY(0.06rem);
              font-size: 0.2rem;
            }
          }
        }
      }
      .fengche {
        position: absolute;
        bottom: 5.5rem;
        left: 0.7rem;
        .big {
          .bigshang {
            transform: rotate(-88deg);
            margin-top: 0.06rem;
          }
          .bigxia {
            position: absolute;
            left: 0.42rem;
            top: 0.74rem;
          }
        }
        .small {
          .smallshang {
            position: absolute;
            left: 0.66rem;
            top: 0.68rem;
          }
          .smallxia {
            position: absolute;
            left: 0.94rem;
            top: 1.09rem;
          }
        }
      }
      .bottonInfo {
        position: absolute;
        bottom: 3.8rem;
        left: 50%;
        transform: translateX(-50%);
        ul {
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
                  background-color: #24e974;
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
          transform: translate(-0.45rem, 0.65rem);
        }
      }
    }
  }

  #right {
    width: 22.22%;
    height: 100%;
    margin-left: 1.4%;
    .up {
      display: block;
      width: 4.14rem;
      height: 4.61rem;
      background: url("../../../static/images/g_youshang.png") no-repeat center
        center;
      background-size: 100% 100%;
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
          background-size: 100% 100%;
        }
        .dianxiang {
          background: url("../../../static/images/g_ydhuang.png") no-repeat
            center center;
          background-size: 100% 100%;
        }
        .loudian {
          background: url("../../../static/images/g_ydhuang.png") no-repeat
            center center;
          background-size: 100% 100%;
          .text {
            color: #ffb70e;
          }
        }
        .loudian1 {
          background: url("../../../static/images/g_ydhong.png") no-repeat
            center center;
          background-size: 100% 100%;
          .text {
            color: #fb497c;
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
          width: 0.84rem;
        }
      }
      .door-state {
        width: 3.44rem;
        color: #fff;
        margin: 0 auto;
        margin-top: .2rem;
        .door-title {
          font-size: .14rem;
          line-height: .29rem;
        }
        .door-data {
          height: 1.4rem;
          overflow: hidden;
          margin-top: .1rem;
          ul {
            li {
              display: flex;
              justify-content: space-between;
              line-height: .35rem;
            }
          }
        }
      }
    }
    .down {
      margin-top: 0.3rem;
      width: 4.14rem;
      height: 4.6rem;
      background: url("../../../static/images/g_youxia.png") no-repeat center
        center;
      background-size: 100% 100%;
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
