<template>
    <section>
        <section class="footer-container">
            <div v-if="footers[0].size==='home'">
                <span class="title-header">专业6步，步步为营</span>
                <span class="title" style="font-size: 18px;color: #969696;">把一件事做到极致，用工匠精神激励前行</span>
            </div>
            <div class="footer-content">
                <div v-for="(item,index) in footers" :key="index" class="foot-item">
                    <div class="pro-step">
                        <Icon :type="item.type" class="pro-icon"></Icon>
                    </div>
                    <span :style="{fontSize:item.size==='home'?'18px':'30px'}">{{item.title}}</span>
                    <span :style="{fontSize:item.size==='home'?'18px':'14px'}">{{item.en}}</span>
                </div>
            </div>
        </section>
    </section>
</template>
<style lang="less" scoped>
.footer-container {
    width: 100%;
    height: 400px;
    margin-top: 10px;
    background-image: url(../../../static/img/bg-app.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% -86px;
    padding: 10px 0;
    .title-header {
        display: block;
        margin-top: 10px;
    }
    .title-header {
        font-size: 30px;
        font-weight: bold;
    }
    .footer-content {
        // margin-top: 40px;
        background: transparent;
        height: 300px;
        display: flex;
        flex-flow: row nowrap;
        .foot-item {
            // flex: 0 0 15%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 10px auto;
            .pro-step {
                width: 100px;
                height: 100px;
                box-sizing: border-box;
                border-radius: 50%;
                background: #fff;
                margin: 0 auto;
                transition: all 0.2s linear;
                .pro-icon {
                    font-size: 50px;
                    line-height: 100px;
                    color: #2d8cf0;
                    transition: all .8s ease-in-out;
                    &:hover {
                        transform: rotate(360deg);
                    }
                }
            }
            span {
                display: inline-block; // font-size: 18px;
                margin-top: 10px;
            }
        } // ul {
        //     list-style: none;
        //     padding: 20px;
        //     display: flex;
        //     flex-direction: row;
        //     justify-content: space-around;
        //     li {
        //         float: left;
        //         margin: 10px auto;
        //         display: flex;
        //         flex-direction: column;
        //         justify-content: center;
        //         .pro-step {
        //             width: 100px;
        //             height: 100px;
        //             box-sizing: border-box;
        //             border-radius: 50%;
        //             background: #fff;
        //             margin: 0 auto;
        //             transition: all 0.2s linear;
        //             .pro-icon {
        //                 font-size: 50px;
        //                 line-height: 100px;
        //                 color: #2d8cf0;
        //                 transition: all .8s ease-in-out;
        //                 &:hover {
        //                     transform: rotate(360deg);
        //                 }
        //             }
        //         }
        //         span {
        //             display: inline-block; // font-size: 18px;
        //             margin-top: 10px;
        //         }
        //     }
        // }
    }
}
</style>
<script>
export default {
    props: ['footers'],
    data() {
        return {

        }
    }
}
</script>


