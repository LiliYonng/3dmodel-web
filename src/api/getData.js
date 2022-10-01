import axios from './axios'
export const getModel = ()=>{
    return axios.request({
        url:'model/getModel',
        method:'get',
    })
}
