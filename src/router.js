import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./pages/Home";
import Bpprime from "./pages/Bpprime";
import Wamoio from "./pages/Wamoio";
import Icrypex from "./pages/Icrypex";
import CrescoCapital from "./pages/CrescoCapital";

import Detail from "./components/Detail";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home },
    { path: "/Bpprime", component: Bpprime},
    { path: "/Wamoio", component: Wamoio},
    { path: "/Icrypex", component: Icrypex},
    { path: "/CrescoCapital", component: CrescoCapital},
    { path: "/Detail/:Pid", component: Detail, name:'detail' },
    { path: "*", component: Home }
];

export const router = new VueRouter({
    /*mode: 'history',*/
	routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});