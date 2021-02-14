import { createRouter, createWebHistory } from "@ionic/vue-router";
import Shop from "../views/Shop.vue";

const routes = [
  {
    path: "/",
    component: Shop
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
