<template>
    <section>
        <div class="pic-container" v-if="pictures.length">
            <div v-for="(item,index) in pictures" :key="index" class="pic-item" @click="currentClick(item)">
                <div class="pic">
                    <a href="javascrip:;"><img v-lazy="item.img" alt=""></a>
                    <a href="javascrip:;">{{item.title}}</a>
                </div>
            </div>
            <Modal v-model="currentSelected" width="660" :title='currentObj.title'>
                <div style="text-align:center">
                    <img v-lazy="currentObj.img" style="width:100%;height:100%;" alt="">
                </div>
            </Modal>
        </div>
        <div v-else>
            <img src="../../static/img/empty-box.png" alt="">
            <span style="display:inline-block;width:100%;text-align:center;">暂时没有数据</span>
        </div>
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
    margin: 10px 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    .pic-item {
        box-sizing: border-box;
        width: 300px;
        height: 300px;
        margin: 10px 0; // flex-grow: 1;
        .pic {
            height: 100%;
            width: 300px;
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            border: 1px solid transparent;
            transition: all .5s linear;
            a {
                font-size: 20px;
            }
            a:first-child {
                display: inline-block;
                width: 100%;
                height: 100%;
            }
            a:last-child {
                width: 100%;
                height: 50px;
                display: inline-block;
                position: absolute;
                left: 0;
                bottom: 0;
                color: #fff;
                z-index: 1;
                font-size-adjust: 20px;
                line-height: 50px;
                background-color: rgba(0, 0, 0, .4);
                transition: bottom .5s linear;
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
        }
        &::after {
            content: '';
            display: block;
            position: relative;
            top: -100%;
            width: 300px;
            height: 300px;
            border: 1px solid transparent;
            transition: all .5s linear;
        }
        &:hover {
            & .pic {
                border: 6px solid #336699;
                border-radius: 50%;
            }
            &::after {
                width: 260px;
                height: 260px;
                border: 6px solid #FF6666;
                transform: translate(20px, 20px);
                border-radius: 50%;
                overflow: hidden;
            }
            img {
                transform: scale(1.1);
                filter: blur(0);
            }
            a:last-child {
                bottom: 50%;
                transform: translateY(50%);
                font-size: 30px;
                color: silver;
                height: 100px;
                line-height: 100px;
            }
        }
    }
}
</style>

