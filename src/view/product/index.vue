<template>
    <section>
        <single-bg></single-bg>
        <div class="pro-select">
            <RadioGroup v-model="pro_value" @on-change='radioChange'>
                <Radio :label="item.label" v-for="(item,index) in productCenter" :value='item.value' :key="index">
                    <span class="pro-span">
                        {{item.label}}
                    </span>
                </Radio>
            </RadioGroup>
            <!-- 图片列表 -->
            <pro-show :pictures='currentProducts'></pro-show>
        </div>
    </section>
</template>
<style lang="less" scoped>
.pro-select {
    display: table;
    margin: 20px;
    .pro-span {
        font-size: 20px;
    }
}
</style>

<script>
import { Navs } from 'assets/js/mixin'
import SingleBg from 'base/singleBg'
import ProShow from 'components/product/picture'
export default {
    mixins: [Navs],
    components: {
        SingleBg,
        ProShow
    },
    data() {
        return {
            pro_value: '',
            currentProducts: []
        }
    },
    watch: {
        currentProduct(val) {
            let current = this.productCenter.find(item => item.value === val);
            this.pro_value = current.label;
        }
    },
    methods: {
        getAllPictures() {
            this.$http.get('api/getAllProducts').then(res => {
                let { success, msg, data } = res;
                if (success) {
                    if (data.length) {
                        this.currentProducts = data.map(item => {
                            return {
                                title: item.title,
                                img: item.img
                            }
                        })
                    }
                } else {
                    this.$Message.warning('当前分类产品查询失败,原因: ' + msg);
                }
            })
        },
        // 改变选项
        radioChange(val) {
            console.log(val);
            let tmp = this.productCenter.find(item => item.label == val);
            // console.error(tmp);
            this.getAllPictures();
        }
    },
    activated() {
        this.getAllPictures();
    }
}
</script>

