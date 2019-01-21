<template>

  <div id="safey">
    <div class="side-nav">
      <router-link to="/safety/elevator" @click.native="isActive('/safety/elevator')" :class="{active:index=='/safety/elevator'}">升降机</router-link>
      <i class="nav-border"></i>
      <router-link to="/safety/towerCrane"  @click.native="isActive('/safety/towerCrane')" :class="{active:index=='/safety/towerCrane'}">塔吊</router-link>
      <i class="nav-border"></i>
      <router-link to="/safety/car" @click.native="isActive('/safety/car')" :class="{active:index=='/safety/car'}">车辆出入</router-link>
      <i class="nav-border"></i>
      <router-link to="/safety/gantryCrane" @click.native="isActive('/safety/gantryCrane')" :class="{active:index=='/safety/gantryCrane'}">龙门吊</router-link>

    </div>
    <router-view class="router-box"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
        index:'/safety/elevator'
    };
  },
  created() {
    
  },
  methods: {
    isActive(i) {
        this.index=i;
    },
    getPath(){
      this.index=this.$route.path;
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

