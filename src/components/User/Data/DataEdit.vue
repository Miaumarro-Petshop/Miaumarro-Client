<template>
  <article class="account">
    <form method="post" action="" class="ts14r row g-3">
      <div class="col-md-8 col-lg-6 space">
        <label for="name"></label>
        <input
          v-model="name"
          class="form-black form-data"
          id="name"
          name="name"
          type="name"
          placeholder="Nome"
        />
      </div>
      <div class="col-md-8 col-lg-6 space">
        <label for="surname"></label>
        <input
          v-model="surname"
          class="form-black form-data"
          id="surname"
          name="surname"
          type="name"
          placeholder="Sobrenome"
        />
      </div>
      <div class="col-md-8 col-lg-12 space">
        <label for="email"></label>
        <input
          v-model="email"
          class="form-black form-data"
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
        />
      </div>
      <div class="col-md-8 col-lg-6 space">
        <label for="cpf"></label>
        <input
          disabled
          v-model="cpf"
          class="form-black form-data"
          id="cpf"
          name="cpf"
          type="name"
          placeholder="CPF"
        />
      </div>
      <div class="col-md-8 col-lg-6 space">
        <label for="phone"></label>
        <input
          v-model="phone"
          class="form-black form-data"
          id="phone"
          name="phone"
          type="tel"
          placeholder="Celular"
        />
      </div>
    </form>
    <div class="col-md-8 col-lg-6" id="edit-button">
      <a href="">
        <button
          v-on:click="editUser()"
          class="btn btn-purple ts18b"
          type="submit"
        >
          Salvar Alterações
        </button>
      </a>
    </div>
  </article>
</template>
<script>
export default {
  data() {
    return {
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
      name: null,
      surname: null,
      email: null,
      cpf: null,
      phone: null,
      list: true,
    };
  },
  methods: {
    async getUser() {
      var resposta = await fetch(
        `https://localhost:7016/api/v1/User/details?userId=${this.userId}`,
        {
          headers: {
            'Authorization': `bearer ${this.token}`,
          },
        }
      );
      var json = await resposta.json();
      this.name = json.name;
      this.surname = json.surname;
      this.email = json.email;
      this.cpf = json.cpf;
      this.phone = json.phone;
    },
    async editUser() {
      await fetch(`https://localhost:7016/api/v1/User/update`, {
        method: "PUT",
        body: JSON.stringify({
          id: this.userId,
          name: this.name,
          surname: this.surname,
          email: this.email,
          phone: this.phone,
        }),
        headers: {
          'Authorization': `bearer ${this.token}`,
          'Content-Type' : 'application/json',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          //this.$router.push(`/minha-conta`);
        });
    },
  },
  beforeMount() {
    this.getUser();
  },
};
</script>
