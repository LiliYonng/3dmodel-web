<template lang="">
    <div class='model-view'>
    <CommonHeader/>
    <Model/>
    </div>
</template>

<script>
import CommonAside from '@/components/CommonAside'
import CommonHeader from '@/components/CommonHeader'
import Model from '../components/Model'
export default {
    components:{
        CommonAside,
        CommonHeader,
        Model
    },
}
</script>
<style lang="less">
    .container{
        margin:2.5rem 2.5rem;
        width:375px;
        height:667px;
        background-color:red;
    }
</style>