<template>
    <div class="aside">
        <el-aside width="300">
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" text-color="#4e5bf8" ref="sideMenu"
                active-text-color="#E47833" :collapse="isCollapse">
                <qf-sub-menu :sideMenu='$store.state.userPermission.userList'></qf-sub-menu>
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
import bus from "@/api/bus"
export default {
    data() {
        return {
            isCollapse:this.show
        }
    },
    mounted(){
        bus.$on("showList",show=>{
           this.isCollapse = show
        })
    }
}
</script>

<style>
.el-menu-vertical-demo {
    overflow: hidden;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.aside .el-menu{
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
}
</style>