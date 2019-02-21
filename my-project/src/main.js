import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './common/font/font.css'
// import './common/icon/iconfont'
import echarts from 'echarts'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill';
import {
  Carousel,
  Row,
  Col,
  CarouselItem,
  Collapse,
  CollapseItem
} from 'element-ui'

Vue.prototype.$echarts = echarts
Vue.use(Carousel);
Vue.use(Row);
Vue.use(Col);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
