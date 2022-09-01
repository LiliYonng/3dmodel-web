<template lang="">
  <div class="model_view">
    <Model :modelAry="modelAry" :modelFlag="modelFlag" />
    <CommonLoad/>
    <div class="controlBtn">
      <div class="intrBtn">
        <button class="textIntr" @click="showInfo = true">文字介绍</button>
        <button class="audioIntr">语音介绍</button>
      </div>
      <div class="left_aside" @click="changeModel(0)"><</div>
      <div class="right_aside" @click="changeModel(1)">></div>
    </div>
    <van-overlay :show="showInfo" @click="showInfo = false">
      <div class="wrapper" @click.stop>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <div class="content">
              <img src="/model/info/model1.jpg" alt="">
              <p>
                青花瓷（blue and white
                porcelain），又称白地青花瓷，常简称青花，是中国瓷器的主流品种之一，属釉下彩瓷。
                青花瓷是用含氧化钴的钴矿为原料，在陶瓷坯体上描绘纹饰，再罩上一层透明釉，经高温还原焰一次烧成。
                钴料烧成后呈蓝色，具有着色力强、发色鲜艳、烧成率高、呈色稳定的特点。
              </p>
            </div>
          </van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import CommonLoad from '@/components/CommonLoad'
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
import Model from "../components/Model";
import { Notify, Overlay, Swipe, SwipeItem } from "vant";
export default {
  components: {
    CommonAside,
    CommonHeader,
    Model,
    CommonLoad
  },
  data() {
    return {
      showInfo: false,
      modelFlag: 0,
      // modelAry: [
      //   {
      //     name: "model1",
      //     type: "obj",
      //     texAry: ["color", "specular", "gilt"],
      //     path: "/model/model1/",
      //   },
      //   {
      //     name: "model2",
      //     type: "gltf",
      //     texAry: ["color", "specular", "gilt"],
      //     path: "/model/model2/",
      //   },
      // ],
      modelAry:[]
    };
  },
  mounted() {
    this.modelAry = this.$store.state.modelData.modelAry;
  },
  computed:{
      isLoading():{
      return this.$store.state.isLoading;
    }
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

  position: relative;
}
.my-swipe .van-swipe-item {
  color: #fff;
  padding:1.4rem .125rem;
  text-align: center;
  background-color: rgba(124, 124, 124, 0.81);
}
.van-overlay {
  width: 375px;
  height: 100%;
  left: unset;
  background-color:rgba(0, 0, 0, 0.1);
  .wrapper {
    margin-top: 10rem;
    .content{
      font-family:"STSong";
      font-size:1rem;
      padding:0 1.875rem;
      img{
        width:150px;
        float:left;
        margin-right:.6rem;
      }
    }
  }
}
.van-popup--top.van-notify {
  top: 0;
  left: unset;
  width: 375px;
  background-color: rgba(236, 14, 14, 0.61);
}

.infoBox.van-action-sheet {
  width: 375px;
  top: 50%;
  left: unset;
}
.controlBtn {
  .intrBtn {
    position: absolute;
    top: 0;
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
    bottom: 20%;
    width: 10%;
    height: 8%%;
    background-color: rgba(54, 50, 50, 0.5);
    border-radius: 20%;
    line-height: 50px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    box-shadow: 0px 0px 15px 0px rgba(54, 50, 50, 0.15);
    cursor: pointer;
  }

  .left_aside {
    left: 3rem;
  }
  .right_aside {
    right: 3rem;
  }
  .left_aside:hover,
  .right_aside:hover {
    background-color: rgb(54, 50, 50);
  }
}
</style>
