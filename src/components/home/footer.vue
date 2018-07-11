<template>
    <section>
        <section class="footer-container">
            <!-- 主标题和副标题 -->
            <div>
                <span class="title-header">{{titleInfo.title}}</span>
                <span class="title sub-title">{{titleInfo.subTitle}}</span>
            </div>
            <!-- 几个圈圈 -->
            <div class="footer-content">
                <div v-for="(item,index) in footers" :key="index" class="foot-item">
                    <div class="pro-step">
                        <Icon :type="item.type" class="pro-icon"></Icon>
                    </div>
                    <span>{{item.title}}</span>
                </div>
            </div>
        </section>
    </section>
</template>
<style lang="less" scoped>
.footer-container {
    width: 100%;
    height: 400px;
    margin-top: 10px;
    background-image: url(../../../static/img/bg-app.jpg);
    background-size: cover;
    background-position: 50% -86px;
    padding: 10px 0;
    .title-header {
        display: block;
        margin-top: 10px;
        font-size: 30px;
        font-weight: bold;
    }
    .sub-title {
        font-size: 18px;
        color: #969696;
    }
    .footer-content {
        background: transparent;
        display: flex;
        flex-flow: row nowrap;
        .foot-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 10px auto;
            .pro-step {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background: #fff;
                margin: 0 auto;
                transition: all 0.2s linear;
                .pro-icon {
                    font-size: 50px;
                    line-height: 100px;
                    color: #2d8cf0;
                    transition: all .8s ease-in-out;
                    &:hover {
                        transform: rotate(360deg);
                    }
                }
            }
            span {
                display: inline-block;
                margin-top: 10px;
            }
        }
    }
}
</style>
<script>
export default {
    props: ['footers', 'titleInfo'],
    data() {
        return {

        }
    }
}
</script>


