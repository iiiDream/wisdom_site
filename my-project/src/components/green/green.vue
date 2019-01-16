<template>
  <div id="content">
    <div id="left">
      <div class="leftTop">
        <div class="title">
          <h1>{{time}}</h1>
          <div>深圳市环境检测动态显示</div>
        </div>
        <div class="content">
          <div class="one">
            <span>{{date}}</span><span>{{zhouji}}</span>
            <img src="">
            <div class="wendu">18 ~ 26℃</div>
            <div class='fengx'>微风级</div>
          </div>
        </div>
      </div>
      <div class="leftMain">
        <div class="noise">
          <h3>噪音</h3>
          <div class="title">
              <div class="subtitle">
                  实时数据：<span class="num noml">60</span>dB
              </div>
              <div class="mintitle">
                  <span>最近12小时噪音</span><span>单位：db</span>
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
      <div class="main"></div>
    </div>
    <div id="right">
      <div class="up"></div>
      <div class="down"></div>
    </div>
  </div>
</template>
<script>
moment.locale('zh-cn');
import moment from 'moment';
export default {
  data() {
    return {
      time:{},
      date:{},
      zhouji:{}
    };
  },
  mounted() {
    this.noisePic(),
    this.getTime()
  },
  methods: {
    //   噪音图形
    noisePic() {
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
            data: [
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
              "12"
            ]
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
            smooth: 0.2,
            color: ["#508bb8"],
            data: [42, 32, 54, 60, 65, 56, 49, 46, 54, 50, 52]
          }
        ]
      });
    },
    getTime(){
      this.time=moment().format('HH:mm');
      this.date=moment().format('MMM Do');
      this.zhouji=moment().format('ddd')
      setInterval(() => {
        this.time=moment().format('HH:mm');
      }, 60000);
    }
  }
};
</script>
<style lang='less' scoped>
.danger {
  color: #dc585f !important;
}
.noml {
  color: #3ee19a !important;
}
#content {
  display: flex;
  width: 100%;
  padding: 0.5rem 0.3rem 0 0.3rem;
  height: 10.3rem;
  overflow: hidden;
  background: url("../../../static/images/index.jpg") no-repeat center center;
  h3{
      font-weight: 900;
  }
  #left {
    width: 22.22%;
    height: 100%;
    .leftTop {
      width: 4.14rem;
      height: 1.96rem;
      background: url("../../../static/images/g_zuoshang.png") no-repeat center center;
      padding: .2rem;
      .title{
        display: flex;
        color: #fff;
        justify-content:space-between;
        div{
          margin-right: .9rem;
          font-weight: 700;
        }
      }
    }
    .leftMain {
      width: 4.14rem;
      height: 7.25rem;
      background: url("../../../static/images/g_zuoxia.png") no-repeat center center;
      margin-top: .3rem;
      .noisePic{
          transform: translateY(.62rem)
      }
      .noise{
          position: relative;
          .title{
              color: #fff;
              .subtitle{
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                font-size: .18rem;
              }
              .mintitle{
                position: absolute;
                margin-top: .4rem;
                span{
                    &:nth-child(1){
                        float: left;
                        margin-left: .2rem;
                        font-size: .14rem;
                    }
                    &:nth-child(2){
                        float: right;
                        margin-left: 2.1rem;
                        font-size: .12rem;
                        &::before{
                            position: absolute;
                            content:'';
                            width: .05rem;
                            height: .05rem;
                            border-radius: 50%;
                            background-color: #fff;
                            right: .55rem;
                            top: .1rem;
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
      background: url("../../../static/images/g_zhong.png") no-repeat center center;
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
    }
    .down {
      margin-top: .3rem;
      width: 4.14rem;
      height: 4.6rem;
      background: url("../../../static/images/g_youxia.png") no-repeat center
        center;
    }
  }
}
</style>
