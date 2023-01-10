import Vue from "vue"
import vuex from "vuex"
import cart from "./cart"
import market from "./market"
import createPersistedState from "vuex-persistedstate";

Vue.use(vuex)

let store = new vuex.Store({
    state: {

    },
    getters: {},
    mutations: {
    },
    actions: {

    },
    modules: {
        cart,
        market
    },
})


export default store
