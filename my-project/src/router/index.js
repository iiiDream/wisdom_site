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


const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/green',component:green},
        {path:'/labour',component:labour},
        {path:'/safety',component:safety,children:[
            {path:"",component:towerCrane},
            {path:"towerCrane",component:towerCrane},
            {path:"elevator",component:elevator},
            {path:"car",component:car},
            {path:"gantryCrane",component:gantryCrane},
        ]},
    ]
})

export default router