<template>
    <div id="systemLiangZhi_equipment">
        <div class="centent-box">
            <!-- 搜索栏 -->
            <div class="search-box">
                <div class="left-box">
                    <ul class="top-input">
                        <li>
                            <span>设备名称：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>&#12288;序列号：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>产品类型：</span>
                            <input type="text">
                        </li>
                        <li style="width:3.5rem"></li>
                    </ul>
                    <!-- <ul class="bottom-input">
                        <li>
                            <span>所属单位：</span>
                            <el-select v-model="contractorValue" placeholder="请选择">
                                <el-option
                                v-for="item in contractorOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li class="date">
                            <span>&#12288;&#12288;日期：</span>
                            <el-date-picker
                                v-model="dateValue"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </li>
                        <li style="width:3.5rem"></li>
                        <li style="width:3.5rem"></li>
                    </ul> -->
                </div>
                <a class="search-button">搜索</a>
            </div>
            <!-- 主体区域 -->
            <div class="main-box">
                <!-- 功能栏 -->
                <div class="button-box">
                    <a class="new">
                        <i class="icon"></i>
                        新增
                    </a>
                    <a class="compile">
                        <i class="icon"></i>
                        编辑
                    </a>
                    <a class="derive">
                        <i class="icon"></i>
                        导出Excel
                    </a>
                </div>
                <!-- 列表 -->
                <div class="table-box">
                    <el-table
                    :data="tableData"
                    stripe
                    border>
                        <el-table-column
                        type="selection"
                        width="35">
                        </el-table-column>
                        <el-table-column
                        prop="deviceNumber"
                        label="序号"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="deviceName"
                        label="设备号"
                        width="150">
                        </el-table-column>
                        <el-table-column
                        prop="deviceName"
                        label="设备名称"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="serialNumber"
                        label="序列号"
                        width="200">
                        </el-table-column>
                        <el-table-column
                        prop="IP"
                        label="IP地址"
                        width="200">
                        </el-table-column>
                        <el-table-column
                        prop="recently"
                        label="最近连接时间"
                        width="200">
                        </el-table-column>
                        <el-table-column
                        prop="type"
                        label="产品类型"
                        width="200">
                        </el-table-column>
                        <el-table-column
                        prop="use"
                        label="设备用途">
                        </el-table-column>
                    </el-table>
                </div>
                <!-- 分页 -->
                <div class="paging-box">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[15, 30, 45]"
                        :page-size="15"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="1">
                    </el-pagination>
                </div>
            </div>
            <!-- 新增班组 -->
            <div class="dialog-box" v-show="dialogShow">
                <div class="title">
                    新增班组
                    <a class="close" @click="dialogClick">
                        <i class="el-icon-close"></i>
                    </a>
                </div>
                <div class="form">
                    <ul>
                        <li>
                            <span>
                                所属参建单位
                                <div class="required">*</div>
                            </span>
                            <el-select v-model="contractorValue" placeholder="请选择">
                                <el-option
                                v-for="item in contractor"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            <span>
                                班组名称
                                <div class="required">*</div>
                            </span>
                            <input type="text">
                        </li>
                        <li>
                            <span>
                                入场日期
                                <div class="required">*</div>
                            </span>
                            <el-date-picker
                            v-model="startDate"
                            type="date"
                            placeholder="选择日期">
                            </el-date-picker>
                        </li>
                        <li>
                            <span>备注</span>
                            <input type="text">
                        </li>
                    </ul>
                </div>
                <div class="confirm">
                    <a class="button" @click="dialogClick">确定</a>
                </div>
            </div>
            <!-- 遮罩层 -->
            <div class="shade-box" v-show="dialogShow"></div>
        </div>
    </div>
</template>

<style lang="less">
    #systemLiangZhi_equipment {
        width: 100%;
        .centent-box {
            border-radius: .04rem;
            background-color: #fff;
            box-shadow: 0 0 .5rem -.3rem #666;
            .search-box {
                height: .9rem;
                padding: 0 .2rem;
                position: relative;
                border-bottom: .1rem solid #f7f7f7;
                .left-box {
                    float: left;
                    width: 100%;
                    height: .8rem;
                    padding-top: .2rem;
                    ul {
                        width: 100%;
                        height: .4rem;
                        display: flex;
                        justify-content: space-between;
                        li {
                            height: .4rem;
                            div {
                                height: .4rem;
                            }
                            span {
                                float: left;
                                height: .4rem;
                                font-size: .18rem;
                                line-height: .4rem;
                            }
                            input {
                                float: left;
                                width: 2.6rem;
                                height: .4rem;
                                padding-left: .1rem;
                                border-radius: .02rem;
                                vertical-align: middle;
                                border: .01rem solid #b6b6b6;
                            }
                        }
                        .date {
                            .el-date-editor {
                                width: 2.6rem;
                                height: .4rem;
                                overflow: hidden;
                                border: .01rem solid #b6b6b6;
                                span {
                                    padding: 0;
                                    width: .28rem;
                                    padding-left: .1rem;
                                }
                                input {
                                    border: 0;
                                    width: .95rem;
                                }
                            }
                        }
                    }
                    .bottom-input {
                        margin-top: .2rem;
                    }
                }
                .search-button {
                    top: .2rem;
                    right: .2rem;
                    color: #fff;
                    height: .4rem;
                    width: 1.63rem;
                    font-size: .2rem;
                    text-align: center;
                    position: absolute;
                    transition: all .5s;
                    line-height: .38rem;
                    border-radius: .02rem;
                    background-color: #ffd14f;
                    border: .01rem solid #d4ad40;
                    &:hover {
                        background-color: #d4ad40;
                    }
                }
            }
            .main-box {
                padding: .2rem .2rem .25rem .2rem;
                .button-box {
                    height: .3rem;
                    a {
                        float: left;
                        height: .3rem;
                        color: #0090ff;
                        font-size: .14rem;
                        transition: all .5s;
                        margin-right: .2rem;
                        line-height: .28rem;
                        border-radius: .02rem;
                        padding-right: .09rem;
                        border: .01rem solid #0090ff;
                        &:hover {
                            color: #fff;
                            background-color: #0090ff;
                        }
                        .icon {
                            width: .37rem;
                            height: .28rem;
                            transition: all .5s;
                            display: inline-block;
                            vertical-align: middle;
                            background-repeat: no-repeat;
                            background-position: center center;
                        }
                    }
                    .new {
                        .icon {
                            background-image: url('../../../../static/images/system-new.png');
                        }
                        &:hover {
                            .icon {
                                background-image: url('../../../../static/images/system-newHover.png');
                            }
                        }
                    }
                    .compile {
                        .icon {
                            background-image: url('../../../../static/images/system-compile.png');
                        }
                        &:hover {
                            .icon {
                                background-image: url('../../../../static/images/system-compileHover.png');
                            }
                        }
                    }
                    .derive {
                        .icon {
                            background-image: url('../../../../static/images/system-derive.png');
                        }
                        &:hover {
                            .icon {
                                background-image: url('../../../../static/images/system-deriveHover.png');
                            }
                        }
                    }
                }
                .table-box {
                    width: 100%;
                    margin-top: .2rem;
                    min-height: 5.6rem;
                    .el-table {
                        width: 16.28rem;
                        // width: 100%;
                        th {
                            padding: 0;
                            div {
                                color: #4a4a4a;
                                height: .35rem;
                                line-height: .35rem;
                                background-color: #c5e8ff;
                            }
                        }
                        td {
                            padding: 0;
                            div {
                                height: .35rem;
                                color: #646464;
                                line-height: .35rem;
                            }
                        }
                        .red-color {
                            color: #fd5101;
                        }
                        .yellow-color {
                            color: #ffd14f;
                        }
                    }
                }
                .paging-box {
                    width: 100%;
                    height: .32rem;
                    margin-top: .2rem;
                    .el-pagination {
                        float: right;
                    }
                }
            }
            .dialog-box {
                left: 50%;
                top: 2.14rem;
                z-index: 200;
                width: 6.84rem;
                height: 4.92rem;
                overflow: hidden;
                position: absolute;
                border-radius: .1rem;
                transform: translate(-50%);
                background-color: #fefefe;
                .title {
                    color:#fff;
                    height: .6rem;
                    font-size: .24rem;
                    line-height: .6rem;
                    text-align: center;
                    position: relative;
                    font-weight: bolder;
                    background: linear-gradient(to right, #6cc4ff, #489cff);
                    a {
                        top: 50%;
                        right: .2rem;
                        color: #fff;
                        position: absolute;
                        transform: translateY(-50%);
                    }
                }
                .form {
                    height: 3.52rem;
                    ul{
                        li {
                            display: flex;
                            height: .71rem;
                            padding-top: .3rem;
                            >span {
                                width: 1.85rem;
                                height: .41rem;
                                font-size: .16rem;
                                text-align: right;
                                position: relative;
                                line-height: .41rem;
                                padding-right: .32rem;
                                display: inline-block;
                                .required {
                                    top: -0.01rem;
                                    right: .22rem;
                                    color: #f00;
                                    position: absolute;
                                }
                            }
                            input {
                                width: 3.66rem;
                                height: .41rem;
                                padding-left: .1rem;
                                border-radius: .02rem;
                                border: .01rem solid #b1b1b1;
                            }
                            .el-date-editor {
                                width: 3.66rem;
                                height: .41rem;
                                input {
                                    padding-left: .3rem;
                                }
                            }
                        }
                    }
                }
                .confirm {
                    height: .8rem;
                    background-color: #f8f8f8;
                    border-top: .01rem solid #dedede;
                    .button {
                        color: #fff;
                        display: block;
                        width: 1.63rem;
                        height: .49rem;
                        margin: 0 auto;
                        font-size: .2rem;
                        margin-top: .15rem;
                        text-align: center;
                        line-height: .47rem;
                        transition: all .5s;
                        border-radius: .02rem;
                        background-color: #ffd14f;
                        border: .01rem solid #d9b759;
                        &:hover {
                            background-color: #d9b759
                        }
                    }
                }
            }
            .shade-box {
                top: 0;
                left: 0;
                width: 100%;
                z-index: 100;
                height: 100%;
                position: fixed;
                background-color: rgba(0, 0, 0, .5);
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {
            tableData: [{
                number: 1, // 序号
                deviceNumber: 1, // 设备号
                deviceName: '油松项目部', // 设备名称
                serialNumber: '深圳市市政工程总公司', // 序列号
                IP: '127.0.0.1', // IP地址
                recently: '2019-05-15 16：35：11', // 最近连接时间
                type: '汉王人脸考勤机', // 产品类型
                use: '考勤', // 设备用途
            }], // 表格数据
            currentPage: 1, // 当前页码
            dialogShow: false, // 新增单位对话框状态
            contractor: [{
                value: '选项1',
                label: '深圳市市政工程总公司'
            }], // 所属参建单位选项
            contractorValue: '', // 所属参建单位
            startDate: '', // 入场日期
            professionOptions: [], // 工种选项
            professionValue: '', // 工种值
            contractorOptions: [], // 所属参建单位选项
            contractorValue: '', // 所属参建单位值
            dateValue: '', // 日期
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页${val}条`)
        },
        handleCurrentChange(val) {
            console.log(`当前页：${val}`)
        },

        // 新增对话框状态切换
        dialogClick() {
            this.dialogShow = !this.dialogShow
        },
    }
}
</script>