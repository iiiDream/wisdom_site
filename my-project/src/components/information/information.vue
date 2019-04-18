<template>
    <div id="information">
        <!-- 侧导航栏 -->
        <div class="side-nav">
            <div class="side-box">
                <div class="side-title">
                    <i class="icon"></i>
                    <span>全部文件</span>
                </div>
                <!-- 三层 -->
                <!-- <el-collapse v-model="activeName" accordion @change="handleChange">
                  <el-collapse-item :title="item.folderName" :name="item.folderId" class="tower" v-for="item in folderData" :key="item.folderId">
                        <el-collapse v-model="activeName" @change="handleChange">
                          <el-collapse-item :title="item2.folderName" :name="item2.folderId" class="tier" v-for="item2 in item.children" :key="item2.folderId">
                              <div class="detail" style="padding-left: .35rem">
                                    <a>CAD图纸</a>
                              </div>
                          </el-collapse-item>
                        </el-collapse>
                  </el-collapse-item>
                </el-collapse> -->

                <!-- 多层 -->
                <el-collapse v-model="activeName" accordion @change="handleChange">
                  <el-collapse-item :title="item.folderName" :name="item.folderId" v-for="item in folderDataList" :key="item.folderId" v-if="item.parentId==0">
                        <el-collapse v-model="activeName" @change="handleChange">
                          <el-collapse-item :title="item2.folderName" :name="item2.folderId" v-for="item2 in item.children" :key="item2.folderId" v-if="item2.parentId==item.folderId">
                                <el-collapse v-model="activeName" @change="handleChange">
                                    <el-collapse-item :title="item3.folderName" :name="item3.folderId" v-for="item3 in item2.children" :key="item3.folderId" v-if="item3.parentId==item2.folderId">
                                        <el-collapse v-model="activeName" @change="handleChange">
                                            <el-collapse-item :title="item4.folderName" :name="item4.folderId" v-for="item4 in item3.children" :key="item4.folderId" v-if="item4.parentId==item3.folderId">
                                                <el-collapse v-model="activeName" @change="handleChange">
                                                    <el-collapse-item :title="item5.folderName" :name="item5.folderId" v-for="item5 in item4.children" :key="item5.folderId" v-if="item5.parentId==item4.folderId">
                                                        <el-collapse v-model="activeName" @change="handleChange">
                                                            <el-collapse-item :title="item6.folderName" :name="item6.folderId" v-for="item6 in item5.children" :key="item6.folderId" v-if="item6.parentId==item5.folderId">
                                                            </el-collapse-item>
                                                        </el-collapse>
                                                    </el-collapse-item>
                                                </el-collapse>
                                            </el-collapse-item>
                                        </el-collapse>
                                    </el-collapse-item>
                                </el-collapse>
                          </el-collapse-item>
                        </el-collapse>
                  </el-collapse-item>
                </el-collapse>
            </div>
            <div class="memory-box">
                <div class="sum-box">
                    <div class="sub-box"></div>
                </div>
                <div class="memory-text">
                    1.5G/5.0G
                </div>
            </div>
        </div>
        <!-- 主体 -->
        <div class="main">
            <!-- 按钮 -->
            <div class="button-box">
                <a class="uploading" @click="uploadButton">
                    上传
                </a>
                <a class="new" @click="addFolder">
                    新建文件夹
                </a>
                <a class="new" @click="getDeleteFolder">
                    删除
                </a>
            </div>
            <!-- 搜索框 -->
            <div class="search-bar">
                <el-input
                    placeholder="请输入文件名"
                    v-model="fileName"
                    clearable>
                </el-input>
                <a class="search-ico" @click="fuzzySearch"></a>
            </div>
            <!-- 状态栏 -->
            <div class="state-box" >
                <div class="state-left"  v-show="false">
                    <a>返回上一级</a>
                </div>
                <div class="state-right" >
                    <a @click="downloadAll">下载选中</a>
                    <i>|</i>
                    <a @click="deletAll">删除选中</a>
                </div>
            </div>
            <!-- 表格 -->
            <div class="table-box">
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    v-show="!noData"
                    @select-all="setSelectAll"
                    @select="setSelect">
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
                            <a :href="`http://39.108.103.150:8989/lz/file/download?fileId=${scope.row.fileId}`">{{ scope.row.download }}</a>
                            <i>|</i>
                            <a @click="deletFile(scope.row.fileId)">{{ scope.row.more }}</a>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="no-data" v-show="noData">
                    暂无数据
                </div>
            </div>
            <!-- 输入框 -->
            <div class="import-box" v-show="importShow">
                <p>请输入文件夹名字</p>
                <input v-model="folderName" type="text">
                <div class="button-box">
                    <a class="save" :plain="true" @click="saveClick">创建</a>
                    <a class="cancel" @click="cancelClick">取消</a>
                </div>
            </div>
            <!-- 上传文件 -->
            <div class="upload-box" v-show="uploadShow">
                <input class="file" name="file" type="file" @change="update">
                <div class="button-box">
                    <a class="save" :plain="true" @click="uploadObject">上传</a>
                    <a class="cancel" @click="cancelClick">取消</a>
                </div>
            </div>
        </div>
        <!-- 进度条遮罩层 -->
        <div class="progress-box" v-show="progressShow">
            <div class="progress-center">
                <div class="progress-text">
                    正在上传请勿关闭页面
                </div>
                <div class="progress-bar">
                    <div class="sub-bar"></div>
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
        position: relative;
        .side-nav {
            width: 3rem;
            height: 9.41rem;
            padding: .02rem;
            background-image: url('../../../static/images/m_left-border.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            .side-box {
                height: 8.48rem;
                overflow: auto;
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
                        padding-left: .2rem;
                        border: none;
                        overflow: visible;
                        // height: auto;
                    }
                }
            }
            .side-box::-webkit-scrollbar {/*滚动条整体样式*/
                width: .05rem;     
                // height: 1px;
            }
            .side-box::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                border-radius: .1rem;
                // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                background-color: #142a6a;
            }
            .side-box::-webkit-scrollbar-track {/*滚动条里面轨道*/
                // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                border-radius: .1rem;
                background-color: #030625;
            }
            .memory-box {
                width: 2.56rem;
                margin: 0 auto;
                margin-top: .1rem;
                .sum-box {
                    width: 2.56rem;
                    height: .12rem;
                    border-radius: .12rem;
                    background-color: #282a42;
                    .sub-box {
                        width: 33.3%;
                        height: .12rem;
                        border-radius: .12rem;
                        background-color: #3979fe;
                    }
                }
                .memory-text {
                    color: #fff;
                    font-size: .15rem;
                    margin-top: .1rem;
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
            // position: relative;
            .button-box {
                height: .39rem;
                >a {
                    display: inline-block;
                    background-color: #3979fe;
                    border-radius: .03rem;
                    overflow: hidden;
                    font-size: .16rem;
                    color: #fff;
                    line-height: .3rem;
                    text-align: center;
                }
                .uploading {
                    height: .3rem;
                    width: .9rem;
                }
                .new {
                    height: .3rem;
                    width: .9rem;
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
                    width: 1.85rem;
                    padding: 0 .1rem;
                    a {
                        color: #3979fe;
                    }
                    i {
                        padding-left: .1rem;
                        padding-right: .1rem;
                        color: #142a6a;
                        font-style: normal;
                    }
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
                    border-top: .01rem solid #142a6a;
                }
            }
            .el-table::before {
                width: 0;
            }
            .import-box {
                padding-top: .3rem;
                color: #fff;
                text-align: center;
                width: 4rem;
                height: 2rem;
                position: absolute;
                left: 50%;
                top: 22%;
                transform: translate(-50%);
                border: .01rem solid #0f1f53;
                border-radius: .03rem;
                background-color: rgba(2, 5, 33, .9);
                box-shadow: 0px 0px 50px #0f1f53 inset;
                input {
                    margin-top: .25rem;
                    outline: none;
                    border: none;
                    border-radius: .03rem;
                    overflow: hidden;
                }
                .button-box {
                    margin: 0 auto;
                    margin-top: .25rem;
                    display: flex;
                    justify-content: space-between;
                    width: 2rem;
                    .save {
                        font-size: .14rem;
                        line-height: .25rem;
                        color: #fff;
                        display: inline-block;
                        width: .4rem;
                        height: .25rem;
                        background-color: #0164ff;
                        border-radius: .03rem;
                        overflow: hidden;
                    }
                    .cancel {
                        font-size: .14rem;
                        line-height: .25rem;
                        color: #000;
                        display: inline-block;
                        width: .4rem;
                        height: .25rem;
                        background-color: #fff;
                        border-radius: .03rem;
                        overflow: hidden;
                    }
                }
            }
            .upload-box {
                padding-top: .3rem;
                color: #fff;
                text-align: center;
                width: 4rem;
                height: 2rem;
                position: absolute;
                left: 50%;
                top: 22%;
                transform: translate(-50%);
                border: .01rem solid #0f1f53;
                border-radius: .03rem;
                background-color: rgba(2, 5, 33, .9);
                box-shadow: 0px 0px 50px #0f1f53 inset;
                input {
                    width: 2rem;
                    color: #fff;
                    margin-top: .25rem;
                    outline: none;
                    border: none;
                    border-radius: .03rem;
                    overflow: hidden;
                }
                .button-box {
                    margin: 0 auto;
                    margin-top: .25rem;
                    display: flex;
                    justify-content: space-between;
                    width: 2rem;
                    .save {
                        font-size: .14rem;
                        line-height: .25rem;
                        color: #fff;
                        display: inline-block;
                        width: .4rem;
                        height: .25rem;
                        background-color: #0164ff;
                        border-radius: .03rem;
                        overflow: hidden;
                    }
                    .cancel {
                        font-size: .14rem;
                        line-height: .25rem;
                        color: #000;
                        display: inline-block;
                        width: .4rem;
                        height: .25rem;
                        background-color: #fff;
                        border-radius: .03rem;
                        overflow: hidden;
                    }
                }
            }
        }
        .progress-box {
            // display: none;
            position: absolute;
            width: 19.2rem;
            height: 10.8rem;
            background-color: rgba(0, 0, 0, .5);
            left: 0;
            top: -0.48rem;
            .progress-center {
                position: absolute;
                left: 50%;
                transform: translate(-50%);
                top: 4rem;
                .progress-text {
                    color: #fff;
                    font-size: .2rem;
                    text-align: center;
                }
                .progress-bar {
                    height: .15rem;
                    width: 6rem;
                    margin-top: .3rem;
                    background-color: #0f1f53;
                    border-radius: .2rem;
                    .sub-bar {
                        height: .15rem;
                        width: 0%;
        	            position: relative;
        	            background-color: #070e4b93;
        	            // border: .1px solid #0f1f53;
        	            border-radius: .1rem;
                        background-size: .48rem .48rem;
                        background-repeat: repeat;
        	            background-image: linear-gradient(-45deg, transparent 0rem, transparent .128rem, #2c61d4 .144rem, #2c61d4 .336rem, transparent .336rem, transparent .466rem, #2c61d4 .496rem);
        	            -webkit-animation: warning-animation 750ms infinite linear;
        	            -moz-animation: warning-animation 750ms infinite linear;
        	            animation: warning-animation 750ms infinite linear;
                    }
                    .sub-bar:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        height: .15rem;
                        border-radius: .1rem;
                    }
                    @-webkit-keyframes warning-animation {
                        0% {
                            background-position: 0 0;
                        }
                        100% {
                            background-position: .48rem 0;
                        }
                    }
                    @-moz-keyframes warning-animation {
                        0% {
                            background-position: 0 0;
                        }
                        100% {
                            background-position: .48rem 0;
                        }
                    }
                    @keyframes warning-animation {
                        0% {
                            background-position: 0 0;
                        }
                        100% {
                            background-position: .48rem 0;
                        }
                    }
                }
            }
        }
    }
</style>


<script>
import { setInterval, setTimeout, clearInterval } from 'timers';
export default {
    data() {
        return {
            fileName: '', // 文件名
            tableData: [],
            multipleSelection: [],
            activeName: '',
            noData: true, // 判断有没有数据
            pid: 0, // 项目id
            folderData: '', // 文件夹
            folderDataList: [], // 文件夹列表
            folderId: '', // 文件夹id
            fileDataList: '', // 文件列表
            page: 1, // 当前页数
            pageSize: 10000, // 每页条数
            file: '', // 文件
            folderName: '', // 文件夹名称 
            importShow: false, // 文件夹名称输入框显示
            uploadShow: false, // 上传文件显示
            selectAll: false, // 全选状态
            ids: [], // 选中的文件夹
            progressShow: false, // 进度条显示
        }
    },
    created() {
        this.getPid()
        this.getQueryFolderData()
        // this.getFileDataList()
    },
    methods: {
        // 获取文件列表
        getQueryFolderData() {
            this.$axios.post(`/lz/folder/queryFolder?projectId=${this.pid}`).then(
                res => {
                    // console.log(res.data)
                    this.folderData = res.data
                    this.getFolderDataList()
                }
            )
        },

        // 添加文件夹
        addFolder() {
            this.importShow = true
        },

        // 取消点击事件
        cancelClick() {
            this.importShow = false
            this.uploadShow = false
        },

        // 创建点击事件
        saveClick() {
            // 隐藏对话框
            this.importShow = false

            // 设置文件夹名字
            this.$axios.post(`/lz/folder/addFolder?folderName=${this.folderName}&projectId=${this.pid}&parentId=${this.folderId}`).then(
                res => {
                    // console.log(res.data)
                    if (res.data.msg == '添加成功！') {
                        this.$message({
                            message: '添加成功',
                            type: 'success'
                        })
                        this.folderName = ''
                        this.folderId = ''
                        // 添加成功后更新文件夹列表
                        this.getQueryFolderData()
                    } else {
                        this.$message({
                            message: '添加失败，请重试',
                            type: 'warning'
                        })
                        this.folderName = ''
                    }
                }
            )
        },

        // 侧导航栏点击事件
        handleChange(val) {
            // console.log(val)
            this.folderId = val[val.length-1]?val[val.length-1]:val
            // console.log(this.folderId)
            this.getFileDataList()
        },

        // 上传文件
        uploadButton() {
            this.uploadShow = true
        },

        // 拿到需要上传的文件
        update(e) {
            let file = e.target.files[0]
            this.file = new FormData() //创建form对象
            this.file.append('file',file) // 通过append向form对象添加数据
            console.log(this.file.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        },

        // 上传点击事件
        uploadObject() {
            this.progressShow = true
            let i = 0
            let time = setInterval(() => {
                i++
                $('.sub-bar').css('width',`${i}%`)
                if (i>=100) {
                    clearInterval(time)
                    this.progressShow = false
                    $('.sub-bar').css('width',`0%`)
                }
                if (i==90) {
                    clearInterval(time)
                }
            },300)
            let headers = {headers: {"Content-Type": "multipart/form-data"}}
            this.$axios.post(`/lz/file/uploadObject?folderName=1&folderId=${this.folderId}&uploader=${this.pid}`,this.file,headers).then(
                res => {
                    if (res.data.msg == '上传图片成功') {
                        clearInterval(time)
                        time = setInterval(() => {
                            i++
                            $('.sub-bar').css('width',`${i}%`)
                            if (i>=100) {
                                clearInterval(time)
                                this.progressShow = false
                                $('.sub-bar').css('width',`0%`)
                                this.$message({
                                    message: '上传成功',
                                    type: 'success'
                                })
                                this.file = ''
                                this.uploadShow = false
                                this.getFileDataList()
                                // 添加成功后更新文件夹列表
                                this.getQueryFolderData()
                            }
                        },50)
                    } else {
                        this.$message({
                            message: '上传失败，请重试',
                            type: 'warning'
                        })
                    }
                }
            )
        },

        // 获取项目id
        getPid() {
          this.pid = localStorage.getItem('pid')
        },

        // 遍历文件夹
        getFolderDataList() {
            let that = this
            // 清空文件夹列表
            this.folderDataList = []
            function printobj(obj){
                for(var k in obj){//遍历对象和数组
                    // console.log(obj[k])
                    that.folderDataList.push(obj[k])
			        if(obj[k].children.length > 0){  // 判断如果children里有内容则递归
                        printobj(obj[k].children)
			        }
                }
            }
            printobj(this.folderData)
            // console.log(this.folderDataList)
        },

        // 遍历文件列表
        getFileDataList() {
            this.$axios.post(`/lz/file/queryFile?page=${this.page}&pageSize=${this.pageSize}&uploader=${this.pid}`).then(
                res => {
                    // console.log(res.data.rows)
                    this.fileDataList = res.data.rows
                    // if (this.fileDataList.length > 0) {
                    //     this.noData = false
                    // } else {
                    //     this.noData = true
                    // }
                    let tempTableData = []
                    for (let i = 0; i < this.fileDataList.length; i++) {
                        if (this.fileDataList[i].folderId == this.folderId) {
                            tempTableData.push({
                                name: this.fileDataList[i].fileName,
                                size: this.fileDataList[i].fileSize+'kb',
                                uploader: '项目管理员',
                                uploadTime: this.fileDataList[i].createTime,
                                download: '下载',
                                more: '删除',
                                url: this.fileDataList[i].fileUrl,
                                fileId: this.fileDataList[i].fileId,
                            })  
                        }
                    }
                    this.tableData = tempTableData
                    if (this.tableData.length > 0) {
                        this.noData = false
                    } else {
                        this.noData = true
                    }
                }
            )
        },

        // 删除文件夹点击事件
        getDeleteFolder() {
            this.$axios.post(`/lz/folder/deleteFolder?folderId=${this.folderId}`).then(
                res => {
                    console.log(res.data)
                    // 删除成功后更新文件夹列表
                    this.getQueryFolderData()
                    this.folderId = ''
                }
            )
        },

        // 全选点击事件
        setSelectAll(val) {
            this.ids = []
            // this.selectAll = !this.selectAll
            // console.log(val)
            for (let i = 0; i < val.length; i++) {
                // console.log(val[i].fileId)
                this.ids.push(val[i].fileId)
            }
            console.log(this.ids)
        }, 

        // 单选点击事件
        setSelect(val) {
            this.ids = []
            for (let i = 0; i < val.length; i++) {
                // console.log(val[i].fileId)
                this.ids.push(val[i].fileId)
            }
            console.log(this.ids)
        },

        // 删除文件事件
        deletFile(fileId) {
            console.log(fileId)
            this.$axios.post(`/lz/file/deleteFile?ids=${fileId}`).then(
                res => {
                    console.log(res.data.msg)
                    if (res.data.msg == '删除成功!') {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        })
                        this.getFileDataList()
                    } else {
                        this.$message({
                            message: '删除失败，请重试',
                            type: 'warning'
                        })
                    }
                }
            )
        },

        // 批量下载
        downloadAll() {
            let that = this
            let i = 0
            let time = setInterval(function () {
                console.log(i)
                location.href=`http://39.108.103.150:8989/lz/file/download?fileId=${that.ids[i]}`
                i++
                if (i==that.ids.length) {
                    clearInterval(time)
                }
            },500)
            // for (let i = 0; i < this.ids.length; i++) {
            //     console.log(this.ids[i])
            //     setTimeout(function () {
            //         // location.href=`http://39.108.103.150:8989/lz/file/download?fileId=${that.ids[i]}`
            //         console.log(i)
            //     },1000)
            // }
        },

        // 批量删除
        deletAll() {
            let fileId = ''
            for (let i = 0; i < this.ids.length; i++) {
                // console.log(this.ids[i])
                if (i==0) {
                    fileId += this.ids[i]
                } else {
                    fileId += ','+this.ids[i]
                }
            }
            // console.log(fileId)
            this.deletFile(fileId)
            this.ids = []
        },

        // 模糊查询
        fuzzySearch() {
            if(this.fileName!='') {
                this.$axios.post(`/lz/file/queryFile?page=${this.page}&pageSize=${this.pageSize}&uploader=${this.pid}&fileName=${this.fileName}`).then(
                    res => {
                        // console.log(res.data.rows)
                        this.fileDataList = res.data.rows
                        let tempTableData = []
                        for (let i = 0; i < this.fileDataList.length; i++) {
                            tempTableData.push({
                                name: this.fileDataList[i].fileName,
                                size: this.fileDataList[i].fileSize+'kb',
                                uploader: '项目管理员',
                                uploadTime: this.fileDataList[i].createTime,
                                download: '下载',
                                more: '删除',
                                url: this.fileDataList[i].fileUrl,
                                fileId: this.fileDataList[i].fileId,
                            })  
                        }
                        this.tableData = tempTableData
                        if (this.tableData.length > 0) {
                            this.noData = false
                        } else {
                            this.noData = true
                        }
                    }
                )
            }
        },
    }
}
</script>
