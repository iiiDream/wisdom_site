<template>
  <div id="projectShezhi">
    <!-- 顶部通栏 -->
    <div class="top">
      <div class="nav-logo">
        <a class="logo-box"></a>
        <i class="line"></i>
      </div>
      <div class="company">深圳市市政总公司</div>
      <div class="nav">
        <ul>
          <li>
            <router-link to="/homePage">首页</router-link>
          </li>
          <!-- <li>
            <router-link to="/projectManagement">项目管理</router-link>
          </li> -->
          <li>
            <router-link to="/gongsiManagement">公司管理</router-link>
          </li>
          <li>
            <router-link to="/projectShezhi" class="active">项目管理</router-link>
          </li>
        </ul>
      </div>
      <div class="user">
        <el-dropdown>
          <a class="el-dropdown-link">
            用户名
            <i class="el-icon-arrow-down el-icon--right"></i>
          </a>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!-- 侧导航 -->
    <div class="aside">
      <ul>
        <li class="active">
          <router-link to="/projectShezhi">项目设置</router-link>
        </li>
        <li>
          <router-link to="/projectShouquan">项目授权</router-link>
        </li>
      </ul>
    </div>
    <!-- 主体 -->
    <div class="main">
      <div class="gongsi_list">
        <div class="title">公司列表</div>
        <div class="mune">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            @select="handleMenuSelect"
          >
            <el-submenu index="深圳路桥集团有限公司">
              <template slot="title">
                <span>深圳路桥集团有限公司</span>
              </template>
              <el-submenu index="深圳路桥集团有限公司1">
                <template slot="title">
                  <span>深圳路桥集团有限公司1</span>
                </template>
                <el-menu-item index="深圳路桥集团有限公司2">深圳路桥集团有限公司2</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </div>
      </div>
      <div class="gongsi_info" v-show="!projectShow">
        <div class="title">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/gongsiManagement' }">公司列表</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in currentpath" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="addgongsi">
            <div class="btn" @click="addProject">新增项目</div>
          </div>
        </div>
        <div class="table_info">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            :header-cell-style="{background:'#ecf5ff'}"
          >
            <el-table-column prop="date" label="序号" width="110" align="center"></el-table-column>
            <el-table-column prop="name" label="项目名称"></el-table-column>
            <el-table-column prop="status" label="状态" width="280">
              <template slot-scope="scope">
                <!-- <span :class="scope.row.status=='有效'?'green':'yellow'">{{scope.row.status}}</span> -->
                <span v-if="scope.row.status=='待审核'" class="yellow">{{scope.row.status}}</span>
                <span v-else-if="scope.row.status=='运行中'" class="green">{{scope.row.status}}</span>
                <span v-else class="red">{{scope.row.status}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="240">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button
                  type="text"
                  size="small"
                  v-if="scope.row.status=='待审核'"
                  @click="remove"
                >移除</el-button>
                <el-button
                  type="text"
                  size="small"
                  v-else-if="scope.row.status=='运行中'"
                  @click="isLookMiyao = true"
                >查看秘钥</el-button>
                <el-button
                  type="text"
                  size="small"
                  v-else-if="scope.row.status=='未审核'"
                  @click="audit = true"
                >提交审核</el-button>
                <el-button type="text" size="small" v-else @click="audit = true">重新审核</el-button>
                <el-button
                  type="text"
                  size="small"
                  v-if="scope.row.status=='运行中'"
                  @click="audit = true"
                >新增秘钥</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 对话框 -->
          <el-dialog title="某某某项目" :visible.sync="audit" width="30%">
            <div class="audit">
              <ul class="left">
                <li>
                  <span>对接地址</span>
                  <span style="color:red">*</span>
                </li>
                <li>
                  <span>同步编号</span>
                  <span style="color:red">*</span>
                </li>
                <li>
                  <span>授权账号</span>
                  <span style="color:red">*</span>
                </li>
                <li>
                  <span>授权秘钥</span>
                  <span style="color:red">*</span>
                </li>
                <li>
                  <span>序列号</span>
                  <span style="color:red">*</span>
                </li>
              </ul>
              <ul class="right">
                <li>
                  <el-select v-model="duijieAddress" placeholder="请先选择对接地址">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </li>
                <li>
                  <el-input v-model="tongbuNum"></el-input>
                </li>
                <li>
                  <el-input v-model="shouquanUser"></el-input>
                </li>
                <li>
                  <el-input v-model="shouquanPassword"></el-input>
                </li>
                <li>
                  <el-input v-model="xvlieNum"></el-input>
                </li>
              </ul>
            </div>
            <span slot="footer" class="dialog-footer">
              <div class="audit_btn" @click="sed">确 认 提 交</div>
            </span>
          </el-dialog>
          <el-dialog title="某某某项目" :visible.sync="isLookMiyao" width="30%">
            <div class="audit">
              <ul class="left">
                <li>
                  <span>对接地址</span>
                  <span style="color:red">*</span>
                </li>
                <li>
                  <span>同步编号</span>
                  <span style="color:red">*</span>
                </li>
                <li>
                  <span>授权账号</span>
                  <span style="color:red">*</span>
                </li>
                <li>
                  <span>授权秘钥</span>
                  <span style="color:red">*</span>
                </li>
                <li>
                  <span>序列号</span>
                  <span style="color:red">*</span>
                </li>
              </ul>
              <ul class="right">
                <li>
                  <el-select v-model="duijieAddress" placeholder="请先选择对接地址">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </li>
                <li>
                  <el-input v-model="tongbuNum" :disabled="true"></el-input>
                </li>
                <li>
                  <el-input v-model="shouquanUser" :disabled="true"></el-input>
                </li>
                <li>
                  <el-input v-model="shouquanPassword" :disabled="true"></el-input>
                </li>
                <li>
                  <el-input v-model="xvlieNum" :disabled="true"></el-input>
                </li>
              </ul>
            </div>
            <span slot="footer" class="dialog-footer">
              <div class="audit_btn" @click="isLookMiyao = false">关 闭</div>
            </span>
          </el-dialog>
        </div>
        <div class="fenye">
          <el-pagination background layout="prev, pager, next" :total="50"></el-pagination>
        </div>
      </div>
      <div class="add-project" v-show="projectShow">
        <!-- 头部 -->
        <div class="title">
          <a @click="addProject">返回</a>
          <div class="text">新增项目</div>
        </div>
        <!-- 输入区域 -->
        <ul>
          <li>
            <div class="left-box">
              <div class="text-box">
                项目名称
                <span class="required">*</span>
              </div>
              <input type="text">
            </div>
            <div class="right-box">
              <div class="text-box">
                项目简称
                <span class="required">*</span>
              </div>
              <input type="text">
            </div>
          </li>
          <li>
            <div class="left-box">
              <div class="text-box">
                项目类别
                <span class="required">*</span>
              </div>
              <el-select v-model="type" placeholder="请选择">
                <el-option
                  v-for="item in typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="right-box">
              <div class="text-box">
                项目状态
                <span class="required">*</span>
              </div>
              <input type="text">
            </div>
          </li>
          <li>
            <div class="left-box">
              <div class="text-box">
                管理人数
                <span class="required">*</span>
              </div>
              <input type="text">
            </div>
            <div class="right-box time">
              <div class="text-box">
                开工时间
                <span class="required">*</span>
              </div>
              <el-date-picker
                v-model="startWorkTime"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </li>
          <li>
            <div class="left-box time">
              <div class="text-box">
                合同竣工时间
                <span class="required">*</span>
              </div>
              <el-date-picker
                v-model="completedTime"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
            <div class="right-box">
              <div class="text-box">
                施工许可证
                <span class="required">*</span>
              </div>
              <input type="text">
            </div>
          </li>
          <li>
            <div class="left-box">
              <div class="text-box">
                总包单位
                <span class="required">*</span>
              </div>
              <input type="text">
            </div>
            <div class="right-box">
              <div class="text-box">
                监理企业
                <span class="required">*</span>
              </div>
              <input type="text">
            </div>
          </li>
          <li>
            <div class="left-box">
              <div class="text-box">
                建筑面积
                <span class="required">*</span>
              </div>
              <input type="text">
            </div>
            <div class="right-box">
              <div class="text-box">
                工程造价
                <span class="required">*</span>
              </div>
              <input type="text">
            </div>
          </li>
          <li>
            <div class="left-box">
              <div class="text-box">
                结构类型
                <span class="required">*</span>
              </div>
              <input type="text">
            </div>
            <div class="right-box">
              <div class="text-box">
                负责人
                <span class="required">*</span>
              </div>
              <input type="text">
            </div>
          </li>
          <li>
            <div class="left-box">
              <div class="text-box">
                联系电话
                <span class="required">*</span>
              </div>
              <input type="text">
            </div>
            <div class="right-box">
              <div class="text-box">
                项目位置
                <span class="required">*</span>
              </div>
              <el-cascader
                :options="regionOptions"
                v-model="selectedRegion"
                @change="handleChange">
              </el-cascader>
            </div>
          </li>
          <li>
            <div class="text-box">
              详细地址
              <span class="required">*</span>
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              地图定位
              <span class="required">*</span>
            </div>
            <div class="location-text">你选择的经纬度为：{{longitude}}，{{latitude}}</div>
          </li>
          <li class="map-box">
            <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :events="events" class="amap-demo">
            </el-amap>
          </li>
          <li>
            <div class="left-box">
              <div class="text-box">
                安全报检编号
              </div>
              <input type="text">
            </div>
            <div class="right-box">
              <div class="text-box">
                质量报检编号
              </div>
              <input type="text">
            </div>
          </li>
          <li>
            <div class="left-box">
              <div class="text-box">
                施工机构代码
              </div>
              <input type="text">
            </div>
            <div class="right-box">
              <div class="text-box">
                监理机构代码
              </div>
              <input type="text">
            </div>
          </li>
          <li>
            <div class="left-box">
              <div class="text-box">
                监督机构
              </div>
              <input type="text">
            </div>
            <div class="right-box">
              <div class="text-box">
                建设单位
              </div>
              <input type="text">
            </div>
          </li>
          <li>
            <div class="left-box">
              <div class="text-box">
                设计单位
              </div>
              <input type="text">
            </div>
            <div class="right-box">
              <div class="text-box">
                勘察单位
              </div>
              <input type="text">
            </div>
          </li>
          <li>
            <div class="text-box">
              备注
            </div>
            <input type="text">
          </li>
          <li class="upload-pic">
            <div class="text-box">
              项目效果图
            </div>
            <a>点击上传</a>
          </li>
        </ul>
        <a class="affirm-btn" @click="temp">
          确认
        </a>
      </div>
    </div>
  </div>
</template>

<script>
let amapManager = new VueAMap.AMapManager()
export default {
  data() {
    return {
      // 面包屑
      currentpath: [],
      // 弹框判断条件
      audit: false,
      // 判断点击的是否是查看秘钥
      isLookMiyao: false,
      // 选择框内容
      options: [
        {
          value: "深圳市大暴雨",
          label: "深圳市大暴雨"
        }
      ],
      // 对接地址
      duijieAddress: "",
      // 同步地址
      tongbuNum: "",
      // 授权账号
      shouquanUser: "",
      // 授权秘钥
      shouquanPassword: "",
      // 序列号
      xvlieNum: "",
      tableData: [
        {
          date: "1",
          name: "河湾项目管理员",
          status: "待审核"
        },
        {
          date: "2",
          name: "河湾项目管理员",
          status: "运行中"
        },
        {
          date: "3",
          username: "abc123123",
          name: "河湾项目管理员",
          status: "未审核"
        },
        {
          date: "4",
          username: "123123abc",
          name: "河湾项目管理员",
          status: "审核未通过"
        }
      ],
      projectShow: false, // 显示项目列表或新增项目表
      amapManager,
      zoom: 12,
      center: [114.014129,22.571492],
      events: {
          init: (o) => {
          },
          'moveend': () => {
          },
          'zoomchange': () => {
          },
          'click': (e) => {
              // console.log(e.lnglat)
              this.longitude = e.lnglat.lng
              this.latitude = e.lnglat.lat
              // console.log(this.longitude+':'+this.latitude)
          }
      },
      longitude: '', // 经度
      latitude: '', // 纬度
      typeOptions: [{
          value: '选项1',
          label: '类型1'
        }, {
          value: '选项2',
          label: '类型2'
        }, {
          value: '选项3',
          label: '类型3'
        }, {
          value: '选项4',
          label: '类型4'
        }, {
          value: '选项5',
          label: '类型5'
        }], // 项目类别选项
      type: '', // 项目类别当前选中
      startWorkTime: '', // 开工时间
      completedTime: '', // 竣工时间
      regionOptions: [{
        value: '广东省',
        label: '广东省',
        children: [{
          value: '深圳市',
          label: '深圳市',
          children: [{
            value: '罗湖区',
            label: '罗湖区'
          },{
            value: '南山区',
            label: '南山区'
          },{
            value: '福田区',
            label: '福田区'
          },{
            value: '龙岗区',
            label: '龙岗区'
          },{
            value: '龙华区',
            label: '龙华区'
          },{
            value: '宝安区',
            label: '宝安区'
          }]
        }]
      }], // 地区列表
      selectedRegion: [], // 当前选中地区
    }
  },
  methods: {
    // 三个面包屑
    handleOpen(key, keyPath) {
      this.currentpath = keyPath;
    },
    handleClose(key, keyPath) {
      this.currentpath = keyPath;
    },
    handleMenuSelect(key, keyPath) {
      this.currentpath = keyPath;
    },

    sed() {
      if (
        this.duijieAddress == "" ||
        this.tongbuNum == "" ||
        this.shouquanUser == "" ||
        this.shouquanPassword == "" ||
        this.xvlieNum == ""
      ) {
        this.$message.error("带 * 号内容不能为空！");
      } else {
        this.$message({
          message: "提交成功！",
          type: "success"
        });
        this.audit = false;
        // this.duijieAddress = "";
        // this.tongbuNum = "";
        // this.shouquanUser = "";
        // this.shouquanPassword = "";
        // this.xvlieNum = "";
      }
    },

    // 移除事件
    remove() {
      this.$confirm("此操作将永久移除该项目 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    // 切换新增公司页面与列表页面
    addProject() {
      this.projectShow = !this.projectShow
      if (this.projectShow) {
        $('.gongsi_list').css('height',$('.add-project').css('height'))
      } else {
        $('.gongsi_list').css('height',$('.gongsi_info').css('height'))
      }
    },

    // 地区选择框监听事件
    handleChange(value) {
        console.log(value)
    },

    temp() {
      let f
      for(let i=0;++i<101;console.log(i%5?f||i:f+'Buzz'))f=i%3?'':'Fizz'
    }
  }
};
</script>

<style lang="less">
#projectShezhi {
  .green {
    color: #5be4a5;
  }
  .yellow {
    color: #f5c98d;
  }
  .red {
    color: #f00;
  }
  .top {
    width: 19.2rem;
    height: 0.8rem;
    background-image: url("../../../static/images/homePage_nav.png");
    background-size: cover;
    padding-top: 0.24rem;
    > div {
      float: left;
    }
    .nav-logo {
      height: 0.24rem;
      .line {
        display: inline-block;
        width: 0.01rem;
        height: 0.18rem;
        margin-left: 0.16rem;
        margin-bottom: 0.03rem;
        background-color: #fff;
        vertical-align: text-top;
      }
    }
    .logo-box {
      display: inline-block;
      height: 0.45rem;
      width: 1.24rem;
      background-image: url("../../../static/images/yzt-whiteLogo.png");
      background-size: contain;
      margin-left: 0.24rem;
      vertical-align: top;
    }
    .company {
      margin-left: 0.16rem;
      font-size: 0.18rem;
      color: #fff;
      line-height: 0.24rem;
      vertical-align: text-top;
    }
    .nav {
      margin-left: 0.99rem;
      ul li {
        float: left;
        a {
          display: block;
          font-size: 0.2rem;
          color: #fff;
          padding-left: 0.16rem;
          padding-right: 0.16rem;
          height: 0.56rem;
          margin-left: 0.17rem;
        }
        .active {
          border-bottom: 0.04rem solid #fff;
        }
      }
    }
    .user {
      float: right;
      margin-right: 0.36rem;
      a {
        font-size: 0.2rem;
        color: #fff;
      }
    }
  }
  .aside {
    width: 1.77rem;
    background-color: #fff;
    position: absolute;
    height: 9.6rem;
    top: 0.8rem;
    bottom: 0;
    z-index: 1;
    ul {
      padding-top: 0.4rem;
      li {
        a {
          display: block;
          text-align: center;
          width: 1.77rem;
          height: 0.62rem;
          line-height: 0.62rem;
          font-size: 0.18rem;
        }
      }
      .active {
        width: 1.91rem;
        background-image: url("../../../static/images/homePage_leftbtn.png");
        a {
          color: #fff;
        }
      }
    }
  }

  .main {
    position: relative;
    min-height: 10rem;
    padding: 0.4rem;
    height: auto;
    background-color: #f7f7f7;
    .gongsi_list {
      float: left;
      width: 4.5rem;
      background-color: #fff;
      height: 9.2rem;      
      margin-left: 1.77rem;
      .title {
        margin-top: 0.3rem;
        margin-left: 0.3rem;
        font-size: 0.22rem;
        font-weight: bolder;
      }
      .mune {
        margin-top: 0.2rem;
        li {
          font-size: 0.18rem;
        }
        .el-submenu__title {
          font-size: 0.18rem;
        }
        .el-submenu__icon-arrow {
          color: #6cbbff;
          font-weight: bolder;
          font-size: 0.18rem;
          transform: rotate(-90deg);
        }
        .is-opened {
          >.el-submenu__title {
            .el-submenu__icon-arrow {
              transform: rotate(0deg) !important;
            }
          }
        }
      }
    }
    .el-dialog {
      input {
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        width: 4.4rem;
      }
      .el-input__inner:focus {
        outline: none;
        border-color: #409eff;
      }
    }
    .gongsi_info {
      width: 12.15rem;
      background-color: #fff;
      height: 9.2rem;
      margin-left: 6.3rem;
      padding: 0.3rem 0.2rem 0.2rem 0.2rem;
      .title {
        .el-breadcrumb__item {
          font-size: 0.16rem;
        }
        .btn {
          height: 0.4rem;
          width: 1.28rem;
          border-radius: 0.03rem;
          position: absolute;
          right: 0.7rem;
          top: 0.6rem;
          text-align: center;
          line-height: 0.4rem;
          color: #fff;
          font-size: 0.18rem;
          cursor: pointer;
          background-color: #6cbbff;
          background-image: url("../../../static/images/homePage_rightbtn.png");
          transition: 1.5s all;
          &:hover {
            background-image: none;
            background-color: #5cb3f8;
            transition: 1.5s all;
          }
        }
      }
      .table_info {
        width: 60%;
        float: left;
        position: absolute;
        top: 1.2rem;
        thead {
          .cell {
            color: #000;
            font-size: 0.18rem;
          }
        }
        tbody {
          .cell {
            font-size: 0.16rem;
            span {
              font-size: 0.16rem;
            }
          }
        }
      }
      .fenye {
        .el-pagination {
          position: absolute;
          right: 0.6rem;
          bottom: 1rem;
          .number {
            background-color: #fff;
          }
          .active {
            background-color: #6cbbff;
          }
        }
      }
    }
    .audit {
      display: flex;
      justify-content: space-around;
      .right {
        margin-top: -0.32rem;
        li {
          margin-top: 0.32rem;
        }
      }
      .left {
        margin-top: -0.34rem;
        li {
          margin-top: 0.48rem;
          font-size: 0.16rem;
          text-align: center;
        }
      }
    }
    .el-dialog__headerbtn {
      font-size: 0.24rem;
      font-weight: bold;
    }
    .el-dialog__title {
      font-weight: bold;
      font-weight: 0.18rem;
    }
    .el-dialog__footer {
      padding: none !important;
    }
    .el-dialog {
      border-radius: 0.1rem;
    }
    .audit_btn {
      position: absolute;
      width: 100%;
      bottom: -0.5rem;
      font-size: 0.22rem;
      font-weight: bolder;
      color: #cac9c9;
      text-align: center;
      line-height: 0.8rem;
      cursor: pointer;
      background-color: #f7f7f7;
      height: 0.8rem;
      left: 0;
      border-bottom-right-radius: 0.1rem;
      border-bottom-left-radius: 0.1rem;
      border-top: 1px solid #c2c0c0;
      transition: .5s all;
      &:hover {
        color: #409eff;
      }
    }
    .add-project {
      width: 12.15rem;
      background-color: #fff;
      margin-left: 6.3rem;
      padding-bottom: .35rem;
      .title {
        width: 10.4rem;
        height: .51rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        border-bottom: .01rem solid #ededed;
        a {
          color: #333;
          width: .6rem;
          height: .3rem;
          font-size: .15rem;
          text-align: center;
          margin-top: .1rem;
          border-radius: .05rem;
          line-height: .28rem;
          border: .01rem solid #d0d0d0;
        }
        a:hover {
          color: #fff;
          border: none;
          line-height: .3rem;
          background: linear-gradient(to right, #479bff, #6cc4ff);
        }
        .text {
          color: #4a4a4a;
          font-size: .2rem;
          line-height: .5rem;
          font-weight: bolder;
        }
      }
      ul {
        padding-top: .26rem;
        li {
          height: .4rem;
          padding-left: .5rem;
          margin-bottom: .3rem;
          .left-box {
            float: left;
            width: 5.38rem;
            .text-box {
              width: 1.7rem;
              color: #4a4a4a;
              font-size: .16rem;
              text-align: right;
              line-height: .4rem;
              padding-right: .3rem;
              display: inline-block;
              .required {
                color: #f00;
              }
            }
            input {
              width: 3.68rem;
              height: .4rem;
              padding-left: .1rem;
              border-radius: .05rem;
              border: .01rem solid #acabab;
            }
          }
          .right-box {
            float: left;
            width: 5.38rem;
            .text-box {
              width: 1.7rem;
              color: #4a4a4a;
              font-size: .16rem;
              text-align: right;
              line-height: .4rem;
              padding-right: .3rem;
              display: inline-block;
              .required {
                color: #f00;
              }
            }
            input {
              width: 3.68rem;
              height: .4rem;
              padding-left: .1rem;
              border-radius: .05rem;
              border: .01rem solid #acabab;
            }
          }
          .text-box {
            width: 1.7rem;
            color: #4a4a4a;
            font-size: .16rem;
            text-align: right;
            line-height: .4rem;
            padding-right: .3rem;
            display: inline-block;
            .required {
              color: #f00;
            }
          }
          input {
            width: 9.09rem;
            height: .4rem;
            padding-left: .1rem;
            border-radius: .05rem;
            border: .01rem solid #acabab;
          }
          .location-text {
            font-size: .16rem;
            display: inline-block;
          }
          .time {
            .el-input__icon {
              display: none;
            }
          }
        }
        .map-box {
          padding: 0;
          width: 9.08rem;
          height: 5.32rem;
          margin-left: 2.2rem;
        }
        .upload-pic {
          height: 1.31rem;
          a {
            width: 1.31rem;
            height: 1.31rem;
            color: #acabab;
            font-size: .18rem;
            text-align: center;
            line-height: 1.31rem;
            display: inline-block;
            background-image: url('../../../static/images/imaginary-line.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
          }
        }
      }
      .affirm-btn {
        width: 2rem;
        height: .6rem;
        color: #fff;
        display: block;
        margin: 0 auto;
        font-size: .23rem;
        line-height: .6rem;
        text-align: center;
        transition: all .5s;
        border-radius: .05rem;
        background: linear-gradient(to right, #5cb3f8, #98e2fb);
      }
      .affirm-btn:hover {
        background: linear-gradient(to right, #479bff, #6cc4ff);
      }
    }
  }
}
</style>
