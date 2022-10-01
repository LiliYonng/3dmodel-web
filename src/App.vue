<template>
  <div id="app">
  <CommonHeader/>
  <router-view></router-view>
  </div>
</template>
<script>
 import CommonHeader from '@/components/CommonHeader'
import {getModel} from '../src/api/getData.js'
 export default {
  components:{
    CommonHeader,
  },
  created(){
        this.$store.commit('getModelAry')
        const ary =this.$store.state.modelData.modelAry;
        if(ary.length)return;
          getModel().then(({data:res})=>{
           if(res.code === 200)
            {
                const ary = res.data.modelAry;
                this.$store.commit('setModelAry',ary);
          
            }
          }).catch(error=>console.log(error));
  }
 }
</script>
<style lang="less">
html{
  background-color:black;
  display:flex;
  justify-content:center;
  align-item:center;
}
#app{
  background-color:#fff;
  width:375px;
  height:667px;
}
</style>
