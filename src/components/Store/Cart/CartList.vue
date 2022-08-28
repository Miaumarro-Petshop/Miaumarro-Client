<template>
  <main>
    <section id="customer-cart">
      <div v-if="resultAmount">
        <div class="cart-title">
          <h1 class="ts40 ts-purple">Carrinho</h1>
        </div>
        <div class="cart-products">
          <div class="result-count">
            <p class="ts18b">{{ resultAmount }} produtos encontrados</p>
          </div>

          <div class="cart-info">
            <div class="purchase-required-info">
              <li class="cards-list space">
                <div v-for="p in products" :key="p.id">
                  <a v-on:click="showProductDetail(p.id)">
                    <ul>
                      <div class="card card-product-cart">
                        <div class="card-img-cl col col-lg-2">
                          <img
                            src="/src/assets/img/miaumarro/logo_icon.svg"
                            alt="Product Image"
                          />
                        </div>
                        <div class="card-body col col-lg-10">
                          <div class="card-info">
                            <div class="card-title">
                              <h1 class="ts24b">
                                {{ p.name }}
                              </h1>
                              <h2 class="ts14b ts-purple">
                                CÓDIGO DO PRODUTO: {{ p.id }}
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
                                    {{ p.amount }}
                                  </div>
                                  <button
                                    class="btn btn-purple ts24r"
                                    onclick="this.blur();"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <h3 class="card-text ts28b">
                                R$
                                {{
                                  Math.round(
                                    p.price * (1 - p.discount) * 100
                                  ) / 100
                                }}
                              </h3>
                            </div>
                          </div>
                          <div class="card-icon">
                            <a href="">
                              <img
                                src="/src/assets/img/icon/trash-fill-purple.svg"
                                class="icon-32"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </a>
                </div>
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
                  <a v-on:click="deleteCart()" class="ts14b link-green" href=""
                    >Limpar carrinho</a
                  >
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
      cartItems: null,
      products: [],
      resultAmount: 0,
      productAmountTotal:0,
      productPriceTotal: 0,
      shippingPrice:0,
    };
  },
  methods: {
    getCart() {
      let cartItems = [];
      if (localStorage.getItem("cart")) {
        cartItems = JSON.parse(localStorage.getItem("cart"));
      }
      this.resultAmount = cartItems.length;
      console.log("cartItems", cartItems);
      for (let i = 0; i < cartItems.length; i++) {
        this.getProductById(cartItems[i].productId, cartItems[i].amount);
      }
      for (let i = 0; i < this.products.length; i++) {
        this.productAmountTotal += this.products[i].amount;
        this.producPriceTotal += this.products[i].price;
      }
      
    },
    async getProductById(productId, amount) {
      var resposta = await fetch(
        `https://localhost:7016/api/v1/Product/details?id=${productId}`
      );
      var json = await resposta.json();
      this.products.push({
        id: productId,
        amount: amount,
        name: json.name,
        price: json.price,
        discount: json.discount,
      });
    },
    counterAdd() {
      this.counter++;
    },
    counterSubtract() {
      if (this.counter > 1) this.counter--;
    },
    addToCart() {
      if (this.cartItems.find((item) => item.productId == this.product.id)) {
        let index = this.cartItems.findIndex(
          (item) => item.productId == this.product.id
        );
        this.cartItems[index].amount = this.counter;
      }
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
      console.log("cart items", this.cartItems);
      this.getCart();
    },
    deleteCart() {
      localStorage.removeItem("cart", JSON.stringify(this.cartItems));
    },
    showProductDetail(productId) {
      this.$router.push(`/produto/${productId}`);
    },
  },
  beforeMount() {
    this.getCart();
  },
  components: {
    CartEmpty: CartEmpty,
  },
};
</script>
