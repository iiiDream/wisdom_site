<template>
  <div id="gongsiShouquan">
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
            <router-link to="/gongsiManagement" class="active">公司管理</router-link>
          </li>
          <li>
            <router-link to="/projectShezhi">项目管理</router-link>
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
        <li>
          <router-link to="/gongsiManagement">公司设置</router-link>
        </li>
        <li class="active">
          <a>公司权限设置</a>
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
      <div class="gongsi_info">
        <div class="title">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/gongsiManagement' }">公司列表</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in currentpath" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="addgongsi">
            <div class="btn" @click="newRole=true">新增角色</div>
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
            <el-table-column prop="username" label="账号" width="180"></el-table-column>
            <el-table-column prop="name" label="公司名称"></el-table-column>
            <el-table-column prop="status" label="状态" width="280">
              <template slot-scope="scope">
                <span :class="scope.row.status=='有效'?'green':'yellow'">{{scope.row.status}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="200">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button type="text" size="small" @click="kaoqing = true ">权限设置</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 新增角色 -->
          <el-dialog title="新增角色" :visible.sync="newRole" width="30%">
            <div class="audit">
              <ul class="left">
                <li>
                  <span class="align">账号</span>
                  <span style="color:red">*</span>
                </li>
                <li>
                  <span class="align">名称</span>
                  <span style="color:red">*</span>
                </li>
                <li>
                  <span class="align">密码</span>
                  <!-- <span style="color:red">*</span> -->
                </li>
                <li>
                  <span class="align">手机</span>
                  <span style="color:red">*</span>
                </li>
                <li>
                  <span class="align">角色设置</span>
                  <span style="color:red">*</span>
                </li>
                <li>
                  <span class="align">公司权限</span>
                  <span>：</span>
                </li>
                <li>
                  <span class="align">项目权限</span>
                  <span>：</span>
                </li>
              </ul>
              <ul class="right">
                <li>
                  <input type="text">
                </li>
                <li>
                  <input type="text">
                </li>
                <li>
                  <input type="text">
                </li>
                <li>
                  <input type="text">
                </li>
                <li>
                  <el-select v-model="role" placeholder="设置角色">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </li>
                <li>
                  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                  <el-checkbox v-model="checked1" disabled>查看</el-checkbox>
                  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                  </el-checkbox-group>
                </li>
                <li>
                  <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange2">全选</el-checkbox>
                  <el-checkbox v-model="checked1" disabled>查看</el-checkbox>
                  <el-checkbox-group v-model="checkedCities2" @change="handleCheckedCitiesChange2">
                    <el-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox>
                  </el-checkbox-group>
                </li>
              </ul>
            </div>
            <span slot="footer" class="dialog-footer">
              <div class="audit_btn" @click="affirmClick">确 认 提 交</div>
            </span>
          </el-dialog>
        </div>
        <div class="fenye">
          <el-pagination background layout="prev, pager, next" :total="50"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentpath: [],
      tableData: [
        {
          date: "1",
          username: "abc123123",
          name: "河湾项目管理员",
          status: "有效"
        },
        {
          date: "2",
          username: "123123abc",
          name: "河湾项目管理员",
          status: "无效"
        }
      ],
      newRole: false, // 新增角色输入框
      options: [
        {
          value: "项目管理员",
          label: "项目管理员"
        }
      ], // 角色设置
      checked1: true, // 查看权限默认为选中且不可更改
      role: '', // 角色
      checkAll: false, // 是否全选
      checkedCities: [], // 当前选中的权限
      cities: ['新增', '编辑', '删除'], // 可以选择的权限
      isIndeterminate: false, // 是否全选
      role2: '', // 角色
      checkAll2: false, // 是否全选
      checkedCities2: [], // 当前选中的权限
      cities2: ['新增', '编辑', '删除'], // 可以选择的权限
      isIndeterminate2: false, // 是否全选
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      this.currentpath = keyPath;
    },
    handleClose(key, keyPath) {
      this.currentpath = keyPath;
    },
    handleMenuSelect(key, keyPath) {
      this.currentpath = keyPath;
    },

    // 公司权限多选框
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cities : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },

    // 项目权限多选框
    handleCheckAllChange2(val) {
      this.checkedCities2 = val ? this.cities2 : [];
      this.isIndeterminate2 = false;
    },
    handleCheckedCitiesChange2(value) {
      let checkedCount = value.length;
      this.checkAll2 = checkedCount === this.cities2.length;
      this.isIndeterminate2= checkedCount > 0 && checkedCount < this.cities2.length;
    },

    // 确认提交点击事件
    affirmClick() {
      this.newRole = false
    }
  }
};
</script>

<style lang="less">
#gongsiShouquan {
  .green{
      color:#5be4a5;
  }
  .yellow{
      color: #f5c98d;
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
        .el-dialog {
          border-radius: .1rem;
          .el-dialog__body {
            padding-bottom: 0;
            padding-top: .1rem;
            .audit {
              display: flex;
              .left {
                width: 1.2rem;
                text-align: right;
                padding-right: .2rem;
                li {
                  height: .4rem;
                  line-height: .4rem;
                  position: relative;
                  margin-bottom: .2rem;
                  .align {
                    width: auto;
                    right: .1rem;;
                    position: absolute;
                  }
                }
              }
              .right {
                flex: 1;
                li {
                  height: .4rem;
                  line-height: .4rem;
                  margin-bottom: .2rem;
                  input {
                    height: .4rem;
                    width: 3.74rem;
                    padding-left: .1rem;
                    border-radius: .03rem;
                    border: .01rem solid #acabab;
                  }
                  .el-checkbox {
                    display: inline-block;
                  }
                  .el-checkbox-group {
                    display: inline-block;
                  }
                }
              }
            }
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
  }
}
</style>
