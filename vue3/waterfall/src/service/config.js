import axios from 'axios'
axios.interceptors.response.use((data) => {
    return data.data
})

export default axios