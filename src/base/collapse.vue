<template>
    <Collapse v-model="value1" accordion class="collapse">
        <Panel :name="item.value" v-for='(item,index) in listInfo' :key="index">
            {{item.title}}
            <p slot="content">{{item.describe}}</p>
        </Panel>
    </Collapse>
</template>
<style lang="less" scoped>
.collapse {
    text-align: left;
    background: transparent;
    border-color: transparent;
}
</style>
<style>
.ivu-collapse-content,
.ivu-collapse>.ivu-collapse-item>.ivu-collapse-header {
    background: transparent;
    color: #fff;
}
</style>

<script>
export default {
    // props: ['listInfo'],
    data() {
        return {
            value1: '1',
            listInfo: [
                {
                    title: '史蒂夫·乔布斯',
                    describe: '史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。',
                    value: '1'
                },
                {
                    title: '斯蒂夫·盖瑞·沃兹尼亚克',
                    describe: '斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。',
                    value: '2'
                },
                {
                    title: '乔纳森·伊夫',
                    describe: '乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。',
                    value: '3'
                }
            ]
        }
    }
}
</script>

