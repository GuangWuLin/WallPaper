<template>
    <section class="project-content">
        <single-bg></single-bg>
        <div class="pro-select">
            <RadioGroup v-model="project_area" @on-change='radioChange'>
                <Radio :label="item.label" v-for="(item,index) in projects" :value='item.value' :key="index">
                    <span class="pro-span">
                        {{item.label}}
                    </span>
                </Radio>
            </RadioGroup>
            <!-- 图片列表 -->
            <block-pic :pictures='currentProjects' @currentClicked='currentClicked'></block-pic>
        </div>
    </section>
</template>
<script>
import SingleBg from 'base/singleBg'
import { Navs } from 'assets/js/mixin'
import BlockPic from 'base/picture'
export default {
    mixins: [Navs],
    data() {
        return {
            project_area: '',
            currentCategory: '',
            currentProjects: []
        }
    },
    watch: {
        currentProject(val) {
            let current = this.projects.find(item => item.value == val);
            this.project_area = current.label;
            this.currentCategory = val;
            this.getAllPictures();
        }
    },
    methods: {
        getAllPictures() {
            let param = {
                area: this.currentCategory
            }
            this.currentProjects = [];
            this.$http.projects.projectList(param).then(res => {
                let { success, msg, data } = res;
                if (success) {
                    if (data.length) {
                        this.currentProjects = data.map(item => {
                            return {
                                title: item.title,
                                img: item.imgUrl,
                                id: item.id
                            }
                        });
                    }
                } else {
                    this.$Message.warning('当前区域工程业绩查询失败,原因: ' + msg);
                }
            })
        },
        // 工程业绩点击某一个图片
        currentClicked(item) {
            this.$router.push({
                name: 'projectDetail',
                params: {
                    id: item.id
                }
            })
        },
        radioChange(val) {
            console.log(val);
            let temp = this.projects.find(item => item.label === val);
            this.currentCategory = temp.value;
            this.getAllPictures();
        }
    },
    components: {
        SingleBg,
        BlockPic
    },
    mounted() {
        this.getAllPictures();
    },
    mounted() {
        console.log(this.$route);
        // id 就是 当前案的 category
        this.currentCategory = this.$route.params.id;
        // 筛选 category
        let temp = this.projects.find(item => item.value === this.currentCategory);
        this.project_area = temp.label;
        this.getAllPictures();
    }
}
</script>
<style lang="less" scoped>
@media screen and (min-width:768px) {
    .project-content {
        margin-bottom: 100px;
    }
}


.pro-select {
    // display: flex;
    // justify-content: center;
    margin: 20px;
}
</style>
