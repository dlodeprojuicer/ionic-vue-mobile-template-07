import { createRouter, createWebHistory } from "@ionic/vue-router";
import Shop from "../views/Shop.vue";

const routes = [
  {
    path: "/",
    component: Shop,
  },
  {
    path: "/catalogue",
    component: () => import("@/views/Catalogue.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
