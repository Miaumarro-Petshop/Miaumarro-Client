<template>
  <main>
        <article class="account">
        <section>
            <h1 class="ts40 ts-purple">Adicionar endereço</h1>
        </section>
        <section>
            <p class="ts12r ts-green">Informe um CEP para adicionar um novo endereço</p>
        </section>
        <form method="post" action="" class="ts14r row g-3" id="form-cep">
        <div class="col-6 col-md-6 col-lg-5">
            <label for="cep"></label>
            <input class="form-black form-data" id="cep" name="cep" type="text" placeholder="CEP">
        </div>
        <div class="col-4 col-md-4 col-lg-4" id="search-button">
            <a href="">
                <button class="btn btn-purple ts14b" type="submit">Buscar</button>
            </a>
        </div>
        </form>
        <form method="post" action="" class="ts14r row g-3">
        <div class="col-12 col-md-12 col-lg-12 space">
            <label for="address"></label>
            <input class="form-black form-data" id="address" name="address" type="text" placeholder="Endereço">
        </div>
        <div class="col-4 col-md-4 col-lg-2 space">
            <label for="number"></label>
            <input class="form-black form-data" id="number" name="number" type="text" placeholder="Número">
        </div>
        <div class="col-8 col-md-8 col-lg-5 space">
            <label for="complement"></label>
            <input class="form-black form-data" id="complement" name="complement" type="text" placeholder="Complemento (Apto, Bloco, Andar)">
        </div>
        <div class="col-6 col-md-6 col-lg-5 space">
            <label for="reference"></label>
            <input class="form-black form-data" id="reference" name="reference" type="text" placeholder="Ponto de referência">
        </div>
        <div class="col-6 col-md-6 col-lg-5 space">
            <label for="neighborhood"></label>
            <input class="form-black form-data" id="neighborhood" name="neighborhood" type="text" placeholder="Bairro">
        </div>
        <div class="col-8 col-md-8 col-lg-5 space">
            <label for="city"></label>
            <input class="form-black form-data" id="city" name="city" type="text" placeholder="Cidade">
        </div>
        <div class="col-4 col-md-4 col-lg-2 space">
            <label for="uf"></label>
            <input class="form-black form-data" id="uf" name="uf" type="text" placeholder="UF">
        </div>
        <div class="col-12 col-md-12 col-lg-12 space">
            <label for="destinatary"></label>
            <input class="form-black form-data" id="destinatary" name="destinatary" type="name" placeholder="Nome do destinatário">
        </div>
        <div class="col-md-8 col-lg-3" id="edit-button">
            <a href="">
                <button class="btn btn-purple ts18b" type="submit">Salvar endereço</button>
            </a>
        </div>
      </form>
    </article>
</main>
</template>
<script></script>
