<template>
    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
</template>

<script>
export default {
    meta: {
        title: "sjtj",
        name: "数据统计",
        icon: "iconfont icon-erweima"
    },
    data() {
        return {
            num: 1
        };
    },
    methods: {
        handleChange(value) {
        }
    }
}
</script>