<template>
    <div id="systemHome">
        <!-- 侧导航栏 -->
        <div class="side-nav">
            <ul>
                <li>
                    <a class="active">
                        首页
                        <i class="el-icon-caret-bottom"></i>
                    </a>
                </li>
                <li>
                    <a>两制管理</a>
                </li>
                <li>
                    <a>智慧工地</a>
                </li>
                <li>
                    <a>设置</a>
                </li>
            </ul>
        </div>
        <!-- 内容 -->
        <div class="centent"></div>
    </div>
</template>

<style lang="less">
    #systemHome {
        width: 100%;
        background-color: #f7f7f7;
        .side-nav {
            width: 9.1%;
            height: 10rem;
            padding-top: .4rem;
            vertical-align: top;
            display: inline-block;
            background-color: #fff;
            ul {
                li {
                    height: .6rem;
                    position: relative;
                    a {
                        width: 100%;
                        height: 100%;
                        font-size: .2rem;
                        line-height: .6rem;
                        position: absolute;
                        padding-left: .3rem;
                        transition: all .5s;
                        i {
                            margin-left: .55rem;
                        }
                    }
                    a:hover {
                        background-color: #f7f7f7;
                    }
                    .active {
                        z-index: 10;
                        color: #fff;
                        height: .7rem;
                        width: 1.91rem;
                        line-height: .7rem;
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: left center;
                        background-image: url('../../../static/images/homePage_leftbtn.png');
                    }
                }
            }
        }
        .centent {
            width: 87.8%;
            height: 5rem;
            margin-top: .4rem;
            margin-left: 1.55%;
            vertical-align: top;
            display: inline-block;
            border-radius: .04rem;
            background-color: #fff;
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