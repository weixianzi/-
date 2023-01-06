<template>
  <div id="app">
    <router-link to="/list">点我购买折磨张天鸣的工具</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:"123"
    }
  }
};
</script>

<style>

</style>
