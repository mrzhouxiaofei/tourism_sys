<template>
    <div>
        <el-form :inline="true" @keydown.enter.native="search">
            <el-form-item label="关键字">
                <el-input v-model="keyword" placeholder="标题 / 作者"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="search" @click="search">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="guidelines" border>
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="author" label="作者"></el-table-column>
            <el-table-column prop="created_at" label="发布时间"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <router-link :to="{ path: '/guideline/detail', query: { id: scope.row.id } }">
                        <el-button size="small" icon="el-icon-more">详情</el-button>
                    </router-link>
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

<style scoped>
</style>

<script>
    export default {
        data() {
            return {
                guidelines: [],
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
                axios.get('/front/guideline/lists', {
                    params: params
                }).then((res) => {
                    if (res) {
                        self.guidelines = res.data.data;
                        self.pagination.total = res.data.total;
                    } else {
                        console.log(res.data.msg);
                    }
                });
            },
            guidelineDetail(row) {
                let self = this;
                self.$alert(row['content'], row['title'], {
                    dangerouslyUseHTMLString: true
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