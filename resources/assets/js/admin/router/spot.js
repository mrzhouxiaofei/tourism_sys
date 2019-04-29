// 景点
export default [
    {
        path: "/spot/list",
        component: resolve => void require(["../components/spot/List.vue"], resolve)
    },
    {
        path: '/spot/edit',
        component: resolve =>void(require(['../components/spot/Edit.vue'], resolve))
    }
];
