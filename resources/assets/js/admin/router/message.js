// 留言
export default [
    {
        path: "/message/list",
        component: resolve => void require(["../components/message/List.vue"], resolve)
    },
    {
        path: '/message/edit',
        // component: resolve =>void(require(['../components/message/Edit.vue'], resolve))
    }
];
