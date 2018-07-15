<template>
    <section>
        <single-bg></single-bg>
        <list @toDetail='toDetail' :list='list'></list>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </section>
</template>
<script>
import SingleBg from 'base/singleBg'
import List from 'base/list'
export default {
    components: {
        SingleBg,
        List
    },
    data() {
        return {
            spinShow: false,
            list: []
        }
    },
    methods: {
        toDetail(item) {
            this.$router.push({
                name: 'newsDetail',
                params: {
                    param: item
                }
            })
        },
        getNewsList() {
            this.spinShow = true;
            this.$http.news.company.news().then(res => {
                this.spinShow = false;
                let { success, data, msg } = res;
                if (success) {
                    if (data.length) {
                        this.list = data.map(item => {
                            return {
                                title: item.title,
                                date: item.date,
                                img: item.imgUrl,
                                id: item.id,
                                abstract: item.abstract
                            }
                        })
                    }
                } else {
                    this.$Message.warning('获取公司新闻失败，原因： ' + msg);
                }
            })
        }
    },
    mounted() {
        this.getNewsList();
    }
}
</script>

