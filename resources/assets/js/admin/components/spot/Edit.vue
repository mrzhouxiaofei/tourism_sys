<template>
    <div>
        <div class="gm-breadcrumb">
            <i class="el-icon-arrow-left gm-home" @click="$router.go(-1)" style="cursor: pointer;margin-top: -2px;"></i>
            <el-breadcrumb>
                <el-breadcrumb-item>景点管理</el-breadcrumb-item>
                <el-breadcrumb-item>景点编辑</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-row style="margin-top: 15px;">
            <el-col style="width: 500px;">
                <el-form :model="spot" label-width="100px">
                    <el-form-item label="地域名" style="height: 50px;">
                        <area-select @change="AreaChange" :id="area.area_id"></area-select>
                    </el-form-item>
                    <el-form-item label="景点名">
                        <el-input v-model="spot.name" placeholder="请输入景点名"></el-input>
                    </el-form-item>
                    <el-form-item label="描述" style="display: inline-block">
                        <UEditor @ready="onReadyContent" style="width:800px;"></UEditor>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSave">保 存</el-button>
                        <router-link to="/spot/list">
                            <el-button>取 消</el-button>
                        </router-link>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import AreaSelect from '../widget/AreaSelect.vue';
    import UEditor from '../widget/UEditor';

    export default {
        components: {
            AreaSelect,
            UEditor
        },
        data() {
            return {
                area: {  // 地域
                    area_id: 0,
                    area_name: ''
                },
                spot: {  // 景点
                    id: 0,
                    name: ''
                },
                spot_content_ueditor: null,  // 描述
            }
        },
        methods: {
            onReadyContent(ueditor) {
                this.spot_content_ueditor = ueditor;
            },
            AreaChange(now) {
                if (now) {
                    this.area.area_id = now.id;
                    this.area.area_name = now.name;
                } else {
                    this.area.area_id = 0;
                    this.area.area_name = '';
                }
            },
            onSave() {
                let self = this;
                let spot_content = self.spot_content_ueditor.getContent();
                let params = {
                    id: self.spot.id,
                    area_id: self.area.area_id,
                    area_name: self.area.area_name,
                    name: self.spot.name,
                    content: spot_content
                };
                axios.post('/admin/spot/edit', params).then((res) => {
                    console.log(res);
                    if (res.data.code === 0) {
                        self.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.$router.push({
                            path: '/spot/list'
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
                axios.get('/admin/spot/get', {
                    params: param
                }).then((res) => {
                    console.log(res);
                    if (res.data.code === 0) {
                        console.log(res.data.result);
                        self.spot.id = res.data.result.id;
                        self.area.area_id = res.data.result.area_id;
                        self.area.area_name = res.data.result.area_name;
                        self.spot.name = res.data.result.name;
                        self.spot_content_ueditor.setContent(res.data.result.content);
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