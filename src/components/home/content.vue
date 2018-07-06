<template>
    <section class="wrap-container">
        <!-- 轮播图 -->
        <Carousel autoplay v-model="value2" loop arrow='never'>
            <CarouselItem v-for="(item,index) in carousels" class="carousel" :key="index">
                <div class="demo-carousel">
                    <img :src="item" style="width:100%;" height="300" alt="">
                </div>
            </CarouselItem>
        </Carousel>
        <!-- 块级介绍 -->
        <ul class="block-ul">
            <li class="tag" v-for="(item,index) in blocks" :key="index">
                <img :src="item.img" alt="">
                <div class="tag-information">
                    <h2>{{item.title}}</h2>
                    <div class="tag-describe">
                        <p>{{item.describe[0]}}</p>
                        <p>{{item.describe[1]}}</p>
                        <p>{{item.describe[2]}}</p>
                        <p>{{item.describe[3]}}</p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="text-image">
            <span class="title">xxxx专注于高品质的墙纸</span>
            <Row :gutter="16" class="content-body">
                <!-- 图片展示  -->
                <Col span="12">
                <img class="animated bounceInLeft" style="height:300px;width:100%;" src="../../assets/img/img1.jpg" alt="">
                </Col>
                <!-- 两列两横简介  -->
                <Col span="12">
                <div class="col-content" style="height:100%;width:100%;">
                    <h2> 先进的设计理念</h2>
                    <p name='idea'>
                        利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布 我们充分利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布 我们充分利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布
                    </p>
                </div>
                </Col>
            </Row>
        </div>
        <!-- 轮播图 -->
        <div class="case-exhibition">
            <span class="title">我们的成功案例</span>
            <h3>始终以专业的设计视角和前沿的开发技术为基础</h3>
            <block-show :exhibitions='blocks'></block-show>
        </div>

        <listen-require :standards='standards'></listen-require>
    </section>
</template>
<script>
import BlockShow from 'base/blockShow'
import global from 'assets/js/global'
import ListenRequire from 'components/home/listenRequire'
export default {
    components: {
        BlockShow,
        ListenRequire
    },
    data() {
        return {
            value2: 2,
            right_arrow: global.right_arrow,
            carousels: [global.img1, global.img2, global.img3, global.img4, global.img5],
            standards: ['技术创新', '团队协作', '品质坚持'],
            blocks: [],
            blockInfo: []
        }
    },
    methods: {
        getBlockInfo() {
            this.blocks = [];
            this.$http.get('api/GetCircleInfo').then(res => {
                let { success, data, msg } = res;
                if (success) {
                    if (data.length) {
                        data.forEach(item => {
                            this.blocks.push({
                                title: item.title,
                                describe: item.describe,
                                img: item.img
                            })
                        })
                    } else {
                        this.$Message.warning('工程进度分类暂无数据');
                    }
                } else {
                    this.$Message.warning('获取工程进度分类失败,原因：' + msg);
                }
            })
        },
        getBlock() {
            this.blocks = [];
            this.$http.get('api/GetBlock').then(res => {
                let { success, data, msg } = res;
                if (success) {
                    if (data.length) {
                        this.blocks = data;
                    }
                }
            })
        },
        getBlockDescribe() {
            this.$http.get('api/GetBlockInfo').then(res => {

            })
        }
    },
    mounted() {
        this.getBlockInfo();
        this.getBlockDescribe();
    }
}
</script>
<style lang="less" scoped>
.wrap-container {
    position: relative; // padding: 10px 40px;
    .carousel {
        width: 100%; // height: 300px;
        // line-height: 300px;
    }
    ul {
        list-style: none;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 10px 40px;
        li {
            float: left;
            margin: 10px auto;
            img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                transition: all .5s linear;
                &:hover {
                    transform: translate(0, -10px);
                    transition: all .5s linear;
                }
            }
        }
    }
    .text-image {
        padding: 10px 40px;
        .content-body {
            box-sizing: border-box;
            width: 100%;
            height: 300px;
            .col-content {
                margin: 20px;
                margin: 10px 0;
                h2 {
                    text-align: center;
                }
                p[name='idea'] {
                    font-size: 14px;
                    line-height: 24px;
                    text-align: left;
                }
            }
        }
    }
}
</style>


