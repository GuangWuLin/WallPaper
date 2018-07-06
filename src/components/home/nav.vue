<template>
    <Affix style="z-index:9999;">
        <!-- 导航栏 -->
        <Menu mode="horizontal" :theme="theme" @on-select='enterPro' active-name="home">
            <MenuItem name="home">
            <Icon type="home"></Icon>
            首页
            </MenuItem>
            <MenuItem name="news">
            <Icon type="social-twitter"></Icon>
            最新资讯
            </MenuItem>
            <Submenu name="achievement">
                <template slot="title">
                    <Icon type="social-buffer"></Icon>
                    工程业绩
                </template>
                <MenuGroup title="区域">
                    <MenuItem :name="item.name" v-for="(item,index) in achievements" :key="index">{{item.title}}</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="product">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    产品中心
                </template>
                <MenuGroup title="使用">
                    <MenuItem :name="item.name" v-for="(item,index) in productCenter" :key="index">{{item.title}}</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="about">
                <template slot="title">
                    <Icon type="university"></Icon>
                    知识园地
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="kownledge/product">产品知识</MenuItem>
                    <MenuItem name="kownledge/QA">问题解答</MenuItem>
                    <MenuItem name="kownledge/method">施工方法</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="shop">
            <Icon type="ribbon-a"></Icon>
            专卖店形象
            </MenuItem>
            <MenuItem name="join">
            <Icon type="fireball"></Icon>
            招商加盟
            </MenuItem>
            <MenuItem name="contact">
            <Icon type="ios-telephone"></Icon>
            联系我们
            </MenuItem>
        </Menu>
    </Affix>
</template>
<script>
import { productCate } from 'assets/js/mixin'
export default {
    mixins: [productCate],
    data() {
        return {
            theme: 'primary',
            achievements: [
                {
                    title: '四川',
                    name: 'project/sc'
                },
                {
                    title: '重庆',
                    name: 'projcet/cq'
                }
            ]
        }
    },
    methods: {
        testGet() {
            let productCenter = [];
            this.$http.get('api/GetInfo').then(res => {
                let { success, data, msg } = res;
                if (success) {
                    if (data.length) {
                        data.forEach(item => {
                            productCenter.push({
                                name: `${item.category}/${item.name}`,
                                title: item.title,
                                value: item.name
                            });
                        });
                        this.SET_PRO_CENTER(productCenter);
                    } else {
                        this.$Message.warning('产品分类暂无数据');
                    }
                } else {
                    this.$Message.warning('获取产品分类失败,原因：' + msg);
                }
            })
        },
        enterPro(item) {
            if (item === 'home') {
                this.$router.push({
                    path: '/'
                });
            } else {
                let arr = item.split('/');
                if (arr.length === 1) {
                    this.$router.push({
                        path: `/${item}`
                    });
                } else {
                    this.$router.push({
                        path: `/${arr[0]}`,
                        query: {
                            category: `${arr[1]}`
                        }
                    });
                    this.SET_PRO_CATEGORY(arr[1]);
                }
            }
        }
    },
    mounted() {
        this.testGet();
    }
}
</script>
