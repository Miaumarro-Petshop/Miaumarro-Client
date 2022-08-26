<template>
  <main>
    <section class="customer-empty-container">
      <div class="card card-empty col col-lg-10">
        <img
          src="/src/assets/img/miaumarro/Logo_icon.svg"
          class="icon-64 icon-purple"
          alt="Cart icon"
        />
        <h1 class="ts18b ts-purple">Busca não encontrada :(</h1>
        <h2 class="ts14r col-lg-6">
          Não encontramos produtos com essas especificações. Tente realizar uma
          nova busca com outros termos ou navegue pelas categorias.
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
