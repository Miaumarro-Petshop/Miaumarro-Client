<template>
  <main>
        <article class="account">
            <section>
                <h1 class="ts40 ts-purple">Acessar Conta</h1>
            </section>
            <section>
                <p class="ts12r ts-green">Complete os campos com suas informações.</p>
            </section>
            <form method="post" action="" class="ts14r form-account">
                <div>
                    <label for="email"></label>
                    <input class="form-black col-8 col-md-8 col-lg-6" id="email" name="email" type="email" placeholder="E-mail" required>
                </div>
                <div>
                    <label for="password"></label>
                    <input class="form-black col-8 col-md-8 col-lg-6" id="password" name="password" type="password" placeholder="Senha" required>
                </div>
                <div id="account-button">
                    <button class="btn btn-purple col-8 col-md-8 col-lg-6" type="submit">Acessar conta</button>
                </div>
            </form>
            <section>
                <nav>
                    <span class="ts14b ts-green">Novo na Miaumarro? </span>
                    <a class="ts14b link-green" href="../RegistrationPage/">
                        <span>Crie sua conta.</span>
                    </a>
                </nav>
            </section>
        </article>
    </main>
</template>
<script></script>
