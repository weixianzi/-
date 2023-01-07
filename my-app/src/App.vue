<template>
  <div id="app">
    <a href="" @click.prevent="handClick">闪电松鼠？哈哈哈哈哈哈哈哈</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:"123"
    }
  },
  methods:{
    handClick(){
      this.$router.push({name:"list"})
    }
  }
};
</script>

<style>

</style>
