import { createRouter, createWebHistory } from "vue-router";
import StoreHome from "../views/StoreHome.vue";
import ProductSearch from "../views/Store/Product/ProductSearch.vue";
import ProductDetail from "../views/Store/Product/ProductDetail.vue";
import WishListView from "../views/Store/Wishlist/WishListView.vue";
import CartList from "../views/Store/Cart/CartList.vue";
import LoginForm from "../views/Store/Login/LoginForm.vue";
import RegistrationForm from "../views/Store/Login/RegistrationForm.vue";

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
    {
      path: "/wishlist",
      name: "wishlist",
      component: WishListView,
    },
    {
      path: "/carrinho",
      name: "cart",
      component: CartList,
    },
    {
      path: "/cadastrar",
      name: "register",
      component: RegistrationForm,
    },
    {
      path: "/login",
      name: "login",
      component: LoginForm,
    },
  ],
});

export default router;
