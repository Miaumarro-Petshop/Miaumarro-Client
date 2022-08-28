<template>
        <section>
        <h1 class="ts40 ts-purple space">Editar endereço</h1>
      </section>
      <form method="post" action="" class="ts14r row g-3">
        <div id="form-cep">
          <div class="col-6 col-md-6 col-lg-5 space">
            <label for="cep"></label>
            <input
            v-model="cep"
              class="form-black form-data"
              id="cep"
              name="cep"
              type="text"
              placeholder="CEP"
            />
          </div>
          <div class="col-4 col-md-4 col-lg-4 space" id="search-button">
            <a href="">
              <button class="btn btn-purple ts14b">Buscar</button>
            </a>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-12 space">
          <label for="address"></label>
          <input
            v-model="address"
            class="form-black form-data"
            id="address"
            name="address"
            type="text"
            placeholder="Endereço"
          />
        </div>
        <div class="col-4 col-md-4 col-lg-2 space">
          <label for="number"></label>
          <input
            v-model="number"
            class="form-black form-data"
            id="number"
            name="number"
            type="text"
            placeholder="Número"
          />
        </div>
        <div class="col-8 col-md-8 col-lg-5 space">
          <label for="complement"></label>
          <input
            v-model="complement"
            class="form-black form-data"
            id="complement"
            name="complement"
            type="text"
            placeholder="Complemento (Apto, Bloco, Andar)"
          />
        </div>
        <div class="col-6 col-md-6 col-lg-5 space">
          <label for="reference"></label>
          <input
            v-model="reference"
            class="form-black form-data"
            id="reference"
            name="reference"
            type="text"
            placeholder="Ponto de referência"
          />
        </div>
        <div class="col-6 col-md-6 col-lg-5 space">
          <label for="neighborhood"></label>
          <input
            v-model="neighborhood"
            class="form-black form-data"
            id="neighborhood"
            name="neighborhood"
            type="text"
            placeholder="Bairro"
          />
        </div>
        <div class="col-8 col-md-8 col-lg-5 space">
          <label for="city"></label>
          <input
            v-model="city"
            class="form-black form-data"
            id="city"
            name="city"
            type="text"
            placeholder="Cidade"
          />
        </div>
        <div class="col-4 col-md-4 col-lg-2 space">
          <label for="state"></label>
          <input
            v-model="state"
            class="form-black form-data"
            id="state"
            name="state"
            type="text"
            placeholder="UF"
          />
        </div>
        <div class="col-12 col-md-12 col-lg-12 space">
          <label for="destinatary"></label>
          <input
            v-model="destinatary"
            class="form-black form-data"
            id="destinatary"
            name="destinatary"
            type="name"
            placeholder="Nome do destinatário"
          />
        </div>
      </form>
      <div class="col-md-8 col-lg-6" id="edit-button">
          <a href="">
            <button
              v-on:click="editAddress()"
              class="btn btn-purple ts18b"
              type="submit"
            >
              Salvar informações
            </button>
          </a>
        </div>
</template>
<script>
export default {
  data() {
    return {
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
      addressId: localStorage.getItem("addressId"),
      id: null,
      state: null,
      city: null,
      neighborhood: null,
      cep: null,
      address: null,
      number: null,
      complement: null,
      reference: null,
      destinatary: null,
      detail: true,
    };
  },
  methods: {
    async getAddress() {
      var resposta = await fetch(
        `https://localhost:7016/api/v1/Address/details?UserId=${this.userId}&AddressId=${this.addressId}`,
        {
          headers: {
            'Authorization': `bearer ${this.token}`,
          },
        }
      );
      var json = await resposta.json();
      this.state = json.state;
      this.city = json.city;
      this.neighborhood = json.neighborhood;
      this.cep = json.cep;
      this.address = json.address;
      this.number = json.number;
      this.complement = json.complement;
      this.reference = json.reference;
      this.destinatary = json.destinatary;
    },
    async editAddress() {
      await fetch(`https://localhost:7016/api/v1/Address/update`, {
        method: "PUT",
        body: JSON.stringify({
          id: this.addressId,
            userId: this.userId,
            state: this.state,
            city: this.city,
            neighborhood: this.neighborhood,
            cep: this.cep,
            address: this.address,
            addressNumber: this.number,
            complement: this.complement,
            reference: this.reference,
            destinatary: this.destinatary,
        }),
        headers: {
          'Authorization': `bearer ${this.token}`,
          'Content-Type' : 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          this.$router.push(`/minha-conta/enderecos/${addressId}`);
        });
    },
  },
  beforeMount() {
    this.getAddress();
  },
}
</script>
