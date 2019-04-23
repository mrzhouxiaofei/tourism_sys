import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
let myRouter = [];

// 地域模块
import area from "./area";
area.forEach(function(obj) {
    myRouter.push(obj);
});

// 景点模块
import spot from "./spot";
spot.forEach(function(obj) {
    myRouter.push(obj);
});

export default new VueRouter({
  saveScrollPosition: true,
  routes: myRouter
});
