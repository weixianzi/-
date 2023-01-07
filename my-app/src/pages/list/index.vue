<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <a href="" @click.prevent="handClick(item.productId)">{{ item.productName }}</a>
            </li>
        </ul>
    </div>
 </template>

 <script>
    export default {
        data(){
            return{
                list:[]
            }
        },
        mounted(){
            fetch("http://chst.vip:1234/api/getmoneyctrl")
            .then(body=>body.json())
            .then(res=>{
                this.list = res.result
                console.log(res)
            })
        },
        methods:{
            handClick(item){
                this.$router.push({name:"detail",params:{productId:item}})
            }
        }
    }
</script>