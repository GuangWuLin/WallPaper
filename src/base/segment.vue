<template>
    <!-- 图片与文章 -->
    <div>
        <div v-if="content.title">
            <span class="article-title">{{content.title}}</span>
            <span class="article-date">{{content.date}}</span>
            <div v-html='content.content' class="article-content">
            </div>
        </div>
        <div v-else class="empty-box">
            <img src="../../static/img/empty-box.png" alt="">
            <span style="display:inline-block;width:100%;text-align:center;">暂时没有数据</span>
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
.article-title {
    font-size: 30px;
    color: #000;
}

.article-date {
    display: block;
    font-size: 20px;
    color: #666;
}

.article-content {
    font-size: 18px;
    color: #001;
}

.empty-box {
    // margin: auto;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
</style>
