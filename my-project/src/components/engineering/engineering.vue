<template>
    <div id="engineering">
        <!-- 侧导航栏 -->
        <div class="select">
            <ul>
                <li @click="isActive='/engineering/m_statistics'">
                    <router-link to="/engineering/m_statistics" class="active">
                        <i class="statisti"></i>
                        安全统计
                    </router-link>
                </li>
                <li @click="isActive='/location/l_search'">
                    <router-link to="/location/l_search">
                        <i class="search"></i>
                        检查记录
                    </router-link>
                </li>
                <li @click="isActive='/location/l_rail'">
                    <router-link to="/location/l_rail">
                        <i class="rail"></i>
                        整改单管理
                    </router-link>
                </li>
                <li @click="isActive='/location/l_set'">
                    <router-link to="/location/l_set">
                        <i class="system"></i>
                        安全设置
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 内容区域 -->
        <router-view class="router-box"></router-view>
    </div>
</template>

<style lang="less">
    #engineering {
        padding:  .5rem .4rem 0 .4rem;
        display: flex;
        .select {
            width: 3rem;
            height: 9.41rem;
            background-image: url('../../../static/images/m_left-border.png');
            background-size: contain;
            background-color: #020521;
            padding: .02rem;
            margin-right: .4rem;
            ul {
                li {
                    height: .57rem;
                    background-image: url('../../../static/images/m_select-border.png');
                    background-position: bottom center;
                    background-repeat: no-repeat;
                    background-size: 2.73rem .01rem;
                    a {
                        display: block;
                        width: 2.94rem;
                        height: .56rem;
                        color: #3979fe;
                        position: relative;
                        line-height: .56rem;
                        padding-left: .42rem;
                        i {
                            width: .17rem;
                            height: .17rem;
                            position: absolute;
                            background-size: contain;
                            left: .17rem;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                        .rail {
                            background-image: url('../../../static/images/location-rail.png');
                        }
                        .statisti {
                            background-image: url('../../../static/images/location-statisti.png');
                        }
                        .system {
                            background-image: url('../../../static/images/location-system.png');
                        }
                        .search {
                            background-image: url('../../../static/images/location-search.png');
                        }
                    }
                    .active {
                        background-image: url('../../../static/images/location-active.png');
                        background-size: contain;
                    }
                }
            }
        }
        .router-box {
            flex: 1;
        } 
    }
</style>

<script>
  export default {
    data() {
        return {
            activeNames: ['']
        };
    },
    methods: {
        handleChange(val) {
            console.log(val);
        }
    }
  }
</script>
