import stroge from "@/utils/stroge";


export default({
    namespaced:true,
    state: {
        userInfo:stroge.get("lf-userInfo")
    },
    getters: {},
    mutations: {
        GET_USER_INFO(state,payload){
            state.userInfo = payload
        }
    },
    actions: {}
  });