<template>
    <div class="box">
        <h1 class="title">短信登入</h1>
            <div class="el-form">
                <el-form-item label="手机号" prop="telephone">
                <a href="" @click.prevent class="vcode">点击获取验证码</a>
                <el-input type="telephone" v-model="ruleForm.telephone" autocomplete="off">
                </el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="vCode">
                <el-input type="vCode" v-model="ruleForm.vCode" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
            </el-form-item>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        var validateVcode = (rule, value, callback) => {

        };
        var validateTelphone = (rule, value, callback) => {
            let uRule = /^1[3456789]\d{9}$/
            let res = uRule.test(value)
            if (res) {
                callback()
            } else {
                callback("请正确输入手机号")
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
                telephone: '',
                vCode: '',
                vCode: ''
            },
            rules: {
                telephone: [
                    { validator: validateTelphone, trigger: 'blur' }
                ],
                vCode: [
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
.box{
    border: 1px solid ;
    background-color: #292d3e;
    width: 400px;
    height: 450px;
    position: relative;
    top: 200px;
    left: 80px;
}
.el-form{
    position: absolute;
    top: 50% !important;
    right: 50%;
    transform: translate(40%,-50%);
}
.el-button{
    position: relative;
    top: 40px;
    width: 300px;
}
.title{
    color: white;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0%);
    top: 40px;
}

    .vcode{
    position: absolute;
    color: #292d3e;
    z-index: 999;
    left: 200px;
}

</style>