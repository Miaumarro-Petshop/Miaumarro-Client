<template>
<header>
        <div id="nav-main-lg">
            <nav class="navbar primary-menu">
                <RouterLink to="/">
                <a href="#" class="navbar-brand">
                    <img src="../../assets/img/miaumarro/Logo_dynapuff.png" height="40">
                </a>
                </RouterLink>
                <ul class="customer-options-items">
                    <RouterLink to="/login">
                    <a href="#" class="login-options">
                        <img class="icon-32" src="../../assets/img/icon/person-circle.svg">
                        <div class="hidden-xs login-options-text">
                            <p class="ts18r">Bem vindo(a)</p>
                            <p class="ts12r">Nome Admin</p>
                        </div>
                    </a>
                    </RouterLink>
                </ul>
            </nav>

            <nav class="navbar secondary-menu my-data main ts18b">
                <ul class="my-data-options">
                    <li class="my-data-options-items">
                        <RouterLink to="/admin">
                        <a href="">Produtos</a>
                        </RouterLink>
                    </li>
                    <li class="my-data-options-items">
                        <RouterLink to="/admin/produto-imagens">
                        <a href="">Imagens de produtos</a>
                        </RouterLink>
                    </li>
                    <li class="my-data-options-items">
                        <RouterLink to="/admin/usuarios">
                        <a href="">Usuários</a>
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div id="nav-main-md">
            <div id="nav-main-top">
            <div>
                <nav class="ts18b">
                <div>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <img class="icon-32" src="../../assets/img/icon/list.svg">
                </button>
                </div>
                <div class="offcanvas offcanvas-end nav-main-header-component" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header navbar-main-header-title">
                      <h1 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body navbar-main-header-window">
                      <ul class="navbar-nav flex-grow-1 pe-3">
                        <div class="container-list">
                        <div id="secondary-menu-opt">
                        <RouterLink to="/admin">
                        <li class="nav-item bottom-line">
                          <a class="nav-link" aria-current="page" href="#">Produtos</a>
                        </li>
                        </RouterLink>
                        <RouterLink to="/admin/produto-imagens">
                        <li class="nav-item bottom-line">
                          <a class="nav-link" href="#">Imagens de Produto</a>
                        </li>
                        </RouterLink>
                        <RouterLink to="/admin/usuarios">
                        <li class="nav-item bottom-line">
                            <a class="nav-link" href="#">Usuários</a>
                        </li>
                        </RouterLink>
                        </div>
                        <div id="secondary-login-menu">
                          <li class=" customer-options-items bottom-line">
                            <RouterLink to="/wishlist">
                            <a href="#" class="wishlist-options">
                                <img class="icon-32" src="../../assets/img/icon/heart-fill.svg">
                                <div class="hidden-xs login-options-text">
                                    <p class="ts18r">Lista de Desejos</p>
                                </div>
                            </a>
                            </RouterLink>
                        </li>
                        <li class="customer-options customer-options-items bottom-line">
                            <RouterLink to="/login">
                            <a href="#" class="login-options">
                                <img class="icon-32" src="../../assets/img/icon/person-circle.svg">
                                <div class="hidden-xs login-options-text">
                                    <p class="ts18r">Bem vindo(a)</p>
                                    <p class="ts12r">Entre ou Cadastre-se</p>
                                </div>
                            </a>
                            </RouterLink>
                        </li>
                    </div>
                </div>
                      </ul>
                    </div>
                </div>
              </nav>
            </div>
            <RouterLink to="/">
                <a id="nav-main-md-brand" href="#">
                    <img src="../../assets/img/miaumarro/Logo_dynapuff.png" height="32">
                </a>
            </RouterLink>
            <RouterLink to="/carrinho">
                <a id="nav-main-md-cart" href="cart.html">
                    <img class="icon-32" src="../../assets/img/icon/cart-fill.svg">
                </a>
            </RouterLink>
            </div>
            <div class="navbar container-search">
                <form id="search-bar" class="form-inline container-fluid">
                    <div class="col-11">
                    <input class="ts12r form-black" type="search" id="searchedTerm" placeholder="O que você está procurando?" aria-label="Search"/>
                    </div>
                    <div class="form-button col-1">
                        <button class="btn btn-grey btn-icon" type="submit">
                            <img class="icon-24" src="../../assets/img/icon/search.svg">
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </header>
</template>
<script>
export default {
  setup() {},
};
</script>