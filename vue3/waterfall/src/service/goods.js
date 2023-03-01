import axios from "./config";

export const getGoods = () => {
    return axios.get('/goods')
}