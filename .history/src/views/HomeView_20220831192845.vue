<template>
  <div class="Home">
    <div class="Btn">
    <div class="tang">
            <span >唐</span>
    </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {

}
</script>
<style lang="less">
  .Home{
    height:100%;
    background-image: url("~@/assets/bg.png");
    .Btn{
    .tang{
      width:100px;
      height:100px;
      background-image: url("~@/assets/tang_icon.png");
      background-position: 50% 50%;
      background-size: contain;
      border-radius:50%;
    }}
  }
</style>
