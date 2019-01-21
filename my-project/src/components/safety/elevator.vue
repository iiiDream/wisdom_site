<template>
  <div class="content">
    <div class="top">
      <div class="top-box" v-for="(item, index) in mainInfo" :key="index">
        <div class="status">
          <span v-if="item.State==0" class="noml">正常运行</span>
          <span v-else class="danger">异常运行</span>
        </div>
        <div class="employee">
          <span class="bolder">今日工作</span>
          <span>{{item.Name}}</span>
          <span class="bolder">上班时间</span>
          <span>{{item.time}}</span>
        </div>
        <img :src="`${imgUrl}/${item.photo}`" alt class="pic">
      </div>
    </div>
    <div class="buttom">
      <div class="main" v-for="(item, index) in mainInfo" :key="index">
        <div class="title">{{item.DevName}}</div>
        <div class="info" >
          <div class="manyInfo">
            <div class="num" v-if="item.yx_zzIsA==0">
              <p class="noml small">{{item.yx_zz}}t</p>
            </div>
            <div class="t_num" v-else>
              <p class="danger small">{{item.yx_zz}}t</p>
            </div>
            <div class="subtitle">载重</div>
          </div>
          <div class="manyInfo">
            <div class="num" v-if="item.yx_gdIsA==0">
              <p class="noml small">{{item.yx_gd}}m</p>
            </div>
            <div class="t_num" v-else>
              <p class="danger small">{{item.yx_gd}}m</p>
            </div>
            <div class="subtitle">高度</div>
          </div>
          <div class="manyInfo">
            <div class="num" v-if="item.yx_fzIsA==0">
              <p class="noml">正常</p>
            </div>
            <div class="t_num" v-else>
              <p class="danger">异常</p>
            </div>
            <div class="subtitle">防坠在位监测</div>
          </div>
          <div class="manyInfo">
            <div class="num" v-if="item.yx_sxIsA==0">
              <p class="noml">正常</p>
            </div>
            <div class="t_num" v-else>
              <p class="danger">异常</p>
            </div>
            <div class="subtitle">上下限位监测</div>
          </div>
        </div>
        <div class="subtitle">
          <h1>检修倒计时:&nbsp;&nbsp;{{item.jxdate}}天</h1>
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
      imgUrl:'http://gd.17hr.net:8018'
    }
  },
  methods: {
    getInfo(){
      this.$axios.get('/APP/XMPage/DeviceData.ashx?method=GetShenJianJiData&xmid=281').then(res=>{
        this.mainInfo=res.data;
      })
    }
  },
  created() {
    this.getInfo()
  },
};
</script>
<style lang="less" scoped>
.content {
  padding: 0.51rem 0.3rem 0.4rem 0.4rem;
}
.danger {
  color: #c23864 !important;
}
.noml {
  color: #21ff6a !important;
}

.top {
  display: flex;
  justify-content: space-between;
  .top-box {
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
      }
    }
  }
}
.buttom {
  margin-top: 0.4rem;
  display: flex;
  justify-content: space-between;
  .main {
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
          border-radius: 50%;
          border: 10px solid #21ff6a;
          p {
            line-height: 1.3rem;
            font-size: 0.24rem;
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
          border-radius: 50%;
          border: 10px solid #c23864;
          p {
            line-height: 1.3rem;
            font-size: 0.24rem;
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
</style>
