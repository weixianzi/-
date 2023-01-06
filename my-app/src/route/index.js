 import VueRouter from "vue-router"
 import Vue from "vue"

 Vue.use(VueRouter)

    let routes = [
        {
            path:"/list",
            name:"list",
            component:()=>import(/* webpackChunkName:"list" */ "@/pages/list")
        },
        {
            path:"/details/:id",
            name:"details",
            props:true,
            component:()=>import(/* webpackChunkName:"details" */ "@/pages/details")
        }
    ]

 let router = new VueRouter({
    routes
 })

 export default router