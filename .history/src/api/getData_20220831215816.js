import axios from './axios'
export const getModel = (params)=>{
    return axios.request({
        url:'model/getModel',
        method:'get',
        data:params,
    })
}