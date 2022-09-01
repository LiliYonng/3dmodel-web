import Cookies from "js-cookie";
export default {
    state:{
        modelAry:[]
    },
    mutations:{
        setModelAry(state,val){
            state.modelAry = val;
        },
    }
}