<template>
    <section class="exhibition">
        <ul>
            <li v-for="(item,index) in exhibitions" :key="index">
                <div class="hvr-bounce-to-right exhition-bg" :href='item.title'></div>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    props: ['exhibitions'],
    data() {
        return {
            // exhibitions: []
        }
    }
}
</script>

<style lang="less" scoped>
.exhibition {
    width: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    ul {
        width: 200%;
        overflow: scroll;
        list-style: none;
        position: relative;
        &::after {
            content: '';
            display: inline;
            clear: both;
        }
        li {
            float: left;
            margin: 10px;
            .exhition-bg {
                width: 200px;
                height: 200px;
                background: url(../assets/img/img1.jpg);
            }
        }
    }
}

@keyframes toleft {
    from {
        transform: translate(0);
    }
    to {
        transform: translate(0, -20px);
    }
}
</style>

