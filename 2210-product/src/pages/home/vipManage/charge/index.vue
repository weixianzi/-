<template>
    <el-table
      :data="vipData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="产品图片"
        width="180">
        <template v-slot="{row}">
        <img class="proimg" :src="row.imageUrl" alt="">
      </template>
      </el-table-column>
      <el-table-column
        prop="productName"
        label="产品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="产品描述">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="180">
      </el-table-column>
      <el-table-column
        prop="inventory"
        label="库存"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="操作"
        width="180">
        <template v-slot="{row}">
            <el-button @click="goPay(row)" type="success" round>点我剁手</el-button>
        </template>
      </el-table-column>
    </el-table>
  </template>

  <script>
  import * as api from "@/api/userOrder"
    export default {
      data() {
        return {
          vipData: []
        }
      },
     async mounted(){
        await api.vipProduct()
        .then(res=>{
          console.log(res)
            this.vipData = res.data.data
        })
      },
      meta:{
            title:"vipCharge",
            name:"充值中心",
            icon:"iconfont icon-erweima"
        },
        methods:{
            goPay(row){
              let {product_id,category_id} = row
              this.$router.push({path:"/pay/payment",query:{product_id,category_id}})
            }
        }
    }
  </script>

  <style>
    .proimg{
        width: 80px;
    }
</style>