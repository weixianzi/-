<template>
    <fieldset>
        <legend>我是时天</legend>
        <ul v-for="item in list" :key="item.id" >
            <b>{{ item.title }}--------------------------------------${{ item.price }}--------------------------------------货存{{ item.inventory }}</b>
            <button @click="handClick(item)">点我加入购物车</button>
        </ul>
    </fieldset>
</template>

<script>
import {mapState,mapActions} from "vuex"
    export default {
    methods:{
        handClick(item){
            this.addProduct(item)
            this.subtract(item)
        },
        ...mapActions("product",{
            getList:"GET_LIST",
            subtract:"SUB_TRACT"
        }),
        ...mapActions("cart",{
           addProduct:"ADD_PRODUCT"
        })
    },
    computed:{
        ...mapState("product",[
            "list"
        ])
    },
    mounted(){
        this.getList()
    }
    }
</script>