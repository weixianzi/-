 import axios from "axios"

 let http = axios.create({
    baseURL:"/api",
    timeout:5000,
    withCredentials:true
 })

 http.interceptors.request.use(config=>{
    return config
 })

 http.interceptors.response.use(config=>{
    return config
 })

 export default http