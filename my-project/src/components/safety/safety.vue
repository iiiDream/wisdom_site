<template>

  <div id="safey">
    <!-- 侧导航栏 -->
    <div class="side-nav">
      <router-link to="/safety/elevator" @click.native="isActive('/safety/elevator')" :class="{active:index=='/safety/elevator'}">升降机</router-link>
      <i class="nav-border"></i>
      <router-link to="/safety/towerCrane"  @click.native="isActive('/safety/towerCrane')" :class="{active:index=='/safety/towerCrane'}">塔吊</router-link>
      <i class="nav-border"></i>
      <router-link to="/safety/car" @click.native="isActive('/safety/car')" :class="{active:index=='/safety/car'}">车辆出入</router-link>
      <i class="nav-border"></i>
      <router-link to="/safety/gantryCrane" @click.native="isActive('/safety/gantryCrane')" :class="{active:index=='/safety/gantryCrane'}">龙门吊</router-link>
      <i class="nav-border"></i>
      <router-link to="/safety/gas" @click.native="isActive('/safety/gas')" :class="{active:index=='/safety/gas'}">气体检测</router-link>
    </div>
    <!-- 子路由页面显示区域 -->
    <router-view class="router-box"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
        index:'/safety/elevator', // 当前页面的路由地址，根据此地址来判断当前处于哪个页面
    };
  },
  created() {
    
  },
  methods: {
    // 设置路由地址
    isActive(i) {
      this.index=i;
    },
    // 页面刷新或重新渲染时将当前页面的路由地址赋值给 index
    getPath(){
      if (this.$route.path != '/safety') {
        this.index=this.$route.path;
      }
    // this.$router.push({path:'/safety/elevator'});
    // this.isActive('/safety/elevator');
    }
  },
  created() {
    this.getPath();
  },
};
</script>

<style scoped>
#safey {
  display: flex;
}
.side-nav {
  display: inline-block;
  width: 1.3rem;
  margin-left: 0.4rem;
  margin-top: 0.51rem;
  height: 5.71rem;
  text-align: center;
  background-image: url("../../../static/images/s_nav-background.png");
  background-size: contain;
}
.router-box {
  flex: 1;
  display: inline-block;
  padding: 0.51rem 0.3rem 0.4rem 0.4rem;
  width: 16.63rem;
  height: 9.41rem;
}
.side-nav a {
  display: block;
  font-size: 0.18rem;
  color: #3375fe;
  line-height: 0.56rem;
}
.nav-border {
  display: block;
  background-image: url("../../../static/images/s_nav-border.png");
  background-size: contain;
  height: 0.01rem;
  width: 0.92rem;
  margin-left: 50%;
  transform: translate(-50%);
}
a.active {
  color: #fff;
  background: linear-gradient(to right, #0163ff, #00aefe);
}
</style>

