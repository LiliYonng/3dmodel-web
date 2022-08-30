import * as THREE from "three";

import { OrbitControls } from "./js/OrbitControls.js";
import { GLTFLoader } from "./js/GLTFLoader.js";
import { OBJLoader } from "./js/OBJLoader.js";
import { MTLLoader } from "./js/MTLLoader.js";
import { GUI } from "./js/lil-gui.module.min.js";
let camera, scene, renderer;
let model;
let controls;
let modelName;
let modelType;
let Info;
let flag = true;
let modelAry = [
  {
    modelName: "model1",
    type: "obj",
    texAry: ["color", "specular", "gilt"],
    modelInfor:
      "满清瓷盐瓶 六面盐瓶呈台座状，上表面略凹，上面绘有彩绘的器皿，并用帆船描绘了部分海岸的风景。在盐瓶的上部加厚边缘，有花和符号的田野。在六面墙上，可以看到交替的花卉图案和带有鲜花和各种物品的花瓶。",
  },
  {
    modelName: "model2",
    type: "gltf",
    texAry: ["black"],
    modelInfor:
      "青花瓷 又称白地青花瓷，常简称青花，是中国瓷器的主流品种之一，属釉下彩瓷。青花瓷是用含氧化钴的钴矿为原料，在陶瓷坯体上描绘纹饰，再罩上一层透明釉，经高温还原焰一次烧成。钴料烧成后呈蓝色，具有着色力强、发色鲜艳、烧成率高、呈色稳定的特点。原始青花瓷于唐宋已见端倪，成熟的青花瓷则出现在元代景德镇的湖田窑。明代青花成为瓷器的主流。明宣德时发展到了顶峰。",
  },
  {
    modelName: "model3",
    type: "gltf",
    texAry: ["black", "blue", "green"],
    modelInfor:
      "宋代黑釉瓷  早期烧制黑釉最成功的首推东晋时期浙江德清窑，所烧黑釉釉面滋润、光亮，色黑如漆，可与漆器媲美。唐代黑釉较为盛行，宋代则是黑釉的高峰时期。",
  },
];
let texInfo = [
  { texName: "color", info: "豆青釉青花 清新明快，质朴大方" },
  { texName: "specular", info: "水墨白瓷 书法绘画相融汇，清秀、细致、风雅" },
  { texName: "gilt", info: "黄地青花 釉汁厚润，一如凝脂，胎骨坚致细腻" },
  { texName: "blue", info: "汝窑釉含蓄莹润、积堆如凝脂" },
  { texName: "black", info: "黑釉釉面滋润、光亮，色黑如漆，可与漆器媲美" },
  { texName: "green", info: "青瓷翠绿莹亮如梅子青青" },
];
let path = "./model/";
init();
render();

function init() {
  const container = document.getElementById("container");
  //     const container = document.createElement( 'div' );
  document.body.appendChild(container);
  scene = new THREE.Scene();
  //相机
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
  );
  //camera = new THREE.PerspectiveCamera(75, 700 / 800, 0.01, 1000);

  camera.position.set(10, 10, 50);

  //渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0x404040);
  // renderer.setSize(700,800);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  //光源
  let light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  // let directionalLight = new THREE.DirectionalLight(0xcc551f, 2);
  //  let directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  //   directionalLight.position.set(20, 50, 80);
  //   scene.add(directionalLight);

  // scene.add(new THREE.GridHelper(20, 20));
  // scene.add(new THREE.AxesHelper(20));

  const OBJLoad = new OBJLoader(); //obj加载器
  const MTLLoad = new MTLLoader(); //材质文件加载器
  modelName = "model1";
  modelType = "obj";
  MTLLoad.load("./model/model1/model1.mtl", function (materials) {
    //obj的模型会和MaterialCreator包含的材质对应起来
    OBJLoad.setMaterials(materials);
    OBJLoad.load("./model/model1/model1.obj", function (obj) {
      model = obj;
      scene.add(obj); //返回的组对象插入场景中
      obj.scale.set(0.3, 0.3, 0.3);
      obj.position.set(0, -10, 0);
    });
  });
  //        scene.background=new THREE.Color(0xffffff);

  var textureLoader = new THREE.TextureLoader();
  // 加载背景图片
  var texture = textureLoader.load("bg.png");
  // 纹理对象Texture赋值给场景对象的背景属性.background
  scene.background = texture;

  //手势控制
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.maxDistance = 100;
  controls.minDistance = 1;
  controls.update();
    //render();

}

//模型切换函数
function changeModel(index) {
  console.log(index);

  let type = modelAry[index].type;
  let mypath = path + modelName + "/" + modelName;
  scene.remove(model);
  model = null;
  if (type == "obj") {
    const OBJLoad = new OBJLoader(); //obj加载器
    const MTLLoad = new MTLLoader(); //材质文件加载器

    MTLLoad.load(mypath + ".mtl", function (materials) {
      //obj的模型会和MaterialCreator包含的材质对应起来
      OBJLoad.setMaterials(materials);
      OBJLoad.load(mypath + ".obj", function (obj) {
        model = obj;
        scene.add(obj); //返回的组对象插入场景中
        //obj.children[0].scale.set(5, 5, 5);//网格模型缩放
        obj.scale.set(0.3, 0.3, 0.3);
        obj.position.set(0, 0, 0);
      });
    });
  } else if (type == "gltf") {
    const loader = new GLTFLoader(); //'model/p/'
    loader.load(mypath + ".gltf", function (gltf) {
      model = gltf.scene;
      console.log(gltf.scene.children[0].material);
      if (modelName == "model3") {
        model.scale.set(40, 40, 40);
        model.position.set(0, -15, 0);
      } else {
        model.scale.set(1.5, 1.5, 1.5);
        model.position.set(0, -40, 0);
      }
      scene.add(model);
    });
  } else console.log("error");
}
function changeMap(img) {
  // 更换纹理贴图
  if (model.children[0]) {
    var texture = new THREE.TextureLoader().load(
      path + modelName + "/" + img + ".jpg"
    );
    if (modelType == "obj") {
      let mtl = model.children[0];
      mtl.material.map = texture;
      console.log(mtl.material);
    } else if (modelType == "gltf") {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1);
      model.traverse(function (gltf) {
        if (gltf.type === "Mesh") {
          gltf.material = new THREE.MeshPhongMaterial({
            color: 0xcccccc,
            map: texture,
            normalScale: new THREE.Vector2(1, 1),
          });
        }
      });
    }
  }
  let info;
  texInfo.forEach((myTex, index) => {
    if (myTex.texName == img) info = texInfo[index].info;
  });
  document.getElementById("texInfo").innerText = info;
}
//html贴图选项切换
function changeIcon(index) {
  let mypath = path + modelName + "/";
  let div = document.getElementById("icon");
  div.innerHTML = "";
  let texAry = modelAry[index].texAry;
  if (texAry) {
    for (let i = 0; i < texAry.length; i++) {
      const b = document.createElement("img");
      b.setAttribute("id", texAry[i]);
      b.setAttribute("src", mypath + texAry[i] + "_icon.jpg");
      div.appendChild(b);
    }
  }
}
//背景图切换
function changeBg(img) {
  var textureLoader = new THREE.TextureLoader();
  // 加载背景图片
  let mypath;
  if (img) mypath = path + modelName + "/" + img + "_bg.jpg";
  else mypath = "bg.png";

  var texture = textureLoader.load(mypath);
  // 纹理对象Texture赋值给场景对象的背景属性.background
  scene.background = texture;
}

//改变瓷器介绍
function showInfo() {
  let index;
  const div = document.getElementById("content");
  modelAry.forEach((mymodel, myindex) => {
    if (mymodel.modelName == modelName) {
      index = myindex;
    }
  });
  if (flag) {
    div.innerText = modelAry[index].modelInfor;
    flag = false;
  } else {
    div.innerText = "";
    flag = true;
  }
}

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  if (model) {
    model.rotation.y += 0.01; //每次绕y轴旋转0.01弧度
  }
  controls.update();
}
