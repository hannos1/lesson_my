import axios from './config.js' // axios配置文件

export function getHomeData(){
    return axios.get('/index-infos')
}