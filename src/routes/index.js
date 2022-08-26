import { createRouter, createWebHistory } from "vue-router";
import StoreHome from "/src/views/StoreHome.vue";
import ProductSearch from "/src/views/Store/Product/ProductSearch.vue";
import ProductDetail from "/src/views/Store/Product/ProductDetail.vue";
import WishListView from "/src/views/Store/Wishlist/WishListView.vue";
import CartList from "/src/views/Store/Cart/CartList.vue";
import LoginForm from "/src/views/Store/Login/LoginForm.vue";
import RegistrationForm from "/src/views/Store/Login/RegistrationForm.vue";
import DataEdit from "/src/views/User/Data/DataEdit.vue";
import AddressList from "/src/views/User/Address/AddressList.vue";
import AddressCreate from "/src/views/User/Address/AddressCreate.vue";
import AddressEdit from "/src/views/User/Address/AddressEdit.vue";
import AppointmentList from "/src/views/User/Appointment/AppointmentList.vue";
import AppointmentCreate from "/src/views/User/Appointment/AppointmentCreate.vue";
import PetList from "/src/views/User/Pet/PetList.vue";
import PetCreate from "/src/views/User/Pet/PetCreate.vue";
import PetEdit from "/src/views/User/Pet/PetEdit.vue";
import PurchaseList from "/src/views/User/Purchase/PurchaseList.vue";
import PurchaseDetail from "/src/views/User/Purchase/PurchaseDetail.vue";
import ProductList from "/src/views/Admin/Product/ProductList.vue";
import ProductCreate from "/src/views/Admin/Product/ProductCreate.vue";
import ProductEdit from "/src/views/Admin/Product/ProductEdit.vue";
import UserList from "/src/views/Admin/User/UserList.vue";
import UserCreate from "/src/views/Admin/User/UserCreate.vue";
import UserEdit from "/src/views/Admin/User/UserEdit.vue";
import ProductImageList from "/src/views/Admin/ProductImage/ProductImageList.vue";
import ProductImageCreate from "/src/views/Admin/ProductImage/ProductImageCreate.vue";
import ProductImageEdit from "/src/views/Admin/ProductImage/ProductImageEdit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "store-home",
      component: StoreHome,
    },
    {
      path: "/pesquisa/:filter",
      name: "product-search",
      component: ProductSearch,
    },
    {
      path: "/produto/:id",
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
      name: "address-create",
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
      name: "appointment-create",
      component: AppointmentCreate,
    },
    {
      path: "/minha-conta/pets",
      name: "pet-list",
      component: PetList,
    },
    {
      path: "/minha-conta/pets/adicionar",
      name: "pet-create",
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
    {
      path: "/admin",
      name: "product-list",
      component: ProductList,
    },
    {
      path: "/admin/produtos/adicionar",
      name: "product-create",
      component: ProductCreate,
    },
    {
      path: "/admin/produtos/editar",
      name: "product-edit",
      component: ProductEdit,
    },
    {
      path: "/admin/usuarios",
      name: "user-list",
      component: UserList,
    },
    {
      path: "/admin/usuarios/adicionar",
      name: "user-create",
      component: UserCreate,
    },
    {
      path: "/admin/usuarios/editar",
      name: "user-edit",
      component: UserEdit,
    },
    {
      path: "/admin/produto-imagens",
      name: "product-image-list",
      component: ProductImageList,
    },
    {
      path: "/admin/produto-imagens/adicionar",
      name: "product-image-create",
      component: ProductImageCreate,
    },
    {
      path: "/admin/produto-imagens/editar",
      name: "product-image-edit",
      component: ProductImageEdit,
    },
  ],
});

export default router;
