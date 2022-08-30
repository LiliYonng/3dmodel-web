<template lang="">
    <div id='container'>
        
    </div>
</template>


<script>
import * as THREE from "three";

import { OrbitControls } from "../js/js/OrbitControls.js";
import { GLTFLoader } from "../js/js/GLTFLoader.js";
import { OBJLoader } from "../js/js/OBJLoader.js";
import { MTLLoader } from "../js/js/MTLLoader.js";

export default {
    data(){
        

        modelAry : [
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
        ],
        texInfo: [
        { texName: "color", info: "豆青釉青花 清新明快，质朴大方" },
        { texName: "specular", info: "水墨白瓷 书法绘画相融汇，清秀、细致、风雅" },
        { texName: "gilt", info: "黄地青花 釉汁厚润，一如凝脂，胎骨坚致细腻" },
        { texName: "blue", info: "汝窑釉含蓄莹润、积堆如凝脂" },
        { texName: "black", info: "黑釉釉面滋润、光亮，色黑如漆，可与漆器媲美" },
        { texName: "green", info: "青瓷翠绿莹亮如梅子青青" },
        ],
        path:"./model/";

    },
    methods:{
    init() {
        let camera, scene, renderer;
            let model;
            let controls;
            let modelName;
            let modelType;
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

            const OBJLoad = new OBJLoader(); //obj加载器
            const MTLLoad = new MTLLoader(); //材质文件加载器
            modelName = "model1";
            modelType = "obj";
            MTLLoad.load("../js/model/model1/model1.mtl", function (materials) {
                //obj的模型会和MaterialCreator包含的材质对应起来
                OBJLoad.setMaterials(materials);
                OBJLoad.load("../js/model/model1/model1.obj", function (obj) {
                model = obj;
                scene.add(obj); //返回的组对象插入场景中
                obj.scale.set(0.3, 0.3, 0.3);
                obj.position.set(0, -10, 0);
                });
            });

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

            this.render();
            }
    },
    render(){
          requestAnimationFrame(render);
            renderer.render(scene, camera);
            if (model) {
                model.rotation.y += 0.01; //每次绕y轴旋转0.01弧度
            }
            controls.update();
    }
}
</script>
<style lang="">
    
</style>