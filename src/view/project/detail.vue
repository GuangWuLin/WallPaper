<template>
    <div class="segment-container">
        <segment :content='content'>
        </segment>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </div>
</template>
<script>
import Segment from 'base/segment'
export default {
    components: {
        Segment
    },
    data() {
        return {
            spinShow: false,
            id: '',
            content: {}
        }
    },
    methods: {
        // 获取当前工程的详情
        getProjectInfo() {
            let param = {
                projectId: this.id
            }
            this.content = {
                title: '',
                date: '',
                content: ''
            }
            this.spinShow = true;
            this.$http.projects.projectInfo(param).then(res => {
                let { success, msg, data } = res;
                this.spinShow = false;
                if (success) {
                    if (typeof data === 'object' && Object.keys(data).length) {
                        this.content = {
                            ...this.$route.params,
                            ...data,
                        };
                    }
                } else {
                    this.$Message.warning('新闻详情请求数据失败，原因： ' + msg);
                }
            })
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.getProjectInfo();
    }
}
</script>
<style lang="less" scoped>
.segment-container {
    width: 100%;
    min-height: 800px;
}
</style>
