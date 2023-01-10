 export default {
    namespaced:true,
    state:{
        proArr:[]
    },
    getters:{
        total(state){
            return (state.proArr.reduce((total,item)=>{
                return total += item.price * item.count
            },0))
        }
    },
    mutations:{
        // 添加到购物车
        ADDPRODUCT(state,payload){
            let target = state.proArr.find(item=>item.id===payload.id)
            if(target){
                target.count++
            }else{
                let obj = {
                    title : payload.title,
                    price : payload.price,
                    id : payload.id,
                    count : 1
                }
                state.proArr.push(obj)
            }
        },
        SALES(state,payload){
            let target = state.proArr.find(item=>item.id===payload.id)
            let res = state.proArr.filter(item=>item.id!==payload.id)
            console.log(res)
            if(target){
                target.count--
                if(target.count<=0){
                  state.proArr = state.proArr.filter(item=>item.id!==payload.id)
                }
            }
        }
    },
    actions:{
        SALES_PRO({commit},payload){
            commit("SALES",payload)
            commit("market/ADDPRODUCT",payload,{root:true})
        }
    }
 }