<template>
    <section class="wrap">
        <contents @popupForm='popupForm'></contents>
        <Modal v-model="formShow" title="填写信息" @on-ok='asyncOK' @on-cancel='cancel'>
            <user-form ref='userForm' @invalidate='invalidate'></user-form>
        </Modal>
        <footers :footers='footers' :titleInfo='titleInfo'></footers>
    </section>
</template>
<style lang="less" scoped>
.wrap {
    position: relative;
    overflow: hidden;
}
</style>
<script>
import Contents from 'components/home/content'
import Footers from 'components/home/footer'
import UserForm from 'base/userForm'
export default {
    components: {
        Contents,
        UserForm,
        Footers
    },
    data() {
        return {
            formShow: true,
            titleInfo: {
                title: '专业6步，步步为营',
                subTitle: '把一件事做到极致，用工匠精神激励前行'
            },
            footers: [
                {
                    title: '客户提出需求',
                    type: 'chatbox-working',
                    size: 'home'
                },
                {
                    title: '制定设计方案',
                    type: 'document-text',
                    size: 'home'
                },
                {
                    title: '双方签订协议',
                    type: 'clipboard',
                    size: 'home'
                },
                {
                    title: '展示与验收',
                    type: 'search',
                    size: 'home'
                },
                {
                    title: '后期维护',
                    type: 'wrench',
                    size: 'home'
                }
            ]
        }
    },
    methods: {
        asyncOK() {
            const child = this.$refs.userForm;
            if (!child.formValidate.name || !child.formValidate.phone) {
                this.$Message.warning('请填写完信息再提交哟');
                this.invalidate();
                return
            }
            this.$refs.userForm.handleSubmit();
        },
        cancel() {
            this.$refs.userForm.handleReset();
        },
        invalidate() {
            setTimeout(_ => {
                this.formShow = true;
            }, 500);
        },
        popupForm() {
            this.formShow = true;
        }
    }
}
</script>

