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
              src="src/assets/img/miaumarro/logo_icon.svg"
              alt="Product Image"
            />
          </div>
          <div class="owl-carousel owl-theme">
            <a href="">
              <div class="item carousel-img img-selected">
                <img src="src/assets/img/miaumarro/logo_icon.svg" />
              </div>
            </a>
            <a href="">
              <div class="item carousel-img">
                <img src="src/assets/img/miaumarro/Logo_dynapuff.png" />
              </div>
            </a>
            <a href="">
              <div class="item carousel-img">
                <img src="src/assets/img/miaumarro/logo_icon.svg" />
              </div>
            </a>
            <a href="">
              <div class="item carousel-img">
                <img src="src/assets/img/miaumarro/logo_icon.svg" />
              </div>
            </a>
          </div>
        </div>

        <div class="product-info col col-md-6 col-lg-5">
          <p class="upper ts14b ts-purple">
            {{ product.brand }}
          </p>
          <h1 class="ts24b">
            {{ product.name }}
          </h1>
          <p class="upper ts14b ts-grey">Código do produto: {{ product.id }}</p>

          <div class="product-info-review">
            <div id="product-info-score">
              <p class="ts18b">5,00</p>
              <img src="src/assets/img/icon/star-fill.svg" class="icon-16" />
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
                <button class="btn btn-purple ts24r" onclick="this.blur();">
                  -
                </button>
                <div
                  class="counter-display ts24r ts-black"
                  id="product-detail-counter-display"
                >
                  01
                </div>
                <button class="btn btn-purple ts24r" onclick="this.blur();">
                  +
                </button>
              </div>
            </div>
            <p class="card-text ts28b">R$ {{ product.price }}</p>
          </div>

          <div class="product-buy">
            <button class="btn btn-green btn-buy ts24b" type="submit">
              Comprar
            </button>
          </div>
        </div>
      </div>

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
                      src="src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img
                      src="src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img
                      src="src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img
                      src="src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img
                      src="src/assets/img/icon/star-fill.svg"
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
                      src="src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img
                      src="src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img
                      src="src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img
                      src="src/assets/img/icon/star-fill.svg"
                      class="icon-32"
                    />
                    <img src="src/assets/img/icon/star.svg" class="icon-32" />
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
    };
  },
  methods: {
    async getProductById() {
      var resposta = await fetch(
        `https://localhost:7016/api/v1/Product/detail?id=${this.id}`
      );
      var json = await resposta.json();
      this.product = json;
      alert(this.product);
    },
  },
  beforeMount() {
    this.getProductById();
  },
};
</script>
