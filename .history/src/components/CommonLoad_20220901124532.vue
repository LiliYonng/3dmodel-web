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
  position:absolute;
  top:30%;
  left:20%;
  width:375px;
  height:667px;
  background-color:rgba(54, 50, 50, 0.5);
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