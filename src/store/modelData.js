import Cookies from "js-cookie";
export default {
    state:{
        modelAry:[]
    },
    mutations:{
        setModelAry(state,val){
            if (Object.keys(val).length)
            Cookies.set('modelAry',JSON.stringify(val));
            state.modelAry = val;
            console.log(state.modelAry);
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