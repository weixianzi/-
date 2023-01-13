<template>
    <div>
        <!-- <div :is="componentShow"></div> -->
        <vcode></vcode>
    </div>
</template>

<script>
    import common from "@/components/login/commonLogin.vue"
    import message from "@/components/login/messageLogin.vue"
    import vcode from "@/components/login/qrLogin.vue"
    export default {
        data(){
            return{
                componentShow:"common"
            }
        },
        components:{
            common,
            message,
            vcode
        },
        methosd:{
            toMes(){
                this.componentShow = message
            }
        }
    }
</script>

