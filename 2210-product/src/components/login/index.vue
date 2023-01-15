<template>
    <div>
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
            <!-- <vcode></vcode> -->
            <!-- <message></message> -->
            <common></common>
        </el-form>
    </div>
</template>

<script>
    import common from "@/components/login/commonLogin.vue"
    import message from "@/components/login/messageLogin.vue"
    import vcode from "@/components/login/qrLogin.vue"
    export default {
        data(){
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
            return{
                loginForm: {
                    userName:"",
                    passWord:"",
                    vCode:""
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
            }
        },
        components:{
            common,
            message,
            vcode
        },
        methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                    console.log(valid)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
    }
</script>

