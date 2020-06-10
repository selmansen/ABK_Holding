import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from 'vue-meta';

import Home from "./pages/Home";
import Bpprime from "./pages/Bpprime";
import Wamoio from "./pages/Wamoio";
import Icrypex from "./pages/Icrypex";
import Ikaros from "./pages/Ikaros";
import AbkTech from "./pages/AbkTech";
import Lendiglo from "./pages/Lendiglo";
import PlayOnFinance from "./pages/PlayOnFinance";
import SkyFx from "./pages/SkyFx";
import NyFx from "./pages/NyFx";
import NyFxPrime from "./pages/NyFxPrime";

import Detail from "./components/Detail";

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
    { path: "/en/", component: Home},
    { path: "/en/Bpprime", component: Bpprime},
    { path: "/en/Wamoio", component: Wamoio},
    { path: "/en/Icrypex", component: Icrypex},
    { path: "/en/Ikaros", component: Ikaros},
    { path: "/en/AbkTech", component: AbkTech},
    { path: "/en/Lendiglo", component: Lendiglo},
    { path: "/en/PlayOnFinance", component: PlayOnFinance},
    { path: "/en/SkyFx", component: SkyFx},
    { path: "/en/NyFx", component: NyFx},
    { path: "/en/NyFxPrime", component: NyFxPrime},
    { path: "/en/Detail/:Pid", component: Detail, name:'detail' },
    { path: "*", component: Home }
];

export const router = new VueRouter({
    mode: 'history',
	routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});