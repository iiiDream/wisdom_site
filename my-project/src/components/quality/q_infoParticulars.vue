<template>
    <div id="q_infoParticulars">
        <div class="centent-box">
            <!-- 导航 -->
            <div class="nav">
                <a>安全巡检</a>
                <span>/</span>
                <a>检查记录</a>
                <span>/</span>
                <span class="present">详情</span>
            </div>
            <!-- 表单状态 -->
            <div class="state">
                <div class="left-box">
                    <div class="title orange-color">
                        超期未整改
                    </div>
                    <div class="time">
                        创建时间：2019-01-01 21:36
                    </div>
                </div>
                <div class="right-box">
                    <div class="num">
                        编号：1947
                    </div>
                    <div class="pic-box"></div>
                </div>
            </div>
            <!-- 隐患明细 -->
            <div class="detail">
                <div class="title">
                    <i></i>
                    隐患明细
                </div>
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
                        <div class="state green-color">
                            复查通过
                        </div>
                        <div class="operation">
                            <a>
                                <i></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 整改基础信息 -->
            <div class="message">
                <div class="title">
                    <i></i>
                    整改基础信息
                </div>
                <div class="search-box">
                    <div class="search-left">
                        <ul>
                            <li>
                                检查人：
                                <el-select v-model="value1" placeholder="请选择" size="mini">
                                    <el-option
                                        v-for="item in options1"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </li>
                            <li>
                                参与人：
                                <el-select v-model="value2" placeholder="请选择" size="mini">
                                    <el-option
                                        v-for="item in options2"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </li>
                            <li>
                                复查日期：
                                <el-date-picker
                                    v-model="value3"
                                    type="date"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </li>
                            <!-- <li>
                                隐患类型：
                                <el-select v-model="value4" placeholder="请选择" size="mini">
                                    <el-option
                                        v-for="item in options4"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </li> -->
                        </ul>
                    </div>
                    <div class="search-middle">
                        <ul>
                            <li>
                                超时状态：
                                <el-select v-model="value4" placeholder="请选择" size="mini">
                                    <el-option
                                        v-for="item in options4"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </li>
                            <li>
                                检查日期：
                                <el-date-picker
                                    v-model="value5"
                                    type="date"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </li>
                            <li>
                                整改期限：
                                <el-date-picker
                                    v-model="value6"
                                    type="date"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </li>
                            <!-- <li>
                                问题级别：
                                <el-select v-model="value8" placeholder="请选择" size="mini">
                                    <el-option
                                        v-for="item in options8"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </li> -->
                        </ul>
                    </div>
                    <div class="search-right">
                        <ul>
                            <!-- <li>
                                发起时间：
                                <el-date-picker
                                    size="mini"
                                    v-model="value11"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                </el-date-picker>
                            </li> -->
                            <li>
                                复查人：
                                <el-select v-model="value7" placeholder="请选择" size="mini">
                                    <el-option
                                        v-for="item in options7"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </li>
                            <li>
                                整改日期：
                                <el-date-picker
                                    v-model="value8"
                                    type="date"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </li>
                            <li>
                                检查类型：
                                <el-select v-model="value9" placeholder="请选择" size="mini">
                                    <el-option
                                        v-for="item in options9"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </li>
                        </ul>
                    </div>
                    <div class="search-bottom">
                        <div class="sub-box">
                            <span>整改要求：</span> 
                            <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                resize="none"
                                v-model="textarea">
                            </el-input>
                        </div>
                    </div>
                </div>
                <div class="button-box">
                    <a>保存</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #q_infoParticulars {
        color: #fff;
        .green-color {
            color: #20d46c;
        }
        .orange-color {
            color: #ff721b;
        }
        .red-color {
            color: #b1335d;
        }
        .centent-box {
            width: 15rem;
            height: 9.42rem;
            padding: .3rem .3rem 0 .3rem;
            background-image: url('../../../static/images/q_r-border.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            .nav {
                a {
                    color: #fff;
                    font-size: .12rem;
                }
                span {
                    color: #fff;
                    padding: 0 .08rem;
                }
                .present {
                    color: #a8a9ae;
                    padding: 0;
                }
            }
            >.state {
                height: 1.04rem;
                margin-top: .14rem;
                padding: .26rem .18rem 0 .18rem;
                background-color: #142a6a;
                .left-box {
                    float: left;
                    .title {
                        height: .2rem;
                        font-size: .18rem;
                        margin-bottom: .12rem;
                    }
                }
                .right-box {
                    float: right;
                    transform: translateY(-0.2rem);
                    .num {
                        font-size: .12rem;
                        margin-bottom: .05rem;
                    }
                    .pic-box {
                        width: .6rem;
                        height: .6rem;
                        background-color: #fff;
                    }
                }
            }
            .detail {
                margin-top: .3rem;
                .title {
                    font-size: .16rem;
                    font-weight: bolder;
                    i {
                        width: .03rem;
                        height: .13rem;
                        display: inline-block;
                        background-color: #0097fe;
                        margin-right: .15rem;
                    }
                }
                .list-head {
                    height: .3rem;
                    padding-left: .2rem;
                    margin-top: .2rem;
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
                    // height: .3rem;
                    // padding-right: .2rem;
                    li {
                        cursor: pointer;
                        height: .6rem;
                        display: flex;
                        padding-top: .06rem;
                        padding-left: .2rem;
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
            .message {
                margin-top: .3rem;
                .title {
                    font-size: .16rem;
                    font-weight: bolder;
                    i {
                        width: .03rem;
                        height: .13rem;
                        display: inline-block;
                        background-color: #0097fe;
                        margin-right: .15rem;
                    }
                }
                .search-box {
                    .search-left {
                        display: inline-block;
                        ul {
                            width: 3.4rem;
                            height: 1.5rem;
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
                                >.el-date-editor {
                                    height: .3rem;
                                    width: 2.2rem;
                                    overflow: hidden;
                                    border: .01rem solid #4f5167;
                                    border-radius: .02rem;
                                    transform: translateY(.1rem);
                                    .el-input__inner {
                                        height: .28rem;
                                        color: #fff;
                                        font-size: .15rem;
                                        background-color: rgba(0, 0, 0, 0);
                                    }
                                    .el-input__icon {
                                        line-height: normal;
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
                            height: 1.5rem;
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
                                >.el-date-editor {
                                    height: .3rem;
                                    width: 2.2rem;
                                    overflow: hidden;
                                    border: .01rem solid #4f5167;
                                    border-radius: .02rem;
                                    transform: translateY(.1rem);
                                    .el-input__inner {
                                        height: .28rem;
                                        color: #fff;
                                        font-size: .15rem;
                                        background-color: rgba(0, 0, 0, 0);
                                    }
                                    .el-input__icon {
                                        line-height: normal;
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
                            height: 1.5rem;
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
                                >.el-date-editor {
                                    height: .3rem;
                                    width: 2.2rem;
                                    overflow: hidden;
                                    border: .01rem solid #4f5167;
                                    border-radius: .02rem;
                                    transform: translateY(.1rem);
                                    .el-input__inner {
                                        height: .28rem;
                                        color: #fff;
                                        font-size: .15rem;
                                        background-color: rgba(0, 0, 0, 0);
                                    }
                                    .el-input__icon {
                                        line-height: normal;
                                    }
                                }
                            }
                        }
                    }
                    .search-bottom {
                        font-size: .15rem;
                        color: #dddedf;
                        float: left;
                        width: 8.8rem;
                        margin-top: .1rem;
                        .sub-box {
                            float: right;
                            >span {
                                width: .81rem;
                                display: inline-block;
                                vertical-align: top;
                            }
                            .el-textarea {
                                // display: inline-block;
                                width: 7.6rem;
                                overflow: hidden;
                                border: .01rem solid #4f5167;
                                border-radius: .02rem;
                                // background-color: rgba(0, 0, 0, 0);
                                .el-textarea__inner {
                                    color: #fff;
                                    border: none;
                                    background-color: rgba(0, 0, 0, 0);
                                }
                            }
                        }
                    }
                }
                .button-box {
                    height: .36rem;
                    margin-top: .9rem;
                    text-align: center;
                    a {
                        color: #fff;
                        display: block;
                        width: 1rem;
                        height: .36rem;
                        font-size: .14rem;
                        text-align: center;
                        line-height: .36rem;
                        background-color: #3375fe;
                        border-radius: .03rem;
                        overflow: hidden;
                        margin-left: 50%;
                        transform: translateX(-50%);
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
            textarea: '', // 文本域内容
            value3: '', // 复查日期
            value5: '', // 检查日期
            value6: '', // 整改期限
            value8: '', // 整改日期
        }
    }
}
</script>

