<template>
  <div class="indexBody">
    <div class="header">
      <div class="header-main container clearfix">
        <div class="city">
          深圳
          <span class="temp">22℃</span>
        </div>
        <ul class="nav">
          <li class="active">
            <router-link to="/green">项目总况</router-link>
          </li>
          <li>
            <a href="javascript:;">全景监控</a>
          </li>
          <li>
            <a href="javascript:;">进度管理</a>
          </li>
          <li>
            <a href="javascript:;">质量管理</a>
          </li>
          <li>
            <a href="javascript:;">安全管理</a>
          </li>
          <li>
            <a href="javascript:;">劳务管理</a>
          </li>
          <li>
            <a href="javascript:;">绿色施工</a>
          </li>
          <li>
            <a href="javascript:;">工程资料</a>
          </li>
        </ul>
        <router-link to="/home">
          <h3 class="head-title">{{project}}</h3>
        </router-link>
        <div class="date-time">
          <span class="d-date">2019-1-1</span>
          <span class="d-time">17：00</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      project: ""
    };
  },
  created() {
    this.getName()
  },
  methods: {
    getName() {
      this.$axios
        .get("/APP/XMPage/XmData.ashx?method=XMData&xmid=281")
        .then(res => {
          this.project = res.data.project;
        });
    }
  }
};
</script>

<style scoped>
.indexBody {
  background: url("../../../static/images/index.jpg") no-repeat center center;
  position: relative;
  top: 0;
}
.header {
  height: 48px;
  line-height: 48px;
}
.header-main {
  position: relative;
}
.header .city {
  float: left;
  font-size: 18px;
  color: #3375fe;
}
.header .city span {
  font-size: 18px;
  color: #3375fe;
  padding-left: 18px;
}
.header .nav {
  position: absolute;
  width: 1476px;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
.header .head-title {
  position: absolute;
  display: _none;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 60%;
  background: url("../../../static/images/title_bg.png") no-repeat center;
  background-size: cover;
  width: 440px;
  text-align: center;
  height: 56px;
  line-height: 48px;
  font-size: 30px;
  color: #ffffff;
  font-weight: bold;
}

.header .date-time {
  float: right;
  font-size: 14px;
  color: #3375fe;
  font-weight: bold;
}

.header .d-date {
  padding-right: 30px;
}

.header .nav {
  overflow: hidden;
  background: url("../../../static/images/nav_bg.jpg") no-repeat center;
  background-size: 100% 100%;
}
.header .nav li {
  float: left;
  width: 132px;
  text-align: center;
  background: url("../../../static/images/li_bg.png") no-repeat right center;
}
.header .nav li:nth-child(5){
    background: url("../../../static/images/xiexian.png") no-repeat right center;
}
.header .nav li:nth-child(6){
    background: url("../../../static/images/xiexian.png") no-repeat right center;
}
.header .nav li:nth-child(7){
    background: url("../../../static/images/xiexian.png") no-repeat right center;
}
.header .nav li a {
  display: block;
  width: 100%;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  font-weight: bold;
  color: #3375fe;
}
.header .nav li:nth-child(4) {
  margin-right: 402px;
  background: none;
}
.header .nav li:last-child {
  background: none;
}
.active{
  background-color: #3375fe;
}
</style>
