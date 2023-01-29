import http from "@/request";

export let getPermission = ()=>http.get("/permission/getMenuList")