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
                <!-- <div class="tag-information">
                                <Icon type="clipboard"></Icon>
                                <h2>{{item.title}}</h2>
                                <div class="tag-describe">
                                    <p>{{item.describe[0]}}</p>
                                    <p>{{item.describe[1]}}</p>
                                </div>
                            </div> -->
                <div class="tag-information">
                    <Icon :type="item.type" class="tag-icon"></Icon>
                </div>
            </li>
        </ul>
        <div class="text-image">
            <span class="title">专注于高品质的墙纸</span>
            <div class="content-body">
                <!-- 图片展示  -->
                <div class="content-left">
                    <img class="animated bounceInLeft" :src="idea.img" alt="">
                </div>
                <!-- 两列两横简介  -->
                <div class="col-content">
                    <span class="sub-title"> 先进的设计理念</span>
                    <p name='idea'>
                        {{idea.describe}}
                    </p>
                </div>
            </div>
        </div>
        <!-- 成功案例 -->
        <div class="case-exhibition">
            <span class="title">我们的成功案例</span>
            <h3>始终以专业的设计视角和前沿的开发技术为基础</h3>
            <block-show :exhibitions='successCase' @toDetail='toDetail'></block-show>
        </div>
        <listen-require :requires='requires' @popupForm='popupForm'></listen-require>
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
            idea: {
                title: '',
                img: ''
            },
            right_arrow: global.right_arrow,
            carousels: [],
            requires: {
                about: '',
                describe: '',
                advantage: []
            },
            professional: [
                {
                    title: '创意墙纸设计',
                    describe: ['无缝墙布', '提花挂画'],
                    type: 'clipboard'
                },
                {
                    title: '网络整合营销',
                    describe: ['社交媒体推广', 'PPC广告多平台投放'],
                    type: 'clipboard'
                },
                {
                    title: '原料清洁健康',
                    describe: ['环保无异味', '无甲醛不挥发'],
                    type: 'clipboard'
                },
                {
                    title: '多元客户不单一',
                    describe: ['企业室内墙纸设计', '住宅壁挂规划'],
                    type: 'clipboard'
                }
            ],// 四个专业介绍
            successCase: [],//成功案例
            blockInfo: []
        }
    },
    methods: {
        // 成功案例
        getSuccessCase() {
            this.successCase = [];
            this.$http.home.list().then(res => {
                let { success, data, msg } = res;
                if (success) {
                    if (data.length) {
                        this.successCase = data.map(item => {
                            return {
                                ...item,
                                img: item.imgUrl
                            }
                        });
                        // 此时的 categroy 就是当前案例的分类，id就是它的id
                    } else {
                        this.$Message.warning('工程进度分类暂无数据');
                    }
                } else {
                    this.$Message.warning('获取工程进度分类失败,原因：' + msg);
                }
            })
        },
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
        // 公司理念
        getCompanyIdea() {
            this.$http.home.idea().then(res => {
                let { success, data, msg } = res;
                if (success) {
                    if (typeof data === 'object' && Object.keys(data).length) {
                        this.idea.describe = data.describe;
                        this.idea.img = data.imgUrl;
                    }
                } else {
                    this.$Message.warning('公司理念信息获取失败，原因： ' + msg);
                }
            })
        },
        // 倾听客户的需求
        getAdvantage() {
            this.$http.home.getAdvantage().then(res => {
                let { success, data, msg } = res;
                if (success) {
                    if (typeof data === 'object' && Object.keys(data).length) {
                        this.requires.describe = data.describe;
                        this.requires.about = data.about;
                        this.requires.advantage = [data.advantage1, data.advantage2, data.advantage3];
                    }
                } else {
                    this.$Message.warning('公司简介获取失败，原因： ' + msg);
                }
            })
        },
        popupForm() {
            this.$emit('popupForm');
        },
        toDetail(val) {
            this.$router.push({
                name: 'product',
                params: {
                    // id 是当前 案例的 分类
                    id: val.category,
                    // val 里面的 id 是当前案例的id
                    item: val
                }
            })
        }
    },
    mounted() {
        // this.getProfessional();
        this.getSuccessCase();
        this.getCarousels();
        this.getCompanyIdea();
        this.getAdvantage();
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
            margin: 10px auto;
            .tag-information {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background: #fff;
                margin: 0 auto;
                transition: all 0.2s linear;
                .tag-icon {
                    font-size: 50px;
                    line-height: 100px;
                    color: #2d8cf0;
                    transition: all .8s ease-in-out;
                }
                &:hover {
                    transform: translate(0, -10px);
                }
                &:nth-child(2),
                &:nth-child(4) {
                    background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%) !important;
                }
            }
        }
    }
    .text-image {
        padding: 10px 0px;
    }
}
</style>


