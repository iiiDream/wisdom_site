<template>
    <div id="l_set">
        <div class="button-box">
            <a @click="areaShow" :class="show?'active':''">工区</a>
            <a @click="staffShow" :class="show?'':'active'">人员</a>
            <a v-show="show" class="right-button">添加工区</a>
            <a v-show="!show" class="right-button">添加工人</a>
        </div>
        <div class="table-box">
            <ul class="area" v-show="show">
                <li>
                    <span>序号</span>
                    <span>工区名称</span>
                    <span>定位方式</span>
                    <span>自动定位上报时间间隔</span>
                    <span>定位数据连接超时时间</span>
                    <span>操作</span>
                </li>
                <li>
                    <span>1</span>
                    <span>井深信息科技</span>
                    <span>
                        <select>
                            <option value ="1">高精准定位</option>
                        </select>
                    </span>
                    <span>
                        <input type="number" v-model="minute1">
                        分钟
                    </span>
                    <span>
                        <input type="number" v-model="second1">
                        秒
                    </span>
                    <span>
                        <a href="#">保存</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="#">删除</a>
                    </span>
                </li>
                <li>
                    <span>2</span>
                    <span>山西志泽一鼎科技</span>
                    <span>
                        <select>
                            <option value ="1">高精准定位</option>
                        </select>
                    </span>
                    <span>
                        <input type="number" v-model="minute2">
                        分钟
                    </span>
                    <span>
                        <input type="number" v-model="second2">
                        秒
                    </span>
                    <span>
                        <a href="#">保存</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="#">删除</a>
                    </span>
                </li>
                <li>
                    <span>3</span>
                    <span>深圳市政大浪项目</span>
                    <span>
                        <select>
                            <option value ="1">高精准定位</option>
                        </select>
                    </span>
                    <span>
                        <input type="number" v-model="minute3">
                        分钟
                    </span>
                    <span>
                        <input type="number" v-model="second3">
                        秒
                    </span>
                    <span>
                        <a href="#">保存</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="#">删除</a>
                    </span>
                </li>
                <li>
                    <span>4</span>
                    <span>深圳茅州河项目</span>
                    <span>
                        <select>
                            <option value ="1">高精准定位</option>
                        </select>
                    </span>
                    <span>
                        <input type="number" v-model="minute4">
                        分钟
                    </span>
                    <span>
                        <input type="number" v-model="second4">
                        秒
                    </span>
                    <span>
                        <a href="#">保存</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="#">删除</a>
                    </span>
                </li>
                <li>
                    <span>5</span>
                    <span>虎匠罗芳项目</span>
                    <span>
                        <select>
                            <option value ="1">高精准定位</option>
                        </select>
                    </span>
                    <span>
                        <input type="number" v-model="minute5">
                        分钟
                    </span>
                    <span>
                        <input type="number" v-model="second5">
                        秒
                    </span>
                    <span>
                        <a href="#">保存</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="#">删除</a>
                    </span>
                </li>
            </ul>
            <ul class="staff" v-show="!show">
                <li>
                    <span>序号</span>
                    <span>名字</span>
                    <span>所在工区</span>
                    <span>所属劳务</span>
                    <span>设备编号</span>
                    <span>操作</span>
                </li>
                <li>
                    <span>1</span>
                    <span>韩子昂</span>
                    <span>
                        科创工业园
                    </span>
                    <span>
                        科创劳务有限公司
                    </span>
                    <span>
                        0001
                    </span>
                    <span>
                        <a href="#">保存</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="#">删除</a>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="less">
    #l_set {
        .button-box {
            height: .4rem;
            padding-top: .1rem;
            a {
                color: #fff;
                width: .66rem;
                height: .3rem;
                font-size: .16rem;
                line-height: .3rem;
                text-align: center;
                display: inline-block;
                border-radius: .03rem;
                overflow: hidden;
            }
            .right-button {
                width: 1.1rem;
                float: right;
                background-color: #3375fe;
            }
            .active {
                background-color: #3375fe;
            }
        }
        .table-box {
            margin-top: .18rem;
            ul {
                width: 100%;
                border: .02rem solid #142a6a;
                li {
                    width: 100%;
                    color: #fff;
                    display: flex;
                    border-bottom: .01rem solid #142a6a;
                    span {
                        flex: 1;
                        text-align: center;
                        line-height: .5rem;
                        font-size: .18rem;
                        border-right: .01rem solid #142a6a;
                        input {
                            outline-style: none;
                            resize: none;
                            border: none;
                        }
                        select {
                            width: 1.53rem;
                            height: .26rem;
                            outline-style: none;
                            resize: none;
                            border: none;
                        }
                        a {
                            color: #fff;
                            font-size: .18rem;
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
            minute1: 5,
            minute2: 5,
            minute3: 5,
            minute4: 5,
            minute5: 5,
            second1: 8,
            second2: 8,
            second3: 8,
            second4: 8,
            second5: 8,
            show: true,
        }
    },
    methods: {
        areaShow() {
            this.show = true;
        },
        staffShow() {
            this.show = false;
        },
    },
}
</script>