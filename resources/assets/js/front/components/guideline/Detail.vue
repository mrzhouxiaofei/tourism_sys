<template>
    <div>
        <el-card :data="guideline" class="card-panel">
            <div slot="header">
                <span class="guideline-title">{{ guideline.title }}</span>
                <span class="guideline-author">{{ guideline.created_at }} {{ guideline.author }}</span>
            </div>
            <div v-html="guideline.content"></div>
        </el-card>

        <el-card :data="guideline" class="card-panel">
            <div slot="header">
                <span class="guideline-title">评论</span>
            </div>
            <div>
                <el-form label-width="80px">
                    <el-form-item label="评论内容">
                        <el-input v-model="comment" type="textarea" :rows="4" placeholder="限 2000 字内"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small" @click="postGuidelineComment">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>


        <el-card :data="guideline" class="card-panel">
            <div slot="header">
                <span class="comment-title">用户评论</span>
            </div>
            <div class="comment-content" v-for="(item,index) in comments" :key="index">
                <p>{{ item.author }} says:</p>
                <p>{{ item.content }}</p>
                <p><i class="el-icon-date"></i> {{ item.created_at }}</p>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
    .guideline-title {
        font-size: 18px;
        font-weight: 600;
    }
    .guideline-author {
        float: right;
        padding: 3px 0
    }
    .comment-title {
        font-size: 18px;
        font-weight: 600;
    }
    .comment-content {
        margin: 20px auto;
        padding: 1px 15px;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    .card-panel {
        margin-top: 20px;
    }
</style>

<script>
    export default {
        data() {
            return {
                guideline: [],
                comments: [],  // 评论列表
                comment: ''
            }
        },
        methods: {
            postGuidelineComment() {
                let self = this;
                axios.post('/front/guideline/comment', {
                    guideline_id: self.guideline.id,
                    guideline_title: self.guideline.title,
                    guideline_url: window.location.href,
                    content: self.comment
                }).then((res) => {
                    console.log(res);
                    if (res.data.code === 0) {
                        self.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        self.getData(self.guideline.id);
                    } else {
                        self.$message({
                            message: res.data.msg,
                            type: 'warning'
                        });
                    }
                });
            },
            getData(id) {
                let self = this;
                let param = {
                    id: id
                };
                axios.get('/front/guideline/get', {
                    params: param
                }).then((res) => {
                    console.log(res);
                    if (res.data.code === 0) {
                        self.guideline = (res.data.result)[0];
                        self.comments = (res.data.result)[0]['comments'];
                        console.log(self.guideline);
                        console.log(self.comments);
                    } else {
                        self.$message({
                            message: res.data.msg,
                            type: 'warning'
                        });
                    }
                });
            }
        },
        mounted() {
            let id = Number.parseInt(this.$route.query.id);
            if (id > 0) {
                // 加载对象
                this.getData(id);
            }
        }
    }
</script>