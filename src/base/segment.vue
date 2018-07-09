<template>
    <!-- 图片与文章 -->
    <div v-html='richText'>
    </div>
</template>
<script>
export default {
    data() {
        return {
            richText: '<h1>HelloKitty!!</h1>'
        }
    }
}
</script>
<style lang="less" scoped>

</style>
