import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import axios from 'axios'
// axios.defaults.baseURL = "http://47.106.148.205:8899/"
axios.defaults.withCredentials=true //让ajax携带cookie
Vue.prototype.$axios = axios

import home from '../components/home/home.vue'

const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
    ]
})

export default router