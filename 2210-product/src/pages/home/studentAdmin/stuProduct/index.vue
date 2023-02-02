<template>
    <div class="fat">
        <el-input class="inp" placeholder="你要哪个姐姐的信息啊？" v-model="input" clearable></el-input>
        <el-button icon="el-icon-search" square class="search"></el-button>
        <button class="add" @click="showDialog">添加项目</button>
        <el-select class="frame" v-model="value" placeholder="请选择">
            <el-option v-for="item in classes" :key="item.value" :label="item.label" :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
        </el-select>
        <div>
            <el-table class="out" :data="stuData" style="width: 100%">
                <el-table-column prop="date" label="头像" width="80">
                    <template v-slot="{ row }">
                        <el-avatar shape="square" :size="50" :src="row.headimgurl"></el-avatar>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="200">
                </el-table-column>
                <el-table-column prop="degree" label="学历" width="180">
                </el-table-column>
                <el-table-column prop="class" label="班级" width="200">
                </el-table-column>
                <el-table-column prop="productUrl" label="项目" width="200">
                </el-table-column>
                <el-table-column prop="cTime" label="创建时间" width="280">
                </el-table-column>
                <el-table-column prop="address" label="操作">
                    <template v-slot="{ row }">
                        <el-button type="primary">查看</el-button>
                        <el-button type="primary">添加</el-button>
                        <el-button type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="inner">
            <el-dialog title="提示" :visible="dialogVisible" width="30%" :before-close="handleClose">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                    class="demo-ruleForm">
                    <el-upload class="avatar-uploader" action="/api/students/uploadStuAvatar"
                        :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" name="headimgurl">
                        <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-form-item label="姓名" prop="name">
                        <el-input type="password" v-model="ruleForm.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="项目地址" prop="productUrl">
                        <el-input type="password" v-model="ruleForm.productUrl" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="班级" prop="class">
                        <el-input v-model.number="ruleForm.class"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model.number="ruleForm.age"></el-input>
                    </el-form-item>
                    <el-form-item label="城市" prop="city">
                        <el-input v-model.number="ruleForm.city"></el-input>
                    </el-form-item>
                    <el-form-item label="学历" prop="degree">
                        <el-input v-model.number="ruleForm.degree"></el-input>
                    </el-form-item>
                    <el-form-item label="描述" prop="description">
                        <el-input v-model.number="ruleForm.description"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
        </div>
    </div>
</template>

<script >
import "@/icon/font_3863297_v27vj7w0huc/iconfont.css"
import * as api from "@/api/permission"
export default {
    data() {
        return {
            classes: [],
            stuData: [],
            value: '',
            input: '',
            dialogVisible: false,
            ruleForm: {
                name: '',
                productUrl: '',
                class: '',
                age: '',
                city: '',
                degree: '',
                headimgurl: "",
                description: ''
            },
            rules: {
                name: [
                    { required: true, message: "给我填啊", trigger: 'blur' }
                ],
                productUrl: [
                    { required: true, message: "给我填啊", trigger: 'blur' }
                ],
                class: [
                    { required: true, message: "给我填啊", trigger: 'blur' }
                ],
                age: [
                    { required: true, message: "给我填啊", trigger: 'blur' }
                ],
                city: [
                    { required: true, message: "给我填啊", trigger: 'blur' }
                ],
                degree: [
                    { required: true, message: "给我填啊", trigger: 'blur' }
                ],
                description: [
                    { required: true, message: "给我填啊", trigger: 'blur' }
                ]
            }
        }
    },
    meta: {
        title: "xyxmgl",
        name: "学员项目",
        icon: "iconfont icon-erweima"
    },
    async mounted() {
        await api.getStuData(20)
            .then(res => {
                console.log(res)
                this.stuData = res.data.data
            })
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    this.dialogVisible = false
                    done();
                })
                .catch(_ => { });
        },
        showDialog() {
            this.dialogVisible = true
        },
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    console.log(this.ruleForm)
                    await api.addStuData(this.ruleForm)
                    this.dialogVisible = false
                    await api.getStuData(20)
                        .then(res => {
                            console.log(res)
                            this.stuData = res.data.data
                        })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleAvatarSuccess(res) {
            console.log(res)
            if (res.state) {
                this.ruleForm.imageUrl = res.headimgurl
            }
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 4;
            if (!isJPG) {
                console.log(file.type)
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 4MB!');
            }
            return isJPG && isLt2M;
        }
    }
}
</script>

<style scoped lang="less">
.fat {
    position: relative;
}

.add {
    width: 60px;
    height: 40px;
    background-color: #409eff;
    cursor: pointer;
    border-radius: 10px;
    position: absolute;
    left: 356px;
}

/deep/ .inp {
    width: 200px;
    position: absolute;
    left: 100px;
}

.iconfont {
    position: absolute;
    top: -64px;
    right: 8px;
}

.search {
    position: absolute;
    left: 300px;
}

.frame {
    position: absolute;
    top: 60px;
    left: 100px;
}

.out {
    position: absolute;
    top: 160px;
}

.el-button {
    width: 70px;
}

/deep/ .avatar-uploader .el-upload {
    border: 2px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
