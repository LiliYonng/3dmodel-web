<template lang="">
        <div class="box">
        <div id='container'></div>
        <div class='texuBtn'></div>
        </div>
</template>


<script>
import * as THREE from "three";

import { OrbitControls } from "../js/js/OrbitControls.js";
import { GLTFLoader } from "../js/js/GLTFLoader.js";
import { OBJLoader } from "../js/js/OBJLoader.js";
import { MTLLoader } from "../js/js/MTLLoader.js";

export default {
    name:'model',
    data(){
        return {
        }
    },
    methods: {
     init() {
            let camera;
            let model;
            let scene;
            let renderer;
            let controls;
            let modelName;
            let modelType;
            const container = document.getElementById("canva");
            //     const container = document.createElement( 'div' );
            // document.body.appendChild(container);
            scene = new THREE.Scene();
            //相机
            // camera = new THREE.PerspectiveCamera(
            //     75,
            //     window.innerWidth / window.innerHeight,
            //     0.01,
            //     1000
            // );
            camera = new THREE.PerspectiveCamera(75, 300 / 475, 0.01, 1000);

            camera.position.set(10, 10, 50);

            //渲染器
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setClearColor(0x404040);
             renderer.setSize(300,475);
            //renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(renderer.domElement);

            //光源
            let light = new THREE.AmbientLight(0xffffff, 1);
            scene.add(light);

            const OBJLoad = new OBJLoader(); //obj加载器
            const MTLLoad = new MTLLoader(); //材质文件加载器
            modelName = "model1";
            modelType = "obj";
            MTLLoad.load("/model/model1.mtl", function (materials) {
                //obj的模型会和MaterialCreator包含的材质对应起来
                OBJLoad.setMaterials(materials);
                OBJLoad.load("/model/model1.obj", function (obj) {
                model = obj;
                scene.add(obj); //返回的组对象插入场景中
                obj.scale.set(0.3, 0.3, 0.3);
                obj.position.set(0, -10, 0);
                });
            });
            var textureLoader = new THREE.TextureLoader();
            // 加载背景图片
            var texture = textureLoader.load("/model/bg.png");
            // 纹理对象Texture赋值给场景对象的背景属性.background
            scene.background = texture;

            //手势控制
            controls = new OrbitControls(camera, renderer.domElement);
            controls.enablePan = false;
            controls.maxDistance = 100;
            controls.minDistance = 1;
            controls.update();
                //render();       
        function render(){
          requestAnimationFrame(render);
            renderer.render(scene, camera);
            if (model) {
                model.rotation.y += 0.01; //每次绕y轴旋转0.01弧度
            }
            controls.update();
        } 
        render();
        },

    },
    mounted(){
        // this.init()
    }
    }

</script>
<style lang="less">

    #container{
        margin:2.5rem 2.5rem;
        width:300px;
        height:475px;
        background-color:red;
    }
</style>