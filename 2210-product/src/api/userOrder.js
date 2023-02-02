import http from "@/request/index"

export let getOrder =()=> http.post("/order/get_order")

export let getOrderState = (order_id) => http.get("/order/query_order_status",{
    params:{
        order_id
    }
})

export let delOrder = (order_id) =>http.get("/order/del_order",{
    params:{
        order_id
    }
})

export let vipProduct = () =>http.get("/product/get_product",{
    params:{
        category_id:"20210827165510715"
    }
})

export let getProduct = (product_id,category_id) =>http.get("/product/get_product",{
    params:{
        product_id,
        category_id
    }
})

export let postOrder = (product_id,quantity) =>http.post("/order/pre_order",{
    product_id,
    quantity
})

export let getTargetPro = (order_id) =>http.post("/pay/payment",{
        order_id
})

export let getDetail = (order_id) => http.post("/order/get_order",{
        order_id
})