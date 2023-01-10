<template>
  <div id="app">
    <shop></shop>
    <cart></cart>
  </div>
</template>

<script>
import shop from "@/components/shop"
import cart from "@/components/cart"
export default {
  data(){
    return{
      msg:"123"
    }
  },
  components:{
    shop,
    cart
  }
};
</script>

<style>

</style>
