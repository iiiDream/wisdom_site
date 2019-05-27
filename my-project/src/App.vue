<template>
  <div id="app">
    <!-- 看板导航栏 -->
    <baseHeader v-show="isLogin"></baseHeader>

    <!-- 后台管理系统导航栏 -->
    <systemHeader v-show="systemShow"></systemHeader>

    <!-- 主题其他模块 -->
    <router-view></router-view>
  </div>
</template>

<script>
import baseHeader from "./components/header/herder.vue"
import systemHeader from "./components/system/systemHeader.vue"

export default {
  name: "app",
  components: {
    baseHeader,
    systemHeader
  },
  data() {
    return {
      isLogin: true, // 看板导航栏显示状态
      systemShow: false, // 后台管理系统导航栏显示状态
    };
  },
  methods: {
    noHeader() {
      if (
        this.$route.path == "/unopen" ||
        this.$route.path == "/loginOld" ||
        this.$route.path == "/login" ||
        this.$route.path == "/homePage" ||
        this.$route.path == "/projectManagement" ||
        this.$route.path == "/md" ||
        this.$route.path.includes("/worker") ||
        this.$route.path.includes("/dormitory") ||
        this.$route.path.includes("/gongsiManagement") ||
        this.$route.path.includes("/gongsiShouquan") ||
        this.$route.path.includes("/projectShezhi") ||
        this.$route.path.includes("/projectShouquan") ||
        this.$route.path.includes("/system") ||
        this.$route.path.includes("/companyGuanLi") ||
        this.$route.path.includes("/projectGuanLi")
      ) {
        this.isLogin = false
      } else {
        this.isLogin = true
      }

      if (this.$route.path.includes("/system")) {
        this.systemShow = true
      } else {
        this.systemShow = false
      }
    }
  },
  created() {
    this.noHeader();
  },
  updated() {
    this.noHeader();
  }
};
</script>

<style>
@import url("./common/base.css");
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
body {
  background-image: url("../static/images/index.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
