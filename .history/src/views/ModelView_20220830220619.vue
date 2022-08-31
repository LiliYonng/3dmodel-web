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
</style>
