<template>
    <section>
        <single-bg></single-bg>
        <list @toDetail='toDetail'></list>
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
    methods: {
        toDetail(item) {
            this.$router.push({
                name: 'newsDetail',
                params: {
                    param: item
                }
            })
        }
    }
}
</script>

