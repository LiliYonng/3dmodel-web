<template lang="">
    <div id='container'>
        
    </div>
</template>
<script>
export default {
    methods:{
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

  render();
  }
    }
}
</script>
<style lang="">
    
</style>