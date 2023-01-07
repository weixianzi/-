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
        path:"/detail",
        name:"detail",
        props:true,
        component:()=>import(/* webpackChunkName:"detail" */ "@/pages/detail")
      }
    ]

 let router = new VueRouter({
    routes
 })

 export default router