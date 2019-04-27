<template>
  <div id="gongsiManagement">
    <!-- 顶部通栏 -->
    <div class="top">
      <div class="nav-logo">
        <a href="#" class="logo-box"></a>
        <i class="line"></i>
      </div>
      <div class="company">深圳市市政总公司</div>
      <div class="nav">
        <ul>
          <li>
            <router-link to="/homePage">首页</router-link>
          </li>
          <li>
            <router-link to="/projectManagement">项目管理</router-link>
          </li>
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
            <div class="btn">新增公司</div>
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
      ]
    };
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
    }
  }
};
</script>

<style lang="less">
#gongsiManagement {
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
      }
    }
    .logo-box {
      display: inline-block;
      height: 0.24rem;
      width: 1.24rem;
      background-image: url("../../../static/images/login_logo.png");
      background-size: contain;
      margin-left: 0.24rem;
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
    position: absolute;
    left: 0;
    right: 0;
    top: 0.8rem;
    bottom: 0;
    padding: 0.4rem;
    background-color: #f7f7f7;
    .gongsi_list {
      float: left;
      width: 4.5rem;
      background-color: #fff;
      height: 100%;
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
        }
      }
    }
    .gongsi_info {
      width: 12.15rem;
      background-color: #fff;
      height: 100%;
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
          bottom: 0.5rem;
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
