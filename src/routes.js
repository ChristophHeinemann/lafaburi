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
import LayoutSite from '@/layouts/LayoutWebsite.vue'

const loggedIn = JSON.parse((await window.cookieStore.get("__lafaburi-logged_in")).value)

const ConditionalLayout = loggedIn ? LayoutApp : LayoutSite

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: "/",
    component: ConditionalLayout,
    children: [
      {
        path: '',
        component: Home,
      },
    ],
  },
  {
    path: "/about",
    meta: { title: "About" },
    component: ConditionalLayout,
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
    path: "/entwickler",
    component: ConditionalLayout,
    children: [
      {
        path: '',
        component: About,
      },
    ],
  },
  // {
  //   path: "/faq",
  //   component: ConditionalLayout,
  //   children: [{ path: '', component: Faq }]
  // },
  {
    path: "/become",
    component: ConditionalLayout,
    children: [
      { path: 'moderator', component: BecomeMod },
      { path: "admin", component: BecomeAdmin }],
  },
  {
    path: "/legals",
    component: ConditionalLayout,
    children: [
      { path: 'policy', component: Policy },
      { path: 'gtc', component: Gtc }
    ]
  },
  {
    path: "/contact",
    component: ConditionalLayout,
    children: [{ path: '', component: Kontakt }]
  },
  { path: "/:path(.*)", component: NotFound },
];
