 import axios from "axios"
 import { MessageBox,Message,Loading } from 'element-ui';
 import stroge from "@/utils/stroge";

 let http = axios.create({
    baseURL:"/api",
    timeout:5000,
    withCredentials:true
 })

 let shadow = null

//  全局请求拦截，对于请求进行处理
 http.interceptors.request.use(config=>{
   let token = stroge.get("lf-token")
   if(config.url.indexOf("login")!==-1||config.url.indexOf("wechatLogin")!==-1){
      shadow = Loading.service(
         {
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          }
      )
   }
   config.headers["authorization"] = token
    return config
 })


//  全局响应拦截，统一对于错误进行拦截。
 http.interceptors.response.use(config=>{
   if(shadow){
      shadow.close()
      shadow = null
   }
   let {state,msg,code} = config.data
   if(!state&&config.config.url!=="/order/query_order_status"){
      MessageBox.alert(msg)
   }
   if(code==="10022"||code==="1004"){
      Message.error("请重新登陆")
      stroge.rm("lf-token")
      location.reload()
   }
    return config
 })

 export default http