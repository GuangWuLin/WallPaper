<template>
    <section class="wrap-container">
        <!-- 轮播图 -->
        <Carousel autoplay v-model="value" loop arrow='never'>
            <CarouselItem v-for="(item,index) in carousels" class="carousel" :key="index">
                <div class="demo-carousel">
                    <img :src="item" alt="">
                </div>
            </CarouselItem>
        </Carousel>
        <!-- 产品中心 -->
        <div class="product">
            <div class='index-title'>
                <span class="en">PRODUCT</span>
                产品中心
            </div>
            <Carousel v-model="value1" loop arrow='always' dots='none'>
                <CarouselItem v-for="(item,index) in products" class="carousel" :key="index" @click.native='productDetail(item)'>
                    <div class="demo-carousel ">
                        <img :src="item.imgUrl" alt="">
                        <div class="carousel-title">{{item.describe}}</div>
                    </div>
                </CarouselItem>
            </Carousel>
            <div class="more" @click='productMore'>更多</div>
        </div>
        <!-- 工程业绩 -->
        <!-- 公司简介 -->
        <div class="introduction">
            <div class="left-content">
                <div class='index-title product-title'>
                    <span class="en">TRAILER</span>
                    宣传片
                </div>
                <div class="left-img">
                    <img :src="introduction.imgUrl" alt="">
                </div>
            </div>
            <div class="right-content">
                <div class='index-title product-title'>
                    <span class="en">COMPANY PROFILE</span>
                    公司简介
                </div>
                <div class="right-describe">
                    <p>
                        {{introduction.describe}}
                    </p>
                    <div class="forward" @click="about"></div>
                </div>
            </div>
        </div>
        <!-- 资质荣誉 -->
        <div class="honor">
            <div class='index-title'>
                <span class="en">QUALIFICATION HONOR</span>
                资质荣誉
            </div>
            <Carousel autoplay v-model="value2" loop arrow='never'>
                <CarouselItem v-for="(item,index) in honors" class="carousel" :key="index">
                    <div class="demo-carousel">
                        <img :src="item.imgUrl" alt="">
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
        <!-- 新闻动态 -->
        <div class="news">
            <div class='index-title first-section'>
                <span class="en">NEWS <br/> INFORMATION</span>
                新闻动态
            </div>
            <div v-for='(item,index) in news' :key='index' class="news-item">
                <div class="news-left">{{item.date}}</div>
                <div class="news-middle">
                    <div class="news-title" @click='newsDetail(item)'>{{item.title}}</div>
                    <div>{{item.abstract}}</div>
                </div>
                <div class="news-right">
                    <img :src="item.imgUrl" alt="">
                </div>
            </div>
        </div>
        <!-- 知识园地 -->
        <div class="knowledge">
            <div class='index-title'>
                <span class="en">KNOWLEDGE FIELD</span>
                知识园地
            </div>
            <Carousel autoplay v-model="value3" loop arrow='never'>
                <CarouselItem v-for="(item,index) in knowledges" class="carousel" :key="index" @click.native='knowledgeDetail(item)'>
                    <div class="demo-carousel">
                        <img :src="item.imgUrl" alt="">
                        <div class="carousel-title">{{item.title}}</div>
                    </div>
                </CarouselItem>
            </Carousel>

        </div>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </section>
</template>
<script>
import BlockShow from 'base/blockShow'
import global from 'assets/js/global'
export default {
    components: {
        BlockShow
    },
    data() {
        return {
            value: 1,
            value1: 1,
            value2: 1,
            value3: 1,
            spinShow: false, // 是否加载中
            carousels: [], // 轮播图
            products: [], // 产品展示
            honors: [], // 荣誉资质
            knowledges: [], // 知识园地
            news: [], // 最新资讯
            // 公司简介
            introduction: {

            }
        }
    },
    methods: {
        // 获取轮播图
        getCarousels() {
            this.carousels = [];
            this.$http.home.getCarousel().then(res => {
                let { success, data, msg } = res;
                if (success) {
                    if (data.length) {
                        this.carousels = data;
                    }
                } else {
                    this.$Message.warning('轮播图数据获取失败，原因： ' + msg);
                }
            })
        },
        // 获取 剩余功能展示项
        getIndex() {
            this.products = [];
            this.honors = [];
            this.knowledges = [];
            this.news = [];
            this.introduction = {};
            this.spinShow = true;
            this.$http.home.getIndex().then(res => {
                let { success, data, msg } = res;
                this.spinShow = false;
                if (success) {
                    if (typeof data === 'object' && Object.keys(data).length) {
                        this.products = data.productType;
                        this.honors = data.honorList;
                        this.knowledges = data.knowledges;
                        this.news = data.newsList;
                        this.introduction = data.introduction;
                    }
                } else {
                    this.$Message.warning('轮播图数据获取失败，原因： ' + msg);
                }
            })
        },
        // 跳转到产品中心
        productMore() {
            this.$router.push({
                name: 'product',
                params: {
                    id: this.products[0].id
                }
            })
        },
        // 跳转到当前产品的详情
        productDetail(item) {
            console.log(item);
        },
        knowledgeDetail(item) {
            console.log(item)
            this.$router.push({
                name: 'knowledgeDetail',
                params: {
                    id: item.id
                }
            })
        },
        newsDetail(item) {
            console.log(item)
            this.$router.push({
                name: 'newsDetail',
                params: {
                    param: item
                }
            })
        },
        about() {
            this.$router.push({
                path: '/about/abstract'
            })
        }
    },
    mounted() {
        this.getCarousels();
        this.getIndex();
    }
}
</script>
<style lang="less" scoped>
@media screen and (max-width:375px) {
    .demo-carousel {
        img {
            height: 300px;
            width: 100%;
        }
    }
}

@media screen and (min-width: 376px) and (max-width: 767px) {
    .demo-carousel {
        img {
            height: 400px;
            width: 100%;
        }
    }
}

@media screen and (min-width: 768px) {
    .index-title {
        color: #666666;
        font-size: 30px;
        line-height: 1.4;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 30px;
        .en {
            font-size: 40px;
            font-family: Impact;
            color: #338de9;
            display: block;
        }
    }
    .introduction {
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        background: url(../../../static/img/img-55.png) no-repeat;
        color: #fff;
        margin-top: 10px;
        .product-title {
            color: #fff;
        }
        .left-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            width: 50%;
            .left-img {
                width: 100%;
                img {
                    width: 100%;
                    height: 400px;
                }
            }
        }
        .right-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            width: 50%;
            .forward {
                background: url(../../../static/img/img-70.png) no-repeat;
                width: 50px;
                height: 50px;
                display: block;
                margin-top: 30px;
                &:hover {
                    background: url(../../../static/img/img-59.png) no-repeat;
                }
            }
        }
    }
    .honor {
        display: flex;
        flex-direction: column;
    }
    .news {
        display: flex;
        flex-flow: row wrap;
        padding: 10px 20px;
        background: url(../../../static/img/img-62.png) no-repeat;
        .first-section {
            width: 920px;
        }
        .news-item {
            display: flex;
            box-sizing: border-box;
            flex-direction: row; // width: 1200px;
            margin: 20px;
            .news-left {
                width: 200px;
                height: 400px;
            }
            .news-middle {
                width: 300px;
                height: 400px;
                .news-title {
                    cursor: pointer;
                    &:hover {
                        color: #337ab7;
                    }
                }
            }
            .news-right {
                width: 400px;
                img {
                    width: 400px;
                    height: 400px;
                }
            }
        }
    }
    .more {
        cursor: pointer;
        display: inline-block;
        padding: 5px 40px;
        background: #c3bcbc;
        border-radius: 2px;
        transition: all .2s ease-in-out;
        &:hover {
            background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%);
            color: #fff;
        }
    }
    .demo-carousel {
        position: relative;
        cursor: pointer;
        .carousel-title {
            position: absolute;
            bottom: 8px;
            width: 100%;
            background: #666;
            opacity: .5;
            color: #fff;
            &:hover {
                background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%);
                color: #fff;
                opacity: 1;
                filter: brightness(1.2);
            }
        }
        img {
            height: 600px;
            width: 100%;
        }
    }
}
</style>


