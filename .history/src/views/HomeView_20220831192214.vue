<template>
  <div class="Home">
    <div class="Btn">
      <span class="tang">唐</span>
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
       background-image: url("~@/assets/tang_icon.png");
           background-position: 50% 50%;
    background-size: 20px 20px;
    }}
  }
</style>
