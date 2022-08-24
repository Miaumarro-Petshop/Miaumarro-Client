import { createRouter, createWebHistory } from "vue-router";
import StoreHome from "../views/StoreHome.vue";
import ProductSearch from "../views/Store/Product/ProductSearch.vue";
import ProductDetail from "../views/Store/Product/ProductDetail.vue";
import WishListView from "../views/Store/Wishlist/WishListView.vue";
import CartList from "../views/Store/Cart/CartList.vue";
import LoginForm from "../views/Store/Login/LoginForm.vue";
import RegistrationForm from "../views/Store/Login/RegistrationForm.vue";
import DataEdit from "../views/User/Data/DataEdit.vue";
import AddressList from "../views/User/Address/AddressList.vue";
import AddressCreate from "../views/User/Address/AddressCreate.vue";
import AddressEdit from "../views/User/Address/AddressEdit.vue";
import AppointmentList from "../views/User/Appointment/AppointmentList.vue";
import AppointmentCreate from "../views/User/Appointment/AppointmentCreate.vue";
import PetList from "../views/User/Pet/PetList.vue";
import PetCreate from "../views/User/Pet/PetCreate.vue";
import PetEdit from "../views/User/Pet/PetEdit.vue";
import PurchaseList from "../views/User/Purchase/PurchaseList.vue";
import PurchaseDetail from "../views/User/Purchase/PurchaseDetail.vue";

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
    {
      path: "/minha-conta",
      name: "data-edit",
      component: DataEdit,
    },
    {
      path: "/minha-conta/enderecos",
      name: "address-list",
      component: AddressList,
    },
    {
      path: "/minha-conta/enderecos/adicionar",
      name: "address-list",
      component: AddressCreate,
    },
    {
      path: "/minha-conta/enderecos/editar",
      name: "address-edit",
      component: AddressEdit,
    },
    {
      path: "/minha-conta/servicos",
      name: "appointment-list",
      component: AppointmentList,
    },
    {
      path: "/minha-conta/servicos/adicionar",
      name: "appointment-list",
      component: AppointmentCreate,
    },
    {
      path: "/minha-conta/pets",
      name: "pet-list",
      component: PetList,
    },
    {
      path: "/minha-conta/pets/adicionar",
      name: "pet-list",
      component: PetCreate,
    },
    {
      path: "/minha-conta/pets/editar",
      name: "pet-edit",
      component: PetEdit,
    },
    {
      path: "/minha-conta/pedidos",
      name: "purchase-list",
      component: PurchaseList,
    },
    {
      path: "/minha-conta/pedidos/detalhe",
      name: "purchase-detail",
      component: PurchaseDetail,
    },
  ],
});

export default router;
