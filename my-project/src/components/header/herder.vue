<template>
  <div class="indexBody">
    <div class="header">
      <div class="header-main container clearfix">
        <div class="city" v-if="weather.length > 0">
          {{weather[0].results[0].currentCity}}
          <span class="temp" v-if="weather.length > 0">{{weather[0].results[0].weather_data[0].temperature}}</span>
              <img v-if="nowWeather.includes('云')" src="../../../static/images/g_duoyun.png">
              <img v-else-if="nowWeather.includes('晴')" src="../../../static/images/g_qing.png">
              <img v-else-if="nowWeather.includes('雪')" src="../../../static/images/g_xue.png">
              <img v-else-if="nowWeather.includes('雨')" src="../../../static/images/g_dayv.png">
              <img v-else-if="nowWeather.includes('阴')" src="../../../static/images/g_yin.png">
              <img v-else-if="nowWeather.includes('雷')" src="../../../static/images/g_lei.png">
              <img v-else src="../../../static/images/g_wan.png">
        </div>
        <ul class="nav">
          <li v-on:click="isActive('/home')">
            <div class="Lactive-box" v-show="active=='/home'||active=='/login'">
              <img src="../../../static/images/Lactive.png" alt="" class="Lactive-img">
              <span>项目总况</span>
            </div>
            <router-link to="/home">项目总况</router-link>
          </li>
          <li v-on:click="isActive('/labour')">
            <div class="Lactive-box" v-show="active=='/labour'">
              <img src="../../../static/images/Lactive.png" alt="" class="Lactive-img">
              <span>两制管理</span>
            </div>
            <router-link to="/labour">两制管理</router-link>
          </li>
          <li  v-on:click="isActive('/green')">
            <div class="Lactive-box" v-show="active=='/green'">
              <img src="../../../static/images/Lactive.png" alt="" class="Lactive-img">
              <span>绿色施工</span>
            </div>
            <router-link to="/green">绿色施工</router-link>
          </li>
          <li  v-on:click="isActive('/safety')">
            <div class="Lactive-box" v-show="active.indexOf('/safety')!=-1" style="left:-.04rem">
              <img src="../../../static/images/Lactive.png" alt="" class="Lactive-img">
              <span style="padding-left:.04rem">安全施工</span>
            </div>
            <router-link to="/safety">安全施工</router-link>
          </li>
          <li  v-on:click="isActive('/monitoring')">
            <div class="Lactive-box" v-show="active=='/monitoring'" style="left:.04rem">
              <img src="../../../static/images/Ractive.png" alt="" class="Lactive-img">
              <span style="padding-left:.04rem">全景监控</span>
            </div>
            <router-link to="/monitoring">全景监控</router-link>
          </li>
          <li  v-on:click="isActive('/schedule')">
            <div class="Lactive-box" v-show="active=='/schedule'">
              <img src="../../../static/images/Ractive.png" alt="" class="Lactive-img">
              <span>进度管理</span>
            </div>
            <router-link to="/schedule">进度管理</router-link>
          </li>
          <li  v-on:click="isActive('/quality')">
            <div class="Lactive-box" v-show="active=='/quality'">
              <img src="../../../static/images/Ractive.png" alt="" class="Lactive-img">
              <span>质量管理</span>
            </div>
            <router-link to="/quality">质量管理</router-link>
          </li>
          <li  v-on:click="isActive('/engineering')">
            <div class="Lactive-box" v-show="active=='/engineering'">
              <img src="../../../static/images/Ractive.png" alt="" class="Lactive-img">
              <span>工程资料</span>
            </div>
            <router-link to="/engineering">工程资料</router-link>
          </li>
        </ul>
        <router-link to="/homePage" v-on:click="isActive('/home')">
          <h2 class="head-title">{{project}}</h2>
        </router-link>
        <div class="date-time">
          <span class="d-date" v-if="weather.length > 0">{{weather[0].date}}</span>
          <span class="d-time">{{time}}</span>
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
      nowWeather:'',
      xmid:'',
    };
  },
  created() {
    this.getName()
    this.getWeather()
    this.setTime()
    this.setActive()
    // this.getliuyong()
  },
  methods: {
    getName() {
      this.xmid = this.getQueryString('xmid')
      this.$axios
        .get(`/APP/XMPage/XmData.ashx?method=XMData&xmid=${this.xmid}`)
        .then(res => {
          if(res.data.success == 1){
            this.$router.push('unopen')
          }else{
            this.project = res.data.project;
            this.nowWeather=res.data.weather[0].results[0].weather_data[0].weather
          }
        });
    },
    getWeather() {
      this.xmid = this.getQueryString('xmid')
      this.$axios.get(`/APP/XMPage/XmData.ashx?method=XMData&xmid=${this.xmid}`).then(res=>{
        if(res.data.success == 1){
          this.$router.push('unopen')
        }else{
          this.weather = res.data.weather
        }
      })
    },
    setTime() {
      this.timeId = setInterval(()=>{
        this.time = moment().format("h:mm:ss")
      },1000)
    },
    setActive() {
      if(this.$route.path.includes('safety')){
        this.active+'/elevator';
      }
      this.active = this.$route.path
    },
    isActive(path){
      if(this.$route.path.includes('safety')){
        this.active+'/elevator';
        this.$router.push({path:'/safety/elevator'});
      }
      this.active =path;
    },
    getQueryString(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    },
    // 测试
    // getliuyong() {
    //   this.$axios.get('http://192.168.0.139:8888/smart/top').then(res=>{
    //     console.log(res.data)
    //   })
    // }
  }
};
</script>

<style scoped>
.indexBody {
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
     font-size: 0.14rem;
     color: #3375fe;
}
 .header .city span {
     font-size: 0.14rem;
     color: #3375fe;
     padding-left: 0.1rem;
}
.header .city img{
  width: .2rem;
  height: .2rem;
  margin-left: .2rem;
  margin-top: -0.05rem;
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
     background-size: cover;
     width: 4.4rem;
     text-align: center;
     height: 0.56rem;
     line-height: 0.4rem;
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
     background-size: 100% 100%;
}
 .header .nav li {
     position: relative;
     float: left;
     width: 1.32rem;
     text-align: center;
}
 .header .nav li a {
     display: block;
     width: 100%;
     height: 0.44rem;
     line-height: 0.44rem;
     font-size: 0.16rem;
     font-weight: bold;
     color: #3375fe;
     padding-left: .19rem;
}
 .header .nav li:nth-child(4) {
     margin-right: 4.02rem;
     background: none;
}
 .header .nav li:last-child {
     background: none;
}
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
  /* padding-right: .19rem; */
}
.Lactive-box img {
  height: .44rem;
  width: 1.51rem;
  vertical-align: top;  
} 
</style>
