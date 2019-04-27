<template>
  <div id="app">
    <!-- 头部 -->
    <baseHeader v-show="isLogin"></baseHeader>

    <!-- 主题其他模块 -->
    <router-view></router-view>
  </div>
</template>

<script>
import baseHeader from "./components/header/herder.vue";

export default {
  name: "app",
  components: {
    baseHeader
  },
  data() {
    return {
      isLogin: true
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
        this.$route.path.includes("/projectShouquan")
      ) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
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
