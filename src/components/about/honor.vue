<template>
    <section class="pic-container">
        <div v-for="(item,index) in pictures" :key="index" class="pic-item" @click="currentClick(item)">
            <div class="pic">
                <a href="javascrip:;"><img v-lazy="item.img" alt=""></a>
                <a href="javascrip:;">{{item.title}}</a>
            </div>
        </div>
        <Modal v-model="currentSelected" width="660" :title='currentObj.title'>
            <div style="text-align:center">
                <img :src="currentObj.img" style="width:100%;height:100%;" alt="">
            </div>
        </Modal>
    </section>
</template>
<script>
import global from 'assets/js/global'
export default {
    props: ['pictures'],
    data() {
        return {
            currentSelected: false,
            currentObj: {
                describe: '',
                img: ''
            },
        }
    },
    methods: {
        currentClick(item) {
            console.log(item)
            this.currentSelected = true;
            this.currentObj = item;
        }
    }
}
</script>

<style lang="less" scoped>
.pic-container {
    width: 100%;
    background: #fff;
    padding: 0 20px;
    margin: 10px;
    display: flex;
    flex-flow: row wrap;
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
    &::after {
        content: '';
        display: inline;
        clear: both;
    }
}
</style>

