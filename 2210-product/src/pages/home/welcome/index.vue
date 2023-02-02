<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="username" label="登入账户" width="180">
    </el-table-column>
    <el-table-column prop="lastLogin.ip" label="上次登入ip" width="180">
    </el-table-column>
    <el-table-column prop="lastLogin.loginTime" label="上次登入时间" width="360">
    </el-table-column>
    <el-table-column prop="nowLogin.ip" label="本次登入id" width="360">
    </el-table-column>
    <el-table-column prop="nowLogin.loginTime" label="本次登入时间" width="360">
    </el-table-column>
  </el-table>
</template>

<script>
import * as api from "@/api/permission"
export default {
  data() {
    return {
      tableData: []
    }
  },
  async mounted() {
    await api.getUserinfo(20)
      .then(res => {
        this.tableData = res.data.data
      })
  },
  meta: {
    title: "glsy",
    name: "欢迎页",
    icon: "iconfont icon-erweima"
  }
}
</script>