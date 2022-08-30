<template lang="">
    <div class='header'>
        <van-nav-bar
            title="标题"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
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
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>