<template>
    <!-- 公司简介 -->
    <div class="who">
        <div class="who-pic">
            <img src="../../../static/img/who-img.jpg" alt="">
        </div>
        <div class="who-describle">
            <span class="who-sub-title">Who We Are</span>
            <p>
                我们倾听客户需求，以最前沿的设计理念，赋予全新的形象我们倾听客户需求我们倾听客户需求，以最前沿的设计理念，赋予全新的形象我们倾听客户需求我们倾听客户需求，以最前沿的设计理念，赋予全新的形象我们倾听客户需求我们倾听客户需求，以最前沿的设计理念，赋予全新的形象我们倾听客户需求我们倾听客户需求，以最前沿的设计理念，赋予全新的形象我们倾听客户需求我们倾听客户需求，以最前沿的设计理念，赋予全新的形象我们倾听客户需求，以最前沿的设计理念，赋予全新的形象我们倾听客户需求，以最前沿的设计理念，赋予全新的形象我们倾听客户需求，以最前沿的设计理念，赋予全新的形象我们倾听客户需求，以最前沿的设计理念，赋予全新的形象我们倾听客户需求，以最前沿的设计理念，赋予全新的形象我们倾听客户需求，以最前沿的设计理念，赋予全新的形象我们倾听客户需求，以最前沿的设计理念，赋予全新的形象我们倾听客户需求，以最前沿的设计理念，赋予全新的形象我们倾听客户需求，以最前沿的设计理念，赋予全新的形象
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
            height: 200px;
            padding: 0 10px;
            img {
                height: 200px;
                width: 100%;
            }
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
        // line-height: 25px;
        // font-size: 14px;
        // text-align: left;
        // text-indent: 2em;
        display: flex;
        flex-direction: row;
        .who-pic {
            width: 100%;
            height: 200px;
            padding: 0 10px;
            flex: 1;
            img {
                // height: 300px;
                width: 100%; // align-self: flex-end;
            }
        }
        .who-describle {
            flex: 1;
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
                text-align: left; // letter-spacing: 5px;
            }
        }
    }
}
</style>

<script>
export default {

}
</script>

