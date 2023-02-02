<template>
    <div>
        <el-table :data="productData" style="width: 100%">
            <el-table-column prop="date" label="充值产品">
                <template v-slot="{ row }">
                    <img class="proimg" :src="row.imageUrl" alt="">
                    <h1>{{ row.description }}</h1>
                </template>
            </el-table-column>
            <el-table-column prop="price" label="单价">
            </el-table-column>
            <el-table-column prop="address" label="数量">
                <template v-slot="{ row }">
                    <el-input-number v-model="quantity" :min="1" :max="10000" label="描述文字"></el-input-number>
                </template>
            </el-table-column>
            <el-table-column prop="address" label="小计">
                <template>
                    <h1>{{ total }}</h1>
                </template>
            </el-table-column>
        </el-table>
        <el-button @click="postOrder" type="success">提交订单</el-button>
        </div>
</template>

<script>
import * as api from "@/api/userOrder"
export default {
    data() {
        return {
            quantity: 1,
            productData: []
        }
    },
    mounted() {
        let { product_id, category_id } = this.$route.query
        api.getProduct(product_id, category_id)
            .then(res => {
                this.productData = res.data.data
            })
    },
    computed: {
        total() {
            return this.quantity * this.productData[0]?.price
        }
    },  
        methods:{
           async postOrder(){
                await api.postOrder(this.$route.query.product_id,this.quantity)
                .then(res=>{
                    if(res.data.state){
                        let {order_id} = res.data
                        this.   $router.push({path:"/pay/paysuccess",query:{order_id}})
                    }
                })
            }
        }
}
</script>

<style lang="less" scoped>
.proimg {
    width: 60px;
}
.el-button{
    position: absolute;
    left: 1570px;
}
</style>