import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from 'vue-meta';

import Home from "./pages/Home";
import Bpprime from "./pages/Bpprime";
import Wamoio from "./pages/Wamoio";
import Icrypex from "./pages/Icrypex";
import CrescoCapital from "./pages/CrescoCapital";
import IkarosPartners from "./pages/IkarosPartners";
import AbkTech from "./pages/AbkTech";
import Legendingo from "./pages/Legendingo";
import PlayOnFinance from "./pages/PlayOnFinance";
import SkyFx from "./pages/SkyFx";
import NyFx from "./pages/NyFx";
import NyFxPrime from "./pages/NyFxPrime";

import Detail from "./components/Detail";

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
    { path: "/", component: Home, meta: { requiresAuth: true } },
    { path: "/Bpprime", component: Bpprime},
    { path: "/Wamoio", component: Wamoio},
    { path: "/Icrypex", component: Icrypex},
    { path: "/CrescoCapital", component: CrescoCapital},
    { path: "/IkarosPartners", component: IkarosPartners},
    { path: "/AbkTech", component: AbkTech},
    { path: "/Legendingo", component: Legendingo},
    { path: "/PlayOnFinance", component: PlayOnFinance},
    { path: "/SkyFx", component: SkyFx},
    { path: "/NyFx", component: NyFx},
    { path: "/NyFxPrime", component: NyFxPrime},
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