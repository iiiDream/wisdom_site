<template>
  <div id="gongsiManagement">
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
        <li class="active">
          <a>公司设置</a>
        </li>
        <li>
          <router-link to="/gongsiShouquan">公司权限设置</router-link>
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
      <div class="gongsi_info" v-show="companyShow">
        <div class="title">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/gongsiManagement' }">公司列表</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in currentpath" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="addgongsi">
            <div class="btn" @click="addCompany">新增公司</div>
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
            <el-table-column prop="name" label="公司名称"></el-table-column>
            <el-table-column label="操作" width="200">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button type="text" size="small" @click="kaoqing = true ">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="fenye">
          <el-pagination background layout="prev, pager, next" :total="50"></el-pagination>
        </div>
      </div>
      <div class="add-company" v-show="!companyShow">
        <!-- 头部 -->
        <div class="title">
          <a @click="addCompany">返回</a>
          <div class="text">新增公司</div>
        </div>
        <!-- 输入区域 -->
        <ul>
          <li>
            <div class="text-box">
              企业名称
              <span class="required">*</span>
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              简称
              <span class="required">*</span>
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              注册资金
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              单位类型
              <span class="required">*</span>
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              法人代表
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              社会统一信用代码
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              组织机构代码
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              基本账户开户银行
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              基本账户银行账号
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              开户地址
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              单位详细地址
              <span class="required">*</span>
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              负责人
              <span class="required">*</span>
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              电话
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              电子邮箱
            </div>
            <input type="text">
          </li>
          <li>
            <div class="text-box">
              备注
            </div>
            <input type="text">
          </li>
        </ul>
        <a class="affirm-btn">
          确认
        </a>
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
          date: "1226",
          name: "东明大道（南光高速～东长路）市政工程2标段"
        },
        {
          date: "1226",
          name: "东明大道（南光高速～东长路）市政工程2标段"
        }
      ],
      companyShow: true, // 显示公司列表或新增公司表
    };
  },
  created() {
    // this.synchronizationHeight()
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

    // 切换新增公司页面与列表页面
    addCompany() {
      this.companyShow = !this.companyShow
      if (!this.companyShow) {
        $('.gongsi_list').css('height',$('.add-company').css('height'))
      } else {
        $('.gongsi_list').css('height',$('.gongsi_info').css('height'))
      }
    },
  }
};
</script>

<style lang="less">
#gongsiManagement {
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
    .add-company {
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
        padding-top: .35rem;
        li {
          height: .5rem;
          margin-bottom: .35rem;
          .text-box {
            width: 3.3rem;
            color: #4a4a4a;
            font-size: .18rem;
            text-align: right;
            line-height: .5rem;
            padding-right: .3rem;
            display: inline-block;
            .required {
              color: #f00;
            }
          }
          input {
            width: 6rem;
            height: .5rem;
            padding-left: .1rem;
            border-radius: .05rem;
            border: .01rem solid #acabab;
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
