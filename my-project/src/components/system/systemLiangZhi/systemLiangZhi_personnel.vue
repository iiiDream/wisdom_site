<template>
    <div id="systemLiangZhi_personnel">
        <div class="centent-box">
            <!-- 搜索栏 -->
            <div class="search-box">
                <div class="left-box">
                    <ul>
                        <li>
                            <span>&#12288;&#12288;姓名：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>&#12288;证件号：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>&#12288;&#12288;工种：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>&#12288;&#12288;班组：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>手机号码：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>所属单位：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>在场状态：</span>
                            <input type="text">
                        </li>
                    </ul>
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
                    <a class="delete">
                        <i class="icon"></i>
                        同步信息
                    </a>
                    <a class="derive">
                        <i class="icon"></i>
                        导出人员
                    </a>
                    <a class="derive">
                        <i class="icon"></i>
                        生成合同
                    </a>
                    <a class="derive">
                        <i class="icon"></i>
                        返场
                    </a>
                    <a class="derive">
                        <i class="icon"></i>
                        退场
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
                        prop="number"
                        label="序号"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="姓名"
                        width="150">
                        </el-table-column>
                        <el-table-column
                        prop="jobNumber"
                        label="工号"
                        width="150">
                        </el-table-column>
                        <el-table-column
                        prop="contractor"
                        label="所属参建单位"
                        width="200">
                        </el-table-column>
                        <el-table-column
                        prop="team"
                        label="所属班组"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="profession"
                        label="工种"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="groupLeaderState"
                        label="是否班组长"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="type"
                        label="状态">
                        <template slot-scope="scope">
                            <div :class="scope.row.type=='离场'?'red-color':scope.row.type=='待进场'?'yellow-color':''">
                                {{ scope.row.type }}
                            </div>
                        </template>
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
                        :total="3">
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
    #systemLiangZhi_personnel {
        width: 100%;
        .centent-box {
            border-radius: .04rem;
            background-color: #fff;
            box-shadow: 0 0 .5rem -.3rem #666;
            .search-box {
                height: 1.5rem;
                padding: 0 .2rem;
                position: relative;
                border-bottom: .1rem solid #f7f7f7;
                .left-box {
                    float: left;
                    height: 1.4rem;
                    padding-top: .2rem;
                    ul {
                        li {
                            float: left;
                            margin-right: .5rem;
                            margin-bottom: .2rem;
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
                    }
                }
                .search-button {
                    top: .8rem;
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
                            display: inline-block;
                            vertical-align: middle;
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
                name: '某某某', // 姓名
                jobNumber: '123456', // 工号
                contractor: '深圳市市政工程总公司', // 所属参建单位
                team: '永恒信一班', // 所属班组
                profession: '普工', // 工种
                groupLeaderState: '是', // 是否班组长
                type: '在场', // 状态
            },{
                number: 2, // 序号
                name: '某某某', // 姓名
                jobNumber: '123457', // 工号
                contractor: '深圳市市政工程总公司', // 所属参建单位
                team: '永恒信一班', // 所属班组
                profession: '木工', // 工种
                groupLeaderState: '否', // 是否班组长
                type: '离场', // 状态
            },{
                number: 3, // 序号
                name: '某某某', // 姓名
                jobNumber: '123458', // 工号
                contractor: '深圳市市政工程总公司', // 所属参建单位
                team: '永恒信一班', // 所属班组
                profession: '水泥工', // 工种
                groupLeaderState: '是', // 是否班组长
                type: '待进场', // 状态
            }], // 表格数据
            currentPage: 1, // 当前页码
            dialogShow: false, // 新增单位对话框状态
            contractor: [{
                value: '选项1',
                label: '深圳市市政工程总公司'
            }], // 所属参建单位选项
            contractorValue: '', // 所属参建单位
            startDate: '', // 入场日期
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