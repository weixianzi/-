import selfRouter from "@/router/selfRouter";

let page404Route = selfRouter.find(item=>item.path === "*")

let loginRoute = selfRouter.find(item=>item.path==="/login")

export default [page404Route,loginRoute]