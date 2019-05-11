<template>
    <div id="md">
        <div class="slideshow">
            <div class="color1"></div>
            <div class="color2"></div>
            <div class="color3"></div>
            <div class="color4" id="last"></div>
        </div>
        <!-- <div class="button">
        </div> -->
        <div class="right-fixed">
            <ul>
                <li>
                    <a></a>
                </li>
                <li>
                    <a></a>
                </li>
                <li>
                    <a></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="less">
    #md {
        width: 500px;
        height: 200px;
        overflow: hidden;
        position: relative;
        margin: 100px auto;
        background-color: #fff;
        .slideshow {
            width: 500px;
            height: 200px;
            position: relative;
            >div {
                top: 0;
                width: 500px;
                height: 200px;
                position: absolute;
                // &:nth-child(1) {
                //     left: 0;
                // }
                &:nth-child(2) {
                    opacity: 0;
                }
                &:nth-child(3) {
                    opacity: 0;
                }
                &:nth-child(4) {
                    opacity: 0;
                }
            }
        }
        .color1 {
            background-color: #f00;
            // margin-left: 100px;
        }
        .color2 {
            background-color: #0f0;
        }
        .color3 {
            background-color: #00f;
        }
        .color4 {
            background-color: #f0f;
        }
        .button {
            width: 50px;
            height: 50px;
            border: 2px solid #000;
            margin: 50px auto;
        }
        .right-fixed {
            right: 0;
            width: 1rem;
            position: fixed;
            ul {
                li {
                    width: 1.2rem;
                    height: .7rem;
                    padding-bottom: .2rem;
                    a {
                        float: right;
                        width: 1.2rem;
                        height: .5rem;
                        display: block;
                        line-height: .5rem;
                        text-align: right;
                        transition: all .5s;
                        background-color: aqua;
                    }
                    a:hover {
                        // background-color: #f00;
                        width: 2rem;
                    }
                }
            }
        }
    }
</style>

<script>
import { setInterval } from 'timers';
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        this.temp()
    },
    methods: {
        buttonClick() {
            let i = true
            $('.button').on('click',function(){
                if (i) {
                    $(this).css('background-color','#0f0')
                    i = !i
                } else {
                    $(this).css('background-color','#ff0')
                    i = !i
                }
            })
        },

        temp() {
            // $('.slideshow div:eq(0)').animate({
            //     left:'-500px'
            // },500)
            // console.log($('.slideshow div').length)
            let i = 0
            let timeId = setInterval(()=>{
                // console.log($('.slideshow div')[i].id())
                // if ($('.slideshow div')[0].id() == 'last') {

                // } else {

                // }
                if (i==0) {
                    $(`.color1`).animate({
                        opacity:'1'
                    },500)
                } else {
                    $(`.color1`).animate({
                        opacity:'0'
                    },500)
                }
                
                if (i==1) {
                    $(`.color2`).animate({
                        opacity:'1'
                    },500)
                } else {
                    $(`.color2`).animate({
                        opacity:'0'
                    },500)
                }

                if (i==2) {
                    $(`.color3`).animate({
                        opacity:'1'
                    },500)
                } else {
                    $(`.color3`).animate({
                        opacity:'0'
                    },500)
                }

                if (i==3) {
                    $(`.color4`).animate({
                        opacity:'1'
                    },500)
                } else {
                    $(`.color4`).animate({
                        opacity:'0'
                    },500)
                }
                
                i++

                if (i==4) {
                    i = 0
                }
            },1000)
        },
    }
}
</script>
