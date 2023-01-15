 import http from "@/request/index"

//  获取验证码
 export let getVcode = () =>http.get("/users/getCaptcha?v=next")

//  常规登入

 export let commonLog = (username,password) => http.post("/users/login",{
    username,
    password
 })

//  校验验证码

 export let verifyVcode = (captcha) => http.get("/users/verifyCaptcha",{
   params:{
      captcha
   }
 })