// 攻略
export default [
    {
        path: "/guideline",
        component: resolve => void require(["../components/guideline/List.vue"], resolve)
    },
    {
        path: '/guideline/detail',
        component: resolve =>void(require(['../components/guideline/Detail.vue'], resolve))
    },
    {
        path: '/guideline/edit',
        component: resolve =>void(require(['../components/guideline/Edit.vue'], resolve))
    }
];
