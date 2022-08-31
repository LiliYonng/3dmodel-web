<template lang="">
  <div class="model_view">
    <CommonHeader />
    <div class="controlBtn">
      <div class="intrBtn">
        <button class="textIntr">文字介绍</button>
        <button class="audioIntr">语音介绍</button>
      </div>

      <div class="left_aside"><</div>
      <div class="right_aside">></div>
    </div>

    <Model :modelInfo="modelInfo" />
  </div>
</template>

<script>
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
import Model from "../components/Model";
export default {
  components: {
    CommonAside,
    CommonHeader,
    Model,
  },
  data() {
    return {
      modelInfo: {
        modelName: "model1",
        type: "obj",
        texAry: ["color", "specular", "gilt"],
        path: "/model/",
      },
    };
  },
  methods: {
    change() {
      this.modelInfo = { path: "/" };
    },
  },
};
</script>
<style lang="less">
.model_view {
  background-image: url("~@/assets/bg1.png");
}
.box{
    height:667px;
   position:relative;
   .left_aside,.right_aside{
    position:absolute;
    bottom:10%;
    width:10%;
    height:10%;
  background-color:rgba(54, 50, 50,0.5);
    border-radius:20%;
    line-height:60px;
    font-size:1.5rem;
    font-weight:bold;
    color:#fff;
    text-align:center;
    box-shadow:0px 0px 15px 0px rgba(54, 50, 50, 0.15);
    cursor:pointer;
   }

   .left_aside{
   left:1.25rem;

   }
   .right_aside{
    right:1.25rem;
   }
   .left_aside:hover,.right_aside:hover{
    background-color:rgb(54, 50, 50);  
   }
   
}
</style>
