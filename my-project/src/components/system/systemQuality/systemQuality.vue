<template>
  <div id="systemQuality">
    <!-- 阴影框 -->
    <div class="shadow-box"></div>
    <!-- 侧导航栏 -->
    <div class="side-nav">
      <ul>
        <li class="button">
          <router-link to="/systemHome" class="return" v-show="retractState"></router-link>
          <a class="retract" @click="retractClick"></a>
        </li>
        <li @click="isActiveShow('/systemQuality_home')">
          <router-link
            to="/systemQuality_home"
            :class="activeShow=='/systemQuality_home'||activeShow=='/systemQuality'?'active':''"
          >
            <div class="icon"></div>
            <span>数据统计</span>
          </router-link>
        </li>
        <li @click="isActiveShow('/systemQuality_record')">
          <router-link
            to="/systemQuality_record"
            :class="activeShow=='/systemQuality_record'?'active':''"
          >
            <div class="icon"></div>
            <span>检查记录</span>
          </router-link>
        </li>
        <li @click="isActiveShow('/systemQuality_manage')">
          <router-link
            to="/systemQuality_manage"
            :class="activeShow=='/systemQuality_manage'?'active':''"
          >
            <div class="icon"></div>
            <span style="font-size:0.16rem">整改单管理</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 内容 -->
    <router-view class="router-box"></router-view>
  </div>
</template>

<style lang="less">
#systemQuality {
  width: 100%;
  height: 100%;
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
            opacity: 0.5;
            width: 0.6rem;
            height: 0.59rem;
            transition: all 0.5s;
            display: inline-block;
            background-repeat: no-repeat;
            background-position: center center;
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
          .icon {
            opacity: 1;
          }
        }
        .active {
          z-index: 10;
          background-color: #378dc5;
          .icon {
            opacity: 1;
          }
        }
      }
      .button {
        position: relative;
        border-bottom: 0.01rem solid #98c8e7;
        a {
          top: 50%;
          border: 0;
          padding: 0;
          width: 0.22rem;
          height: 0.22rem;
          position: absolute;
          // background-color: #fff;
          transform: translateY(-50%);
          background-repeat: no-repeat;
          background-position: center center;
        }
        a:hover {
          background-color: #2d83bb;
        }
        .return {
          left: 0.4rem;
          background-image: url("../../../../static/images/system-return.png");
        }
        .retract {
          right: 0.4rem;
          background-image: url("../../../../static/images/system-retract.png");
        }
      }
    }
  }
  .router-box {
    flex: 1;
    padding-top: 0.3rem;
    padding-left: 0.3rem;
    padding-right: 0.2rem;
    padding-bottom: 0.2rem;
  }
}
</style>

<script>
export default {
  data() {
    return {
      retractState: true, // 侧导航栏缩进状态
      activeShow: "/systemGreen_TSP" // 当前选中的模块
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