<template>
  <main>
    <section class="customer-empty-container">
      <div class="card card-empty col col-lg-10">
        <img
          src="../../../assets/img/icon/cart-fill.svg"
          class="icon-64 icon-purple"
          alt="Cart icon"
        />
        <h1 class="ts18b ts-purple">Seu carrinho está vazio no momento</h1>
        <h2 class="ts14r col-lg-6">
          Para continuar comprando, navegue pelas categorias e faça uma busca
          por produtos.
        </h2>
      </div>

      <RouterLink to="/">
        <a class="row">
          <button class="btn btn-purple btn-48 ts18b" type="submit">
            Continuar navegando
          </button>
        </a>
      </RouterLink>
    </section>
  </main>
</template>
<script></script>
