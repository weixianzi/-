<template>
    <div class="box">
        <h1 class="title">二维码登入</h1>
        <svg class="icon" aria-hidden="true" @click="handClick">
            <use xlink:href="#icon-diannao"></use>
        </svg>
        <div class="qrcode" v-loading="true"></div>
        <a href="" @click.prevent="" class="skip">点我返回登入界面</a>
    </div>
</template>

<script>
    export default{
        methods:{
            handClick(){
                this.$emit("toQr")
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
</style>