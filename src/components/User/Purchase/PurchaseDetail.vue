<template>
  <main>
    <article class="account">
      <h1 class="ts28b ts-purple">Pedido #{{ id }}</h1>
      <section>
        <a href="../Product/detail.html">
          <div class="card card-item">
            <div class="card-purchase">
              <div class="card-info">
                <div class="card-title">
                  <h1 class="ts-green ts18b">
                    Status do pedido: {{ getPurchaseStatus(status) }}
                  </h1>
                  <h2 class="ts-green ts14r">
                    Previsão de Entrega: Entre 22 de Agosto e 01 de Setembro.
                  </h2>
                  <h3 class="ts14r ts-green">
                    Endereço de Entrega: Avenida XXXXXXX, 256.
                  </h3>
                  <h4 class="ts14r ts-green">Total do pedido: R$ XXX,XX</h4>
                  <h4 class="ts14r ts-green">
                    Código de Rastreio: XXXXXXXXXXXXXX
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>
      <li class="cards-list">
        <ul>
          <div class="card card-product-purchased">
            <a href="">
              <div class="row">
                <div class="col col-md-2 col-lg-2">
                  <div class="card-img">
                    <img
                      src="../../../assets/img/miaumarro/logo_icon.svg"
                      alt="Product Image"
                    />
                  </div>
                </div>
                <div class="col col-md-9 col-lg-9">
                  <div class="card-body">
                    <div class="card-info ts-black">
                      <div class="card-title">
                        <h1 class="ts24b tsb">
                          Nome Completo do Produto Nome Completo do Produto
                        </h1>
                        <h2 class="ts14b ts-purple">
                          CÓDIGO DO PRODUTO: XXXXXX
                        </h2>
                      </div>
                      <div class="card-text-cart">
                        <div class="product-amount">
                          <div class="counter">
                            <div class="counter-display ts24r ts-black">01</div>
                            <span class="ts-purple ts14b upper"> item </span>
                          </div>
                        </div>
                        <h3 class="card-text ts28b">R$ 100,00</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
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
                    Sua avaliação
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <form method="post" action="" class="ts14r row g-3">
                      <div class="user-score">
                        <img
                          src="../../../assets/img/icon/star-fill.svg"
                          class="icon-32"
                        />
                        <img
                          src="../../../assets/img/icon/star-fill.svg"
                          class="icon-32"
                        />
                        <img
                          src="../../../assets/img/icon/star-fill.svg"
                          class="icon-32"
                        />
                        <img
                          src="../../../assets/img/icon/star-fill.svg"
                          class="icon-32"
                        />
                        <img
                          src="../../../assets/img/icon/star.svg"
                          class="icon-32"
                        />
                      </div>
                      <div class="col">
                        <label for="user-review"></label>
                        <textarea
                          rows="4"
                          placeholder="Insira a sua avaliação"
                          id="user-review"
                          name="description"
                          class="form-grey form-data input-textarea"
                        ></textarea>
                      </div>
                      <a href="">
                        <button
                          class="btn btn-purple ts18b col-md-8 col-lg-6"
                          method="post"
                          type="submit"
                        >
                          Salvar avaliação
                        </button>
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
        <ul>
          <div class="card card-product-purchased">
            <a href="../Product/detail.html">
              <div class="row">
                <div class="col col-md-2 col-lg-2">
                  <div class="card-img">
                    <img
                      src="../../../assets/img/miaumarro/logo_icon.svg"
                      alt="Product Image"
                    />
                  </div>
                </div>
                <div class="col col-md-9 col-lg-9">
                  <div class="card-body">
                    <div class="card-info ts-black">
                      <div class="card-title">
                        <h1 class="ts24b tsb">
                          Nome Completo do Produto Nome Completo do Produto
                        </h1>
                        <h2 class="ts14b ts-purple">
                          CÓDIGO DO PRODUTO: XXXXXX
                        </h2>
                      </div>
                      <div class="card-text-cart">
                        <div class="product-amount">
                          <div class="counter">
                            <div class="counter-display ts24r ts-black">01</div>
                            <span class="ts-purple ts14b upper"> item </span>
                          </div>
                        </div>
                        <h3 class="card-text ts28b">R$ 100,00</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
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
                    Sua avaliação
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <form method="post" action="" class="ts14r row g-3">
                      <div class="user-score">
                        <img
                          src="../../../assets/img/icon/star-fill.svg"
                          class="icon-32"
                        />
                        <img
                          src="../../../assets/img/icon/star-fill.svg"
                          class="icon-32"
                        />
                        <img
                          src="../../../assets/img/icon/star-fill.svg"
                          class="icon-32"
                        />
                        <img
                          src="../../../assets/img/icon/star-fill.svg"
                          class="icon-32"
                        />
                        <img
                          src="../../../assets/img/icon/star.svg"
                          class="icon-32"
                        />
                      </div>
                      <div class="col">
                        <label for="user-review"></label>
                        <textarea
                          rows="4"
                          placeholder="Insira a sua avaliação"
                          id="user-review"
                          name="description"
                          class="form-grey form-data input-textarea"
                        ></textarea>
                      </div>
                      <a href="">
                        <button
                          class="btn btn-purple ts18b col-md-8 col-lg-6"
                          method="post"
                          type="submit"
                        >
                          Salvar avaliação
                        </button>
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </li>
    </article>
  </main>
</template>
<script>
export default {
  data() {
    return {
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
      purchaseId: localStorage.getItem("purchaseId"),
      id: null,
      status: null,
    };
  },
  methods: {
    async getPurchase() {
      var resposta = await fetch(
        `https://localhost:7016/api/v1/Purchase/details?UserId=${this.userId}&PurchaseId=${this.purchaseId}`,
        {
          headers: {
            "Authorization": `bearer ${this.token}`,
          },
        }
      );
      var json = await resposta.json();
      this.id = json.id;
      this.status = json.status;
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
  },
  beforeMount() {
    if (this.userId && this.token) {
      this.getPurchase();
    } else {
      this.$router.push(`/login`);
    }
  },
};
</script>
