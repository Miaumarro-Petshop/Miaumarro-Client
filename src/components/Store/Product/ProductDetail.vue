<template>
  <main>
    <section id="product-detail">
      <div class="product-path">
        <span class="ts18b">Página inicial</span>
        <span class="ts-purple divider">&gt;</span>
        <span class="ts18b">Cachorros</span>
      </div>

      <div class="product-container row">
        <div class="product-image col col-md-5 col-lg-3">
          <div class="main-image">
            <img
              src="/src/assets/img/miaumarro/logo_icon.svg"
              alt="Product Image"
            />
          </div>
          <div class="owl-carousel owl-theme">
            <a href="">
              <div class="item carousel-img img-selected">
                <img src="/src/assets/img/miaumarro/logo_icon.svg" />
              </div>
            </a>
            <a href="">
              <div class="item carousel-img">
                <img src="/src/assets/img/miaumarro/Logo_dynapuff.png" />
              </div>
            </a>
            <a href="">
              <div class="item carousel-img">
                <img src="/src/assets/img/miaumarro/logo_icon.svg" />
              </div>
            </a>
            <a href="">
              <div class="item carousel-img">
                <img src="/src/assets/img/miaumarro/logo_icon.svg" />
              </div>
            </a>
          </div>
        </div>

        <div :key="favorited" class="product-info col col-md-6 col-lg-5">
          <div class="d-flex flex-row justify-content-between">
            <div>
              <p class="upper ts14b ts-purple">
                {{ product.brand }}
              </p>
              <h1 class="ts24b">
                {{ product.name }}
              </h1>
            </div>

            <div
              v-if="favorited"
              v-on:click="deleteFromWishlist()"
              class="card-icon"
            >
              <a>
                <img
                  src="/src/assets/img/icon/heart-fill-purple.svg"
                  class="icon-32"
                />
              </a>
            </div>
            <div v-else v-on:click="addToWishlist()" class="card-icon">
              <a>
                <img src="/src/assets/img/icon/heart.svg" class="icon-32" />
              </a>
            </div>
          </div>
          <p class="upper ts14b ts-grey">Código do produto: {{ product.id }}</p>

          <div class="product-info-review">
            <div id="product-info-score">
              <p class="ts18b">5,00</p>
              <img src="/src/assets/img/icon/star-fill.svg" class="icon-16" />
            </div>
            <p class="ts14b ts-purple">(xxx avaliações)</p>
          </div>

          <div id="product-description">
            <h2 class="ts14b upper">Descrição</h2>

            <p class="ts14r">
              {{ product.description }}
            </p>
          </div>
        </div>

        <div class="card card-product-buy col col-md-4 col-lg-3">
          <div class="product-buy-price">
            <div class="product-amount">
              <h1 class="upper ts14b">Quantidade</h1>
              <div class="counter">
                <button
                  v-on:click="counterSubtract()"
                  class="btn btn-purple ts24r"
                  onclick="this.blur();"
                >
                  -
                </button>
                <div
                  class="counter-display ts24r ts-black"
                  id="product-detail-counter-display"
                >
                  {{ counter }}
                </div>
                <button
                  v-on:click="counterAdd()"
                  class="btn btn-purple ts24r"
                  onclick="this.blur();"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <p class="card-text ts18r ts-purple ts-line-through">
                R$
                {{ product.price }}
              </p>
              <p class="card-text ts28b">
                R$
                {{
                  Math.round(product.price * (1 - product.discount) * 100) / 100
                }}
              </p>
            </div>
          </div>

          <div class="product-buy">
            <button
              class="btn btn-green btn-buy ts24b"
              type="submit"
              v-on:click="addToCart()"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
      <button v-on:click="deleteFromWishlist()">DELETAR DA WISHLIST</button>
      <button v-on:click="addToWishlist()">ADICIONAR NA WISHLIST</button>

      <div class="accordion" id="accordionProductReview">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button ts18b"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Avaliações
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <li class="product-review-list">
                <ul>
                  <div class="user- score">
                    <img
                      src="/src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img
                      src="/src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img
                      src="/src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img
                      src="/src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img
                      src="/src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                  </div>
                  <div class="user- review">
                    <p class="ts14r">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus
                    </p>
                  </div>
                </ul>
                <ul>
                  <div class="user- score">
                    <img
                      src="/src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img
                      src="/src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img
                      src="/src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img
                      src="/src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img src="/src/assets/img/icon/star.svg" class="icon-32" />
                  </div>
                  <div class="user- review">
                    <p class="ts14r">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim. Donec pede justo, fringilla vel, aliquet nec,
                      vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
                      a, venenatis vitae, justo. Nullam dictum felis eu pede
                      mollis pretium. Integer tincidunt. Cras dapibu
                    </p>
                  </div>
                </ul>
                <div class="product-filter-button">
                  <button
                    class="btn btn-purple ts18b col col-md-4 col-lg-4"
                    type="submit"
                  >
                    Ver mais avaliações
                  </button>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      product: null,
      id: this.$route.params.id,
      counter: 1,
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
      favorited: 0,
    };
  },
  methods: {
    async getProductById() {
      var resposta = await fetch(
        `https://localhost:7016/api/v1/Product/details?id=${this.id}`
      );
      var json = await resposta.json();
      this.product = json;
    },
    counterAdd() {
      this.counter++;
    },
    counterSubtract() {
      if (this.counter > 1) this.counter--;
    },
    addToCart() {
      let cartItems = [];
      if (localStorage.getItem("cart")) {
        cartItems = JSON.parse(localStorage.getItem("cart"));
      }

      if (cartItems.find((item) => item.productId == this.product.id)) {
        let index = cartItems.findIndex(
          (item) => item.productId == this.product.id
        );
        cartItems[index].amount += this.counter;
      } else {
        cartItems.push({
          productId: this.product.id,
          amount: this.counter,
        });
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.$router.push(`/carrinho`);
    },
    installOwlCarousel() {
      // eslint-disable-next-line no-undef
      $(".owl-carousel").owlCarousel({
        margin: 4,
        dots: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 3,
            nav: true,
          },
          990: {
            items: 2,
            nav: false,
          },
          1280: {
            items: 3,
            nav: true,
            loop: false,
          },
        },
      });
    },
    async isFavorited() {
      console.log("check isFavorited");
      if (this.userId && this.token) {
        var resposta = await fetch(
          `https://localhost:7016/api/v1/Wishlist?UserId=${this.userId}`,
          {
            headers: {
              Authorization: `bearer ${this.token}`,
            },
          }
        );

        var json = await resposta.json();
        console.log(json);
        if (resposta.ok) {
          this.products = await json.response;
          console.log("json.response", json.response);
          console.log("this.products", this.products);
          var result = await this.products.find(
            (item) => item.id == this.product.id
          );
          if (result) {
            this.favorited = true;
            console.log("IsFAVORITED!!!!!!!!!");
          }
        }
      }
    },
    async addToWishlist() {
      console.log("Entrou em wishlist");
      if (this.userId && this.token) {
        console.log("Usuário logado");

        await fetch("https://localhost:7016/api/v1/Wishlist/create", {
          method: "POST",
          body: JSON.stringify({
            userId: this.userId,
            productId: this.product.id,
          }),
          headers: {
            "Content-type": "application/json",
            Authorization: `bearer ${this.token}`,
          },
        });
        var response = await response.json().then((token) => {
          console.log(token);
        });
        this.favorited = true;
        this.$router.push(`/produto/${this.product.Id}`);
      } else {
        this.$router.push(`/login`);
      }
    },
    async deleteFromWishlist() {
      console.log(
        `https://localhost:7016/api/v1/Wishlist/delete?UserId=${localStorage.getItem(
          "userId"
        )}&ProductId=${this.product.id}`
      );
      /*
      await fetch(
        `https://localhost:7016/api/v1/Wishlist/delete?UserId=${localStorage.getItem(
          "userId"
        )}&ProductId=${this.product.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `bearer ${this.token}`,
          },
        }
      );
      */
      console.log(
        `https://localhost:7016/api/v1/Wishlist/delete?UserId=${localStorage.getItem(
          "userId"
        )}&ProductId=${this.product.id}`
      );
    },
  },
  beforeMount() {
    this.getProductById();
    this.$nextTick(function () {
      this.installOwlCarousel();
    });
    this.isFavorited();
  },
};
</script>
