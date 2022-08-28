<template>
  <main>
    <article class="account">
      <section>
        <h1 class="ts40 ts-purple">Acessar Conta</h1>
      </section>
      <section>
        <p class="ts12r ts-green">Complete os campos com suas informações.</p>
      </section>
      <form
        class="ts14r form-account"
      >
        <div v-if="errors.length" class="space ts18b">
          <p>Por favor, corrija o(s) erro(s):</p>
          <ul>
            <li class="space ts14r" v-for="error in errors" :key="error">
              {{ error }}
            </li>
          </ul>
        </div>
        <div>
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
        <div>
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
      </form>
      <section>
        <div id="account-button">
          <button
            v-on:click="login()"
            class="btn btn-purple col-8 col-md-8 col-lg-6"
          >
            Acessar conta
          </button>
        </div>
        <nav>
          <span class="ts14b ts-green">Novo na Miaumarro? </span>
          <RouterLink to="/cadastrar">
            <a class="ts14b link-green" href="#">
              <span>Crie sua conta.</span>
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
      errors: [],
      cpf: null,
      email: null,
      password: null,
    };
  },
  methods: {
    async login() {
      fetch('https://localhost:7016/api/v1/Authentication', {
  method: 'POST',
  body: JSON.stringify({
    cpf: null,
    email: this.email,
    password: this.password,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => {
          response.json().then((token) => {
            localStorage.setItem("token", token.sessionToken);
            localStorage.setItem("userId", token.id);
            this.$router.push(`/minha-conta`);
          });
        })
        .catch((err) => {
          alert(`Usuario ou senha incorretos. ${err.Messsage}`);
        });
    },
    checkForm: function (e) {
      this.errors = [];
      if (!this.email) {
        this.errors.push("Informe o e-mail");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Informe um e-mail válido.");
      }

      if (!this.password) {
        this.errors.push("Informe a senha.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    submitRegistration() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false; // stop here if form is invalid
      } else {
        alert("Form Valid");
      }
    },
    created() {
      this.submitted = true;
      return this.$v.$touch();
    },
    computed: {
      isDisabled() {
        return this.$v.$invalid;
      },
    },
  },
};
</script>
