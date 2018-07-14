<template>
    <section class="wrap-container">
        <!-- 轮播图 -->
        <Carousel autoplay v-model="value2" loop arrow='never'>
            <CarouselItem v-for="(item,index) in carousels" class="carousel" :key="index">
                <div class="demo-carousel">
                    <img :src="item" alt="">
                </div>
            </CarouselItem>
        </Carousel>
        <!-- 块级介绍 -->
        <ul class="block-ul">
            <li class="tag" v-for="(item,index) in professional" :key="index">
                <img :src="item.img" alt="">
                <div class="tag-information">
                    <h2>{{item.title}}</h2>
                    <div class="tag-describe">
                        <p>{{item.describe[0]}}</p>
                        <p>{{item.describe[1]}}</p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="text-image">
            <span class="title">xxxx专注于高品质的墙纸</span>
            <div class="content-body">
                <!-- 图片展示  -->
                <div class="content-left">
                    <img class="animated bounceInLeft" src="../../assets/img/img1.jpg" alt="">
                </div>
                <!-- 两列两横简介  -->
                <div class="col-content">
                    <span class="sub-title"> 先进的设计理念</span>
                    <p name='idea'>
                        利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布 我们充分利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布 我们充分利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布我们充分利用色彩颁布
                    </p>
                </div>
            </div>
        </div>
        <!-- 成功案例 -->
        <div class="case-exhibition">
            <span class="title">我们的成功案例</span>
            <h3>始终以专业的设计视角和前沿的开发技术为基础</h3>
            <block-show :exhibitions='successCase'></block-show>
        </div>
        <listen-require :standards='standards' @popupForm='popupForm'></listen-require>
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
            professional: [],// 四个专业介绍
            successCase: [],//成功案例
            blockInfo: []
        }
    },
    methods: {
        // 成功案例
        getSuccessCase() {
            this.successCase = [];
            this.$http.get('api/getSuccessCase').then(res => {
                let { success, data, msg } = res;
                if (success) {
                    if (data.length) {
                        this.successCase = data.map(item => {
                            return {
                                title: item.title,
                                describe: item.describe,
                                img: item.img
                            }
                        })
                        console.log(this.successCase)
                    } else {
                        this.$Message.warning('工程进度分类暂无数据');
                    }
                } else {
                    this.$Message.warning('获取工程进度分类失败,原因：' + msg);
                }
            })
        },
        // 四个专业介绍
        getProfessional() {
            this.professional = [];
            this.$http.get('api/getProfessional').then(res => {
                let { success, data, msg } = res;
                if (success) {
                    if (data.length) {
                        this.professional = data;
                    }
                }
            })
        },

        getBlockDescribe() {
            this.$http.get('api/GetBlockInfo').then(res => {

            })
        },
        popupForm() {
            this.$emit('popupForm');
        }
    },
    mounted() {
        this.getProfessional();
        this.getSuccessCase();
    }
}
</script>
<style lang="less" scoped>
@media screen and (max-width:375px) {
    .demo-carousel {
        img {
            height: 300px;
            width: 300px;
        }
    }
    .text-image {
        .content-body {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            margin: 5px 0;
            .content-left {
                img {
                    height: 200px;
                    width: 100%;
                }
            }
            .col-content {
                margin: 10px;
                overflow: hidden;
                flex: 2;
                display: flex;
                flex-direction: column;
                .sub-title {
                    text-align: center;
                    font-size: 20px;
                    font-weight: bold;
                }
                p[name='idea'] {
                    width: 100%;
                    height: 100%;
                    font-size: 14px;
                    text-align: left;
                    overflow: hidden;
                }
            }
        }
    }
}

@media screen and (min-width: 376px) and (max-width: 767px) {
    .demo-carousel {
        img {
            height: 240px;
            width: 100%;
        }
    }
    .text-image {
        .content-body {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            margin: 5px 0;
            .content-left {
                img {
                    height: 200px;
                    width: 100%;
                }
            }
            .col-content {
                margin: 10px;
                overflow: hidden;
                flex: 2;
                display: flex;
                flex-direction: column;
                .sub-title {
                    text-align: center;
                    font-size: 20px;
                    font-weight: bold;
                }
                p[name='idea'] {
                    width: 100%;
                    height: 100%;
                    font-size: 14px;
                    text-align: left;
                    overflow: hidden;
                }
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .demo-carousel {
        img {
            height: 300px;
            width: 100%;
        }
    }
    .text-image {
        .content-body {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            .content-left {
                flex: 1;
                img {
                    width: 100%;
                    height: 300px;
                }
            }
            .col-content {
                margin: 10px;
                overflow: hidden;
                flex: 2;
                display: flex;
                flex-direction: column;
                .sub-title {
                    text-align: center;
                    font-size: 20px;
                    font-weight: bold;
                }
                p[name='idea'] {
                    width: 100%;
                    height: 100%;
                    font-size: 14px;
                    text-align: left;
                    overflow: hidden;
                }
            }
        }
    }
}

.wrap-container {
    position: relative; // margin-top: 40px;
    .carousel {
        width: 100%;
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
        padding: 10px 0px;
    }
}
</style>


