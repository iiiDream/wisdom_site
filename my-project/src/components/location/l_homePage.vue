<template>
    <div>
        <div class="top-box">
            <div class="headcount"></div>
            <div class="attendance"></div>
        </div>
        <div class="map-box"></div>
    </div>
</template>

<style lang="less" scoped>
    .top-box {
        display: flex;
        justify-content: space-between;
        >div {
            width: 7.3rem;
            height: 1.67rem;
            background-image: url('../../../static/images/location-topBorder.png');
            background-size: contain;
        }
    }
    .map-box {
        width: 15rem;
        height: 7.34rem;
        margin-top: .4rem;
        background-image: url('../../../static/images/location-middleBorder.png');
        background-size: contain;
    }
</style>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

