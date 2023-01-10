export default {
    namespaced:true,
    state:{
        list:[]
    },
    getters:{},
    mutations:{
        GETLIST(state,payload){
            state.list = payload
            console.log(payload)
        },
        SUBTRACT(state,payload){
            let target = state.list.find(item=>item.id===payload.id)
            if(target){
                target.inventory--
            }
        },
        ADDPRODUCT(state,payload){
            let target = state.list.find(item=>item.id===payload.id)
            if(target){
                target.inventory++
            }
        }
    },
    actions:{
        async GET_LIST({commit},payload){
            await fetch("/api/data/index.json")
            .then(body=>body.json())
            .then(res=>{
                commit("GETLIST",res.data)
            })
        },
        ADD_PRODUCT({commit},payload){
            commit("cart/ADDPRODUCT",payload,{root:true})
        },
        SUB_TRACT({commit},payload){
            commit("SUBTRACT",payload)
        }
    }
 }