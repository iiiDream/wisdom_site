<template>
    <div id="q_record">
        <div class="centent-box">
            <!-- 顶部导航栏 -->
            <div class="top-nav">
                <ul>
                    <li class="active">
                        <a>
                            所有
                        </a>
                    </li>
                    <li>
                        <a>
                            待整改
                        </a>
                        <i>4</i>
                    </li>
                    <li>
                        <a>
                            待复查
                        </a>
                    </li>
                    <li>
                        <a>
                            复查未通过
                        </a>
                    </li>
                    <li>
                        <a>
                            复查通过
                        </a>
                    </li>
                    <li>
                        <a>
                            合格
                        </a>
                    </li>
                </ul>
            </div>
            <!-- 搜索区域 -->
            <div class="search-box">
                <div class="search-left">
                    <ul>
                        <li>
                            检查结果：
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
                            检查人：
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
                        <li>
                            隐患类型：
                            <el-select v-model="value4" placeholder="所有" size="mini">
                                <el-option
                                    v-for="item in options4"
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
                            超时状态：
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
                            整改人：
                            <el-select v-model="value6" placeholder="所有" size="mini">
                                <el-option
                                    v-for="item in options6"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            发起/参与：
                            <el-select v-model="value7" placeholder="所有" size="mini">
                                <el-option
                                    v-for="item in options7"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            问题级别：
                            <el-select v-model="value8" placeholder="所有" size="mini">
                                <el-option
                                    v-for="item in options8"
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
                                v-model="value11"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </li>
                        <li>
                            复查人：
                            <el-select v-model="value9" placeholder="所有" size="mini">
                                <el-option
                                    v-for="item in options9"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            检查区域：
                            <el-select v-model="value10" placeholder="所有" size="mini">
                                <el-option
                                    v-for="item in options10"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
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
                        <div class="issue">
                            问题
                        </div>
                        <div class="type">
                            隐患类型 
                        </div>
                        <div class="examine">
                            检查人|检查时间
                        </div>
                        <div class="duty">
                            整改人|责任分包单位
                        </div>
                        <div class="date">
                            整改期限
                        </div>
                        <div class="state">
                            状态
                        </div>
                        <div class="operation">
                            操作
                        </div>
                    </li>
                </ul>
                <ul class="list-body">
                    <li>
                        <div class="issue">
                            <p>此处拉结要用钢管拉结</p>
                            <span class="slight"></span>
                            <span>南山EPC创新工业园</span>
                        </div>
                        <div class="type">
                            施工用电
                        </div>
                        <div class="examine">
                            <p>王佳佳</p>
                            <span>2019-01-01 20:11</span>
                        </div>
                        <div class="duty">
                            <p>伟业-张东方</p>
                            <span>深圳市伟业建筑劳务有限公司</span>
                        </div>
                        <div class="date">
                            <p>2018-01-07</p>
                        </div>
                        <div class="state">
                            复查通过
                        </div>
                        <div class="operation">
                            <a>
                                <i></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="issue">
                            <p>此处拉结要用钢管拉结</p>
                            <span class="ordinary"></span>
                            <span>南山EPC创新工业园</span>
                        </div>
                        <div class="type">
                            施工用电
                        </div>
                        <div class="examine">
                            <p>王佳佳</p>
                            <span>2019-01-01 20:11</span>
                        </div>
                        <div class="duty">
                            <p>伟业-张东方</p>
                            <span>深圳市伟业建筑劳务有限公司</span>
                        </div>
                        <div class="date">
                            <p>2018-01-07</p>
                        </div>
                        <div class="state">
                            复查通过
                        </div>
                        <div class="operation">
                            <a>
                                <i></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="issue">
                            <p>此处拉结要用钢管拉结</p>
                            <span class="severity"></span>
                            <span>南山EPC创新工业园</span>
                        </div>
                        <div class="type">
                            施工用电
                        </div>
                        <div class="examine">
                            <p>王佳佳</p>
                            <span>2019-01-01 20:11</span>
                        </div>
                        <div class="duty">
                            <p>伟业-张东方</p>
                            <span>深圳市伟业建筑劳务有限公司</span>
                        </div>
                        <div class="date">
                            <p>2018-01-07</p>
                        </div>
                        <div class="state">
                            复查通过
                        </div>
                        <div class="operation">
                            <a></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #q_record {
        color: #fff;
        .centent-box {
            width: 15rem;
            height: 9.42rem;
            padding: .32rem .18rem 0 .18rem;
            background-image: url('../../../static/images/q_r-border.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            .top-nav {
                height: .33rem;
                border-bottom: .01rem solid #142a6a;
                ul {
                    float: left;
                    width: 7.16rem;
                    display: flex;
                    justify-content: space-between;
                    li {
                        height: .33rem;
                        position: relative;
                        a {
                            color: #fff;
                            font-size: .17rem;
                        }
                        i {
                            color: #fff;
                            width: .15rem;
                            height: .15rem;
                            border-radius: .15rem;
                            overflow: hidden;
                            font-style: normal;
                            background-color: #3375fe;
                            position: absolute;
                            font-size: .12rem;
                            right: -0.15rem;
                            top: -0.15rem;
                            text-align: center;
                            line-height: .15rem;
                        }
                    }
                    .active {
                        border-bottom: .01rem solid #3375fe;
                        a {
                            color: #3375fe;
                        }
                    }
                }
            }
            .search-box {
                margin-top: .15rem;
                .search-left {
                    display: inline-block;
                    ul {
                        width: 3.4rem;
                        height: 2rem;
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
                        height: 2rem;
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
                        height: 2rem;
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
                        .issue {
                            flex: 8;
                        }
                        .type {
                            flex: 2;
                        }
                        .examine {
                            flex: 4;
                        }
                        .duty {
                            flex: 6;
                        }
                        .date {
                            flex: 2;
                        }
                        .state {
                            flex: 2;
                        }
                        .operation {
                            flex: 1;
                        }
                    }
                }
                .list-body {
                    height: .3rem;
                    padding-left: .3rem;
                    // padding-right: .3rem;
                    li {
                        height: .6rem;
                        display: flex;
                        padding-top: .06rem;
                        border-bottom: .01rem solid #142a6a;
                        justify-content: space-between;
                        >div {
                            font-size: .14rem;
                            color: #fff;
                        }
                        .issue {
                            flex: 8;
                            p {
                                font-size: .14rem;
                            }
                            .slight {
                                display: inline-block;
                                width: .36rem;
                                height: .13rem;
                                background-image: url('../../../static/images/q_r-slight.png');
                                background-position: center center;
                                background-repeat: no-repeat;
                                background-size: contain;
                                transform: translateY(.015rem);
                            }
                            .ordinary {
                                display: inline-block;
                                width: .36rem;
                                height: .13rem;
                                background-image: url('../../../static/images/q_r-ordinary.png');
                                background-position: center center;
                                background-repeat: no-repeat;
                                background-size: contain;
                                transform: translateY(.015rem);
                            }
                            .severity {
                                display: inline-block;
                                width: .36rem;
                                height: .13rem;
                                background-image: url('../../../static/images/q_r-severity.png');
                                background-position: center center;
                                background-repeat: no-repeat;
                                background-size: contain;
                                transform: translateY(.015rem);
                            }
                            span {
                                font-size: .12rem;
                            }
                        }
                        .type {
                            line-height: .53rem;
                            flex: 2;
                        }
                        .examine {
                            flex: 4;
                        }
                        .duty {
                            flex: 6;
                        }
                        .date {
                            line-height: .53rem;
                            flex: 2;
                        }
                        .state {
                            line-height: .53rem;
                            color: #20d46c;
                            flex: 2;
                        }
                        .operation {
                            flex: 1;
                            a {
                                display: block;
                                width: 100%;
                                height: 100%;
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
                label: '待整改'
            }, {
                value: '选项2',
                label: '待复查'
            }, {
                value: '选项3',
                label: '复查通过'
            }, {
                value: '选项4',
                label: '复查未通过'
            },  {
                value: '选项5',
                label: '合格'
            }
            ],
            options2: [
            {
                value: '选项1',
                label: '王家兴'
            }
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
            }
            ],
            options4: [
            {
                value: '选项1',
                label: '安全管理'
            }, {
                value: '选项2',
                label: '高处作业'
            }, {
                value: '选项3',
                label: '基坑工作'
            }, {
                value: '选项4',
                label: '脚手架'
            },  {
                value: '选项5',
                label: '模板工程'
            },  {
                value: '选项6',
                label: '施工机具'
            },  {
                value: '选项7',
                label: '施工用电'
            },  {
                value: '选项8',
                label: '塔式起重机'
            },  {
                value: '选项9',
                label: '文明施工'
            },  {
                value: '选项10',
                label: '施工电梯'
            },  {
                value: '选项11',
                label: '消防管理'
            },  {
                value: '选项12',
                label: '物料提升机'
            },  {
                value: '选项13',
                label: '起重吊装'
            },  {
                value: '选项14',
                label: '其他'
            }
            ],
            options5: [
            {
                value: '选项1',
                label: '超时'
            }, {
                value: '选项2',
                label: '未超时'
            }
            ],
            options6: [
            {
                value: '选项1',
                label: '刘正强'
            }, {
                value: '选项2',
                label: '伟业-张东方'
            }, {
                value: '选项3',
                label: '西城安全员'
            }, {
                value: '选项4',
                label: '徐达'
            }
            ],
            options7: [
            {
                value: '选项1',
                label: '我发起的'
            }, {
                value: '选项2',
                label: '我参与的'
            }
            ],
            options8: [
            {
                value: '选项1',
                label: '轻微'
            }, {
                value: '选项2',
                label: '一般'
            }, {
                value: '选项3',
                label: '严重'
            }
            ],
            options9: [
            {
                value: '选项1',
                label: '王家兴'
            }
            ],
            options10: [
            {
                value: '选项1',
                label: '所有'
            }
            ],
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: '',
            value8: '',
            value9: '',
            value10: '',
            value11: '',
        }
    }
}
</script>
