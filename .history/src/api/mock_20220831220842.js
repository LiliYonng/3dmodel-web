import Mock from 'mockjs'
import modelApi from './mockData/modelData.js'
//Mock.mock('/api/login/getToken', )
Mock.mock(/\/api\/model\/getModel/, 'post',modelApi.returnData)