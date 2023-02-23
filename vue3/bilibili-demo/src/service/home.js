import axios from "./config.js"

export const getSwiperList = () => {
    return axios.get('/swiperList')
}

export const getVideosList = () => {
    return axios.get('/videosList')
}