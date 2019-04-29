<template>
    <el-select clearable v-model="id_copy" @change="value_change" v-loading="loading" placeholder="请选择地域名">
        <el-option
                v-for="(item, index) in lists"
                :key="index"
                :label="item.name"
                :value="item.id">
        </el-option>
    </el-select>
</template>
<script>
    export default {
        data: function () {
            return {
                id_copy: null,
                lists: [],
                loading: false
            }
        },
        props: {
            id: {
                type: Number
            }
        },
        watch: {
            id: function (now) {
                if (this.id) {
                    this.id_copy = this.id;
                }
            }
        },
        methods: {
            get_lists: function () {
                let self = this;
                this.loading = true;
                axios.get("/admin/area/select").then(function (response) {
                    self.loading = false;
                    self.lists = response.data.areas
                });
            },
            value_change: function () {
                let value = this.id_copy;

                if (!value) {
                    this.$emit("change", null);
                    return;
                }
                let lists = this.lists;
                for (let i = 0; i < lists.length; i++) {
                    if (lists[i].id === value) {
                        this.$emit("change", lists[i]);
                        break;
                    }
                }
            }
        },
        mounted: function () {
            this.get_lists();
            if (this.id) {
                this.id_copy = this.id;
            }
        }
    }
</script>