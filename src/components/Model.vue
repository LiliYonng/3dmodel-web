<template lang="">
  <div class="box">
    <div id="container"></div>
    <div class="ctr_pannel">
      <div class="texuBtn" @click="changeMap">
        <img src="/model/icon/color_icon.jpeg" id="color" />
        <img src="/model/icon/specular_icon.jpeg" id="specular" />
        <img src="/model/icon/gilt_icon.jpeg" id="gilt" />
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
  props: ["modelAry","modelFlag"],
  data() {
    return {
      modelInfo: this.modelAry,
      myAnima:null,
      Flag:this.modelFlag,
      curModel: null,
      modelObj: null,
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
    };
  },
  methods: {
    init() {
      //场景，灯光，摄像机初始化
      this.initScen();
      //手势控制
      this.controlModl();
    },
    render() {
      this.renderer.render(this.scene, this.camera);
      if (this.modelObj) {
        this.modelObj.rotation.y += 0.01; //每次绕y轴旋转0.01弧度
      }
      this.controls.update();
      this.myAnima = requestAnimationFrame(this.render);
    },
    //场景和模型的初始化
    initScen: function () {
      const container = document.getElementById("container");
      //     const container = document.createElement( 'div' );
      // document.body.appendChild(container);
      this.scene = new THREE.Scene();
      //相机
      this.camera = new THREE.PerspectiveCamera(75, 375 / 400, 0.01, 1000);

      this.camera.position.set(10, 10, 50);
      //渲染器
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      // this.renderer.setClearColor(0x404040);
      this.renderer.setSize(375, 400);

      container.appendChild(this.renderer.domElement);
      //光源
      let light = new THREE.AmbientLight(0xffffff, 1);
      this.scene.add(light);

      //var textureLoader = new THREE.TextureLoader();
      // 加载背景图片
      //var texture = textureLoader.load("/model/bg.jpeg");
      // 纹理对象Texture赋值给场景对象的背景属性.background
      // this.scene.background = texture;
    },
    loadModel: function () {
      const vm = this;
      let modelName = this.curModel.name;
      let modelType = this.curModel.type;
      let Path = this.curModel.path + this.curModel.name;   
      let scale = this.curModel.scale;
      let position = this.curModel.position; 

      async function load(myPath,myLoader){
        return new Promise((resolve,reject)=>{
          myLoader.load(myPath,(res)=>{resolve(res)});
        })}
      function addModel(obj,scale,position){
            obj.scale.set(...scale);
            obj.position.set(...position);
            vm.modelObj = obj;
            vm.scene.add(obj);
      }
      if(modelType === 'obj')
        {
        const OBJLoad = new OBJLoader(); //obj加载器
        const MTLLoad = new MTLLoader(); //材质文件加载器,返回MaterialCreator，设为OBJLoader的值
          load(Path+'.mtl',MTLLoad).then(mtl=>{
            OBJLoad.setMaterials(mtl);
            return load(Path+'.obj',OBJLoad);
          }).then(obj=>{
            addModel(obj,scale,position);
          })
        }
      else if(modelType ==='gltf')
        {
            const gltfLoad = new GLTFLoader();
            load(Path + ".gltf",gltfLoad).then(
              gltf=>{
                addModel(gltf.scene,scale,position);
              }
            )
        }
      this.$store.commit("loaded");
    },
    controlModl: function () {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enablePan = false;
      this.controls.maxDistance = 100;
      this.controls.minDistance = 1;
      this.controls.update();
    },

    //更换纹理贴图
    changeMap(e) {      
      let modelType = this.curModel.type;      
      let img =  e.target.id;
      if(!img) return;
      let texture = null;
      let path =   this.curModel.path  + img + ".jpeg";
      async function loadMap(){
        let res = await new THREE.TextureLoader().load(path);
        return res;
      }
      loadMap().then((res)=>{
             texture = res;
            }).then(()=>{
            switch(modelType)
              {
                case 'obj':{
                let mtl = this.modelObj.children[0];
                mtl.material.map = texture; 
                break;
                }
                case 'gltf':{
                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set(1, 1);
                this.modelObj.traverse(function (gltf) {
                  if (gltf.type === "Mesh") {
                    let newM = new THREE.MeshPhongMaterial({
                      color: 0xcccccc,
                      map: texture,
                      normalScale: new THREE.Vector2(1, 1),
                    }); 
                    gltf.material = newM;
                    }
                  });
                
                break;}
               }}).catch((error)=>{console.log(error)} );
    },


    changeModel() {
      if(!this.modelInfo[this.Flag]) return;
      this.$store.commit("loading");
      this.scene.remove(this.modelObj);
      this.modelObj = null;
      this.curModel=this.modelInfo[this.Flag];
      this.loadModel();
    },
  },
  watch: {
    modelFlag(){
      this.Flag = this.modelFlag;
      this.changeModel();
      }
  },
  computed:{

  },
  mounted() {
    const vm = this;
    this.curModel = this.modelInfo[this.Flag];
    if(!this.curModel) return;
    this.init();
    this.loadModel();
    this.render();
  },
  beforeDestroy() {
    cancelAnimationFrame(this.myAnima);//取消动画
    THREE.Cache.clear();
    if(this.renderer)
    {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
      this.renderer.domElement = null;
      this.renderer = null;
    }

  },
};
</script>
<style lang="less">

.box {
  background-image: url("~@/assets/bg1.jpeg");
  height: 621px;
  position: relative;
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

#container {
  //   margin-top:150px;
  position: absolute;
  top: 8rem;
  margin-right: 2.5rem;
  width: 375px;
  height: 400px;
}

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
  }
}
.ctr_pannel {
  width: 100%;
  position: absolute;
  bottom: 5%;
  .texuBtn {
    display: flex;
    justify-content: center;
    img {
      width: 53px;
      border-radius: 50%;
      cursor: pointer;
      margin: 1rem 1rem;
      box-shadow: 0px 0px 15px 0px rgba(54, 50, 50, 0.87);
    }
  }
}
</style>
