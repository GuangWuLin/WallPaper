<template>
    <section>
        <single-bg></single-bg>
        <div class="pro-select">
            <RadioGroup v-model="knowledge_kind" @on-change='radioChange'>
                <Radio label="产品知识">
                    <span class="pro-span">产品知识</span>
                </Radio>
                <Radio label="问题解答">
                    <span class="pro-span">问题解答</span>
                </Radio>
                <Radio label="施工方法">
                    <span class="pro-span">施工方法</span>
                </Radio>
            </RadioGroup>
            <!-- 图片列表 -->
            <block-pic :pictures='Knowledges' @currentClicked='currentClicked'></block-pic>
        </div>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </section>
</template>
<script>
import SingleBg from 'base/singleBg'
import { Navs } from 'assets/js/mixin'
import BlockPic from 'base/picture'
export default {
    mixins: [Navs],
    data() {
        return {
            spinShow: false,
            knowledge_kind: '',
            currentCategory: '',
            Knowledges: []
        }
    },
    watch: {
        currentKnowledge(val) {
            console.log(val);
            let current = this.knowledges.find(item => item.value == val);
            this.knowledge_kind = current.label;
            this.currentCategory = val;
            this.getAllPictures();
        }
    },
    methods: {
        radioChange(val) {
            let tmp = this.knowledges.find(item => item.label == val);
            this.currentCategory = tmp.value;
            this.getAllPictures();
        },
        getAllPictures() {
            let param = {
                typeId: this.currentCategory
            }
            this.spinShow = true;
            this.$http.knowledge.knowledgeType(param).then(res => {
                let { success, msg, data } = res;
                this.spinShow = false;
                if (success) {
                    if (data.length) {
                        this.Knowledges = data.map(item => {
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
                name: 'knowledgeDetail',
                params: {
                    id: item.id
                }
            })
        }
    },
    mounted() {
        // id 就是 当前案的 category
        this.currentCategory = this.$route.params.id;
        // 筛选 category
        let temp = this.knowledges.find(item => item.value === this.currentCategory);
        this.knowledge_kind = temp.label;
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
