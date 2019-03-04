<template>
    <div id="l_search">
        <div class="content-box">
            <div class="message">
                <div class="inquire">
                    <el-input v-model="input" placeholder="姓名或设备编号或电话"></el-input>
                    <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                    <button>查询</button>
                </div>
            </div>
            <div class="map"></div>
        </div>
    </div>
</template>

<style lang="less">
    #l_search {
        .content-box {
            width: 15rem;
            height: 9.39rem;
            padding: .07rem .07rem .07rem .28rem;
            background-image: url('../../../static/images/location-bigBorder.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            display: flex;
            .message {
                width: 2.55rem;
                .inquire {
                    transform: translateY(.18rem);
                    .el-input {
                        width: 1.45rem;
                        height: .22rem;
                        padding: .01rem;
                        .el-input__inner {
                            height: .2rem;
                            line-height: .2rem;
                            font-size: .12rem;
                            padding-left: .07rem;
                        }
                        .el-input__prefix {
                            display: none;
                        }
                    }
                    button {
                        border: 0;
                        color: #fff;
                        background-color: #00aefe;
                        border-radius: .05rem;
                    }
                }
            }
            .map {
                flex: 1;
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {
            input: '',
            value1: '',
        }
    }
}
</script>
