import Vue from "vue"
import vuex from "vuex"
import cart from "./cart"
import product from "./product"
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
        product
    },
        plugins:[
            createPersistedState({
                storage:window.sessionStorage,
                key:"lf-list",
                paths:["product.list"]
            })
        ]
})


export default store
