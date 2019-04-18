<template>
    <div id="workerHome">
        <!-- 顶部通栏 -->
        <div class="top-nav">
            <div class="top-nav-box">
                <div class="logo-box"></div>
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
                <li>
                    <a>
                        <div class="picture"></div>
                        <div class="name">
                            戴春永木工班组
                        </div>
                        <div class="nation">
                            民族：汉族
                        </div>
                        <div class="area">
                            区域：广东省深圳市
                        </div>
                        <div class="number">
                            人数：10人
                        </div>
                        <div class="working-years">
                            工龄：3年
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="picture"></div>
                        <div class="name">
                            戴春永木工班组
                        </div>
                        <div class="nation">
                            民族：汉族
                        </div>
                        <div class="area">
                            区域：广东省深圳市
                        </div>
                        <div class="number">
                            人数：10人
                        </div>
                        <div class="working-years">
                            工龄：3年
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="picture"></div>
                        <div class="name">
                            戴春永木工班组
                        </div>
                        <div class="nation">
                            民族：汉族
                        </div>
                        <div class="area">
                            区域：广东省深圳市
                        </div>
                        <div class="number">
                            人数：10人
                        </div>
                        <div class="working-years">
                            工龄：3年
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="picture"></div>
                        <div class="name">
                            戴春永木工班组
                        </div>
                        <div class="nation">
                            民族：汉族
                        </div>
                        <div class="area">
                            区域：广东省深圳市
                        </div>
                        <div class="number">
                            人数：10人
                        </div>
                        <div class="working-years">
                            工龄：3年
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="picture"></div>
                        <div class="name">
                            戴春永木工班组
                        </div>
                        <div class="nation">
                            民族：汉族
                        </div>
                        <div class="area">
                            区域：广东省深圳市
                        </div>
                        <div class="number">
                            人数：10人
                        </div>
                        <div class="working-years">
                            工龄：3年
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="picture"></div>
                        <div class="name">
                            戴春永木工班组
                        </div>
                        <div class="nation">
                            民族：汉族
                        </div>
                        <div class="area">
                            区域：广东省深圳市
                        </div>
                        <div class="number">
                            人数：10人
                        </div>
                        <div class="working-years">
                            工龄：3年
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="picture"></div>
                        <div class="name">
                            戴春永木工班组
                        </div>
                        <div class="nation">
                            民族：汉族
                        </div>
                        <div class="area">
                            区域：广东省深圳市
                        </div>
                        <div class="number">
                            人数：10人
                        </div>
                        <div class="working-years">
                            工龄：3年
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="picture"></div>
                        <div class="name">
                            戴春永木工班组
                        </div>
                        <div class="nation">
                            民族：汉族
                        </div>
                        <div class="area">
                            区域：广东省深圳市
                        </div>
                        <div class="number">
                            人数：10人
                        </div>
                        <div class="working-years">
                            工龄：3年
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="less">
    #workerHome {
        .top-nav {
            height: 54px;
            background-color: #fff;
            .top-nav-box {
                width: 1240px;
                height: 54px;
                margin: 0 auto;
                .logo-box {
                    width: 120px;
                    height: 54px;
                    background-image: url('../../../static/images/workerHome-logo.png');
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: contain;
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
                width: 1200px;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li {
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
                            background-color: aquamarine;
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
                        }
                    }
                }
            }
        }
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