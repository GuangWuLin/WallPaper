<template>
    <Collapse v-model="value1" accordion class="collapse">
        <Panel :name="index+''" v-for='(item,index) in list' :key="index">
            {{item}}
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
    props: ['list'],
    data() {
        return {
            value1: '0',
            // listInfo: [
            //     {
            //         title: '史蒂夫·乔布斯',
            //         describe: '史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。',
            //         value: '1'
            //     },
            //     {
            //         title: '斯蒂夫·盖瑞·沃兹尼亚克',
            //         describe: '斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。',
            //         value: '2'
            //     },
            //     {
            //         title: '乔纳森·伊夫',
            //         describe: '乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁',
            //         value: '3'
            //     }
            // ]
        }
    }
}
</script>

