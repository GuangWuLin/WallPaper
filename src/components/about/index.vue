<template>
    <section class="container">
        <div class="about">
            <div class="modal">
                <span>关于我们</span>
                <span>我们倾听客户需求，以最前沿的设计理念，赋予全新的形象</span>
            </div>
        </div>
        <div style="background:#fff;">
            <Tabs value="name1">
                <TabPane label="公司简介" name="name1">
                    <introduction></introduction>
                </TabPane>
                <TabPane label="资质荣誉" name="name3">
                    <culture></culture>
                </TabPane>
            </Tabs>
        </div>
        <div class="footer-info">
            <footers :footers='footers'></footers>
        </div>
    </section>
</template>
<script>
import Footers from 'components/home/footer'
import Introduction from 'components/about/introduction'
import Culture from 'components/about/culture'
export default {
    components: {
        Footers,
        Introduction,
        Culture
    },
    data() {
        return {
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
            ],
            pro: [{
                describle: '开创品牌',
                type: 'trophy'
            },
            {
                describle: '发展'
            },
            {
                describle: '进击'
            }, {
                describle: '拓宽'
            }, {
                describle: '延展'
            }, {
                describle: '升华'
            }]
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
}
</style>

