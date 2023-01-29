import Vue from "vue";
import Vuex from "vuex";
import userPermission from "./userPermission";
import users from "./users"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    userPermission,
    users
  }
});
