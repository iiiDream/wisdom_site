<template>
  <div id="PM">
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
          <li>
            <router-link to="/projectManagement" class="active">项目管理</router-link>
          </li>
          <li>
            <router-link to="/gongsiManagement">公司管理</router-link>
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
    <!-- 搜索框 -->
    <div class="search-box">
      <div class="top-bg">
        <span>我的项目</span>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="输入项目名称进行搜索">
        <a class="search el-icon-search"></a>
      </div>
    </div>
    <!-- 主体 -->
    <div class="main">
      <div class="main-box">
        <div class="main-title">
          总共
          <span>6</span>
          个智慧工地项目
        </div>
        <ul>
          <li>
            <div class="li-left"></div>
            <div class="li-middle">
              <div class="li-title">
                <router-link to="/home">深圳湾创新科技中心</router-link>
                <i></i>
              </div>
              <div class="li-message">
                <span>深圳市 南山区</span>
                <i></i>
                <span>2015年开建-2019年建成</span>
                <i></i>
                <span>房屋建筑工程</span>
                <i></i>
                <span>项目编号10145</span>
              </div>
              <div class="li-jsUnit">
                建设单位：
                <span>深圳市投资控股有限公司</span>
              </div>
              <div class="li-sgUnit">
                施工单位：
                <span>中建二局第三建筑工程有限公司</span>
              </div>
              <div class="li-module">
                <el-button type="primary" plain size="mini">视频监控</el-button>
                <el-button type="warning" plain size="mini">环境监测</el-button>
                <el-button type="success" plain size="mini">安全施工</el-button>
                <el-button type="danger" plain size="mini">两制管理</el-button>
              </div>
            </div>
            <div class="li-right">
              <div class="area">
                <span>面 积:</span>
                <span>
                  <span class="color">483969</span>
                  ㎡
                </span>
              </div>
              <div class="limit">
                <span>合同额:</span>
                <span>
                  <span class="color">190242</span>
                  万
                </span>
              </div>
            </div>
          </li>
          <li>
            <div class="li-left"></div>
            <div class="li-middle">
              <div class="li-title">
                <router-link to="/home">深圳湾创新科技中心</router-link>
                <i></i>
              </div>
              <div class="li-message">
                <span>深圳市 南山区</span>
                <i></i>
                <span>2015年开建-2019年建成</span>
                <i></i>
                <span>房屋建筑工程</span>
                <i></i>
                <span>项目编号10145</span>
              </div>
              <div class="li-jsUnit">
                建设单位：
                <span>深圳市投资控股有限公司</span>
              </div>
              <div class="li-sgUnit">
                施工单位：
                <span>中建二局第三建筑工程有限公司</span>
              </div>
              <div class="li-module">
                <el-button type="primary" plain size="mini">视频监控</el-button>
                <el-button type="warning" plain size="mini">环境监测</el-button>
                <el-button type="success" plain size="mini">安全施工</el-button>
                <el-button type="danger" plain size="mini">两制管理</el-button>
              </div>
            </div>
            <div class="li-right">
              <div class="area">
                <span>面 积:</span>
                <span>
                  <span class="color">483969</span>
                  ㎡
                </span>
              </div>
              <div class="limit">
                <span>合同额:</span>
                <span>
                  <span class="color">190242</span>
                  万
                </span>
              </div>
            </div>
          </li>
          <li>
            <div class="li-left"></div>
            <div class="li-middle">
              <div class="li-title">
                <router-link to="/home">深圳湾创新科技中心</router-link>
                <i></i>
              </div>
              <div class="li-message">
                <span>深圳市 南山区</span>
                <i></i>
                <span>2015年开建-2019年建成</span>
                <i></i>
                <span>房屋建筑工程</span>
                <i></i>
                <span>项目编号10145</span>
              </div>
              <div class="li-jsUnit">
                建设单位：
                <span>深圳市投资控股有限公司</span>
              </div>
              <div class="li-sgUnit">
                施工单位：
                <span>中建二局第三建筑工程有限公司</span>
              </div>
              <div class="li-module">
                <el-button type="primary" plain size="mini">视频监控</el-button>
                <el-button type="warning" plain size="mini">环境监测</el-button>
                <el-button type="success" plain size="mini">安全施工</el-button>
                <el-button type="danger" plain size="mini">两制管理</el-button>
              </div>
            </div>
            <div class="li-right">
              <div class="area">
                <span>面 积:</span>
                <span>
                  <span class="color">483969</span>
                  ㎡
                </span>
              </div>
              <div class="limit">
                <span>合同额:</span>
                <span>
                  <span class="color">190242</span>
                  万
                </span>
              </div>
            </div>
          </li>
          <li>
            <div class="li-left"></div>
            <div class="li-middle">
              <div class="li-title">
                <router-link to="/home">深圳湾创新科技中心</router-link>
                <i></i>
              </div>
              <div class="li-message">
                <span>深圳市 南山区</span>
                <i></i>
                <span>2015年开建-2019年建成</span>
                <i></i>
                <span>房屋建筑工程</span>
                <i></i>
                <span>项目编号10145</span>
              </div>
              <div class="li-jsUnit">
                建设单位：
                <span>深圳市投资控股有限公司</span>
              </div>
              <div class="li-sgUnit">
                施工单位：
                <span>中建二局第三建筑工程有限公司</span>
              </div>
              <div class="li-module">
                <el-button type="primary" plain size="mini">视频监控</el-button>
                <el-button type="warning" plain size="mini">环境监测</el-button>
                <el-button type="success" plain size="mini">安全施工</el-button>
                <el-button type="danger" plain size="mini">两制管理</el-button>
              </div>
            </div>
            <div class="li-right">
              <div class="area">
                <span>面 积:</span>
                <span>
                  <span class="color">483969</span>
                  ㎡
                </span>
              </div>
              <div class="limit">
                <span>合同额:</span>
                <span>
                  <span class="color">190242</span>
                  万
                </span>
              </div>
            </div>
          </li>
          <li>
            <div class="li-left"></div>
            <div class="li-middle">
              <div class="li-title">
                <router-link to="/home">深圳湾创新科技中心</router-link>
                <i></i>
              </div>
              <div class="li-message">
                <span>深圳市 南山区</span>
                <i></i>
                <span>2015年开建-2019年建成</span>
                <i></i>
                <span>房屋建筑工程</span>
                <i></i>
                <span>项目编号10145</span>
              </div>
              <div class="li-jsUnit">
                建设单位：
                <span>深圳市投资控股有限公司</span>
              </div>
              <div class="li-sgUnit">
                施工单位：
                <span>中建二局第三建筑工程有限公司</span>
              </div>
              <div class="li-module">
                <el-button type="primary" plain size="mini">视频监控</el-button>
                <el-button type="warning" plain size="mini">环境监测</el-button>
                <el-button type="success" plain size="mini">安全施工</el-button>
                <el-button type="danger" plain size="mini">两制管理</el-button>
              </div>
            </div>
            <div class="li-right">
              <div class="area">
                <span>面 积:</span>
                <span>
                  <span class="color">483969</span>
                  ㎡
                </span>
              </div>
              <div class="limit">
                <span>合同额:</span>
                <span>
                  <span class="color">190242</span>
                  万
                </span>
              </div>
            </div>
          </li>
          <li>
            <div class="li-left"></div>
            <div class="li-middle">
              <div class="li-title">
                <router-link to="/home">深圳湾创新科技中心</router-link>
                <i></i>
              </div>
              <div class="li-message">
                <span>深圳市 南山区</span>
                <i></i>
                <span>2015年开建-2019年建成</span>
                <i></i>
                <span>房屋建筑工程</span>
                <i></i>
                <span>项目编号10145</span>
              </div>
              <div class="li-jsUnit">
                建设单位：
                <span>深圳市投资控股有限公司</span>
              </div>
              <div class="li-sgUnit">
                施工单位：
                <span>中建二局第三建筑工程有限公司</span>
              </div>
              <div class="li-module">
                <el-button type="primary" plain size="mini">视频监控</el-button>
                <el-button type="warning" plain size="mini">环境监测</el-button>
                <el-button type="success" plain size="mini">安全施工</el-button>
                <el-button type="danger" plain size="mini">两制管理</el-button>
              </div>
            </div>
            <div class="li-right">
              <div class="area">
                <span>面 积:</span>
                <span>
                  <span class="color">483969</span>
                  ㎡
                </span>
              </div>
              <div class="limit">
                <span>合同额:</span>
                <span>
                  <span class="color">190242</span>
                  万
                </span>
              </div>
            </div>
          </li>
        </ul>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="6"
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
      currentPage: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="less">
#PM {
  // 顶部样式
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
  // 搜索栏样式
  .search-box {
    height: 1.4rem;
    padding-top: 0.16rem;
    background-color: #f8f8f8;
    border-bottom: 1px solid #efefef;
    .top-bg {
      width: 10.8rem;
      height: 0.42rem;
      margin-left: 4.2rem;
      background-image: url("../../../static/images/PM-top.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      span {
        color: #fff;
        font-size: 0.16rem;
        line-height: 0.42rem;
        margin-left: 0.15rem;
      }
    }
    .search-bar {
      width: 7.06rem;
      height: 0.46rem;
      margin-left: 4.2rem;
      margin-top: 0.14rem;
      input {
        width: 6.6rem;
        height: 0.4rem;
        padding-left: 0.16rem;
        font-size: 0.16rem;
      }
      .search {
        display: inline-block;
        height: 0.4rem;
        width: 0.4rem;
        background-color: #3278b6;
        transform: translateY(0.01rem);
        text-align: center;
        line-height: 0.4rem;
        color: #fff;
        font-size: 0.2rem;
      }
    }
  }
  // 主体样式
  .main {
    background-color: #fff;
    min-height: 718px;
    .main-box {
      width: 10.8rem;
      margin: 0 auto;
      padding-top: 0.34rem;
      .main-title {
        height: 0.34rem;
        color: #4a4a4a;
        font-size: 0.14rem;
        font-weight: bolder;
        border-bottom: 0.02rem solid #d4d4d4;
        span {
          color: #3278b6;
          font-size: 0.18rem;
        }
      }
      > ul {
        li {
          height: 2.12rem;
          border-bottom: 0.02rem solid #d4d4d4;
          padding-top: 0.18rem;
          .li-left {
            float: left;
            width: 2.1rem;
            height: 1.66rem;
            background-image: url("../../..//static/images/homePage-temp.jpg");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-right: 0.38rem;
          }
          .li-middle {
            float: left;
            width: 6.41rem;
            .li-title {
              margin-bottom: 0.18rem;
              height: 0.2rem;
              a {
                color: #4a4a4a;
                font-size: 0.2rem;
                height: 0.2rem;
              }
              i {
                display: inline-block;
                width: 0.42rem;
                height: 0.25rem;
                background-image: url("../../../static/images/PM-emphasis.png");
                background-position: center center;
                background-repeat: no-repeat;
                background-size: contain;
                transform: translateY(0.03rem);
              }
            }
            .li-message {
              color: #a5a5a5;
              font-size: 0.12rem;
              height: 0.12rem;
              margin-bottom: 0.18rem;
              i {
                display: inline-block;
                height: 0.1rem;
                width: 0.01rem;
                background-color: #a5a5a5;
                margin: auto 0.1rem;
              }
            }
            .li-jsUnit,
            .li-sgUnit {
              color: #a5a5a5;
              font-size: 0.14rem;
              height: 0.14rem;
              margin-bottom: 0.18rem;
              span {
                color: #4a4a4a;
              }
            }
          }
          .li-right {
            float: left;
            width: 1.91rem;
            .area,
            .limit {
              display: flex;
              justify-content: space-between;
              .color {
                color: #64a8d6;
              }
            }
          }
        }
      }
    }
  }
  // 分页样式
  .block {
    display: inline-block;
    width: auto;
    margin-top: 0.3rem;
    margin-left: 50%;
    transform: translate(-50%);
    .el-pagination {
      height: 0.4rem;
      li {
        min-width: 0.28rem;
        border-radius: 0.02rem;
        margin: 0 0.05rem;
      }
      li.active {
        background-color: #409eff;
        color: #fff;
      }
    }
  }
  // 占位符样式
  ::-webkit-input-placeholder {
    color: #a5a5a5;
  }
  ::-moz-placeholder {
    color: #a5a5a5;
  } /* firefox 19+ */
  :-ms-input-placeholder {
    color: #a5a5a5;
  } /* Internet Explorer 10+ */
  :-moz-placeholder {
    color: #a5a5a5;
  } /* firefox 14-18 */
}
</style>


