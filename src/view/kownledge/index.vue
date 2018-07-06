<template>
    <section>
        <single-bg></single-bg>
        <div class="pro-select">
            <RadioGroup v-model="project_area" @on-change='radioChange'>
                <!-- <Radio :label="item.title" v-for="(item,index) in productCenter" :value='item.value' :key="index"></Radio> -->
                <Radio label="产品知识"></Radio>
                <Radio label="问题解答"></Radio>
                <Radio label="施工方法"></Radio>
            </RadioGroup>
            <!-- 图片列表 -->
            <block-pic></block-pic>
        </div>
    </section>
</template>
<script>
import SingleBg from 'base/singleBg'
import BlockPic from 'base/picture'
export default {
    data() {
        return {
            project_area: ''
        }
    },
    methods: {
        radioChange() {

        }
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
