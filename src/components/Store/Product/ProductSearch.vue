<template>
  <main>
    <section id="product-query">
      <div>
        <p class="ts18b">Você buscou por:</p>
        <h2 class="ts40 ts-purple">termo buscado</h2>
      </div>

      <div class="accordion" id="accordionProductFilter">
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
              Filtros
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <form class="form-product-filter">
                <div class="product-filter-options">
                  <div class="product-filter-text col col-lg-4">
                    <div class="row">
                      <label class="ts14b">Palavra-chave</label>
                    </div>
                    <div class="row">
                      <input
                        class="ts12r form-black"
                        type="text"
                        id="searchedTerm"
                        placeholder="Palavra-chave"
                        aria-label="Search"
                      />
                    </div>
                    <div class="row">
                      <label class="ts14b">Marca</label>
                    </div>
                    <div class="row">
                      <input
                        class="ts12r form-black"
                        type="text"
                        id="brand"
                        placeholder="Marca"
                        aria-label="Brand"
                      />
                    </div>
                    <div class="row">
                      <label class="ts14b">Preço</label>
                    </div>
                    <div class="row">
                      <input
                        class="ts12r form-black col-6"
                        type="text"
                        id="MinPrice"
                        placeholder="Mínimo"
                        aria-label="Preço Mínimo"
                      />
                      <input
                        class="ts12r form-black col-6"
                        type="text"
                        id="MaxPrice"
                        placeholder="Máximo"
                        aria-label="Preço Máximo"
                      />
                    </div>
                  </div>
                  <div class="product-filter-select col col-lg-8">
                    <fieldset id="Tags">
                      <legend class="ts14b">Tags</legend>
                      <div class="product-tags">
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="SmallPet"
                            name="SmallPet"
                            value="0"
                          />
                          <label for="SmallPet" class="ts14b"
                            >Pequeno porte</label
                          >
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="MediumPet"
                            name="MediumPet"
                            value="1"
                          />
                          <label for="MediumPet" class="ts14b"
                            >Médio porte</label
                          >
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="LargePet"
                            name="LargePet"
                            value="2"
                          />
                          <label for="LargePet" class="ts14b"
                            >Grande porte</label
                          >
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Clothing"
                            name="Clothing"
                            value="3"
                          />
                          <label for="Clothing" class="ts14b">Roupas</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Medicine"
                            name="Medicine"
                            value="4"
                          />
                          <label for="Medicine" class="ts14b"
                            >Medicamentos</label
                          >
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Furniture"
                            name="Furniture"
                            value="5"
                          />
                          <label for="Furniture" class="ts14b">Mobília</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Food"
                            name="Food"
                            value="6"
                          />
                          <label for="Food" class="ts14b">Alimentação</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Toy"
                            name="Toy"
                            value="7"
                          />
                          <label for="Toy" class="ts14b">Brinquedos</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Accessory"
                            name="Accessory"
                            value="8"
                          />
                          <label for="Accessory" class="ts14b"
                            >Acessórios</label
                          >
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Dog"
                            name="Dog"
                            value="9"
                          />
                          <label for="Dog" class="ts14b">Cachorros</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Cat"
                            name="Cat"
                            value="10"
                          />
                          <label for="Cat" class="ts14b">Gatos</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Bird"
                            name="Bird"
                            value="11"
                          />
                          <label for="Bird" class="ts14b">Pássaros</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Fish"
                            name="Fish"
                            value="12"
                          />
                          <label for="Fish" class="ts14b">Peixes</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="OtherPet"
                            name="OtherPet"
                            value="13"
                          />
                          <label for="OtherPet" class="ts14b"
                            >Outros pets</label
                          >
                        </div>
                      </div>
                    </fieldset>

                    <div class="row product-discount">
                      <div class="checkbox-item">
                        <input
                          type="checkbox"
                          id="ActiveDiscount"
                          name="activeDiscount"
                        />
                        <label for="ActiveDiscount" class="ts14b"
                          >Somente produtos com desconto</label
                        >
                      </div>
                    </div>

                    <div class="row product-sort-order">
                      <label class="ts14b col-4 col-lg-2" for="sort-order"
                        >Ordernar por:</label
                      >
                      <select
                        name="sort-order"
                        id="sort-order"
                        form="sortform"
                        class="col-8 ts14b"
                      >
                        <option value="PriceAsc" selected>Menor preço</option>
                        <option value="PriceDes">Maior preço</option>
                        <option value="DiscountAsc">Menor desconto</option>
                        <option value="DiscountDesc">Maior Desconto</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="product-filter-button">
                  <button
                    class="btn btn-purple ts18b col col-md-4 col-lg-4"
                    type="submit"
                  >
                    Filtrar resultados
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="product-result">
      <div class="result-count">
        <p class="ts18b">XXX resultados encontrados</p>
      </div>
      <div class="product-grid row gx-2 gy-1">
        <div
          v-for="p in products"
          :key="p.id"
          class="col col-sm-3 col-md-3 col-lg-3"
        >
          <RouterLink to="/produto">
            <a href="/produto">
              <div class="card card-product-search">
                <div class="card-img">
                  <img
                    class="card-img-top"
                    src="src/assets/img/miaumarro/logo_icon.svg"
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
                    <p class="card-text ts28b">R$ {{ p.price }}</p>
                    <button class="btn btn-green btn-buy ts24r" type="submit">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </RouterLink>
        </div>
      </div>

      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link ts-purple ts18b" href="#" tabindex="-1">
              <span aria-hidden="true" class="ts24r">&lt;</span>
              <span class="sr-only">Anterior</span>
            </a>
          </li>
          <li class="page-item">
            <p class="ts24b ts-purple" href="#">{{ currentPage }}</p>
          </li>
          <li class="page-item">
            <p class="ts24r" href="#">de 02</p>
          </li>
          <li class="page-item">
            <a class="page-link ts18b ts-purple" href="#">
              <span class="sr-only">Próxima</span>
              <span aria-hidden="true" class="ts24r">&gt;</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
    {{ headers }}
  </main>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      currentPage: 0,
      resultAmount: 0,
      totalPages: 0,
    };
  },
  methods: {
    async getProducts() {
      var resposta = await fetch("https://localhost:7016/api/v1/Product");
      var json = await resposta.json();
      this.products = json.response;
      window.alert(resposta.headers.get("date"));
      for (let [key, value] of resposta.headers) {
        alert(`${key} = ${value}`);
      }
    },
  },
  beforeMount() {
    this.getProducts();
  },
};
</script>
