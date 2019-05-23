<template>
    <div id="systemLiangZhi_personnel">
        <div class="centent-box">
            <!-- 搜索栏 -->
            <div class="search-box">
                <div class="left-box">
                    <ul class="top-input">
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
                            <el-select v-model="professionValue" placeholder="请选择">
                                <el-option
                                v-for="item in professionOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            <span>&#12288;&#12288;班组：</span>
                            <input type="text">
                        </li>
                    </ul>
                    <ul class="bottom-input">
                        <li>
                            <span>手机号码：</span>
                            <input type="text">
                        </li>
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
                        <li>
                            <span>在场状态：</span>
                            <el-select v-model="typeValue" placeholder="请选择">
                                <el-option
                                v-for="item in typeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li style="width:3.5rem"></li>
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
                    <a class="synchronization">
                        <i class="icon"></i>
                        同步信息
                    </a>
                    <a class="derive">
                        <i class="icon"></i>
                        导出人员
                    </a>
                    <a class="contract">
                        <i class="icon"></i>
                        生成合同
                    </a>
                    <a class="last">
                        <i class="icon"></i>
                        返场
                    </a>
                    <a class="next">
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
            <!-- 新增人员 -->
            <div class="dialog-box" v-show="dialogShow">
                <div class="title">
                    新增人员
                    <a class="close" @click="dialogClick">
                        <i class="el-icon-close"></i>
                    </a>
                </div>
                <div class="form">
                    <div class="picture-box">
                        <ul>
                            <li class="picture">
                                <div>
                                    <span>
                                        实时图片
                                        <div class="required">*</div>
                                    </span>
                                    <a>+</a>
                                </div>
                            </li>
                            <li class="picture">
                                <div>
                                    <span>
                                        身份证人脸
                                        <div class="required">*</div>
                                    </span>
                                    <a>+</a>
                                </div>
                            </li>
                            <li class="picture">
                                <div>
                                    <span>
                                        身份证正面
                                        <div class="required">*</div>
                                    </span>
                                    <a>+</a>
                                </div>
                            </li>
                            <li class="picture">
                                <div>
                                    <span>
                                        身份证反面
                                        <div class="required">*</div>
                                    </span>
                                    <a>+</a>
                                </div>
                            </li>
                            <li class="picture">
                                <div>
                                    <span>
                                        银行卡正面
                                    </span>
                                    <a>+</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul>
                        <li>
                            <div>
                                <span>
                                    姓名
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    身份证号
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    性别
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    民族
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li class="all">
                            <div>
                                <span>
                                    身份证地址
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    签发机关
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    有效期限
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    出生日期
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    籍贯
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    进场日期
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    退场日期
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    所属班组
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    是否班组长
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    重要人员
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    人员类别
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    工种名称
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    人员类型
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    手机号
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    合同办理
                                    <div class="required">*</div>
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    所属工作部门
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    现工作部门
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    开户行
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    银行账号
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    账户类型
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    开户地址
                                </span>
                                <input type="text">
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    获得证书
                                </span>
                                <input type="text">
                            </div>
                            <div>
                                <span>
                                    备注
                                </span>
                                <input type="text">
                            </div>
                        </li>

                        <!-- 合同部分 -->
                        <li class="line"></li>
                        <li class="check-box">
                            <el-checkbox-group 
                              v-model="checkedCities"
                              :min="0"
                              :max="6">
                              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
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
                    width: 100%;
                    height: 1.4rem;
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
                    }
                    .bottom-input {
                        margin-top: .2rem;
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
                    .synchronization {
                        .icon {
                            background-image: url('../../../../static/images/system-synchronization.png');
                        }
                        &:hover {
                            .icon {
                                background-image: url('../../../../static/images/system-synchronizationHover.png');
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
                    .contract {
                        .icon {
                            background-image: url('../../../../static/images/system-contract.png');
                        }
                        &:hover {
                            .icon {
                                background-image: url('../../../../static/images/system-contractHover.png');
                            }
                        }
                    }
                    .last {
                        .icon {
                            background-image: url('../../../../static/images/system-last.png');
                        }
                        &:hover {
                            .icon {
                                background-image: url('../../../../static/images/system-lastHover.png');
                            }
                        }
                    }
                    .next {
                        .icon {
                            background-image: url('../../../../static/images/system-next.png');
                        }
                        &:hover {
                            .icon {
                                background-image: url('../../../../static/images/system-nextHover.png');
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
                top: .22rem;
                z-index: 200;
                width: 12.02rem;
                height: 7rem;
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
                    width: 100%;
                    display: flex;
                    height: 5.6rem;
                    overflow: auto;
                    overflow-x: hidden;
                    // padding-left: .43rem;
                    padding-bottom: .3rem;
                    justify-content: space-between;
                    .picture-box {
                        height: 5rem;
                        width: 2.5rem;
                        ul {
                            width: 2.5rem;
                        }
                    }
                    ul{
                        flex: 1;
                        position: relative;
                        li {
                            display: flex;
                            height: .71rem;
                            padding-top: .3rem;
                            >div {
                                width: 4.52rem;
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
                                    width: 2.8rem;
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
                        .picture {
                            width: 2.5rem;
                            height: 1.49rem;
                            span {
                                width: 1.3rem;
                                vertical-align: top;
                            }
                            a {
                                width: 1.19rem;
                                height: 1.19rem;
                                font-size: .2rem;
                                color: #b6b5b5;
                                text-align: center;
                                line-height: 1.17rem;
                                display: inline-block;
                                border: .01rem dashed #b6b5b5;
                            }
                        }
                        .check-box {
                            width: 9.52rem;
                            height: .78rem;
                            .el-checkbox-group {
                                width: 100%;
                                display: flex;
                                flex-wrap: wrap;
                                >label {
                                    margin: 0;
                                    width: 3.15rem;
                                    height: .48rem;
                                    font-size: .16rem;
                                    padding-left: .6rem;
                                    // text-align: center;
                                }
                            }
                        }
                        .line {
                            height: .31rem;
                            width: 12.02rem;
                            transform: translateX(-2.5rem);
                            border-bottom: .01rem dashed #b6b5b5;
                        }
                        .all {
                            >div {
                                width: 9.04rem;
                                input {
                                    width: 7.32rem;
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
            typeOptions: [{
                value: '选项1',
                label: '在场'
            }, {
                value: '选项2',
                label: '离场'
            }, {
                value: '选项3',
                label: '待进场'
            }], // 在场状态选项
            typeValue: '', // 在场状态值
            professionOptions: [], // 工种选项
            professionValue: '', // 工种值
            contractorOptions: [], // 所属参建单位选项
            contractorValue: '', // 所属参建单位值
            checkedCities: [],
            cities: ['简易劳动合同', '两制确认书', '进场承诺书', '退场承诺书','身份证复印件','安全教育培训'],
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