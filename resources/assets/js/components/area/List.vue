<template>
    <div>
        <div class="gm-breadcrumb">
            <i class="ion-ios-home gm-home"></i>
            <el-breadcrumb>
                <el-breadcrumb-item>地域管理</el-breadcrumb-item>
                <el-breadcrumb-item>地域列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-form :inline="true" @keydown.enter.native="search">
            <el-form-item>
                <router-link :to="{ path: 'edit' }">
                    <el-button><i class="ion-plus"></i> 添加地域</el-button>
                </router-link>
            </el-form-item>

            <el-form-item label="关键字">
                <el-input v-model="keyword" placeholder="地域名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="search" @click="search">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="areas" border>
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column prop="name" label="地域名"></el-table-column>
            <el-table-column prop="content" label="描述"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <router-link :to="{ path: 'edit', query: { id: scope.row.id } }">
                        <el-button size="small" icon="el-icon-edit">编辑</el-button>
                    </router-link>
                    <el-button size="small" type="danger" icon="el-icon-delete" @click="deleteArea(scope.row.id)">删除</el-button>
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

<script>
    export default {
        data() {
            return {
                areas: [],
                keyword: '',
                pagination: {
                    current: 1,
                    total: 0,
                    pageSize: 20
                }
            }
        },
        methods: {
            search() {
                let self = this;
                let params = {
                    page: self.pagination.current,
                    pageSize: self.pagination.pageSize,
                    keyword: self.keyword
                };
                axios.get('/admin/area/lists', {
                    params: params
                }).then((res) => {
                    if (res) {
                        self.areas = res.data.data;
                        self.pagination.total = res.data.total;
                    } else {
                        console.log(res.data.msg);
                    }
                });
            },
            deleteArea(id) {
                let self = this;
                this.$confirm('确认删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    axios.post('/admin/area/delete', {
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