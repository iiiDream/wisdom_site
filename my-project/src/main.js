import Vue from 'vue'
import VueAMap from 'vue-amap'
import App from './App.vue'
import router from './router'
import './common/font/font.css'
// import './common/icon/iconfont'
import echarts from 'echarts'
<<<<<<< HEAD
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill'
import md5 from 'js-md5'
// import {
//   Carousel,
//   Row,
//   Col,
//   CarouselItem,
//   Collapse,
//   CollapseItem,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   Select,
//   Option,
//   Pagination,
//   Button,
//   ButtonGroup,
//   Input,
//   DatePicker,
//   Timeline,
//   TimelineItem,
//   MessageBox,
//   Message,
//   Notification,
// } from 'element-ui'

Vue.prototype.$echarts = echarts
Vue.prototype.$md5 = md5

// Vue.use(Carousel);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(CarouselItem);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(Select);
// Vue.use(Option);
// Vue.use(Pagination);
// Vue.use(Button);
// Vue.use(ButtonGroup);
// Vue.use(Input);
// Vue.use(DatePicker);
// Vue.use(Timeline);
// Vue.use(TimelineItem);
// Vue.use(Message);
// Vue.use(MessageBox);
// Vue.use(Notification);

Vue.use(ElementUI);
=======
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill';
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
  Pagination,
  Button,
  Input,
  DatePicker,
  Timeline,
  TimelineItem,
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
Vue.use(Pagination);
Vue.use(Button);
Vue.use(Input);
Vue.use(DatePicker);
Vue.use(Timeline);
Vue.use(TimelineItem);
>>>>>>> dfd29f3a1e1e1fd09e72107eeee24080a3143c95

Vue.use(VueAMap);
// Vue.config.productionTip = false;
VueAMap.initAMapApiLoader({
  key: 'b50968a4395c3e6e81326b99c217100a',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
