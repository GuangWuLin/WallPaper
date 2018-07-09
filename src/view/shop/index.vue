<template>
    <section>
        <single-bg></single-bg>
        <div class="pro-select">
            <RadioGroup v-model="shop_image" @on-change='radioChange'>
                <Radio label="专卖店形象"></Radio>
            </RadioGroup>
            <!-- 图片列表 -->
            <block-pic :pictures='shopImages' @currentClicked='currentClicked'></block-pic>
        </div>
    </section>
</template>
<script>
import SingleBg from 'base/singleBg'
import BlockPic from 'base/picture'
export default {
    data() {
        return {
            shop_image: '',
            shopImages: []
        }
    },
    methods: {
        radioChange() {

        },
        getAllPictures() {
            this.$http.get('api/getShopImage').then(res => {
                let { success, msg, data } = res;
                if (success) {
                    if (data.length) {
                        this.shopImages = data.map(item => {
                            return {
                                title: item.title,
                                img: item.img,
                                id: item.id
                            }
                        });
                    }
                } else {
                    this.$Message.warning('当前区域工程业绩查询失败,原因: ' + msg);
                }
            })
        },
        currentClicked(item) {
            this.$router.push({
                name: 'shopDetail',
                params: {
                    id: item.id
                }
            })
        }
    },
    mounted() {
        this.getAllPictures();
    },
    components: {
        SingleBg,
        BlockPic
    }
}
</script>
<style lang="less" scoped>
.pro-select {
    // display: flex;
    // justify-content: center;
    margin: 20px;
}
</style>
