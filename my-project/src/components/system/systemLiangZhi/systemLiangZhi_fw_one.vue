<template>
  <div id="fw_one">
    <div class="content">
      <div class="title">项目信息</div>
      <div class="table-box">
        <el-table :data="tableData" stripe border>
          <el-table-column type="selection" width="35"></el-table-column>
          <el-table-column prop="number" label="序号" width="100"></el-table-column>
          <el-table-column prop="name" label="资料名称" width="400"></el-table-column>
          <el-table-column prop="person" label="上传人" width="130"></el-table-column>
          <el-table-column prop="time" label="上传时间" width="200"></el-table-column>
          <el-table-column prop="status" label="状态" width="80" sortable="custom">
            <template slot-scope="scope">
              <div
                :class="scope.row.status=='已上传'?'green-color':scope.row.status=='未上传'?'red-color':''"
              >{{ scope.row.status }}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="right">
            <template slot-scope="scope">
              <el-button @click="openUploading(scope.row.name)" type="text" size="small">上传</el-button>
              <el-button type="text" size="small" v-if="scope.row.status=='已上传'">编辑</el-button>
              <el-button
                type="text"
                size="small"
                v-if="scope.row.status=='已上传'"
                @click="openLookInfo(scope.row.name)"
              >点击查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="fenye">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="8"
        ></el-pagination>
      </div>
      <!-- 上传弹框 -->
      <div id="uploading">
        <el-dialog :title="uploadingTitle" :visible.sync="uploading" width="34.5%">
          <div v-if="uploadingTitle=='工资足额发放表'">
            <span class="checkDate">
              选择日期
              <span style="color:red">*</span>
            </span>
            <el-date-picker type="date" placeholder="选择日期" v-model="gongZidate"></el-date-picker>
          </div>
          <div v-if="uploadingTitle=='保障维权信息公告牌（栏）'">
            <span class="checkDate">
              选择日期
              <span style="color:red">*</span>
            </span>
            <el-date-picker type="date" placeholder="选择日期" v-model="weiQuandate"></el-date-picker>
          </div>
          <div class="top">
            <div class="name">
              上传附件
              <span
                style="color:red"
                v-if="uploadingTitle=='工资足额发放表' || uploadingTitle=='保障维权信息公告牌（栏）'"
              >*</span>
            </div>
            <div class="checkImg">
              <div class="lxSb" v-if="file==''">
                <input type="file" class="lxSbfile" @change="fileUp">
              </div>
              <div class="lxsupserSb" v-if="file !=''">
                <div class="info">
                  <span class="text">选 中 1 个 文 件，共 120 K。</span>
                  <el-tooltip content="最多一次性添加12张图片！" placement="top">
                    <span class="addBtn">
                      继续添加
                      <input type="file" class="lxSbfile" @change="fileUp">
                    </span>
                  </el-tooltip>
                </div>
                <div class="imgLook">
                  <div>
                    <img
                      src="https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=220ca2dacafdfc03e578e4beec04e0a9/242dd42a2834349be9cb3aa1c0ea15ce37d3bec1.jpg"
                    >
                    <img src="../../../../static/images/fw_upImg2.jpg">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="name">添加备注</div>
            <textarea class="bz" cols="86" rows="10" placeholder="请输入备注信息......."></textarea>
          </div>
          <span slot="footer" class="dialog-footer">
            <button @click="uploading = false" class="uploadingBtn">确认上传</button>
            <button @click="uploading = false" class="closeBtn">取 消</button>
          </span>
        </el-dialog>
      </div>
      <!-- 查看弹框 -->
      <div id="lookInfo">
        <el-dialog :title="lookInfoTitle" :visible.sync="lookInfo" width="45%">
          <div class="lookInfoTable">
            <el-table :data="lookInfoTable" stripe>
              <el-table-column type="selection" width="35"></el-table-column>
              <el-table-column prop="number" label="序号" width="100" align="center"></el-table-column>
              <el-table-column prop="name" label="文件名" width="300" align="center"></el-table-column>
              <el-table-column prop="time" label="发放时间" width="120" align="center"></el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">下载</el-button>
                  <el-button type="text" size="small" :info="scope.row">编辑</el-button>
                  <el-button type="text" size="small" :info="scope.row">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="lookInfoFenye">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="1"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="8"
            ></el-pagination>
          </div>
        </el-dialog>
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
          number: 1, // 序号
          name: "开工证明", // 资料名称
          person: "某某某", // 上传人
          time: "2019-04-29", // 上传时间
          status: "已上传" // 状态
        },
        {
          number: 2, // 序号
          name: "施工总承包合同", // 资料名称
          person: "某某某", // 上传人
          time: "2019-04-29", // 上传时间
          status: "未上传" // 状态
        },
        {
          number: 3, // 序号
          name: "工资保证金", // 资料名称
          person: "某某某", // 上传人
          time: "2019-04-29", // 上传时间
          status: "已上传" // 状态
        },
        {
          number: 4, // 序号
          name: "保障维权信息公告牌（栏）", // 资料名称
          person: "某某某", // 上传人
          time: "2019-04-29", // 上传时间
          status: "已上传" // 状态
        },
        {
          number: 5, // 序号
          name: "每月考勤表", // 资料名称
          person: "某某某", // 上传人
          time: "2019-04-29", // 上传时间
          status: "已上传" // 状态
        },
        {
          number: 6, // 序号
          name: "工资足额发放表", // 资料名称
          person: "某某某", // 上传人
          time: "2019-04-29", // 上传时间
          status: "已上传" // 状态
        },
        {
          number: 7, // 序号
          name: "劳务工工资专用专户备案", // 资料名称
          person: "某某某", // 上传人
          time: "2019-04-29", // 上传时间
          status: "已上传" // 状态
        },
        {
          number: 8, // 序号
          name: "劳务工工资专户监管协议", // 资料名称
          person: "某某某", // 上传人
          time: "2019-04-29", // 上传时间
          status: "已上传" // 状态
        }
      ], // 表格数据,
      //   点击查看的表格数据
      lookInfoTable: [
        {
          number: "1",
          name: "3月工资考勤表.jpg",
          time: "2019.03"
        },
        {
          number: "2",
          name: "3月工资考勤表.jpg",
          time: "2019.03"
        },
        {
          number: "3",
          name: "3月工资考勤表.jpg",
          time: "2019.03"
        },
        {
          number: "4",
          name: "3月工资考勤表.jpg",
          time: "2019.03"
        },
        {
          number: "5",
          name: "3月工资考勤表.jpg",
          time: "2019.03"
        },
        {
          number: "6",
          name: "3月工资考勤表.jpg",
          time: "2019.03"
        },
        {
          number: "7",
          name: "3月工资考勤表.jpg",
          time: "2019.03"
        },
        {
          number: "8",
          name: "3月工资考勤表.jpg",
          time: "2019.03"
        }
      ],
      // 上传弹框的头部文字信息
      uploadingTitle: "",
      // 查看弹框的头部文字信息
      lookInfoTitle: "",
      //   上传弹框的判断值
      uploading: false,
      //   查看弹框的判断值
      lookInfo: false,
      //   图片
      file: [],
      //   工资足额发放选择的日期
      gongZidate: "",
      //   维权公告选择的日期
      weiQuandate: ""
    };
  },
  methods: {
    //   打开上传弹框
    openUploading(text) {
      this.uploadingTitle = text;
      this.uploading = true;
    },
    // 上传文件处理
    fileUp(e) {
      let file = e.target.files;
      //   this.file = new FormData();
      this.file.push(file);
    },
    // 打开查看弹框
    openLookInfo(text) {
      this.lookInfoTitle = text;
      this.lookInfo = true;
    }
  }
};
</script>
<style lang="less">
#fw_one {
  background-color: #f7f7f7;
  .content {
    width: 100%;
    height: 9.45rem;
    background-color: #fff;
    box-shadow: 0 0 0.5rem -0.3rem #666;
    border-radius: 0.04rem;
    .title {
      font-size: 0.24rem;
      width: 100%;
      text-align: center;
      font-weight: bold;
      line-height: 0.6rem;
    }
    .table-box {
      width: 100%;
      min-height: 5.6rem;
      margin-left: 0.2rem;
      .el-table {
        width: 16.28rem;
        th {
          padding: 0;
          div {
            color: #4a4a4a;
            height: 0.45rem;
            line-height: 0.45rem;
            background-color: #c5e8ff;
            font-size: 0.18rem;
          }
        }
        td {
          padding: 0;
          div {
            height: 0.45rem;
            color: #646464;
            line-height: 0.45rem;
            font-size: 0.18rem;
            .el-button {
              span {
                font-size: 0.18rem;
                color: #2323ff;
                border-bottom: 1px solid #2323ff;
              }
              &:hover {
                span {
                  font-size: 0.18rem;
                  color: #4545c5;
                  border-bottom: 1px solid #4545c5;
                }
              }
            }
          }
        }
        .red-color {
          color: #fd5101;
        }
        .yellow-color {
          color: #ffd14f;
        }
      }
    }
    .lookInfoTable {
      .el-table {
        width: 16.28rem;
        th {
          padding: 0;
          div {
            color: #4a4a4a;
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
            font-size: 0.14rem;
            .el-button {
              span {
                font-size: 0.14rem;
                color: #2323ff;
                border-bottom: 1px solid #2323ff;
              }
              &:hover {
                span {
                  font-size: 0.14rem;
                  color: #4545c5;
                  border-bottom: 1px solid #4545c5;
                }
              }
            }
          }
        }
        .red-color {
          color: #fd5101;
        }
        .yellow-color {
          color: #ffd14f;
        }
      }
    }
    .fenye {
      position: absolute;
      right: 0.6rem;
      bottom: 0.3rem;
    }
    #uploading {
      .el-dialog {
        margin-top: 10vh !important;
        border-radius: 0.1rem;
        .el-dialog__header {
          background-color: #5fb6ff;
          border-top-left-radius: 0.1rem;
          border-top-right-radius: 0.1rem;
          height: 0.57rem;
          position: relative;
          .el-dialog__title {
            font-weight: bolder;
            font-size: 0.2rem;
            color: #fff;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
          .el-dialog__close {
            font-size: 0.26rem;
            color: #fff;
            // font-weight: bold;
          }
        }
        .el-dialog__body {
          input {
            -webkit-appearance: none;
            background-color: #fff;
            border-radius: 4px;
            border: 1px solid #acabab;
            width: 100%;
            -webkit-box-sizing: border-box;
            width: 5.2rem;
          }
          .checkDate {
            font-size: 0.16rem;
            margin-left: 0.06rem;
          }
          .el-date-editor {
            margin-left: 0.2rem;
          }
          .top {
            margin-top: 0.1rem;
            .name {
              position: relative;
              width: 0.9rem;
              height: 0.33rem;
              border: 1px solid #7b7b7b;
              font-size: 0.16rem;
              color: #4a4a4a;
              line-height: 0.33rem;
              text-align: center;
              border-top-left-radius: 0.04rem;
              border-top-right-radius: 0.04rem;
              border-bottom-color: #fff;
              background-color: #fff;
            }
            .checkImg {
              margin-top: -0.01rem;
              width: 6.22rem;
              // height: 2.71rem;
              border: 1px solid #7b7b7b;
              border-top-right-radius: 0.04rem;
              border-bottom-right-radius: 0.04rem;
              border-bottom-left-radius: 0.04rem;
              padding: 0.2rem;
              .lxSb {
                width: 5.86rem;
                height: 2.35rem;
                border-radius: 0.05rem;
                background-image: url("../../../../static/images/fw_upImg1.jpg");
                background-size: contain;
                cursor: pointer;
                .lxSbfile {
                  width: 100%;
                  height: 100%;
                  opacity: 0;
                  cursor: pointer;
                }
              }
              .lxsupserSb {
                width: 5.86rem;
                //   height: 2.35rem;
                position: relative;
                .info {
                  width: 5.86rem;
                  height: 0.32rem;
                  border-bottom: 1px solid #b0afaf;
                  line-height: 0.3rem;
                  .text {
                    position: absolute;
                    font-size: 0.16rem;
                    color: #4a4a4a;
                    top: -0.05rem;
                  }
                  .addBtn {
                    float: right;
                    width: 1.28rem;
                    height: 0.33rem;
                    border: 1px solid #dadada;
                    border-radius: 0.04rem;
                    cursor: pointer;
                    text-align: center;
                    font-size: 0.16rem;
                    line-height: 0.3rem;
                    color: #272727;
                    transform: translateY(-0.1rem);
                    &:hover {
                      color: #fff;
                      background-color: #4fa4ff;
                    }
                    .lxSbfile {
                      position: absolute;
                      width: 1.28rem;
                      height: 0.33rem;
                      right: 0;
                      opacity: 0;
                      cursor: pointer;
                    }
                  }
                }
                .imgLook {
                  div {
                    margin-left: -0.2rem;
                    height: 4.2rem;
                    img {
                      width: 1.22rem;
                      height: 1.22rem;
                      float: left;
                      margin-top: 0.19rem;
                      margin-left: 0.27rem;
                    }
                  }
                }
              }
            }
          }
          .bottom {
            margin-top: 0.2rem;
            .name {
              color: #4a4a4a;
              position: relative;
              width: 0.9rem;
              height: 0.33rem;
              font-size: 0.16rem;
              line-height: 0.33rem;
              text-align: center;
              background-color: #fff;
            }
            .bz {
              border: 1px solid #7b7b7b;
              border-radius: 0.05rem;
            }
          }
        }
        .el-dialog__footer {
          background-color: #f9f9f9;
          border-top: 1px solid #dedede;
          border-bottom-left-radius: 0.05rem;
          border-bottom-right-radius: 0.05rem;
          button {
            width: 0.98rem;
            border: 1px solid #d4ad40;
            transform: translateY(0.05rem);
            border-radius: 0.02rem;
            margin-right: 0.2rem;
            font-size: 0.15rem;
            line-height: 0.24rem;
          }
          .uploadingBtn {
            background-color: #ffd14f;
            color: #fff;
          }
          .closeBtn {
            border-color: #dadada;
            background-color: #fff;
          }
        }
      }
    }
    #lookInfo {
      .el-dialog {
        margin-top: 10vh !important;
        border-radius: 0.1rem;
        min-height: 5rem;
        .el-dialog__header {
          background-color: #5fb6ff;
          border-top-left-radius: 0.1rem;
          border-top-right-radius: 0.1rem;
          height: 0.57rem;
          position: relative;
          .el-dialog__title {
            font-weight: bolder;
            font-size: 0.2rem;
            color: #fff;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
          .el-dialog__close {
            font-size: 0.26rem;
            color: #fff;
            // font-weight: bold;
          }
        }
        .lookInfoFenye {
          position: absolute;
          left:50%;
          transform: translateX(-50%);
          bottom: .2rem;
        }
      }
    }
  }
}
</style>
