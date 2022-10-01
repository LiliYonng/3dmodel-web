
const modelAry = [      
      {
        groupId:1004,
        name: "model2",
        type: "gltf",
        texAry: ["color", "specular", "gilt"],
        path: "/model/model2/",
        scale:[2,2,2],
        position:[0,-40,0]
      },
      {
        groupId:1004,
        name: "model1",
        type: "obj",
        texAry: ["color", "specular", "gilt"],
        path: "/model/model1/",
        scale:[0.4,0.4,0.4],
        position:[0,5,-8]
      },    
      {
        groupId:1001,
        name: "model3",
        type: "gltf",
        texAry: ["color", "specular", "gilt"],
        path: "/model/model3/",
        scale:[60,60,60],
        position:[0,-10,0]
      },  
      {
        groupId:1001,
        name: "model2",
        type: "gltf",
        texAry: ["color", "specular", "gilt"],
        path: "/model/model2/",
        scale:[2,2,2],
        position:[0,-40,0]
      },
]

export default {
    returnData:({})=>{
        // const id = url.split("=")[1];
        // const obj=ModelInfo.find((item)=>{
        //     return item.id == id;
        // })
        return{
            code:200,
            data:{
               modelAry:[...modelAry],
            }
        }
    }
}