<template>
  <main>
    <article class="account">
      <section>
        <h1 class="ts40 ts-purple">Meus pedidos</h1>
      </section>
      <section>
        <p class="ts12r ts-green">Aqui você pode acompanhar os seus pedidos!</p>
      </section>
      <section>
        <div class="result-count">
          <p class="ts18b">XXX pedidos realizados</p>
        </div>
      </section>
      <li class="cards-list">
        <ul>
          <a href="">
            <div class="card card-item">
              <div class="card-purchase">
                <div class="card-info">
                  <div class="card-title">
                    <h1 class="ts-green ts18b">Status do pedido</h1>
                    <h2 class="ts-green ts14r">Pedido #XXXXXXXX</h2>
                    <h3 class="ts14r ts-green">X itens</h3>
                    <h4 class="ts14b ts-green">Total do pedido: R$ XXX,XX</h4>
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
        </ul>
        <ul>
          <a href="">
            <div class="card card-item">
              <div class="card-purchase">
                <div class="card-info">
                  <div class="card-title">
                    <h1 class="ts-green ts18b">Status do pedido</h1>
                    <h2 class="ts-green ts14r">Pedido #XXXXXXXX</h2>
                    <h3 class="ts14r ts-green">X itens</h3>
                    <h4 class="ts14b ts-green">Total do pedido: R$ XXX,XX</h4>
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
        </ul>
      </li>
    </article>
  </main>
</template>
<script>
export default {
  methods: {
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
  },
  beforeMount() {
    this.$nextTick(function () {
      this.installOwlCarousel();
    });
  },
};
</script>
