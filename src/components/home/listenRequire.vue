<template>
    <div class="ours-needs">
        <span class="title">我们倾听客户的需求</span>
        <Row :gutter='20'>
            <Col span='8' class="our-need">
            <h3>关于我们</h3>
            <p name='about'>
                青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说 青青子衿悠悠我心青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说 青青子衿悠悠我心青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说 青青子衿悠悠我心青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说 青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说 青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说 青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说 青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说
            </p>
            <Button class="check-detail transButton">查看详情</Button>
            </Col>
            <Col span='8' class="our-need">
            <h3>我们的优势</h3>
            <p name='advantage'>
                青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说 青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说 青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说 青青子衿悠悠我心情况就是能吃sasksassd啥都没喝奶茶拿不出手可是就是觉得爸爸说
            </p>
            <our-advantage></our-advantage>
            </Col>
            <Col span='8' class="our-need">
            <h3>专注高品质的设计</h3>
            <video src="../../../static/video/Productive-Morning.mp4" controls style="width:100%;height:75%;" loop='1' autoplay='1'></video>
            <div style="width:100%;padding:0 20px;flex:1;">
                <Button class="contact-us transButton" long>联系我们，免费报价</Button>
            </div>
            </Col>
        </Row>
    </div>
</template>
<style lang="less" scoped>
.ours-needs {
    .our-need {
        height: 320px;
        display: flex;
        flex-direction: column;
        h3 {
            flex: 1;
        }
        h3,
        p {
            text-align: left;
            line-height: 23px;
            margin: 10px;
        }
        p {
            font-size: 14px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        p[name='about'] {
            -webkit-line-clamp: 9;
            flex: 5;
        }
        p[name='advantage'] {
            -webkit-line-clamp: 5;
            flex: 8;
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
</style>
<script>
import OurAdvantage from 'base/collapse'
export default {
    props: ['standards'],
    components: {
        OurAdvantage
    }
}
</script>


