<template>
    <div class="card-container">
        <el-card class="card-panel card-panel-left">
            <div slot="header">
                <span class="area-title">请选择旅游地域</span>
            </div>
            <div>
                <el-cascader
                        :options="areas"
                        v-model="areaSpot"
                        filterable
                        @change="handleChange">
                </el-cascader>
            </div>
        </el-card>

        <el-card :data=spot class="card-panel card-panel-right">
            <div slot="header">
                <span class="area-title">景点介绍</span>
            </div>
            <div class="spot-content">
                <h3>{{ spot.name }}</h3>
                <p v-html="spot.content"></p>
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
    .spot-content>h3 {
        text-align: center;
        margin-bottom: 50px;
    }
    .card-panel {
        margin-top: 20px;
        float: left;
    }
    .card-panel-left {
        width: 25%;
    }
    .card-panel-right {
        width: 70%;
        margin-left: 4%;
    }
</style>

<script>
    export default {
        data() {
            return {
                areas: [],
                areaSpot: [],
                spot: {
                    name: '',
                    content: '',
                    created_at: ''
                }
            };
        },
        methods: {
            handleChange(value) {
                let self = this;
                if (value.length === 1) {
                    self.spot.name = '';
                    self.spot.content = '当前旅游地域暂无景点';
                    self.spot.created_at = '';
                    return;
                }
                let param = {
                    id: value.pop()
                };
                axios.get('/front/spot/get', {
                    params: param
                }).then((res) => {
                    if (res.data.code === 0) {
                        self.spot.name = res.data.result.name;
                        self.spot.content = res.data.result.content;
                        self.spot.created_at = res.data.result.created_at;
                    } else {
                        self.$message({
                            message: res.data.msg,
                            type: 'warning'
                        });
                    }
                });
            },
            formatAreaSpot(areaSpots) {
                let result = [];
                areaSpots['areas'].forEach(function(value) {
                    let spots = [];
                    areaSpots['spots'].forEach(function(val) {
                        if (value['id'] === val['area_id']) {
                            spots.push({
                                'value': val['id'],
                                'label': val['name']
                            });
                        }
                    }, spots);
                    if (spots.length > 0) {
                        result.push({
                            'value': value['id'],
                            'label': value['name'],
                            'children': spots
                        });
                    } else {
                        result.push({
                            'value': value['id'],
                            'label': value['name']
                        });
                    }
                }, result);
                return result;
            },
            getData() {
                let self = this;
                axios.get('/front/area/lists').then((res) => {
                    if (res) {
                        self.areas = self.formatAreaSpot(res.data);
                    } else {
                        console.log(res.data.msg);
                    }
                });
            }
        },
        mounted() {
            let id = Number.parseInt(this.$route.query.id);
            if (id > 0) {
                // 加载对象
                let arr = new Array;
                arr[0] = 0;
                arr.push(id);
                this.handleChange(arr);
            }
            this.getData();
        }
    };
</script>