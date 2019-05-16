<template>
  <div id="fw_three">
    <div class="centent-box">
      <div class="title">工人信息</div>

      <!-- 搜索栏 -->
      <div class="search-box">
        <div class="left-box">
          <ul class="top-input">
            <li>
              <span>&#12288;&#12288;姓名：</span>
              <input type="text">
            </li>
            <li>
              <span>&#12288;证件号：</span>
              <input type="text">
            </li>
            <li>
              <span>&#12288;&#12288;工种：</span>
              <el-select v-model="professionValue" placeholder="请选择">
                <el-option
                  v-for="item in professionOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </li>
            <li>
              <span>&#12288;&#12288;班组：</span>
              <input type="text">
            </li>
          </ul>
          <ul class="bottom-input">
            <li>
              <span>&#12288;&#12288;单位：</span>
              <el-select v-model="dwValue" placeholder="请所属选择">
                <el-option
                  v-for="item in dwOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </li>
            <li>
              <span>在场状态：</span>
              <el-select v-model="statusValue" placeholder="请选择在场状态">
                <el-option
                  v-for="item in statusOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </li>
            <li>
              <span>资料属性：</span>
              <el-select v-model="sxValue" placeholder="请选择资料属性">
                <el-option
                  v-for="item in sxOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </li>
            <li style="width:3.5rem"></li>
          </ul>
        </div>
        <a class="search-button">搜索</a>
      </div>
      <!-- 主体区域 -->
      <div class="main-box">
        <!-- 功能栏 -->
        <div class="button-box">
          <a class="new">
            <i class="icon"></i>
            导出
          </a>
          <a class="derive" @click="lookAll=true">
            <i class="icon"></i>
            统计
          </a>
        </div>
        <!-- 列表 -->
        <div class="table-box">
          <el-table :data="tableData" stripe border>
            <el-table-column type="selection" width="35"></el-table-column>
            <el-table-column prop="number" label="序号" width="100"></el-table-column>
            <el-table-column prop="name" label="姓名" width="150"></el-table-column>
            <el-table-column prop="jyHt" label="简易劳动合同" width="150" align="center">
              <template slot-scope="scope">
                <i class="el-icon el-icon-close red-color" v-if="scope.row.jyHt=='0'"></i>
                <i class="el-icon el-icon-check green-color" v-else></i>
              </template>
            </el-table-column>
            <el-table-column prop="qrHt" label="两制确认书" width="150" align="center">
              <template slot-scope="scope">
                <i class="el-icon el-icon-close red-color" v-if="scope.row.qrHt=='0'"></i>
                <i class="el-icon el-icon-check green-color" v-else></i>
              </template>
            </el-table-column>
            <el-table-column prop="jcHt" label="进场确认书" width="150" align="center">
              <template slot-scope="scope">
                <i class="el-icon el-icon-close red-color" v-if="scope.row.jcHt=='0'"></i>
                <i class="el-icon el-icon-check green-color" v-else></i>
              </template>
            </el-table-column>
            <el-table-column prop="tcHt" label="退场确认书" width="150" align="center">
              <template slot-scope="scope">
                <i class="el-icon el-icon-close red-color" v-if="scope.row.tcHt=='0'"></i>
                <i class="el-icon el-icon-check green-color" v-else></i>
              </template>
            </el-table-column>
            <el-table-column prop="renHt" label="身份证正反面复印件" width="150" align="center">
              <template slot-scope="scope">
                <i class="el-icon el-icon-close red-color" v-if="scope.row.renHt=='0'"></i>
                <i class="el-icon el-icon-check green-color" v-else></i>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" width="150" align="center">
              <template slot-scope="scope">
                <p class="green-text" v-if="scope.row.status=='0'">齐全</p>
                <p class="red-text" v-else>未齐全</p>
              </template>
            </el-table-column>
            <el-table-column label="操作" align="right">
              <template slot-scope="scope">
                <el-button @click="openUploading('上传凭证')" type="text" size="small">上传</el-button>
                <el-button
                  @click="openLookInfo(scope.row.name)"
                  type="text"
                  size="small"
                  :info="scope"
                >点击查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <div class="paging-box">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[15, 30, 45]"
            :page-size="15"
            layout="total, sizes, prev, pager, next, jumper"
            :total="2"
          ></el-pagination>
        </div>
      </div>
      <!-- 遮罩层 -->
      <div class="shade-box" v-show="dialogShow"></div>
      <!-- 上传弹框 -->
      <div id="uploading">
        <el-dialog :title="uploadingTitle" :visible.sync="uploading" width="34.5%">
          <div>
            <span class="checkDate">
              选择类型
              <span style="color:red">*</span>
            </span>
            <el-select v-model="leixingValue" placeholder="请选择类型">
              <el-option
                v-for="item in leixingOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <br>
          <div class="top">
            <div class="name">
              上传附件
              <span style="color:red">*</span>
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
        <el-dialog :title="lookInfoTitle+'的资料'" :visible.sync="lookInfo" width="35%">
          <div class="lookInfoTable">
            <el-table :data="lookInfoTable" stripe>
              <el-table-column type="selection" width="35"></el-table-column>
              <el-table-column prop="number" label="序号" width="100" align="center"></el-table-column>
              <el-table-column prop="name" label="类型" width="280" align="left"></el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="text" size="small">重新上传</el-button>
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small" :info="scope.row">编辑</el-button>
                  <el-button type="text" size="small">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="bz">
            <p>备注：</p>
            <textarea cols="30" rows="10"></textarea>
          </div>
          <span slot="footer" class="dialog-footer">
            <button @click="lookInfo = false">确 定</button>
          </span>
        </el-dialog>
      </div>
      <!-- 统计弹框 -->
      <div id="lookAll">
        <el-dialog title="统计" :visible.sync="lookAll" width="55%">
          <div class="top">
            <div class="wai">
              <div class="text" style="border: 5px solid #55abff;">
                <p class="biaoti">劳务工总数</p>
                <p class="info">
                  <span class="num">34</span>
                  <span class="danwei">人</span>
                </p>
              </div>
            </div>
            <div class="wai">
              <div class="text" style="border: 5px solid #6fe8d2;">
                <p class="biaoti">在场劳务工数</p>
                <p class="info">
                  <span class="num">34</span>
                  <span class="danwei">人</span>
                </p>
              </div>
            </div>
            <div class="wai">
              <div class="text" style="border: 5px solid #ffb299;">
                <p class="biaoti">资料齐全人数</p>
                <p class="info">
                  <span class="num">34</span>
                  <span class="danwei">人</span>
                </p>
              </div>
            </div>
          </div>
          <div class="down">
            <div class="box">
              <div class="left">
                <p class="info">
                  <span>49</span>人
                </p>
                <p class="biaoti">资料齐全人数</p>
              </div>
              <div class="right">
                <div
                  class="quan"
                  :percentage="baifenbi1"
                  style="border: .02rem solid #fd5608;"
                  v-if="baifenbi1<80"
                >
                  <el-progress
                    type="circle"
                    :percentage="baifenbi1"
                    width="62"
                    stroke-width="4"
                    color="#fd5608"
                    v-if="baifenbi1<80"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :percentage="baifenbi1"
                    width="62"
                    stroke-width="4"
                    color="#04c366"
                    v-else
                  ></el-progress>
                </div>
                <div
                  class="quan"
                  :percentage="baifenbi1"
                  style="border: .02rem solid #04c366;"
                  v-else
                >
                  <el-progress
                    type="circle"
                    :percentage="baifenbi1"
                    width="62"
                    stroke-width="4"
                    color="#fd5608"
                    v-if="baifenbi1<80"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :percentage="baifenbi1"
                    width="62"
                    stroke-width="4"
                    color="#04c366"
                    v-else
                  ></el-progress>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="left">
                <p class="info">
                  <span>75</span>人
                </p>
                <p class="biaoti">简易劳动合同</p>
              </div>
              <div class="right">
                <div
                  class="quan"
                  :percentage="baifenbi2"
                  style="border: .02rem solid #fd5608;"
                  v-if="baifenbi2<80"
                >
                  <el-progress
                    type="circle"
                    :percentage="baifenbi2"
                    width="62"
                    stroke-width="4"
                    color="#fd5608"
                    v-if="baifenbi2<80"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :percentage="baifenbi2"
                    width="62"
                    stroke-width="4"
                    color="#04c366"
                    v-else
                  ></el-progress>
                </div>
                <div
                  class="quan"
                  :percentage="baifenbi2"
                  style="border: .02rem solid #04c366;"
                  v-else
                >
                  <el-progress
                    type="circle"
                    :percentage="baifenbi2"
                    width="62"
                    stroke-width="4"
                    color="#fd5608"
                    v-if="baifenbi2<80"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :percentage="baifenbi2"
                    width="62"
                    stroke-width="4"
                    color="#04c366"
                    v-else
                  ></el-progress>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="left">
                <p class="info">
                  <span>82</span>人
                </p>
                <p class="biaoti">两制确认书</p>
              </div>
              <div class="right">
                <div
                  class="quan"
                  :percentage="baifenbi3"
                  style="border: .02rem solid #fd5608;"
                  v-if="baifenbi3<80"
                >
                  <el-progress
                    type="circle"
                    :percentage="baifenbi3"
                    width="62"
                    stroke-width="4"
                    color="#fd5608"
                    v-if="baifenbi3<80"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :percentage="baifenbi3"
                    width="62"
                    stroke-width="4"
                    color="#04c366"
                    v-else
                  ></el-progress>
                </div>
                <div
                  class="quan"
                  :percentage="baifenbi3"
                  style="border: .02rem solid #04c366;"
                  v-else
                >
                  <el-progress
                    type="circle"
                    :percentage="baifenbi3"
                    width="62"
                    stroke-width="4"
                    color="#fd5608"
                    v-if="baifenbi3<80"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :percentage="baifenbi3"
                    width="62"
                    stroke-width="4"
                    color="#04c366"
                    v-else
                  ></el-progress>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="left">
                <p class="info">
                  <span>99</span>人
                </p>
                <p class="biaoti">进场确认书</p>
              </div>
              <div class="right">
                <div
                  class="quan"
                  :percentage="baifenbi4"
                  style="border: .02rem solid #fd5608;"
                  v-if="baifenbi4<80"
                >
                  <el-progress
                    type="circle"
                    :percentage="baifenbi4"
                    width="62"
                    stroke-width="4"
                    color="#fd5608"
                    v-if="baifenbi4<80"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :percentage="baifenbi4"
                    width="62"
                    stroke-width="4"
                    color="#04c366"
                    v-else
                  ></el-progress>
                </div>
                <div
                  class="quan"
                  :percentage="baifenbi4"
                  style="border: .02rem solid #04c366;"
                  v-else
                >
                  <el-progress
                    type="circle"
                    :percentage="baifenbi4"
                    width="62"
                    stroke-width="4"
                    color="#fd5608"
                    v-if="baifenbi4<80"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :percentage="baifenbi4"
                    width="62"
                    stroke-width="4"
                    color="#04c366"
                    v-else
                  ></el-progress>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="left">
                <p class="info">
                  <span>99</span>人
                </p>
                <p class="biaoti">退场确认书</p>
              </div>
              <div class="right">
                <div
                  class="quan"
                  :percentage="baifenbi5"
                  style="border: .02rem solid #fd5608;"
                  v-if="baifenbi5<80"
                >
                  <el-progress
                    type="circle"
                    :percentage="baifenbi5"
                    width="62"
                    stroke-width="4"
                    color="#fd5608"
                    v-if="baifenbi5<80"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :percentage="baifenbi5"
                    width="62"
                    stroke-width="4"
                    color="#04c366"
                    v-else
                  ></el-progress>
                </div>
                <div
                  class="quan"
                  :percentage="baifenbi5"
                  style="border: .02rem solid #04c366;"
                  v-else
                >
                  <el-progress
                    type="circle"
                    :percentage="baifenbi5"
                    width="62"
                    stroke-width="4"
                    color="#fd5608"
                    v-if="baifenbi5<80"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :percentage="baifenbi5"
                    width="62"
                    stroke-width="4"
                    color="#04c366"
                    v-else
                  ></el-progress>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="left">
                <p class="info">
                  <span>37</span>人
                </p>
                <p class="biaoti">身份证正反面复印件</p>
              </div>
              <div class="right">
                <div
                  class="quan"
                  :percentage="baifenbi6"
                  style="border: .02rem solid #fd5608;"
                  v-if="baifenbi6<80"
                >
                  <el-progress
                    type="circle"
                    :percentage="baifenbi6"
                    width="62"
                    stroke-width="4"
                    color="#fd5608"
                    v-if="baifenbi6<80"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :percentage="baifenbi6"
                    width="62"
                    stroke-width="4"
                    color="#04c366"
                    v-else
                  ></el-progress>
                </div>
                <div
                  class="quan"
                  :percentage="baifenbi6"
                  style="border: .02rem solid #04c366;"
                  v-else
                >
                  <el-progress
                    type="circle"
                    :percentage="baifenbi6"
                    width="62"
                    stroke-width="4"
                    color="#fd5608"
                    v-if="baifenbi6<80"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :percentage="baifenbi6"
                    width="62"
                    stroke-width="4"
                    color="#04c366"
                    v-else
                  ></el-progress>
                </div>
              </div>
            </div>
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
          name: "某某某", // 姓名
          jyHt: "0", // 简易劳动合同
          qrHt: "1", // 两制确认书
          jcHt: "1", // 进场确认书
          tcHt: "1", // 退场确认书
          renHt: "1", // 身份证正反面复印件
          status: "0" // 状态
        },
        {
          number: 2, // 序号
          name: "某某某", // 姓名
          jyHt: "0", // 简易劳动合同
          qrHt: "0", // 两制确认书
          jcHt: "1", // 进场确认书
          tcHt: "0", // 退场确认书
          renHt: "1", // 身份证正反面复印件
          status: "0" // 状态
        },
        {
          number: 3, // 序号
          name: "某某某", // 姓名
          jyHt: "1", // 简易劳动合同
          qrHt: "1", // 两制确认书
          jcHt: "1", // 进场确认书
          tcHt: "1", // 退场确认书
          renHt: "1", // 身份证正反面复印件
          status: "1" // 状态
        },
        {
          number: 4, // 序号
          name: "某某某", // 姓名
          jyHt: "0", // 简易劳动合同
          qrHt: "1", // 两制确认书
          jcHt: "0", // 进场确认书
          tcHt: "1", // 退场确认书
          renHt: "1", // 身份证正反面复印件
          status: "0" // 状态
        }
      ], // 表格数据
      currentPage: 1, // 当前页码
      dialogShow: false, // 新增单位对话框状态
      dwOptions: [
        {
          value: "选项1",
          label: "深圳市市政工程总公司"
        }
      ], // 所属参建单位选项
      dwValue: "", // 所属参建单位
      statusOptions: [
        {
          value: "选项1",
          label: "在场"
        },
        {
          value: "选项2",
          label: "不在场"
        }
      ], // 在场状态选项
      statusValue: "", // 在场状态
      sxOptions: [
        {
          value: "选项1",
          label: "齐全"
        },
        {
          value: "选项2",
          label: "未齐全"
        }
      ], // 资料属性选项
      sxValue: "", // 资料属性
      startDate: "", // 入场日期
      professionOptions: [], // 工种选项
      professionValue: "", // 工种值
      contractorOptions: [], // 所属参建单位选项
      contractorValue: "", // 所属参建单位值
      dateValue: "", // 日期
      // 上传弹框的头部文字信息
      uploadingTitle: "",
      // 查看弹框的头部文字信息
      lookInfoTitle: "",
      // 上传弹框的判断值
      uploading: false,
      // 查看弹框的判断值
      lookInfo: false,
      // 图片
      file: [],
      leixingOptions: [
        {
          value: "选项1",
          label: "简易劳动合同"
        }
      ], //选择合同类型
      leixingValue: "", //合同类型的值
      lookInfoTable: [
        {
          number: "1",
          name: "简易劳动合同"
        },
        {
          number: "2",
          name: "两制确认书"
        },
        {
          number: "3",
          name: "进场确认书"
        },
        {
          number: "4",
          name: "退场确认书"
        },
        {
          number: "5",
          name: "身份证正反面复印件"
        }
      ], //查看弹框的表格数据
      lookAll: false,
      lookAllColor: "",
      baifenbi1: 49, //资料齐全人数百分比
      baifenbi2: 75, //简易劳动合同百分比
      baifenbi3: 82, //两制确认书百分比
      baifenbi4: 90, //进场承诺书数百分比
      baifenbi5: 90, //退场承诺书数百分比
      baifenbi6: 37 //身份证百分比
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页${val}条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页：${val}`);
    },

    // 新增对话框状态切换
    dialogClick() {
      this.dialogShow = !this.dialogShow;
    },
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
#fw_three {
  .centent-box {
    border-radius: 0.04rem;
    background-color: #fff;
    box-shadow: 0 0 0.5rem -0.3rem #666;
    .title {
      font-size: 0.24rem;
      width: 100%;
      text-align: center;
      font-weight: bold;
      line-height: 0.6rem;
    }

    .search-box {
      height: 1.5rem;
      padding: 0 0.2rem;
      position: relative;
      border-bottom: 0.1rem solid #f7f7f7;
      .left-box {
        float: left;
        width: 100%;
        height: 1.4rem;
        padding-top: 0.2rem;
        ul {
          width: 100%;
          height: 0.4rem;
          display: flex;
          justify-content: space-between;
          li {
            height: 0.4rem;
            div {
              height: 0.4rem;
            }
            span {
              float: left;
              height: 0.4rem;
              font-size: 0.18rem;
              line-height: 0.4rem;
            }
            input {
              float: left;
              width: 2.6rem;
              height: 0.4rem;
              padding-left: 0.1rem;
              border-radius: 0.02rem;
              vertical-align: middle;
              border: 0.01rem solid #b6b6b6;
            }
          }
          .date {
            .el-date-editor {
              width: 2.6rem;
              height: 0.4rem;
              overflow: hidden;
              border: 0.01rem solid #b6b6b6;
              span {
                padding: 0;
                width: 0.28rem;
                padding-left: 0.1rem;
              }
              input {
                border: 0;
                width: 0.95rem;
              }
            }
          }
        }
        .bottom-input {
          margin-top: 0.2rem;
        }
      }
      .search-button {
        top: 0.8rem;
        right: 0.2rem;
        color: #fff;
        height: 0.4rem;
        width: 1.63rem;
        font-size: 0.2rem;
        text-align: center;
        position: absolute;
        transition: all 0.5s;
        line-height: 0.38rem;
        border-radius: 0.02rem;
        background-color: #ffd14f;
        border: 0.01rem solid #d4ad40;
        &:hover {
          background-color: #d4ad40;
        }
      }
    }
    .main-box {
      padding: 0.2rem 0.2rem 0.25rem 0.2rem;
      .button-box {
        height: 0.3rem;
        a {
          float: left;
          height: 0.3rem;
          color: #0090ff;
          font-size: 0.14rem;
          transition: all 0.5s;
          margin-right: 0.2rem;
          line-height: 0.28rem;
          border-radius: 0.02rem;
          padding-right: 0.09rem;
          border: 0.01rem solid #0090ff;
          &:hover {
            color: #fff;
            background-color: #0090ff;
          }
          .icon {
            width: 0.37rem;
            height: 0.28rem;
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
      .table-box {
        width: 100%;
        margin-top: 0.2rem;
        min-height: 5.6rem;
        .el-table {
          width: 16.28rem;
          // width: 100%;
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
              font-size: 0.16rem;
              .el-button {
                span {
                  font-size: 0.16rem;
                  color: #2323ff;
                  border-bottom: 1px solid #2323ff;
                }
                &:hover {
                  span {
                    font-size: 0.16rem;
                    color: #4545c5;
                    border-bottom: 1px solid #4545c5;
                  }
                }
              }
            }
          }
          .red-color {
            color: #fd5101;
            font-size: 0.3rem;
          }
          .green-color {
            color: #04c366;
            font-size: 0.3rem;
          }
          .red-text {
            color: #fd5101;
            font-size: 0.18rem;
          }
          .green-text {
            color: #04c366;
            font-size: 0.18rem;
          }
        }
      }
      .paging-box {
        width: 100%;
        height: 0.32rem;
        margin-top: 0.2rem;
        .el-pagination {
          float: right;
        }
      }
    }
    .dialog-box {
      left: 50%;
      top: 2.14rem;
      z-index: 200;
      width: 6.84rem;
      height: 4.92rem;
      overflow: hidden;
      position: absolute;
      border-radius: 0.1rem;
      transform: translate(-50%);
      background-color: #fefefe;
      .title {
        color: #fff;
        height: 0.6rem;
        font-size: 0.24rem;
        line-height: 0.6rem;
        text-align: center;
        position: relative;
        font-weight: bolder;
        background: linear-gradient(to right, #6cc4ff, #489cff);
        a {
          top: 50%;
          right: 0.2rem;
          color: #fff;
          position: absolute;
          transform: translateY(-50%);
        }
      }
      .form {
        height: 3.52rem;
        ul {
          li {
            display: flex;
            height: 0.71rem;
            padding-top: 0.3rem;
            > span {
              width: 1.85rem;
              height: 0.41rem;
              font-size: 0.16rem;
              text-align: right;
              position: relative;
              line-height: 0.41rem;
              padding-right: 0.32rem;
              display: inline-block;
              .required {
                top: -0.01rem;
                right: 0.22rem;
                color: #f00;
                position: absolute;
              }
            }
            input {
              width: 3.66rem;
              height: 0.41rem;
              padding-left: 0.1rem;
              border-radius: 0.02rem;
              border: 0.01rem solid #b1b1b1;
            }
            .el-date-editor {
              width: 3.66rem;
              height: 0.41rem;
              input {
                padding-left: 0.3rem;
              }
            }
          }
        }
      }
    }
    .shade-box {
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
      height: 100%;
      position: fixed;
      background-color: rgba(0, 0, 0, 0.5);
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
          .el-select {
            margin-left: 0.12rem;
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
        .el-table {
          width: 16.28rem;
          // width: 100%;
          th {
            padding: 0;
            div {
              color: #4a4a4a;
              height: 0.35rem;
              line-height: 0.3rem;
              background-color: #c5e8ff;
              font-size: 0.16rem;
            }
          }
          td {
            padding: 0;
            div {
              height: 0.35rem;
              color: #646464;
              line-height: 0.3rem;
              font-size: 0.16rem;
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
        }
        .bz {
          margin-top: 0.2rem;
          p {
            font-size: 0.16rem;
            color: #000;
          }
          textarea {
            width: 100%;
            border: 1px solid #dedede;
            border-radius: 0.05rem;
          }
        }
        .el-dialog__footer {
          background-color: #f8f8f8;
          border-top: 0.01rem solid #dedede;
          border-bottom-left-radius: 0.1rem;
          border-bottom-right-radius: 0.1rem;
          button {
            color: #fff;
            display: block;
            width: 1.63rem;
            height: 0.49rem;
            margin: 0 auto;
            font-size: 0.2rem;
            margin-top: 0.1rem;
            text-align: center;
            line-height: 0.47rem;
            transition: all 0.5s;
            border-radius: 0.02rem;
            background-color: #ffd14f;
            border: 0.01rem solid #d9b759;
            &:hover {
              background-color: #d9b759;
            }
          }
        }
      }
    }
    #lookAll {
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
        .top {
          display: flex;
          margin-left: 0.3rem;
        .wai{
            margin-left: 1.43rem;
            width: 1.4rem;
            height: 1.4rem;
            border-radius: 50%;
            text-align: center;
            border: .08rem solid #f7f7f7;
          }
          .text {
            width: 1.3rem;
            height: 1.3rem;
            border-radius: 50%;
            text-align: center;
            font-size: 0.16rem;
            box-shadow: 0px 0px 0px 8px #f7f7f7 inset;
            transform: translate(-0.03rem,-0.03rem);
            .biaoti {
              margin-top: 0.32rem;
            }
            .num {
              font-size: 0.22rem;
              font-weight: bold;
            }
          }
        }
        .down {
          margin-top: 0.26rem;
          display: flex;
          flex-wrap: wrap;
          margin-left: 0.55rem;
          margin-bottom: 0.4rem;
          .box {
            display: flex;
            margin-top: 0.36rem;
            margin-left: 0.2rem;
            width: 2.75rem;
            height: 1.06rem;
            border: 1px solid #f6f6f6;
            border-radius: 0.1rem;
            box-shadow: 0px 0.05rem 0.15rem rgba(141, 150, 236, 0.192);
            .left {
              width: 50%;
              height: 100%;
              text-align: left;
              padding-left: 0.24rem;
              padding-top: 0.3rem;
              font-size: 0.14rem;
              .info {
                font-weight: bold;
                span {
                  font-size: 18px;
                }
              }
            }
            .right {
              width: 50%;
              height: 100%;
              padding-top: 0.12rem;
              padding-left: 0.4rem;
              .quan {
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
                text-align: center;
                .el-progress-circle {
                  transform: translateY(0.07rem);
                }
                .el-progress__text {
                  margin-top: 0.07rem;
                  font-size: 0.16rem !important;
                  // font-weight: bold;
                  // color:#fd5608;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
