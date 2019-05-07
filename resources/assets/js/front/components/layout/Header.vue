<template>
    <div class="gm-header">
        <div class="title">
            {{ app_name }}
        </div>

        <el-menu
                v-if="isLogin"
                default-active="1"
                class="el-menu-cls"
                mode="horizontal"
                @select='handleSelect'>
            <el-submenu index="user">
                <template slot="title">个人中心</template>
                <el-menu-item index="/guideline/edit">发布攻略</el-menu-item>
                <el-menu-item index="/user/password">修改密码</el-menu-item>
            </el-submenu>
            <el-menu-item index='logout'>退出系统</el-menu-item>
        </el-menu>
        <el-menu
                v-else
                default-active="1"
                class="el-menu-cls"
                mode="horizontal"
                @select='handleSelect'>
            <el-menu-item index='login'>登录</el-menu-item>
            <el-menu-item index='register'>注册</el-menu-item>
        </el-menu>
        <div style="clear:both;"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                app_name: window.App.appName,
                user: [],
                isLogin: false
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                if (key === "logout") {
                    window.location.href = "/logout";
                } else if(key === "login") {
                    window.location.href = "/login";
                } else if(key === "register") {
                    window.location.href = "/register";
                } else {
                    this.$router.push(key);
                }
            },
            getData() {
                let self = this;
                axios.get('/isLogin').then((res) => {
                    console.log(res);
                    if (res.data.code === 0) {
                        self.user = res.data.result;
                        self.isLogin = true;
                    } else {
                        console.log(res.data.msg);
                        self.isLogin = false;
                    }
                });
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>

<style>
    .gm-header > ul {
        background-color: transparent !important;
    }

    .gm-header > ul > li,
    .gm-header .el-submenu__title {
        color: white;
    }

    .gm-header > ul > li:hover,
    .gm-header .el-submenu__title:hover {
        background-color: transparent !important;
        border-bottom-color: rgba(255, 255, 255, 0.5) !important;
    }

    .gm-header {
        background-color: rgb(69, 91, 140);
    }

    .gm-header .title {
        float: left;
        margin: 0 30px;
        line-height: 60px;
        font-size: 24px;
        color: #fff;
    }

    .gm-header .el-menu {
        float: right;
        margin-right: 20px;
    }

    .point {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 10px;
        line-height: 40px;
        vertical-align: middle;
    }
</style>
