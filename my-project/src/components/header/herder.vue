<template>
  <div class="indexBody">
    <div class="header">
      <div class="header-main container clearfix">
        <div class="city" v-if="weather.length > 0">
          {{weather[0].results[0].currentCity}}
          <span class="temp" v-if="weather.length > 0">{{weather[0].results[0].weather_data[0].temperature}}</span>
        </div>
        <ul class="nav">
          <li v-on:click="active = '/home'">
            <div class="Lactive-box" v-show="active=='/home'">
              <img src="../../../static/images/Lactive.png" alt="" class="Lactive-img">
              <span>项目总况</span>
            </div>
            <router-link to="/home">项目总况</router-link>
          </li>
          <li v-on:click="active = '/labour'">
            <div class="Lactive-box" v-show="active=='/labour'">
              <img src="../../../static/images/Lactive.png" alt="" class="Lactive-img">
              <span>劳务管理</span>
            </div>
            <router-link to="/labour">劳务管理</router-link>
          </li>
          <li  v-on:click="active = '/green'">
            <div class="Lactive-box" v-show="active=='/green'">
              <img src="../../../static/images/Lactive.png" alt="" class="Lactive-img">
              <span>绿色施工</span>
            </div>
            <router-link to="/green">绿色施工</router-link>
          </li>
          <li  v-on:click="active = '/safety'">
            <div class="Lactive-box" v-show="active.indexOf('/safety')!=-1" style="left:-.04rem">
              <img src="../../../static/images/Lactive.png" alt="" class="Lactive-img">
              <span style="padding-right:.15rem">安全管理</span>
            </div>
            <router-link to="/safety">安全管理</router-link>
          </li>
          <li  v-on:click="active = 5">
            <div class="Lactive-box" v-show="active==5" style="left:.04rem">
              <img src="../../../static/images/Ractive.png" alt="" class="Lactive-img">
              <span style="padding-right:.23rem">全景监控</span>
            </div>
            <router-link to="/unopen">全景监控</router-link>
          </li>
          <li  v-on:click="active = 6">
            <div class="Lactive-box" v-show="active==6">
              <img src="../../../static/images/Ractive.png" alt="" class="Lactive-img">
              <span>进度管理</span>
            </div>
            <router-link to="/unopen">进度管理</router-link>
          </li>
          <li  v-on:click="active = 7">
            <div class="Lactive-box" v-show="active==7">
              <img src="../../../static/images/Ractive.png" alt="" class="Lactive-img">
              <span>质量管理</span>
            </div>
            <router-link to="/unopen">质量管理</router-link>
          </li>
          <li  v-on:click="active = 8">
            <div class="Lactive-box" v-show="active==8">
              <img src="../../../static/images/Ractive.png" alt="" class="Lactive-img">
              <span>工程资料</span>
            </div>
            <router-link to="/unopen">工程资料</router-link>
          </li>
        </ul>
        <router-link to="/home" v-on:click.native="active = 1">
          <h2 class="head-title">{{project}}</h2>
        </router-link>
        <div class="date-time">
          <span class="d-date" v-if="weather.length > 0">{{weather[0].date}}</span>
          <span class="d-time">{{time}}</span>
          <!-- {{moment().forat('h:mm:ss')}} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment"
export default {
  data() {
    return {
      project: "",
      weather: "",
      time: {},
      timeId: "",
      active: "/home",
    };
  },
  created() {
    this.getName()
    this.getWeather()
    this.setTime()
    this.setActive()
  },
  methods: {
    getName() {
      this.$axios
        .get("/APP/XMPage/XmData.ashx?method=XMData&xmid=281")
        .then(res => {
          this.project = res.data.project;
        });
    },
    getWeather() {
      this.$axios.get("/APP/XMPage/XmData.ashx?method=XMData&xmid=281").then(res=>{
        // console.log(res.data.weather)
        this.weather = res.data.weather
      })
    },
    setTime() {
      this.timeId = setInterval(()=>{
        this.time = moment().format("h:mm:ss")
      },1000)
    },
    setActive() {
      this.active = this.$route.path
      console.log()
    }
  }
};
</script>

<style scoped>
.indexBody {
     /* background: url("../../../static/images/index.jpg") no-repeat center center; */
     position: relative;
     top: 0;
}
 .header {
     height: 0.48rem;
     line-height: 0.48rem;
}
 .header-main {
     position: relative;
}
 .header .city {
     float: left;
     font-size: 0.18rem;
     color: #3375fe;
}
 .header .city span {
     font-size: 0.18rem;
     color: #3375fe;
     padding-left: 0.18rem;
}
 .header .nav {
     position: absolute;
     width: 14.78rem;
     height: .56rem;
     top: 0;
     left: 50%;
     transform: translate(-50%, 0);
     background-image: url('../../../static/images/title-bg.png');
     background-size: contain;
}
 .header .head-title {
     position: absolute;
     display: _none;
     left: 50%;
     transform: translate(-50%, -50%);
     top: 60%;
     /* background: url("../../../static/images/title_bg.png") no-repeat center; */
     background-size: cover;
     width: 4.4rem;
     text-align: center;
     height: 0.56rem;
     line-height: 0.48rem;
     font-size: 0.3rem;
     color: #ffffff;
     font-weight: bold;
}
 .header .date-time {
     float: right;
     font-size: 0.14rem;
     color: #3375fe;
     font-weight: bold;
}
 .header .d-date {
     padding-right: 0.3rem;
}
 .header .nav {
     overflow: hidden;
     /* background: url("../../../static/images/nav_bg.jpg") no-repeat center; */
     background-size: 100% 100%;
}
 .header .nav li {
     position: relative;
     float: left;
     width: 1.32rem;
     text-align: center;
     /* background: url("../../../static/images/li_bg.png") no-repeat right center; */
}
 /* .header .nav li:nth-child(5){
     background: url("../../../static/images/xiexian.png") no-repeat right center;
}
 .header .nav li:nth-child(6){
     background: url("../../../static/images/xiexian.png") no-repeat right center;
}
 .header .nav li:nth-child(7){
     background: url("../../../static/images/xiexian.png") no-repeat right center;
} */
 .header .nav li a {
     display: block;
     width: 100%;
     height: 0.44rem;
     line-height: 0.44rem;
     font-size: 0.16rem;
     font-weight: bold;
     color: #3375fe;
}
 .header .nav li:nth-child(4) {
     margin-right: 4.02rem;
     background: none;
}
 .header .nav li:last-child {
     background: none;
}
 /* .header .nav li.Lactive a, .header .nav li.Ractive a{
    background-color: #3375fe;
    
     color: #fff;
     z-index: 10 
} */
/* .Lactive a{
     background-image: url('../../../static/images/Lactive.png') 
}
 */
/* .Ractive a{
     background-image: url('../../../static/images/Ractive.png') 
}
 */
 /* .Lactive-img {
    
} */
.Lactive-box {
  position: absolute;
  left: 0;
  height: .44rem;
  top: 0;
}
.Lactive-box span{
  position: absolute;
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: 0.16rem;
  font-weight: bold;
  color: #fff;
  left: 0;
  padding-right: .19rem;
}
.Lactive-box img {
  height: .44rem;
  width: 1.51rem;
  vertical-align: top;
} 
</style>
