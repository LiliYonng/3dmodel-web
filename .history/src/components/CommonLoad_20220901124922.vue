<template lang="">
    <div class="loadingBox" v-show="true">
      <van-loading type="spinner" size="24px"  />
    </div>
</template>
<script>
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
  height:667px;
  background-color:rgba(255,255,255,0.2);
  //background-color:rgba(54, 50, 50, 0.8);
  .van-loading{
    margin-top:70%;
    margin-left:50%;
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