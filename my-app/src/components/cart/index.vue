<template>
    <fieldset>
        <legend>我是张天鸣</legend>
        <ul>
            <li v-for="item in proArr" :key="item.id">
            <b>品名:{{ item.title }}</b>
            ----------
            <b>已添加:{{ item.count }}</b>
            ----------
            <b>价格:{{ item.price }}</b>
            <button @click="handClick(item)">我不要了捏</button>
            </li>
        </ul>
        <div>总价:{{ total }}</div>
    </fieldset>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
    export default {
        computed:{
            ...mapState("cart",['proArr']),
            ...mapGetters("cart",["total"])
        },
        methods:{
            ...mapActions("cart",{
                sales:"SALES_PRO"
            }),
            handClick(item){
                this.sales(item)
            }
        }
    }
</script>