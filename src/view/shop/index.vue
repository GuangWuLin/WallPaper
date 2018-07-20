<template>
    <section class="shop-content">
        <single-bg></single-bg>
        <div class="pro-select">
            <RadioGroup v-model="shop_image">
                <Radio label="专卖店形象">
                    <span class="pro-span">专卖店形象</span>
                </Radio>
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
            shop_image: '专卖店形象',
            shopImages: []
        }
    },
    methods: {
        getAllPictures() {
            this.$http.shop.agency().then(res => {
                let { success, msg, data } = res;
                if (success) {
                    if (data.length) {
                        this.shopImages = data.map(item => {
                            return {
                                title: item.title,
                                img: item.imgUrl,
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
.shop-content {
    // margin-bottom: 100px;
    .pro-select {
        margin: 20px;
    }
}
</style>
