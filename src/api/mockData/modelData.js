const mingAry = [    
    {
      name: "model2",
      type: "gltf",
      texAry: ["color", "specular", "gilt"],
      path: "/model/model2/",
    },
    {
      name: "model1",
      type: "obj",
      texAry: ["color", "specular", "gilt"],
      path: "/model/model1/",
    }
    ];
    const tangAry=[    {
        name: "model3",
        type: "gltf",
        texAry: ["color", "specular", "gilt"],
        path: "/model/model3/",
      },
      {
        name: "model2",
        type: "gltf",
        texAry: ["color", "specular", "gilt"],
        path: "/model/model2/",
      }];
    const songAry=[];
    const yuanAry =[];
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
    returnData:({url})=>{
        const id = url.split("=")[1];
        const obj=ModelInfo.find((item)=>{
            return item.id == id;
        })
        return{
            code:200,
            data:{
               modelAry:[...obj.modelAry],
            }
        }
    }
}