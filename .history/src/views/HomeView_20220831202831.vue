<template>
  <div class="Home">
    <div class="Btn">
    <div class="box" v-for="(item,index) in porceInfo">
               <img :src="require('../assets/icon/'+ item.iconName +'.png')">
        <span class="text">{{item.name}}</span>
    </div>
      <div class="tang">
        <div class="pic"></div>
        <span class="text">唐</span>
      </div>
      <div class="ming">
      
        <span class="text">明</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      porceInfo:[
        {
          name:"唐";
          iconName:'tang.png';
        },{
                    name:"宋";
          iconName:'song.png';
        },{          name:"元";
          iconName:'yuan.png';},{
            name:"明"
            iconName:"ming.png"
          }
      ]
    }
  },
  mounted() {
    let IconImg = require('../assets/icon/'+this.iconName)
  },
};
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
      .pic{
        background-image: url("~@/assets/tang_icon.png");
      }
    }
    .ming {
      position: absolute;
      top: 20%;
      left: 30%;
       .pic{
        width:80px;
        height:60px;
        background-image: url("~@/assets/ming_icon.png");
       }
    }
    .pic {
      width: 100px;
      height: 100px;
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
      background-color:#fff;
    }
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn); // 一周
    }
  }
}
</style>
