<template>
    <div class="homePage">
        <!-- 顶部通栏 -->
        <div class="top">
            <div class="nav-logo">
                <a href="#" class="logo-box"></a>
                <i class="line"></i>
            </div>
            <div class="company">
                深圳市市政总公司
            </div>
            <div class="nav">
                <ul>
                    <li>
                        <router-link to="/homePage" class="active">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/projectManagement">项目管理</router-link>
                    </li>
                </ul>
            </div>
            <div class="user">
                <el-dropdown>
                    <a class="el-dropdown-link">
                        用户名<i class="el-icon-arrow-down el-icon--right"></i>
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
                <el-amap ref="map" vid="amapDemo" :amap-manager="AMapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
                </el-amap>
            </div>
            <!-- 搜索框 -->
            <div class="search-bar">
                <input type="text" placeholder="输入信息名称进行搜索">
                <a href="#">
                    <i></i>
                </a>
            </div>
            <!-- 公司名称/地区 -->
            <div class="menu">
                <div class="company">
                    <el-select v-model="companyValue" placeholder="请选择">
                        <el-option
                            v-for="item in companyOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="district">
                    <el-select v-model="districtValue" placeholder="请选择">
                        <el-option
                            v-for="item in districtOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <!-- 侧拉框 -->
            <div class="side-nav" :class="sidNavClass">
                <a href="javascript:void(0);" @click="sideNavState"></a>
                <div class="title">
                    总共<span>1</span>个智慧工地项目
                </div>
                <ul>
                    <li>
                        <router-link to="/home">
                            <div class="img">
                                <div class="subImg"></div>
                            </div>
                            <div class="datum">
                                <div class="title">
                                    深圳湾创新科技中心
                                </div>
                                <p>
                                    深圳市 南山区
                                </p>
                                <p>
                                    中建二局第三建筑工程有限公司
                                </p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { AMapManager } from 'vue-amap';
export default {
    data() {
        return {
            // 地图配置项
            AMapManager,
            // amapManager,
            zoom: 12,
            center: [114.083372,22.544146],
            events: {
              init: (o) => {
                    console.log(o.getCenter())
                    console.log(this.$refs.map.$$getInstance())
                    o.getCity(result => {
                        console.log(result)
                    })
              },
              'moveend': () => {
              },
              'zoomchange': () => {
              },
              'click': (e) => {
                alert('map clicked');
              }
            },
            // plugin: ['ToolBar', {
            //     pName: 'MapType',
            //     defaultType: 0,
            //     events: {
            //         init(o) {
            //             console.log(o);
            //         }
            //     }
            // }],
            plugin: [{
                pName: 'ToolBar',
                events: {
                    init(instance) {
                        console.log(instance);
                    }
                }
            }],

            //公司名称
            companyOptions: [{
              value: '选项1',
              label: '中国建筑第二工程局有限公司'
            }],
            companyValue: '中国建筑第二工程局有限公司',

            // 地区
            districtOptions: [{
                value: '选项1',
                label: '全国'
            }],
            districtValue: '全国',

            // 状态储存
            sideNavState: this.enter,
            sidNavClass: 'enter',
        }
    },
    methods: {
        enter(){
            this.sidNavClass = 'come'
            $('.side-nav').animate({
                right:'-4.2rem'
            })
            $('.menu').animate({
                right: '.17rem'
            })
            this.sideNavState = this.come
        },
        come(){
            this.sidNavClass = 'enter'
            $('.side-nav').animate({
                right:'0'
            })
            $('.menu').animate({
                right: '4.37rem'
            })
            this.sideNavState = this.enter
        }
    },
}
</script>

<style scoped>
/* 顶部样式 */
    .top {
        width: 19.2rem;
        height: .8rem;
        background-image: url('../../../static/images/homePage_nav.png');
        background-size: contain;
        padding-top: .24rem;
    }
    .top>div {
        float: left;
    }
    .top .nav-logo {
        height: .24rem;
    }
    .top .logo-box {
        display: inline-block;
        height: .24rem;
        width: 1.24rem;
        background-image: url('../../../static/images/login_logo.png');
        background-size: contain;
        margin-left: .24rem;
    }
    .top .nav-logo .line {
        display: inline-block;
        width: .01rem;
        height: .18rem;
        margin-left: .16rem;
        margin-bottom: .03rem;
        background-color: #fff;
    }
    .top .company {
        margin-left: .16rem;
        font-size: .18rem;
        color: #fff;
        line-height: .24rem;
        vertical-align: text-top;
    }
    .top .nav {
        margin-left: .99rem;
    }
    .top .nav ul li {
        float: left;
    }
    .top .nav li a {
        display: block;
        font-size: .2rem;
        color: #fff;
        padding-left: .16rem;
        padding-right: .16rem;
        height: .56rem;
        margin-left: .17rem;
    }
    .top .nav li a.active {
        border-bottom: .04rem solid #fff;
    }
    .top .user {
        float: right;
        margin-right: .36rem;
    }
    .top .user a {
        font-size: .2rem;
        color: #fff;
    }
    /* 主体区域样式 */
    .main {
        position: relative;
    }
    .amap-demo {
        height: 10rem;
    }
    .main .search-bar {
        position: absolute;
        width: 3.66rem;
        height: .46rem;
        background-image: url('../../../static/images/homePage-inputBg.png');
        background-size: contain;
        top: .15rem;
        left: .1rem;
        padding-left: .17rem;
    }
    .main .search-bar input {
        font-size: .14rem;
        height: .4rem;
        width: 3rem;
        padding: 0;
        transform: translateY(.01rem);
    }
    .main .search-bar a {
        width: .45rem;
        height: .4rem;
        display: inline-block;
        transform: translateY(-.09rem);
    }
    .main .search-bar a i {
        width: .49rem;
        height: .17rem;
        display: inline-block;
        background-image: url('../../../static/images/homePage-search.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        transform: translateY(.11rem);
    }
    .main .menu {
        position: absolute;
        width: 3.66rem;
        height: .46rem;
        background-image: url('../../../static/images/homePage-inputBg.png');
        background-size: contain;
        top: .15rem;
        right: 4.37rem;
        padding-left: .1rem;
    }
    .main .menu>div {
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
        width: 4.47rem;
        height: 10rem;
        background-position: right center;
        background-repeat: no-repeat;
        background-size: contain;
        top: 0;
        right: 0;
        padding-left: .27rem;
    }
    .enter {
        background-image: url('../../../static/images/homePage-enter.png');
    }
    .come {
        background-image: url('../../../static/images/homePage-come.png');
    }
    .main .side-nav> a {
        width: .2rem;
        height: .5rem;
        position: absolute;
        left: .1rem;
        top: 50%;
        transform: translateY(-50%);
    }
    .main .side-nav>.title {
        width: 4.2rem;
        height: .5rem;
        background-color: #f8f8f8;
        border-bottom: .01rem solid #d4d4d4;
        font-size: .14rem;
        line-height: .5rem;
        padding-left: .18rem;
        transform:translate(.03rem);
    }
    .main .side-nav>.title span {
        color: #3278b6;
        font-size: .2rem;
    }
    .main .side-nav li a {
        display: block;
        width: 4.2rem;
        height: 1.31rem;
        padding-top: .1rem;
        padding-left: .32rem;
        border-bottom: .01rem solid #d4d4d4;
    }
    .main .side-nav li a .img {
        display: inline-block;
        width: 1.11rem;
        height: 1.11rem;
        background-image: url('../../../static/images/homePage-temp.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    .main .side-nav li a .subImg {
        position: absolute;
        width: .51rem;
        height: .51rem;
        left: 0;
        top: 0;
        background-image: url('../../../static/images/homePage-emphasis.png');
        z-index: 10;
    }
    .main .side-nav li a .datum {        
        display: inline-block;
        padding-left: .32rem;
        transform: translateY(-.3rem);
    }
    .main .side-nav li a .datum .title {
        color: #4a4a4a;
        font-size: .14rem;
        font-weight: bolder;
    }
    .main .side-nav li a .datum p {
        font-size: .12rem;
        color: #a5a5a5;
    } 
    /* 占位符样式 */
    ::-webkit-input-placeholder { color:#a5a5a5;}
    ::-moz-placeholder { color:#a5a5a5;} /* firefox 19+ */
    :-ms-input-placeholder { color:#a5a5a5;} /* Internet Explorer 10+ */
    :-moz-placeholder { color:#a5a5a5;} /* firefox 14-18 */
</style>
