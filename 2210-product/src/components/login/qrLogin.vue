<template>
    <div class="box">
        <h1 class="title">二维码登入</h1>
        <svg class="icon" aria-hidden="true" @click="">
            <use xlink:href="#icon-diannao"></use>
        </svg>
        <div class="qrcode" v-loading="false">
            <img src="" alt="" :src="imgSrc" class="son" :v-if="isShow">
                <img :src="maskSrc" alt="" class="mask" @click="changeQr">
        </div>
        <a href="" @click.prevent="" class="skip">点我返回登入界面</a>
    </div>
</template>

<script>
import socketIo from "socket.io-client"
import qrcode from "qrcode"
import stroge from "@/utils/stroge"
import * as api from "@/api/login"
export default {
    props:{
        stroageUserInfo:{
            required:true
        }
    },
    data(){
        return{
            imgSrc:"",
            isShow:true,
            maskSrc:""
        }
    },
    created() {
        // 获取唯一标识
        let io = socketIo("wss://chst.vip")
        io.on("connectSuccess", async ({ sid }) => {
            stroge.set("lf-sid", sid)
            this.getQr(sid)
        })
        // 扫码失败
        io.on("invalidCode",data=>{
            this.maskSrc = "https://th.bing.com/th/id/OIP.4v6iiCQN5GnDMXi4bYGDYQHaFy?w=215&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        })
        // 扫码成功
        io.on("scancodeSuccess",data=>{
            api.wechatLogin(data.wechatCode)
            .then(res=>{
                console.log(res)
                this.stroageUserInfo(res.data)
                this.$router.push("/home")
            })
        })
    },
    methods: {
        getQr() {
            let sid = stroge.get("lf-sid")
            api.getQr(sid)
                .then(res => {
                    qrcode.toDataURL(res.data.scanCodeUrl)
                    .then(url=>{
                        this.imgSrc=url
                    })
                })
        },
        changeQr(){
            this.getQr()
            this.maskSrc= ""
        }
    }
}
</script>

<style lang="less" scoped>
.box {
    border: 1px solid;
    background-color: #292d3e;
    width: 400px;
    height: 450px;
    position: relative;
    top: 200px;
    left: 80px;
}

.title {
    color: white;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    top: 40px;
}

.vcode {
    position: absolute;
    color: #292d3e;
    z-index: 999;
    left: 200px;
}

.qrcode {
    width: 200px;
    height: 200px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: relative;
}

.skip {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    color: white;
    top: 350px;
}

.icon {
    width: 60px;
    height: 60px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    position: absolute;
    left: 340px;
    cursor: pointer;
}
.son{
    width: 100%;
    height: 100%;
    position: absolute;
}
.mask{
    width: 100%;
    height: 100%;
    z-index: 999;
    position: absolute;
    opacity: .9;
}
</style>