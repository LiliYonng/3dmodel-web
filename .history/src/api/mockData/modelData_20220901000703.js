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
    const tangAry=[];
    const songAry=[];
    const yuanAry =[{a:1}];
    const qingAry =[];
const ModelInfo = [
    {
        id:1001,
        modelAry:tangAry,
    },
    {
        id:1002,
        model:songAry,
    },
    {
        id:1003,
        model:yuanAry,
    },
    {
        id:1004,
        model:mingAry,
    },
    {
        id:1005,
        model:qingAry,
    }
];
export default {
    returnData:(config)=>{
        const id =config.body;
        // let arrCopy = JSON.parse(JSON.stringify(ModelInfo.modelAry));
        const index=ModelInfo.filter((item)=>{
            return item.id ===id;
        })
        console.log(index);
        return{
            code:200,
            data:{
                modelAry:[...ModelInfo[index].modelAry],
            }
        }
    }
}