<template>
    <div id="m_statistcs">
        <div class="content-box">
            <div class="nav">
                <div class="nav-search">
                    <input type="text" placeholder="请输入关键字进行过滤">
                </div>
                <div class="nav-main">
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item title="安全管理" name="1">
                            <ul>
                                <li>
                                    <a>安全生产责任制</a>
                                </li>
                                <li>
                                    <a>安监机构及人员配备</a>
                                </li>
                                <li>
                                    <a>施工方案</a>
                                </li>
                                <li>
                                    <a>分包管理</a>
                                </li>
                                <li>
                                    <a>安全技术交底</a>
                                </li>
                                <li>
                                    <a>安全检查</a>
                                </li>
                                <li>
                                    <a>安全教育</a>
                                </li>
                                <li>
                                    <a>安全费用投入</a>
                                </li>
                                <li>
                                    <a>领导带班管理</a>
                                </li>
                                <li>
                                    <a>特种作业上岗</a>
                                </li>
                                <li>
                                    <a>安全生产应急</a>
                                </li>
                            </ul>            
                        </el-collapse-item>
                        <el-collapse-item title="高处作业" name="2">
                            <ul>
                                <li>
                                    <a>安全帽</a>
                                </li>
                                <li>
                                    <a>安全网</a>
                                </li>
                                <li>
                                    <a>安全带</a>
                                </li>
                                <li>
                                    <a>洞口防护</a>
                                </li>
                                <li>
                                    <a>通道口防护</a>
                                </li>
                                <li>
                                    <a>临边防护</a>
                                </li>
                                <li>
                                    <a>攀登作业</a>
                                </li>
                                <li>
                                    <a>悬空作业</a>
                                </li>
                                <li>
                                    <a>移动端操作平台</a>
                                </li>
                                <li>
                                    <a>物料平台</a>
                                </li>
                                <li>
                                    <a>悬挑式物料高平台</a>
                                </li>
                                <li>
                                    <a>验收</a>
                                </li>
                            </ul>
                        </el-collapse-item>
                        <el-collapse-item title="基坑工程" name="3">
                            <ul>
                                <li>
                                    <a>施工方案</a>
                                </li>
                                <li>
                                    <a>临边防护</a>
                                </li>
                                <li>
                                    <a>基坑支护与支撑拆除</a>
                                </li>
                                <li>
                                    <a>基坑降排水</a>
                                </li>
                                <li>
                                    <a>坑边荷载</a>
                                </li>
                                <li>
                                    <a>上下通道</a>
                                </li>
                                <li>
                                    <a>土方开挖</a>
                                </li>
                                <li>
                                    <a>基坑变形监测</a>
                                </li>
                                <li>
                                    <a>作业环境</a>
                                </li>
                            </ul>
                        </el-collapse-item>
                        <el-collapse-item title="脚手架" name="4">
                            <el-collapse-item title="落地式外脚手架" name="4-1">
                                <ul>
                                    <li>
                                        <a>施工方案交底</a>
                                    </li>
                                    <li>
                                        <a>立杆基础</a>
                                    </li>
                                    <li>
                                        <a>脚手架稳定</a>
                                    </li>
                                    <li>
                                        <a>脚手架荷载</a>
                                    </li>
                                    <li>
                                        <a>验收</a>
                                    </li>
                                    <li>
                                        <a>脚手架材质</a>
                                    </li>
                                    <li>
                                        <a>横向水平杆设置</a>
                                    </li>
                                    <li>
                                        <a>杆件接长</a>
                                    </li>
                                    <li>
                                        <a>防护设置</a>
                                    </li>
                                    <li>
                                        <a>门洞及通道设置</a>
                                    </li>
                                </ul>
                            </el-collapse-item>
                            <el-collapse-item title="悬挑式脚手架" name="4-2">
                                <ul>
                                    <li>
                                        <a>施工方案及交底</a>
                                    </li>
                                    <li>
                                        <a>悬挑梁设置及架体构造</a>
                                    </li>
                                    <li>
                                        <a>脚手架拉结</a>
                                    </li>
                                    <li>
                                        <a>脚手架荷载</a>
                                    </li>
                                    <li>
                                        <a>验收</a>
                                    </li>
                                    <li>
                                        <a>脚手架材质</a>
                                    </li>
                                    <li>
                                        <a>杆件搭设</a>
                                    </li>
                                    <li>
                                        <a>防护设置</a>
                                    </li>
                                </ul>
                            </el-collapse-item>
                            <el-collapse-item title="附着式升降脚手架" name="4-3">
                                <ul>
                                    <li>
                                        <a>使用条件</a>
                                    </li>
                                    <li>
                                        <a>材料材质及构配件制作</a>
                                    </li>
                                    <li>
                                        <a>架体构造</a>
                                    </li>
                                    <li>
                                        <a>附着支撑</a>
                                    </li>
                                    <li>
                                        <a>安全装置</a>
                                    </li>
                                    <li>
                                        <a>卸料平台</a>
                                    </li>
                                    <li>
                                        <a>防护设置</a>
                                    </li>
                                    <li>
                                        <a>验收</a>
                                    </li>
                                    <li>
                                        <a>使用</a>
                                    </li>
                                </ul>
                            </el-collapse-item>
                            <el-collapse-item title="门式钢管脚手架" name="4-4">
                                <ul>
                                    <li>
                                        <a>施工方案</a>
                                    </li>
                                    <li>
                                        <a>架体基础</a>
                                    </li>
                                    <li>
                                        <a>架体稳定</a>
                                    </li>
                                    <li>
                                        <a>杆件锁定</a>
                                    </li>
                                    <li>
                                        <a>脚手板</a>
                                    </li>
                                    <li>
                                        <a>交底与验收</a>
                                    </li>
                                    <li>
                                        <a>架体防护</a>
                                    </li>
                                    <li>
                                        <a>材质</a>
                                    </li>
                                    <li>
                                        <a>荷载</a>
                                    </li>
                                    <li>
                                        <a>通道</a>
                                    </li>
                                </ul>
                            </el-collapse-item>
                            <el-collapse-item title="高处作业吊篮" name="4-5">
                                <ul>
                                    <li>
                                        <a>施工方案</a>
                                    </li>
                                    <li>
                                        <a>安全装置</a>
                                    </li>
                                    <li>
                                        <a>悬挂机构</a>
                                    </li>
                                    <li>
                                        <a>钢丝绳</a>
                                    </li>
                                    <li>
                                        <a>安装</a>
                                    </li>
                                    <li>
                                        <a>升降操作</a>
                                    </li>
                                    <li>
                                        <a>交底与验收</a>
                                    </li>
                                    <li>
                                        <a>防护</a>
                                    </li>
                                    <li>
                                        <a>吊篮稳定</a>
                                    </li>
                                    <li>
                                        <a>荷载</a>
                                    </li>
                                </ul>
                            </el-collapse-item>
                            <el-collapse-item title="碗扣式钢管脚手架" name="4-6">
                                <ul>
                                    <li>
                                        <a>施工方案</a>
                                    </li>
                                    <li>
                                        <a>架体基础</a>
                                    </li>
                                    <li>
                                        <a>架体稳定</a>
                                    </li>
                                    <li>
                                        <a>杆件锁件</a>
                                    </li>
                                    <li>
                                        <a>脚手板</a>
                                    </li>
                                    <li>
                                        <a>交底与验收</a>
                                    </li>
                                    <li>
                                        <a>架体防护</a>
                                    </li>
                                    <li>
                                        <a>材质</a>
                                    </li>
                                    <li>
                                        <a>荷载</a>
                                    </li>
                                    <li>
                                        <a>通道</a>
                                    </li>
                                </ul>
                            </el-collapse-item>
                            <el-collapse-item title="满堂式脚手架" name="4-7">
                                <ul>
                                    <li>
                                        <a>施工方案</a>
                                    </li>
                                    <li>
                                        <a>架体基础</a>
                                    </li>
                                    <li>
                                        <a>架体稳定</a>
                                    </li>
                                    <li>
                                        <a>杆件锁件</a>
                                    </li>
                                    <li>
                                        <a>脚手板</a>
                                    </li>
                                    <li>
                                        <a>交底与验收</a>
                                    </li>
                                    <li>
                                        <a>架体防护</a>
                                    </li>
                                    <li>
                                        <a>材质</a>
                                    </li>
                                    <li>
                                        <a>荷载</a>
                                    </li>
                                    <li>
                                        <a>通道</a>
                                    </li>
                                </ul>
                            </el-collapse-item>
                        </el-collapse-item>
                        <el-collapse-item title="模板工程" name="5">
                            <ul>
                                <li>
                                    <a>施工方案</a>
                                </li>
                                <li>
                                    <a>立杆基础</a>
                                </li>
                                <li>
                                    <a>支撑系统</a>
                                </li>
                                <li>
                                    <a>施工荷载</a>
                                </li>
                                <li>
                                    <a>交底验收</a>
                                </li>
                                <li>
                                    <a>模板拆除</a>
                                </li>
                                <li>
                                    <a>模板存放</a>
                                </li>
                                <li>
                                    <a>混凝土浇筑</a>
                                </li>
                                <li>
                                    <a>支架材质</a>
                                </li>
                                <li>
                                    <a>作业环境</a>
                                </li>
                            </ul>
                        </el-collapse-item>
                        <el-collapse-item title="施工机具" name="6">
                            <ul>
                                <li>
                                    <a>平刨</a>
                                </li>
                                <li>
                                    <a>圆盘锯</a>
                                </li>
                                <li>
                                    <a>手持电动工具</a>
                                </li>
                                <li>
                                    <a>钢筋机械</a>
                                </li>
                                <li>
                                    <a>电焊机</a>
                                </li>
                                <li>
                                    <a>搅拌机</a>
                                </li>
                                <li>
                                    <a>气瓶</a>
                                </li>
                                <li>
                                    <a>场内机动车辆</a>
                                </li>
                                <li>
                                    <a>潜水泵</a>
                                </li>
                                <li>
                                    <a>布料机</a>
                                </li>
                                <li>
                                    <a>桩工机械</a>
                                </li>
                                <li>
                                    <a>泵送机械</a>
                                </li>
                            </ul>
                        </el-collapse-item>
                        <el-collapse-item title="施工用电" name="7">
                            <ul>
                                <li>
                                    <a>专项方案</a>
                                </li>
                                <li>
                                    <a>外电防护</a>
                                </li>
                                <li>
                                    <a>接地与接零保护系统</a>
                                </li>
                                <li>
                                    <a>配电箱开关箱</a>
                                </li>
                                <li>
                                    <a>现场照明</a>
                                </li>
                                <li>
                                    <a>配电线路</a>
                                </li>
                                <li>
                                    <a>电器装置</a>
                                </li>
                                <li>
                                    <a>变配电装置</a>
                                </li>
                                <li>
                                    <a>用电档案</a>
                                </li>
                            </ul>
                        </el-collapse-item>
                        <el-collapse-item title="塔式起重机" name="8">
                            <ul>
                                <li>
                                    <a>载荷限制装置</a>
                                </li>
                                <li>
                                    <a>行程限位装置</a>
                                </li>
                                <li>
                                    <a>保护装置</a>
                                </li>
                                <li>
                                    <a>吊钩、滑轮、卷筒与钢丝绳</a>
                                </li>
                                <li>
                                    <a>附墙装置与夹轨钳</a>
                                </li>
                                <li>
                                    <a>安装、拆卸、验收与使用</a>
                                </li>
                                <li>
                                    <a>多塔作业</a>
                                </li>
                                <li>
                                    <a>基础与轨道</a>
                                </li>
                                <li>
                                    <a>结构设施</a>
                                </li>
                                <li>
                                    <a>电气安全</a>
                                </li>
                            </ul>
                        </el-collapse-item>
                        <el-collapse-item title="文明施工" name="9">
                            <ul>
                                <li>
                                    <a>现场围挡</a>
                                </li>
                                <li>
                                    <a>封闭管理</a>
                                </li>
                                <li>
                                    <a>施工场地</a>
                                </li>
                                <li>
                                    <a>材料堆放</a>
                                </li>
                                <li>
                                    <a>现场临时用房</a>
                                </li>
                                <li>
                                    <a>治安保卫</a>
                                </li>
                                <li>
                                    <a>绿色施工</a>
                                </li>
                                <li>
                                    <a>施工现场标牌</a>
                                </li>
                                <li>
                                    <a>生活设施</a>
                                </li>
                                <li>
                                    <a>保健急救</a>
                                </li>
                                <li>
                                    <a>社区服务</a>
                                </li>
                            </ul>
                        </el-collapse-item>
                        <el-collapse-item title="施工电梯" name="10">
                            <ul>
                                <li>
                                    <a>整机状况</a>
                                </li>
                                <li>
                                    <a>安全装置</a>
                                </li>
                                <li>
                                    <a>安全防护</a>
                                </li>
                                <li>
                                    <a>附着</a>
                                </li>
                                <li>
                                    <a>钢丝绳、滑轮与对重</a>
                                </li>
                                <li>
                                    <a>安装、拆卸、验收与使用</a>
                                </li>
                                <li>
                                    <a>导轨架</a>
                                </li>
                                <li>
                                    <a>基础</a>
                                </li>
                                <li>
                                    <a>电气安全</a>
                                </li>
                                <li>
                                    <a>联络装置</a>
                                </li>
                            </ul>
                        </el-collapse-item>
                        <el-collapse-item title="消防管理" name="11">
                            <ul>
                                <li>
                                    <a>消防管理</a>
                                </li>
                            </ul>
                        </el-collapse-item>
                        <el-collapse-item title="物料提升机" name="12">
                            <ul>
                                <li>
                                    <a>整机结构</a>
                                </li>
                                <li>
                                    <a>安全装置</a>
                                </li>
                                <li>
                                    <a>附墙架与缆风绳</a>
                                </li>
                                <li>
                                    <a>钢丝绳</a>
                                </li>
                                <li>
                                    <a>防护设施</a>
                                </li>
                                <li>
                                    <a>安装验收</a>
                                </li>
                                <li>
                                    <a>架体及导轨</a>
                                </li>
                                <li>
                                    <a>动力与传动</a>
                                </li>
                                <li>
                                    <a>通信装置</a>
                                </li>
                                <li>
                                    <a>卷扬机操作棚</a>
                                </li>
                                <li>
                                    <a>避雷</a>
                                </li>
                            </ul>
                        </el-collapse-item>
                        <el-collapse-item title="起重吊装" name="13">
                            <el-collapse-item title="起重机械" name="13-1">
                                <ul>
                                    <li>
                                        <a>起重机</a>
                                    </li>
                                    <li>
                                        <a>立杆基础</a>
                                    </li>
                                </ul>
                            </el-collapse-item>
                            <ul>
                                <li>
                                    <a>施工方案</a>
                                </li>
                                <li>
                                    <a>钢丝绳与地锚</a>
                                </li>
                                <li>
                                    <a>作业环境</a>
                                </li>
                                <li>
                                    <a>作业人员</a>
                                </li>
                                <li>
                                    <a>高处作业</a>
                                </li>
                                <li>
                                    <a>构件码放</a>
                                </li>
                                <li>
                                    <a>信号指挥</a>
                                </li>
                                <li>
                                    <a>警戒监护</a>
                                </li>
                            </ul>
                        </el-collapse-item>
                        <a>其他</a>
                    </el-collapse>
                </div>
            </div>
            <div class="list">
                <div class="title">
                    安全管理
                </div>
                <ul>
                    <li>
                        <div class="number">
                            序号
                        </div>
                        <div class="rank">
                            隐患级别
                        </div>
                        <div class="check">
                            排查内容
                        </div>
                        <div class="require">
                            整改要求
                        </div>
                        <div class="limit">
                            整改时限
                        </div>
                        <div class="state">
                            状态
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #m_statistcs {
        .content-box {
            width: 15rem;
            height: 9.39rem;
            padding: .22rem .2rem .22rem .2rem;
            background-image: url('../../../static/images/location-bigBorder.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            display: flex;
            .nav {
                width: 2.5rem;
                border-right: .01rem solid #142a6a;
                .nav-search {
                    width: 2rem;
                    margin-bottom: .22rem;
                    input {
                        width: 2rem;
                        padding-left: .08rem;
                        box-sizing: border-box;
                        border-radius: .03rem;
                        border: .01rem solid #3375fe;
                        background-color: #1d1f3b;
                    }
                }
                .nav-main {
                    width: 2rem;
                    height: 8.45rem;
                    overflow: auto;
                    .el-collapse {
                        border: 0;
                        .el-collapse-item__header {
                            color: #3375fe;
                            border: 0;
                            height: .3rem;
                            font-size: .16rem;
                            line-height: .3rem;
                            background-color: rgba(0, 0, 0, 0);
                        }
                        .el-collapse-item__wrap{
                            border: 0;
                            .el-collapse-item__content {
                                padding: 0;
                                padding-left: .2rem;
                                background-color: #030625;
                                li {
                                    height: .28rem;
                                    line-height: .28rem;
                                    a {
                                        width: 100%;
                                        height: 100%;
                                        display: block;
                                        color: #3375fe;
                                        font-size: .14rem;
                                    }
                                }
                            }
                        }
                        >a {
                            height: .3rem;
                            display: block;
                            color: #3375fe;
                            font-size: .16rem;
                        }
                    }
                }
                .nav-main::-webkit-scrollbar {/*滚动条整体样式*/
                    width: .1rem;     
                    // height: 1px;
                }
                .nav-main::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                    border-radius: .1rem;
                    // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                    background: #142a6a;
                }
                .nav-main::-webkit-scrollbar-track {/*滚动条里面轨道*/
                    // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                    border-radius: .1rem;
                    background-color: #030625;
                }
            }
            .list {
                flex: 1;
                padding-left: .3rem;
                .title {
                    color: #3375fe;
                    font-size: .2rem;
                }
                ul {
                    height: .45rem;
                    width: 11.87rem;
                    overflow: hidden;
                    margin-top: .14rem;
                    border-radius: .03rem;
                    background-color: #1d1f3b;
                    li {
                        display: flex;
                        height: .45rem;
                        >div {
                            color: #fff;
                            text-align: center;
                            font-size: .16rem;
                            line-height: .45rem;
                        }
                        .number {
                            flex: 1;
                        }
                        .rank {
                            flex: 2;
                        }
                        .check {
                            flex: 4;
                        }
                        .require {
                            flex: 8;
                        }
                        .limit {
                            flex: 2;
                        }
                        .state {
                            flex: 1;
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
            activeNames: [''],
        }
    },
    methods: {
        handleChange(val) {
            console.log(val);
        }
    },
}
</script>
