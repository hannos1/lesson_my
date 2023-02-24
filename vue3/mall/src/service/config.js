import axios from 'axios'

axios.defaults.baseURL = 'https://www.fastmock.site/mock/995214af813bc47208cf2fcb558907e6/mall'
axios.interceptors.response.use(res => {
    // console.log(res,'//')
    return res.data
})//响应拦截器
export default axios