import selfRouter from "./selfRouter"

let homeRoute = selfRouter.find(item => item.path === '/home')
let payRoute = homeRoute.children.find(item => item.path === 'pay')
let payChild = payRoute.children
let dynamicRoute = {
    path:"/",
    component:()=>import(/* webpackChunkName:"home" */"@/layout/container"),
    children:[payRoute,...payChild]
}

export default dynamicRoute