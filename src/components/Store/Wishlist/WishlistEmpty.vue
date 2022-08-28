<template>
  <main>
    <section class="customer-empty-container">
      <div class="card card-empty col col-lg-10">
        <img
          src="../../../assets/img/icon/heart-fill.svg"
          class="icon-64 icon-purple"
          alt="Heart icon"
        />
        <h1 class="ts18b ts-purple">
          Sua lista de desejos está vazia no momento
        </h1>
        <h2 class="ts14r col-lg-6">
          Você não possui produtos favoritos, continue navegando pelo site para
          conhecer novos produtos.
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
