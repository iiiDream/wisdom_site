<template>
  <div id="systemZhiHui_car">
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
              <div class="right" @click="isShow='two'">历史记录</div>
            </div>
            <div class="btn">
              <div class="left">
                <img>
              </div>
              <div class="right" @click="isShow='three'">场内车辆</div>
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
              <div class="right"  @click="$router.push('/systemZhiHui_car_sub')">废物物监管</div>
            </div>
          </div>
          <div class="carInfo">
            <div class="title">车辆进出实时情况</div>
            <div class="carimg">
              <img
                src="https://car2.autoimg.cn/cardfs/product/g24/M05/45/D3/1024x0_1_q87_autohomecar__wKgHH1rgLqiAeDqrAAJHvtK1cIc011.jpg"
                alt="Comfortable-Coupe"
              >
            </div>
            <div class="infoBox">
              <ul>
                <li>
                  <span>驾驶员：</span>项目经理-某某某
                </li>
                <li>
                  <span>车牌号：</span>粤B CJ537
                </li>
                <li>
                  <span>通道名称：</span>工地西门道闸001
                </li>
                <li>
                  <span>进出类型：</span>进
                </li>
                <li>
                  <span>车辆类型：</span>常驻车辆、渣土车
                </li>
                <li>
                  <span>抬杆方式：</span>自动抬杆
                </li>
                <li>
                  <span>进出时间：</span>2019-01-01 19:22
                </li>
              </ul>
            </div>
            <div class="status">
              设备状体：
              <span>在线</span>
            </div>
          </div>
        </div>
        <div id="rightOne" v-show="isShow=='one'">
          <div class="into">
            <div class="title">实时进场</div>
            <div class="tableBox">
              <el-table :data="intoTableData" stripe border style="width: 100%">
                <el-table-column prop="number" label="序号" width="80"></el-table-column>
                <el-table-column prop="person" label="驾驶员" width="195"></el-table-column>
                <el-table-column prop="carId" label="车牌号" width="173"></el-table-column>
                <el-table-column prop="tongdao" label="通道名称" width="179"></el-table-column>
                <el-table-column prop="status" label="进出类型" width="193"></el-table-column>
                <el-table-column prop="carStatus" label="车辆类型" width="144"></el-table-column>
                <el-table-column prop="time" label="时间"></el-table-column>
              </el-table>
            </div>
          </div>
          <div class="outin">
            <div class="title">实时出场</div>
            <div class="tableBox">
              <el-table :data="outinTableData" stripe border style="width: 100%">
                <el-table-column prop="number" label="序号" width="80"></el-table-column>
                <el-table-column prop="person" label="驾驶员" width="195"></el-table-column>
                <el-table-column prop="carId" label="车牌号" width="173"></el-table-column>
                <el-table-column prop="tongdao" label="通道名称" width="179"></el-table-column>
                <el-table-column prop="status" label="进出类型" width="193"></el-table-column>
                <el-table-column prop="carStatus" label="车辆类型" width="144"></el-table-column>
                <el-table-column prop="time" label="时间"></el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <div id="rightTwo" v-show="isShow=='two'">
          <div class="searchBox">
            <ul>
              <li>
                进出时间：
                <el-input placeholder="所有"></el-input>
              </li>
              <li>
                进出类型：
                <el-input placeholder="所有"></el-input>
              </li>
              <li>
                车辆类型：
                <el-input placeholder="所有"></el-input>
              </li>
              <li>
                通道名称：
                <el-input placeholder="所有"></el-input>
              </li>
              <li>
                &#12288;&#12288;搜索：
                <el-input placeholder="输入驾驶员、车牌通道......"></el-input>
              </li>
              <li></li>
            </ul>
            <div class="btn">搜索</div>
          </div>
          <div class="table">
            <div class="tableBox">
              <el-table :data="allTableData" stripe border>
                <el-table-column prop="number" label="序号" width="80"></el-table-column>
                <el-table-column prop="person" label="驾驶员" width="195"></el-table-column>
                <el-table-column prop="carId" label="车牌号" width="173"></el-table-column>
                <el-table-column prop="tongdao" label="通道名称" width="179"></el-table-column>
                <el-table-column prop="status" label="进出类型" width="193"></el-table-column>
                <el-table-column prop="carStatus" label="车辆类型" width="144"></el-table-column>
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
        <div id="rightThree" v-show="isShow=='three'">
          <div class="car">
            <span>车辆类型：</span>
            <ul>
              <li class="active">全部</li>
              <li>临时车</li>
              <li>常驻车</li>
              <li>泥头车</li>
              <li>渣土车</li>
            </ul>
          </div>
          <div class="time">
            <span>停车时长：</span>
            <ul>
              <li class="active">全部</li>
              <li>30分钟内</li>
              <li>0.5-3小时</li>
              <li>3-6小时</li>
              <li>12小时</li>
            </ul>
            <div class="input">
              <input type="number">&nbsp;&nbsp;-
              &nbsp;
              <input type="number">&nbsp;&nbsp;&nbsp;小时
            </div>
          </div>
          <div class="search">
            关键字：
            <input type="text" placeholder="请输入车牌号码查询">
            <span class="btn">查询</span>
            <div class="info">
              <p>
                场内共
                <span style="color:#ffd14f">100&nbsp;</span>辆车
              </p>
              <p>
                剩余
                <span style="color:#3ada76">100&nbsp;</span>个车位
              </p>
            </div>
          </div>
          <div class="carList">
            <ul id="ul">
              <li>
                <p class="head">粤C CJ537(临时车)</p>
                <img
                  src="https://car2.autoimg.cn/cardfs/product/g24/M05/45/D3/1024x0_1_q87_autohomecar__wKgHH1rgLqiAeDqrAAJHvtK1cIc011.jpg"
                  alt="Comfortable-Coupe"
                >
                <p class="into">
                  今日，上午&nbsp;
                  <span style="color:#fcd178">08:11</span>&nbsp;入场
                </p>
                <p class="intoTime">
                  已停放&nbsp;
                  <span style="color:#fcd178">12</span>小时&nbsp;
                  <span style="color:#fcd178">12</span>&nbsp;分
                </p>
              </li>
              <li>
                <p class="head">粤C CJ537(临时车)</p>
                <img
                  src="https://car2.autoimg.cn/cardfs/product/g24/M05/45/D3/1024x0_1_q87_autohomecar__wKgHH1rgLqiAeDqrAAJHvtK1cIc011.jpg"
                  alt="Comfortable-Coupe"
                >
                <p class="into">
                  今日，上午&nbsp;
                  <span style="color:#fcd178">08:11</span>&nbsp;入场
                </p>
                <p class="intoTime">
                  已停放&nbsp;
                  <span style="color:#fcd178">12</span>小时&nbsp;
                  <span style="color:#fcd178">12</span>&nbsp;分
                </p>
              </li>
              <li>
                <p class="head">粤C CJ537(临时车)</p>
                <img
                  src="https://car2.autoimg.cn/cardfs/product/g24/M05/45/D3/1024x0_1_q87_autohomecar__wKgHH1rgLqiAeDqrAAJHvtK1cIc011.jpg"
                  alt="Comfortable-Coupe"
                >
                <p class="into">
                  今日，上午&nbsp;
                  <span style="color:#fcd178">08:11</span>&nbsp;入场
                </p>
                <p class="intoTime">
                  已停放&nbsp;
                  <span style="color:#fcd178">12</span>小时&nbsp;
                  <span style="color:#fcd178">12</span>&nbsp;分
                </p>
              </li>
              <li>
                <p class="head">粤C CJ537(临时车)</p>
                <img
                  src="https://car2.autoimg.cn/cardfs/product/g24/M05/45/D3/1024x0_1_q87_autohomecar__wKgHH1rgLqiAeDqrAAJHvtK1cIc011.jpg"
                  alt="Comfortable-Coupe"
                >
                <p class="into">
                  今日，上午&nbsp;
                  <span style="color:#fcd178">08:11</span>&nbsp;入场
                </p>
                <p class="intoTime">
                  已停放&nbsp;
                  <span style="color:#fcd178">12</span>小时&nbsp;
                  <span style="color:#fcd178">12</span>&nbsp;分
                </p>
              </li>
              <li>
                <p class="head">粤C CJ537(临时车)</p>
                <img
                  src="https://car2.autoimg.cn/cardfs/product/g24/M05/45/D3/1024x0_1_q87_autohomecar__wKgHH1rgLqiAeDqrAAJHvtK1cIc011.jpg"
                  alt="Comfortable-Coupe"
                >
                <p class="into">
                  今日，上午&nbsp;
                  <span style="color:#fcd178">08:11</span>&nbsp;入场
                </p>
                <p class="intoTime">
                  已停放&nbsp;
                  <span style="color:#fcd178">12</span>小时&nbsp;
                  <span style="color:#fcd178">12</span>&nbsp;分
                </p>
              </li>
              <li>
                <p class="head">粤C CJ537(临时车)</p>
                <img
                  src="https://car2.autoimg.cn/cardfs/product/g24/M05/45/D3/1024x0_1_q87_autohomecar__wKgHH1rgLqiAeDqrAAJHvtK1cIc011.jpg"
                  alt="Comfortable-Coupe"
                >
                <p class="into">
                  今日，上午&nbsp;
                  <span style="color:#fcd178">08:11</span>&nbsp;入场
                </p>
                <p class="intoTime">
                  已停放&nbsp;
                  <span style="color:#fcd178">12</span>小时&nbsp;
                  <span style="color:#fcd178">12</span>&nbsp;分
                </p>
              </li>
              <li>
                <p class="head">粤C CJ537(临时车)</p>
                <img
                  src="https://car2.autoimg.cn/cardfs/product/g24/M05/45/D3/1024x0_1_q87_autohomecar__wKgHH1rgLqiAeDqrAAJHvtK1cIc011.jpg"
                  alt="Comfortable-Coupe"
                >
                <p class="into">
                  今日，上午&nbsp;
                  <span style="color:#fcd178">08:11</span>&nbsp;入场
                </p>
                <p class="intoTime">
                  已停放&nbsp;
                  <span style="color:#fcd178">12</span>小时&nbsp;
                  <span style="color:#fcd178">12</span>&nbsp;分
                </p>
              </li>
              <li>
                <p class="head">粤C CJ537(临时车)</p>
                <img
                  src="https://car2.autoimg.cn/cardfs/product/g24/M05/45/D3/1024x0_1_q87_autohomecar__wKgHH1rgLqiAeDqrAAJHvtK1cIc011.jpg"
                  alt="Comfortable-Coupe"
                >
                <p class="into">
                  今日，上午&nbsp;
                  <span style="color:#fcd178">08:11</span>&nbsp;入场
                </p>
                <p class="intoTime">
                  已停放&nbsp;
                  <span style="color:#fcd178">12</span>小时&nbsp;
                  <span style="color:#fcd178">12</span>&nbsp;分
                </p>
              </li>
              <li>
                <p class="head">粤C CJ537(临时车)</p>
                <img
                  src="https://car2.autoimg.cn/cardfs/product/g24/M05/45/D3/1024x0_1_q87_autohomecar__wKgHH1rgLqiAeDqrAAJHvtK1cIc011.jpg"
                  alt="Comfortable-Coupe"
                >
                <p class="into">
                  今日，上午&nbsp;
                  <span style="color:#fcd178">08:11</span>&nbsp;入场
                </p>
                <p class="intoTime">
                  已停放&nbsp;
                  <span style="color:#fcd178">12</span>小时&nbsp;
                  <span style="color:#fcd178">12</span>&nbsp;分
                </p>
              </li>
              <li>
                <p class="head">粤C CJ537(临时车)</p>
                <img
                  src="https://car2.autoimg.cn/cardfs/product/g24/M05/45/D3/1024x0_1_q87_autohomecar__wKgHH1rgLqiAeDqrAAJHvtK1cIc011.jpg"
                  alt="Comfortable-Coupe"
                >
                <p class="into">
                  今日，上午&nbsp;
                  <span style="color:#fcd178">08:11</span>&nbsp;入场
                </p>
                <p class="intoTime">
                  已停放&nbsp;
                  <span style="color:#fcd178">12</span>小时&nbsp;
                  <span style="color:#fcd178">12</span>&nbsp;分
                </p>
              </li>
            </ul>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      intoTableData: [
        {
          number: 1,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "进",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 2,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "进",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 3,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "进",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 4,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "进",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 5,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "进",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 6,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "进",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 7,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "进",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 8,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "进",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        }
      ],
      outinTableData: [
        {
          number: 1,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "出",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 2,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "出",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 3,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "出",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 4,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "出",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 5,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "出",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 6,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "出",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 7,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "出",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 8,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "出",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        }
      ],
      allTableData: [
        {
          number: 1,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "出",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 2,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "出",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 3,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "进",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 4,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "出",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 5,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "进",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 6,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "出",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 7,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "进",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        },
        {
          number: 8,
          person: "项目经理-某某某",
          carId: "粤B CJ537",
          tongdao: "工地西门道闸001",
          status: "出",
          carStatus: "常驻车辆、渣土车",
          time: "2019-01-01 19:22"
        }
      ],
      isShow: "one"
    };
  }
};
</script>
<style lang="less">
#systemZhiHui_car {
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
          height: 1.15rem;
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
      }
      #rightOne {
        margin-left: 0.1rem;
        flex: 1;
        .into,
        .outin {
          width: 100%;
          background-color: #fff;
          padding: 0.2rem;
          height: 4.15rem;
          .title {
            font-size: 0.2rem;
          }
          .tableBox {
            margin-top: 0.16rem;
            max-height: 3.25rem;
            width: 12.18rem;
          }
        }
        .outin {
          margin-top: 0.1rem;
        }
      }
      #rightTwo {
        flex: 1;
        margin-left: 0.1rem;
        .searchBox {
          width: 100%;
          height: 1.4rem;
          background-color: #fff;
          position: relative;
          ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding-left: 0.2rem;
            li {
              margin-top: 0.2rem;
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
            bottom: 0.25rem;
            cursor: pointer;
            &:hover {
              color: #fff;
              background-color: #fcb928;
            }
          }
        }
        .table {
          width: 100%;
          height: 6.9rem;
          background-color: #fff;
          margin-top: 0.1rem;
          padding: 0.2rem;
          .fenye {
            position: absolute;
            right: 0.6rem;
            bottom: 0.3rem;
          }
        }
      }
      #rightThree {
        flex: 1;
        margin-left: 0.1rem;
        .car,
        .time {
          position: relative;
          height: 0.6rem;
          background-color: #fff;
          width: 100%;
          font-size: 0.18rem;
          padding-left: 0.2rem;
          span {
            float: left;
            line-height: 0.6rem;
          }
          ul {
            height: 0.58rem;
            transform: translateX(-0.35rem);
            li {
              cursor: pointer;
              height: 0.58rem;
              margin-left: 0.61rem;
              line-height: 0.6rem;
              float: left;
            }
            li.active {
              color: #0090ff;
              border-bottom: 0.02rem solid #0090ff;
              box-sizing: border-box;
            }
          }
        }
        .time {
          margin-top: 0.1rem;
          .input {
            position: absolute;
            font-size: 0.18rem;
            top: 0.11rem;
            left: 7.3rem;
            input {
              width: 0.78rem;
              height: 0.38rem;
              border: 1px solid #b6b6b6;
              border-radius: 0.04rem;
            }
          }
        }
        .search {
          position: relative;
          margin-top: 0.1rem;
          height: 0.6rem;
          background-color: #fff;
          padding-left: 0.4rem;
          font-size: 0.18rem;
          input {
            width: 3.98rem;
            height: 0.38rem;
            border: 0.01rem solid #b6b6b6;
            border-radius: 0.04rem;
            padding-left: 0.1rem;
            margin-left: 0.2rem;
            transform: translateY(-0.02rem);
          }
          ::placeholder {
            color: #d4d3d3;
          }
          .btn {
            display: inline-block;
            width: 1.61rem;
            height: 0.38rem;
            border: 0.01rem solid #d4ad40;
            text-align: center;
            line-height: 0.38rem;
            color: #fff;
            background-color: #ffd14f;
            border-radius: 0.04rem;
            margin-left: 0.4rem;
            margin-top: 0.11rem;
            cursor: pointer;
            &:hover {
              color: #fff;
              background-color: #fcb928;
            }
          }
          .info {
            position: absolute;
            font-size: 0.14rem;
            top: 0.21rem;
            left: 9.5rem;
            p {
              float: left;
              margin-left: 0.25rem;
            }
            span {
              font-size: 0.22rem;
            }
          }
        }
        .carList {
          height: 6.3rem;
          background-color: #fff;
          margin-top: 0.1rem;
          padding: 0 0.3rem;
          #ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
              width: 2.1rem;
              height: 2.35rem;
              background-color: #f7f7f7;
              text-align: center;
              margin-top: 0.4rem;
              img {
                width: 1.79rem;
                height: 1.09rem;
                border: 0.02rem solid #4a4a4a;
                margin-top: 0.15rem;
              }
              .head {
                font-size: 0.18rem;
                margin-top: 0.14rem;
                font-weight: 600;
              }
              .into {
                margin-top: 0.1rem;
                font-size: 0.14rem;
              }
              .intoTime {
                margin-top: 0.05rem;
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
}
</style>
