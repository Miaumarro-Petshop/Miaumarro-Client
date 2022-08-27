<template>
<main>
        <article class="account">
            <section>
                <h1 class="ts40 ts-purple">Meus endereços</h1>
            </section>
            <section>
                <p class="ts12r ts-green">Mantenha seus endereços sempre atualizados e identificados para facilitar sua compra.</p>
            </section>
            <div v-if="resultAmount">
            <section>
                <div class="result-count">
                    <p class="ts18b">{{ resultAmount }} endereços adicionados</p>
                </div>
            </section>
            <div
            v-for="a in addresses"
            :key="a.id"
          >
            <div class="cards-list">
                    <a v-on:click="showAddressDetail(a.id)">
                        <div class="card card-item space">
                            <div class="col col-lg-2">
                                <img class="card-img-h" src="../../../assets/img/icon/house-door-fill.svg" alt="House Image">
                            </div>
                            <div class="card-body-data col col-lg-10">
                                <div class="card-info">
                                    <div class="card-title">
                                        <h1 class="ts18b ts-green">{{ a.destinatary }}</h1>
                                        <p class="ts14r ts-green">{{ a.address }}, {{ a.number }} - {{ a.complement }}</p>
                                        <p class="ts14r ts-green">{{ a.reference }}</p>
                                        <p class="ts14r ts-green">{{ a.neighborhood }} - {{ a.city }} - {{ a.state }}</p>
                                        <p class="ts14r ts-green">{{ a.cep }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
            </div>
            </div>
            </div>
            <div v-else>
                <AddressEmpty></AddressEmpty>
            </div>
            <div class="col-md-8 col-lg-3" id="center-btn">
                 <a href="#" class="row">
                <RouterLink to="minha-conta/enderecos/adicionar">
                <button class="btn btn-purple btn-48 ts18b" type="submit">Adicionar endereço</button>
            </RouterLink>
            </a>
            
            </div>
        </article>
    </main>
</template>
<script>
    import AddressEmpty from "./AddressEmpty.vue";
    export default {
  data() {
    return {
    userId: localStorage.getItem("userId"),
    token: localStorage.getItem("token"),
      addresses: [],
      currentPage: 0,
      resultAmount: 0,
    };
  },
  methods: {
    async getAddresses() {
      var resposta = await fetch(
        `https://localhost:7016/api/v1/Address?UserId=${this.userId}`, {headers: {
    'Authorization': `bearer ${this.token}`,
  },
});
      var json = await resposta.json();
      this.addresses = json.response;
      this.currentPage = json.pageNumber;
      this.resultAmount = json.previousCount + json.amount + json.nextCount;
    },
    showAddressDetail(addressId) {
      this.$router.push(`/minha-conta/enderecos/${addressId}`);
      localStorage.setItem("addressId", addressId);
    },
  },
  beforeMount() {
    this.currentPage = 0;
    this.getAddresses();
  },
  components: {
    AddressEmpty: AddressEmpty,
  },
};
</script>
