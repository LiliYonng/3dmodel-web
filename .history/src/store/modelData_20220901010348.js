import Cookies from "js-cookie";
export default {
    state:{
        modelAry:[]
    },
    mutations:{
        setModelAry(state,val){
            Cookies.set('modelAry',JSON.stringify(val));
            state.modelAry = val;
        },
        getModelAry(state){
            state.modelAry = state.modelAry || Cookies.get('modelAry');
        },
        clearModelAry(state){
            state.modelAry=[];
            Cookies.remove("modelAry");
        }
    }
}