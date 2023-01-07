 <template>
    <div>
        <div>我是张天鸣</div>
        <span>{{ msg }}</span>
    </div>
 </template>

 <script>
    export default {
        props:["productId"],
        data(){
            return{
                msg:""
            }
        },
        mounted(){
            fetch("http://chst.vip:1234/api/getmoneyctrlproduct?productid="+this.productId)
            .then(body=>body.json())
            .then(res=>{
                this.msg = res.result[0].productInfo2
            })
        }
    }
</script>