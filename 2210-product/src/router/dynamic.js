import selfRouter from "./selfRouter";

let dynamicRoute = {
    path:"/",
    component:()=>import(/* webpackChunkName:"home" */"@/layout/container"),
    children:[]
}

export default dynamicRoute