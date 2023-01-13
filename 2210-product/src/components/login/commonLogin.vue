<template>
    <div class="box">
        <svg class="icon qrcode" aria-hidden="true">
            <use xlink:href="#icon-erweima"></use>
        </svg>
        <h1 class="title">男同交友系统</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="userName">
                <el-input type="userName" v-model="ruleForm.userName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
                <el-input type="passWord" v-model="ruleForm.passWord" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="vCode">
                <el-input v-model.number="ruleForm.vCode"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
            </el-form-item>
        </el-form>
        <a href="" @click.prevent="" class="skip">点我切换短信登录</a>
    </div>
</template>

<script>
export default {
    data() {
        var validateVcode = (rule, value, callback) => {

        };
        var validateUserName = (rule, value, callback) => {
            let uRule = /^[-_a-zA-Z0-9]{4,16}$/
            let res = uRule.test(value)
            if (res) {
                callback()
            } else {
                callback("请正确输入账号")
            }
        };
        var validatePass = (rule, value, callback) => {
            let pRule = /.{5,8}/
            let res = pRule.test(value)
            if (res) {
                callback()
            } else {
                callback("请正确输入密码")
            }
        };
        return {
            ruleForm: {
                userName: '',
                passWord: '',
                vCode: ''
            },
            rules: {
                userName: [
                    { validator: validateUserName, trigger: 'blur' }
                ],
                passWord: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                vCode: [
                    { validator: validateVcode, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
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
    background-color: rgba(#f1582c,80%);
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
    left: 50%;
    transform: translate(-50%, 0%);
    top: 40px;
}

.skip {
    color: #409eff;
    position: absolute;
    left: 50%;
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
.qrcode{
    position: absolute;
    left: 360px;
    cursor: pointer;
}
.el-form-item__label{
    color: white;
}

</style>