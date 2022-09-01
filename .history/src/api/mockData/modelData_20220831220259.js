 
export default {
    returnData:(config)=>{
        console.log(config);
        return{
            code:200,
            data:{
                a:'aaa',
            }
        }
    }
}