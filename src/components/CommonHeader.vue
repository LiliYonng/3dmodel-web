<template lang="">
    <div class='header'>
        <van-nav-bar
            title="青花瓷展示"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
            >
        <template #right>
        <van-icon name="wap-nav" size='18' />
        </template>
        </van-nav-bar>
    </div>
</template>
<script>
  import { Toast } from 'vant';

export default {
      methods: {
            onClickLeft() {
            if(this.$route.name !='home')
            this.$router.push({name:"home"})
            },
            onClickRight() {
            Toast('按钮');
            },
      },
    };
</script>
<style lang="less">
    .header{
        .van-nav-bar{
            background-color:rgb(180, 181, 170);
            .van-icon{
                color:#fff;
            }
            .van-nav-bar__title{
               // color:#fff;
                font-family:'STKaiti';
                font-size:1.25rem;
                font-weight:bold;
            }
            }
        
    }
</style>