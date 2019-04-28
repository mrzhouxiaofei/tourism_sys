<template>
    <div>
        <div class="gm-breadcrumb">
            <i class="ion-ios-home gm-home"></i>
            <el-breadcrumb>
                <el-breadcrumb-item>留言管理</el-breadcrumb-item>
                <el-breadcrumb-item>留言列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-form :inline="true" @keydown.enter.native="search">
            <el-form-item label="关键字">
                <el-input v-model="keyword" placeholder="留言人"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="search" @click="search">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="messages" border>
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" class="demo-table-expand">
                        <el-card>
                            <el-form-item label="留言人">
                                <span>{{ props.row.author }}</span>
                            </el-form-item>
                            <el-form-item label="留言时间">
                                <span>{{ props.row.created_at }}</span>
                            </el-form-item>
                            <el-form-item label="留言内容">
                                <span>{{ props.row.content }}</span>
                            </el-form-item>
                            <el-form-item v-if="props.row.type === '0'">
                                <el-button size="small" type="primary" @click="openAnswerMessage(props.row.id)">回 复</el-button>
                            </el-form-item>
                        </el-card>
                        <el-card style="margin-top: 10px;" v-if="props.row.type === '1'">
                            <el-form-item label="回复人">
                                <span>{{ props.row.comment.author }}</span>
                            </el-form-item>
                            <el-form-item label="回复时间">
                                <span>{{ props.row.comment.created_at }}</span>
                            </el-form-item>
                            <el-form-item label="回复内容">
                                <span>{{ props.row.comment.content }}</span>
                            </el-form-item>
                        </el-card>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column prop="author" label="留言人"></el-table-column>
            <el-table-column prop="content" label="留言内容"></el-table-column>
            <el-table-column prop="created_at" label="留言时间"></el-table-column>
            <el-table-column
                    prop="type"
                    label="状态"
                    :filters="[{ text: '未回复', value: '0'}, { text: '已回复', value: '1'}]"
                    :filter-method="filterTag">
                <template slot-scope="scope">
                    <el-tag
                        :type="scope.row.type === '0' ? 'danger' : 'info'">
                        <span v-if="scope.row.type === '0'">未回复</span>
                        <span v-else>已回复</span>
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="danger" icon="el-icon-delete" @click="deleteMessage(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="回复内容" :visible.sync="answerMessageFlag" width="30%">
            <el-form>
                <el-form-item>
                    <el-input type="textarea" :rows="4" v-model="comment"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" type="primary" @click="confirmAnswerMessage">确 定</el-button>
            </span>
        </el-dialog>

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

<style>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>

<script>
    export default {
        data() {
            return {
                messages: [],
                answerMessageId: 0,
                answerMessageFlag: false,
                comment: '',
                keyword: '',
                pagination: {
                    current: 1,
                    total: 0,
                    pageSize: 20
                }
            }
        },
        methods: {
            confirmAnswerMessage() {
                let self = this;
                axios.post('/admin/message/answer', {
                    id: self.answerMessageId,
                    content: self.comment
                }).then((res) => {
                    if (res.data.code === 0){
                        self.$message({
                            title: '提示',
                            message: res.data.msg,
                            type: 'success'
                        });
                        self.answerMessageId = 0;
                        this.answerMessageFlag = false;
                        self.search();
                    } else {
                        self.$message({
                            title: '提示',
                            message: res.data.msg,
                            type: 'warning'
                        });
                    }
                });
            },
            openAnswerMessage(id) {
                this.answerMessageId = id;
                this.answerMessageFlag = true;

            },
            filterTag(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            search() {
                let self = this;
                let params = {
                    page: self.pagination.current,
                    pageSize: self.pagination.pageSize,
                    keyword: self.keyword
                };
                axios.get('/admin/message/lists', {
                    params: params
                }).then((res) => {
                    if (res) {
                        self.messages = res.data.data;
                        console.log(self.messages);
                        self.pagination.total = res.data.total;
                    } else {
                        console.log(res.data.msg);
                    }
                });
            },
            deleteMessage(id) {
                let self = this;
                this.$confirm('确认删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    axios.post('/admin/message/delete', {
                        id: id
                    }).then((res) => {
                        if (res.data.code === 0){
                            self.$message({
                                title: '提示',
                                message: res.data.msg,
                                type: 'success'
                            });
                            self.search();
                        } else {
                            self.$message({
                                title: '提示',
                                message: res.data.msg,
                                type: 'warning'
                            });
                        }
                    });
                }).catch(() => {});
            },
            handleSizeChange(val) {
                this.pagination.pageSize = val;
                this.search();
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.pagination.current = val;
                this.search();
                console.log(`当前页: ${val}`);
            }
        },
        mounted() {
            this.search();
        }
    }
</script>