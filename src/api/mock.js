import Mock from 'mockjs'
import modelApi from './mockData/modelData.js'
// Mock.mock('/api/model/getModel',modelApi.returnData )
Mock.mock(/\/api\/model\/getModel/, 'get',modelApi.returnData)
// Mock.mock(/\/api\/login\/getToken/, 'get',modelApi.returnData)