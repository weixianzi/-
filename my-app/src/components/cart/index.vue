<template>
    <fieldset>
        <legend>我是张天鸣</legend>
        <ul v-for="item in proArr" :key="item.id">
            <b>{{ item.title }}-------------------${{ item.price }}-------------------数量：{{ item.count }}</b>
            <button @click="handClick(item)" :disabled="item.count<=0">我不要了</button>
        </ul>
        <div>{{total}}</div>
    </fieldset>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState("cart",["proArr"]),
        ...mapGetters("cart",["total"])
    },
    methods:{
        handClick(item){
            this.subTract(item)
        },
        ...mapActions("cart",{
            subTract:"SUB_TRACT"
        })
    },
}
</script>