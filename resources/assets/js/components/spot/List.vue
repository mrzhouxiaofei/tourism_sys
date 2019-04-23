<template>
    <div>
        <div class="gm-breadcrumb">
            <i class="ion-ios-home gm-home"></i>
            <el-breadcrumb>
                <el-breadcrumb-item>景点管理</el-breadcrumb-item>
                <el-breadcrumb-item>景点列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-form :inline="true" @keydown.enter.native="search">
            <el-form-item>
                <router-link :to="{ path: 'edit' }">
                    <el-button><i class="ion-plus"></i> 添加景点</el-button>
                </router-link>
            </el-form-item>

            <el-form-item label="关键字">
                <el-input v-model="keyword" placeholder="地域名 / 景点名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="search" @click="search">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="spots" border>
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="area_name" label="地域名"></el-table-column>
            <el-table-column prop="name" label="景点名"></el-table-column>
            <el-table-column prop="content" label="描述"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <router-link :to="{ path: 'edit', query: { id: scope.row.id } }">
                        <el-button size="small" icon="edit">编辑</el-button>
                    </router-link>
                    <el-button size="small" type="danger" icon="delete" @click="deleteSpot(scope.row.id)">删除</el-button>
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
                spots: [],
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
                axios.get('/admin/spot/lists', {
                    params: params
                }).then((res) => {
                    console.log(res.data.data);
                    if (res) {
                        self.spots = res.data.data;
                        self.pagination.total = res.data.total;
                    } else {
                        console.log(res.data.msg);
                    }
                });
            },
            deleteSpot(id) {
                let self = this;
                this.$confirm('确认删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    axios.post('/admin/spot/delete', {
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