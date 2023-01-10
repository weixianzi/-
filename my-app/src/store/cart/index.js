 let num = 0
 
 export default {
    namespaced:true,
    state:{
      proArr:[]
    },
    getters:{
      total(state){
         return state.proArr.reduce((total,item)=>{
            return total += item.price * item.count
         },0)
      }
    },
    mutations:{
      ADDPRODUCT(state,payload){
         let target = state.proArr.find(item=>item.id===payload.id)
         if(!target){
            let obj = {
               title:payload.title,
               id:payload.id,
               price:payload.price,
               count:1
            }
            state.proArr.push(obj)
         }else{
            target.count++
         }
      },
      SUBCOUNT(state,payload){
         console.log(payload)
         let target = state.proArr.find(item=>item.id===payload)
         if(target){
            target.count--
         }
      }  
    },
    actions:{
      ADD_PRODUCT({commit},payload){
         commit("ADDPRODUCT",payload)
         commit("product/SUBTRACT",payload.id,{root:true})
      },
      SUB_TRACT({commit},payload){
         commit("SUBCOUNT",payload.id)
         commit("product/ADDPRO",payload.id,{root:true})
      }
    },

 }