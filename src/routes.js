import Home from "./views/Home.vue";
import About from "./views/Entwickler.vue";
import Rooms from "./views/Rooms.vue";
import Profile from "./views/Profile.vue";
import BecomeMod from "./views/team/Mod.contact.vue";
import BecomeAdmin from "./views/team/Admin.contact.vue";
import Gtc from "./views/legals/GTC.vue";
import Policy from "./views/legals/Policy.vue";
import Kontakt from "./views/Kontakt.vue";
import NotFound from "./views/NotFound.vue";

import LayoutApp from '@/layouts/LayoutApp.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: "/",
    component: LayoutApp,
    children: [
      {
        path: '',
        component: Home,
      },
    ],
    meta: { title: "Home" }
  },
  {
    path: "/about",
    component: LayoutApp,
    children: [
      {
        path: '',
        component: About,
      },
    ],
  },
  { path: "/rooms", component: Rooms },
  {
    path: "/user/:username",
    component: LayoutApp,
    children: [
      {
        path: '',
        component: Profile,
      },
    ],
  },
  {
    path: "/entwickler", component: LayoutApp,
    children: [
      {
        path: '',
        component: About,
      },
    ],
  },
  { path: "/faq", component: Profile },
  { path: "/become/mod", component: BecomeMod },
  { path: "/become/admin", component: BecomeAdmin },
  { path: "/legals/policy", component: Policy },
  { path: "/legals/gtc", component: Gtc },
  { path: "/contact", component: Kontakt },
  { path: "/:path(.*)", component: NotFound },
];
