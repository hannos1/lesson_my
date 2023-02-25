import axios from './config.js' // 引入axios


export function getDetail(id) {
    return axios.get(`/goods/detail/${id}`)  // 返回promise实例
}