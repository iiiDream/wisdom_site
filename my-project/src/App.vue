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
@import url('./common/icon/iconfont.css');
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style>
