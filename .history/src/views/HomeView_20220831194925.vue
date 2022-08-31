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
    position:relative;
    .Btn{
    .tang{
      width:100px;
      height:100px;
      background-image: url("~@/assets/tang_icon.png");
      background-position: 50% 50%;
      background-size: contain;
      border-radius:50%;
      position:absolute;
      top:50%;
      left:30%;
      text-align:center;
      line-height:100px;
      font-size:2rem;
     font-family:"STLiti";
     color:rgb(30,33,136);
       span{
        //position:absolute;
       }
    }
    .tang:hover{
      animation: rotate 10s linear infinite;
    }

    }
         @keyframes rotate {

        to {
          transform: rotate(1turn);  // 一周
        }
         }
  }
</style>
