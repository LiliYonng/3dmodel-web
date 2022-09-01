const mingAry = [
    {
      name: "model1",
      type: "obj",
      texAry: ["color", "specular", "gilt"],
      path: "/model/model1/",
    },
    {
      name: "model2",
      type: "gltf",
      texAry: ["color", "specular", "gilt"],
      path: "/model/model2/",
    }
    ,];
const ModelInfo = [
    {
        id:1001,
        modelAry:mingAry,
    }
];
export default {
    returnData:(config)=>{
        const id =config.body;
        // let arrCopy = JSON.parse(JSON.stringify(ModelInfo.modelAry));
        console.log(ModelInfo[0].modelAry);
        return{
            code:200,
            data:{
                modelAry:[...ModelInfo[0].modelAry],
            }
        }
    }
}