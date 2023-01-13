import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./global/index.css"
import "./icon/font_3863297_v27vj7w0huc/iconfont.css"
import "./icon/font_3863297_v27vj7w0huc/iconfont"

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
