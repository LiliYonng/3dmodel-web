<template lang="">
    <div class="loadingBox" v-if="true">
      <van-loading type="spinner" size="24px"  />
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
   .loadingBox{
  position:absolute;
  top:30%;
  left:20%;
  width:12.5rem;
  height:12.5rem;
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