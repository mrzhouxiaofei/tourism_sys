<template>
    <div style="width: 73%;margin:0 auto;">
        <el-menu :default-active="activeIndex" class="el-menu-cls" mode="horizontal" @select='handleSelect'>
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/area">旅游地域</el-menu-item>
            <el-menu-item index="/guideline">旅游攻略</el-menu-item>
            <el-menu-item index="/message">留言</el-menu-item>
            <!--<el-menu-item index="/abouts">关于我们</el-menu-item>-->
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '/'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                this.$router.push(key);
            }
        },
        mounted() {
            this.activeIndex = window.location.href.split("?")[0].split("#")[1];
        }
    }
</script>