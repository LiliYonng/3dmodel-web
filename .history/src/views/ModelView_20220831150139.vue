<template lang="">
  <div class="model_view">
    <CommonHeader />
    <Model :modelAry="modelAry" :modelFlag="modelFlag" />
    <div class="controlBtn">
      <div class="intrBtn">
        <button class="textIntr" @click="showInfo=true">文字介绍</button>
        <button class="audioIntr">语音介绍</button>
      </div>
      <div class="left_aside" @click="changeModel(0)"><</div>
      <div class="right_aside" @click="changeModel(1)">></div>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block" />
      </div>
    </van-overlay>
  </div>
</template>

<script>
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
import Model from "../components/Model";
import { Notify,   Overlay , Swipe, SwipeItem } from "vant";
export default {
  components: {
    CommonAside,
    CommonHeader,
    Model,
  },
  data() {
    return {
      showInfo:false,
      modelFlag: 0,
      modelAry: [
        {
          name: "model1",
          type: "obj",
          texAry: ["color", "specular", "gilt"],
          path: "/model/model1/",
        },
        {
          name: "model2",
          type: "gltf",
          texAry: ["color", "specular", "gilt"],
          path: "/model/model2/",
        },
      ],
    };
  },
  methods: {
    changeModel(num) {
      switch (num) {
        //上一个model
        case 0: {
          if (this.modelFlag > 0) this.modelFlag--;
          else Notify({ type: "danger", message: "没有上一个了" });
          break;
        }
        //下一个
        case 1: {
          if (this.modelFlag < this.modelAry.length - 1) this.modelFlag++;
          else Notify({ type: "danger", message: "没有下一个了" });
          break;
        }
      }
    },
  },
};
</script>
<style lang="less">
.model_view {
  background-image: url("~@/assets/bg1.png");
  position: relative;
}

.van-popup--top.van-notify{
    top: 0;
    left: unset;
    width: 375px;
    background-color: rgba(236, 14, 14, 0.61);
  }

.infoBox.van-action-sheet{  
  width:375px;
  top:50%;
  left:unset;
}
.controlBtn {
  .intrBtn {
    position: absolute;
    top: 6%;
    right: 0.625rem;
    button {
      color: rgb(156, 156, 156);
      padding: 0.5rem 0.5rem;
      margin: 1.25rem 0.6rem;
      border-radius: 10px;
      border: none;
      box-shadow: 0px 0px 15px 0px rgba(54, 50, 50, 0.57);
      cursor: pointer;
    }
    button:hover {
      background-color: rgba(54, 50, 50, 0.2);
      color: black;
    }
  }
  .left_aside,
  .right_aside {
    position: absolute;
    bottom: 10%;
    width: 10%;
    height: 10%;
    background-color: rgba(54, 50, 50, 0.5);
    border-radius: 20%;
    line-height: 60px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    box-shadow: 0px 0px 15px 0px rgba(54, 50, 50, 0.15);
    cursor: pointer;
  }

  .left_aside {
    left: 1.25rem;
  }
  .right_aside {
    right: 1.25rem;
  }
  .left_aside:hover,
  .right_aside:hover {
    background-color: rgb(54, 50, 50);
  }
}
</style>
