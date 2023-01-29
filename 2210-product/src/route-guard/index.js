import router from "@/router"
import storage from "@/utils/stroge"
import store from "@/store"
router.beforeEach((to,from,next)=>{
    let token = storage.get("lf-token")
    if(token){
        if(store.state.userPermission.userList.length===0){
                store.dispatch("userPermission/GETUSERLIST")
                .then(()=>{
                    next({path:to.path,replace:true})
                })
        }else{
            next()
        }
    }else{
        if(to.path==="/login"){
            next()
        }else{
            next({path:"/login"})
        }
    }
    next()
})

export default router