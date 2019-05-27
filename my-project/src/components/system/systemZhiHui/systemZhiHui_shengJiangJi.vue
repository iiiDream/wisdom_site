<template>
  <div id="shengjiangji">
    <div class="content">
      <div id="top">
        <div class="box">
          <div class="info">
            <div class="left">
              <img>
            </div>
            <div class="right">
              <p style="font-size:0.18rem;">在线升降机</p>
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
              <p style="font-size:0.18rem;">离线升降机</p>
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
        <div id="left">
          <div class="btnList">
            <div class="btn">
              <div class="left">
                <img>
              </div>
              <div class="right" @click="isShow=!isShow">历史记录</div>
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
          <div class="person">
            <div class="title">创新工业园东侧升降机设备</div>
            <img
              class="gongren"
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122221422,432504913&fm=26&gp=0.jpg"
            >
            <div class="gongrenInfo">
              <p style="margin-top:0.2rem">
                <span style="font-size: .2rem;">操作员</span>
                <span style="margin-left:0.2rem">某某某</span>
              </p>
              <p style="margin-top:0.2rem">
                <span style="font-size: .2rem;">上班时间</span>
                <span style="margin-left:0.2rem">07:30:00</span>
              </p>
            </div>
            <div class="day">
              <div class="bor"></div>
              <ss-calendar/>
            </div>
            <div class="status">
              升降机状体：
              <span>在线</span>
            </div>
          </div>
        </div>
        <div id="right" v-show="isShow">
          <div class="information">
            <div class="title">实时数据</div>
            <div class="quan">
              <p class="num">60t</p>
              <p class="text">载重</p>
            </div>
            <div class="six">
              <div class="box">
                <div class="one">
                  速度
                  <img>
                </div>
                <div class="two"></div>
                <div class="three">20m/s</div>
                <div class="four" style="background-color:#feb37f;"></div>
              </div>
              <div class="box">
                <div class="one">
                  风速
                  <img>
                </div>
                <div class="two">风级：8级</div>
                <div class="three">10.94m/s</div>
                <div class="four" style="background-color:#ff7a81;"></div>
              </div>
              <div class="box">
                <div class="one">
                  高度
                  <img>
                </div>
                <div class="two">限高：80米</div>
                <div class="three">60m</div>
                <div class="four" style="background-color:#3ada76;"></div>
              </div>
              <div class="box">
                <div class="one">
                  楼层
                  <img>
                </div>
                <div class="two"></div>
                <div class="three">10楼</div>
                <div class="four" style="background-color:#3ada76;"></div>
              </div>
              <div class="box">
                <div class="one">
                  倾角
                  <img>
                </div>
                <div class="two"></div>
                <div class="three">175°</div>
                <div class="four" style="background-color:#3ada76;"></div>
              </div>
              <div class="box">
                <div class="one">
                  人数
                  <img>
                </div>
                <div class="two"></div>
                <div class="three">3人</div>
                <div class="four" style="background-color:#3ada76;"></div>
              </div>
            </div>
            <div class="play">
              <video src controls="controls"></video>
              <p>点击播放监控</p>
            </div>
          </div>
          <div class="all">
            <div class="title">升降机预警汇总统计</div>
            <ul>
              <li style="background-color: #0090ff;">
                <p class="name">载重报警</p>
                <p class="times">
                  <span class="num">0</span>次
                </p>
              </li>
              <li style="background-color: #3ada76;">
                <p class="name">人数报警</p>
                <p class="times">
                  <span class="num">0</span>次
                </p> 
              </li>
              <li style="background-color: #ffb079;">
                <p class="name">速度报警</p>
                <p class="times">
                  <span class="num">0</span>次
                </p>
              </li>
              <li style="background-color: #ff7a81;">
                <p class="name">倾斜报警</p>
                <p class="times">
                  <span class="num">0</span>次
                </p>
              </li>
              <li style="background-color: #ffb079;">
                <p class="name">上限位警报</p>
                <p class="times">
                  <span class="num">0</span>次
                </p>
              </li>
              <li style="background-color: #0090ff;">
                <p class="name">下限位警报</p>
                <p class="times">
                  <span class="num">0</span>次
                </p>
              </li>
              <li style="background-color: #ff7a81;">
                <p class="name">冲顶警报</p>
                <p class="times">
                  <span class="num">0</span>次
                </p>
              </li>
              <li style="background-color: #3ada76;">
                <p class="name">其他警报</p>
                <p class="times">
                  <span class="num">0</span>次
                </p>
              </li>
            </ul>
          </div>
          <div class="zhanbitu">
            <div class="title">升降机预警占比图</div>
            <div id="proportion" style="width: 5.5rem;height:3.1rem;"></div>
          </div>
        </div>
        <div id="infoList" v-show="!isShow">
          <div class="header">
            <p class="left">
              时间：
              <el-date-picker v-model="times" type="date" placeholder="请选择"></el-date-picker>
            </p>
            <p class="right">
              状态：
              <el-select v-model="status" placeholder="请选择">
                <el-option
                  v-for="item in statusOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </p>
          </div>
          <div class="table">
            <el-table :data="tableData" stripe border>
              <el-table-column type="selection" width="35"></el-table-column>
              <el-table-column prop="number" label="序号" width="80"></el-table-column>
              <el-table-column prop="load" label="载重" width="100">
                <template slot-scope="scope">
                  <div
                    :class="scope.row.load < 100?'green-color':scope.row.load>=100?'red-color':''"
                  >{{ scope.row.load}}t</div>
                </template>
              </el-table-column>
              <el-table-column prop="sudu" label="速度" width="100">
                <template slot-scope="scope">
                  <div>{{ scope.row.sudu}}m/s</div>
                </template>
              </el-table-column>
              <el-table-column prop="wind" label="风速" width="110">
                <template slot-scope="scope">
                  <div>{{ scope.row.wind}}m/s</div>
                </template>
              </el-table-column>
              <el-table-column prop="height" label="高度" width="110">
                <template slot-scope="scope">
                  <div>{{ scope.row.height}}m</div>
                </template>
              </el-table-column>
              <el-table-column prop="flow" label="楼层" width="110">
                <template slot-scope="scope">
                  <div>{{ scope.row.flow}}楼</div>
                </template>
              </el-table-column>
              <el-table-column prop="angle" label="倾角" width="110">
                <template slot-scope="scope">
                  <div>{{ scope.row.angle}}°</div>
                </template>
              </el-table-column>
              <el-table-column prop="person" label="人数" width="110">
                <template slot-scope="scope">
                  <div>{{ scope.row.person}}人</div>
                </template>
              </el-table-column>
              <el-table-column prop="status" label="状态" width="120" sortable="custom">
                <template slot-scope="scope">
                  <div
                    :class="scope.row.status=='合格'?'green-color':scope.row.status=='不合格'?'red-color':''"
                  >{{ scope.row.status }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="time" label="时间"></el-table-column>
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
import ssCalendar from "../ss-calendar/ss-calendar.vue";
export default {
  data() {
    return {
      isShow: true,
      times: "",
      status: "",
      statusOptions: [
        {
          value: "选项0",
          label: "全部"
        },
        {
          value: "选项1",
          label: "合格"
        },
        {
          value: "选项2",
          label: "不合格"
        }
      ],
      tableData: [
        {
          number: "1", //序号
          load: 100, //载重
          sudu: "87", //速度
          wind: "10", //风速
          height: "60", //高度
          flow: "26.57", //楼层
          angle: "30", //倾角
          person: "2", //人数
          status: "合格", //状态
          time: "2019-10-10 19:19:19" //时间
        },
        {
          number: "2", //序号
          load: 98, //载重
          sudu: "87", //速度
          wind: "10", //风速
          height: "60", //高度
          flow: "26.57", //楼层
          angle: "30", //倾角
          person: "2", //人数
          status: "不合格", //状态
          time: "2019-10-10 19:19:19" //时间
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
          x: "445px",
          y: "75px",
          itemWidth: 16, // 设置图例图形的宽
          itemHeight: 16, // 设置图例图形的高
          textStyle: {
            fontSize: "16",
            color: "#000"
          },
          data: ["载重", "人数", "上限位", "下限位", "速度", "其他"]
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
              { value: 0, name: "载重" },
              { value: 0, name: "人数" },
              { value: 0, name: "上限位" },
              { value: 0, name: "下限位" },
              { value: 0, name: "速度" },
              { value: 0, name: "其他" }
            ]
          }
        ]
      });
    }
  },
  mounted() {
    this.setProportion();
  },
  components: {
    // 日历组件
    ssCalendar
  }
};
</script>
<style lang="less">
#shengjiangji {
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
      #left {
        width: 4rem;
        margin-top: 0.1rem;
        .btnList {
          width: 100%;
          height: 0.7rem;
          background-color: #fff;
          padding: 0.2rem;
          display: flex;
          justify-content: space-between;
          .btn {
            width: 1.04rem;
            height: 0.28rem;
            border: 1px solid #0090ff;
            border-radius: 0.04rem;
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
        .person {
          height: 7.6rem;
          margin-top: 0.1rem;
          background-color: #fff;
          padding-top: 0.38rem;
          text-align: center;
          .title {
            font-size: 0.24rem;
            font-weight: bold;
            text-align: center;
          }
          .gongren {
            width: 1.5rem;
            height: 1.5rem;
            margin-top: 0.38rem;
          }
          .gongrenInfo {
            font-size: 0.21rem;
          }
          .day {
            position: relative;
            margin-top: 0.5rem;
            height: 2.84rem;
            .bor {
              height: 100%;
              width: 3.1rem;
              box-shadow: 0 0 0.5rem -0.3rem #666;
              position: absolute;
              left: 0.4rem;
            }
          }
          .status {
            margin-top: 0.4rem;
            font-size: 0.22rem;
            span {
              color: #3ada76;
            }
          }
        }
      }
      #right {
        position: relative;
        flex: 1;
        margin-left: 0.1rem;
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
          .play {
            position: absolute;
            top: 1.07rem;
            right: 0.46rem;
            text-align: center;
            video {
              width: 2.48rem;
              height: 1.38rem;
            }
            p {
              font-size: 0.22rem;
              cursor: pointer;
              color: #0090ff;
              margin-top: 0.25rem;
              &:hover {
                color: royalblue;
              }
            }
          }
        }
        .all {
          width: 6.82rem;
          height: 4.14rem;
          margin-top: 0.1rem;
          background-color: #fff;
          padding: 0.25rem;
          ul {
            display: flex;
            flex-wrap: wrap;
            margin-left: -0.2rem;
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
          width: 5.66rem;
          height: 4.14rem;
          background-color: #fff;
          #proportion {
            transform: translateX(-0.5rem);
            margin-top: 0.2rem;
          }
        }
      }
      #infoList {
        position: relative;
        flex: 1;
        margin-left: 0.1rem;
        background-color: #f7f7f7;
        margin-top: 0.1rem;
        .header {
          width: 100%;
          height: 0.7rem;
          background-color: #fff;
          position: relative;
          line-height: 0.7rem;
          text-align: center;
          p {
            font-size: 0.18rem;
            input {
              width: 2.58rem;
              height: 0.38rem;
              border: 1px solid #b6b6b6;
              border-radius: 0.04rem;
            }
          }
          .left {
            float: left;
            margin-left: 2.6rem;
          }
          .right {
            float: right;
            margin-right: 2.66rem;
          }
        }
        .table {
          width: 100%;
          min-height: 5.6rem;
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
            .checkrow {
              background-color: #fdefc6;
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