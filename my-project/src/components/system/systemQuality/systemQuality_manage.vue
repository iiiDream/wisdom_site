<template>
  <div id="systemQuality_manage">
    <div class="content">
      <div class="searchBox">
        <ul>
          <li>
            整改状态：
            <el-input v-model="status" placeholder="所有"></el-input>
          </li>
          <li>
            创建时间：
            <el-input v-model="creatTime" placeholder="所有"></el-input>
          </li>
          <li>
            &#12288;检查人：
            <el-input v-model="jianChaPerson" placeholder="所有"></el-input>
          </li>
          <li>
            责任分包：
            <!-- <el-select v-model="subpackage" placeholder="所有">
              <el-option
                v-for="item in dutyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>-->
            <el-input v-model="fenBao" placeholder="所有"></el-input>
          </li>
          <li>
            &#12288;整改人：
            <el-input v-model="zhengGaiPerson" placeholder="所有"></el-input>
          </li>
          <li>
            &#12288;复查人：
            <el-input v-model="fuChaPerson" placeholder="所有"></el-input>
          </li>
          <li></li>
          <li></li>
        </ul>
        <div class="btn">搜索</div>
      </div>
      <div class="tableBox">
        <el-table :data="allTableData" stripe border @row-click="getInfo">
          <el-table-column type="selection" width="35"></el-table-column>
          <el-table-column prop="number" label="序号" width="70"></el-table-column>
          <el-table-column prop="zhengGaiNumber" label="整改单编号" width="145"></el-table-column>
          <el-table-column prop="jianChaPeople" label="检查人" width="104"></el-table-column>
          <el-table-column prop="zeRenGongSi" label="责任分包公司" width="219"></el-table-column>
          <el-table-column prop="zhengGaiStatus" label="整改状态" width="135">
            <template slot-scope="scope">
              <div
                v-if="scope.row.zhengGaiStatus=='未整改'"
                style="color:#ff858b"
              >{{scope.row.zhengGaiStatus}}</div>
              <div v-else>{{scope.row.zhengGaiStatus}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="creamTime" label="创建时间" width="144"></el-table-column>
          <el-table-column label="操作" align="right">
            <template slot-scope="scope">
              <a class="a" @click="handleEdit(scope.row)">编辑</a>
              <a class="a" @click="handleDelete(scope.row)">删除</a>
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
      status: "",
      creatTime: "",
      jianChaPerson: "",
      fenBao: "",
      zhengGaiPerson: "",
      fuChaPerson: "",
      allTableData: [
        {
          number: 1,
          zhengGaiNumber: "某某某",
          jianChaPeople: "某某某",
          zeRenGongSi: "深圳市市政工程总公司",
          zhengGaiStatus: "未整改",
          creamTime: "2018-08-01"
        },
        {
          number: 2,
          zhengGaiNumber: "某某某",
          jianChaPeople: "某某某",
          zeRenGongSi: "深圳市市政工程总公司",
          zhengGaiStatus: "未整改",
          creamTime: "2018-08-01"
        }
      ]
    };
  },
  methods: {
    //   行点击事件
    getInfo(row, event, column) {
      this.$router.push(`/systemQuality_manageInfo?id=${row.number}`);
    }
  }
};
</script>
<style lang="less">
#systemQuality_manage {
  .content {
    position: relative;
    width: 100%;
    height: 9.5rem;
    background-color: #fff;
    box-shadow: 0 0 0.5rem -0.3rem #666;
    border-radius: 0.04rem;
    padding: 0.17rem 0.2rem 0.4rem 0.2rem;
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
        bottom: 0.25rem;
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
          height: 0.35rem;
          color: #646464;
          line-height: 0.35rem;
          font-size: 0.16rem;
        }
      }
    }
    .tableBox {
      .a {
        margin-left: 0.2rem;
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
