<template>
    <section class="wrap">
        <contents></contents>
        <footers :footers='footers'></footers>
    </section>
</template>
<style lang="less" scoped>
.wrap {
    position: relative;
    overflow: hidden;
}
</style>
<script>
import Contents from 'components/home/content'
import Footers from 'components/home/footer'

export default {
    components: {
        Contents,
        Footers
    },
    data() {
        return {
            footers: [
                {
                    title: '客户提出需求',
                    en: 'CUSTOMER REMAND',
                    type: 'chatbox-working',
                    size: 'home'
                },
                {
                    title: '制定设计方案',
                    en: 'DESIGN PLAN',
                    type: 'document-text',
                    size: 'home'
                },
                {
                    title: '双方签订协议',
                    en: 'SIGN AGREEMENT',
                    type: 'clipboard',
                    size: 'home'
                },
                {
                    title: '设计及修改',
                    en: 'DESIGN/MODIFY',
                    type: 'edit',
                    size: 'home'
                },
                {
                    title: '展示与验收',
                    en: 'ACCEPTANCE TEST',
                    type: 'search',
                    size: 'home'
                },
                {
                    title: '后期维护',
                    en: 'NAINTENANCE',
                    type: 'wrench',
                    size: 'home'
                }
            ]
        }
    },
    methods: {

    }
}
</script>

