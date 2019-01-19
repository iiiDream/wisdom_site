<template>
  <div id="safey">
    <div class="side-nav">
      <router-link to="/safety/elevator" @click.native="isActive(0)" :class="{active:index==0}">升降机</router-link>
      <i class="nav-border"></i>
      <router-link to="/safety/towerCrane"  @click.native="isActive(1)" :class="{active:index==1}">塔吊</router-link>
      <i class="nav-border"></i>
      <router-link to="/safety/car" @click.native="isActive(2)" :class="{active:index==2}">车辆出入</router-link>
      <i class="nav-border"></i>
      <router-link to="/safety/gantryCrane" @click.native="isActive(3)" :class="{active:index==3}">龙门吊</router-link>
    </div>
    <router-view class="router-box"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
        index:'0'
    };
  },
  methods: {
    isActive(i) {
        this.index=i;
    }
  }
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

