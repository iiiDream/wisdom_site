<template>
    <div id="information">
        <!-- 侧导航栏 -->
        <div class="side-nav">
            <div class="side-box">
                <div class="side-title">
                    <i class="icon"></i>
                    <span>全部文件</span>
                </div>
                <el-collapse v-model="activeName" accordion>
                  <el-collapse-item title="臻翰工业园" name="1" class="tower">
                        <el-collapse v-model="activeName">
                            <div class="stair2"></div>
                          <el-collapse-item title="东区" name="1-1" class="tier">
                              <div class="detail" style="padding-left: .35rem">
                                    <a>CAD图纸</a>
                              </div>
                              <div class="detail" style="padding-left: .35rem">
                                    <a>PDF图纸</a>
                              </div>
                          </el-collapse-item>
                        </el-collapse>
                  </el-collapse-item>
                </el-collapse>
            </div>
        </div>
        <!-- 主体 -->
        <div class="main">
            <!-- 按钮 -->
            <div class="button-box">
                <a class="uploading">
                    上传
                </a>
                <a class="new">
                    新建文件夹
                </a>
            </div>
            <!-- 搜索框 -->
            <div class="search-bar">
                <el-input
                    placeholder="请输入文件名"
                    v-model="fileName"
                    clearable>
                </el-input>
                <a class="search-ico"></a>
            </div>
            <!-- 状态栏 -->
            <div class="state-box">
                <div class="state-left">
                    <a>返回上一级</a>
                </div>
                <div class="state-right">共2个</div>
            </div>
            <!-- 表格 -->
            <div class="table-box">
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%">
                    <el-table-column
                        type="selection"
                        width="55">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="名称"
                        width="700">
                        <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
                    </el-table-column>
                    <el-table-column
                        prop="size"
                        label="大小"
                        width="142"
                        sortable>
                    </el-table-column>
                    <el-table-column
                        prop="uploader"
                        label="上传者"
                        width="142">
                    </el-table-column>
                    <el-table-column
                        prop="uploadTime"
                        label="上传时间"
                        width="222"
                        sortable>
                    </el-table-column>
                    <el-table-column
                        prop="operation"
                        label="操作">
                        <template slot-scope="scope">
                            <a>{{ scope.row.download }}</a>
                            <i>|</i>
                            <a>{{ scope.row.more }}</a>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="no-data">
                    暂无数据
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #information {
        padding:  .5rem .4rem 0 .4rem;
        display: flex;
        justify-content: space-between;
        .side-nav {
            width: 3rem;
            height: 9.41rem;
            padding: .02rem;
            background-image: url('../../../static/images/m_left-border.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            .side-box {
                .side-title {
                    height: .56rem;
                    line-height: .56rem;
                    font-size: .2rem;
                    color: #3979fe;
                    text-align: center;
                    background-image: url('../../../static/images/m_select-border.png');
                    background-position: center .54rem;
                    background-repeat: no-repeat;
                    background-size: contain;
                    .icon {
                        display: inline-block;
                        height: .56rem;
                        width: .56rem;
                        vertical-align: top;
                        background-image: url('../../../static/images/information_ico.png');
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: .256rem .2rem;
                    }
                }
                .el-collapse {
                    border: none;
                    position: relative;
                    .el-collapse-item__header {
                        font-size: .12rem;
                        color: #3375fe;
                        background-color: #020521;
                        border-bottom: 0;
                        height: .56rem;
                        padding: 0;
                        line-height: .56rem;
                        padding-left: .35rem;
                        background-image: url('../../../static/images/m_select-border.png'),url('../../../static/images/information_ico.png');
                        background-size: contain,.128rem .1rem;
                        background-position: center .54rem,.16rem .23rem;
                    }
                    .el-collapse-item__content {
                        padding: 0;
                        >div {
                            background-color: #020521;
                            a {
                                display: block;
                                color: #3375fe;
                                font-size: .12rem;
                                line-height: .3rem;
                            }
                        }
                    }
                    .el-collapse-item__wrap {
                        background-color: #020521;
                        padding-left: .1rem;
                        border: none;
                    }
                }
            }
        }
        .main {
            width: 15rem;
            height: 9.39rem;
            padding: .27rem;
            background-image: url('../../../static/images/location-bigBorder.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            .button-box {
                height: .39rem;
                >a {
                    display: inline-block;
                    background-color: #009ee9;
                    border-radius: .03rem;
                    overflow: hidden;
                    font-size: .2rem;
                    color: #fff;
                    line-height: .39rem;
                    text-align: center;
                }
                .uploading {
                    height: .39rem;
                    width: .95rem;
                }
                .new {
                    height: .39rem;
                    width: 1.13rem;
                    margin-left: .15rem;
                }
            }
            .search-bar {
                margin-top: .25rem;
                width: 2.23rem;
                height: .3rem;
                border: .01rem solid #3375fe;
                border-radius: .03rem;
                position: relative;
                // overflow: hidden;
                .el-input {
                    width: 1.93rem;
                    .el-input__inner {
                        color: #fff;
                        height: .3rem;
                        background-color: rgba(0, 0, 0, 0);
                        padding-left: .1rem;
                    }
                    // .el-input_suffix {
                    // }
                }
                .search-ico {
                    position: absolute;
                    width: .28rem;
                    height: .28rem;
                    right: 0;
                    background-image: url('../../../static/images/location-search.png');
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: .17rem .18rem;
                }
            }
            .state-box {
                margin-top: .25rem;
                height: .41rem;
                border-top: .01rem solid #142a6a;
                line-height: .41rem;
                .state-left {
                    float: left;
                    a {
                        font-size: .14rem;
                        color: #3979fe;
                    }
                }
                .state-right {
                    font-size: .14rem;
                    color: #fff;
                    float: right;
                }
            }
            .table-box {
                width: 14.46rem;
                .el-table {
                    .el-checkbox__inner {
                        border: .01rem solid #3979fe;
                        background-color: #030625;
                    }
                    th {
                        padding: 0;
                        border: none;
                        div {
                            color: #fff;
                            height: .3rem;
                            line-height: .3rem;
                            background-color: #142a6a;
                        }
                    }
                    td {
                        height: .41rem;
                        padding: 0;
                        background-color: #030625;
                        overflow: hidden;
                        border: none;
                        div {
                            color: #fff;
                            height: .41rem;
                            line-height: .41rem;
                            background-color: #030625;
                            border-bottom: .01rem solid #142a6a;
                            i {
                                padding-left: .1rem;
                                padding-right: .1rem;
                                color: #142a6a;
                                font-style: normal;
                            }
                            a {
                                color: #3979fe;
                            }
                        }
                    }
                }
                .no-data {
                    color: #fff;
                    height: .61rem; 
                    font-size: .18rem;
                    text-align: center;
                    line-height: .61rem;
                    border-bottom: .01rem solid #142a6a;
                }
            }
            .el-table::before {
                width: 0;
            }
        }
    }
</style>


<script>
export default {
    data() {
        return {
            fileName: '', // 文件名
            tableData: [{ // 表格数据
                name: '臻翰工业园施工图',
                size: '1000MB',
                uploader: '韩子昂',
                uploadTime: '2019-03-15 21:33',
                download: '下载',
                more: '更多',
            },{ // 表格数据
                name: '臻翰工业园施工图',
                size: '1006MB',
                uploader: '韩子昂',
                uploadTime: '2019-03-16 21:33',
                download: '下载',
                more: '更多',
            }],
            multipleSelection: [],
            activeName: '',
        }
    }
}
</script>
