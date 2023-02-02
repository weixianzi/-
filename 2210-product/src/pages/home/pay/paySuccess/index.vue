<template>
    <div class="father">
        <div>
            <img :src="imgSrc" alt="">
            <span>随便怎么支付</span>
        </div>
        <el-descriptions title="订单信息">
            <el-descriptions-item label="订单号">{{ payList2.order_id }}</el-descriptions-item>
            <el-descriptions-item label="创建时间">{{ payList.create_time }}</el-descriptions-item>
            <el-descriptions-item label="产品名称">{{ payList2.productName }}</el-descriptions-item>
            <el-descriptions-item label="商品描述">{{ payList2.description }}</el-descriptions-item>
            <el-descriptions-item label="购买数量">{{ payList2.quantity }}</el-descriptions-item>
            <el-descriptions-item label="购买用户">{{ payList.user_nickname }}</el-descriptions-item>
            <el-descriptions-item label="手机号">{{ payList.user_phone }}</el-descriptions-item>
            <el-descriptions-item label="总价格">{{ payList.total_fee }}</el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script>
import * as api from "@/api/userOrder"
import QRCode from "qrcode"
export default {
    created() {
        let { order_id } = this.$route.query
        this.order_id = order_id
    },
    data() {
        return {
            order_id: "",
            code_url: "",
            prepay_id: '',
            payList:{},
            payList2:[],
            imgSrc:"",
            payInterval:null
        }
    },
    async mounted() {
        await api.getTargetPro(this.order_id)
            .then(res => {
                console.log(res)
                if(res.data.state){
                this.code_url = res.data.code_url
                this.prepay_id = res.data.prepay_id
                QRCode.toDataURL(res.data.prepay_id)
                    .then(url => {
                        this.imgSrc = url
                    })
                    .catch(err => {
                        console.error(err)
                    })
                }else{
                    this.$router.push("/vipmanage/charge")
                }
            })
            await api.getDetail(this.order_id)
            .then(res => {
                console.log(res)
                this.payList = res.data.data
                this.payList2 = res.data.data.orderDetail[0]
            })
            this.payInterval = setInterval(async()=>{
                await api.getOrderState(this.order_id)
            .then(res=>{
                if(res.data.state){
                    this.$router.push("/vipmanage/charge")
                }
            })
            },5000)
    },
    beforeDestroy(){
            clearInterval(this.payInterval)
    }
}
</script>