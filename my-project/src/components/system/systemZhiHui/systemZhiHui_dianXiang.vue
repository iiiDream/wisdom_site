<template>
  <div id="dianxiang">
    <div class="content">
      <div id="top">
        <div class="box">
          <div class="info">
            <div class="left">
              <img>
            </div>
            <div class="right">
              <p style="font-size:0.18rem;">在线电箱</p>
              <p style="font-size:0.26rem;margin-top:0.05rem">10</p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="info">
            <div class="left">
              <img>
            </div>
            <div class="right">
              <p style="font-size:0.18rem;">离线电箱</p>
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
              <p style="font-size:0.18rem;">报警统计</p>
              <p style="font-size:0.26rem;margin-top:0.05rem">0</p>
            </div>
          </div>
        </div>
      </div>
      <div id="down">
        <div id="right">
          <div class="information">
            <div class="title">实时数据</div>
            <div class="quan">
              <p class="num">40℃</p>
              <p class="text">温度</p>
            </div>
            <div class="six">
              <div class="box">
                <div class="one">
                  漏电A
                  <img>
                </div>
                <div class="two"></div>
                <div class="three">0a</div>
                <div class="four" style="background-color:#feb37f;"></div>
              </div>
              <div class="box">
                <div class="one">
                  漏电B
                  <img>
                </div>
                <div class="two"></div>
                <div class="three">0a</div>
                <div class="four" style="background-color:#ff7a81;"></div>
              </div>
              <div class="box">
                <div class="one">
                  箱门
                  <img>
                </div>
                <div class="two"></div>
                <div class="three">开</div>
                <div class="four" style="background-color:#3ada76;"></div>
              </div>
              <div class="box">
                <div class="one">
                  漏电C
                  <img>
                </div>
                <div class="two"></div>
                <div class="three">0a</div>
                <div class="four" style="background-color:#3ada76;"></div>
              </div>
              <div class="box">
                <div class="one">
                  漏电D
                  <img>
                </div>
                <div class="two"></div>
                <div class="three">0a</div>
                <div class="four" style="background-color:#3ada76;"></div>
              </div>
              <div class="box">
                <div class="one">运行状态</div>
                <div class="two"></div>
                <div class="three">正常</div>
                <div class="four" style="background-color:#3ada76;"></div>
              </div>
            </div>
          </div>
          <div class="all">
            <div class="title">电箱预警汇总统计</div>
            <ul>
              <li style="background-color: #0090ff;">
                <p class="name">关门超时报警</p>
                <p class="times">
                  <span class="num">0</span>次
                </p>
              </li>
              <li style="background-color: #3ada76;">
                <p class="name">温度报警</p>
                <p class="times">
                  <span class="num">0</span>次
                </p>
              </li>
              <li style="background-color: #ffb079;">
                <p class="name">漏电A报警</p>
                <p class="times">
                  <span class="num">0</span>次
                </p>
              </li>
              <li style="background-color: #ffb079;">
                <p class="name">漏电B报警</p>
                <p class="times">
                  <span class="num">0</span>次
                </p>
              </li>
              <li style="background-color: #0090ff;">
                <p class="name">漏电C报警</p>
                <p class="times">
                  <span class="num">0</span>次
                </p>
              </li>
              <li style="background-color: #ff7a81;">
                <p class="name">漏电N报警</p>
                <p class="times">
                  <span class="num">0</span>次
                </p>
              </li>
            </ul>
          </div>
          <div class="zhanbitu">
            <div class="title">电箱预警占比图</div>
            <div id="proportion" style="width: 5.5rem;height:3.1rem;"></div>
          </div>
        </div>
        <div id="infoList">
          <div class="btnList">
            <div class="btn">
              <div class="left">
                <img>
              </div>
              <div class="right">选择时间</div>
            </div>
            <div class="btn">
              <div class="left">
                <img>
              </div>
              <div class="right">切换设备</div>
            </div>
            <div class="btn">
              <div class="left">
                <img>
              </div>
              <div class="right">导出Excel</div>
            </div>
          </div>
          <div class="table">
            <el-table :data="tableData" stripe border>
              <el-table-column type="selection" width="35"></el-table-column>
              <el-table-column prop="number" label="序号" width="79"></el-table-column>
              <el-table-column prop="wendu" label="温度" width="100">
                <template slot-scope="scope">
                  <div  :class="scope.row.wendu < 100?'' :scope.row.wendu>=100?'red-color':''">{{ scope.row.wendu}}℃</div>
                </template>
              </el-table-column>
              <el-table-column prop="ldA" label="漏电A" width="100">
                <template slot-scope="scope">
                  <div>{{ scope.row.ldA}}m</div>
                </template>
              </el-table-column>
              <el-table-column prop="ldB" label="漏电B" width="100">
                <template slot-scope="scope">
                  <div>{{ scope.row.ldB}}°</div>
                </template>
              </el-table-column>
              <el-table-column prop="ldC" label="漏电C" width="100">
                <template slot-scope="scope">
                  <div>{{ scope.row.ldC}}</div>
                </template>
              </el-table-column>
              <el-table-column prop="ldN" label="漏电N" width="100">
                <template slot-scope="scope">
                  <div
                    :class="scope.row.status=='合格'?'green-color':scope.row.status=='不合格'?'red-color':''"
                  >{{ scope.row.ldN }}</div>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="fenye">
            <!-- 分页的两个事件 -->

            <!-- @size-change="handleSizeChange"
            @current-change="handleCurrentChange"-->
            <el-pagination
              :current-page="1"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="8"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          number: "1", //序号
          wendu: 100, //温度
          ldA: "87", //漏电A
          ldB: "10", //漏电B
          ldC: "60", //漏电C
          ldN: "26.57", //漏电N
        },
        {
          number: "2", //序号
          wendu: 98, //温度
          ldA: "87", //漏电A
          ldB: "10", //漏电B
          ldC: "60", //漏电C
          ldN: "26.57", //漏电N
        }
      ]
    };
  },
  methods: {
    setProportion() {
      let myProportion = this.$echarts.init(
        document.getElementById("proportion")
      );
      myProportion.setOption({
        color: [
          "#3ada76",
          "#ff7a81",
          "#4fadef",
          "#f2a23a",
          "#f23a3a",
          "#9e3af2"
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "435px",
          y: "75px",
          itemWidth: 16, // 设置图例图形的宽
          itemHeight: 16, // 设置图例图形的高
          textStyle: {
            fontSize: "16",
            color: "#000"
          },
          data: ["关门超时", "温度", "漏电A", "漏电B", "漏电C", "漏电N"]
        },
        series: [
          {
            name: "预警占比",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "24"
                  // fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 0, name: "关门超时" },
              { value: 0, name: "温度" },
              { value: 0, name: "漏电A" },
              { value: 0, name: "漏电B" },
              { value: 0, name: "漏电C" },
              { value: 0, name: "漏电N" }
            ]
          }
        ]
      });
    }
  },
  mounted() {
    this.setProportion();
  }
};
</script>
<style lang="less">
#dianxiang {
  background-color: #f7f7f7;
  width: 100%;
  .content {
    height: 100%;
    width: 100%;
    background-color: #f7f7f7;
    box-shadow: 0 0 0.5rem -0.3rem #666;
    #top {
      width: 100%;
      height: 1rem;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      .box {
        flex: 1;
        text-align: center;
        .info {
          margin: 0 auto;
          width: 1.52rem;
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
    #down {
      display: flex;
      justify-content: space-around;
      #right {
        position: relative;
        flex: 1;
        background-color: #f7f7f7;
        margin-top: 0.1rem;
        .title {
          font-size: 0.22rem;
        }
        .information {
          display: flex;
          position: relative;
          height: 4.16rem;
          width: 100%;
          padding: 0.25rem;
          background-color: #fff;
          .quan {
            width: 2.46rem;
            height: 2.46rem;
            background-color: #3ada76;
            border: 1px solid #3ada76;
            border-radius: 50%;
            margin-top: 0.6rem;
            margin-left: 0.4rem;
            text-align: center;
            box-shadow: 0px 0px 0px 0.27rem #fff inset;
            .num {
              font-size: 0.32rem;
              color: #fff;
              font-weight: bolder;
              margin-top: 0.9rem;
            }
            .text {
              font-size: 0.22rem;
              color: #fff;
              margin-top: 0.1rem;
            }
          }
          .six {
            width: 4.8rem;
            height: 3.68rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            text-align: center;
            margin-left: 0.8rem;
            .box {
              width: 1.4rem;
              height: 1.54rem;
              background-color: #f7f7f7;
              .one {
                font-size: 0.24rem;
                margin-top: 0.15rem;
                img {
                  width: 0.4rem;
                  height: 0.26rem;
                  margin-left: 0.17rem;
                }
              }
              .two {
                width: 100%;
                height: 0.24rem;
                font-size: 0.14rem;
                margin-top: 0.1rem;
                color: #787878;
              }
              .three {
                font-size: 0.2rem;
                margin-top: 0.1rem;
              }
              .four {
                width: 1rem;
                height: 0.2rem;
                margin: 0 auto;
                margin-top: 0.1rem;
              }
            }
          }
        }
        .all {
          width: 5.6rem;
          height: 4.14rem;
          margin-top: 0.1rem;
          background-color: #fff;
          padding: 0.25rem;
          ul {
            display: flex;
            flex-wrap: wrap;
            margin-left: 0rem;
            margin-top: 0.58rem;
            li {
              width: 1.43rem;
              height: 0.81rem;
              border-radius: 0.03rem;
              margin-left: 0.2rem;
              margin-top: 0.22rem;
              text-align: center;
              .name {
                margin-top: 0.14rem;
                color: #fff;
                font-size: 0.18rem;
              }
              .times {
                margin-top: 0.05rem;
                color: #fff;
                font-size: 0.16rem;
                .num {
                  font-size: 0.22rem;
                }
              }
            }
          }
        }
        .zhanbitu {
          position: absolute;
          padding: 0.25rem;
          right: 0;
          bottom: 0;
          width: 4.73rem;
          height: 4.14rem;
          background-color: #fff;
          margin-left: 0.1rem;
          #proportion {
            transform: translateX(-1.2rem);
            margin-top: 0.2rem;
          }
        }
      }
      #infoList {
        width: 6.15rem;
        position: relative;
        margin-left: 0.1rem;
        background-color: #f7f7f7;
        margin-top: 0.1rem;
        .btnList {
          width: 100%;
          height: 0.7rem;
          background-color: #fff;
          padding: 0.2rem;
          padding-left: 1.2rem;
          .btn {
            float: left;
            margin-left: .2rem;
            width: 1.04rem;
            height: 0.28rem;
            border: 1px solid #0090ff;
            border-radius: 0.02rem;
            display: flex;
            line-height: 0.28rem;
            color: #0090ff;
            cursor: pointer;
            .left {
              width: 0.37rem;
              height: 100%;
            }
            &:hover {
              color: #fff;
              background-color: #0090ff;
            }
          }
        }

        .table {
          background-color: #fff;
          width: 6.15rem;
          min-height: 7.6rem;
          margin-top: 0.1rem;
          .el-table {
            th {
              padding: 0;
              div {
                color: #000;
                height: 0.35rem;
                line-height: 0.35rem;
                background-color: #c5e8ff;
                font-size: 0.16rem;
              }
            }
            td {
              padding: 0;
              div {
                height: 0.35rem;
                color: #646464;
                line-height: 0.35rem;
                font-size: 0.16rem;
              }
            }
            .red-color {
              color: #fe8990;
            }
            .green-color {
              color: #58de87;
            }
          }
        }
        .fenye {
          position: absolute;
          right: 0.6rem;
          bottom: 0.3rem;
        }
      }
    }
  }
}
</style>