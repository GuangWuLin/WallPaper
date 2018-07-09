<template>
    <section>
        <single-bg></single-bg>
        <div class="pro-select">
            <RadioGroup v-model="project_area" @on-change='radioChange'>
                <Radio :label="item.label" v-for="(item,index) in projects" :value='item.value' :key="index"></Radio>
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
            currentProjects: []
        }
    },
    watch: {
        currentProject(val) {
            let current = this.projects.find(item => item.value == val);
            this.project_area = current.label;
        }
    },
    methods: {
        getAllPictures() {
            this.$http.get('api/getAllProjects').then(res => {
                let { success, msg, data } = res;
                if (success) {
                    if (data.length) {
                        this.currentProjects = data.map(item => {
                            return {
                                title: item.title,
                                img: item.img,
                                id: item.id
                            }
                        })
                        console.log(this.currentProjects)
                    }
                } else {
                    this.$Message.warning('当前区域工程业绩查询失败,原因: ' + msg);
                }
            })
        },
        // 工程业绩点击某一个图片
        currentClicked(item) {
            // console.log(item)
            this.$router.push({
                name: 'projectDetail',
                params: {
                    id: item.id
                }
            })
        },
        radioChange(val) {
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
    activated() {
        console.log(this.$route)
        this.getAllPictures();
    }
}
</script>
<style lang="less" scoped>
.pro-select {
    // display: flex;
    // justify-content: center;
    margin: 20px;
}
</style>
