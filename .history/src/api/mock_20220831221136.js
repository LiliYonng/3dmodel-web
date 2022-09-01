import Mock from 'mockjs'
import modelApi from './mockData/modelData.js'
Mock.mock('/api/login/getModel',modelApi.returnData )
//Mock.mock(/\/api\/model\/getModel/, 'post',modelApi.returnData)