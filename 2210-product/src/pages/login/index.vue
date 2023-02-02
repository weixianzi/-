<template>
    <div>
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px"
            class="demo-ruleForm">
            <vcode :stroageUserInfo="stroageUserInfo" v-if="componType==='vcode'" @toCommon="toCommon"></vcode>
            <message @toCommon="toCommon" :stroageUserInfo="stroageUserInfo" v-else-if="componType==='message'"></message>
            <common @toMes="toMes" @toVcode="toVcode" ref="commonLogin" @syncLoginForm="changeLoginForm" @submit="submit" v-else></common>
        </el-form>
    </div>
</template>

<script>
import common from "@/components/login/commonLogin.vue"
import message from "@/components/login/messageLogin.vue"
import vcode from "@/components/login/qrLogin.vue"
import * as api from "@/api/login"
import stroge from "@/utils/stroge"
import "@/global/bgc.css"
export default {
    data() {
        var validateVcode = (rule, value, callback) => {
            callback()
        };
        var validateUserName = (rule, value, callback) => {
            let uRule = /^[-_a-zA-Z0-9]{3,16}$/
            let res = uRule.test(value)
            if (res) {
                callback()
            } else {
                callback("请正确输入账号")
            }
        };
        var validatePass = (rule, value, callback) => {
            let pRule = /.{3,8}/
            let res = pRule.test(value)
            if (res) {
                callback()
            } else {
                callback("请正确输入密码")
            }
        };
        return {
            loginForm: {
                userName: "",
                passWord: "",
                vCode: ""
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
            },
            componType:"common"
        }
    },
    components: {
        common,
        message,
        vcode
    },
    methods: {
        // 按钮提交触发事件
        submit() {
            this.$refs["loginForm"].validate(async (valid) => {
                // 解构
                let { userName, passWord } = this.loginForm

                // 判断数据是否正确
                if (valid) {
                    // 判断验证码
                    await api.verifyVcode(this.loginForm.vCode)
                        .then(async res => {
                            if (res.data.state) {
                                await api.commonLog(userName, passWord)
                                    .then(res => {
                                        // 判断账号密码
                                        if (res.data.state) {
                                            this.stroageUserInfo(res.data)
                                            this.$router.push("/")
                                        }
                                    })
                            } else {
                                this.$refs["commonLogin"].getVcode()
                            }
                        })
                } else {
                    return false;
                }
            });
        },

        // 同步子父组件数据的方法
        changeLoginForm(newForm) {
            this.loginForm = newForm
        },

        stroageUserInfo({ permission, token, userInfo }) {
            this.$store.commit("users/GET_USER_INFO",userInfo)
            stroge.set("lf-token", token)
            stroge.set("lf-per", permission)
            stroge.set("lf-userInfo", userInfo)
        },

        // 短信登入
        toVcode(name){
            this.componType = name
        },
        toCommon(){
            this.componType = "common"
        },
        toMes(){
            this.componType = "message"
        }
    }
}
</script>

<style lang="less" scoped>

</style>

