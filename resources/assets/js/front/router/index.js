import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
let myRouter = [];

// 攻略模块
import guideline from "./guideline";
guideline.forEach(function(obj) {
    myRouter.push(obj);
});

export default new VueRouter({
    saveScrollPosition: true,
    routes: myRouter
});
