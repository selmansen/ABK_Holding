import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./pages/Home";
import Companies from "./pages/Companies";
import Detail from "./pages/Detail";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home },
    { path: "/Companies", component: Companies},
    { path: "/Detail/:Pid", component: Detail, name:'detail' },
    { path: "*", component: Home }
];

export const router = new VueRouter({
	routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});