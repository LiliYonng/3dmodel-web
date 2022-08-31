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
       animation: rotate 10s linear infinite;
       span{
        position:absolute;
       }
    }

    }
         @keyframes rotate {
        0% {
            transform: rotate(0);
        }

        25% {
            transform: rotate(90deg);
        }

        50% {
            transform: rotate(180deg);
        }

        75% {
            transform: rotate(270deg);
        }

        100% {
            transform: rotate(360deg);
        }
         }
  }
</style>
