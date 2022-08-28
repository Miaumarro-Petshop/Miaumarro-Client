<template>
  <main>
    <article class="account">
      <section>
        <h1 class="ts40 ts-purple">Meus pedidos</h1>
      </section>
      <section>
        <p class="ts12r ts-green">Aqui você pode acompanhar os seus pedidos!</p>
      </section>
      <div v-if="amount">
      <section>
        <div class="result-count">
          <p class="ts18b">{{ amount }} pedidos realizados</p>
        </div>
      </section>
      <div class="cards-list">
        <div v-for="p in purchases" :key="p.id">
          <a v-on:click="showPurchaseDetail(p.id)">
            <div class="card card-item">
              <div class="card-purchase">
                <div class="card-info">
                  <div class="card-title">
                    <h1 class="ts-green ts18b">Status do pedido: {{getPurchaseStatus(p.status)}}</h1>
                    <h2 class="ts-green ts14r">Pedido #{{ p.id}}</h2>
                    <h3 class="ts14r ts-green">{{p.products}} itens</h3>
                    <h4 class="ts14b ts-green">Total do pedido: R$ {{ calculatePurchaseTotal(p.products) }}</h4>
                  </div>

                  <div class="carousel-purchase">
                    <div class="owl-carousel owl-theme product-image">
                      <div class="item carousel-img">
                        <img
                          src="../../../assets/img/miaumarro/Logo_dynapuff.png"
                        />
                      </div>
                      <div class="item carousel-img">
                        <img
                          src="../../../assets/img/miaumarro/Logo_dynapuff.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        </div>
      </div>
      <div v-else>
        <PurchaseEmpty></PurchaseEmpty>
      </div>
    </article>
  </main>
</template>
<script>
import PurchaseEmpty from "./PurchaseEmpty.vue";
export default {
  data() {
    return {
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
      purchases: [],
      currentPage: 0,
      amount: 0,
      totalPages: 0,
      hasPreviousPage: false,
      hasNextPage: false,
    };
  },
  methods: {
    async getPurchases() {
      var resposta = await fetch(
        `https://localhost:7016/api/v1/Purchase?UserId=${this.userId}`,
        {
          headers: {
            "Authorization": `bearer ${this.token}`,
          },
        }
      );
      var json = await resposta.json();
      this.purchases = json.response;
      this.currentPage = json.pageNumber;
      this.amount = json.previousCount + json.amount + json.nextCount;
      this.totalPages = Math.ceil(this.amount / json.pageSize);
      this.hasPreviousPage = json.previousCount != 0;
      this.hasNextPage = json.nextCount != 0;
    },
    installOwlCarousel() {
      // eslint-disable-next-line no-undef
      $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 2,
        nav: false,
        dots: false,
        autoWidth: true,
      });
    },
    getPurchaseStatus(status){
      switch (status){
        case 0:
          return "Cancelado";
        case 1:
          return "Pendente";
        case 2:
          return "Processado";
        case 3:
          return "Em trânsito";
        case 4:
          return "Entregue";
      }
    },
    calculatePurchaseTotal(products){
      var price = 0;
      for (var i = 0; i < products.lenght ; i++){
        price += products[i].price;
      }
      return price;
    },
  },
  beforeMount() {
    this.getPurchases();
    this.$nextTick(function () {
      this.installOwlCarousel();
    });
  },
  showPurchaseDetail(purchaseId) {
      this.$router.push(`/minha-conta/pedidos/${purchaseId}`);
      localStorage.setItem("purchaseId", purchaseId);
    },
  components: {
    PurchaseEmpty: PurchaseEmpty,
  },
};
</script>
