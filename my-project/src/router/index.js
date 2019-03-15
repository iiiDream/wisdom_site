import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import axios from 'axios'
axios.defaults.baseURL = "http://gd.17hr.net:8018"
// axios.defaults.baseURL = "http://192.168.1.225:808"
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
// import engineering from '../components/engineering/engineering.vue'
import monitoring from '../components/monitoring/monitoring.vue'
import quality from '../components/quality/quality.vue'
import schedule from '../components/schedule/schedule.vue'
import loginOld from '../components/login/loginOld.vue'
import login from '../components/login/login.vue'
import homePage from '../components/homePage/homePage.vue'
import projectManagement from '../components/projectManagement/projectManagement.vue'
import mapDemo from '../components/mapDemo/mapDemo.vue'
import location from '../components/location/location.vue'
import l_homePage from '../components/location/l_homePage.vue'
import l_monitoring from '../components/location/l_monitoring.vue'
import l_search from '../components/location/l_search.vue'
import l_history from '../components/location////l_history.vue'
import l_set from '../components/location/l_set.vue'
import l_rail from '../components/location/l_rail.vue'
import gas from '../components/safety/gas.vue'
import q_statistics from '../components/quality/q_statistics.vue'
import q_set from '../components/quality/q_set.vue'
import q_record from '../components/quality/q_record.vue'

const router = new VueRouter({

    // 需要路由拦截
    routes:[
        {path:'/login',component:login},
        {path:'/loginOld',component:loginOld},
        {path:'/',redirect:'/login'},
        {path:'/md',meta:{needLogin:true},component:mapDemo},
        {path:'/projectManagement',meta:{needLogin:true},component:projectManagement},
        {path:'/homePage',meta:{needLogin:true},component:homePage},
        {path:'/home',meta:{needLogin:true},component:home},
        {path:'/green',meta:{needLogin:true},component:green},
        {path:'/labour',meta:{needLogin:true},component:labour},        
        {path:'/unopen',meta:{needLogin:true},component:unopen},
        {path:'/monitoring',meta:{needLogin:true},component:monitoring},
        // {path:'/quality',meta:{needLogin:true},component:quality},
        {path:'/schedule',meta:{needLogin:true},component:schedule},
        {path:'/safety',meta:{needLogin:true},component:safety,children:[
            {path:"",meta:{needLogin:true},component:elevator},
            {path:"towerCrane",meta:{needLogin:true},component:towerCrane},
            {path:"elevator",meta:{needLogin:true},component:elevator},
            {path:"car",meta:{needLogin:true},component:car},
            {path:"gantryCrane",meta:{needLogin:true},component:gantryCrane},
            {path:"gas",meta:{needLogin:true},component:gas},
        ]},
        {path:'/location',meta:{needLogin:true},component:location,children:[
            {path:"",meta:{needLogin:true},component:l_homePage},
            {path:"l_homePage",meta:{needLogin:true},component:l_homePage},
            {path:"l_monitoring",meta:{needLogin:true},component:l_monitoring},
            {path:"l_search",meta:{needLogin:true},component:l_search},
            {path:"l_history",meta:{needLogin:true},component:l_history},
            {path:"l_set",meta:{needLogin:true},component:l_set},
            {path:"l_rail",meta:{needLogin:true},component:l_rail},
        ]},
        {path:'/quality',meta:{needLogin:true},component:quality,children:[
            {path:"",meta:{needLogin:true},component:q_statistics},
            {path:"q_statistics",meta:{needLogin:true},component:q_statistics},
            {path:"q_set",meta:{needLogin:true},component:q_set},
            {path:"q_record",meta:{needLogin:true},component:q_record},
        ]},
    ]

    // 不需要路由拦截
    // routes:[
    //     {path:'/login',component:loginOld},
    //     {path:'/',redirect:'/home'},
    //     {path:'/home',component:home},
    //     {path:'/green',component:green},
    //     {path:'/labour',component:labour},
    //     {path:'/safety',component:safety,children:[
    //         {path:"",component:elevator},
    //         {path:"towerCrane",component:towerCrane},
    //         {path:"elevator",component:elevator},
    //         {path:"car",component:car},
    //         {path:"gantryCrane",component:gantryCrane},
    //     ]},
    //     {path:'/unopen',component:unopen},
    //     {path:'/engineering',component:engineering},
    //     {path:'/monitoring',component:monitoring},
    //     {path:'/quality',component:quality},
    //     {path:'/schedule',component:schedule},
    // ]
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