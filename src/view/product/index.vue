<template>
    <section>
        <single-bg></single-bg>
        <div class="pro-select">
            <RadioGroup v-model="pro_value" @on-change='radioChange'>
                <Radio :label="item.title" v-for="(item,index) in productCenter" :value='item.value' :key="index"></Radio>
            </RadioGroup>
            <!-- 图片列表 -->
            <pro-show></pro-show>
        </div>
    </section>
</template>
<style lang="less" scoped>
.pro-select {
    display: table;
    margin: 20px;
}
</style>

<script>
import { productCate } from 'assets/js/mixin'
import SingleBg from 'base/singleBg'
import ProShow from 'base/picture'
export default {
    mixins: [productCate],
    components: {
        SingleBg,
        ProShow
    },
    data() {
        return {
            pro_value: '',
        }
    },
    watch: {
        productCategory(val) {
            let tmp = this.productCenter.filter(item => item.value == val);
            this.pro_value = tmp[0].title;
        }
    },
    methods: {
        radioChange(val) {
            console.log(val);
        }
    },
    mounted() {
    }
}
</script>

