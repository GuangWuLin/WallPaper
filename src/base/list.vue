<template>
    <!-- 列表显示 -->
    <section class="list-container">
        <!-- 单个 cell 的列表 -->
        <div class="list-card" v-for='(item,index) in listData' :key="index" @click="toDetail(item)">
            <!-- 左侧图片 -->
            <img src="../../static/img/32.jpeg" alt="">
            <!-- 右侧描述 -->
            <div class="list-card-right">
                <span class="list-title">{{item.title}}</span>
                <span class="list-sub-title">{{item.date}}</span>
                <p>
                    {{item.describe}}
                </p>
            </div>
        </div>
    </section>
</template>
<style lang="less" scoped>
@media screen and (min-width:768px) {
    .list-container {
        margin-bottom: 100px;
    }
}

.list-container {
    .list-card {
        margin: 10px 20px;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border: 1px solid rgba(0, 180, 220, 0.5);
        img {
            // flex: 1;
            width: 200px;
            height: 200px;
            perspective: 1px;
            transition: all 1s;
            display: inline-block;
        }
        .list-card-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin-left: 10px;
            text-align: left;
            .list-title,
            .list-sub-title {
                margin: 10px;
            }
            .list-title {
                font-size: 20px;
                font-weight: bold;
            }
            .list-sub-title {
                font-size: 16px;
            }
            p {
                word-break: break-all;
                text-overflow: ellipsis;
                display: -webkit-box;
                /** 对象作为伸缩盒子模型显示 **/
                -webkit-box-orient: vertical;
                /** 设置或检索伸缩盒对象的子元素的排列方式 **/
                -webkit-line-clamp: 2;
                /** 显示的行数 **/
                overflow: hidden;
                /** 隐藏超出的内容 **/
            }
        }
    }
    .list-card:hover {
        cursor: pointer;
        border: 2px solid rgba(0, 180, 220, 0.5);
        animation: shine 1s linear 0s infinite alternate;
    }
    .list-card:hover img {
        transform: rotateY(180deg);
    }
}

@keyframes shine {
    from {
        -webkit-box-shadow: 0 0 18px rgba(72, 106, 170, 0.5);
    }
    to {
        -webkit-box-shadow: 0 0 18px rgba(72, 106, 170, 1.0), 0 0 30px rgba(0, 140, 255, 1.0);
    }
}
</style>

<script>
export default {
    data() {
        return {
            listData: [
                {
                    title: 'HelloKitty',
                    date: '2017-09-01',
                    describe: '青青子衿悠悠我心但为君故沉吟至今 青青子衿悠悠我心但为君故沉吟至今 青青子衿悠悠我心但为君故沉吟至今 青青子衿悠悠我心但为君故沉吟至今'
                },
                {
                    title: 'HelloKitty',
                    date: '2017-09-01',
                    describe: '青青子衿悠悠我心但为君故沉吟至今 青青子衿悠悠我心但为君故沉吟至今 青青子衿悠悠我心但为君故沉吟至今 青青子衿悠悠我心但为君故沉吟至今'
                },
                {
                    title: 'HelloKitty',
                    date: '2017-09-01',
                    describe: '青青子衿悠悠我心但为君故沉吟至今 青青子衿悠悠我心但为君故沉吟至今 青青子衿悠悠我心但为君故沉吟至今 青青子衿悠悠我心但为君故沉吟至今'
                },
                {
                    title: 'HelloKitty',
                    date: '2017-09-01',
                    describe: '青青子衿悠悠我心但为君故沉吟至今 青青子衿悠悠我心但为君故沉吟至今 青青子衿悠悠我心但为君故沉吟至今 青青子衿悠悠我心但为君故沉吟至今'
                }
            ]
        }
    },
    methods: {
        toDetail(item) {
            this.$emit('toDetail', item);
        }
    }
}
</script>
