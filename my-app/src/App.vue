<template>
  <div id="app">
    <market></market>
    <cart></cart>
  </div>
</template>

<script>
import market from "@/components/market"
import cart from "@/components/cart"
export default {
  data(){
    return{
      msg:"123"
    }
  },
  components:{
    market,
    cart
  }
};
</script>

<style>

</style>
