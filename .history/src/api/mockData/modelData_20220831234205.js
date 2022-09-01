const ModelInfo = [];
modelAry: [
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
    },
  ],
export default {
    returnData:(config)=>{
        const id =config.body;
        return{
            code:200,
            data:{
                a:'aaa',
            }
        }
    }
}