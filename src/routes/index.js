import { createRouter, createWebHistory } from "vue-router";
import StoreHome from "../views/StoreHome.vue";
import ProductSearch from "../views/Store/ProductSearch.vue";
import ProductDetail from "../views/Store/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "store-home",
      component: StoreHome,
    },
    {
      path: "/pesquisa",
      name: "product-search",
      component: ProductSearch,
    },
    {
      path: "/produto",
      name: "product-detail",
      component: ProductDetail,
    },
  ],
});

export default router;
