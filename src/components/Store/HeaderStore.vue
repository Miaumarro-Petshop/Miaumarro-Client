<template>
  <header>
    <div id="nav-main-lg">
      <nav class="navbar primary-menu">
        <a href="#" class="navbar-brand">
          <img src="../../assets/img/miaumarro/Logo_dynapuff.png" height="40" />
        </a>

        <form
          id="search-bar"
          class="form-inline container-fluid"
          action="./Product/index.html"
          method="post"
        >
          <input
            class="ts12r form-black"
            type="search"
            id="searchedTerm"
            placeholder="O que você está procurando?"
            aria-label="Search"
          />
          <div class="form-button">
            <button class="btn btn-grey btn-icon" type="submit">
              <img class="icon-24" src="../../assets/img/icon/search.svg" />
            </button>
          </div>
        </form>

        <li class="customer-options">
          <ul class="customer-options-items">
            <a href="#" class="login-options">
              <img
                class="icon-32"
                src="../../assets/img/icon/person-circle.svg"
              />
              <div class="hidden-xs login-options-text">
                <p class="ts18r">Bem vindo(a)</p>
                <p class="ts12r">Entre ou Cadastre-se</p>
              </div>
            </a>
          </ul>
          <ul class="customer-options-items">
            <a href="#">
              <img class="icon-32" src="../../assets/img/icon/heart-fill.svg" />
            </a>
          </ul>
          <ul class="customer-options-items">
            <a href="#">
              <img class="icon-32" src="../../assets/img/icon/cart-fill.svg" />
            </a>
          </ul>
        </li>
      </nav>

      <nav class="navbar secondary-menu ts18b">
        <li class="pet-type">
          <ul class="pet-type-items">
            <a href="">Cachorros</a>
          </ul>
          <ul class="pet-type-items">
            <a href="">Gatos</a>
          </ul>
          <ul class="pet-type-items">
            <a href="">Pássaros</a>
          </ul>
          <ul class="pet-type-items">
            <a href="">Peixes</a>
          </ul>
          <ul class="pet-type-items">
            <a href="">Outros bichinhos</a>
          </ul>
        </li>
        <li class="appointment">
          <ul class="appointment-items">
            <a href="">Banho e tosa</a>
          </ul>
        </li>
      </nav>
    </div>
    <div id="nav-main-md">
      <div class="navbar container-fluid">
        <a id="nav-main-md-menu" href="#">
          <img class="icon-32" src="../../assets/img/icon/list.svg" />
        </a>
        <a id="nav-main-md-brand" href="#">
          <img src="../../assets/img/miaumarro/Logo_dynapuff.png" height="32" />
        </a>
        <a id="nav-main-md-cart" href="#">
          <img class="icon-32" src="../../assets/img/icon/cart-fill.svg" />
        </a>
      </div>
      <div class="navbar container-fluid">
        <form
          id="search-bar"
          class="form-inline container-fluid"
          action="./Product/index.html"
          method="post"
        >
          <input
            class="ts12r form-black"
            type="search"
            id="searchedTerm"
            placeholder="O que você está procurando?"
            aria-label="Search"
          />
          <div class="form-button">
            <button class="btn btn-grey btn-icon" type="submit">
              <img class="icon-24" src="../../assets/img/icon/search.svg" />
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
