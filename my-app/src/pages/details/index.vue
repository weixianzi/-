<template>
    <div>
        <ul>
            <li>我是大便超人张天鸣。我一大便就像超人</li>
            <span>{{ msg }}</span>
        </ul>
    </div>
 </template>

<script>
 export default {
    props:["id"],
    data(){
        return{
            msg:""
        }
    },
    mounted(){
        fetch("http://chst.vip:1234/api/getmoneyctrlproduct?productid="+this.id)
        .then(body=>body.json())
        .then(res=>{
            console.log(res)
            this.msg = res.result[0].productInfo2
        })
    }
}
</script>