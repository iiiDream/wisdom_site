<template>
    <div id="safey">
        <div class="side-nav">
            <router-link to="/safety/elevator"  class="active">升降机</router-link>
            <i class="nav-border"></i>
            <router-link to="/safety/towerCrane">塔吊</router-link>
            <i class="nav-border"></i>
            <router-link to="/safety/car">车辆出入</router-link>
            <i class="nav-border"></i>
            <router-link to="/safety/gantryCrane">龙门吊</router-link>
        </div>
        <router-view class="router-box"></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    #safey {
        display: flex;
    }
    .side-nav {
        display: inline-block;
        width: 1.3rem;
        margin-left: .4rem;
        margin-top: .51rem;
        height: 5.71rem;
        text-align: center;
        background-image: url('../../../static/images/s_nav-background.png');
        background-size: contain;
    }
    .router-box {
        flex: 1;
        display: inline-block;
        padding: 0.51rem 0.3rem 0.4rem 0.4rem;
    }
    .side-nav a {
        display: block;
        font-size: .18rem;
        color: #3375fe;
        line-height: .56rem;
    }
    .nav-border {
        display: block;
        background-image: url('../../../static/images/s_nav-border.png');
        background-size: contain;
        height: .01rem;
        width: .92rem;
        margin-left: 50%;
        transform: translate(-50%);
    }
    a.active{
        color: #fff;
        background: linear-gradient(to right,#0163ff,#00aefe);
    }
</style>

