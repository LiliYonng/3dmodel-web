import axios from './axios'
export const getModel = (params)=>{
    return axios.request({
        url:'login/getToken',
        method:'post',
        data:params,
    })
}