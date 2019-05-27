<template>
    <div id="workerHome">
        <!-- 顶部通栏 -->
        <div class="top-nav">
            <div class="top-nav-box">
                <div class="logo-box"></div>
                <a class="return" @click="returnClick">返回</a>
            </div>
        </div>
        <!-- 搜索栏 -->
        <div class="search-box">
            <div class="search-background">
                <div class="area-search">
                    <i class="area-icon"></i>
                    <input type="text" placeholder="地区">
                </div>
                <div class="type-search">
                    <i class="type-icon"></i>
                    <input type="text" placeholder="工种">
                </div>
                <div class="search-button">
                    <a>搜索</a>
                </div>
            </div>
        </div>
        <!-- 页面主体 -->
        <div class="centent-box">
            <ul>
                <li v-for="(item,index) in foremanData" :key="index">
                    <a @click="$router.push({ path: '/workerParticular', query: { teamId: item.teamId } })">
                        <div class="picture">
                            <img :src="imageUrl+item.photoName" alt="">
                        </div>
                        <div class="name">
                            {{item.groupName}}
                        </div>
                        <div class="nation">
                            民族：{{item.nation}}族
                        </div>
                        <div class="area">
                            区域：{{item.teamName}}
                        </div>
                        <div class="number">
                            工龄：{{item.worKing==0?'1':item.worKing}}年
                        </div>
                        <!-- <div class="working-years">
                            工龄：3年
                        </div> -->
                    </a>
                </li>
            </ul>
        </div>
        <!-- 回到顶部 -->
        <a class="to-top" @click="topClick">
            <i class="el-icon-upload2"></i>
        </a>
    </div>
</template>

<style lang="less">
    #workerHome {
        position: relative;
        .top-nav {
            height: 54px;
            background-color: #fff;
            .top-nav-box {
                width: 1240px;
                height: 54px;
                margin: 0 auto;
                position: relative;
                .logo-box {
                    width: 120px;
                    height: 54px;
                    background-image: url('../../../static/images/yzt-redLogo.png');
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: 120px 35px;
                }
                .return {
                    width: 50px;
                    font-size: 18px;
                    color: #205198;
                    border-radius: 5px;
                    display: inline-block;
                    border: 1px solid #205198;
                    vertical-align: top;
                    line-height: 26px;
                    text-align: center;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    transition: all .5s;
                }
                .return:hover {
                    color: #fff;
                    background-color: #205198;
                }
            }
        }
        .search-box {
            height: 350px;
            padding-top: 96px;
            background-image: url('../../../static/images/workerHome-bigBackground.png');
            background-position: center center;
            background-repeat: no-repeat;
            // background-size: contain;
            .search-background {
                width: 1240px;
                height: 107px;
                margin: 0 auto;
                padding-top: 18px;
                padding-left: 20px;
                background-color: rgba(255, 255, 255, .6);
                >div {
                    float: left;
                    height: 70px;
                    >i {
                        width: 60px;
                        height: 70px;
                        float: left;
                        background-position: center center;
                        background-repeat: no-repeat;
                    }
                    >input {
                        float: left;
                        width: 467px;
                        height: 70px;
                        font-size: 18px;
                    }
                    ::-webkit-input-placeholder { color:#b2b2b2;}
                    ::-moz-placeholder { color:#b2b2b2;} /* firefox 19+ */
                    :-ms-input-placeholder { color:#b2b2b2;} /* Internet Explorer 10+ */
                    :-moz-placeholder { color:#b2b2b2;} /* firefox 14-18 */
                }
                .area-search,
                .type-search {
                    width: 539px;
                    padding-left: 12px;
                    background-color: #fff;
                }
                .area-search {
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    .area-icon {
                        background-image: url('../../../static/images/workerHome-areaIcon.png');
                    }
                }
                .type-search {
                    margin-left: 2px;
                    .type-icon {
                        background-image: url('../../../static/images/workerHome-typeIcon.png');
                    }
                }
                .search-button {
                    a {
                        width: 120px;
                        height: 70px;
                        color: #fff;
                        display: block;
                        font-size: 20px;
                        line-height: 70px;
                        text-align: center;
                        background-color: #205198;
                        border-top-right-radius: 5px;
                        border-bottom-right-radius: 5px;
                    }
                }
            }
        }
        .centent-box {
            background-color: #f5f5f5;
            padding-top: 36px;
            min-height: 533px;
            ul {
                width: 1220px;
                margin: 0 auto;
                li {
                    margin-right: 19px;
                    display: inline-block;
                    background-color: #fff;
                    width: 286px;
                    height: 340px;
                    padding-top: 13px;
                    margin-bottom: 36px;
                    a {
                        display: block;
                        width: 260px;
                        height: 314px;
                        margin: 0 auto;
                        position: relative;
                        background-color: #f5f5f5;
                        .picture {
                            width: 260px;
                            height: 157px;
                            // background-color: aquamarine;
                            overflow: hidden;
                            text-align: center;
                            img {
                                // width: 260px;
                                height: 157px;
                            }
                        }
                        .name {
                            padding-left: 22px;
                            font-size: 18px;
                            margin-top: 16px;
                        }
                        .nation {
                            padding-left: 22px;
                            font-size: 15px;
                            margin-top: 12px;
                        }
                        .area {
                            padding-left: 22px;
                            font-size: 15px;
                            margin-top: 12px;
                        }
                        .number {
                            padding-left: 22px;
                            font-size: 15px;
                            margin-top: 12px;
                        }
                        .working-years {
                            right: 14px;
                            bottom: 9px;
                            width: 97px;
                            height: 24px;
                            color: #205198;
                            position: absolute;
                            font-size: 15px;
                            text-align: center;
                            line-height: 22px;
                            border: 1px solid #205198;
                            border-radius: 3px;
                        }
                    }
                }
            }
        }
        .to-top {
            right: 60px;
            width: 35px;
            height: 35px;
            bottom: 60px;
            position: fixed;
            line-height: 35px;
            text-align: center;
            transition: all .5s;
            border-radius: 35px;
            border: 1px solid #333;
            i {
                font-size: 28px;
            }
            &:hover {
                color: #fff;
                border-color: #205198;
                background-color: #205198;
            }
        }
    }
</style>

<script>
import { get } from 'http';
export default {
    data() {
        return {
            areaData: '', // 地区数据
            workTypeData: '', // 工种数据
            foremanData: '',
            imageUrl: 'http://hujiang.oss-cn-shenzhen.aliyuncs.com/', // 图片地址
        }
    },
    created() {
        this.getQueryUtil()
        this.getqueryWorkTypeData()
        this.getQueryForemanData()
    },
    methods: {
        // 获取地区
        getQueryUtil() {
            this.$axios.post(`/lz/hujiangGroup/queryUtil`).then(
                res => {
                    // console.log(res.data)
                    this.areaData = res.data.msg
                }
            )
        },

        // 获取工种
        getqueryWorkTypeData() {
            this.$axios.post(`/lz/hujiangGroup/queryWorkType`).then(
                res => {
                    // console.log(res.data)
                    this.workTypeData = res.data.msg
                }
            )
        },

        // 获取班组数据
        getQueryForemanData() {
            this.$axios.post(`/lz/hujiangGroup/queryForeman`).then(
                res => {
                    this.foremanData = res.data.msg
                }
            )
        },

        // 返回
        returnClick() {
            // console.log(this.$router)
            this.$router.go(-1)
        },

        // 回到顶部
        topClick() {
            // console.log($('html').scrollTop()+':'+$('body').scrollTop())
            $('html').animate({
                scrollTop:'0'
            },500)
        },
    }
}
</script>