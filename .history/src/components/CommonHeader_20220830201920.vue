<template lang="">
    <div class='header'>
        <van-nav-bar
            title="标题"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
            >
        <template #right>
            <van-icon name="search" size="18" />
        </template>
        </van-nav-bar>
    </div>
</template>
<script>
  import { Toast } from 'vant';

export default {
      methods: {
            onClickLeft() {
            Toast('返回');
            },
            onClickRight() {
            Toast('按钮');
            },
      },
    };
</script>
<style lang="less">
    .header{
        .van-nav-bar{background-color:rgb(223,224,214);}
        
    }
</style>