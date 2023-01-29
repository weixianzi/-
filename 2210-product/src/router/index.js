import Vue from "vue";
import VueRouter from "vue-router";
import selfRouter from "./selfRouter";
import staticRoute from "./staticRoute"
import dynamicRoute from "./dynamic";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   component: () => import(/* webpackChunkName:"home" */ "@/pages/home"),
  //   children:[
  //     {
  //       path:"welcome",
  //       component:()=>import(/*webpackChunkName:"welcome"*/ "@/pages/home/welcome")
  //     }
  //   ]
  // },
  // {
  //   path: "/login",
  //   component: () => import(/* webpackChunkName:"login" */ "@/pages/login")
  // },
  // ...selfRouter
  ...staticRoute,
  dynamicRoute
];

const router = new VueRouter({
  routes,
});

export default router;
