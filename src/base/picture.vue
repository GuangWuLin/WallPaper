<template>
    <section class="pic-container">
        <div v-for="(item,index) in pictures" :key="index" class="pic-item" @click='currentClicked(item)'>
            <div class="pic">
                <a href="javascrip:;"><img v-lazy="item.img" alt=""></a>
                <a href="javascrip:;">{{item.title}}</a>
            </div>
        </div>
    </section>
</template>
<style lang="less" scoped>
.pic-container {
    width: 100%;
    background: #fff;
    padding: 0 20px;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    .pic-item {
        width: 200px;
        height: 200px;
        margin: 10px;
        .pic {
            overflow: hidden;
            position: relative;
            height: 100%;
            a:first-child {
                display: inline-block;
                width: 100%;
                height: 100%;
            }
            a:last-child {
                display: inline-block;
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: 1;
                font-size-adjust: 14px;
                color: #fff;
                background-color: rgba(0, 0, 0, .4);
                line-height: 30px;
                width: 100%;
                height: 30px;
            }
            img {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                filter: blur(2px);
                transition: all .7s linear;
            }
            img:hover {
                transform: scale(1.1);
                filter: blur(0);
            }
        }
    }
}
</style>

<script>
import global from 'assets/js/global'
export default {
    props: ['pictures'],
    data() {
        return {

        }
    },
    methods: {
        // 选中某一个图片
        currentClicked(item) {
            this.$emit('currentClicked', item);
        }
    }
}
</script>

