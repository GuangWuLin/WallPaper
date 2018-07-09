<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="称呼" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入您的姓名"></Input>
        </FormItem>
        <FormItem label="电话" prop="phone">
            <Input v-model="formValidate.phone" placeholder="请输入您的电话"></Input>
        </FormItem>
        <FormItem label="描述" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请描述您的需求..."></Input>
        </FormItem>
    </Form>
</template>
<script>
import global from 'assets/js/global'
export default {
    data() {
        return {
            formValidate: {
                name: '',
                phone: '',
                desc: ''
            },
            ruleValidate: {
                name: [
                    { required: true, message: '称呼不能为空 ...', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '请填写电话号码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$refs['formValidate'].validate((valid) => {
                if (valid) {
                    if (!global.IsPhone(this.formValidate.phone)) {
                        this.$Message.error('请填写正确的电话号码');
                        this.$emit('invalidate');
                        return
                    }
                    this.$Message.success('Success!');
                }
            })
        },
        handleReset() {
            this.$refs['formValidate'].resetFields();
        },
        submit() {
            this.$http.post().then(res => {
                let { success, data, msg } = res;
                if (success) {

                } else {

                }
            })
        }
    }
}
</script>
