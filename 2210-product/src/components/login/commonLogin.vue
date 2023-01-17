<template>
    <div class="box">
            <svg class="icon qrcode" aria-hidden="true" @click="toVcode">
                <use xlink:href="#icon-erweima" ></use>
            </svg>  
        <div class="el-form">
            <h1 class="title">男同交友系统</h1>
            <el-form-item label="账号" prop="userName">
                <el-input type="userName" v-model="loginForm.userName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
                <el-input type="passWord" v-model="loginForm.passWord" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="vCode">
                <el-input v-model.number="loginForm.vCode"></el-input>
                <i v-html="vCode" class="vcode" @click="getVcode"></i>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
            </el-form-item>
            <a href="" @click.prevent="toMessage" class="skip" @click="toMessage">点我切换短信登录</a>
        </div>
    </div>
</template>

<script>
import * as api from "@/api/login"
export default {
    data() {
        return {
            vCode: "",
            loginForm: {
                userName: "",
                passWord: "",
                vCode:""
            }
        };
    },
    watch:{
        loginForm:{
            handler(newVal){
            this.$emit("syncLoginForm",newVal)
        },
        deep:true
        }
    },
    methods: {
        submitForm(formName) {
            this.$emit("submit")
        },
        async getVcode() {
            await api.getVcode()
                .then(res => {
                    this.vCode = res.data.img
                })
        },
        toVcode(){
            console.log(1)
            this.$emit("toVcode","vcode")
        },
        toMessage(){
            this.$emit("toMes","123")
        }
    },
    mounted() {
        this.getVcode()
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
    background-color: rgba(#f1582c, 80%);
    width: 400px;
    height: 600px;
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
    top: -140px;
    left: 36%;

}

.skip {
    color: #409eff;
    position: absolute;
    left: 64%;
    transform: translate(-50%, 0);
    top: 80%;
}

.icon {
    width: 40px;
    height: 40px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.qrcode {
    position: absolute;
    left: 360px;
    cursor: pointer;
}

/deep/ .el-form-item__label {
    color: white !important;
}

.vcode {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
}
</style>