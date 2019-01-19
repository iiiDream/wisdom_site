<template>
<<<<<<< HEAD
  <div id="safey">
    <div class="side-nav">
      <router-link to="/safety/elevator" @click.native="isActive(0)" :class="{active:index==0}">升降机</router-link>
      <i class="nav-border"></i>
      <router-link to="/safety/towerCrane"  @click.native="isActive(1)" :class="{active:index==1}">塔吊</router-link>
      <i class="nav-border"></i>
      <router-link to="/safety/car" @click.native="isActive(2)" :class="{active:index==2}">车辆出入</router-link>
      <i class="nav-border"></i>
      <router-link to="/safety/gantryCrane" @click.native="isActive(3)" :class="{active:index==3}">龙门吊</router-link>
=======
    <div id="safey">
        <div class="side-nav">
            <router-link to="/safety/elevator"  class="active">升降机</router-link>
            <i class="nav-border"></i>
            <router-link to="/safety/towerCrane">塔吊</router-link>
            <i class="nav-border"></i>
            <router-link to="/safety/car">车辆出入</router-link>
            <i class="nav-border"></i>
            <router-link to="/safety/gantryCrane">龙门吊</router-link>
        </div>
        <router-view class="router-box"></router-view>
>>>>>>> bea4120c5d2d1b651603cf9f71122fb00192ee75
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
<<<<<<< HEAD
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
=======
    #safey {
        display: flex;
    }
    .side-nav {
        display: inline-block;
        width: 1.3rem;
        margin-left: .4rem;
        margin-top: .51rem;
        height: 5.71rem;
        text-align: center;
        background-image: url('../../../static/images/s_nav-background.png');
        background-size: contain;
    }
    .router-box {
        flex: 1;
        display: inline-block;
        padding: 0.51rem 0.3rem 0.4rem 0.4rem;
    }
    .side-nav a {
        display: block;
        font-size: .18rem;
        color: #3375fe;
        line-height: .56rem;
    }
    .nav-border {
        display: block;
        background-image: url('../../../static/images/s_nav-border.png');
        background-size: contain;
        height: .01rem;
        width: .92rem;
        margin-left: 50%;
        transform: translate(-50%);
    }
    a.active{
        color: #fff;
        background: linear-gradient(to right,#0163ff,#00aefe);
    }
>>>>>>> bea4120c5d2d1b651603cf9f71122fb00192ee75
</style>

