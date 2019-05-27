import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import axios from 'axios'
// 默认请求域名
// axios.defaults.baseURL = "http://gd.17hr.net:8018"
// axios.defaults.baseURL = "http://192.168.1.225:808"

// 本地
// axios.defaults.baseURL = "http://192.168.0.142:8989"
// 网络
axios.defaults.baseURL = "http://39.108.103.150:8989"
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
import q_particulars from '../components/quality/q_particulars.vue'
import q_infoParticulars from '../components/quality/q_infoParticulars.vue'
import q_infopath from '../components/quality/q_infopath.vue'
import g_particulars from '../components/green/g_particulars.vue'
import g_electricity from '../components/green/g_electricity.vue'
import information from '../components/information/information.vue'
import workerHome from '../components/worker/workerHome.vue'
import workerParticular from '../components/worker/workerParticular.vue'
import dormitory from '../components/dormitory/dormitory.vue'
import gongsiManagement from '../components/gongsiManagement/gongsiManagement.vue'
import gongsiShouquan from '../components/gongsiManagement/gongsiShouquan.vue'
import projectShezhi from '../components/projectManagement/projectShezhi.vue'
import projectShouquan from '../components/projectManagement/projectShouquan.vue'
import systemHome from '../components/system/systemHome.vue'
import systemLiangZhi from '../components/system/systemLiangZhi/systemLiangZhi.vue'
import systemLiangZhi_home from '../components/system/systemLiangZhi/systemLiangZhi_home.vue'

import systemLiangZhi_contractors from '../components/system/systemLiangZhi/systemLiangZhi_contractors.vue'
import gaoZhiMo from '../components/gaoZhiMo/gaoZhiMo.vue'
import systemLiangZhi_team from '../components/system/systemLiangZhi/systemLiangZhi_team.vue'
import systemLiangZhi_personnel from '../components/system/systemLiangZhi/systemLiangZhi_personnel.vue'
import systemLiangZhi_fw_one from '../components/system/systemLiangZhi/systemLiangZhi_fw_one.vue'
import systemLiangZhi_fw_two from '../components/system/systemLiangZhi/systemLiangZhi_fw_two.vue'
import systemLiangZhi_fw_three from '../components/system/systemLiangZhi/systemLiangZhi_fw_three.vue'
import systemLiangZhi_fw_four from '../components/system/systemLiangZhi/systemLiangZhi_fw_four.vue'
import systemZhiHui from '../components/system/systemZhiHui/systemZhiHui.vue'
import systemZhiHui_taDiao from '../components/system/systemZhiHui/systemZhiHui_taDiao.vue'
import systemZhiHui_shengJiangJi from '../components/system/systemZhiHui/systemZhiHui_shengJiangJi.vue'
import systemZhiHui_dianXiang from '../components/system/systemZhiHui/systemZhiHui_dianXiang.vue'
import systemLiangZhi_attendance from '../components/system/systemLiangZhi/systemLiangZhi_attendance.vue'
import systemLiangZhi_exception from '../components/system/systemLiangZhi/systemLiangZhi_exception'
import systemLiangZhi_blacklist from '../components/system/systemLiangZhi/systemLiangZhi_blacklist'
import systemLiangZhi_equipment from '../components/system/systemLiangZhi/systemLiangZhi_equipment'
import systemGreen from '../components/system/systemGreen/systemGreen.vue'
import systemGreen_TSP from '../components/system/systemGreen/systemGreen_TSP.vue'
import systemSet from '../components/system/systemSet/systemSet.vue'
import system_projectSet from '../components/system/systemSet/system_projectSet.vue'
import systemSet_qx_one from '../components/system/systemSet/systemSet_qx_one.vue'
import systemSet_qx_two from '../components/system/systemSet/systemSet_qx_two.vue'
import systemSet_qx_three from '../components/system/systemSet/systemSet_qx_three.vue'

const router = new VueRouter({

    // 需要路由拦截
    routes:[
        // 看板页面
        {path:'/login',component:login},
        {path:'/loginOld',component:loginOld},
        {path:'/',redirect:'/login'},
        {path:'/md',meta:{needLogin:true},component:mapDemo},
        {path:'/projectManagement',meta:{needLogin:true},component:projectManagement},
        {path:'/homePage',meta:{needLogin:true},component:homePage},
        {path:'/home',meta:{needLogin:true},component:home},
        {path:'/green',meta:{needLogin:true},component:green},
        {path:'/green/g_particulars',component:g_particulars},
        {path:'/green/g_electricity',component:g_electricity},
        {path:'/labour',meta:{needLogin:true},component:labour},        
        {path:'/unopen',meta:{needLogin:true},component:unopen},
        {path:'/monitoring',meta:{needLogin:true},component:monitoring},
        {path:'/information',meta:{needLogin:true},component:information},
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
            {path:"q_infopath",meta:{needLogin:true},component:q_infopath},
            {path:'q_infoParticulars',meta:{needLogin:true},component:q_infoParticulars},
        ]},
        {path:'/q_particulars',meta:{needLogin:true},component:q_particulars},
        {path:'/workerHome',meta:{needLogin:true},component:workerHome},
        {path:'/workerParticular',meta:{needLogin:true},component:workerParticular},
        {path:'/dormitory',meta:{needLogin:true},component:dormitory},
        {path:'/gongsiManagement',meta:{needLogin:true},component:gongsiManagement},
        {path:'/gongsiShouquan',meta:{needLogin:true},component:gongsiShouquan},
        {path:'/projectShezhi',meta:{needLogin:true},component:projectShezhi},
        {path:'/projectShouquan',meta:{needLogin:true},component:projectShouquan},
        {path:'/gaoZhiMo',meta:{needLogin:true},component:gaoZhiMo},

        // 后台管理系统页面
        {path:'/systemHome',meta:{needLogin:true},component:systemHome},
        {path:'/systemLiangZhi',meta:{needLogin:true},component:systemLiangZhi,children:[
            {path:'',meta:{needLogin:true},component:systemLiangZhi_home},
            {path:'/systemLiangZhi_home',meta:{needLogin:true},component:systemLiangZhi_home},
            {path:'/systemLiangZhi_contractors',meta:{needLogin:true},component:systemLiangZhi_contractors},
            {path:'/systemLiangZhi_team',meta:{needLogin:true},component:systemLiangZhi_team},
            {path:'/systemLiangZhi_personnel',meta:{needLogin:true},component:systemLiangZhi_personnel},
            {path:'/systemLiangZhi_attendance',meta:{needLogin:true},component:systemLiangZhi_attendance},
            {path:'/systemLiangZhi_exception',meta:{needLogin:true},component:systemLiangZhi_exception},
            {path:'/systemLiangZhi_blacklist',meta:{needLogin:true},component:systemLiangZhi_blacklist},
            {path:'/systemLiangZhi_equipment',meta:{needLogin:true},component:systemLiangZhi_equipment},
            {path:'/systemLiangZhi_fw_one',meta:{needLogin:true},component:systemLiangZhi_fw_one},
            {path:'/systemLiangZhi_fw_two',meta:{needLogin:true},component:systemLiangZhi_fw_two},
            {path:'/systemLiangZhi_fw_three',meta:{needLogin:true},component:systemLiangZhi_fw_three},
            {path:'/systemLiangZhi_fw_four',meta:{needLogin:true},component:systemLiangZhi_fw_four},
        ]},
        {path:'/systemZhiHui',meta:{needLogin:true},component:systemZhiHui,children:[
            {path:'',meta:{needLogin:true},component:systemZhiHui_taDiao},
            {path:'/systemZhiHui_taDiao',meta:{needLogin:true},component:systemZhiHui_taDiao},
            {path:'/systemZhiHui_shengJiangJi',meta:{needLogin:true},component:systemZhiHui_shengJiangJi},
            {path:'/systemZhiHui_dianXiang',meta:{needLogin:true},component:systemZhiHui_dianXiang},
        ]},
        {path:'/systemGreen',meta:{needLogin:true},component:systemGreen,children:[
            {path:'',meta:{needLogin:true},component:systemGreen_TSP},
            {path:'/systemGreen_TSP',meta:{needLogin:true},component:systemGreen_TSP},
        ]},
        {path:'/systemSet',meta:{needLogin:true},component:systemSet,children:[
            {path:'',meta:{needLogin:true},component:system_projectSet},
            {path:'/system_projectSet',meta:{needLogin:true},component:system_projectSet},
            {path:'/systemSet_qx_two',meta:{needLogin:true},component:systemSet_qx_two},
            {path:'/systemSet_qx_one',meta:{needLogin:true},component:systemSet_qx_one},
            {path:'/systemSet_qx_three',meta:{needLogin:true},component:systemSet_qx_three},
        ]},

    ]

    // 不需要路由拦截
    // routes:[
    //     {path:'/login',component:login},
    //     {path:'/loginOld',component:loginOld},
    //     {path:'/',redirect:'/home'},
    //     {path:'/md',component:mapDemo},
    //     {path:'/projectManagement',component:projectManagement},
    //     {path:'/homePage',component:homePage},
    //     {path:'/home',component:home},
    //     {path:'/green',component:green},
    //     {path:'/green/g_particulars',component:g_particulars},
    //     {path:'/green/g_electricity',component:g_electricity},
    //     {path:'/labour',component:labour},        
    //     {path:'/unopen',component:unopen},
    //     {path:'/monitoring',component:monitoring},
    //     {path:'/information',component:information},
    //     // {path:'/quality',component:quality},
    //     {path:'/schedule',component:schedule},
    //     {path:'/safety',component:safety,children:[
    //         {path:"",component:elevator},
    //         {path:"towerCrane",component:towerCrane},
    //         {path:"elevator",component:elevator},
    //         {path:"car",component:car},
    //         {path:"gantryCrane",component:gantryCrane},
    //         {path:"gas",component:gas},
    //     ]},
    //     {path:'/location',component:location,children:[
    //         {path:"",component:l_homePage},
    //         {path:"l_homePage",component:l_homePage},
    //         {path:"l_monitoring",component:l_monitoring},
    //         {path:"l_search",component:l_search},
    //         {path:"l_history",component:l_history},
    //         {path:"l_set",component:l_set},
    //         {path:"l_rail",component:l_rail},
    //     ]},
    //     {path:'/quality',component:quality,children:[
    //         {path:"",component:q_statistics},
    //         {path:"q_statistics",component:q_statistics},
    //         {path:"q_set",component:q_set},
    //         {path:"q_record",component:q_record},
    //         {path:"q_infopath",component:q_infopath},
    //         {path:'q_infoParticulars',component:q_infoParticulars},
    //     ]},
    //     {path:'/q_particulars',component:q_particulars},
    //     {path:'/workerHome',component:workerHome},
    //     {path:'/workerParticular',component:workerParticular},
    //     {path:'/dormitory',component:dormitory},
    //     {path:'/gongsiManagement',component:gongsiManagement},
    //     {path:'/gongsiShouquan',component:gongsiShouquan},
    //     {path:'/projectShezhi',component:projectShezhi},
    //     {path:'/projectShouquan',component:projectShouquan},
    //     {path:'/gaozhimo',component:gaozhimo},
    // ]
})

router.beforeEach((to,from,next)=>{
    if (to.meta.needLogin) {
        const islogin = sessionStorage.getItem('islogin')
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