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
          <li @click="personnelClick">
            <div class="Lactive-box" v-show="active.includes('/location')||active=='/labour'">
              <img src="../../../static/images/Lactive.png" alt="" class="Lactive-img">
              <span>人员管理</span>
            </div>
            <a>人员管理</a>
            <div class="drop-down1">
              <ul>
                <li @click="isActive('/labour')">
                  <router-link to="/labour">两制管理</router-link>
                </li>
                <li @click="isActive('/location')">
                  <router-link to="/location">人员定位</router-link>
                </li>
                <li>
                  <router-link to="/workerHome">产业工人</router-link>
                </li>
                <li>
                  <a @click="unopenClick">危区检测</a>
                </li>
              </ul>
            </div>
          </li>
          <li  v-on:click="isActive('/safety')">
            <div class="Lactive-box" v-show="active.includes('/safety')">
              <img src="../../../static/images/Lactive.png" alt="" class="Lactive-img">
              <span>设备管理</span>
            </div>
            <router-link to="/safety">设备管理</router-link>
          </li>
          <li  v-on:click="isActive('/monitoring')">
            <div class="Lactive-box" v-show="active=='/monitoring'" style="left:-.04rem">
              <img src="../../../static/images/Lactive.png" alt="" class="Lactive-img">
              <span>视频监控</span>
            </div>
            <router-link to="/monitoring">视频监控</router-link>
          </li>
          <li @click="personnelClick2">
            <div class="Lactive-box" v-show="active.includes('/quality')" style="left:.04rem">
              <img src="../../../static/images/Ractive.png" alt="" class="Lactive-img">
              <span>安全管理</span>
            </div>
            <a>安全管理</a>
            <div class="drop-down2">
              <ul>
                <li v-on:click="isActive('/quality')">
                  <router-link to="/quality">安全巡检</router-link>
                </li>
                <li>
                  <router-link to="/gaozhimo">高支模检测</router-link>
                </li>
                <li>
                  <a @click="unopenClick">基坑监测</a>
                </li>
                <li>
                  <a @click="unopenClick">施工周边监测</a>
                </li>
                <li>
                  <a @click="unopenClick">智能安全教育</a>
                </li>
              </ul>
            </div>
          </li>
          <li @click="personnelClick4">
            <div class="Lactive-box" v-show="active.includes('/green')">
              <img src="../../../static/images/Ractive.png" alt="" class="Lactive-img">
              <span>绿色施工</span>
            </div>
            <a>绿色施工</a>
            <div class="drop-down4">
              <ul>
                <li v-on:click="isActive('/green')">
                  <router-link to="/green">TSP检测</router-link>
                </li>
                <li>
                  <a @click="unopenClick">废弃物监管</a>
                </li>
                <li>
                  <a @click="unopenClick">雨水回收</a>
                </li>
                <li>
                  <a @click="unopenClick">喷淋系统</a>
                </li>
              </ul>
            </div>
          </li>
          <li  v-on:click="isActive('/information')">
            <div class="Lactive-box" v-show="active=='/information'">
              <img src="../../../static/images/Ractive.png" alt="" class="Lactive-img">
              <span>资料管理</span>
            </div>
            <router-link to="/information">资料管理</router-link>
          </li>
          <li @click="personnelClick3">
            <div class="Lactive-box" v-show="active.includes('/unopen')">
              <img src="../../../static/images/Ractive.png" alt="" class="Lactive-img">
              <span>智能应用</span>
            </div>
            <a>智能应用</a>
            <div class="drop-down3">
              <ul>
                <li>
                  <a @click="unopenClick">无人机应用</a>
                </li>
                <li>
                  <a @click="unopenClick">BIM技术应用</a>
                </li>
                <li>
                  <a @click="unopenClick">VR应用</a>
                </li>
                <li>
                  <a @click="unopenClick">视频会议</a>
                </li>
                <li>
                  <a @click="unopenClick">3D打印应用</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <span v-on:click="isActive('/home')">
          <router-link to="/home">
            <h2 class="head-title">深圳河消除黑臭项目</h2>
          </router-link>
        </span>
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
      dropDownState: true, // 人员管理下拉框状态
      dropDownState2: true, // 安全管理下拉框状态
      dropDownState3: true, // 智能应用下拉框状态
      dropDownState4: true, // 绿色施工下拉框状态
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
        .get(`http://gd.17hr.net:8018/APP/XMPage/XmData.ashx?method=XMData&xmid=${this.xmid}`)
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
      this.$axios.get(`http://gd.17hr.net:8018/APP/XMPage/XmData.ashx?method=XMData&xmid=${this.xmid}`).then(res=>{
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
      this.active = this.$route.path
    },
    isActive(path){
      this.active =path
      // console.log(this.active)
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
    getliuyong() {
      // this.$axios.post('http://192.168.0.110:8989/logins?password=lj123&validateCode=0&username=lj').then(res=>{
      //   console.log(res.data)
      // })
      this.$axios.post('http://192.168.0.110:8989/logins',{
        password:'lj123',validateCode:0,username:'lj'
        }).then(
          res=>{
        console.log(res.data)
      })
    },
    
    // 人员管理下拉事件
    personnelClick() {
      // console.log(`123`)
      if (this.dropDownState) {
        $('.drop-down1').animate({
          height:'1.92rem'
        },500)
        this.dropDownState = !this.dropDownState
      } else {
        $('.drop-down1').animate({
          height:'0'
        },500)
        this.dropDownState = !this.dropDownState
      }
    },

    // 安全管理下拉事件
    personnelClick2() {
      // console.log(`123`)
      if (this.dropDownState2) {
        $('.drop-down2').animate({
          height:'2.4rem'
        },500)
        this.dropDownState2 = !this.dropDownState2
      } else {
        $('.drop-down2').animate({
          height:'0'
        },500)
        this.dropDownState2 = !this.dropDownState2
      }
    },

    // 智能应用下拉事件
    personnelClick3() {
      // console.log(`123`)
      if (this.dropDownState3) {
        $('.drop-down3').animate({
          height:'2.4rem'
        },500)
        this.dropDownState3 = !this.dropDownState3
      } else {
        $('.drop-down3').animate({
          height:'0'
        },500)
        this.dropDownState3 = !this.dropDownState3
      }
    },

    // 绿色施工下拉事件
    personnelClick4() {
      // console.log(`123`)
      if (this.dropDownState4) {
        $('.drop-down4').animate({
          height:'2.4rem'
        },500)
        this.dropDownState4 = !this.dropDownState4
      } else {
        $('.drop-down4').animate({
          height:'0'
        },500)
        this.dropDownState4 = !this.dropDownState4
      }
    },

    // 功能未开发
    unopenClick() {
      this.$message({
        message: '该功能暂未开放',
        type: 'warning'
      })
    }
  }
};
</script>

<style scoped lang="less">
.indexBody {
     position: relative;
     top: 0;
     z-index: 1000;
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
     /* overflow: hidden; */
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
.indexBody {
  .header {
    .header-main {
      .nav {
        li {
          .drop-down1 {
            position: absolute;
            right: -.19rem;
            top: .48rem;
            height: 0;
            overflow: hidden;
            ul {
              width: 1.28rem;
              height: 1.92rem;              
              overflow: hidden;
              border: .01rem solid #0f1f53;
              background-color: #020521;
              li {
                a {
                  color: #fff;
                  width: 1.28rem;
                  height: .48rem;
                  margin: 0;
                  padding: 0;
                  border-bottom: .01rem solid #0f1f53;
                }
              }
            }
          }
          .drop-down2 {
            position: absolute;
            right: .01rem;
            top: .48rem;
            height: 0;
            overflow: hidden;
            ul {
              width: 1.28rem;
              height: 2.4rem;              
              overflow: hidden;
              border: .01rem solid #0f1f53;
              background-color: #020521;
              li {
                a {
                  color: #fff;
                  width: 1.28rem;
                  height: .48rem;
                  margin: 0;
                  padding: 0;
                  border-bottom: .01rem solid #0f1f53;
                }
              }
            }
          }
          .drop-down3 {
            position: absolute;
            right: .01rem;
            top: .48rem;
            height: 0;
            overflow: hidden;
            ul {
              width: 1.28rem;
              height: 2.4rem;              
              overflow: hidden;
              border: .01rem solid #0f1f53;
              background-color: #020521;
              li {
                a {
                  color: #fff;
                  width: 1.28rem;
                  height: .48rem;
                  margin: 0;
                  padding: 0;
                  border-bottom: .01rem solid #0f1f53;
                }
              }
            }
          }
          .drop-down4 {
            position: absolute;
            right: .01rem;
            top: .48rem;
            height: 0;
            overflow: hidden;
            ul {
              width: 1.28rem;
              height: 1.92rem;              
              overflow: hidden;
              border: .01rem solid #0f1f53;
              background-color: #020521;
              li {
                a {
                  color: #fff;
                  width: 1.28rem;
                  height: .48rem;
                  margin: 0;
                  padding: 0;
                  border-bottom: .01rem solid #0f1f53;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
