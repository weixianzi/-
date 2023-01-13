<template>
    <div class="box">
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
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
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
       if(res){
        callback()
       }else{
        callback("请正确输入账号")
       }
      };
      var validatePass = (rule, value, callback) => {
       let pRule = /.{5,8}/
       let res = pRule.test(value)
       if(res){
        callback()
       }else{
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
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less">
    .el-input{
        .el-input__inner{
            width: 300px;
}
    }
</style>