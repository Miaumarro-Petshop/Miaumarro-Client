<template>
  <main>
    <section id="customer-wishlist">
      <div v-if="resultAmount">
        <div class="wishlist-title">
          <h1 class="ts40 ts-purple">Lista de desejos</h1>
          <p class="ts18b">Produtos favoritos</p>
        </div>

        <div class="wishlist-products">
          <div class="result-count">
            <p class="ts18b">{{ resultAmount }} produtos favoritados</p>
          </div>
          <li class="cards-list">
            <div v-for="p in products" :key="p.id">
              <ul>
                <div class="card card-product-wishlist">
                  <div
                    v-on:click="showProductDetail(p.id)"
                    class="col-sm-2 col-md-2 col-lg-2"
                  >
                    <div class="card-img">
                      <img
                        src="/src/assets/img/miaumarro/logo_icon.svg"
                        alt="Product Image"
                      />
                    </div>
                  </div>
                  <div class="col-sm-10 col-md-10 col-lg-10">
                    <div class="card-body">
                      <div class="card-info">
                        <div
                          v-on:click="showProductDetail(p.id)"
                          class="card-title"
                        >
                          <h1 class="ts24b">
                            {{ p.name }}
                          </h1>
                          <h2 class="ts14b ts-purple">
                            CÓDIGO DO PRODUTO: {{ p.id }}
                          </h2>
                        </div>
                        <div class="card-text-cart">
                          <div
                            v-on:click="showProductDetail(p.id)"
                            class="card-text"
                          >
                            <p class="ts-line-through ts14r">
                              R$ {{ p.price }}
                            </p>
                            <h3 class="ts28b">
                              R$
                              {{
                                Math.round(p.price * (1 - p.discount) * 100) /
                                100
                              }}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div
                        v-on:click="deleteFromWishlist(p.id)"
                        class="card-icon"
                      >
                        <a>
                          <img
                            src="/src/assets/img/icon/heart-fill-purple.svg"
                            class="icon-32"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </li>
        </div>

        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li v-if="hasPreviousPage" class="page-item">
              <a
                v-on:click="previousPage()"
                class="page-link ts-purple ts18b"
                tabindex="-1"
              >
                <span aria-hidden="true" class="ts24r">&lt;</span>
                <span class="sr-only">Anterior</span>
              </a>
            </li>
            <li v-else class="page-item disabled">
              <a class="page-link ts-purple ts18b" tabindex="-1">
                <span aria-hidden="true" class="ts24r">&lt;</span>
                <span class="sr-only">Anterior</span>
              </a>
            </li>
            <li class="page-item">
              <p class="ts24b ts-purple">{{ currentPage + 1 }}</p>
            </li>
            <li class="page-item">
              <p class="ts24r">de {{ totalPages }}</p>
            </li>
            <li v-if="hasNextPage" class="page-item">
              <a
                v-on:click="nextPage()"
                class="page-link ts18b ts-purple"
                href="#"
              >
                <span class="sr-only">Próxima</span>
                <span aria-hidden="true" class="ts24r">&gt;</span>
              </a>
            </li>
            <li v-else class="page-item disabled">
              <a class="page-link ts18b ts-purple" href="#">
                <span class="sr-only">Próxima</span>
                <span aria-hidden="true" class="ts24r">&gt;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div v-else>
        <WishlistEmpty></WishlistEmpty>
      </div>
    </section>
  </main>
</template>
<script>
import WishlistEmpty from "./WishlistEmpty.vue";
export default {
  data() {
    return {
      products: [],
      currentPage: 0,
      resultAmount: 0,
      totalPages: 0,
      hasPreviousPage: false,
      hasNextPage: false,
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
    };
  },
  methods: {
    async getWishlistProducts() {
      if (localStorage.getItem("token") && localStorage.getItem("userId")) {
        var resposta = await fetch(
          `https://localhost:7016/api/v1/Wishlist?UserId=${this.userId}`,
          {
            headers: {
              "Authorization": `bearer ${this.token}`,
            },
          }
        );
        var json = await resposta.json();
        this.products = json.response;
        this.currentPage = json.pageNumber;
        this.resultAmount = json.previousCount + json.amount + json.nextCount;
        this.totalPages = Math.ceil(this.resultAmount / json.pageSize);
        this.hasPreviousPage = json.previousCount != 0;
        this.hasNextPage = json.nextCount != 0;
      } else {
        this.$router.push(`/login`);
      }
    },
    async deleteFromWishlist(productId) {
      await fetch(
        `https://localhost:7016/api/v1/Wishlist/delete?UserId=${this.userId}&ProductId=${productId}`,
        {
          method: "DELETE",
          headers: {
            "Authorization": `bearer ${this.token}`,
          },
        }
      );
      this.$router.go();
    },
    showProductDetail(productId) {
      this.$router.push(`/produto/${productId}`);
    },
  },
  beforeMount() {
    if (this.userId && this.token) {
      this.getWishlistProducts();
    } else {
      this.$router.push(`/login`);
    }
  },
  components: {
    WishlistEmpty: WishlistEmpty,
  },
};
</script>
