<template>
    <section>
        <single-bg></single-bg>
        <div class="pro-select">
            <RadioGroup v-model="project_area" @on-change='radioChange'>
                <Radio label="专卖店形象"></Radio>
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
