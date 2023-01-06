 <template>
    <div>
        <ul>
            <li v-for="item in list">
                <a href="" @click.prevent="handClick(item.productId)">{{ item.productName }}</a>
            </li>
        </ul>
    </div>
 </template>

<script>

let getList = ()=>fetch("http://chst.vip:1234/api/getmoneyctrl")



 export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        handClick(item_id){
        this.$router.push({path:`/details/${item_id}`,params:{id:item_id}})
        }
    },
    mounted(){
        getList()
        .then(body=>body.json())
        .then(res=>{
            this.list = res.result
            console.log(res)
        })
    }
}

</script>