<template>
  <main>
        <section class="admin-page">
            <div class="admin-header-subtitle">
                <h1 class="ts28b ts-purple">Usuários</h1>
                <h2 class="ts18b">Cadastrar</h2>
            </div>

            <form method="post" action="" id="create-user" class="ts14r row g-3">
                <div class="col-md-8 col-lg-8">
                    <label for="cpf"></label>
                    <input class="form-grey form-data" id="cpf" name="cpf" type="text" placeholder="CPF">
                </div>
                <div class="col-md-8 col-lg-8">
                    <label for="name"></label>
                    <input class="form-grey form-data" id="name" name="name" type="text" placeholder="Nome">
                </div>
                <div class="col-md-8 col-lg-8">
                    <label for="surname"></label>
                    <input class="form-grey form-data" id="surname" name="surname" type="text" placeholder="Sobrenome">
                </div>
                <div class="col-md-8 col-lg-8">
                    <label for="email"></label>
                    <input class="form-grey form-data" id="email" name="email" type="email" placeholder="E-mail">
                </div>
                <div class="col-md-8 col-lg-8 space">
                    <label for="phone"></label>
                    <input class="form-grey form-data" id="phone" name="phone" type="text" placeholder="Telefone">
                </div>
                <a href="">
                    <button class="btn btn-purple ts18b col-md-8 col-lg-6" method="post" type="submit">Cadastrar usuário</button>
                </a>
            </form>
        </section>

    </main>
</template>
<script></script>
