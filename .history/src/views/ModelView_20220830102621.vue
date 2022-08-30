<template lang="">
    <div class='model-view'>
    <CommonHeader/>
        <div class="container">
            
        </div>
    </div>
</template>
<script>
import CommonAside from '@/components/CommonAside'
import CommonHeader from '@/components/CommonHeader'
import ModelInit from '../js/model.js'
export default {
    components:{
        CommonAside,
        CommonHeader
    },
    mounter(){
        ModelInit();
    }
}
</script>
<style lang="">
    
</style>