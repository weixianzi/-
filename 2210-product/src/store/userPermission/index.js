import selfRouter from "@/router/selfRouter"
import getUserControl from "@/router/recurcation"
import * as api from "@/api/permission"
import router from "@/route-guard/index"
import dynamicRoute from "@/router/dynamic"
export default {
    namespaced: true,
    state: {
        userList: []
    },
    getters: {},
    mutations: {
        GET_USER_LIST(state, payload) {
            state.userList = [...payload]
            dynamicRoute.children = [...payload]
            router.addRoute(dynamicRoute)
        }
    },
    actions: {
        async GETUSERLIST({ commit }) {
            return await api.getPermission()
                .then(res => {
                    let systemPermission = res.data.menuList
                    let target = selfRouter.find(item => item.path === "/home").children
                    let userMenu = getUserControl(systemPermission, target)
                    commit("GET_USER_LIST", userMenu)
                })
        }
    },
    modules: {}
}