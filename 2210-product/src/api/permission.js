import http from "@/request";

export let getPermission = ()=>http.get("/permission/getMenuList")

// 获取用户日志

export let getUserinfo = (count) =>http.get("/getloginlog",{
    params:{
        count
    }
})

// 获取学员信息

export let getStuData = (count) => http.get("/students/getstulist",{
    params:{
        count
    }
})

export let addStuData = (data) => http.post("/students/addstu",{...data})