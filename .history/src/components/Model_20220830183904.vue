<template lang="">
  <div class="box">
    <div id="container"></div>
    <div class="texuBtn">
      <button type="">1</button>
      <button type="">2</button>
      <button type="">3</button>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";

import { OrbitControls } from "../js/js/OrbitControls.js";
import { GLTFLoader } from "../js/js/GLTFLoader.js";
import { OBJLoader } from "../js/js/OBJLoader.js";
import { MTLLoader } from "../js/js/MTLLoader.js";

export default {
  name: "model",
  props: ["modelInfo"],
  data() {
    return {
      // myModel: {
      // modelName: "model1",
      // type: "obj",
      // texAry: ["color", "specular", "gilt"],
      // path:"/model/"},
      myModelInfo: this.modelInfo,
      myModel: null,
      scene: null,
      camera: null,
      renderer: null,
      controls:null
    };
  },
  methods: {
    init() {
        //场景，灯光，摄像机初始化
        this.initScen();
      //加载模型
      this.loadObj();
        //手势控制
      this.controlModl();

    },
    initScen:function(){
      const container = document.getElementById("container");
      //     const container = document.createElement( 'div' );
      // document.body.appendChild(container);
      this.scene = new THREE.Scene();
      //相机
      this.camera = new THREE.PerspectiveCamera(75, 300 / 475, 0.01, 1000);

      this.camera.position.set(10, 10, 50);
      //渲染器
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setClearColor(0x404040);
      this.renderer.setSize(300, 475);

      container.appendChild(this.renderer.domElement);
      //光源
      let light = new THREE.AmbientLight(0xffffff, 1);
      this.scene.add(light);

      var textureLoader = new THREE.TextureLoader();
      // 加载背景图片
      var texture = textureLoader.load("/model/bg.png");
      // 纹理对象Texture赋值给场景对象的背景属性.background
      this.scene.background = texture;
    },
    loadObj: function () {
      const OBJLoad = new OBJLoader(); //obj加载器
      const MTLLoad = new MTLLoader(); //材质文件加载器
      let modelName = "model1";
      let modelType = "obj";
      let themodel = null;
      let thePath = this.myModelInfo.path + this.myModelInfo.modelName;

      MTLLoad.load(thePath + ".mtl", function (materials) {
        //obj的模型会和MaterialCreator包含的材质对应起来
        OBJLoad.setMaterials(materials);});     
        OBJLoad.load(thePath + ".obj", (obj)=> {
          obj.scale.set(0.3, 0.3, 0.3);
          obj.position.set(0, -10, 0);
          this.myModel = obj;
          this.scene.add(obj);
          });
    },
    controlModl:function(){
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            this.controls.enablePan = false;
            this.controls.maxDistance = 100;
            this.controls.minDistance = 1;
            this.controls.update();
    },
    render(){
        requestAnimationFrame(render);
        this.renderer.render(this.scene, this.camera);
        if (this.myModel) {
          this.myModel.rotation.y += 0.01; //每次绕y轴旋转0.01弧度
        }
        this.controls.update();
      }
  },

  mounted() {
    this.init();
          this.render();
  },
};
</script>
<style lang="less">
#container {
  margin: 2.5rem 2.5rem;
  width: 300px;
  height: 475px;
}
</style>
