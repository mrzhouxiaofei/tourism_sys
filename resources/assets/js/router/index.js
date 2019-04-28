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

// 攻略模块
import guideline from "./guideline";
guideline.forEach(function(obj) {
    myRouter.push(obj);
});

// 留言模块
import message from "./message";
message.forEach(function(obj) {
    myRouter.push(obj);
});

// 用户模块
import user from "./user";
user.forEach(function (obj) {
    myRouter.push(obj);
});

export default new VueRouter({
  saveScrollPosition: true,
  routes: myRouter
});
