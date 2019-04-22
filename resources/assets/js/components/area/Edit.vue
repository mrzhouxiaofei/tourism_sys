<template>
    <div>
        <div class="gm-breadcrumb">
            <i class="el-icon-arrow-left gm-home" @click="$router.go(-1)" style="cursor: pointer;margin-top: -2px;"></i>
            <el-breadcrumb>
                <el-breadcrumb-item>地域管理</el-breadcrumb-item>
                <el-breadcrumb-item>地域编辑</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-row style="margin-top: 15px;">
            <el-col style="width: 500px;">
                <el-form :model="area" label-width="100px">
                    <el-form-item label="地域名">
                        <el-input v-model="area.name" placeholder="请输入地域名"></el-input>
                    </el-form-item>
                    <el-form-item label="描述">
                        <el-input v-model="area.content" placeholder="请输入描述"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSave">保 存</el-button>
                        <router-link to="/area/list">
                            <el-button>取 消</el-button>
                        </router-link>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                area: {
                    id: 0,
                    name: '',
                    content: ''
                },
            }
        },
        methods: {
            onSave() {
                let self = this;
                axios.post('/admin/area/edit', self.area).then((res) => {
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
                axios.get('/admin/area/get', {
                    params: param
                }).then((res) => {
                    console.log(res);
                    if (res.data.code === 0) {
                        self.area = res.data.result;
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