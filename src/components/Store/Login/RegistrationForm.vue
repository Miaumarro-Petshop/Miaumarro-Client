<template>
<main>
        <article class="account">
            <section>
                <h1 class="ts40 ts-purple">Criar Conta</h1>
            </section>
            <section>
                <p class="ts12r ts-green">Complete os campos com suas informações.</p>
            </section>
            <form method="post" action="" class="ts14r form-account">
                <div class="col-8 div-100">
                    <label for="email"></label>
                    <input class="form-black col-8 col-md-8 col-lg-6" id="email" name="email" type="email" placeholder="E-mail" required>
                </div>
                <div class="col-8 div-100">
                    <label for="password"></label>
                    <input class="form-black col-8 col-md-8 col-lg-6" id="password" name="password" type="password" placeholder="Senha" required>
                </div>
                <div class="col-8 div-100">
                    <label for="confirmPassword"></label>
                    <input class="form-black col-8 col-md-8 col-lg-6" id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirmar senha" required>
                </div>
                <div class="col-8 div-100">
                    <p class="ts12r ts-green space">
                        A senha deve conter letras minusculas, maiusculas e no mínimo 8 caracteres.
                    </p>
                </div>
                <div id="account-button">
                    <button class="btn btn-purple col-8 col-md-8 col-lg-6" type="submit">Criar conta</button>
                </div>
            </form>
            <section>
                <nav>
                    <span class="ts14b ts-green">Já tem cadastro com a gente? </span>
                    <RouterLink to="/login">
                    <a class="ts14b link-green" href="#">
                        <span>Acesse sua conta.</span>
                    </a>
                    </RouterLink>
                </nav>
            </section>
        </article>
    </main>
</template>
<script></script>
