<template>
    <div class="card-container">
        <el-card class="card-panel card-panel-left">
            <div slot="header">
                <span class="area-title">最新景点</span>
            </div>
            <div>
                <el-table
                        :data="spots"
                        @row-click="spotChange">
                    <el-table-column type="index" label="#"></el-table-column>
                    <el-table-column prop="name" label="景点"></el-table-column>
                </el-table>
            </div>
        </el-card>

        <el-card class="card-panel card-panel-right">
            <div slot="header">
                <span class="area-title">热门攻略</span>
            </div>
            <div>
                <el-table
                        :data="guidelines"
                        @row-click="guidelineChange">
                    <el-table-column type="index" label="#"></el-table-column>
                    <el-table-column prop="title" label="攻略"></el-table-column>
                    <el-table-column prop="created_at" label="发布时间"></el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
    .card-container {
        overflow: hidden;
    }
    .area-title {
        font-size: 18px;
        font-weight: 600;
    }
    .card-panel {
        margin-top: 20px;
        float: left;
    }
    .card-panel-left {
        width: 48%;
    }
    .card-panel-right {
        width: 48%;
        margin-left: 2%;
    }
</style>

<script>
    export default {
        data() {
            return {
                guidelines: [],
                spots: []
            };
        },
        methods: {
            spotChange(row) {
                let id = row.id;
                this.$router.push({
                    path: '/area',
                    query: {
                        id: id,
                    }
                });
            },
            guidelineChange(row) {
                let id = row.id;
                this.$router.push({
                    path: '/guideline/detail',
                    query: {
                        id: id,
                    }
                });
            },
            getData() {
                let self = this;
                axios.get('/front/index/lists').then((res) => {
                    if (res) {
                        self.guidelines = res.data.guidelines;
                        self.spots = res.data.spots;
                    } else {
                        console.log(res.data.msg);
                    }
                });
            }
        },
        mounted() {
            this.getData();
        }
    };
</script>