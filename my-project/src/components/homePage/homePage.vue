<template>
  <div class="homePage" id="homePage">
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
            <router-link to="/homePage" class="active">首页</router-link>
          </li>
          <!-- <li>
            <router-link to="/projectManagement">项目管理</router-link>
          </li> -->

          <li>
            <router-link to="/companyGuanLi">公司管理</router-link>
          </li>
          <li>
            <router-link to="/projectGuanLi">项目管理</router-link>
          </li>

          <!-- <li>
            <router-link to="/gongsiManagement">公司管理</router-link>
          </li>
          <li>
            <router-link to="/projectShezhi">项目管理</router-link>
          </li> -->
        </ul>
      </div>
      <div class="user">
        <el-dropdown trigger="click">
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
    <!-- 内容 -->
    <div class="main">
      <!-- 地图 -->
      <div class="amap-page-container">
        <el-amap
          ref="map"
          vid="amapDemo"
          :amap-manager="amapManager"
          :center="center"
          :zoom="zoom"
          :plugin="plugin"
          :events="events"
          class="amap-demo"
        ></el-amap>
      </div>
      <!-- 搜索框 -->
      <div class="search-bar">
        <input type="text" placeholder="输入信息名称进行搜索">
        <a href="#">
          <i></i>
        </a>
      </div>
      <!-- 公司名称/地区 -->
      <!-- <div class="menu">
        <div class="company">
          <el-select v-model="companyValue" placeholder="请选择">
            <el-option
              v-for="item in companyOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="district">
          <el-select v-model="districtValue" placeholder="请选择">
            <el-option
              v-for="item in districtOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div> -->
      <!-- 侧拉框 -->
      <div class="side-nav" :class="sidNavClass">
        <a href="javascript:void(0);" @click="sideNavState"></a>
        <div class="title">
          总共
          <span>1</span>个智慧工地项目
        </div>
        <!-- <ul>
          <li>
            <router-link to="/home">
              <div class="img">
                <div class="subImg"></div>
              </div>
              <div class="datum">
                <div class="title">深圳湾创新科技中心</div>
                <p>深圳市 南山区</p>
                <p>中建二局第三建筑工程有限公司</p>
              </div>
            </router-link>
          </li>
        </ul>-->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <a>
                <div class="img">
                  <div class="subImg"></div>
                </div>
                <div class="datum">
                  <div class="title">深圳市市政总有限公司</div>
                  <p>深圳市 南山区</p>
                  <p>中建二局第三建筑工程有限公司</p>
                </div>
              </a>
            </template>
            <el-submenu index="1-1" style="pandding-left: 1rem;">
              <template slot="title" style="pandding-left: 1rem">
                <a>
                  <div class="img">
                    <div class="subImg"></div>
                  </div>
                  <div class="datum">
                    <div class="title">深圳市市政总隧道分公司</div>
                    <p>深圳市 南山区</p>
                    <p>中建二局第三建筑工程有限公司</p>
                  </div>
                </a>
              </template>
              <el-submenu index="1-1-1" style="pandding-left: 1rem;" class="project">
                <template slot="title" style="pandding-left: 1rem">
                  <router-link to="/home">
                    <div class="img">
                      <div class="subImg"></div>
                    </div>
                    <div class="datum">
                      <div class="title">试点项目</div>
                      <p>深圳市 南山区</p>
                      <p>中建二局第三建筑工程有限公司</p>
                    </div>
                    <div class="state yellow-color">待审核</div>
                  </router-link>
                </template>
              </el-submenu>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
// import { amapManager } from 'vue-amap';
let amapManager = new VueAMap.AMapManager();
export default {
  data() {
    return {
      // 地图配置项
      // AMapManager,
      amapManager,
      zoom: 12,
      center: [114.083372, 22.544146],
      events: {
        init: o => {
          console.log(o.getCenter());
          console.log(this.$refs.map.$$getInstance());
          // o.getCity(result => {
          //     console.log(result)
          // })
          let marker = new AMap.Marker({
            position: [113.983372, 22.644146],
            title: "深圳湾创新科技中心",
            label: {
              content: "深圳湾创新科技中心",
              offset: new AMap.Pixel(-45, -24)
            }
            // content: ' ',
          });
          marker.setMap(o);
        },
        moveend: () => {},
        zoomchange: () => {},
        click: e => {
          alert("map clicked");
        }
      },
      // plugin: ['ToolBar', {
      //     pName: 'MapType',
      //     // defaultType: 0,
      //     events: {
      //         init(o) {
      //             console.log(o);
      //         }
      //     }
      // }],
      plugin: [
        {
          pName: "ToolBar",
          direction: false,
          events: {
            init(instance) {
              console.log(instance);
            }
          }
        }
      ],

      //公司名称
      companyOptions: [
        {
          value: "选项1",
          label: "中国建筑第二工程局有限公司"
        }
      ],
      companyValue: "中国建筑第二工程局有限公司",

      // 地区
      districtOptions: [
        {
          value: "选项1",
          label: "全国"
        }
      ],
      districtValue: "全国",

      // 状态储存
      sideNavState: this.enter,
      sidNavClass: "enter"
    };
  },
  methods: {
    enter() {
      this.sidNavClass = "come"
      $(".side-nav").animate({
        right: "-5.8rem"
      },1000)
      this.sideNavState = this.come
    },
    come() {
      this.sidNavClass = "enter"
      $(".side-nav").animate({
        right: "0"
      },1000)
      this.sideNavState = this.enter
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
};
</script>

<style lang="less">
#homePage {
  .green-color {
    color: #5be4a5;
  }
  .yellow-color {
    color: #f5c98d;
  }
  .red-color {
    color: #f00;
  }
  .top {
    width: 19.2rem;
    height: 0.8rem;
    padding-top: 0.24rem;
    background-size: cover;
    background: linear-gradient(to right, #6cc4ff, #489cff);
  }
  .top > div {
    float: left;
  }
  .top .nav-logo {
    height: 0.24rem;
  }
  .top .logo-box {
    display: inline-block;
    height: 0.45rem;
    width: 1.24rem;
    background-image: url("../../../static/images/yzt-whiteLogo.png");
    background-size: contain;
    margin-left: 0.24rem;
    vertical-align: top;
  }
  .top .nav-logo .line {
    display: inline-block;
    width: 0.01rem;
    height: 0.18rem;
    margin-left: 0.16rem;
    margin-bottom: 0.03rem;
    background-color: #fff;
    vertical-align: text-top;
  }
  .top .company {
    margin-left: 0.16rem;
    font-size: 0.18rem;
    color: #fff;
    line-height: 0.24rem;
    vertical-align: text-top;
    text-shadow: .02rem .02rem .02rem #666;
  }
  .top .nav {
    margin-left: 0.99rem;
  }
  .top .nav ul li {
    float: left;
  }
  .top .nav li a {
    display: block;
    font-size: 0.2rem;
    color: #fff;
    padding-left: 0.16rem;
    padding-right: 0.16rem;
    height: 0.56rem;
    margin-left: 0.17rem;
  }
  .top .nav li a.active {
    border-bottom: 0.04rem solid #fff;
  }
  .top .user {
    float: right;
    margin-right: 0.36rem;
  }
  .top .user a {
    font-size: 0.2rem;
    color: #fff;
  }
  /* 主体区域样式 */
  .main {
    position: relative;
    height: 10rem;
    overflow: hidden;
  }
  .amap-demo {
    height: 10rem;
  }
  .main .search-bar {
    position: absolute;
    width: 3.66rem;
    height: 0.46rem;
    background-image: url("../../../static/images/homePage-inputBg.png");
    background-size: contain;
    top: 0.15rem;
    left: 0.7rem;
    padding-left: 0.17rem;
  }
  .main .search-bar input {
    font-size: 0.14rem;
    height: 0.4rem;
    width: 3rem;
    padding: 0;
    transform: translateY(0.01rem);
  }
  .main .search-bar a {
    width: 0.45rem;
    height: 0.4rem;
    display: inline-block;
    transform: translateY(-0.09rem);
  }
  .main .search-bar a i {
    width: 0.49rem;
    height: 0.17rem;
    display: inline-block;
    background-image: url("../../../static/images/homePage-search.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(0.11rem);
  }
  .main .menu {
    position: absolute;
    width: 3.66rem;
    height: 0.46rem;
    background-image: url("../../../static/images/homePage-inputBg.png");
    background-size: contain;
    top: 0.15rem;
    right: 4.37rem;
    padding-left: 0.1rem;
  }
  .main .menu > div {
    display: inline-block;
  }
  .main .menu .company .el-select {
    width: 2.38rem;
  }
  .main .menu .district .el-select {
    width: 1.18rem;
  }
  .main .side-nav {
    position: absolute;
    width: 6.07rem;
    height: 10.2rem;
    background-position: right center;
    background-repeat: no-repeat;
    background-size: contain;
    top: 0;
    right: 0;
    padding-left: 0.27rem;
  }
  .enter {
    background-image: url("../../../static/images/homePage-come.png");
  }

  .come {
    background-image: url("../../../static/images/homePage-enter.png");
  }
  .main .side-nav > a {
    width: 0.2rem;
    height: 0.5rem;
    position: absolute;
    left: 0.1rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .main .side-nav > .title {
    width: 5.93rem;
    height: 0.5rem;
    background-color: #f8f8f8;
    border-bottom: 0.01rem solid #d4d4d4;
    font-size: 0.14rem;
    line-height: 0.5rem;
    padding-left: 0.18rem;
    transform: translate(-0.02rem);
  }
  .main .side-nav > .title span {
    color: #3278b6;
    font-size: 0.2rem;
  }
  .el-submenu {
    height: 1rem;
    .el-submenu__title {
      height: 100%;
      border-bottom: 0.01rem solid #d4d4d4;
      .el-submenu__icon-arrow {
        color: #6cbbff;
        font-weight: bolder;
        font-size: 0.18rem;
        transform: rotate(-90deg);
      }
      a {
        display: block;
        width: 100%;
        height: 1rem;
        position: relative;
        padding-top: 0.11rem;
        // padding-left: 0.8rem;
        .img {
          display: inline-block;
          width: 0.6rem;
          height: 0.6rem;
          background-image: url("../../../static/images/homePage-temp.jpg");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          // transform: translateY(-0.3rem);
          .subImg {
            position: absolute;
            width: 0.29rem;
            height: 0.29rem;
            left: 0;
            top: 0;
            background-image: url("../../../static/images/homePage-emphasis.png");
            background-size: contain;
            z-index: 10;
          }
        }
        .datum {
          display: inline-block;
          padding-left: 0.2rem;
          // transform: translateY(-0.3rem);
          line-height: 0.25rem;
        }
        .state {
          top: 50%;
          right: .32rem;
          font-size: .12rem;
          position: absolute;
          transform: translateY(-50%);
        }
      }
    }
  }
  .project {
    .el-submenu__icon-arrow {
      display: none;
    }
  }
  .is-opened {
    >.el-submenu__title {
      .el-submenu__icon-arrow {
        transform: rotate(0deg) !important;
      }
    }
  }
  .main .side-nav li a .datum .title {
    color: #4a4a4a;
    font-size: 0.14rem;
    font-weight: bolder;
  }
  .main .side-nav li a .datum p {
    font-size: 0.12rem;
    color: #a5a5a5;
  }
  /* 占位符样式 */
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
