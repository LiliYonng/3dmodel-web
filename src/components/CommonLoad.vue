<template lang="">
    <div class="loadingBox" v-show="isLoading">
        <van-loading type="spinner" size="50px" color="#fff"  />
    </div>
</template>
<script>
import { Loading } from 'vant';
export default {
    computed:{
        isLoading(){
            return this.$store.state.isLoading;
        }
    }
}
</script>
<style lang="less">
.loadingBox{
  z-index:10000;
  position:absolute;
  top:0;
  left:0;
  width:375px;
  height:621px;
  background-color:rgba(174,174,174,0.7);
  //background-color:rgba(54, 50, 50, 0.8);
  .van-loading{
    margin-top:70%;
    margin-left:45%;
  }
}
.loadingBox-enter,
.loadingBox-leave-active {
  opacity: 0;
}
.loadingBox-enter-active,
.loadingBox-leave-active {
  transition: opacity 0.5s;
}
</style>