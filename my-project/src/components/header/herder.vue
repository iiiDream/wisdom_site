<template>
  <div class="indexBody">
    <div class="header">
      <div class="header-main container clearfix">
        <div class="city" v-if="weather.length > 0">
          {{weather[0].results[0].currentCity}}
          <span class="temp" v-if="weather.length > 0">{{weather[0].results[0].weather_data[0].temperature}}</span>
        </div>
        <ul class="nav">
          <li class="Lactive">
            <!-- <img src="../../../static/images/Lactive.png" alt="" class="Lactive-img"> -->
            <router-link to="/home">项目总况</router-link>
          </li>
          <li class="Lactive">
            <router-link to="/labour">劳务管理</router-link>
          </li>
          <li class="Lactive">
            <router-link to="/green">绿色施工</router-link>
          </li>
          <li class="Lactive">
            <router-link to="/safety">安全管理</router-link>
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
            <a href="javascript:;">工程资料</a>
          </li>
        </ul>
        <router-link to="/home">
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
      timeId: ""
    };
  },
  created() {
    this.getName()
    this.getWeather()
    this.setTime()
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
     width: 14.76rem;
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
     background: url("../../../static/images/nav_bg.jpg") no-repeat center;
     background-size: 100% 100%;
}
 .header .nav li {
     float: left;
     width: 1.32rem;
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
     height: 0.48rem;
     line-height: 0.48rem;
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
 .header .nav li.Lactive a, .header .nav li.Ractive a{
    /* background-color: #3375fe;
     */
     color: #fff;
     z-index: 10 
}
/* .Lactive a{
     background-image: url('../../../static/images/Lactive.png') 
}
 */
/* .Ractive a{
     background-image: url('../../../static/images/Ractive.png') 
}
 */
 .Lactive-img {
     position: absolute;
     z-index: 1;
     left: 0;
     height: .48rem;
}
 
</style>
