import Vue from "vue";
import router from "@/route-guard/index";
import store from "./store";
import ElementUI from 'element-ui';
import qfSubMenu from "qf-sub-menu"
import App from "./App.vue";
import "@/global/index.css"
import "@/global/container.css"
import 'element-ui/lib/theme-chalk/index.css';
import "./icon/font_3863297_v27vj7w0huc/iconfont.css"
import "./icon/font_3863297_v27vj7w0huc/iconfont"


Vue.use(ElementUI);
Vue.use(qfSubMenu)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
