<template>
    <!-- 图片与文章 -->
    <div>
        <h3>{{content.title}}</h3>
        <span>{{content.date}}</span>
        <div v-html='content.content'>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        content: {
            type: Object,
            default: function() {
                return {
                    title: '',
                    content: ''
                }
            }
        }
    }
}
</script>
<style lang="less" scoped>

</style>
