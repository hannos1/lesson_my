import axios from './config'
// 登录 注册
export function login(params){
   return axios.post('/user/login',params) 
}

export function register(params){
    return axios.post('/user/register',params)
}