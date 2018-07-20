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
                <router-view style="width:100%;"></router-view>
            </keep-alive>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            about_us: '',

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
    },
    mounted() {
        if (this.$route.name === 'abstract') {
            this.about_us = '公司简介';
        } else if (this.$route.name === 'honor') {
            this.about_us = '资质荣誉';
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
                font-size: 50px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            span:last-child {
                font-size: 30px;
            }
        }
    }
    .router_view {
        margin: 10px auto;
        width: 100%;
        overflow: hidden;
        &::after {
            content: '';
            display: inline;
            clear: both;
        }
    }
}
</style>

