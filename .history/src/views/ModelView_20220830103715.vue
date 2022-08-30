<template lang="">
    <div class='model-view'>
    <CommonHeader/>
        <div id="container">
            
        </div>
    </div>
</template>

<script>
import CommonAside from '@/components/CommonAside'
import CommonHeader from '@/components/CommonHeader'
import modelInit from '../js/model.js'
export default {
    components:{
        CommonAside,
        CommonHeader
    },
    mounter(){
        modelInit();
    }
}
</script>
<style lang="">
    
</style>