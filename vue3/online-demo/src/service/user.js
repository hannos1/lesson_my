import axios from "./config";

export const doLogin = (user) => {
   return axios.post('/login',user)
}