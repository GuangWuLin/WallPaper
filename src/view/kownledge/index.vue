<template>
    <section>
        <single-bg></single-bg>
        <div class="pro-select">
            <RadioGroup v-model="knowledge_kind" @on-change='radioChange'>
                <Radio label="产品知识"></Radio>
                <Radio label="问题解答"></Radio>
                <Radio label="施工方法"></Radio>
            </RadioGroup>
            <!-- 图片列表 -->
            <block-pic :pictures='knowledges' @currentClicked='currentClicked'></block-pic>
        </div>
    </section>
</template>
<script>
import SingleBg from 'base/singleBg'
import BlockPic from 'base/picture'
export default {
    data() {
        return {
            knowledge_kind: '产品知识',
            knowledges: []
        }
    },
    methods: {
        radioChange() {
            this.getAllPictures();
        },
        getAllPictures() {
            this.$http.get('api/getKnowledges').then(res => {
                let { success, msg, data } = res;
                if (success) {
                    if (data.length) {
                        this.knowledges = data.map(item => {
                            return {
                                title: item.title,
                                img: item.img,
                                id: item.id
                            }
                        })
                    }
                } else {
                    this.$Message.warning('当前区域工程业绩查询失败,原因: ' + msg);
                }
            })
        },
        currentClicked(item) {
            this.$router.push({
                name: 'kownledgeDetail',
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
