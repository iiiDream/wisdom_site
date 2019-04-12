<template>
    <div id="q_set">
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
                    {{listTitle}}
                </div>
                <!-- 表头 -->
                <ul class="table-head">
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
                <!-- 表格内容 -->
                <!-- 安全管理 -->
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            在建工程无施工许可
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            未在政府安监部门办理安全备案手续
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            未建立安全生产、职业健康责任制
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            责任制内容不符
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            5
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            未签订岗位安全目标责任书
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            6
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            未对安全目标责任完成情况进行考核、奖罚
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            三级
                        </div>
                        <div class="check">
                            未按规定配备安全总监
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            3
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            安全总监未进项目班子
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            未按规定设置安监部门
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            专职安监人员数量不足
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            5
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            未明确专（兼）职职业健康管理人员
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            危险性较大分部分项工程未编制方案就开始施工
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            方案审核、审批、专家论证手续不全
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            方案内容不完整
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            未建立重大危险源、职业危害因素及其控制措施清单
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            未建立安全检查制度
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            未有安全检查记录
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            事故隐患的整改未做到定人、定时间、定措施
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            对重大事故隐患改通知书所列项目未按期整改和复查
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            分部分项工程无安全技术交底
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            交底内容针对性不强
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            交底为履行签字手续
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            未建立安全检查制度
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            未开展定期安全检查
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            领导未带班检查
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            项目检查出的隐患未按时整改
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            5
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            上级挂牌督办的隐患未定人、定时间、定措施落实整改
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            6
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            对下达停工整改的隐患，未整改就施工的
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            7
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            职业危害严重的区域、工序，未对参与人员进行相应体检的
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            三类人员未持证上岗
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            未进行入场三级安全教育
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            变换工种未进行安全教育
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            安全教育无记录、未签字
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            5
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            施工管理人员未进行年度安全培训
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            6
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            安监人员未进行年度安全培训
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            7
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            未建立班组安全活动制度
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            8
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            班组安全活动无记录
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            未编译安全生产费用总预算
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            无年度和月度安全投入计划
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            未对安全生产费用进行统计分析
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            因投入不足导致存在重大安全隐患
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            未实施带班管理制度
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            项目负责人未佩戴班袖章
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            现场未设置带班公示标牌
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            无带班交接记录
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            未建立特种作业登记名册
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            未持证上岗作业
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            未编制应急预案
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            预案内容无针对性
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            未对预案进行交底、培训
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            未组织演练
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            5
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            未按规定报告事故
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <!-- 高空作业 -->
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            不符合标准的每发现一项
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            有一人不戴安全帽
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            不按规定佩戴安全帽
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            规格、材质不符合要求
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            工程外侧未用密目式安全网封闭
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            自升式模板、脚手架内侧未采用钢板网进行硬质防护
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            脚手架安全网阴、阳角挂设不顺直
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            5
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            破损、污染没有及时进行恢复的或搭接长度不够
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            6
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            平网内垃圾未清理
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            不符合标准
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            每有一人未系安全带
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            每有一人安全带系挂不符合要求
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            一级级
                        </div>
                        <div class="check">
                            在建工程的预留洞口、楼梯口、电梯井口，未采取防护措施
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            防护措施、设施不符合要求或不严密
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            防护设施未形成定型化、工具化
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            电梯井内每隔两层（不大于10米）未采取隔离防护措施
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            未搭设防护棚或防护不严、不牢固可靠
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            防护棚两侧未进行防护
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            防护棚宽度不大于通道口宽度
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            防护棚长度不符合要求
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            5
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            建筑物高度超过30m，防护棚顶未采用双层防护
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            每一处临边无防护
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            高层临边防护未设置档脚板和挂设密目式安全网
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            防护设施未形成定型化、工具化
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            移动式梯子的梯脚底部垫高使用
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            折梯使用未有可靠拉撑装置
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            梯子的制作质量或材质不符合要求
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            悬空作业处未设置防护栏杆或其他可靠的安全设施
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            悬空作业所用的索具、吊具、料具等设备，未经过技术鉴定或验证、验收
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            操作平台的面积超过10㎡或高度超过5m
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            移动式操作平台，轮子与平台的连接不牢固可靠或立柱底端距离地面超过80mm
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            操作平台的组装不符合要求
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            平台台面铺板不严
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            5
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            操作平台四周未按规定设置防护栏杆或未设置登高扶梯
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            6
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            操作平台的材质不符合要求
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            三级
                        </div>
                        <div class="check">
                            物料平台未编译专项施工方案或未经设计计算
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            3
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            三级
                        </div>
                        <div class="check">
                            物料平台搭设不符合专项方案要求
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            3
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            物料平台支撑架未与工程结构连接不符合要求
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            平台台面铺板不严或台面层下方未按要求设置安全平网
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            5
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            物料平台未在明显处设置限定荷载标牌
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            悬挑式钢平台未编译专项施工方案或未经设计计算
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            悬挑式钢平台的搁支点与上部拉结点，未设置在建筑物结构上
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            斜拉杆或钢丝绳，未按要求在平台两边各设置两道
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            钢平台未按要求设置固定的防护栏杆和档脚板或栏板
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            5
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            钢平台台面铺垫板不严，或钢平台与建筑结构之间铺板不严
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            个人防护用品及防护设施材料未验收
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            现场安全防护设施搭设完毕后，未验收
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            一级
                        </div>
                        <div class="check">
                            作业面交接时未对防护设施进行交接
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            7
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <!-- 基坑工程 -->
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            开挖深度超过3米（含3米）的基坑（槽）的土方、支护、降水工程无专项施工方案
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            施工方案针对性差不能指导施工
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            施工方案未经审批
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            需要论证的方案未经专家论证
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            深度超过2米的基坑（槽）施工无临边防护措施
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            临边护不符合要求
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body show">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            坑槽开挖设置安全边坡不符合安全要求
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            三级
                        </div>
                        <div class="check">
                            特殊支护做法不符合设计方案
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            3
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            在支护结构上放悬或悬挂重物
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            在施工过程中，无防止设备、重物碰撞支护结构措施
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            5
                        </div>
                        <div class="rank">
                            二级
                        </div>
                        <div class="check">
                            支护设施已产生局部变形又未采取措施调整
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            5
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            6
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            支撑拆除无方案
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            7
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            支撑爆破拆除，施工单位无相应资质
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li>
                        <div class="number">
                            1
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            高水位地区深基坑内未设置有效降水措施
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            2
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            深基坑边界周围地面未设置排水沟或排水不畅
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            3
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            基坑内施工无有效排水措施
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            4
                        </div>
                        <div class="rank">
                            四级
                        </div>
                        <div class="check">
                            深基础施工采用坑外降水，未采取防止临近建筑和管线沉降措施
                        </div>
                        <div class="require">
                            
                        </div>
                        <div class="limit">
                            2
                        </div>
                        <div class="state">
                            正常
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #q_set {
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
                        color: #fff;
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
                            color: #fff;
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
                                        color: #fff;
                                        font-size: .14rem;
                                    }
                                }
                            }
                        }
                        >a {
                            height: .3rem;
                            display: block;
                            color: #fff;
                            font-size: .16rem;
                        }
                    }
                }
                .nav-main::-webkit-scrollbar {/*滚动条整体样式*/
                    width: .05rem;     
                    // height: 1px;
                }
                .nav-main::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                    border-radius: .1rem;
                    // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                    background-color: #142a6a;
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
                .table-head {
                    // height: .45rem;
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
                            flex: 7;
                        }
                        .require {
                            flex: 7;
                        }
                        .limit {
                            flex: 2;
                        }
                        .state {
                            flex: 1;
                        }
                    }
                }
                .table-body {
                    // height: .45rem;
                    width: 11.87rem;
                    overflow: hidden;
                    border-radius: .03rem;
                    display: none;
                    li {
                        display: flex;
                        min-height: .45rem;
                        border-bottom: .01rem solid #142a6a;
                        line-height: .45rem;
                        >div {
                            color: #fff;
                            text-align: center;
                            font-size: .16rem;
                        }
                        .number {
                            flex: 1;
                        }
                        .rank {
                            flex: 2;
                        }
                        .check {
                            flex: 7;
                        }
                        .require {
                            flex: 7;
                        }
                        .limit {
                            flex: 2;
                        }
                        .state {
                            flex: 1;
                        }
                    }
                }
                .show {
                    display: block;
                }
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {
            listTitle: '安全生产责任制',
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
