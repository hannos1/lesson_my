import axios from "axios";


// 默认前缀  可以方便切换到线上接口
axios.defaults.baseURL = 'http://localhost:3000'


// 响应拦截器
axios.interceptors.response.use(data => {
    return data.data
})

export default axios