<template lang="">
        <div class="box">
            <div id='container'></div>
            <div class='texuBtn' @click="changeMap">
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
    name:'model',
    props:["modelInfo"],
    data(){
        return {
        // myModel: {
        // modelName: "model1",
        // type: "obj",
        // texAry: ["color", "specular", "gilt"],
        // path:"/model/"},
        myModelInfo:this.modelInfo,
        myModel:null
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
            const container = document.getElementById("container");
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
            let thePath = this.myModelInfo.path+this.myModelInfo.modelName
            MTLLoad.load(thePath+'.mtl', function (materials) {
                //obj的模型会和MaterialCreator包含的材质对应起来
                OBJLoad.setMaterials(materials);
                OBJLoad.load(thePath+".obj", function (obj) {
                this.model = obj;
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
            if (this.model) {
                this.model.rotation.y += 0.01; //每次绕y轴旋转0.01弧度
            }
            controls.update();
            } 
        render();
        },
        //铁图更换
        changeMap(img){
            // 更换纹理贴图
            if (this.model.children[0]) {
                var texture = new THREE.TextureLoader().load(
                path + modelName + "/" + img + ".jpg"
                );
                if (modelType == "obj") {
                let mtl = this.model.children[0];
                mtl.material.map = texture;
                console.log(mtl.material);
                } else if (modelType == "gltf") {
                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set(1, 1);
                this.model.traverse(function (gltf) {
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
        },
    },
    
    mounted(){
         this.init()
    }

}

</script>
<style lang="less">

    #container{
        margin:2.5rem 2.5rem;
        width:300px;
        height:475px;
    }
</style>