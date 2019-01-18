<template>
  <div class="content">
    <el-row class="wrap-main clearfix container">
      <el-col :span="14" class="wrap-left">
        <div class="top-show">
          <h3>工人上工情况</h3>
          <div class="jindu">
            <div class="subjindu">
              <p>{{dh}}%</p>
            </div>
          </div>
          <ul class="work-list clearfix">
            <li>
              今日
              <span v-if="manWork.the_day<manWork.tom_day" class="noml">{{manWork.the_day}} ↑</span>
              <span v-else class="danger">{{manWork.the_day}} ↓</span>
            </li>
            <li>
              昨日
              <span>{{manWork.tmo_day}}</span>
            </li>
            <li>
              本月
              <span class="down">{{manWork.the_month}}</span>
            </li>
            <li>
              今日
              <span>{{manWork.tmo_month}}</span>
            </li>
          </ul>
        </div>
        <div class="summarize">
          <h3>工程概括</h3>
          <div id="colee" style="overflow:hidden;height:5.03rem;width:4.1rem;">
            <ul id="colee1">
              <li v-for="(item, index) in summary.data" :key="index" :class="item.id">
                <a href="javascript:;">
                  <span class="summarizeName">{{item.type}}</span>
                  <span class="summarizeContent">{{item.name}}</span>
                </a>
              </li>
            </ul>
            <ul id="colee2"></ul>
          </div>
        </div>
        <div class="plate">
          <h3>车牌识别系统</h3>
          <div class="out_in">
            <div class="left">
              <span>今日进出：</span>
              <span>{{cardid.car_num}}辆</span>
            </div>
            <div class="right">
              <span>运行情况：</span>
              <span v-if="cardid.status=='0'" class="status noml">正常</span>
              <span v-else class="status danger">异常</span>
            </div>
          </div>
          <div class="case">
            <div class="left">进出情况</div>
            <div class="right" id="cardid" style="overflow:hidden;height:1.04rem;width:4.1rem;">
              <ul id="cardid1">
                <li v-for="(item, index) in cardid.cars" :key="index">
                  <span>{{item.name}}</span>
                  <span>{{item.inout}}</span>
                  <span>{{item.time}}</span>
                  <span>{{item.cartype}}</span>
                </li>
              </ul>
              <ul id="cardid2"></ul>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6" class="wrap-center">
        <div class="mainInfo">
          <span class="title">
            安全文明施工天数:
            <span class="day">{{centerInfo.global_day}}</span>天
          </span>
        </div>
        <div class="videoInfo">
          <el-carousel trigger="click" height="6.14rem">
            <el-carousel-item v-for="(item,index) in centerInfo.pics" :key="index">
              <img :src="`http://gd.17hr.net:8018/`+item.url">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="bottomInfo">
          <div class="left">
            <h3>塔吊防碰撞系统</h3>
            <ul>
              <li>
                <span class="leftName">塔吊数量：</span>
                <span class="sub">{{crash.tower_num}}座</span>
              </li>
              <li>
                <span class="leftName">违规操作：</span>
                <span v-if="crash.err=='0'" class="sub status noml">无</span>
                <span v-else class="sub status danger">有</span>
              </li>
              <li>
                <span class="leftName">运行情况：</span>
                <span v-if="crash.status=='0'" class="sub noml">正常</span>
                <span v-else class="sub danger">异常</span>
              </li>
            </ul>
            <div class="outer">
              <div class="line"></div>
              <div class="dian"></div>
            </div>
          </div>
          <div class="right">
            <h3>升降机系统</h3>
            <ul>
              <li>
                <span class="leftName">升降机数量：</span>
                <span class="sub">{{lift.lifter_num}}座</span>
              </li>
              <li>
                <span class="leftName">载重重量：</span>
                <span class="sub danger">{{lift.weight}}吨</span>
              </li>
              <li>
                <span class="leftName">运行情况：</span>
                <span v-if="lift.status=='0'" class="sub noml">正常</span>
                <span v-else class="sub danger">异常</span>
              </li>
            </ul>
            <div class="runtime">
              <div>已正常运行</div>
              <img src="../../../static/images/shizhong.png" alt>
              <div class="noml runtimeBg">{{lift.time}}小时</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6" class="wrap-right">
        <div class="code">
          <h3>下载APP</h3>
          <div class="left">
            <img src="../../../static/images/hj.png">
          </div>
          <div class="right">
            <p>APP下载</p>
            <p>扫描二维码下载</p>
          </div>
        </div>
        <div class="ech">
          <h3>扬尘检测</h3>
          <div class="status">
            <span class="good">0~75 良好</span>
            <span class="notgood">＞75 超标</span>
          </div>
          <div id="dust" :style="{width: '360px', height: '205px'}" class="dust"></div>
          <div class="temperaturebox">
            <h3 style="margin-bottom:.1rem">温度检测</h3>
            <div
              id="temperature"
              style="width: 380px;height:204px;transform: translateY(-0.18rem)"
              class="temperature"
            ></div>
          </div>
        </div>
        <div class="electro">
          <h3>用电检测</h3>
          <ul>
            <li>
              <span class="leftName">电箱数量：</span>
              <span class="sub">{{electricity.electricity_num}}座</span>
            </li>
            <li>
              <span class="leftName">电箱温度：</span>
              <span class="sub danger">{{electricity.electricity_t}}℃</span>
            </li>
            <li>
              <span class="leftName">运行情况：</span>
              <span v-if="electricity.status=='0'" class="sub noml">正常</span>
              <span v-else class="sub danger">异常</span>
            </li>
          </ul>
          <div class="runtime">
            <div>已正常运行</div>
            <img src="../../../static/images/shizhong.png" alt>
            <div class="noml runtimeBg">{{electricity.time}}小时</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      percentage: 70,
      baifenbi: 70,
      dh: 0,
      timeId: null,
      gundongId: null,
      // 工人上工
      manWork: {},
      // 工人概括
      summary: {},
      // 车牌识别
      cardid: {},
      // 塔吊防碰撞
      crash: {},
      // 升降机
      lift: {},
      // 轮播图
      centerInfo: {},
      // 用电
      electricity:{}
    };
  },
  mounted() {
    this.dust();
    this.temperature();
  },
  created() {
    this.getSummary(),
      this.renderBaifenbi(),
      this.getCardid(),
      this.getCrash(),
      this.getLift(),
      this.getCenterInfo(),
      this.getyongdian();
  },
  methods: {
    dust() {
      this.$axios.get('/APP/XMPage/XmData.ashx?method=EnvData&xmid=281').then(res=>{
        let data =res.data.data;
        let hours = [];
        let values= [];
        for (let i = 0; i < data.length; i++) {
          hours.push(data[i].dayhour);
          values.push(data[i].value);
        }
              let mydust = this.$echarts.init(document.getElementById("dust"));
      mydust.setOption({
        title: { text: "" },
        grid: {
          x: 70,
          y: 0,
          x2: 14,
          y2: 20
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          max: 200, //最大值
          min: 0, //最小值
          interval: 25, //间隔
          //字体样式
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          //坐标轴样式
          axisLine: {
            lineStyle: {
              color: "#132e6d",
              width: 2
            }
          },
          //网格样式
          splitLine: {
            show: true,
            lineStyle: {
              color: "#132e6d",
              width: 1
            }
          }
        },
        orient: "horizontal",
        yAxis: {
          data:hours,
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#132e6d",
              width: 2
            }
          },
          //网格样式
          splitLine: {
            show: true,
            lineStyle: {
              color: "#132e6d",
              width: 0
            }
          }
        },
        series: [
          {
            type: "bar",
            barWidth: 10, //柱状图宽度
            data: values,
            //柱状图颜色
            itemStyle: {
              normal: {
                //判断
                color: function(params) {
                  if (params.value >= 75) {
                    return "#c23864";
                  } else {
                    return "#0162ff";
                  }
                }
                //渐变
                // color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                //       offset: 0,
                //       color: "#0162ff" // 0% 处的颜色
                //     }, {
                //       offset: 1,
                //       color: "#00a7fe" // 100% 处的颜色
                // }], false)
              }
            }
          }
        ]
      });

      })
      // 基于准备好的dom，初始化echarts实例
    },
    temperature() {
      this.$axios.get('/APP/XMPage/XmData.ashx?method=EnvTemData&xmid=281').then(res=>{
        let data =res.data.data;
        let hours = [];
        let values= [];
        for (let i = 0; i < data.length; i++) {
          hours.push(data[i].dayhour);
          values.push(data[i].value);
        }
        hours.push("h")
        let mytemperature = this.$echarts.init(
        document.getElementById("temperature")
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
            data:hours
          }
        ],
        yAxis: [
          {
            type: "value",
            max: 45,
            min: -15,
            interval: 15,
            axisLabel: {
              textStyle: {
                color: "#fff"
              },
              formatter: "{value} 度"
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
            name: "温度",
            type: "line",
            symbolSize: 3,
            smooth: 0.2,
            color: ["#f98d98"],
            data:values
          }
        ]
      });

      })

    },
    // 工人上工区域
    renderBaifenbi() {
      this.$axios
        .get(`/APP/XMPage/XmData.ashx?method=GetXMKq&xmid=281`)
        .then(res => {
          this.manWork = res.data;
          this.timeId = setInterval(() => {
            if (this.dh == this.baifenbi) {
              clearInterval(this.timeId);
            } else {
              this.dh++;
              $(".subjindu").css("width", this.dh + "%");
            }
          }, 30);
        });
    },
    // 工程概括区域
    getSummary() {
      this.$axios
        .get(`/APP/XMPage/XmData.ashx?method=GetXMDetail&xmid=281`)
        .then(res => {
          this.summary = res.data;
          if (this.summary.data.length >= 10) {
            // 调用滚动方法
            this.scrollText();
          }
        });
    },
    // 车牌识别
    getCardid() {
      this.$axios
        .get(`/APP/XMPage/XmData.ashx?method=PkData&xmid=281`)
        .then(res => {
          this.cardid = res.data;
          if(this.cardid.cars.length>=5){
            this.cardScroll()
          }
        });
    },
    // 塔吊防碰撞
    getCrash() {
      this.$axios
        .get(`/APP/XMPage/XmData.ashx?method=TowerData&xmid=281`)
        .then(res => {
          this.crash = res.data;
        });
    },
    // 升降机
    getLift() {
      this.$axios
        .get(`/APP/XMPage/XmData.ashx?method=LifterData&xmid=281`)
        .then(res => {
          this.lift = res.data;
        });
    },
    // 中间主图
    getCenterInfo() {
      this.$axios
        .get("/APP/XMPage/XmData.ashx?method=XMData&xmid=281")
        .then(res => {
          this.centerInfo = res.data;
        });
    },
    scrollText() {
      setTimeout(() => {
        var speed = 40;
        var colee2 = document.getElementById("colee2");
        var colee1 = document.getElementById("colee1");
        var colee = document.getElementById("colee");
        colee2.innerHTML = colee1.innerHTML; //克隆colee1为colee2

        function Marquee1() {
          //当滚动至colee1与colee2交界时
          if (colee2.offsetTop - colee.scrollTop <= 0) {
            colee.scrollTop -= colee1.offsetHeight; //colee跳到最顶端
          } else {
            // console.log(111111);
            colee.scrollTop++;

            if (colee.scrollTop == 829) {
              colee.scrollTop = 170;
            }
          }
        }
        var MyMar1 = setInterval(Marquee1, speed); //设置定时器
        //鼠标移上时清除定时器达到滚动停止的目的
        colee.onmouseover = function() {
          clearInterval(MyMar1);
        };
        //鼠标移开时重设定时器
        colee.onmouseout = function() {
          MyMar1 = setInterval(Marquee1, speed);
        };
      }, 1000);
    },
    // 来自jq22的插件初始化
    cardScroll() {
      setTimeout(() => {
        var speed = 45;
        var colee2 = document.getElementById("cardid2");
        var colee1 = document.getElementById("cardid1");
        var colee = document.getElementById("cardid");
        colee2.innerHTML = colee1.innerHTML; //克隆colee1为colee2
        function Marquee1() {
          //当滚动至colee1与colee2交界时
          if (colee2.offsetTop - colee.scrollTop <= 0) {
            colee.scrollTop -= colee1.offsetHeight; //colee跳到最顶端
          } else {
            colee.scrollTop++;
            if (colee.scrollTop == 104) {
              colee.scrollTop = 0;
            }
          }
        }
        var MyMar1 = setInterval(Marquee1, speed); //设置定时器
        //鼠标移上时清除定时器达到滚动停止的目的
        colee.onmouseover = function() {
          clearInterval(MyMar1);
        };
        //鼠标移开时重设定时器
        colee.onmouseout = function() {
          MyMar1 = setInterval(Marquee1, speed);
        };
      }, 1000);
    },
    getyongdian() {                           
      this.$axios
        .get("/APP/XMPage/XmData.ashx?method=ElectricityData&xmid=281")
        .then(res => {
          this.electricity = res.data;
      });
    }
  }
};
</script>
<style lang='less' scoped>
.content {
  padding-top: 0.5rem;
  height: 10.3rem;
  overflow: hidden;
  .wrap-main {
    display: flex;
  }
}
.wrap-left {
  width: 22.22%;
}
.wrap-center {
  flex: 1;
  // width: 52.36%;
  margin-left: 1.4%;
  .mainInfo {
    margin-top: 0.02rem;
    // width: 9.73rem;
    width: 100%;
    height: 0.83rem;
    background: url("../../../static/images/c_top.png") no-repeat center center;
    background-size: 100% 100%;
    color: #fff;
    text-align: center;
    line-height: 0.83rem;
    .title {
      font-size: 0.26rem;
      font-weight: 600;
    }
    .day {
      font-size: 0.5rem;
      line-height: 0.83rem;
      font-family: "YJZT";
      margin: 0 0.1rem;
      font-weight: normal;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .videoInfo {
    margin-top: 0.3rem;
    width: 100%;
    height: 6.14rem;
    background: url("../../../static/images/c_1.png") no-repeat center center;
    background-size: 100% 100%;
    img {
      height: 6.14rem;
      width: 100%;
    }
  }
  .bottomInfo {
    margin-top: 0.3rem;
    width: 100%;
    display: flex;
    .left {
      float: left;
      width: 49%;
      height: 1.94rem;
      background: url("../../../static/images/cd_1.png") no-repeat center center;
      background-size: 100% 100%;
      .outer {
        float: right;
        position: relative;
        transform: translateY(-1.52rem);
        margin-right: 0.45rem;
        width: 1.62rem;
        height: 1.62rem;
        border-radius: 50%;
        border: 0.01rem solid #8c8d9a;
        box-shadow: #8c8d9a 0px 0px 0.18rem 0px inset;
        .line {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0.01rem;
          height: 0.8rem;
          background-color: #b7b8c7;
          animation: xuanzhuan 10s linear infinite;
          transform-origin: 0 0;
        }
        .dian {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0.08rem;
          height: 0.08rem;
          background-color: #fff;
          border-radius: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      }
    }
    .right {
      float: right;
      width: 49%;
      height: 1.94rem;
      background: url("../../../static/images/cd_2.png") no-repeat center center;
      background-size: 100% 100%;
      margin-left: 0.15rem;
      .runtime {
        float: right;
        font-size: 0.22rem;
        color: #fff;
        transform: translateX(-1rem) translateY(-1.3rem);
        text-align: center;
        img {
          transform: translateY(.09rem);
          width: .83rem;
          height: .83rem;
        }
        .runtimeBg {
          position: absolute;
          top: 60%;
          margin-left: .14rem;
        }
      }
    }
    ul {
      padding-left: 0.15rem;
      li {
        color: #fff;
        font-size: 0.18rem;
        line-height: 0.4rem;
        .sub {
          margin-left: 0.05rem;
        }
      }
    }
  }
}
.a{
  
}
@-webkit-keyframes xuanzhuan {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.wrap-right {
  width: 22.22%;
  margin-left: 1.4%;
  .code {
    margin-top: 0.02rem;
    width: 4.14rem;
    height: 1.96rem;
    background: url("../../../static/images/r_2.png") no-repeat center center;
    .left {
      float: left;
      padding: 0 0.4rem;
      img {
        width: 1rem;
        height: 1rem;
      }
    }
    .right {
      color: #fff;
      font-size: 0.2rem;
      line-height: 0.45rem;
    }
  }
  .ech {
    margin-top: 0.3rem;
    width: 4.14rem;
    height: 5.01rem;
    background: url("../../../static/images/r_1.png") no-repeat center center;
    .status {
      position: relative;
      top: -0.34rem;
      left: 1.87rem;
      .good {
        color: #0163ff;
        margin-left: 0.15rem;
        &::before {
          content: "";
          position: absolute;
          left: -0.07rem;
          top: 0.05rem;
          width: 0.18rem;
          height: 0.12rem;
          background-color: #0163ff;
          border-radius: 0.05rem;
        }
      }
      .notgood {
        color: #c23864;
        margin-left: 0.35rem;
        &::before {
          content: "";
          position: absolute;
          left: 1rem;
          top: 0.06rem;
          width: 0.18rem;
          height: 0.12rem;
          background-color: #c23864;
          border-radius: 0.05rem;
        }
      }
    }
    .dust {
      transform: translateY(-0.24rem);
    }
  }
  .electro {
    margin-top: 0.3rem;
    width: 4.14rem;
    height: 1.94rem;
    background: url("../../../static/images/down_2.png") no-repeat center center;
    .runtime {
      float: right;
      font-size: 0.22rem;
      color: #fff;
      transform: translateX(-1rem) translateY(-1.3rem);
      text-align: center;
      img {
        transform: translateY(.09rem);
        width: .83rem;  
        height: .83rem;
      }
      .runtimeBg {
        position: absolute;
        top: 60%;
        margin-left: .14rem;
      }
    }
  }
  ul {
    padding-left: 0.15rem;
    li {
      color: #fff;
      font-size: 0.18rem;
      line-height: 0.4rem;
      .sub {
        margin-left: 0.05rem;
      }
    }
  }
  .temperaturebox {
    transform: translateY(-0.2rem);
    z-index: 1;
  }
}
.danger {
  color: #c23864 !important;
}
.noml {
  color: #21ff6a !important;
}
.wrap-left .top-show {
  height: 1.96rem;
  background: url("../../../static/images/slidTop.png") no-repeat center center;
  background-size: 100% 100%;
  .jindu {
    position: relative;
    // background-color: #fff;
    width: 2.2rem;
    height: 0.24rem;
    left: 43.5%;
    top: -26%;
    .subjindu {
      position: absolute;
      left: 0%;
      top: 15.6%;
      height: 0.24rem;
      width: 0%;
      background: linear-gradient(to right, #0163ff, #00adfe);
      transform: skew(13deg);
    }
    p {
      margin-left: 105%;
      color: #ffffff;
      font-size: 0.12rem;
      transform: skew(-13deg);
    }
  }
}

.work-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: 0.12rem;
  transform: translateY(-18%);
  li {
    width: 50%;
    height: 50%;
    font-size: 0.18rem;
    color: #6e8994;
    line-height: 0.6rem;
    span {
      font-size: 0.3rem;
      color: #347fea;
      margin-left: 0.12rem;
    }
  }
}
.summarize {
  margin-top: 0.3rem;
  height: 5.03rem;
  background: url("../../../static/images/r_1.png") no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
  ul {
    margin-top: -0.1rem;
    li {
      border-bottom: 0.03rem solid #0f1f53;
      line-height: 346%;
      overflow: hidden;
      padding: 0 0.35rem;
      a {
        text-align: center;
        font-size: 0.16rem;
        color: #7f9ea8;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        .summarizeContent {
          margin-left: 0.2rem;
        }
      }
    }
  }
}
.plate {
  margin-top: 0.3rem;
  height: 1.94rem;
  background: url("../../../static/images/r_2.png") no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;

  .out_in {
    display: flex;
    color: #fff;
    font-size: 0.18rem;
    padding: 0 0.15rem;
    div {
      margin-right: 0.4rem;
    }
  }
  .case {
    display: flex;
    padding: 0 0.15rem;
    margin-top: 0.17rem;
    .left {
      width: 0.18rem;
      height: 0.76rem;
      font-size: 0.18rem;
      line-height: 0.2rem;
      color: #0184ff;
    }
    .right {
      color: #7f9ea8;
      overflow: hidden;
      margin-left: 0.2rem;
      ul {
        transform: translateY(-0.05rem);
        li {
          line-height: 0.26rem;
          span {
            margin-right: 0.16rem;
          }
        }
      }
    }
  }
}
</style>
