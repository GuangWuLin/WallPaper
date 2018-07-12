<template>
    <div class="ours-needs">
        <span class="title">我们倾听客户的需求</span>
        <div class="our-content">
            <!-- 第一区 -->
            <div class="our-need">
                <span class="sub-title">关于我们</span>
                <p name='about'>
                    青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说 青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说 青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说 青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说
                </p>
                <Button class="check-detail transButton" @click="go2About">查看详情</Button>
            </div>
            <!-- 第二区 -->
            <div class="our-need">
                <span class="sub-title">我们的优势</span>
                <p name='advantage'>
                    青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说
                </p>
                <our-advantage></our-advantage>
            </div>
            <!-- 第三区 -->
            <div class="our-need">
                <span class="sub-title">专注高品质的设计</span>
                <video src="../../../static/video/Productive-Morning.mp4" controls style="width:100%;height:75%;" loop='1' autoplay='1'></video>
                <div style="width:100%;padding:0 20px;flex:1;">
                    <Button class="contact-us transButton" long @click='popupForm'>联系我们，免费报价</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@media screen and (min-width:320px) and (max-width:767px) {
    .our-content {
        display: flex;
        flex-direction: column;
        padding: 10px;
        .our-need {
            height: 320px;
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
            .sub-title {
                font-weight: bold;
                text-align: left;
            }
            .sub-title,
            p {
                font-size: 16px;
                line-height: 32px;
                margin: 10px;
            }
            p {
                text-align: left;
                &::selection {
                    color: #fff;
                }
            }
            .check-detail {
                color: #fff;
                border: none;
                background-color: #1ebbf0;
                transition: all .2s ease-in-out;
            }
            .check-detail:hover {
                background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%);
            }
            .contact-us {
                background-color: #00c1cf;
                background-image: linear-gradient(to right, #00c1cf 0%, #5472d2 100%);
                transition: all .2s linear;
                color: #fff;
                border: none;
                margin-top: 10px;
            }
            &:nth-child(3) {
                // height: 400px;
            }
        }
    }
}

@media screen and (min-width:768px) {
    .our-content {
        display: flex;
        flex-direction: row;
        .our-need {
            height: 320px;
            flex: 1;
            display: flex;
            flex-direction: column;
            .sub-title {
                font-weight: bold;
                text-align: left;
            }
            .sub-title,
            p {
                font-size: 16px;
                line-height: 23px;
                margin: 10px;
            }
            p {
                text-align: left;
                &::selection {
                    color: #fff;
                }
            }
            .check-detail {
                color: #fff;
                border: none;
                background-color: #1ebbf0;
                transition: all .2s ease-in-out;
            }
            .check-detail:hover {
                background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%);
            }
            .contact-us {
                background-color: #00c1cf;
                background-image: linear-gradient(to right, #00c1cf 0%, #5472d2 100%);
                transition: all .2s linear;
                color: #fff;
                border: none;
                margin-top: 10px;
            }
        }
    }
}
</style>
<script>
import OurAdvantage from 'base/collapse'
export default {
    props: ['standards'],
    components: {
        OurAdvantage
    },
    methods: {
        go2About() {
            this.$router.replace({
                path: '/about/abstract'
            })
        },
        popupForm() {
            this.$emit('popupForm');
        }
    }
}
</script>


