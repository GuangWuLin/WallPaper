<template>
    <section class="container">
        <!-- 第一区-安图 -->
        <div class="about">
            <div class="modal">
                <span>关于我们</span>
                <span>我们倾听客户需求，以最前沿的设计理念，赋予全新的形象</span>
            </div>
        </div>
        <!-- 第二区中间介绍 -->
        <div class="router_view">
            <RadioGroup v-model="about_us" @on-change='radioChange'>
                <Radio label="公司简介">
                    <span class="pro-span">公司简介</span>
                </Radio>
                <Radio label="资质荣誉">
                    <span class="pro-span">资质荣誉</span>
                </Radio>
            </RadioGroup>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <!-- 第三区 装逼 -->
        <footers :footers='footers' :titleInfo='titleInfo'></footers>
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
            titleInfo: {
                title: '匠心独运',
                subTitle: '用专业表达专业'
            },
            footers: [
                {
                    title: '专注',
                    type: 'navigate',
                    size: 'about'
                },
                {
                    title: '创新',
                    type: 'ios-lightbulb-outline',
                    size: 'about'
                },
                {
                    title: '品质',
                    type: 'trophy',
                    size: 'about'
                }
            ]
        }
    },
    methods: {
        radioChange(val) {
            let path;
            if (val === '公司简介') {
                path = '/about/abstract';
            } else {
                path = '/about/honor'
            }
            this.$router.push({
                path
            });
        }
    }
}
</script>

<style lang="less" scoped>
.container {
    display: flex;
    flex-direction: column;
    .about {
        width: 100%;
        background-image: url(../../../static/img/bg-slider-icons-bottom.jpg);
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: 50% -30px;
        .modal {
            margin: 0 auto;
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
                font-size: 20px;
            }
        }
    }
    .router_view {
        margin: 10px auto;
        &::after {
            content: '';
            display: inline;
            clear: both;
        }
    }
}
</style>

