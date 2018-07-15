<template>
    <picture-modal :pictures='pictures'>
    </picture-modal>
</template>
<script>
import PictureModal from 'base/pictureModal'
export default {
    components: {
        PictureModal
    },
    data() {
        return {
            pictures: []
        }
    },
    methods: {
        getHonor() {
            this.pictures = [];
            this.$http.about.getHonor().then(res => {
                let { success, msg, data } = res;
                if (success) {
                    if (data.length) {
                        this.pictures = data.map(item => {
                            return {
                                title: item.title,
                                img: item.imgUrl
                            }
                        });
                    }
                } else {
                    this.$Message.warning('当前区域工程业绩查询失败,原因: ' + msg);
                }
            })
        }
    },
    mounted() {
        this.getHonor();
    }
}
</script>

<style lang="less" scoped>

</style>

