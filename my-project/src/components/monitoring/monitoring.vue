<template>
    <div id="montoring">
        <!-- 监控选择模块 -->
        <div class="select">
            <div class="select-box">
                <el-collapse v-model="activeName" accordion>
                  <el-collapse-item title="一号楼监控" name="1" class="tower">
                        <el-collapse v-model="activeName">
                            <div class="stair2"></div>
                          <el-collapse-item title="一层监控" name="1-1" class="tier">
                              <div class="detail">

                                    <a href="#" class="active">一层西侧</a>
                              </div>
                              <div class="detail">
                                    <a href="#">一层东侧</a>
                              </div>
                          </el-collapse-item>
                        </el-collapse>
                  </el-collapse-item>
                  <el-collapse-item title="二号楼监控" name="2" class="tower">
                        <el-collapse v-model="activeName">
                            <div class="stair2"></div>
                          <el-collapse-item title="一层监控" name="2-1" class="tier">
                              <div class="detail">
                                    <a href="#">一层西侧</a>
                              </div>
                              <div class="detail">
                                    <a href="#">一层东侧</a>
                              </div>
                          </el-collapse-item>
                        </el-collapse>
                  </el-collapse-item>
                  <el-collapse-item title="三号楼监控" name="3" class="tower">
                        <el-collapse v-model="activeName">
                            <div class="stair2"></div>
                          <el-collapse-item title="一层监控" name="3-1" class="tier">
                              <div class="detail">
                                    <a href="#">一层西侧</a>
                              </div>
                              <div class="detail">
                                    <a href="#">一层东侧</a>
                              </div>
                          </el-collapse-item>
                        </el-collapse>
                  </el-collapse-item>
                </el-collapse>
            </div>
        </div>
        <!-- 监控显示模块 -->
        <div class="main">
            <div class="main-top">
            </div>
            <div class="main-bottom">
                <div class="left-button" @click="leftMove">
                </div>
                <div class="frames">
                    <ul>
                        <li>
                            <div class="temp1"></div>
                            <span>画面2</span>
                        </li>
                        <li>
                            <div class="temp2"></div>
                            <span>画面3</span>
                        </li>
                        <li>
                            <div class="temp3"></div>
                            <span>画面4</span>
                        </li>
                        <li>
                            <span>画面5</span>
                        </li>
                        <li>
                            <span>画面6</span>
                        </li>
                    </ul>
                </div>
                <div class="right-button" @click="rightMove">
                </div>
            </div>
        </div>
        <!-- 监控功能模块 -->
        <div class="control">
            <div class="control-box">
                <div class="btn">
                    <div class="btn-box">
                    </div>
                </div>
                <div class="classify">
                    <ul>
                        <li>
                            <div class="icon"></div>
                            刷新显示
                        </li>
                        <li>
                            <div class="icon"></div>
                            全屏模式
                        </li>
                        <li>
                            <div class="icon"></div>
                            分屏模式
                        </li>
                        <li>
                            <div class="icon"></div>
                            开始录制
                        </li>
                        <li>
                            <div class="icon"></div>
                            录像回放
                        </li>
                        <li>
                            <div class="icon"></div>
                            截取图片
                        </li>
                        <li>
                            <div class="icon"></div>
                            常规设置
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            activeName: '0',
        }
    },
    methods: {
        leftMove() {
            let temp = $('.frames ul').position().left
            temp = temp+324
            // console.log(temp)
            if (!(temp > 0)) {
                $('.frames ul').css('left',temp/100+'rem')
            }
        },
        rightMove() {
            let temp = $('.frames ul').position().left
            let child = $('.frames ul li')
            let childQuantity = child.length-3
            let min = childQuantity*-324
            temp = temp-324
            // console.log(min)
            if (!(temp < min)) {
                $('.frames ul').css('left',temp/100+'rem')
            }
        }
    },
}
</script>

<style>
    #montoring {
        padding:  .5rem .4rem 0 .4rem;
        display: flex;
    }
    /* 选择模块样式 */
    #montoring .select{
        width: 3rem;
        height: 9.41rem;
        background-image: url('../../../static/images/m_left-border.png');
        background-size: contain;
    }
    #montoring .select-box {
        padding: .02rem;
        width: 3rem;
        height: 9.41rem;
    }
    #montoring .select-box .tower,
    #montoring .select-box .tier {
        position: relative;
    }
    #montoring .stair2 {
        height: .54rem;
        width: .64rem;
        position: absolute;
        background-image: url('../../../static/images/m_stair2.png');
        background-repeat: no-repeat;
        background-size: .19rem .15rem;
        background-position: center center;
        background-color: #020521;
        z-index: 10;
        left: 0;
        top: 0;
    }
    #montoring .el-collapse {
        position: relative;
    }
    #montoring .select .el-collapse-item__header {
        font-size: .16rem;
        color: #3375fe;
        background-color: #020521;
        border-bottom: 0;
        height: .56rem;
        line-height: .56rem;
        padding-left: .4rem;
        background-image: url('../../../static/images/m_select-border.png'),url('../../../static/images/m_stair1.png');
        background-size: contain,.17rem .17rem;
        background-position: center .54rem,.13rem .2rem;
    }
    #montoring .el-collapse-item__wrap .el-collapse-item__header {
        padding-left: .64rem;
    }
    #montoring .el-collapse-item__wrap {
        border-bottom: 0;
    }
    #montoring .el-collapse-item__content {
        padding: 0;
    }
    #montoring .el-collapse-item__content>.detail {
        background-color: #020521;
        border-bottom: 0;
        height: .56rem;
        line-height: .56rem;
        background-image: url('../../../static/images/m_select-border.png');
        background-size: contain;
        background-position: center .54rem;
    }
    #montoring .el-collapse-item__content>.detail a {
        padding-left: .64rem;
        display: block;
        width: 100%;
        height: 100%;
        font-size: .16rem;
        color: #3375fe;
    }
    #montoring .active {
        width: 2.94rem;
        height: .56rem;
        background-image: url('../../../static/images/location-active.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 2.94rem .56rem;
    }
    #montoring .el-collapse {
        border: 0;
    }
    /* 显示模块样式 */
    #montoring .main {
        width: 10.97rem;
        height: 9.37rem;
    }
    #montoring .main-top {
        margin: 0 auto;
        width: 10.17rem;
        height: 5.72rem;
        background-image: url('../../../static/images/m_main.png');
        background-size: contain;
    }
    #montoring .main-top div {
        color: #fff;
        text-align: center;
        line-height: 5.72rem;
        font-size: .36rem;
    }
    #montoring .main-bottom  {
        margin-top: .16rem;
        height: 3.53rem;
        width: 100%;
        display: flex;
    }
    #montoring .main-bottom .left-button,
    #montoring .main-bottom .right-button {
        height: .62rem;
        width: .62rem;
        line-height: .62rem;
        margin-top: 1.455rem;
    }
    #montoring .main-bottom .left-button {
        background-image: url('../../../static/images/m_left-button.png');
        background-size: 50% 50%;
        background-position: center center;
    }
    #montoring .main-bottom .right-button {
        background-image: url('../../../static/images/m_right-button.png');
        background-size: 50% 50%;
        background-position: center center;
    }
    #montoring .main-bottom .frames {
        width: 9.62rem;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    #montoring .main-bottom .frames ul {
        display: inline-block;
        width: 17rem;
        height: 100%;
        position: relative;
    }
    #montoring .main-bottom .frames li {
        float: left;
        height: 3.13rem;
        width: 3.14rem;
        position: relative;
        background-image: url('../../../static/images/m_small-border.png');
        background-size: contain;
    }
    #montoring .main-bottom .frames li:not(:first-child) {
        margin-left: .10rem;
    }
    #montoring .main-bottom .frames li span {
        font-size: .16rem;
        position: absolute;
        bottom: -0.36rem;
        left: 50%;
        transform: translate(-50%);
        color: #fff;
    }
    /* 功能模块样式 */
    #montoring .control {
        width: 4.43rem;
        height: 9.41rem;
        background-image: url('../../../static/images/m_right-border.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
    #montoring .btn {
        height: 3.29rem;
        width: 4.39rem;
        background-image: url('../../../static/images/m_btn-border.png');
        background-size: contain;
        background-position: center 3.28rem;
    }
    #montoring .btn .btn-box {
        height: 2.58rem;
        width: 2.58rem;
        margin-top: .35rem;
        margin-left: .92rem;
        background-image: url('../../../static/images/m_btn-bg.png');
        background-size: contain;
    }
    #montoring  .classify li {
        height: .78rem;
        font-size: .24rem;
        color: #3375fe;
        line-height: .76rem;
        text-align: center;
        background-image: url('../../../static/images/m_btn-border.png');
        background-size: contain;
        background-position: center .77rem;
    }
    #montoring  .classify li .icon {
        display: inline-block;
    }
    #montoring  .classify li:nth-child(1) .icon{
        background-image: url('../../../static/images/m_refresh.png');
        background-size: contain;
        margin-right: .3rem;
    }
    #montoring  .classify li:nth-child(2) .icon{
         background-image: url('../../../static/images/m_full-screen.png');
        background-size: contain;
        margin-right: .3rem;
    }
    #montoring  .classify li:nth-child(3) .icon{
         background-image: url('../../../static/images/m_split-screen.png');
        background-size: contain;
        margin-right: .3rem;
    }
    #montoring  .classify li:nth-child(4) .icon{
         background-image: url('../../../static/images/m_transcribe.png');
        background-size: contain;
        margin-right: .3rem;
    }
    #montoring  .classify li:nth-child(5) .icon{
         background-image: url('../../../static/images/m_playback.png');
        background-size: contain;
        margin-right: .3rem;
    }
    #montoring  .classify li:nth-child(6) .icon{
         background-image: url('../../../static/images/m_screenshot .png');
        background-size: contain;
        margin-right: .3rem;
    }
    #montoring  .classify li:nth-child(7) .icon{
         background-image: url('../../../static/images/m_set.png');
        background-size: contain;
        margin-right: .3rem;
    }
    .temp1 {
        width: 3.1rem;
        height: 3.09rem;
        margin-left: .02rem;
        margin-top: .02rem;
        background-image: url('../../../static/images/temp1.jpg');
        background-size: cover;
    }
    .temp2 {
        width: 3.1rem;
        height: 3.09rem;
        margin-left: .02rem;
        margin-top: .02rem;
        background-image: url('../../../static/images/temp2.jpg');
        background-size: cover;
    }
    .temp3 {
        width: 3.1rem;
        height: 3.09rem;
        margin-left: .02rem;
        margin-top: .02rem;
        background-image: url('../../../static/images/temp3.jpg');
        background-size: cover;
    }
</style>
