// 用户
export default [
    {
        path: "/user/list",
        component: resolve => void require(["../components/user/List.vue"], resolve)
    },
    {
        path: '/user/edit',
        // component: resolve =>void(require(['../components/user/Edit.vue'], resolve))
    }
];