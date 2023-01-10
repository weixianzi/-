let getList = ()=> fetch("/api/data/index.json").then(body=>body.json())

export default {
    namespaced:true,
    state:{
        list:[]
    },
    mutations:{
        // 获取列表
        GETLIST(state, payload) {
            state.list = payload
        },
        // 点击减少库存
        SUBTRACT(state,payload){
            let target = state.list.find(item=>item.id===payload)
            if(target){
                target.inventory--  
            }
        },
        // 增加库存
        ADDPRO(state,payload){
            let target = state.list.find(item=>item.id===payload)
            if(target){
                target.inventory++
            }
        }
    },
    actions:{
       async GET_LIST({commit}){
            let res = await getList()
            console.log(res)
            commit("GETLIST",res.data)
        },

    }
}