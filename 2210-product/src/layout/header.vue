<template>
    <el-row type="flex" class="row-bg" justify="space-around">
  <el-col :span="1"><div class="grid-content bg-purple" style="font-size:30px; line-height: 50px; font-weight: 900;">
    <span @click="handClick" v-html="arrows"></span>
  </div></el-col>
  <el-col :span="12"><h1 class="grid-content bg-purple-light">男同交友系统</h1></el-col>
  <el-col :span="5"><div class="grid-content bg-purple">
    <span>{{ userInfo.nickname }}</span>
      <a href="" @click.prevent="quit">退出</a>
  </div></el-col>
</el-row>
</template>

<script>
import bus from "@/api/bus"
import {mapState} from "vuex"
    export default {
      data(){
        return{
            isShow:false
        }
      }, 
        methods:{
          quit(){
            localStorage.removeItem("lf-token")
            this.$router.push("/login")
            location.reload()
          },
          handClick(){
            this.isShow = !this.isShow
            bus.$emit("showList",this.isShow)
          }
        },
        computed:{
            ...mapState('users',["userInfo"]),
            arrows(){
          return this.isShow ? ">" : "<"
        }
        }
    }
</script>

<style scoped lang="less">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    height: 50px;
  }
  .row-bg {
    padding: 5px 0;
    height: 100%;
    justify-content: space-between;
  }
</style>