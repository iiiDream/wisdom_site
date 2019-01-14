<template>
  <div class="content">
    <el-row class="wrap-main clearfix container">
        <el-col :span="14" class="wrap-left">
         <div class="top-show">
          <h3>工人上工情况</h3>
          <div class="jindu">
            <div class="subjindu">
              <p>70%</p>
            </div>
          </div>
          <ul class="work-list clearfix">
            <li>
              今日
              <span class="noml">255 ↑</span>
            </li>
            <li>
              昨日
              <span>253</span>
            </li>
            <li>
              本月
              <span class="down danger">3448 ↓</span>
            </li>
            <li>
              今日
              <span>4632</span>
            </li>
          </ul>
         </div>
         <div class="summarize">
          <h3>工程概括</h3>
          <ul>
            <li>
              <a href="javascript:;">
                <span class="summarizeName">工程名称</span>
                <span class="summarizeContent">最长十五个最长十五个最长十五个</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="summarizeName">建设单位</span>
                <span class="summarizeContent">最长十五个最长十五个最长十五个</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="summarizeName">监理单位</span>
                <span class="summarizeContent">最长十五个最长十五个最长十五个</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="summarizeName">施工单位</span>
                <span class="summarizeContent">最长十五个最长十五个最长十五个</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="summarizeName">设计单位</span>
                <span class="summarizeContent">最长十五个最长十五个最长十五个</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="summarizeName">项管单位</span>
                <span class="summarizeContent">最长十五个最长十五个最长十五个</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="summarizeName">咨询单位</span>
                <span class="summarizeContent">最长十五个最长十五个最长十五个</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="summarizeName">监督单位</span>
                <span class="summarizeContent">最长十五个最长十五个最长十五个</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="summarizeName">勘查单位</span>
                <span class="summarizeContent">最长十五个最长十五个最长十五个</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="summarizeName">项目功能</span>
                <span class="summarizeContent">最长十五个最长十五个最长十五个</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="summarizeName">建筑面积</span>
                <span class="summarizeContent">最长十五个最长十五个最长十五个</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="summarizeName">工程造价</span>
                <span class="summarizeContent">最长十五个最长十五个最长十五个</span>
              </a>
            </li>
          </ul>
         </div>
         <div class="plate">
          <h3>车牌识别系统</h3>
          <div class="out_in">
            <div class="left">
              <span>今日进出：</span>
              <span>20辆</span>
            </div>
            <div class="right">
              <span>运行情况：</span>
              <span class="status">正常</span>
            </div>
          </div>
          <div class="case">
            <div class="left">进出情况</div>
            <div class="right">
              <ul>
                <li>
                  <span>京QJY676</span>
                  <span>2018-08-08</span>
                  <span>12:20:20</span>
                  <span>零时车</span>
                </li>
                <li>
                  <span>京QJY676</span>
                  <span>2018-08-08</span>
                  <span>12:20:20</span>
                  <span>零时车</span>
                </li>
                <li>
                  <span>京QJY676</span>
                  <span>2018-08-08</span>
                  <span>12:20:20</span>
                  <span>零时车</span>
                </li>
                <li>
                  <span>京QJY676</span>
                  <span>2018-08-08</span>
                  <span>12:20:20</span>
                  <span>零时车</span>
                </li>
                <li>
                  <span>京QJY676</span>
                  <span>2018-08-08</span>
                  <span>12:20:20</span>
                  <span>零时车</span>
                </li>
              </ul>
            </div>
          </div>
         </div>
       </el-col>
       <el-col :span="6" class="wrap-center">
        <div class="mainInfo">
          <span class="title">
            安全文明施工天数:
            <span class="day">1000</span>天
          </span>
        </div>
        <div class="videoInfo"></div>
        <div class="bottomInfo">
          <div class="left">
            <h3>塔吊防碰撞系统</h3>
            <ul>
              <li>
                <span class="leftName">塔吊数量：</span>
                <span class="sub">5座</span>
              </li>
              <li>
                <span class="leftName">违规操作：</span>
                <span class="sub status">无</span>
              </li>
              <li>
                <span class="leftName">运行情况：</span>
                <span class="sub noml">正常</span>
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
                <span class="sub">5座</span>
              </li>
              <li>
                <span class="leftName">载重重量：</span>
                <span class="sub danger">40</span>座
              </li>
              <li>
                <span class="leftName">运行情况：</span>
                <span class="sub noml">正常</span>
              </li>
            </ul>
            <div class="runtime">
              <div>已正常运行</div>
              <div class="noml">200小时</div>
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
            <span class="good">0~75 良好</span><span class="notgood">＞75 超标</span>
          </div>
          <div id="dust" :style="{width: '3.8rem', height: '2.05rem'}" class="dust"></div>
          <div class="temperaturebox">
            <h3 style="margin-bottom:.1rem">温度检测</h3>
              <div id="temperature" style="width: 3.8rem;height:2.04rem;transform: translateY(-0.18rem)" class="temperature"></div>
          </div>
        </div>
        <div class="electro">
          <h3>用电检测</h3>
          <ul>
            <li>
              <span class="leftName">电箱数量：</span>
              <span class="sub">20座</span>
            </li>
            <li>
              <span class="leftName">电箱温度：</span>
              <span class="sub danger">80℃</span>
            </li>
            <li>
              <span class="leftName">运行情况：</span>
              <span class="sub noml">正常</span>
            </li>
          </ul>
          <div class="runtime">
            <div>已正常运行</div>
            <div class="noml">200小时</div>
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
      percentage:70,
      baifenbi:70,
    };
  },
  mounted() {
    this.dust();
    this.temperature();
    this.renderBaifenbi()
  },
  methods: {
    dust() {
      // 基于准备好的dom，初始化echarts实例
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
          data: [
            "2月8日",
            "2月7日",
            "2月6日",
            "2月5日",
            "2月4日",
            "2月3日",
            "2月2日",
            "2月1日"
          ], //Y轴标签
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
            data: [30, 60, 90, 120, 150, 180, 180, 200],
            //柱状图颜色
            itemStyle: {
              normal: {
                //判断
                color: function(params) {
                  if (params.value >= 75) {
                    return "#dc585f";
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
    },
    temperature() {
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
            data: [
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "h"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            max: 40,
            min: 0,
            interval: 10,
            axisLabel: {
              textStyle: {
                color: "#fff"
              },
              formatter: "{value} 度",
            },
            axisLine:{
              lineStyle:{
                color:'#132e6d'
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
            symbolSize: 4,
            smooth: 0.2,
            color: ["#f98d98"],
            data: [20, 22, 14, 20, 25, 16, 19, 26, 24, 10, 12]
          }
        ]
      });
    },
    renderBaifenbi(){
      setInterval({

        
      },500)
    }
  }
};
</script>
<style lang='less' scoped>
.content {
  padding-top: .5rem;
  height: 10.3rem;
  overflow: hidden;
  .wrap-main{
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
    margin-top: .02rem;
    // width: 9.73rem;
    width: 100%;
    height: .83rem;
    background: url("../../../static/images/c_top.png") no-repeat center center;
    background-size: 100% 100%;
    color: #fff;
    text-align: center;
    line-height: .83rem;
    .title {
      font-size: .26rem;
      font-weight: 600;
    }
    .day {
      font-size: .5rem;
      line-height: .83rem;
      font-family: "YJZT";
      margin: 0 .1rem;
      font-weight: normal;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .videoInfo {
    margin-top: .3rem;
    width: 100%;
    height: 6.14rem;
    background: url("../../../static/images/c_1.png") no-repeat center center;
    background-size: 100% 100%;
  }
  .bottomInfo {
    margin-top: .3rem;
    width: 100%;
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
        margin-right: .45rem;
        width: 1.62rem;
        height: 1.62rem;
        border-radius: 50%;
        border: .01rem solid #8c8d9a;
        box-shadow: #8c8d9a 0px 0px .18rem 0px inset;
        .line {
          position: absolute;
          left: 50%;
          top: 50%;
          width: .01rem;
          height: .8rem;
          background-color: #b7b8c7;
          animation: xuanzhuan 10s linear infinite;
          transform-origin: 0 0;
        }
        .dian {
          position: absolute;
          left: 50%;
          top: 50%;
          width: .08rem;
          height: .08rem;
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
      margin-left: .15rem;
      .runtime {
        float: right;
        font-size: .22rem;
        color: #fff;
        transform: translateX(-1rem) translateY(-1.3rem);
        text-align: center;
        div {
          margin-bottom: .4rem;
        }
      }
    }
    ul {
      padding-left: .15rem;
      li {
        color: #fff;
        font-size: .18rem;
        line-height: .4rem;
        .sub {
          margin-left: .05rem;
        }
      }
    }
  }
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
    margin-top: .02rem;
    width: 4.14rem;
    height: 1.96rem;
    background: url("../../../static/images/r_2.png") no-repeat center center;
    .left {
      float: left;
      padding: 0 .4rem;
      img {
        width: 1rem;
        height: 1rem;
      }
    }
    .right {
      color: #fff;
      font-size: .2rem;
      line-height: .45rem;
    }
  }
  .ech {
    margin-top: .3rem;
    width: 4.14rem;
    height: 5.01rem;
    background: url("../../../static/images/r_1.png") no-repeat center center;
    .status{
      position: relative;
      top:-0.34rem;
      left:1.87rem;
      .good{
        color: #0163ff;
        margin-left: .15rem;
        &::before{
          content: '';
          position: absolute;
          left: -0.07rem;
          top: .05rem;
          width: .18rem;
          height: .12rem;
          background-color: #0163ff;
          border-radius: .05rem;
        }
      }
      .notgood{
        color:#dc585f;
        margin-left: .35rem;
         &::before{
          content: '';
          position: absolute;
          left: 1rem;
          top: .06rem;
          width: .18rem;
          height: .12rem;
          background-color: #dc585f;
          border-radius: .05rem;
        }
      }
    }
    .dust{
      transform: translateY(-0.24rem)
    }
  }
  .electro {
    margin-top: .3rem;
    width: 4.14rem;
    height: 1.94rem;
    background: url("../../../static/images/down_2.png") no-repeat center center;
    .runtime {
      float: right;
      font-size: .22rem;
      color: #fff;
      transform: translateX(-1rem) translateY(-1.3rem);
      text-align: center;
      div {
        margin-bottom: .4rem;
      }
    }
  }
  ul {
    padding-left: .15rem;
    li {
      color: #fff;
      font-size: .18rem;
      line-height: .4rem;
      .sub {
        margin-left: .05rem;
      }
    }
  }
  .temperaturebox{
    transform: translateY(-0.2rem);
    z-index: 1;
  }
}
.danger {
  color: #dc585f !important;
}
.noml {
  color: #3ee19a !important;
}
.wrap-left .top-show {
  height: 1.96rem;
  background: url("../../../static/images/slidTop.png") no-repeat center center;
  background-size: 100% 100%;
  .jindu {
    position: relative;
    // background-color: #fff;
    width: 2.2rem;
    height: .24rem;
    left: 43.5%;
    top: -26%;
    .subjindu {
      position: absolute;
      left: 0%;
      top: 15.6%;
      height: .24rem;
      width: 70%;
      background: linear-gradient(to right, #0163ff, #00adfe);
      transform: skew(13deg);
      transition: all 2s;
    }
    p {
      margin-left: 105%;
      color: #ffffff;
      font-size: .12rem;
      transform: skew(-13deg);
    }
  }
}

.work-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: .12rem;
  transform: translateY(-18%);
  li {
    width: 50%;
    height: 50%;
    font-size: .18rem;
    color: #6e8994;
    line-height: .6rem;
    span {
      font-size: .3rem;
      color: #347fea;
      margin-left: .12rem;
    }
  }
}
.summarize {
  margin-top: .3rem;
  height: 5.03rem;
  background: url("../../../static/images/r_1.png") no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
  ul {
    margin-top: -0.1rem;
    li {
      border-bottom: .03rem solid #0f1f53;
      line-height: 346%;
      overflow: hidden;
      padding: 0 .35rem;
      a {
        text-align: center;
        font-size: .16rem;
        color: #7f9ea8;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        .summarizeContent {
          margin-left: .2rem;
        }
      }
    }
  }
}
.plate {
  margin-top: .3rem;
  height: 1.94rem;
  background: url("../../../static/images/r_2.png") no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;

  .out_in {
    display: flex;
    color: #fff;
    font-size: .18rem;
    padding: 0 .15rem;
    div {
      margin-right: .4rem;
    }
  }
  .case {
    display: flex;
    padding: 0 .15rem;
    margin-top: .17rem;
    .left {
      width: .18rem;
      height: .76rem;
      font-size: .18rem;
      line-height: .2rem;
      color: #0184ff;
    }
    .right {
      color: #7f9ea8;
      overflow: hidden;
      margin-left: .2rem;
      ul {
        transform: translateY(-0.05rem);
        li {
          line-height: .26rem;
          span {
            margin-right: .16rem;
          }
        }
      }
    }
  }
}
</style>
