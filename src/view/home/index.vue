<template>
    <section class="wrap">
        <contents></contents>
        <Modal v-model="formShow" title="填写信息" @on-ok='asyncOK' @on-cancel='cancel'>
            <user-form ref='userForm' @invalidate='invalidate'></user-form>
        </Modal>
        <footers :footers='footers'></footers>
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
            footers: [
                {
                    title: '客户提出需求',
                    en: 'CUSTOMER REMAND',
                    type: 'chatbox-working',
                    size: 'home'
                },
                {
                    title: '制定设计方案',
                    en: 'DESIGN PLAN',
                    type: 'document-text',
                    size: 'home'
                },
                {
                    title: '双方签订协议',
                    en: 'SIGN AGREEMENT',
                    type: 'clipboard',
                    size: 'home'
                },
                {
                    title: '设计及修改',
                    en: 'DESIGN/MODIFY',
                    type: 'edit',
                    size: 'home'
                },
                {
                    title: '展示与验收',
                    en: 'ACCEPTANCE TEST',
                    type: 'search',
                    size: 'home'
                },
                {
                    title: '后期维护',
                    en: 'NAINTENANCE',
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
        }
    }
}
</script>

