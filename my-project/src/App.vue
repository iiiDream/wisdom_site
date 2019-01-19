<template>
  <div id="app">
    <!-- 头部 -->
    <baseHeader></baseHeader>

    <!-- 主题其他模块 -->
    <router-view></router-view>

  </div>
</template>

<script>
import baseHeader from './components/header/herder.vue'

export default {
  name: 'app',
  components: {
    baseHeader
  }
}
</script>

<style>
@import url('./common/base.css');
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
body {
  background-image: url('../static/images/index.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
