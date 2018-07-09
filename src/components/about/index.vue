<template>
    <section class="container">
        <div class="about">
            <div class="modal">
                <span>关于我们</span>
                <span>我们倾听客户需求，以最前沿的设计理念，赋予全新的形象</span>
            </div>
        </div>
        <div class="router_view">
            <RadioGroup v-model="about_us" @on-change='radioChange'>
                <Radio label="公司简介"></Radio>
                <Radio label="资质荣誉"></Radio>
            </RadioGroup>
            <router-view></router-view>
        </div>
        <footers :footers='footers'></footers>
    </section>
</template>
<script>
import Footers from 'components/home/footer'
export default {
    components: {
        Footers
    },
    data() {
        return {
            about_us: '公司简介',
            footers: [
                {
                    title: '专注',
                    en: '专业服务9年，积累大量经验，始终相信只有专注才能成就杰出',
                    type: 'navigate',
                    size: 'about'
                },
                {
                    title: '创新',
                    en: '融合创新理念和前沿技术，量身定制高品质的设计方案',
                    type: 'ios-lightbulb-outline',
                    size: 'about'
                },
                {
                    title: '品质',
                    en: '无论是整体的解构还是局部的细节，都能感受到我们对品质的追求',
                    type: 'flag',
                    size: 'about'
                }
            ]
        }
    },
    methods: {
        radioChange() {

        }
    }
}
</script>

<style lang="less" scoped>
.container {
    // padding: 20px;
    .about {
        width: 100%;
        background-image: url(../../../static/img/bg-slider-icons-bottom.jpg);
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: 50% -30px; // filter: blur(5px);
        // &::after {
        //     content: '关于我门'
        // }
        .modal {
            margin: 0 auto; // line-height: 400px;
            background: rgba(0, 0, 0, .5);
            color: #fff;
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span {
                display: block;
            }
            span:first-child {
                font-size: 40px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            span:last-child {
                font-size: 20px; // font-weight: bold;
            }
        }
    }
    .router_view {
        // background: #fff;
        margin: 10px auto;
        &::after {
            content: '';
            display: inline;
            clear: both;
        }
    }
}
</style>

