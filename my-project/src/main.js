import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './common/font/font.css'
import './common/icon/iconfont'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.prototype.$echarts = echarts 
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
