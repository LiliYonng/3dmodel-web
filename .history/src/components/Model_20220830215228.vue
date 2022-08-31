<template lang="">
  <div class="box">
    <div class="intrBtn">
        <button class="textIntr">文字介绍</button>
         <button class="audioIntr">语音介绍</button>
    </div>

        <div class="left_aside">
        <
        </div>
        <div class="right_aside">
            >
        </div>

    <div id="container"></div>
    <div class="ctr_pannel">
            <div class="texuBtn" @click="changeMap('color2')">
				<img src="/model/icon/color_icon.jpg" id="color">
				<img src="/model/icon/specular_icon.jpg" id="specular">
				<img src="/model/icon/gilt_icon.jpg" id="gilt">
             </div>
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
      // myModelInfo: {
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
    render(){
        //requestAnimationFrame(this.render);
        this.renderer.render(this.scene, this.camera);
        if (this.myModel) {
          this.myModel.rotation.y += 0.01; //每次绕y轴旋转0.01弧度
        }
        this.controls.update();
      },
      //场景和模型的初始化
    initScen:function(){
      const container = document.getElementById("container");
      //     const container = document.createElement( 'div' );
      // document.body.appendChild(container);
      this.scene = new THREE.Scene();
      //相机
      this.camera = new THREE.PerspectiveCamera(75, 375 / 400, 0.01, 1000);

      this.camera.position.set(10, 10, 50);
      //渲染器
      this.renderer = new THREE.WebGLRenderer({ antialias: true ,alpha: true});
     // this.renderer.setClearColor(0x404040);
      this.renderer.setSize(375, 400);

      container.appendChild(this.renderer.domElement);
      //光源
      let light = new THREE.AmbientLight(0xffffff, 1);
      this.scene.add(light);

      //var textureLoader = new THREE.TextureLoader();
      // 加载背景图片
      //var texture = textureLoader.load("/model/bg.png");
      // 纹理对象Texture赋值给场景对象的背景属性.background
     // this.scene.background = texture;
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
          obj.scale.set(0.4, 0.4, 0.4);
          obj.position.set(0, 5, -8);
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

    //更换纹理贴图
    changeMap(img) {
  // 更换纹理贴图
    if (this.myModel.children[0]) {
    let texture = new THREE.TextureLoader().load(
    this.myModelInfo.path  + "/" + img + ".jpg");
    let mtl = this.myModel.children[0];
    mtl.material.map = texture;
    }
    // if (modelType == "obj") 
    // {
    //   let mtl = model.children[0];
    //   mtl.material.map = texture;
    //   console.log(mtl.material); } 
   
    // else if (modelType == "gltf") {
    //   texture.wrapS = THREE.RepeatWrapping;
    //   texture.wrapT = THREE.RepeatWrapping;
    //   texture.repeat.set(1, 1);
    //   this.myModel.traverse(function (gltf) {
    //     if (gltf.type === "Mesh") {
    //       gltf.material = new THREE.MeshPhongMaterial({
    //         color: 0xcccccc,
    //         map: texture,
    //         normalScale: new THREE.Vector2(1, 1),
    //       }); }
    //     });
    //   }
   
    },
  changing(){
    console.log('changing');
  }
  },
  watch:{
    modelInfo(){
        this.myModelInfo =this.modelInfo;
        this.changing();
    }
  },
  mounted() {
    this.init();
    this.render();
  },
  beforeDestroy() {  
    THREE.Cache.clear();  
    this.renderer.dispose();  
    this.renderer.forceContextLoss();  
    this.renderer.domElement = null;  
    this.renderer = null;
    },
};
</script>
<style lang="less">
.box{
    height:667px;
   position:relative;
   .left_aside,.right_aside{
    position:absolute;
    top:40%;
    width:10%;
    height:10%;
   background-color:rgba(255,255,255,0.15);
    border-radius:20%;
    line-height:60px;
    font-size:1.5rem;
    font-weight:bold;
    color:#fff;
    text-align:center;
    box-shadow:0px 0px 15px 0px rgba(54, 50, 50, 0.15);
   }

   .left_aside{
   left:0;

   }
   .right_aside{
    right:0;
   }
}
   .left_aside:hover{
    background-color:red;
//     background-color:rgba(54, 50, 50,0.5);
   }
#container {
//   margin-top:150px;
  position:absolute;
  top:150px;
  margin-right: 2.5rem;
  width: 375px;
  height: 400px;
}

.intrBtn{
   position:absolute;
   top:0;
   right:.625rem; 
   button{
    color:rgb(156,156,156);
    padding: 0.5rem 0.5rem;
    margin:1.25rem 0.6rem;
    border-radius:10px;
    border:none;
    box-shadow:0px 0px 15px 0px rgba(54, 50, 50, 0.57);
   }
}
.ctr_pannel{
    width:100%;
    position:absolute;
    bottom:0;
    .texuBtn{

    border:1px solid black;
    display:flex;
    justify-content:center;
    img{
        width: 40px;
        border-radius: 50%;
        cursor: pointer;
        margin:0 1.5rem;
    }
}
}


</style>
