<template>
  <main>
    <section id="customer-cart">
      <div v-if="resultAmount">
        <div class="cart-title">
          <h1 class="ts40 ts-purple">Carrinho</h1>
          <p class="ts18b">Produtos</p>
        </div>
        <div class="cart-products">
          <div class="result-count">
            <p class="ts18b">XXX produtos encontrados</p>
          </div>

          <div class="cart-info">
            <div class="purchase-required-info">
              <li class="cards-list space">
                <ul>
                  <a href="">
                    <div class="card card-product-cart">
                      <div class="card-img-cl col col-lg-2">
                        <img
                          src="../../../assets/img/miaumarro/logo_icon.svg"
                          alt="Product Image"
                        />
                      </div>
                      <div class="card-body col col-lg-10">
                        <div class="card-info">
                          <div class="card-title">
                            <h1 class="ts24b">
                              Nome Completo do Produto Nome Completo do Produto
                            </h1>
                            <h2 class="ts14b ts-purple">
                              CÓDIGO DO PRODUTO: XXXXXX
                            </h2>
                          </div>
                          <div class="card-text-cart">
                            <div class="product-amount">
                              <div class="counter">
                                <button
                                  class="btn btn-purple ts24r"
                                  onclick="this.blur();"
                                >
                                  -
                                </button>
                                <div class="counter-display ts24r ts-black">
                                  01
                                </div>
                                <button
                                  class="btn btn-purple ts24r"
                                  onclick="this.blur();"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <h3 class="card-text ts28b">R$ 100,00</h3>
                          </div>
                        </div>
                        <div class="card-icon">
                          <a href="">
                            <img
                              src="../../../assets/img/icon/trash-fill-purple.svg"
                              class="icon-32"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </ul>
                <ul>
                  <a href="">
                    <div class="card card-product-cart">
                      <div class="card-img-cl col col-lg-2">
                        <img
                          src="../../../assets/img/miaumarro/logo_icon.svg"
                          alt="Product Image"
                        />
                      </div>
                      <div class="card-body col col-lg-10">
                        <div class="card-info">
                          <div class="card-title">
                            <h1 class="ts24b">
                              Nome Completo do Produto Nome Completo do Produto
                            </h1>
                            <h2 class="ts14b ts-purple">
                              CÓDIGO DO PRODUTO: XXXXXX
                            </h2>
                          </div>
                          <div class="card-text-cart">
                            <div class="product-amount">
                              <div class="counter">
                                <button
                                  class="btn btn-purple ts24r"
                                  onclick="this.blur();"
                                >
                                  -
                                </button>
                                <div class="counter-display ts24r ts-black">
                                  01
                                </div>
                                <button
                                  class="btn btn-purple ts24r"
                                  onclick="this.blur();"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <h3 class="card-text ts28b">R$ 100,00</h3>
                          </div>
                        </div>
                        <div class="card-icon">
                          <a href="">
                            <img
                              src="../../../assets/img/icon/trash-fill-purple.svg"
                              class="icon-32"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </ul>
              </li>
              <section class="purchase-additional-info">
                <form id="coupon-form" method="post" action="" class="ts14r">
                  <label for="name" class="ts18b">Cupom de desconto</label>
                  <div class="cart-input row g-3">
                    <input
                      class="form-black col-md-5 col-lg-5"
                      id="coupon"
                      name="coupon"
                      type="coupon"
                      placeholder="Insira seu cupom"
                    />
                    <div class="col-md-6 col-lg-5">
                      <button class="btn btn-purple ts18b" type="submit">
                        Calcular desconto
                      </button>
                    </div>
                  </div>
                </form>
                <hr size="1" width="100%" />
                <form id="cep-form" method="post" action="" class="ts14r">
                  <label for="name" class="ts18b">Frete</label>
                  <div class="cart-input row g-3">
                    <input
                      class="form-black col-md-5 col-lg-5"
                      id="cep"
                      name="cep"
                      type="cep"
                      placeholder="Informe o seu CEP"
                    />
                    <div class="col-md-6 col-lg-5">
                      <button class="btn btn-purple ts18b" type="submit">
                        Calcular frete
                      </button>
                    </div>
                  </div>
                </form>
                <hr size="1" width="100%" class="line" />
              </section>
            </div>

            <div class="card card-cart-buy col col-md-4 col-lg-3">
              <div class="cart-buy-price">
                <section>
                  <h1 class="upper ts14b">Produtos (2)</h1>
                  <p class="ts28b">R$ 200,00</p>
                </section>
                <section>
                  <h1 class="upper ts14b">Frete</h1>
                  <p class="ts28b">R$ 100,00</p>
                </section>
                <section class="ts-green">
                  <h1 class="upper ts14b">Promoções e cupons</h1>
                  <p class="ts28b">- R$ 100,00</p>
                </section>
                <hr size="1" width="100%" class="line" />
                <section>
                  <h1 class="upper ts14b">Total</h1>
                  <p class="ts28b">R$ 200,00</p>
                </section>
                <div class="product-buy">
                  <button class="btn btn-green btn-buy ts24b" type="submit">
                    Concluir a compra
                  </button>
                  <a class="ts14b link-green" href="">Limpar carrinho</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <CartEmpty></CartEmpty>
      </div>
    </section>
  </main>
</template>
<script>
import CartEmpty from "./CartEmpty.vue";
export default {
  data() {
    return {
      products: [],
      resultAmount: 0,
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
    getCart() {
      if (localStorage.getItem("cart")) {
        this.cartItems = JSON.parse(localStorage.getItem("cart"));
      }
      this.resultAmount = this.cartItems.length();
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
      console.log(localStorage.getItem("cart"));
      this.$router.push(`/carrinho`);
    },
  },
  beforeMount() {
    this.getProductById();
  },
  components: {
    CartEmpty: CartEmpty,
  },
};
</script>
