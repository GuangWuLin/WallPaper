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
        getHonor(item) {
            this.$http.get('api/getAllProjects').then(res => {
                let { success, msg, data } = res;
                if (success) {
                    if (data.length) {
                        this.pictures = data.map(item => {
                            return {
                                title: item.title,
                                img: item.img,
                                id: item.id
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
.pic-container {
    width: 100%;
    background: #fff;
    padding: 0 20px;
    margin: 10px;
    display: flex;
    flex-flow: row wrap;
    .pic-item {
        width: 200px;
        height: 200px;
        margin: 10px;
        .pic {
            overflow: hidden;
            position: relative;
            height: 100%;
            a:first-child {
                display: inline-block;
                width: 100%;
                height: 100%;
            }
            a:last-child {
                display: inline-block;
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: 1;
                font-size-adjust: 14px;
                color: #fff;
                background-color: rgba(0, 0, 0, .4);
                line-height: 30px;
                width: 100%;
                height: 30px;
            }
            img {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                filter: blur(2px);
                transition: all .7s linear;
            }
            img:hover {
                transform: scale(1.1);
                filter: blur(0);
            }
        }
    }
    &::after {
        content: '';
        display: inline;
        clear: both;
    }
}
</style>

