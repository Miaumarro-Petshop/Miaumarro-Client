<template>
  <main class="store-index">
    <section>
      <div
        id="carouselPromotionalBanner"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselPromotionalBanner"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselPromotionalBanner"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselPromotionalBanner"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../assets/img/banner/banner1.png"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/img/banner/banner2.png"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/img/banner/banner3.png"
              class="d-block"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselPromotionalBanner"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselPromotionalBanner"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <!--
    <section id="favorite-brand">
      <h1 class="ts40 ts-purple section-header">Nossas principais marcas</h1>
      <div class="row">
        <div class="owl-carousel owl-theme">
          <div class="item">
            <a href="#">
              <img src="../../assets/img/brand/golden-premium-especial.webp" />
            </a>
          </div>
          <div class="item">
            <a href="#">
              <img src="../../assets/img/brand/kelco.png" />
            </a>
          </div>
          <div class="item">
            <a href="#">
              <img
                src="../../assets/img/brand/premier-raca-especifica-300x162.webp"
              />
            </a>
          </div>
          <div class="item">
            <a href="#">
              <img src="../../assets/img/brand/pedigree.png" />
            </a>
          </div>
          <div class="item">
            <a href="#">
              <img src="../../assets/img/brand/purina_proplan.png" />
            </a>
          </div>
          <div class="item">
            <a href="#">
              <img src="../../assets/img/brand/royal_canin.png" />
            </a>
          </div>
          <div class="item">
            <a href="#">
              <img src="../../assets/img/brand/whiskas.png" />
            </a>
          </div>
        </div>
      </div>
    </section>
    -->

    <section id="pet-favorite">
      <div class="section-header">
        <h1 class="ts40 ts-purple">Os produtos preferidos dos bichinhos</h1>
        <nav class="navbar ts18b">
          <li>
            <ul v-on:click="searchPetFavorite(512)">
              <a>Cachorros</a>
            </ul>
            <ul v-on:click="searchPetFavorite(1024)">
              <a>Gatos</a>
            </ul>
            <ul v-on:click="searchPetFavorite(2048)">
              <a>Pássaros</a>
            </ul>
            <ul v-on:click="searchPetFavorite(4096)">
              <a>Peixes</a>
            </ul>
            <ul v-on:click="searchPetFavorite(8192)">
              <a>Outros bichinhos</a>
            </ul>
          </li>
        </nav>
      </div>

      <div class="favorite-product">
        <div class="row gx-2 gy-1">
          <div
            v-for="p in petFavorites"
            :key="p.id"
            class="col col-sm-3 col-md-3 col-lg-3"
          >
            <a v-on:click="showProductDetail(p.id)">
              <div class="card card-product-search">
                <div class="card-img">
                  <img
                    class="card-img-top"
                    src="/src/assets/img/miaumarro/logo_icon.svg"
                    alt="Product Image"
                  />
                </div>
                <div class="card-body">
                  <div>
                    <h1 class="card-title ts14b">{{ p.brand }}</h1>
                    <h2 class="card-text ts14r ts-green">
                      {{ p.name }}
                    </h2>
                  </div>
                  <div>
                    <div>
                      <p class="card-text ts18r ts-purple ts-line-through">
                        R$
                        {{ p.price }}
                      </p>
                      <p class="card-text ts28b">
                        R$
                        {{ Math.round(p.price * (1 - p.discount) * 100) / 100 }}
                      </p>
                    </div>
                    <button class="btn btn-green btn-buy ts24r" type="submit">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="location">
      <div class="section-header">
        <h1 class="ts40 ts-purple">Venha nos visitar</h1>
      </div>
      <a href="">
        <img src="../../assets/img/location/map_location.png" />
      </a>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      petFavorites: [],
    };
  },
  methods: {
    async searchPetFavorite(petTag) {
      var resposta = await fetch(
        `https://localhost:7016/api/v1/Product?Tags=${petTag}&PageNumber=0`
      );
      var json = await resposta.json();
      this.petFavorites = json.response;
    },
    showProductDetail(productId) {
      this.$router.push(`/produto/${productId}`);
    },
    installOwlCarousel() {
      // eslint-disable-next-line no-undef
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 40,
        autoHeight: true,
        dots: false,
        stagePadding: 80,
        responsive: {
          0: {
            items: 2,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 4,
          },
        },
      });
    },
  },
  beforeMount() {
    this.searchPetFavorite(512);
    this.$nextTick(function () {
      this.installOwlCarousel();
    });
  },
};
</script>
