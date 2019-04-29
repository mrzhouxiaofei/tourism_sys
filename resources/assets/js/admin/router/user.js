// 用户
export default [
    {
        path: "/user/list",
        component: resolve => void require(["../components/user/List.vue"], resolve)
    }
];