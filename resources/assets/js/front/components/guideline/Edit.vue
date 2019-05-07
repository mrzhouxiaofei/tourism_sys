<template>
    <div>
        <el-card class="card-panel">
            <div slot="header">
                <span class="guideline-title">发布攻略</span>
            </div>

            <div>
                <el-row style="margin-top: 15px;">
                    <el-col style="width: 500px;">
                        <el-form label-width="100px">
                            <el-form-item label="标题">
                                <el-input v-model="guideline_title" placeholder="请输入标题"></el-input>
                            </el-form-item>
                            <el-form-item label="正文" style="display: inline-block">
                                <UEditor @ready="onReadyContent" style="width:700px;"></UEditor>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSave">保 存</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
    .guideline-title {
        font-size: 18px;
        font-weight: 600;
    }
    .card-panel {
        margin-top: 20px;
    }
</style>

<script>
    import UEditor from '../widget/UEditor';

    export default {
        components: {
            UEditor
        },
        data() {
            return {
                guideline_title: '',  // 标题
                guideline_content_ueditor: null,  // 正文
            }
        },
        methods: {
            onReadyContent(ueditor) {
                this.guideline_content_ueditor = ueditor;
            },
            onSave() {
                let self = this;
                let guideline_content = self.guideline_content_ueditor.getContent();
                let params = {
                    title: self.guideline_title,
                    content: guideline_content
                };
                axios.post('/front/guideline/edit', params).then((res) => {
                    console.log(res);
                    if (res.data.code === 0) {
                        self.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.$router.push({
                            path: '/guideline'
                        })
                    } else {
                        self.$message({
                            message: res.data.msg,
                            type: 'warning'
                        });
                    }
                });
            },
        }
    }
</script>