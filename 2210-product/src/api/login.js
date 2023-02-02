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

//  获取二维码

export let getQr = (sid) => http.get("/users/getQrcode",{
   params:{
      sid
   }
})

// 微信登陆

 export let wechatLogin = (wechatCode) =>http.get("/users/wechatLogin",{
   params:{
      wechatCode
   }
 })

//  获取验证码

export let getCode = (phoneNumber) => http.post("/sms/send",{
   phoneNumber
})

// 手机验证码登入

export let phoneLogin = (code) =>http.post("/users/login?type=sms",{
   code
})

