import Cookies from "js-cookie";
export default {
    state:{
        modelAry:[]
    },
    mutations:{
        setModelAry(state,val){
            if (val.length!=0)
            Cookies.set('modelAry',JSON.stringify(val));
            console.log(val);
            state.modelAry = val;
            
        },
        getModelAry(state){
            const data = Cookies.get('modelAry')
            if(state.modelAry.length ===0 && data)
            state.modelAry =  JSON.parse(data);
        },
        clearModelAry(state){
            state.modelAry=[];
            Cookies.remove("modelAry");
        }
    }
}