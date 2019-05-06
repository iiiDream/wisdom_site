<template>
  <div class="content">
    <div class="top">
      <div class="top-box" v-for="(item,index) in elevatorData" :key="index">
        <div class="status">
          <span class="green">正常运行</span>
          <!-- <span v-else class="danger">异常运行</span> -->
        </div>
        <div class="employee">
          <span class="bolder">操作员</span>
          <span>{{item.name}}</span>
          <span class="bolder">上班时间</span>
          <span>{{item.startTime!=null?item.startTime.split(' ')[1]:''}}</span>
        </div>
        <!-- <img :src="`${imgUrl}/${item.photo}`" alt class="pic"> -->
        <img :src="item.image" alt="" class="pic">
      </div>
    </div>
    <div class="buttom">
      <div class="main" v-for="(item,index) in elevatorData" :key="index">
        <div class="title">{{item.dname}}</div>
        <div class="info" >
          <div class="manyInfo">
            <div class="num">
              <p class="noml small noml-border">{{item.weight}}t</p>
            </div>
            <!-- <div class="t_num" v-else>
              <p class="danger small danger-border">{{item.yx_zz}}t</p>
            </div> -->
            <div class="subtitle">载重</div>
          </div>
          <div class="manyInfo">
            <div class="num">
              <p class="noml small noml-border">{{item.height}}m</p>
            </div>
            <!-- <div class="t_num" v-else>
              <p class="danger small danger-border">{{item.yx_gd}}m</p>
            </div> -->
            <div class="subtitle">高度</div>
          </div>
          <div class="manyInfo">
            <div class="num" v-if="item.fallAlarm==0">
              <p class="noml noml-border">正常</p>
            </div>
            <div class="t_num" v-else>
              <p class="danger danger-border">异常</p>
            </div>
            <div class="subtitle">防坠在位监测</div>
          </div>
          <div class="manyInfo">
            <div class="num" v-if="item.bottomAlarm==0">
              <p class="noml noml-border">正常</p>
            </div>
            <div class="t_num" v-else>
              <p class="danger danger-border">异常</p>
            </div>
            <div class="subtitle">上下限位监测</div>
          </div>
        </div>
        <div class="subtitle">
          <h1 style="display:inline-block">检修倒计时:</h1>
          <h1 :class="item.ts>=10?'normal':item.ts>=1?'warning':'anomaly'" style="display:inline-block">&nbsp;&nbsp;{{item.ts}}天</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      mainInfo:{},
      imgUrl:'http://gd.17hr.net:8018',
      xmid:'',
      elevatorData: [], // 升降机数据
      pid: '', // 项目id
    }
  },
  methods: {
    getInfo(){
      this.xmid = this.getQueryString('xmid')
      this.$axios.get(`http://gd.17hr.net:8018/APP/XMPage/DeviceData.ashx?method=GetShenJianJiData&xmid=${this.xmid}`).then(res=>{
        if(res.data.success == 1){
          this.$router.push('unopen')
        }else{
          this.mainInfo=res.data;
        }
      })
    },

    // 获取url中的xmid
    getQueryString(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    },

    // 获取升降机数据
    getElevatorData() {
      this.$axios.get(`/lz/deye/getElevatorData?pid=37348`).then(
        res => {
          // console.log(res.data)
          // for (let i = 0; i < 3; i++) {
          //   this.elevatorData.push(res.data)
          // }
          this.elevatorData = res.data
          // console.log(this.elevatorData)
        }
      )
    },

    // 获取项目id
    getPid() {
        this.pid = localStorage.getItem('pid')
    },
  },
  created() {
    // this.getInfo()
    this.getPid()
    this.getElevatorData()
  },
};
</script>
<style lang="less" scoped>
.content {
  padding: 0.51rem 0.3rem 0.4rem 0.4rem;
}
.danger {
  color: #fb497c !important;
}
.noml {
  color: #ff731c !important;
}
.green {
  color: #24e974 !important;
}

.top {
  // display: flex;
  // justify-content: space-between;
  height: 1.61rem;
  width: 19.2rem;
  overflow: hidden;
  .top-box {
    float: left;
    margin-right: .35rem;
    height: 1.61rem;
    width: 5.3rem;
    background-image: url("../../../static/images/s_top-box.png");
    background-size: contain;
    display: flex;
    .pic {
      padding: 0.16rem;
      width: 1.46rem;
      height: 1.61rem;
    }
    .status {
      display: inline-block;
      background-image: url("../../../static/images/s_status-background.png");
      background-repeat: no-repeat;
      background-position: center center;
      height: 1.57rem;
      width: 1.57rem;
      text-align: center;
      line-height: 1.57rem;
      span {
        font-size: 0.24rem;
        font-weight: bolder;
      }
    }

    .employee {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      padding-top: 0.29rem;
      padding-bottom: 0.29rem;
      span {
        text-align: center;
        width: 50%;
        color: #fff;
        font-size: 0.2rem;
        line-height: 0.5rem;
      }
      .bolder {
        font-weight: bolder;
        text-align: right;
      }
    }
  }
}
.buttom {
  margin-top: 0.4rem;
  // display: flex;
  // justify-content: space-between;
  height: 7.4rem;
  width: 19.2rem;
  overflow: hidden;
  .main {
    float: left;
    margin-right: .35rem;
    width: 5.3rem;
    height: 7.4rem;
    background: url("../../../static/images/s_bottom-box.png") no-repeat center
      center;
      background-size: contain;
    padding: 0.3rem 0rem 0.52rem 0rem;
    .title {
      color: #fff;
      font-size: 0.18rem;
      font-weight: bold;
      margin-left: 0.3rem;
    }
    .info {
      color: #fff;
      margin-top: 0.9rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      text-align: center;
      .manyInfo {
        position: relative;
        width: 50%;
        text-align: center;
        margin-bottom: 0.4rem;
        .num {
          margin: 0 auto;
          width: 1.5rem;
          height: 1.5rem;
          // border-radius: 50%;
          p {
            line-height: 1.5rem;
            font-size: 0.3rem;
            font-weight: bolder;
          }
          .small {
            font-weight: normal;
          }
        }
        .t_num {
          margin: 0 auto;
          width: 1.5rem;
          height: 1.5rem;
          // border-radius: 50%;
          p {
            line-height: 1.5rem;
            font-size: 0.3rem;
            font-weight: bolder;
          }
          .small {
            font-weight: normal;
          }
        }

        .subtitle {
          margin-top: 0.2rem;
          font-size: 0.22rem;
        }
      }
    }
    .subtitle {
      color: #fff;
      text-align: center;
      margin-top: 0.5rem;
      h1 {
        font-weight: bold;
      }
    }
  }
}
.noml-border {
  background-image: url('../../../static/images/s_e-orange.png');
  background-size: cover;
}
.danger-border {
  background-image: url('../../../static/images/s_e-red.png');
  background-size: cover;
}
.anomaly {
    color: #fb497c;
}
.normal {
    color: #24e974;
}
.warning {
    color: #ff731c;
}
</style>
