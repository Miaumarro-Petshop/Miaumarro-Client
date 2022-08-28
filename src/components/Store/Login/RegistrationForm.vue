<template>
  <main>
    <article class="account">
      <section>
        <h1 class="ts40 ts-purple">Criar Conta</h1>
      </section>
      <section>
        <p class="ts12r ts-green">Complete os campos com suas informações.</p>
      </section>
      <form class="ts14r form-account" @submit="checkForm" novalidate="true">
        <div class="col-8 div-100">
          <label for="name"></label>
          <input
            v-model="name"
            class="form-black col-8 col-md-8 col-lg-6"
            id="name"
            name="name"
            type="text"
            placeholder="Nome"
            required
          />
        </div>
        <div class="col-8 div-100">
          <label for="surname"></label>
          <input
            v-model="surname"
            class="form-black col-8 col-md-8 col-lg-6"
            id="surname"
            name="surname"
            type="text"
            placeholder="Sobrenome"
            required
          />
        </div>
        <div class="col-8 div-100">
          <label for="phone"></label>
          <input
            v-model="phone"
            class="form-black col-8 col-md-8 col-lg-6"
            id="phone"
            name="phone"
            type="text"
            placeholder="Telefone (apenas números)"
            required
          />
        </div>
        <div class="col-8 div-100">
          <label for="cpf"></label>
          <input
            v-model="cpf"
            class="form-black col-8 col-md-8 col-lg-6"
            id="cpf"
            name="cpf"
            type="text"
            placeholder="CPF"
            required
          />
        </div>
        <div class="col-8 div-100">
          <label for="email"></label>
          <input
            v-model="email"
            class="form-black col-8 col-md-8 col-lg-6"
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            required
          />
        </div>
        <div class="col-8 div-100">
          <label for="password"></label>
          <input
            v-model="password"
            class="form-black col-8 col-md-8 col-lg-6"
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            required
          />
        </div>
        <div class="col-8 div-100">
          <label for="confirmPassword"></label>
          <input
            v-model="confirmPassword"
            class="form-black col-8 col-md-8 col-lg-6"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirmar senha"
            required
          />
        </div>
        <div class="col-8 div-100">
          <p class="ts12r ts-green space">
            A senha deve conter letras minusculas, maiusculas e no mínimo 8
            caracteres.
          </p>
        </div>
      </form>
      <div id="account-button" class="space">
        <button
          v-on:click="checkForm()"
          class="btn btn-purple col-8 col-md-8 col-lg-6"
          onclick="this.blur();"
        >
          Criar conta
        </button>
      </div>
      <div v-if="errors.length" class="text-danger">
        <p class="ts18b">Por favor, corrija o(s) seguinte(s) erro(s):</p>
        <ul class="ts14r">
          <p v-for="error in errors" :key="error">{{ error }}</p>
        </ul>
      </div>
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
<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      confirmPassword: null,
      cpf: null,
      name: null,
      surname: null,
      phone: null,
      errors: [],
      validForm: false,
      errorsApi: [],
    };
  },
  methods: {
    async createUser() {
      await fetch("https://localhost:7016/api/v1/User/create", {
        method: "POST",
        body: JSON.stringify({
          cpf: this.cpf,
          name: this.name,
          surname: this.surname,
          email: this.email,
          phone: this.phone,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => {
        response.json().then((token) => {
          localStorage.setItem("token", token.sessionToken);
          localStorage.setItem("userId", token.id);
          this.errorsAPI = token.errors;
          this.$router.push(`/minha-conta`);
        });
      });
    },
    checkForm() {
      this.errors = [];
      if (!this.name) {
        this.errors.push("Informe o seu nome.");
      }
      if (!this.surname) {
        this.errors.push("Informe o seu sobrenome.");
      }

      if (this.phone && !this.isNumber(this.phone)) {
        this.errors.push(
          "O telefone deve conter apenas dígitos (entre 10 e 14 dígitos)."
        );
      } else if (this.phone && this.phone.length < 10) {
        this.errors.push("O telefone deve ter entre 10 e 14 dígitos.");
      }
      if (!this.cpf) {
        this.errors.push("Informe o cpf");
      } else if (!this.isNumber(this.cpf)) {
        this.errors.push("O CPF deve conter apenas dígitos (11 dígitos).");
      } else if (this.cpf.length != 11) {
        this.errors.push("O CPF deve ter 11 dígitos.");
      }
      if (!this.email) {
        this.errors.push("Informe o e-mail");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Informe um e-mail válido.");
      }
      if (!this.password) {
        this.errors.push("Informe a senha.");
      }
      if (!this.confirmPassword) {
        this.errors.push("Informe a senha novamente.");
      }
      if (this.password != this.confirmPassword) {
        this.errors.push("A senha informada não coincide.");
      }
      if (!this.errors.length) {
        this.createUser();
        return true;
      }
    },
    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
    },
  },
};
</script>
