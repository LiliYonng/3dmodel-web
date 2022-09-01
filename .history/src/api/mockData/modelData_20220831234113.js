 const ModelInfo = []
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