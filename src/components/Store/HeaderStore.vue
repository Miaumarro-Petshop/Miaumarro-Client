<template>
  <header>
    <div id="nav-main-lg">
      <nav class="navbar primary-menu">
        <RouterLink to="/">
          <a href="#" class="navbar-brand">
            <img
              src="/src/assets/img/miaumarro/Logo_dynapuff.png"
              height="40"
            />
          </a>
        </RouterLink>

        <div id="search-bar" class="form-inline container-fluid" method="post">
          <input
            v-model="term"
            class="ts12r form-black"
            type="search"
            id="searchedTerm"
            placeholder="O que você está procurando?"
            aria-label="Search"
          />
          <div class="form-button">
            <button
              v-on:click="searchProductTerm()"
              class="btn btn-grey btn-icon"
            >
              <img class="icon-24" src="/src/assets/img/icon/search.svg" />
            </button>
          </div>
        </div>

        <ul class="customer-options">
          <li class="customer-options-items">
            <RouterLink to="/login">
              <a href="#" class="login-options">
                <img
                  class="icon-32"
                  src="/src/assets/img/icon/person-circle.svg"
                />
                <div class="hidden-xs login-options-text">
                  <p class="ts18r">Bem vindo(a)</p>
                  <p class="ts12r">Entre ou Cadastre-se</p>
                </div>
              </a>
            </RouterLink>
          </li>
          <li class="customer-options-items">
            <RouterLink to="/wishlist">
              <a href="#">
                <img
                  class="icon-32"
                  src="/src/assets/img/icon/heart-fill.svg"
                />
              </a>
            </RouterLink>
          </li>
          <li class="customer-options-items">
            <RouterLink to="/carrinho">
              <a href="#">
                <img class="icon-32" src="/src/assets/img/icon/cart-fill.svg" />
              </a>
            </RouterLink>
          </li>
        </ul>
      </nav>

      <nav class="navbar secondary-menu ts18b">
        <li class="pet-type">
          <ul v-on:click="searchProductPet(512)" class="pet-type-items">
            <a href="">Cachorros</a>
          </ul>
          <ul v-on:click="searchProductPet(1024)" class="pet-type-items">
            <a href="">Gatos</a>
          </ul>
          <ul v-on:click="searchProductPet(2048)" class="pet-type-items">
            <a href="">Pássaros</a>
          </ul>
          <ul v-on:click="searchProductPet(4096)" class="pet-type-items">
            <a href="">Peixes</a>
          </ul>
          <ul v-on:click="searchProductPet(8192)" class="pet-type-items">
            <a href="">Outros bichinhos</a>
          </ul>
        </li>
        <li class="appointment">
          <RouterLink to="/minha-conta/servicos/adicionar">
            <ul class="appointment-items">
              <a href="">Banho e tosa</a>
            </ul>
          </RouterLink>
        </li>
      </nav>
    </div>
    <div id="nav-main-md">
      <div id="nav-main-top">
        <div>
          <nav class="ts18b">
            <div>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <img class="icon-32" src="/src/assets/img/icon/list.svg" />
              </button>
            </div>
            <div
              class="offcanvas offcanvas-start nav-main-header-component"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header navbar-main-header-title">
                <h1 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body navbar-main-header-window">
                <ul class="navbar-nav flex-grow-1 pe-3">
                  <div class="container-list">
                    <div id="secondary-menu-opt">
                      <ul
                        v-on:click="searchProductPet(512)"
                        class="nav-item bottom-line"
                      >
                        <a class="nav-link" aria-current="page" href="#"
                          >Cachorros</a
                        >
                      </ul>
                      <ul
                        v-on:click="searchProductPet(1024)"
                        class="nav-item bottom-line"
                      >
                        <a class="nav-link" href="#">Gatos</a>
                      </ul>
                      <ul
                        v-on:click="searchProductPet(2048)"
                        class="nav-item bottom-line"
                      >
                        <a class="nav-link" href="#">Pássaros</a>
                      </ul>
                      <ul
                        v-on:click="searchProductPet(4096)"
                        class="nav-item bottom-line"
                      >
                        <a class="nav-link" href="#">Peixes</a>
                      </ul>
                      <ul
                        v-on:click="searchProductPet(8192)"
                        class="nav-item bottom-line"
                      >
                        <a class="nav-link" href="#">Outros bichinhos</a>
                      </ul>

                      <RouterLink to="/minha-conta/servicos/adicionar">
                        <ul class="nav-item bottom-line">
                          <a class="nav-link" href="#">Banho e Tosa</a>
                        </ul>
                      </RouterLink>
                    </div>
                    <div id="secondary-login-menu">
                      <li class="customer-options-items bottom-line">
                        <RouterLink to="/wishlist">
                          <a href="#" class="wishlist-options">
                            <img
                              class="icon-32"
                              src="/src/assets/img/icon/heart-fill.svg"
                            />
                            <div class="hidden-xs login-options-text">
                              <p class="ts18r">Lista de Desejos</p>
                            </div>
                          </a>
                        </RouterLink>
                      </li>
                      <li
                        class="customer-options customer-options-items bottom-line"
                      >
                        <RouterLink to="/login">
                          <a href="#" class="login-options">
                            <img
                              class="icon-32"
                              src="/src/assets/img/icon/person-circle.svg"
                            />
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
            <img
              src="/src/assets/img/miaumarro/Logo_dynapuff.png"
              height="32"
            />
          </a>
        </RouterLink>
        <RouterLink to="/carrinho">
          <a id="nav-main-md-cart" href="cart.html">
            <img class="icon-32" src="/src/assets/img/icon/cart-fill.svg" />
          </a>
        </RouterLink>
      </div>
      <div class="navbar container-search">
        <form id="search-bar" class="form-inline container-fluid">
          <div class="col-11">
            <input
              class="ts12r form-black"
              type="search"
              id="searchedTerm"
              placeholder="O que você está procurando?"
              aria-label="Search"
            />
          </div>
          <div class="form-button col-1">
            <button class="btn btn-grey btn-icon" type="submit">
              <img class="icon-24" src="/src/assets/img/icon/search.svg" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
      term: null,
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
    },
    searchProductPet(petTag) {
      this.$router.push(`/pesquisa/Tags=${petTag}`);
    },
    searchProductTerm() {
      this.$router.push(`/pesquisa/SearchedTerm=${this.term}&SortParameter=0`);
    },
  },
};
</script>
