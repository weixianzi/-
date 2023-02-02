<template>
    <el-table
      :data="orderData"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="产品图片"
        width="120">
        <template v-slot={row} >
            <img class="orderimg" :src="row.orderDetail[0].imageUrl" alt="">
        </template>
      </el-table-column>
      <el-table-column
        prop="order_id"
        label="订单编号"
        width="280">
      </el-table-column>
      <el-table-column
        prop="orderDetail[0].productName"
        width="100"
        label="产品名称">
      </el-table-column>
      <el-table-column
        prop="orderDetail[0].quantity"
        width="100"
        label="数量">
      </el-table-column>
      <el-table-column
        prop="total_fee"
        width="140"
        label="总价格">
      </el-table-column>
      <el-table-column
        prop="create_time"
        width="200"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="address"
        width="140"
        label="支付状态">
        <template v-slot="{row}">
            <span>{{ row.order_status===1 ? "已支付" : "未支付" }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        width="140"
        label="订单状态">
        <template v-slot="{row}">
            <span v-if="row.order_status===0">未提交</span>
            <span v-else-if="row.order_status===1">提交成功</span>
            <span v-else-if="row.order_status===2">取消订单</span>
            <span v-else-if="row.order_status===3">无效订单</span>
            <span v-else-if="row.order_status===4">关闭订单</span>
            <span v-else-if="row.order_status===5">退货</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template v-slot="{row}">
        <el-button type="primary" v-hasPay=[row.pay_status,row.order_status]>去支付</el-button>
        <el-button type="danger" @click="open(row.order_id)">删除订单</el-button>
        </template>
      </el-table-column>
    </el-table>
  </template>
  
  <script>
  import * as api from "@/api/userOrder"
    export default {
      data() {
        return {
          orderData: []
        }
      },
     async mounted(){
      this.getOrderList()
      },
      meta:{
            title:"order",
            name:"订单管理",
            icon:"iconfont icon-erweima"
        },
        directives:{
            hasPay:{
                inserted(el,binding){
                    let [pay_state,order_state] = binding.value
                    let className = el.className
                    if(pay_state!==0 || order_state!==1){
                        el.disabled = true
                        el.className = className + " " + "is-disabled"
                    }
                }
            }
        },
        methods:{
         async delOrder(order_id){
           await api.delOrder(order_id)
           this.getOrderList()
          },
         async getOrderList(){
          await api.getOrder()
        .then(res=>{
            this.orderData = res.data.data
        })
          },
          open(order_id) {
        const h = this.$createElement;
        this.$msgbox({
          title: '警告',
          message: h('p', null, [
            h('span', null, '此删除行为不可逆，是否继续？ ')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              this.delOrder(order_id)
                done();
            } else {
              done();
            }
          }
        }).then(() => {
          this.$message({
            type: 'info',
            message: '删除成功'
          });
        });
      }
        }
    }
  </script>

  <style lang="less" scoped>
    .orderimg{
        width: 80px;
    }

</style>
