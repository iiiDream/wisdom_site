<template>
  <div id="systemQuality_record">
    <div class="content">
      <div class="top">
        <ul>
          <li class="active">所有</li>
          <li>待整改</li>
          <li>待复查</li>
          <li>复查未通过</li>
          <li>复查通过</li>
        </ul>
      </div>
      <div class="searchBox">
        <ul>
          <li>
            检查结果：
            <el-input v-model="result" placeholder="所有"></el-input>
          </li>
          <li>
            超时状态：
            <el-input v-model="timeStatus" placeholder="所有"></el-input>
          </li>
          <li>
            发起时间：
            <el-date-picker v-model="time" type="date" placeholder="所有"></el-date-picker>
          </li>
          <li>
            &#12288;检查人：
            <el-input v-model="examine" placeholder="所有"></el-input>
          </li>
          <li>
            &#12288;整改人：
            <el-input v-model="repair" placeholder="所有"></el-input>
          </li>
          <li>
            &#12288;复查人：
            <el-input v-model="review" placeholder="所有"></el-input>
          </li>
          <li>
            责任分包：
            <el-select v-model="subpackage" placeholder="所有">
              <el-option
                v-for="item in dutyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </li>
          <li>
            检查区域：
            <el-input v-model="area" placeholder="所有"></el-input>
          </li>
          <li>
            隐患类型：
            <el-input v-model="danger" placeholder="所有"></el-input>
          </li>
          <li>
            问题级别：
            <el-input v-model="problem" placeholder="所有"></el-input>
          </li>
          <li></li>
          <li></li>
        </ul>
        <div class="btn">搜索</div>
      </div>
      <div class="tableBox">
        <el-table :data="allTableData" stripe border @row-click="getInfo">
          <el-table-column prop="number" label="序号" width="80">
            <template slot-scope="scope">
              <div class="number" style="line-height:0.7rem">{{scope.row.number}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="problem" label="问题" width="339">
            <template slot-scope="scope">
              <div class="problem">
                <p>{{scope.row.problem}}</p>
                <p>
                  <span
                    v-if="scope.row.problemStatus=='严重'"
                    class="problemRed problemTu"
                  >{{scope.row.problemStatus}}</span>
                  <span
                    v-else-if="scope.row.problemStatus=='轻微'"
                    class="problemBlue problemTu"
                  >{{scope.row.problemStatus}}</span>
                  <span
                    v-else-if="scope.row.problemStatus=='一般'"
                    class="problemYellow problemTu"
                  >{{scope.row.problemStatus}}</span>
                  <span v-else class="problemGreen problemTu">{{scope.row.problemStatus}}</span>
                  <span style="margin-left:0.05rem">{{scope.row.problemArea}}</span>
                </p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="danger" label="隐患类型" width="175">
            <template slot-scope="scope">
              <div class="danger" style="line-height:0.7rem">{{scope.row.danger}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="examine" label="检查人 | 检查时间" width="266">
            <template slot-scope="scope">
              <div class="examine">
                <p>{{scope.row.examine}}</p>
                <p>{{scope.row.examineTime}}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="repair" label="整改人 | 责任分包公司" width="279">
            <template slot-scope="scope">
              <div class="repair">
                <p>{{scope.row.repair}}</p>
                <p>{{scope.row.repairSubpackage}}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="time" label="整改期限" width="180">
            <template slot-scope="scope">
              <div class="time" style="line-height:0.7rem">{{scope.row.time}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="状态">
            <template slot-scope="scope">
              <div
                class="status"
                style="line-height:0.7rem;color:#3ada76"
                v-if="scope.row.status=='复查通过'||scope.row.status=='合格'"
              >{{scope.row.status}}</div>
              <div
                class="status"
                style="line-height:0.7rem;color:#feb37f"
                v-else-if="scope.row.status=='待复查'"
              >{{scope.row.status}}</div>
              <div
                class="status"
                style="line-height:0.7rem;color:#ff7a81"
                v-else
              >{{scope.row.status}}</div>
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
          :total="4"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: "", //检查结果
      timeStatus: "", //超时状态
      time: "", //发起时间
      examine: "", //检查人
      repair: "", //整改人
      review: "", //复查人
      subpackage: "", //责任分包
      area: "", //检查区域
      danger: "", //隐患类型
      problem: "", //问题级别

      dutyOptions: [
        {
          value: "选项1",
          label: "分包公司1"
        },
        {
          value: "选项2",
          label: "分包公司2"
        },
        {
          value: "选项3",
          label: "分包公司3"
        }
      ], //责任分包选项
      allTableData: [
        {
          number: 1,
          problem: "某某某工地没护栏",
          problemStatus: "严重",
          problemArea: "南山EPC创新工业园",
          danger: "施工用电",
          examine: "某某某",
          examineTime: "2019-01-01 20:11",
          repair: "伟业-某某某",
          repairSubpackage: "深圳市伟业建筑劳务有限公司",
          time: "2018-01-23",
          status: "复查通过"
        },
        {
          number: 2,
          problem: "某某某工地没护栏",
          problemStatus: "轻微",
          problemArea: "南山EPC创新工业园",
          danger: "施工用电",
          examine: "某某某",
          examineTime: "2019-01-01 20:11",
          repair: "伟业-某某某",
          repairSubpackage: "深圳市伟业建筑劳务有限公司",
          time: "2018-01-23",
          status: "待复查"
        },
        {
          number: 3,
          problem: "某某某工地没护栏",
          problemStatus: "一般",
          problemArea: "南山EPC创新工业园",
          danger: "施工用电",
          examine: "某某某",
          examineTime: "2019-01-01 20:11",
          repair: "伟业-某某某",
          repairSubpackage: "深圳市伟业建筑劳务有限公司",
          time: "2018-01-23",
          status: "待整改"
        },
        {
          number: 4,
          problem: "某某某工地没护栏",
          problemStatus: "优秀",
          problemArea: "南山EPC创新工业园",
          danger: "施工用电",
          examine: "某某某",
          examineTime: "2019-01-01 20:11",
          repair: "伟业-某某某",
          repairSubpackage: "深圳市伟业建筑劳务有限公司",
          time: "2018-01-23",
          status: "合格"
        }
      ]
    };
  },
  methods: {
    //   行点击事件
    getInfo(row, event, column) {
      this.$router.push(`/systemQuality_recordInfo?id=${row.number}`);
    }
  }
};
</script>
<style lang="less">
#systemQuality_record {
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 0 0.5rem -0.3rem #666;
    border-radius: 0.04rem;
    .top {
      height: 0.5rem;
      width: 100%;
      position: relative;
      width: 100%;
      font-size: 0.18rem;
      padding-left: 0.2rem;
      border-bottom: 1px solid #f7f7f7;
      ul {
        height: 0.5rem;
        transform: translateX(-0.35rem);
        li {
          cursor: pointer;
          height: 0.5rem;
          margin-left: 0.61rem;
          line-height: 0.5rem;
          float: left;
        }
        li.active {
          color: #0090ff;
          border-bottom: 0.02rem solid #0090ff;
          box-sizing: border-box;
        }
      }
    }
    .searchBox {
      width: 100%;
      height: 2.1rem;
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
            border-radius: 0.03rem;
          }
        }
      }
      .btn {
        width: 1.61rem;
        height: 0.38rem;
        background-color: #ffd14f;
        border: 0.01rem solid #d4ad40;
        border-radius: 0.03rem;
        color: #fff;
        font-size: 0.2rem;
        text-align: center;
        line-height: 0.38rem;
        position: absolute;
        right: 0.28rem;
        bottom: 0.37rem;
        cursor: pointer;
        &:hover {
          color: #fff;
          background-color: #fcb928;
        }
      }
    }
    .el-table {
      width: 16.38rem;
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
          font-size: 0.16rem;
        }
      }
    }
    .tableBox {
      padding: 0 0.2rem;
      .problem {
        padding-top: 0.12rem;
        .problemTu {
          display: inline-block;
          width: 0.54rem;
          height: 0.19rem;
          border-radius: 0.19rem;
          line-height: 0.19rem;
          color: #fff;
          text-align: center;
          font-size: 0.14rem;
        }
        .problemRed {
          background-color: #ff7a81;
        }
        .problemBlue {
          background-color: #0090ff;
        }
        .problemYellow {
          background-color: #feb37f;
        }
        .problemGreen {
          background-color: #3ada76;
        }
      }
      .examine {
        padding-top: 0.12rem;
      }
      .repair {
        padding-top: 0.12rem;
      }
    }
    .fenye {
      position: absolute;
      right: 0.6rem;
      bottom: 0.3rem;
    }
  }
}
</style>
