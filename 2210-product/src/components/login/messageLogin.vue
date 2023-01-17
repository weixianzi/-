<template>
    <div class="box">
        <h1 class="title">短信登入</h1>
        <div class="el-form">
            <el-form-item label="手机号" prop="telephone">
                <a href="" @click.prevent="countDown" class="vcode">{{ countdown }}</a>
                <el-input type="telephone" v-model="ruleForm.telephone" autocomplete="off">
                </el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="vCode">
                <el-input type="vCode" v-model="ruleForm.vCode" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">登陆</el-button>
            </el-form-item>
            <a href="" @click.prevent="toCommon" class="skip">点我返回登入界面</a>
        </div>
    </div>
</template>

<script>
import * as api from "@/api/login"

export default {
    props:{
        stroageUserInfo:{}
    },
    data() {
        return {
            ruleForm: {
                vCode: "",
                telephone: ""
            },
            countdown: "点击发送验证码",
            isClick: true,
            interval:""
        }
    },
    methods: {
       async countDown() {
        let {telephone,vCode} = this.ruleForm
            await api.getCode(telephone)
            let count = 5
            this.countdown = `${count}秒后重新发送`
            if (this.isClick) {
                this.isClick = false
                this.interval = setInterval(() => {
                    count--
                    if (count < 1) {
                        this.countdown = "点击发送验证码"
                        this.isClick = true
                        clearInterval(this.interval)
                    }else{
                        this.countdown= `${count}秒后重新发送`
                    }

                }, 1000)
            }
        },
       async submitForm(){
        let {telephone,vCode} = this.ruleForm   
            await api.phoneLogin(vCode)
            .then(res=>{
                this.stroageUserInfo(res.data)
                this.$router.push("/home")
            })
        },
        toCommon(){
            this.$emit("toCommon","common")
        }
    }
}
</script>

<style lang="less" scoped>
.el-input {
    .el-input__inner {
        width: 300px;
    }
}

.box {
    border: 1px solid;
    background-color: #292d3e;
    width: 400px;
    height: 450px;
    position: relative;
    top: 200px;
    left: 80px;
}

.el-form {
    position: absolute;
    top: 50% !important;
    right: 50%;
    transform: translate(40%, -50%);
}

.el-button {
    position: relative;
    top: 40px;
    width: 300px;
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
.skip {
    position: absolute;
    left: 60%;
    transform: translate(-50%, 0%);
    color: white;
    top: 230px;
}
</style>