<template>
  <div class="Home">
    <div class="Btn">
      <div class="btnBox" v-for="(item, index) in porceInfo" @click="select(index)">
        <img class="pic" :src="require('../assets/icon/' + item.iconName)">
        
        <!-- :style="{top:item.axes.y+"%",left:item.axes.x+"%",width:item.size+"px",height:item.size+"px"}" -->

        <span class="text">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>

import {getModel} from '../api/getData.js'
// @ is an alias to /src
export default {
  data() {
    return {
      porceInfo:[
        {
          id:1001,
          name:"唐",
          iconName:'tang.png',
        },{
          id:1002,
          name:"宋",
          iconName:'song.png',
        },{       
          id:1003,  
           name:"元",
          iconName:'yuan.png',          },
          {
            id:1004,
            name:"明",
            iconName:"ming.png",          
          }
      ]
    }
  },
  methods: {
    select(index){
      let id = this.porceInfo[index].id;
      //this.$router.push({name:'model'});
      //发送请求获取数据存入vuex modelView页面通过vuex获取数据
         getModel(id).then(({data:res})=>{
            if(res.code === 200)
            {
             // console.log(res);
            }
            
          }).catch(error=>console.log(error));
    }
  },

};
</script>
<style lang="less">
.Home {
  height: 621px;
  background-image: url("~@/assets/bg.png");
  position: relative;
  .Btn {

    .btnBox {      
      cursor:pointer;
      position: absolute;
    }
    .pic {
      background-position: 50% 50%;
      background-size: contain;
      border-radius: 50%;
      animation: rotate 10s linear infinite;

    }

    .text {
      position: absolute;
      top: 35%;
      left: 35%;
      font-family: "STLiti";
      color: rgb(30, 33, 136);
    }

        div:nth-child(1)
    {
      top: 10%;
      left: 60%;
      font-size:1rem;
      img{
        width:60px;
        height:60px;
      }
    }
    div:nth-child(2){
      top:25%;
      left:50%;
      font-size:1.5rem;
      img{
        width:65px;
        height:65px
      }
    }
        div:nth-child(3){
      top:40%;
      left:20%;
      font-size:1.5rem;
      img{
        width:85px;
        height:85px
      }
    }
        div:nth-child(4){
      top:50%;
      left:50%;
      font-size:2rem;
      img{
        width:100px;
        height:100px
      }
    }
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn); // 一周
    }
  }
}
</style>
