<template>
    <div id="q_infopath">
        <div class="centent-box">
            <!-- 搜索区域 -->
            <div class="search-box">
                <div class="search-left">
                    <ul>
                        <li>
                            打印状态：
                            <el-select v-model="value1" placeholder="所有" size="mini">
                                <el-option
                                    v-for="item in options1"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            整改状态：
                            <el-select v-model="value2" placeholder="所有" size="mini">
                                <el-option
                                    v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            责任分包单位：
                            <el-select v-model="value3" placeholder="所有" size="mini">
                                <el-option
                                    v-for="item in options3"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                    </ul>
                </div>
                <div class="search-middle">
                    <ul>
                        <li>
                            检查人：
                            <el-select v-model="value4" placeholder="所有" size="mini">
                                <el-option
                                    v-for="item in options4"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            整改人：
                            <el-select v-model="value5" placeholder="所有" size="mini">
                                <el-option
                                    v-for="item in options5"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            复查人：
                            <el-select v-model="value6" placeholder="所有" size="mini">
                                <el-option
                                    v-for="item in options6"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                    </ul>
                </div>
                <div class="search-right">
                    <ul>
                        <li>
                            发起时间：
                            <el-date-picker
                                size="mini"
                                v-model="value7"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </li>
                    </ul>
                </div>
                <div class="search-bottom">
                    共
                    <span>30</span>
                    条记录，待整改
                    <span>4</span>
                    条，待复查
                    <span>0</span>
                    条
                    <div class="search-bar">
                        <input type="text" placeholder="输入问题搜索">
                        <i></i>
                    </div>
                </div>
            </div>
            <!-- 列表区域 -->
            <div class="list-box">
                <ul class="list-head">
                    <li>
                        <!-- number -->
                        <div class="number">
                            整改单编号
                        </div>
                        <div class="type">
                            隐患数量
                        </div>
                        <div class="examine">
                            检查人
                        </div>
                        <div class="duty">
                            责任分包单位
                        </div>
                        <div class="state">
                            整改状态
                        </div>
                        <div class="time">
                            创建时间
                        </div>
                        <div class="operation">
                            操作
                        </div>
                    </li>
                </ul>
                <ul class="list-body">
                    <li @click="particulars">
                        <div class="number">
                            10088
                        </div>
                        <div class="type">
                            1
                        </div>
                        <div class="examine">
                            王家兴
                        </div>
                        <div class="duty">
                            深圳市伟业建筑劳务有限公司
                        </div>
                        <div class="state">
                            未整改
                        </div>
                        <div class="time">
                            2018-07-23
                        </div>
                        <div class="operation">
                            <a @click="aClick"></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #q_infopath {
        color: #fff;
        .centent-box {
            width: 15rem;
            height: 9.42rem;
            padding: .2rem .18rem 0 .18rem;
            background-image: url('../../../static/images/q_r-border.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            .search-box {
                .search-left {
                    display: inline-block;
                    ul {
                        width: 3.4rem;
                        height: 1.66rem;
                        li {
                            font-size: .15rem;
                            color: #dddedf;
                            float: right;
                            margin-top: .12rem;
                            .el-select {
                                overflow: hidden;
                                border: .01rem solid #4f5167;
                                border-radius: .02rem;
                                transform: translateY(.1rem);
                                .el-input {
                                    .el-input__inner {
                                        color: #fff;
                                        font-size: .15rem;
                                        background-color: rgba(0, 0, 0, 0);
                                    }
                                }
                            }
                        }
                    }
                }
                .search-middle {
                    margin-left: 2rem;
                    display: inline-block;
                    ul {
                        width: 3.4rem;
                        height: 1.66rem;
                        li {
                            font-size: .15rem;
                            color: #dddedf;
                            float: right;
                            margin-top: .12rem;
                            .el-select {
                                overflow: hidden;
                                border: .01rem solid #4f5167;
                                border-radius: .02rem;
                                transform: translateY(.1rem);
                                .el-input {
                                    .el-input__inner {
                                        color: #fff;
                                        font-size: .15rem;
                                        background-color: rgba(0, 0, 0, 0);
                                    }
                                }
                            }
                        }
                    }
                }
                .search-right {
                    margin-left: 2rem;
                    display: inline-block;
                    ul {
                        width: 3.4rem;
                        height: 1.66rem;
                        li {
                            font-size: .15rem;
                            color: #dddedf;
                            float: right;
                            margin-top: .12rem;
                            .el-select {
                                overflow: hidden;
                                border: .01rem solid #4f5167;
                                border-radius: .02rem;
                                transform: translateY(.1rem);
                                .el-input {
                                    .el-input__inner {
                                        color: #fff;
                                        font-size: .15rem;
                                        background-color: rgba(0, 0, 0, 0);
                                    }
                                }
                            }
                            >.el-input__inner {
                                border: .01rem solid #4f5167;
                                border-radius: .02rem;
                                width: 2.18rem;
                                background-color: rgba(0, 0, 0, 0);
                                .el-range-separator {
                                    color: #fff;
                                    transform: translateX(-0.02rem);
                                    padding: 0;
                                }
                                .el-range-input {
                                    color: #fff;
                                    background-color: rgba(0, 0, 0, 0);
                                }
                            }
                        }
                    }
                }
                .search-bottom {
                    color: #dddedf;
                    font-size: .15rem;
                    span {
                        color: #fff;
                        font-size: .17rem;
                    }
                    .search-bar {
                        border: .01rem solid #4f5167;
                        border-radius: .02rem;
                        display: inline-block;
                        input {
                            color: #fff;
                            width: 1.8rem;
                            height: .28rem;
                            padding-left: .09rem;
                            background-color: rgba(0, 0, 0, 0);
                        }
                    }
                }
            }
            .list-box {
                margin-top: .15rem;
                .list-head {
                    height: .3rem;
                    padding-left: .3rem;
                    // padding-right: .3rem;
                    background-color: #142a6a;
                    li {
                        line-height: .3rem;
                        display: flex;
                        justify-content: space-between;
                        >div {
                            font-size: .14rem;
                            color: #3375fe;
                        }
                        .number {
                            flex: 2;
                        }
                        .type {
                            flex: 2;
                        }
                        .examine {
                            flex: 1;
                        }
                        .duty {
                            flex: 8;
                        }
                        .state {
                            flex: 2;
                        }
                        .time {
                            flex: 2; 
                        }
                        .operation {
                            flex: 1;
                        }
                    }
                }
                .list-body {
                    height: .3rem;
                    // padding-right: .3rem;
                    li {
                        cursor: pointer;
                        height: .61rem;
                        display: flex;
                        padding-left: .3rem;
                        border-bottom: .01rem solid #142a6a;
                        justify-content: space-between;
                        >div {
                            font-size: .14rem;
                            color: #fff;
                            line-height: .6rem;
                        }
                        .number {
                            flex: 2;
                        }
                        .type {
                            flex: 2;
                        }
                        .examine {
                            flex: 1;
                        }
                        .duty {
                            flex: 8;
                        }
                        .state {
                            flex: 2;
                        }
                        .green-color {
                            color: #20d46c;
                        }
                        .orange-color {
                            color: #ff721b;
                        }
                        .red-color {
                            color: #b1335d;
                        }
                        .time {
                            flex: 2;
                        }
                        .operation {
                            flex: 1;
                            a {
                                display: inline-block;
                                width: .14rem;
                                height: .14rem;
                                line-height: .6rem;
                                background-image: url('../../../static/images/q_r-delete.png');
                                background-position: left center;
                                background-repeat: no-repeat;
                                background-size: .14rem .14rem;
                            }
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
            options1: [
                {
                    value: '选项1',
                    label: '未打印'
                }, {
                    value: '选项2',
                    label: '已打印'
                },
            ],
            options2: [
                {
                    value: '选项1',
                    label: '未整改'
                }, {
                    value: '选项2',
                    label: '已整改',
                },
            ],
            options3: [
                {
                    value: '选项1',
                    label: '深圳市伟业建筑劳务有限公司'
                }, {
                    value: '选项2',
                    label: '深圳市西城建筑工程劳务有限公司'
                }, {
                    value: '选项3',
                    label: '深圳市众城兴建筑劳务有限公司'
                }, {
                    value: '选项4',
                    label: '中建二局第三建筑工程有限公司机电事业部'
                }, {
                    value: '选项5',
                    label: '方大幕墙'
                }
            ],
            options4: [
                {
                    value: '选项1',
                    label: '王家兴'
                },
            ],
            options5: [
                {
                    value: '选项1',
                    label: '李阳'
                }, {
                    value: '选项2',
                    label: '刘正强'
                }, {
                    value: '选项3',
                    label: '伟业-张东方'
                }, {
                    value: '选项4',
                    label: '西城安全员'
                }, {
                    value: '选项5',
                    label: '徐达'
                }
            ],
            options6: [
                {
                    value: '选项1',
                    label: '王家兴'
                },
            ],
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: '',
        }
    },
    methods: {
        particulars() {
            // window.open('http://localhost:8080/?xmid=DV2mxBGL1Ao%3D#/q_particulars', '_blank');
            // console.log('hello world')
            this.$router.push({ path: 'q_infoParticulars' })
        },
        aClick(event) {
            // 阻止事件冒泡
            event.stopPropagation()
            console.log('I am a')
        },
    },
}
</script>
