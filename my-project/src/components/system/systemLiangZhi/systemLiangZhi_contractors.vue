<template>
    <div id="systemLiangZhi_contractors">
        <div class="centent-box">
            <!-- 搜索栏 -->
            <div class="search-box">
                <div class="left-box">
                    <ul>
                        <li>
                            <span>参建单位名称：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span class="margin">社会统一信用代码：</span>
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
                    <a class="new" @click="dialogClick">
                        <i class="icon"></i>
                        新增
                    </a>
                    <a class="compile">
                        <i class="icon"></i>
                        编辑
                    </a>
                    <a class="delete">
                        <i class="icon"></i>
                        删除
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
                        prop="number"
                        label="序号"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        prop="project"
                        label="所属项目"
                        width="200">
                        </el-table-column>
                        <el-table-column
                        prop="licence"
                        label="施工许可证"
                        width="150">
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="参建单位名称"
                        width="200">
                        </el-table-column>
                        <el-table-column
                        prop="abbreviation"
                        label="简称"
                        width="80">
                        </el-table-column>
                        <el-table-column
                        prop="people"
                        label="人数"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="type"
                        label="单位类型"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="principal"
                        label="负责人"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="phone"
                        label="联系电话">
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
            <!-- 新增单位 -->
            <div class="dialog-box" v-show="dialogShow">
                <div class="title">
                    新增单位
                    <a class="close" @click="dialogClick">
                        <i class="el-icon-close"></i>
                    </a>
                </div>
                <div class="form">
                    <ul>
                        <li>
                            <div>
                                <span>
                                    单位名称
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    简称
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    入场日期
                                    <div class="required">*</div>
                                </span>
                                <el-date-picker
                                v-model="startDate"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                            </div>
                            <div>
                                <span>
                                    单位类型
                                    <div class="required">*</div>
                                </span>
                                <el-select v-model="contractorTypeValue" placeholder="请选择">
                                    <el-option
                                    v-for="item in contractorType"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    单位信用代码
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    组织机构代码
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    营业执照
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    法人名称
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    负责人
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    法人证件号
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    注册地址
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>联系电话</span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>开户银行</span>
                                <input type="text">
                            </div>
                            <div>
                                <span>注册资金</span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>开户地址</span>
                                <input type="text">
                            </div>
                            <div>
                                <span>电子邮箱</span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>开户账号</span>
                                <input type="text">
                            </div>
                            <div>
                                <span>单位详细地址</span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>退场日期</span>
                                <el-date-picker
                                v-model="finishDate"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                            </div>
                            <div>
                                <span>备注说明</span>
                                <input type="text">
                            </div>
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
    #systemLiangZhi_contractors{
        width: 100%;
        .centent-box {
            border-radius: .04rem;
            background-color: #fff;
            box-shadow: 0 0 .5rem -.3rem #666;
            .search-box {
                height: .9rem;
                padding: 0 .2rem;
                border-bottom: .1rem solid #f7f7f7;
                .left-box {
                    float: left;
                    height: .8rem;
                    ul {
                        li {
                            float: left;
                            margin-right: .35rem;
                            span {
                                float: left;
                                height: .8rem;
                                font-size: .18rem;
                                line-height: .8rem;
                            }
                            input {
                                float: left;
                                width: 2.6rem;
                                height: .4rem;
                                margin-top: .2rem;
                                padding-left: .1rem;
                                border-radius: .02rem;
                                vertical-align: middle;
                                border: .01rem solid #b6b6b6;
                            }
                        }
                    }
                }
                .search-button {
                    float: right;
                    color: #fff;
                    height: .4rem;
                    width: 1.63rem;
                    font-size: .2rem;
                    margin-top: .2rem;
                    text-align: center;
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
                top: .22rem;
                z-index: 200;
                width: 12.02rem;
                height: 8.78rem;
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
                    height: 7.38rem;
                    padding-left: .43rem;
                    ul{
                        li {
                            display: flex;
                            height: .71rem;
                            padding-top: .3rem;
                            >div {
                                width: 5.38rem;
                                >span {
                                    width: 1.72rem;
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
                project: '福田区易涝风险区整改', // 所属项目
                licence: '123456', // 施工许可证
                name: '深圳市市政工程总公司', // 参建单位名称
                abbreviation: '市政总', // 简称
                people: 21, // 人数
                type: '管理单位', // 单位类型
                principal: '某某某', // 负责人
                phone: '15835460311', // 联系电话
            },{
                number: 2, // 序号
                project: '福田区易涝风险区整改', // 所属项目
                licence: '123456', // 施工许可证
                name: '深圳市市政工程总公司', // 参建单位名称
                abbreviation: '市政总', // 简称
                people: 21, // 人数
                type: '管理单位', // 单位类型
                principal: '某某某', // 负责人
                phone: '15835460311', // 联系电话
            },{
                number: 3, // 序号
                project: '福田区易涝风险区整改', // 所属项目
                licence: '123456', // 施工许可证
                name: '深圳市市政工程总公司', // 参建单位名称
                abbreviation: '市政总', // 简称
                people: 21, // 人数
                type: '管理单位', // 单位类型
                principal: '某某某', // 负责人
                phone: '15835460311', // 联系电话
            }], // 表格数据
            currentPage: 1, // 当前页码
            dialogShow: false, // 新增单位对话框状态
            contractorType: [{
                value: '选项1',
                label: '参建单位'
            }, {
                value: '选项2',
                label: '管理单位'
            }], // 单位类型选项
            contractorTypeValue: '', // 单位类型
            startDate: '', // 入场日期
            finishDate: '', // 退场日期
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`)
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`)
        },

        // 新增单位对话框状态切换
        dialogClick() {
            this.dialogShow = !this.dialogShow
        },
    }
}
</script>