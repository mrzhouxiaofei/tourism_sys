<template>
    <div>
        <el-card :data="guideline">
            <div slot="header">
                <span class="guideline-title">{{ guideline.title }}</span>
                <span class="guideline-author">{{ guideline.created_at }} {{ guideline.author }}</span>
            </div>
            <div v-html="guideline.content"></div>
        </el-card>

        <el-card :data="guideline">
            <div slot="header">
                <span class="guideline-title">评论</span>
            </div>
            <div>
                <el-form label-width="80px">
                    <el-form-item label="评论内容">
                        <el-input type="textarea" :rows="4" placeholder="限 2000 字内"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>

        <el-card>
            <div v-for="(item,index) in comments" :key="index">
                <p>{{ item.author }}</p>
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
</style>

<script>
    export default {
        data() {
            return {
                guideline: [],
                comments: [],
            }
        },
        methods: {
            onSave() {
                let self = this;
                axios.post('/front/guideline/detail', self.area).then((res) => {
                    console.log(res);
                    if (res.data.code === 0) {
                        self.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.$router.push({
                            path: '/area/list'
                        })
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