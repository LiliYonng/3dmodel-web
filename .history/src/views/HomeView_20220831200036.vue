<template>
  <div class="Home">
    <div class="Btn">
      <div class="tang">
        <div class="pic"></div>
        <span class="text">唐</span>
      </div>
      <div class="ming">
        <div class="pic"></div>
        <span class="text">明</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {};
</script>
<style lang="less">
.Home {
  height: 100%;
  background-image: url("~@/assets/bg.png");
  position: relative;
  .Btn {
    .tang {
      position: absolute;
      top: 50%;
      left: 30%;
    }
    .ming {
      position: absolute;
      top: 20%;
      left: 30%;
       background-image: url("~@/assets/ming_icon.png");
    }
    .pic {
      width: 100px;
      height: 100px;
      // background-image: url("~@/assets/tang_icon.png");
      background-position: 50% 50%;
      background-size: contain;
      border-radius: 50%;
      animation: rotate 10s linear infinite;
    }

    .text {
      position: absolute;
      top: 35%;
      left: 35%;
      font-size: 2rem;
      font-family: "STLiti";
      color: rgb(30, 33, 136);
    }
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn); // 一周
    }
  }
}
</style>
