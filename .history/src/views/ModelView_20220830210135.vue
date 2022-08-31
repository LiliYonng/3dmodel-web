<template lang="">
    <div class='model_view'>
    <CommonHeader/>
    <Model :modelInfo="modelInfo"/>
    <button @click="change">变化</button>
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
    data(){
        return{
           modelInfo: {
            modelName: "model1",
            type: "obj",
            texAry: ["color", "specular", "gilt"],
            path:"/model/"},
        }
    },
    methods: {
        change(){
            this.modelInfo.path = '/';
        }
    },

}
</script>
<style lang="less">
.model_view{
        background-image: url("~@/assets/bg1.png");
}
</style>