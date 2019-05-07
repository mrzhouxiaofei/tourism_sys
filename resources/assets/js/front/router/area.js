// 地域
export default [
    {
        path: "/",
        component: resolve => void require(["../components/index/Detail.vue"], resolve)
    },
    {
        path: "/area",
        component: resolve => void require(["../components/area/List.vue"], resolve)
    }
];