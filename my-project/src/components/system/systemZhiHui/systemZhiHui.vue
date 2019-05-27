<template>
  <div id="systemLiangZhi">
    <!-- 阴影框 -->
    <div class="shadow-box"></div>
    <!-- 侧导航栏 -->
    <div class="side-nav">
      <ul>
        <li class="button">
          <router-link to="/systemHome" class="return" v-show="retractState"></router-link>
          <a class="retract" @click="retractClick"></a>
        </li>
        <li @click="isActiveShow('/systemZhiHui_taDiao')">
          <router-link
            to="/systemZhiHui_taDiao"
            :class="activeShow=='/systemZhiHui_taDiao'||activeShow=='/systemZhiHui'?'active':''"
          >
            <div class="icon"></div>
            <span>塔吊监控</span>
          </router-link>
        </li>
        <li  @click="isActiveShow('/systemZhiHui_shengJiangJi')">
          <router-link to="/systemZhiHui_shengJiangJi" style="font-size:0.16rem" :class="activeShow=='/systemZhiHui_shengJiangJi'?'active':''">
            <div class="icon"></div>
            <span>升降机监控</span>
          </router-link> 
        </li>
        <li>
          <a>
            <div class="icon"></div>
            <span>卸料监控</span>
          </a>
        </li>
        <li>
          <a style="font-size:0.16rem">
            <div class="icon"></div>
            <span>龙门吊监控</span>
          </a>
        </li>
        <li>
          <a>
            <div class="icon"></div>
            <span>车辆管理</span>
          </a>
        </li>
        <li  @click="isActiveShow('/systemZhiHui_dianXiang')">
          <router-link to="/systemZhiHui_dianXiang" :class="activeShow=='/systemZhiHui_dianXiang'?'active':''">
            <div class="icon"></div>
            <span>智能电箱</span>
         </router-link>
        </li>
        <li>
          <a>
            <div class="icon"></div>
            <span>气体检测</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 内容 -->
    <router-view class="router-box"></router-view>
  </div>
</template>

<style lang="less">
#systemLiangZhi {
  width: 100%;
  display: flex;
  position: relative;
  background-color: #f7f7f7;
  .shadow-box {
    width: 100%;
    height: 0.15rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    box-shadow: 0 0.07rem 0.14rem -0.1rem #666 inset;
  }
  .side-nav {
    width: 1.75rem;
    height: 10rem;
    overflow: hidden;
    background-color: #54a4d7;
    position: relative;
    ul {
      width: 1.75rem;
      li {
        height: 0.6rem;
        position: relative;
        a {
          width: 100%;
          height: 0.6rem;
          color: #fff;
          font-size: 0.2rem;
          line-height: 0.6rem;
          position: absolute;
          transition: all 0.5s;
          border-bottom: 0.01rem solid #98c8e7;
          .icon {
            width: 0.6rem;
            height: 0.59rem;
            display: inline-block;
          }
          span {
            width: 0.8rem;
            vertical-align: top;
            text-align: justify;
            display: inline-block;
            text-align-last: justify;
          }
        }
        a:hover {
          background-color: #2d83bb;
        }
        .active {
          z-index: 10;
          background-color: #378dc5;
        }
      }
      .button {
                position: relative;
                border-bottom: .01rem solid #98c8e7;
                a {
                    top: 50%;
                    border: 0;
                    padding: 0;
                    width: .22rem;
                    height: .22rem;
                    position: absolute;
                    transform: translateY(-50%);
                    background-repeat: no-repeat;
                    background-position: center center;
                    &:hover {
                        background-color: #2d83bb;
                    }
                }
                
                .return {
                    left: .4rem;
                    background-image: url('../../../../static/images/system-return.png');
                }
                .retract {
                    right: .4rem;
                    background-image: url('../../../../static/images/system-retract.png');
                }
            }
    }
  }
  .router-box {
    flex: 1;
    padding-top: 0.4rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
}
</style>

<script>
export default {
  data() {
    return {
      retractState: true, // 侧导航栏缩进状态
      activeShow: "/systemZhiHui_taDiao" // 当前选中的模块
    };
  },
  created() {
    this.getPath();
  },
  methods: {
    // 侧导航栏缩进
    retractClick() {
      if (this.retractState) {
        $(".side-nav").animate(
          {
            width: ".6rem"
          },
          500
        );
        $(".retract").animate({
          right: "1.35rem"
        });
        $(".sanjiao").animate({
          left: "0.5rem"
        });
        $(".subnav").animate({
          left: "0.6rem"
        });

        this.retractState = !this.retractState;
      } else {
        $(".side-nav").animate(
          {
            width: "1.75rem"
          },
          500
        );
        $(".retract").animate({
          right: ".4rem"
        });
        $(".sanjiao").animate({
          left: "1.65rem"
        });
        $(".subnav").animate({
          left: "1.75rem"
        });

        this.retractState = !this.retractState;
      }
    },
    // 选择模块
    isActiveShow(i) {
      this.activeShow = i;
    },
    // 页面刷新时重新赋值
    getPath() {
      this.activeShow = this.$route.path;
    }
  }
};
</script>