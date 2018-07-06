<template>
    <section class="footer-info">
        <div class="footer-block">
            <span class="info-block">关于我们</span>
            <span class="info-block">意见反馈</span>
            <span class="info-block">隐私策略</span>
            <span class="info-block">帮助中心</span>
        </div>
        <div class="foot-bottom">
            <span>地址：四川省遂宁市射洪县</span>
            <span>联系电话：13000000000</span><br/>
            <span>CopyRight©️2018</span>
        </div>
    </section>
</template>
<style lang="less" scoped>
.footer-info {
    background: #1a1c20 none repeat center top;
    height: 100px;
    .footer-block {
        height: 50px;
        line-height: 50px;
        padding: 20px auto;
        cursor: pointer;
        .info-block {
            color: #fff;
            &::after {
                content: '|';
                display: inline-block;
                margin-left: 5px;
            }
            &:last-child::after {
                display: none;
            }
        }
    }
    .foot-bottom {
        transition: color .7s linear;
    }
    .foot-bottom:hover {
        filter: brightness(1.8);
        color: #00c1cf;
    }
}
</style>
