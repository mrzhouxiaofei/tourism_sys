<template>
    <div>
        <el-card class="card-panel">
            <div slot="header">
                <span class="message-title">留言</span>
            </div>
            <div>
                <el-form label-width="80px">
                    <el-form-item label="留言内容">
                        <el-input v-model="message" type="textarea" :rows="4" placeholder="限 2000 字内"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small" @click="postMessage">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>


        <el-card :data="messages" class="card-panel">
            <div slot="header">
                <span class="message-title">用户留言</span>
            </div>
            <div class="message-content" v-for="(item,index) in messages" :key="index">
                <p>{{ item.author }} says:</p>
                <p>{{ item.content }}</p>
                <p><i class="el-icon-date"></i> {{ item.created_at }}</p>
                <div class="answer-content" v-if="item.comment">
                    <p>{{ item.comment.author }} answers:</p>
                    <p>{{ item.comment.content }}</p>
                    <p><i class="el-icon-date"></i> {{ item.comment.created_at }}</p>
                </div>
            </div>
        </el-card>

        <el-pagination
                style="padding: 1rem 0;"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pagination.current"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="pagination.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="pagination.total">
        </el-pagination>
    </div>
</template>

<style scoped>
    .message-title {
        font-size: 18px;
        font-weight: 600;
    }
    .message-content {
        margin: 20px auto;
        padding: 1px 15px;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        overflow: hidden;
    }
    .answer-content {
        float: right;
    }
    .card-panel {
        margin-top: 20px;
    }
</style>

<script>
    export default {
        data() {
            return {
                messages: [],
                message: '',
                keyword: '',
                pagination: {
                    current: 1,
                    total: 0,
                    pageSize: 20
                }
            }
        },
        methods: {
            postMessage() {
                let self = this;
                axios.post('/front/message/postMessage', {
                    content: self.message
                }).then((res) => {
                    if (res.data.code === 0) {
                        self.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        self.getData();
                    } else {
                        self.$message({
                            message: res.data.msg,
                            type: 'warning'
                        });
                    }
                });
            },
            getData() {
                let self = this;
                let params = {
                    page: self.pagination.current,
                    pageSize: self.pagination.pageSize,
                    keyword: self.keyword
                };
                axios.get('/front/message/lists', {
                    params: params
                }).then((res) => {
                    if (res) {
                        self.messages = res.data.data;
                        self.pagination.total = res.data.total;
                    } else {
                        console.log(res.data.msg);
                    }
                });
            },
            handleSizeChange(val) {
                this.pagination.pageSize = val;
                this.getData();
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.pagination.current = val;
                this.getData();
                console.log(`当前页: ${val}`);
            }
        },
        mounted() {
            // 加载对象
            this.getData();
        }
    }
</script>