import axios from "./config";


export const getSecond = () => {
    return axios.get('/second')
}