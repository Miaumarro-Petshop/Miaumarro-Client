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
              src="../../assets/img/banner/black.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/img/banner/purple.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/img/banner/green.jpg"
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

    <section id="favorite-brand">
      <h1 class="ts40 ts-purple section-header">Nossas principais marcas</h1>
      <div class="row">
        <carousel>
          <div class="owl-carousel owl-theme">
            <div class="item">
              <a href="#">
                <img
                  src="../../assets/img/brand/golden-premium-especial.webp"
                />
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
        </carousel>
      </div>
    </section>

    <section id="pet-favorite">
      <div class="section-header">
        <h1 class="ts40 ts-purple">Os produtos preferidos dos bichinhos</h1>
        <nav class="navbar ts18b">
          <li>
            <ul>
              <a href="">Cachorros</a>
            </ul>
            <ul>
              <a href="">Gatos</a>
            </ul>
            <ul>
              <a href="">Pássaros</a>
            </ul>
            <ul>
              <a href="">Peixes</a>
            </ul>
            <ul>
              <a href="">Outros bichinhos</a>
            </ul>
          </li>
        </nav>
      </div>

      <div class="favorite-product">
        <div class="row gx-2 gy-1">
          <div class="col col-sm-3 col-md-3 col-lg-3">
            <a href="">
              <div class="card card-product-search">
                <div class="card-img">
                  <img
                    class="card-img-top"
                    src="../../assets/img/miaumarro/logo_icon.svg"
                    alt="Product Image"
                  />
                </div>
                <div class="card-body">
                  <div>
                    <h1 class="card-title ts14b">Marca</h1>
                    <h2 class="card-text ts14r ts-green">
                      Nome Completo do Produto Nome Completo do Produto
                    </h2>
                  </div>
                  <div>
                    <p class="card-text ts28b">R$ 100,00</p>
                    <button class="btn btn-green btn-buy ts24r" type="submit">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col col-sm-3 col-md-3 col-lg-3">
            <a href="">
              <div class="card card-product-search">
                <div class="card-img">
                  <img
                    class="card-img-top"
                    src="../../assets/img/miaumarro/logo_icon.svg"
                    alt="Product Image"
                  />
                </div>
                <div class="card-body">
                  <div>
                    <h1 class="card-title ts14b">Marca</h1>
                    <h2 class="card-text ts14r ts-green">
                      Nome Completo do Produto Nome Completo do Produto
                    </h2>
                  </div>
                  <div>
                    <p class="card-text ts28b">R$ 100,00</p>
                    <button class="btn btn-green btn-buy ts24r" type="submit">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col col-sm-3 col-md-3 col-lg-3">
            <a href="">
              <div class="card card-product-search">
                <div class="card-img">
                  <img
                    class="card-img-top"
                    src="../../assets/img/miaumarro/logo_icon.svg"
                    alt="Product Image"
                  />
                </div>
                <div class="card-body">
                  <div>
                    <h1 class="card-title ts14b">Marca</h1>
                    <h2 class="card-text ts14r ts-green">
                      Nome Completo do Produto Nome Completo do Produto
                    </h2>
                  </div>
                  <div>
                    <p class="card-text ts28b">R$ 100,00</p>
                    <button class="btn btn-green btn-buy ts24r" type="submit">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col col-sm-3 col-md-3 col-lg-3">
            <a href="">
              <div class="card card-product-search">
                <div class="card-img">
                  <img
                    class="card-img-top"
                    src="../../assets/img/miaumarro/logo_icon.svg"
                    alt="Product Image"
                  />
                </div>
                <div class="card-body">
                  <div>
                    <h1 class="card-title ts14b">Marca</h1>
                    <h2 class="card-text ts14r ts-green">
                      Nome Completo do Produto Nome Completo do Produto
                    </h2>
                  </div>
                  <div>
                    <p class="card-text ts28b">R$ 100,00</p>
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

<script></script>
