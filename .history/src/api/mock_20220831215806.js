import Mock from 'mockjs'
import tokenApi from './mockData/model'
//Mock.mock('/api/login/getToken', )
Mock.mock(/\/api\/model\/getModel/, 'get',modelApi.returnData)