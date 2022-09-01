import axios from './axios'
export const getModel = (params)=>{
    return axios.request({
        url:'model/getModel',
        method:'post',
        data:params,
    })
}
export const getToken = (params)=>{
    return axios.request({
        url:'login/getToken',
        method:'get',
        data:params,
    })
}