let files = require.context("@/pages", true, /\.vue$/)

let autoRoute = files.keys().map(path => {
    let regExp = /(\/index\.vue|\.vue)$/
    let projectComponent = files(path).default
    let {meta,name,redirect} = projectComponent
    path = path.substring(1).replace(regExp, "")
    return {
        path: path ? path : "/home",
        component: () => import("@/pages" + path),
        meta:meta??{},
        name:name?? path.substring(1).split("/").join("-"),
        redirect:redirect??null
    }
})
function selfRoute(autoRoute) {
    autoRoute = [...autoRoute]
    let routeTree = []
    autoRoute.forEach(item => {
        let routeArr = item.path.substring(1).split("/")
        item.id = routeArr.join("-")
        if (routeArr.length > 1) {
            let routeArr2 = [...routeArr]
            routeArr2.pop()
            let pid = routeArr2.join("-")
            item.pid = pid
        }
    })

    // 转换树形数据
    autoRoute.forEach(item=>{
        item.path = item.path.toLowerCase()
        if(item.path==="/page404"){
            item.path = "*"
        }
        let target = autoRoute.find(v=>item.pid === v.id)
        if(target){
            if(!target.children){
                target.children = []
            }
            item.path = item.path.split("/").pop()
            target.children.push(item)
        }else{
            routeTree.push(item)
        }
    })
    return routeTree
}

let res = selfRoute(autoRoute)

export default [...res]