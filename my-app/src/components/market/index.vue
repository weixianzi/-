<template>
    <fieldset>
        <legend>花生蜡烛八宝粥，皮鞭蜡烛鸭嘴器</legend>
        <ul>
            <li v-for="item in list" :key="item.id">
            <b>品名:{{ item.title }}</b>
            ----------
            <b>库存：{{ item.inventory }}</b>
            ----------
            <b>价格:{{ item.price }}</b>
            <button @click="handClick(item)">点我加入购物车</button>
            </li>
        </ul>
    </fieldset>
</template>

<script>
import {mapState,mapActions} from "vuex"
    export default {
        computed:{
            ...mapState("market",["list"])
        },
        methods:{
            ...mapActions("market",{
                getList:"GET_LIST",
                addProduct:"ADD_PRODUCT",
                subTract:"SUB_TRACT"
            }),
            handClick(item){
                this.addProduct(item)
                this.subTract(item)
            }
        },
        mounted(){
            this.getList()
        }
    }
</script>