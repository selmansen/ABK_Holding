import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from 'vue-meta';

import Home from "./pages/Home";
import Detail from "./components/Detail";

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
    { path: "/", component: Home},
    { path: "/Detail/:Pid", component: Detail, name:'detail' },
    { path: "*", component: Home }
];

export const router = new VueRouter({
    mode: 'history',
	routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});