import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './common/font/font.css'
// import './common/icon/iconfont'
import echarts from 'echarts'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill';
import VueAMap from 'vue-amap';
import {
  Carousel,
  Row,
  Col,
  CarouselItem,
  Collapse,
  CollapseItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Select,
  Option,
} from 'element-ui'

Vue.prototype.$echarts = echarts
Vue.use(Carousel);
Vue.use(Row);
Vue.use(Col);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Select);
Vue.use(Option);

Vue.use(VueAMap);
Vue.config.productionTip = false;
VueAMap .initAMapApiLoader({
  key: 'b50968a4395c3e6e81326b99c217100a',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType',],
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
