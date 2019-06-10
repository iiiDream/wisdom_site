<template>
  <div id="systemQuality_home">
    <div class="content">
      <div class="top">
        <div class="box">
          <div class="info">
            <div class="left">
              <img>
            </div>
            <div class="right">
              <p style="font-size:0.18rem;">合格</p>
              <p style="font-size:0.26rem;margin-top:0.05rem">0</p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="info">
            <div class="left">
              <img>
            </div>
            <div class="right">
              <p style="font-size:0.18rem;">未整改</p>
              <p style="font-size:0.26rem;margin-top:0.05rem">0</p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="info">
            <div class="left">
              <img>
            </div>
            <div class="right">
              <p style="font-size:0.18rem;">待复查</p>
              <p style="font-size:0.26rem;margin-top:0.05rem">0</p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="info">
            <div class="left">
              <img>
            </div>
            <div class="right">
              <p style="font-size:0.18rem;">超期未整改</p>
              <p style="font-size:0.26rem;margin-top:0.05rem">0</p>
            </div>
          </div>
        </div>
      </div>
      <div class="timeList">
        <ul>
          <li>本周</li>
          <li>本月</li>
          <li>按年</li>
          <li>累计</li>
          <li>自定义</li>
        </ul>
        <div class="time">
          <el-date-picker
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
      </div>
      <div class="saveInfo">
        <div class="up">
          <div class="title">安检概况</div>
          <div class="quan">
            <p class="num">0%</p>
            <p class="text">合格率</p>
          </div>
          <div class="textInfo">
            <div class="box">
              <div class="info">
                <div class="right">
                  <p style="font-size:0.22rem;">检查总数</p>
                  <p style="font-size:0.26rem;margin-top:0.1rem;font-weight:600">0</p>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="info">
                <div class="right">
                  <p style="font-size:0.22rem;">合格</p>
                  <p style="font-size:0.26rem;margin-top:0.1rem;font-weight:600">0</p>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="info">
                <div class="right">
                  <p style="font-size:0.22rem;">不合格</p>
                  <p style="font-size:0.26rem;margin-top:0.1rem;font-weight:600">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="photo">
          <div class="title">隐患趋势</div>
          <div class="tu">
            <div id="tutu" style="width:17.2rem;height:3.5rem"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    renderTu() {
      let qushitu = this.$echarts.init(document.getElementById("tutu"));
      qushitu.setOption({
        tooltip: {
          trigger: "axis",
            axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
        },
        grid: {
          left: 50,
          top:60,
        },
        toolbox: {
          left: "1200",
          feature: {
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ["合格", "不合格", "平均"]
        },
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
          axisPointer: {
            type: "shadow"
          }
        },
        yAxis: [
          {
            type: "value",
            name: "隐患数",
            min: 0,
            max: 12,
            interval: 2
          },
          {
            type: "value",
            name: "平均值",
            min: 0,
            max: 12,
            interval: 1
          }
        ],

        series: [
          {
            name: "合格",
            type: "bar",
            color: "#3ada76",
            barWidth: 25,

            data: [2, 4, 7]
          },
          {
            name: "不合格",
            type: "bar",
            color: "#fd5101",
            barWidth: 25,
            data: [2, 5, 9]
          },
          {
            name: "平均",
            type: "line",
            color: "#0090ff",
            yAxisIndex: 1,
            data: [3.2, 6.2, 9.3]
          }
        ]
      });
    }
  },
  mounted() {
    this.renderTu();
  }
};
</script>
<style lang="less">
#systemQuality_home {
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
    box-shadow: 0 0 0.5rem -0.3rem #666;
    border-radius: 0.04rem;
    .top {
      height: 1.2rem;
      width: 100%;
      background-color: #fff;
      border-top-left-radius: 0.04rem;
      border-top-right-radius: 0.04rem;
      display: flex;
      justify-content: space-between;
      .box {
        flex: 1;
        text-align: center;
        .info {
          margin: 0 auto;
          width: 1.62rem;
          display: flex;
          justify-content: space-around;
          margin-top: 0.24rem;
          .left {
            width: 0.5rem;
            height: 0.52rem;
            background-color: hotpink;
          }
          .right {
            p {
              text-align: left;
            }
          }
        }
      }
    }
    .timeList {
      width: 100%;
      margin-top: 0.1rem;
      background-color: #fff;
      height: 0.75rem;
      padding-left: 0.28rem;
      ul {
        li {
          float: left;
          line-height: 0.75rem;
          font-size: 0.16rem;
          color: #0090ff;
          margin-left: 0.2rem;
          cursor: pointer;
        }
      }
      .time {
        transform: translate(0.3rem, 0.17rem);
      }
    }
    .saveInfo {
      position: relative;
      height: 7.35rem;
      margin-top: 0.1rem;
      background-color: #fff;
      border-bottom-left-radius: 0.04rem;
      border-bottom-right-radius: 0.04rem;
      .up {
        position: relative;
        .title {
          font-size: 0.2rem;
          font-weight: 600;
          margin-left: 0.49rem;
          padding-top: 0.27rem;
        }
        .quan {
          position: absolute;
          left: 5.11rem;
          top: 0.37rem;
          width: 1.46rem;
          height: 1.46rem;
          background-color: #3ada76;
          border: 1px solid #3ada76;
          border-radius: 50%;
          margin-top: 0.6rem;
          text-align: center;
          box-shadow: 0px 0px 0px 0.15rem #fff inset;
          .num {
            font-size: 0.22rem;
            color: #fff;
            font-weight: bolder;
            margin-top: 0.5rem;
          }
          .text {
            font-size: 0.14rem;
            color: #fff;
            // margin-top: 0.1rem;
          }
        }
        .textInfo {
          position: absolute;
          display: flex;
          justify-content: space-between;
          width: 5.24rem;
          left: 7rem;
          top: 1.2rem;
          .box {
            flex: 1;
            text-align: center;
            .info {
              margin: 0 auto;
              width: 1.62rem;
              display: flex;
              justify-content: space-around;
              margin-top: 0.24rem;
              .right {
                p {
                  text-align: left;
                }
              }
            }
          }
        }
      }
      .photo {
        width: 100%;
        height: 3.6rem;
        box-shadow: 0 0 0.5rem -0.3rem #666;
        border-radius: 0.04rem;
        position: absolute;
        bottom: 0.84rem;
        left: 0.25rem;
        width: 16.25rem;
        .title {
          font-size: 0.2rem;
          font-weight: 600;
          margin-left: 0.23rem;
          padding-top: 0.16rem;
        }
        .tu {
          width: 100%;
        }
      }
    }
  }
}
</style>
