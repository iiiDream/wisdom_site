<template>
    <div id="md">
        <div class="slideshow">
            <div class="color1"></div>
            <div class="color2"></div>
            <div class="color3"></div>
            <div class="color1"></div>
        </div>
        <!-- <div class="button">
        </div> -->
    </div>
</template>

<style lang="less">
    #md {
        width: 500px;
        height: 200px;
        overflow: hidden;
        margin: 100px auto;
        background-color: #fff;
        .slideshow {
            height: 200px;
            width: 2000px;
            >div {
                float: left;
                width: 500px;
                height: 200px;
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
        .button {
            width: 50px;
            height: 50px;
            border: 2px solid #000;
            margin: 50px auto;
        }
    }
</style>

<script>
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
            $('.color1').animate({
                marginLeft:'500px'
            },500)
        },
    }
}
</script>
