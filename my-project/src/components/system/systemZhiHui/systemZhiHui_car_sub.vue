<template>
  <div id="systemZhiHui_car_sub">
    <div id="content">
      <div id="top">
        <div class="box">
          <div class="info">
            <div class="left">
              <img>
            </div>
            <div class="right">
              <p style="font-size:0.18rem;">在线车辆系统</p>
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
              <p style="font-size:0.18rem;">离线车辆系统</p>
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
              <p style="font-size:0.18rem;">剩余车位</p>
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
              <div class="right">切换设备</div>
            </div>
            <div class="btn">
              <div class="left">
                <img>
              </div>
              <div class="right" @click="$router.push('/systemZhiHui_car')">历史记录</div>
            </div>
            <div class="btn">
              <div class="left">
                <img>
              </div>
              <div class="right" @click="$router.push('/systemZhiHui_car')">场内车辆</div>
            </div>
            <div class="btn">
              <div class="left">
                <img>
              </div>
              <div class="right">导出Excel</div>
            </div>
            <div class="btn yellow">
              <div class="left">
                <img>
              </div>
              <div class="right" @click="$router.push('/systemZhiHui_car_sub')">废物物监管</div>
            </div>
          </div>
        </div>
        <div id="rightTwo">
          <div class="searchBox">
            <ul>
              <li>
                进出通道：
                <el-input placeholder="所有"></el-input>
              </li>
              <li>
                进出类型：
                <el-input placeholder="所有"></el-input>
              </li>
              <li>
                进出时间：
                <el-input placeholder="所有"></el-input>
              </li>
              <li id="longer">
                &#12288;关键字：
                <el-input placeholder="输入驾驶员、车牌通道......"></el-input>
              </li>
            </ul>
            <div class="btn">搜索</div>
          </div>
        </div>
      </div>
      <div class="table">
        <div class="tableBox">
          <el-table :data="allTableData" stripe border>
            <el-table-column type="selection" width="35"></el-table-column>
            <el-table-column prop="number" label="序号" width="69"></el-table-column>
            <el-table-column prop="bianNumber" label="编号" width="111"></el-table-column>
            <el-table-column prop="carId" label="车牌号" width="144"></el-table-column>
            <el-table-column prop="gongdiName" label="工地名称" width="209"></el-table-column>
            <el-table-column prop="gongdiBianHao" label="工地编号" width="159"></el-table-column>
            <el-table-column prop="zhajiBianHao" label="闸机编号" width="169"></el-table-column>
            <el-table-column prop="status" label="进出类型" width="188"></el-table-column>
            <el-table-column prop="time" label="进出时间" width="276"></el-table-column>
            <el-table-column prop="photo" label="进出照片" align="center">
              <template slot-scope="scope">
                <img :src="scope.row.photo" width="90" height="53">
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
</template>
<script>
export default {
  data() {
    return {
      allTableData: [
        {
          number: 1,
          bianNumber: 10001,
          carId: "粤B CJ537",
          gongdiName: "南山南海下沙项目",
          gongdiBianHao: "11111111",
          zhajiBianHao: "1111111",
          status: "进",
          time: "2019-01-01 19:22",
          photo:
            "https://car2.autoimg.cn/cardfs/product/g27/M09/1A/18/1024x0_1_q87_autohomecar__ChsEnVuXvl6AHHrSAAsiBB7K1TQ685.jpg"
        },
        {
          number: 2,
          bianNumber: 10002,
          carId: "粤B CJ537",
          gongdiName: "南山南海下沙项目",
          gongdiBianHao: "11111111",
          zhajiBianHao: "1111111",
          status: "出",
          time: "2019-01-01 19:22",
          photo:
            "https://car2.autoimg.cn/cardfs/product/g27/M09/1A/18/1024x0_1_q87_autohomecar__ChsEnVuXvl6AHHrSAAsiBB7K1TQ685.jpg"
        },
        {
          number: 3,
          bianNumber: 10003,
          carId: "粤B CJ537",
          gongdiName: "南山南海下沙项目",
          gongdiBianHao: "11111111",
          zhajiBianHao: "1111111",
          status: "进",
          time: "2019-01-01 19:22",
          photo:
            "https://car2.autoimg.cn/cardfs/product/g27/M09/1A/18/1024x0_1_q87_autohomecar__ChsEnVuXvl6AHHrSAAsiBB7K1TQ685.jpg"
        },
        {
          number: 4,
          bianNumber: 10004,
          carId: "粤B CJ537",
          gongdiName: "南山南海下沙项目",
          gongdiBianHao: "11111111",
          zhajiBianHao: "1111111",
          status: "出",
          time: "2019-01-01 19:22",
          photo:
            "https://car2.autoimg.cn/cardfs/product/g27/M09/1A/18/1024x0_1_q87_autohomecar__ChsEnVuXvl6AHHrSAAsiBB7K1TQ685.jpg"
        },
        {
          number: 5,
          bianNumber: 10005,
          carId: "粤B CJ537",
          gongdiName: "南山南海下沙项目",
          gongdiBianHao: "11111111",
          zhajiBianHao: "1111111",
          status: "进",
          time: "2019-01-01 19:22",
          photo:
            "https://car2.autoimg.cn/cardfs/product/g27/M09/1A/18/1024x0_1_q87_autohomecar__ChsEnVuXvl6AHHrSAAsiBB7K1TQ685.jpg"
        },
        {
          number: 6,
          bianNumber: 10006,
          carId: "粤B CJ537",
          gongdiName: "南山南海下沙项目",
          gongdiBianHao: "11111111",
          zhajiBianHao: "1111111",
          status: "出",
          time: "2019-01-01 19:22",
          photo:
            "https://car2.autoimg.cn/cardfs/product/g27/M09/1A/18/1024x0_1_q87_autohomecar__ChsEnVuXvl6AHHrSAAsiBB7K1TQ685.jpg"
        },
        {
          number: 7,
          bianNumber: 10007,
          carId: "粤B CJ537",
          gongdiName: "南山南海下沙项目",
          gongdiBianHao: "11111111",
          zhajiBianHao: "1111111",
          status: "进",
          time: "2019-01-01 19:22",
          photo:
            "https://car2.autoimg.cn/cardfs/product/g27/M09/1A/18/1024x0_1_q87_autohomecar__ChsEnVuXvl6AHHrSAAsiBB7K1TQ685.jpg"
        },
        {
          number: 8,
          bianNumber: 10008,
          carId: "粤B CJ537",
          gongdiName: "南山南海下沙项目",
          gongdiBianHao: "11111111",
          zhajiBianHao: "1111111",
          status: "出",
          time: "2019-01-01 19:22",
          photo:
            "https://car2.autoimg.cn/cardfs/product/g27/M09/1A/18/1024x0_1_q87_autohomecar__ChsEnVuXvl6AHHrSAAsiBB7K1TQ685.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="less">
#systemZhiHui_car_sub {
  width: 100%;
  background-color: #f7f7f7;
  #content {
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
    #down {
      margin-top: 0.1rem;
      display: flex;
      #left {
        width: 4rem;
        .btnList {
          width: 100%;
          height: 1.2rem;
          background-color: #fff;
          .btn {
            float: left;
            width: 1.04rem;
            height: 0.28rem;
            border: 1px solid #0090ff;
            border-radius: 0.04rem;
            display: flex;
            line-height: 0.28rem;
            color: #0090ff;
            margin-top: 0.2rem;
            margin-left: 0.2rem;
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
          .yellow {
            color: #fff;
            width: 1.15rem;
            background-color: #ffd14f;
            border: 1px solid #d4ad40;
            &:hover {
              color: #fff;
              background-color: #fcb928;
            }
          }
        }
        .carInfo {
          height: 7.15rem;
          margin-top: 0.1rem;
          background-color: #fff;
          padding-top: 0.38rem;
          text-align: center;
          .title {
            font-size: 0.24rem;
            font-weight: bold;
            text-align: center;
          }
          .carimg {
            margin-top: 0.37rem;
            img {
              width: 2.59rem;
              height: 1.54rem;
              border: 0.03rem solid #0090ff;
            }
          }
          .infoBox {
            text-align: left;
            margin-left: 0.68rem;
            ul {
              margin-top: -0.14rem;
              li {
                font-size: 0.2rem;
                margin-top: 0.34rem;
                span {
                  font-size: 0.22rem;
                }
              }
            }
          }
          .status {
            margin-top: 0.3rem;
            font-size: 0.22rem;
            span {
              color: #3ada76;
            }
          }
        }
      }
      #rightTwo {
        flex: 1;
        margin-left: 0.1rem;
        .searchBox {
          width: 100%;
          height: 1.2rem;
          background-color: #fff;
          position: relative;
          ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding-left: 0.2rem;
            li {
              margin-top: 0.15rem;
              width: 3.8rem;
              font-size: 0.18rem;
              .el-input {
                width: 2.58rem;
                height: 0.38rem;
              }
              input {
                width: 2.58rem;
                height: 0.38rem;
                border: 0.01rem solid #b6b6b6;
                border-radius: 0.05rem;
              }
            }
            #longer {
              width: 6.3rem;
              .el-input {
                width: 5.02rem;
                height: 0.38rem;
              }
              input {
                width: 5.02rem;
                height: 0.38rem;
                border: 0.01rem solid #b6b6b6;
                border-radius: 0.05rem;
              }
            }
          }
          .btn {
            width: 1.61rem;
            height: 0.38rem;
            background-color: #ffd14f;
            border: 0.01rem solid #d4ad40;
            border-radius: 0.05rem;
            color: #fff;
            font-size: 0.2rem;
            text-align: center;
            line-height: 0.38rem;
            position: absolute;
            right: 0.28rem;
            bottom: 0.15rem;
            cursor: pointer;
            &:hover {
              color: #fff;
              background-color: #fcb928;
            }
          }
        }
      }
    }
    .table {
      padding: 0.2rem 0.21rem;
      background-color: #fff;
      height: 7.1rem;
      margin-top: 0.1rem;
      position: relative;
      .tableBox {
        width: 16.26rem;
      }
      .fenye {
        position: absolute;
        right: 0.6rem;
        bottom: 0.3rem;
      }

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
            height: 0.7rem;
            color: #646464;
            line-height: 0.7rem;
            font-size: 0.16rem;
          }
        }
      }
    }
  }
}
</style>
