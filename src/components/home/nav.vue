<template>
    <Affix style="z-index:9999;">
        <!-- 导航栏 -->
        <Menu mode="horizontal" :theme="theme" @on-select='enterPro' active-name="home">
            <div v-if="isGiantScreen">
                <MenuItem name="home">
                <Icon type="home"></Icon>
                <span class="menu-title">首页</span>
                </MenuItem>
                <MenuItem name="shop">
                <Icon type="ribbon-a"></Icon>
                <span class="menu-title">专卖店形象</span>
                </MenuItem>
                <MenuItem name="join">
                <Icon type="fireball"></Icon>
                <span class="menu-title">招商加盟</span>
                </MenuItem>
                <MenuItem name="about">
                <Icon type="ios-people"></Icon>
                <span class="menu-title">关于我们</span>
                </MenuItem>
                <MenuItem name="contact">
                <Icon type="ios-telephone"></Icon>
                <span class="menu-title">联系我们</span>
                </MenuItem>
            </div>
            <MenuItem v-else :name="singleOption" class="right-select">
            <Dropdown @on-click='tellMe' trigger='hover'>
                <a href="javascript:void(0)">
                    下拉
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem name='home'>
                        <Icon type="home"></Icon>
                        首页
                    </DropdownItem>
                    <DropdownItem name='shop'>
                        <Icon type="ribbon-a"></Icon>
                        专卖店形象
                    </DropdownItem>
                    <DropdownItem name='join'>
                        <Icon type="fireball"></Icon>
                        招商加盟
                    </DropdownItem>
                    <DropdownItem name='contact'>
                        <Icon type="ios-telephone"></Icon>
                        联系我们
                    </DropdownItem>
                    <DropdownItem name='about'>
                        <Icon type="ios-people"></Icon>
                        关于我们</span>
                    </DropdownItem>
                    <DropdownItem name='news'>
                        <Icon type="social-twitter"></Icon>
                        最新资讯
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </MenuItem>
            <MenuItem name="news">
            <Icon type="social-twitter"></Icon>
            <span class="menu-title">最新资讯</span>
            </MenuItem>
            <Submenu name="achievement">
                <template slot="title">
                    <Icon type="social-buffer"></Icon>
                    <span class="menu-title">工程业绩</span>
                </template>
                <MenuGroup title="区域">
                    <MenuItem :name="item.name" v-for="(item,index) in projects" :key="index">{{item.label}}</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="product">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    <span class="menu-title">产品中心</span>
                </template>
                <MenuGroup title="类别">
                    <MenuItem :name="item.name" v-for="(item,index) in productCenter" :key="index">{{item.label}}</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="about">
                <template slot="title">
                    <Icon type="university"></Icon>
                    <span class="menu-title">知识园地</span>
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="kownledge/product">产品知识</MenuItem>
                    <MenuItem name="kownledge/QA">问题解答</MenuItem>
                    <MenuItem name="kownledge/method">施工方法</MenuItem>
                </MenuGroup>
            </Submenu>

        </Menu>
    </Affix>
</template>
<style lang="less" scoped>
.right-select {
    position: absolute;
    right: -10px;
    top: 0px;
    margin-left: 2px; // width: 100px;
    a {
        color: #fff;
    }
}
</style>
<script>
import { Navs } from 'assets/js/mixin'
export default {
    mixins: [Navs],
    data() {
        return {
            theme: 'primary',
            singleOption: '',
            isGiantScreen: false
            // projects: []
        }
    },
    methods: {
        // 获取产品中心二级菜单
        getProducts() {
            this.$http.get('api/getProducts').then(res => {
                let { success, data, msg } = res;
                if (success) {
                    if (data.length) {
                        let productCenter = data.map(item => {
                            return {
                                label: item.label,
                                name: `${item.name}/${item.value}`,
                                value: item.value
                            }
                        })
                        this.SET_PRO_CENTER(productCenter);
                    } else {
                        this.$Message.warning('产品分类暂无数据');
                    }
                } else {
                    this.$Message.warning('获取产品分类失败,原因：' + msg);
                }
            })
        },
        // 跳转路由
        enterPro(item) {
            let arr = item.split('/');
            if (arr.length === 1) {
                this.$router.push({
                    path: `/${item}`
                });
            } else {
                if (arr[0] === 'product') {
                    this.SET_CURRENT_PRODUCT(arr[1]);
                } else if (arr[0] === 'project') {
                    this.SET_CURRENT_PROJECT(arr[1]);
                }
                this.$router.push({
                    name: arr[0],
                    params: {
                        id: arr[1]
                    }
                })
            }
        },
        // 获取工程业绩的耳机菜单
        getProjects() {
            this.$http.get('api/getProjects').then(res => {
                let { success, data, msg } = res;
                if (success) {
                    if (data.length) {
                        let projects = data.map(item => {
                            return {
                                label: item.label,
                                value: item.value,
                                name: `${item.name}/${item.value}`
                            }
                        })
                        this.SET_PROJECTS(projects);
                    }
                } else {
                    this.$Message.warning('获取工程业绩菜单失败');
                }
            })
        },
        tellMe(name) {
            this.enterPro(name);
        }
    },
    mounted() {
        let w = document.documentElement.clientWidth;
        w <= 768 ? this.isGiantScreen = false : this.isGiantScreen = true;
        this.getProducts();
        this.getProjects()
    }
}
</script>
