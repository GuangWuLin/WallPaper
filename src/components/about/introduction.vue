<template>
    <!-- 公司简介 -->
    <div class="who">
        <img class="who-pic" v-lazy="introduction.imgUrl" alt="">
        <div class="who-describle">
            <span class="who-sub-title">Who We Are</span>
            <p>
                {{introduction.describe}}
            </p>
        </div>
    </div>
</template>
<style lang="less" scoped>
@media screen and (max-width:767px) {
    .who {
        width: 100%;
        .who-pic {
            width: 100%;
            height: 200px; // img {
            //     height: 200px;
            //     width: 100%;
            // }
        }
        .who-describle {
            .who-sub-title {
                font-size: 30px;
                font-weight: bold;
                display: inline-block;
                width: 100%;
                text-align: center;
            }
            p {
                padding: 10px;
                margin: 10px;
                font-size: 14px;
                line-height: 30px;
                text-align: left;
                &::selection {
                    color: orange;
                }
            }
        }
    }
}

@media screen and (min-width:768px) {
    .who {
        // width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .who-pic {
            width: 100%;
            height: 200px; // flex: 1;
            padding: 10px;
            margin-top: 100px; // img {
            //     width: 100%;
            // }
        }
        .who-describle {
            // flex: 1;
            span {
                font-size: 30px;
                font-weight: bold;
                display: inline-block;
                width: 100%;
                margin-bottom: 20px;
                text-align: left;
            }
            p {
                padding: 10px;
                margin: 10px;
                font-size: 14px;
                line-height: 30px;
                text-align: left;
            }
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            introduction: {
                imgUrl: '',
                describe: '',
                id: ''
            }
        }
    },
    methods: {
        getCompanyInfo() {
            this.introduction = {};
            this.$http.about.introduction().then(res => {
                let { success, data, msg } = res;
                if (success) {
                    if (typeof data === 'object' && Object.keys(data).length) {
                        this.introduction = data;
                    }
                } else {
                    this.$Message.warning('公司简介信息获取失败，原因： ' + msg);
                }
            })
        }
    },
    mounted() {
        this.getCompanyInfo();
    }
}
</script>

