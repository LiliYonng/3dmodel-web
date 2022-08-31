<template>
  <div class="Home">
    <div class="Btn">
      <div class="box" v-for="(item, index) in porceInfo">
        <img class="pic" :src="require('../assets/icon/' + item.iconName)">
        
        <!-- :style="{top:item.axes.y+"%",left:item.axes.x+"%",width:item.size+"px",height:item.size+"px"}" -->

        <span class="text">{{ item.name }}</span>
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
          name:"唐",
          iconName:'tang.png',
        },{
          name:"宋",
          iconName:'song.png',
        },{         
           name:"元",
          iconName:'yuan.png',          },
          {
            name:"明",
            iconName:"ming.png",          
          }
      ]
    }
  },

};
</script>
<style lang="less">
.Home {
  height: 100%;
  background-image: url("~@/assets/bg.png");
  position: relative;
  .Btn {
    div:nth-child(1){
            top: 60%;
      left: 10%;
    }
    .box {
      position: absolute;
      top: 50%;
      left: 30%;
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
    }
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn); // 一周
    }
  }
}
</style>
