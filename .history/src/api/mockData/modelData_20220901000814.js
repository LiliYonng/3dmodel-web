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
        modelAry:songAry,
    },
    {
        id:1003,
        modelAry:yuanAry,
    },
    {
        id:1004,
        modelAry:mingAry,
    },
    {
        id:1005,
        modelAry:qingAry,
    }
];
export default {
    returnData:(config)=>{
        const id =config.body;
        // let arrCopy = JSON.parse(JSON.stringify(ModelInfo.modelAry));
        const obj=ModelInfo.filter((item)=>{
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