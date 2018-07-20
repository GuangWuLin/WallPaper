<template>
    <div class="big-background">
        <img style="width:90%;height:100%;" v-lazy="img" alt="">
        <Spin size="large" fix v-if="spinShow"></Spin>
    </div>
</template>
<script>
export default {
    data() {
        return {
            spinShow: false,
            img: ''
        }
    },
    methods: {
        getAdvertisement() {
            this.spinShow = true;
            this.$http.join.getInvest().then(res => {
                let { success, msg, data } = res;
                this.spinShow = false;
                if (success) {
                    if (typeof data === 'object' && Object.keys(data).length) {
                        this.img = data.imgUrl;
                    }
                } else {
                    this.$Message.warning('联系方式获取失败，原因： ' + msg);
                }
            })
        }
    },
    mounted() {
        this.getAdvertisement();
    }
}
</script>

<style lang="less" scoped>
.big-background {
    width: 100%;
    height: 800px;
    margin: 100px auto;
    background-position: 100px 100px;
    background-size: 100% 100%;
    overflow: hidden;
}
</style>
