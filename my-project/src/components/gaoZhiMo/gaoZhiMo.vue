<template>
  <div id="gaozhimo">
    <ul id="ul">
      <li id="li">
        <div class="title">
          <h3>支架沉降</h3>
          <div class="serch">
            <div class="search-bar">
              <el-input placeholder="请输入测点名称搜索" v-model="serch"></el-input>
              <a class="search-ico"></a>
            </div>
          </div>
        </div>
        <div class="header">
          <p style="width:30%">监测点</p>
          <p style="width:40%">当日数据趋势图</p>
          <p style="width:30%">当日数据列表</p>
        </div>
        <div class="content">
          <div style="width:30%" class="left">
            <div class="top">
              <span class="dot"></span>
              <span>CJ-01</span>
            </div>
            <div class="bottom">
              <ul>
                <li>高支模：1号高支模</li>
                <li>最大值：0.66mm</li>
                <li>最小值：0.22mm</li>
                <li>平均值：0.45mm</li>
              </ul>
            </div>
          </div>
          <div style="width:40%" class="center">
            <div id="one" :style="{width: '3.6rem', height: '2.55rem'}" class="dust"></div>
          </div>
          <div style="width:30%" class="right">
            <ul>
              <li style="font-size:0.16rem">支架沉降(mm)</li>
              <li>0.5</li>
              <li>0.66</li>
              <li>0.22</li>
            </ul>
            <ul>
              <li style="font-size:0.16rem">时间</li>
              <li>00:00</li>
              <li>08:00</li>
              <li>12:00</li>
            </ul>
            <ul>
              <li style="font-size:0.16rem">状态</li>
              <li>
                <p class="dot"></p>
              </li>
              <li>
                <p class="dot"></p>
              </li>
              <li>
                <p class="dot"></p>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li id="li">
        <div class="title">
          <h3>立杆轴力</h3>
          <div class="serch">
            <div class="search-bar">
              <el-input placeholder="请输入测点名称搜索" v-model="serch"></el-input>
              <a class="search-ico"></a>
            </div>
          </div>
        </div>
        <div class="header">
          <p style="width:30%">监测点</p>
          <p style="width:40%">当日数据趋势图</p>
          <p style="width:30%">当日数据列表</p>
        </div>
        <div class="content">
          <div style="width:30%" class="left">
            <div class="top">
              <span class="dot"></span>
              <span>ZL-01</span>
            </div>
            <div class="bottom">
              <ul>
                <li>高支模：1号高支模</li>
                <li>最大值：5.12kN</li>
                <li>最小值：2.48kN</li>
                <li>平均值：3.94kN</li>
              </ul>
            </div>
          </div>
          <div style="width:40%" class="center">
            <div id="two" :style="{width: '3.6rem', height: '2.55rem'}" class="dust"></div>
          </div>
          <div style="width:30%" class="right">
            <ul>
              <li style="font-size:0.16rem">立杆轴力(kN)</li>
              <li>5.12</li>
              <li>2.48</li>
              <li>4.23</li>
            </ul>
            <ul>
              <li style="font-size:0.16rem">时间</li>
              <li>00:00</li>
              <li>08:00</li>
              <li>12:00</li>
            </ul>
            <ul>
              <li style="font-size:0.16rem">状态</li>
              <li>
                <p class="dot"></p>
              </li>
              <li>
                <p class="dot"></p>
              </li>
              <li>
                <p class="dot"></p>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li id="li">
        <div class="title">
          <h3>杆件倾角</h3>
          <div class="serch">
            <div class="search-bar">
              <el-input placeholder="请输入测点名称搜索" v-model="serch"></el-input>
              <a class="search-ico"></a>
            </div>
          </div>
        </div>
        <div class="header">
          <p style="width:30%">监测点</p>
          <p style="width:40%">当日数据趋势图</p>
          <p style="width:30%">当日数据列表</p>
        </div>
        <div class="content">
          <div style="width:30%" class="left">
            <div class="top">
              <span class="dot"></span>
              <span>QJ-01</span>
            </div>
            <div class="bottom">
              <ul>
                <li>高支模：1号高支模</li>
                <li>最大值：0.5°</li>
                <li>最小值：0.14°</li>
                <li>平均值：0.36°</li>
              </ul>
            </div>
          </div>
          <div style="width:40%" class="center">
            <div id="three" :style="{width: '3.6rem', height: '2.55rem'}" class="dust"></div>
          </div>
          <div style="width:30%" class="right">
            <ul>
              <li style="font-size:0.16rem">杆件倾角( ° )</li>
              <li>0.5</li>
              <li>0.43</li>
              <li>0.14</li>
            </ul>
            <ul>
              <li style="font-size:0.16rem">时间</li>
              <li>00:00</li>
              <li>08:00</li>
              <li>12:00</li>
            </ul>
            <ul>
              <li style="font-size:0.16rem">状态</li>
              <li>
                <p class="dot"></p>
              </li>
              <li>
                <p class="dot"></p>
              </li>
              <li>
                <p class="dot"></p>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li id="li">
        <div class="title">
          <h3>水平位移</h3>
          <div class="serch">
            <div class="search-bar">
              <el-input placeholder="请输入测点名称搜索" v-model="serch"></el-input>
              <a class="search-ico"></a>
            </div>
          </div>
        </div>
        <div class="header">
          <p style="width:30%">监测点</p>
          <p style="width:40%">当日数据趋势图</p>
          <p style="width:30%">当日数据列表</p>
        </div>
        <div class="content">
          <div style="width:30%" class="left">
            <div class="top">
              <span class="dot"></span>
              <span>WY-01</span>
            </div>
            <div class="bottom">
              <ul>
                <li>高支模：1号高支模</li>
                <li>最大值：0.61mm</li>
                <li>最小值：0.27mm</li>
                <li>平均值：0.46mm</li>
              </ul>
            </div>
          </div>
          <div style="width:40%" class="center">
            <div id="four" :style="{width: '3.6rem', height: '2.55rem'}" class="dust"></div>
          </div>
          <div style="width:30%" class="right">
            <ul>
              <li style="font-size:0.16rem">水平位移(mm)</li>
              <li>0.61</li>
              <li>0.27</li>
              <li>0.49</li>
            </ul>
            <ul>
              <li style="font-size:0.16rem">时间</li>
              <li>00:00</li>
              <li>08:00</li>
              <li>12:00</li>
            </ul>
            <ul>
              <li style="font-size:0.16rem">状态</li>
              <li>
                <p class="dot"></p>
              </li>
              <li>
                <p class="dot"></p>
              </li>
              <li>
                <p class="dot"></p>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      serch: ""
    };
  },
  methods: {
    one() {
      let mytemperature = this.$echarts.init(document.getElementById("one"));
      mytemperature.setOption({
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
            nameGap: "50",

            axisLabel: {
              rotate: 0,
              interval: 0,
              color: "#fff"
            },
            axisLine: {
              lineStyle: {
                color: "#3375fe"
              }
            },
            type: "category",
            boundaryGap: false,
            data: ["00:00", "08:00", "12:00"]
          }
        ],
        yAxis: [
          {
            type: "value",
            max: 0.7,
            min: 0.2,
            interval: 0.1,
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#3375fe"
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
            name: "沉降",
            type: "line",
            symbolSize: 0,
            smooth: true,
            color: ["#ffca00"],
            data: ["0.5", "0.66", "0.22", "0.44"]
          }
        ]
      });
    },
    two() {
      let mytemperature = this.$echarts.init(document.getElementById("two"));
      mytemperature.setOption({
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
            nameGap: "50",

            axisLabel: {
              rotate: 0,
              interval: 0,
              color: "#fff"
            },
            axisLine: {
              lineStyle: {
                color: "#3375fe"
              }
            },
            type: "category",
            boundaryGap: false,
            data: ["00:00", "08:00", "12:00"]
          }
        ],
        yAxis: [
          {
            type: "value",
            max: 5.5,
            min: 2,
            interval: 0.5,
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#3375fe"
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
            name: "轴力",
            type: "line",
            symbolSize: 0,
            smooth: true,
            color: ["#ffca00"],
            data: ["5.12", "2.48", "4.23"]
          }
        ]
      });
    },
    three() {
      let mytemperature = this.$echarts.init(document.getElementById("three"));
      mytemperature.setOption({
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
            nameGap: "50",

            axisLabel: {
              rotate: 0,
              interval: 0,
              color: "#fff"
            },
            axisLine: {
              lineStyle: {
                color: "#3375fe"
              }
            },
            type: "category",
            boundaryGap: false,
            data: ["00:00", "08:00", "12:00"]
          }
        ],
        yAxis: [
          {
            type: "value",
            max: 0.5,
            min: 0.1,
            interval: 0.05,
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#3375fe"
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
            name: "倾角",
            type: "line",
            symbolSize: 0,
            smooth: true,
            color: ["#ffca00"],
            data: ["0.5", "0.43", "0.14"]
          }
        ]
      });
    },
    four() {
      let mytemperature = this.$echarts.init(document.getElementById("four"));
      mytemperature.setOption({
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
            nameGap: "50",

            axisLabel: {
              rotate: 0,
              interval: 0,
              color: "#fff"
            },
            axisLine: {
              lineStyle: {
                color: "#3375fe"
              }
            },
            type: "category",
            boundaryGap: false,
            data: ["00:00", "08:00", "12:00"]
          }
        ],
        yAxis: [
          {
            type: "value",
            max: 0.65,
            min: 0.25,
            interval: 0.05,
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#3375fe"
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
            name: "位移",
            type: "line",
            symbolSize: 0,
            smooth: true,
            color: ["#ffca00"],
            data: ["0.61", "0.27", "0.49"]
          }
        ]
      });
    },
  },
  mounted() {
    this.one();
    this.two();
    this.three();
    this.four();
  }
};
</script>
<style lang="less">
#gaozhimo {
  // background-color: #fff;
  position: absolute;
  top: 0.58rem;
  bottom: 0;
  left: 0;
  right: 0;
  h3 {
    font-size: 0.2rem;
  }
  #ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: -0.07rem;
    #li {
      height: 4.3rem;
      color: #fff;
      position: relative;
      width: 49.5%;
      margin-top: 0.1rem;
      border: 0.01rem solid #3375fe;
      border-radius: 0.1rem;
      box-sizing: border-box;
      // box-shadow:  0 4px 4px rgba(23, 21, 168, 0.8), 0 6px 6px rgba(33, 49, 143, 0.4);
      .title {
        .serch {
          float: right;
          margin-right: 0.25rem;
          margin-top: -0.35rem;
          .search-bar {
            width: 2.23rem;
            height: 0.32rem;
            border: 0.01rem solid #3375fe;
            border-radius: 0.03rem;
            position: relative;
            // overflow: hidden;
            .el-input {
              width: 1.93rem;
              .el-input__inner {
                color: #fff;
                height: 0.3rem;
                background-color: rgba(0, 0, 0, 0);
                padding-left: 0.1rem;
              }
            }
            .search-ico {
              position: absolute;
              width: 0.28rem;
              height: 0.28rem;
              right: 0.05rem;
              background-image: url("../../../static/images/location-search.png");
              background-position: center center;
              background-repeat: no-repeat;
              background-size: 0.2rem 0.2rem;
            }
          }
        }
      }
      .header {
        height: 0.4rem;
        width: 9rem;
        background-color: #19369ed3;
        margin: 0.15rem auto;
        display: flex;
        justify-content: space-around;
        p {
          text-align: center;
          font-size: 0.18rem;
          font-weight: bold;
          line-height: 0.4rem;
        }
      }
      .content {
        width: 9rem;
        height: 2.95rem;
        margin-left: 0.19rem;
        display: flex;
        .left {
          height: 100%;
          position: relative;
          padding-top: 0.3rem;
          .top {
            .dot {
              width: 0.1rem;
              height: 0.1rem;
              border-radius: 50%;
              display: inline-block;
              background-color: #04fd21;
            }
            span {
              margin-left: 0.1rem;
            }
          }
          .bottom {
            margin-left: 0.5rem;
            li {
              line-height: 0.5rem;
              font-size: 0.16rem;
            }
          }
        }
        .center {
          .dust {
            margin-top: 0.3rem;
            margin-left: -0.3rem;
          }
        }
        .right {
          display: flex;
          justify-content: space-around;
          ul {
            margin-top: 0.55rem;
            li {
              line-height: 0.4rem;
              .dot {
                width: 0.1rem;
                height: 0.1rem;
                border-radius: 50%;
                display: inline-block;
                background-color: #04fd21;
                transform: translateX(0.1rem)
              }
            }
          }
        }
      }
    }
  }
}
</style>
