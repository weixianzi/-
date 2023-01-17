import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
      path:"/",
      component:()=>import(/* webpackChunkName:"login" */ "@/components/login")
    },
    {
      path:"/home",
      component:()=>import(/* webpackChunkName:"home" */ "@/components/home")
    }
];

const router = new VueRouter({
  routes,
});

export default router;
