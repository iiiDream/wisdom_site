import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import axios from 'axios'
axios.defaults.baseURL = "http://gd.17hr.net:8018"
axios.defaults.withCredentials=true //让ajax携带cookie
Vue.prototype.$axios = axios

import home from '../components/home/home.vue'
import green from '../components/green/green.vue'
import labour from '../components/labour/labour.vue'
import safety from '../components/safety/safety.vue'
import towerCrane from '../components/safety/towerCrane.vue'
import elevator from '../components/safety/elevator.vue'
import car from '../components/safety/car.vue'
import gantryCrane from '../components/safety/gantryCrane.vue'
import unopen from '../components/unopen/unopen.vue'
import engineering from '../components/engineering/engineering.vue'
import monitoring from '../components/monitoring/monitoring.vue'
import quality from '../components/quality/quality.vue'
import schedule from '../components/schedule/schedule.vue'
import login from '../components/login/login.vue'


const router = new VueRouter({
    routes:[
        {path:'/login',component:login},
        {path:'/',redirect:'/home'},
        {path:'/home',meta:{needLogin:true},component:home},
        {path:'/green',meta:{needLogin:true},component:green},
        {path:'/labour',meta:{needLogin:true},component:labour},
        {path:'/safety',meta:{needLogin:true},component:safety,children:[
            {path:"",meta:{needLogin:true},component:elevator},
            {path:"towerCrane",meta:{needLogin:true},component:towerCrane},
            {path:"elevator",meta:{needLogin:true},component:elevator},
            {path:"car",meta:{needLogin:true},component:car},
            {path:"gantryCrane",meta:{needLogin:true},component:gantryCrane},
        ]},
        {path:'/unopen',meta:{needLogin:true},component:unopen},
        {path:'/engineering',meta:{needLogin:true},component:engineering},
        {path:'/monitoring',meta:{needLogin:true},component:monitoring},
        {path:'/quality',meta:{needLogin:true},component:quality},
        {path:'/schedule',meta:{needLogin:true},component:schedule},
    ]
})

router.beforeEach((to,from,next)=>{
    if (to.meta.needLogin) {
        const islogin = localStorage.getItem('islogin')
        if (islogin) {
            next()
        }else{
            next('/login')
        }
    }else{
        next()
    }
})


export default router