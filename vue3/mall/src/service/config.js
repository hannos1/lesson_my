import axios from 'axios'

// axios.defaults.baseURL = 'https://www.fastmock.site/mock/995214af813bc47208cf2fcb558907e6/mall'
axios.defaults.baseURL = '//backend-api-01.newbee.ltd/api/v1'
// 请求头  post  带上  Content-Type
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.interceptors.response.use(res => {
    // console.log(res,'//')
    return res.data
})//响应拦截器
export default axios