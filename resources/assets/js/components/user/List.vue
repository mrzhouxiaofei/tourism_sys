<template>
    <div>
        <div class="gm-breadcrumb">
            <i class="ion-ios-home gm-home"></i>
            <el-breadcrumb>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-form :inline="true" @keydown.enter.native="search">
            <el-form-item label="关键字">
                <el-input v-model="keyword" placeholder="用户名 / 昵称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="search" @click="search">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="users" border>
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" class="demo-table-expand">
                        <el-card>
                            <el-form-item label="用户名">
                                <span>{{ props.row.username }}</span>
                            </el-form-item>
                            <el-form-item label="昵称">
                                <span>{{ props.row.nickname }}</span>
                            </el-form-item>
                            <el-form-item label="性别">
                                <span v-if="props.row.sex === 0">女</span>
                                <span v-else-if="props.row.sex === 0">男</span>
                                <span v-else>保密</span>
                            </el-form-item>
                            <el-form-item label="手机号">
                                <span>{{ props.row.phone }}</span>
                            </el-form-item>
                            <el-form-item label="城市">
                                <span>{{ props.row.city }}</span>
                            </el-form-item>
                            <el-form-item label="注册时间">
                                <span>{{ props.row.created_at }}</span>
                            </el-form-item>
                        </el-card>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column prop="username" label="用户名"></el-table-column>
            <el-table-column prop="nickname" label="昵称"></el-table-column>
            <el-table-column
                    prop="status"
                    label="状态"
                    :filters="[{ text: '正常', value: '0'}, { text: '禁用', value: '1'}]"
                    :filter-method="filterTag">
                <template slot-scope="scope">
                    <el-tag
                            :type="scope.row.status === '0' ? 'success' : 'danger'">
                        <span v-if="scope.row.status === '0'">正常</span>
                        <span v-else>禁用</span>
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="small"
                            :type="scope.row.status === '0' ? 'danger' : 'success'"
                            icon="el-icon-edit"
                            @click="editStatus(scope.row)">
                        <span v-if="scope.row.status === '0'">禁用</span>
                        <span v-else>启用</span>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

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
                users: [],
                keyword: '',
                pagination: {
                    current: 1,
                    total: 0,
                    pageSize: 20
                }
            }
        },
        methods: {
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
                axios.get('/admin/user/lists', {
                    params: params
                }).then((res) => {
                    if (res) {
                        self.users = res.data.data;
                        self.pagination.total = res.data.total;
                    } else {
                        console.log(res.data.msg);
                    }
                });
            },
            editStatus(row) {
                let self = this;
                let id = row.id;
                let status = row.status === '1' ? '0' : '1';
                this.$confirm('确认执行吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    axios.post('/admin/user/editStatus', {
                        id: id,
                        status: status
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