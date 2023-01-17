 // 封装的本地存储数据的方法

 let set = (key, value) => {
    if (key && value) {
        try {
            let json = JSON.stringify(value)
            localStorage.setItem(key,json)
        } catch (e) {
            console.log(e)
        }
    } else {
        console.log("不对啊，搞错了")
    }
}

let get = (key) => {
    let res = localStorage.getItem(key)
    try {
        let result = JSON.parse(res)
        return result
    } catch {
        return ""
    }
}
 
export default {
    set,
    get
}
