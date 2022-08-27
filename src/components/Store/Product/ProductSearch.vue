<template>
  <main>
    <section id="product-query">
      <div v-if="SearchedTerm">
        <p class="ts18b">Você buscou por:</p>
        <h2 class="ts40 ts-purple">{{ SearchedTerm }}</h2>
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
              <div class="form-product-filter">
                <div class="product-filter-options">
                  <div class="product-filter-text col col-lg-4">
                    <div class="row">
                      <label class="ts14b">Palavra-chave</label>
                    </div>
                    <div class="row">
                      <input
                        v-model="SearchedTerm"
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
                        v-model="Brand"
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
                      <label class="ts12r col-6">Mínimo</label>
                      <label class="ts12r col-6">Máximo</label>
                    </div>
                    <div class="row">
                      <input
                        v-model="MinPrice"
                        class="ts12r form-black col-6"
                        type="text"
                        id="MinPrice"
                        placeholder="Mínimo"
                        aria-label="Preço Mínimo"
                      />
                      <input
                        v-model="MaxPrice"
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
                            v-bind="SmallPet"
                            type="checkbox"
                            id="SmallPet"
                            name="product-tags"
                            value="1"
                          />
                          <label for="SmallPet" class="ts14b"
                            >Pequeno porte</label
                          >
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="MediumPet"
                            name="product-tags"
                            value="2"
                          />
                          <label for="MediumPet" class="ts14b"
                            >Médio porte</label
                          >
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="LargePet"
                            name="product-tags"
                            value="4"
                          />
                          <label for="LargePet" class="ts14b"
                            >Grande porte</label
                          >
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Clothing"
                            name="product-tags"
                            value="8"
                          />
                          <label for="Clothing" class="ts14b">Roupas</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Medicine"
                            name="product-tags"
                            value="16"
                          />
                          <label for="Medicine" class="ts14b"
                            >Medicamentos</label
                          >
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Furniture"
                            name="product-tags"
                            value="32"
                          />
                          <label for="Furniture" class="ts14b">Mobília</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Food"
                            name="product-tags"
                            value="64"
                          />
                          <label for="Food" class="ts14b">Alimentação</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Toy"
                            name="product-tags"
                            value="128"
                          />
                          <label for="Toy" class="ts14b">Brinquedos</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Accessory"
                            name="product-tags"
                            value="256"
                          />
                          <label for="Accessory" class="ts14b"
                            >Acessórios</label
                          >
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Dog"
                            name="product-tags"
                            value="512"
                          />
                          <label for="Dog" class="ts14b">Cachorros</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Cat"
                            name="product-tags"
                            value="1024"
                          />
                          <label for="Cat" class="ts14b">Gatos</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Bird"
                            name="product-tags"
                            value="2048"
                          />
                          <label for="Bird" class="ts14b">Pássaros</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="Fish"
                            name="product-tags"
                            value="4096"
                          />
                          <label for="Fish" class="ts14b">Peixes</label>
                        </div>
                        <div class="checkbox-item">
                          <input
                            type="checkbox"
                            id="OtherPet"
                            name="product-tags"
                            value="8192"
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
                          v-model="ActiveDiscount"
                          type="checkbox"
                          id="ActiveDiscount"
                          name="ActiveDiscount"
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
                        v-model="SortParameter"
                        name="sort-order"
                        id="sort-order"
                        form="sortform"
                        class="col-8 ts14b"
                      >
                        <option value="0" selected>Menor preço</option>
                        <option value="1">Maior preço</option>
                        <option value="2">Menor desconto</option>
                        <option value="3">Maior Desconto</option>
                      </select>
                    </div>
                  </div>
                </div>

                <form class="product-filter-button">
                  <button
                    v-on:click="filterProducts()"
                    class="btn btn-purple ts18b col col-md-4 col-lg-4"
                    type="submit"
                  >
                    Filtrar resultados
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="resultAmount">
      <section id="product-result">
        <div class="result-count">
          <p class="ts18b">{{ resultAmount }} resultados encontrados</p>
        </div>
        <div class="product-grid row gx-2 gy-1">
          <div
            v-for="p in products"
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
                    <p class="card-text ts28b">
                      R$
                      {{ Math.round(p.price * (1 - p.discount) * 100) / 100 }}
                    </p>
                    <button class="btn btn-green btn-buy ts24r" type="submit">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li v-if="hasPreviousPage" class="page-item">
              <a
                v-on:click="previousPage()"
                class="page-link ts-purple ts18b"
                href=""
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
      </section>
    </div>
    <div v-else>
      <ProductNotFound></ProductNotFound>
    </div>
  </main>
</template>
<script>
import QueryBuilder from "/src/helpers/QueryBuilder.jsx";
import ProductNotFound from "./ProductNotFound.vue";
export default {
  data() {
    return {
      products: [],
      currentPage: 0,
      resultAmount: 0,
      totalPages: 0,
      hasPreviousPage: false,
      hasNextPage: false,
      filter: this.$route.params.filter,

      SearchedTerm: null,
      Brand: null,
      MinPrice: 0,
      MaxPrice: 0,
      ActiveDiscount: false,
      tags: 0,
    };
  },
  methods: {
    async getProducts() {
      var resposta = await fetch(
        `https://localhost:7016/api/v1/Product?${this.filter}&PageNumber=${this.currentPage}`
      );
      var json = await resposta.json();
      this.products = json.response;
      this.currentPage = json.pageNumber;
      this.resultAmount = json.previousCount + json.amount + json.nextCount;
      this.totalPages = Math.ceil(this.resultAmount / json.pageSize);
      this.hasPreviousPage = json.previousCount != 0;
      this.hasNextPage = json.nextCount != 0;
    },
    filterProducts() {
      if (this.SortParameter == undefined) {
        this.SortParameter = 0;
      }
      const query = new QueryBuilder().addProperty(
        "SortParameter",
        this.SortParameter
      );
      if (this.SearchedTerm != null)
        query.addProperty("SearchedTerm", this.SearchedTerm);
      if (this.Brand != null) query.addProperty("Brand", this.Brand);
      if (this.MinPrice != 0) query.addProperty("MinPrice", this.MinPrice);
      if (this.MaxPrice != 0) query.addProperty("MaxPrice", this.MaxPrice);
      if (this.ActiveDiscount)
        query.addProperty("ActiveDiscount", this.ActiveDiscount);
      if (this.tags != 0) query.addProperty("Tags", this.tags);

      var queryParameters = query.build();
      this.$router.push(`/pesquisa/${queryParameters}`);
    },
    nextPage() {
      this.currentPage++;
      this.getProducts();
    },
    previousPage() {
      this.currentPage--;
      this.getProducts();
    },
    showProductDetail(productId) {
      this.$router.push(`/produto/${productId}`);
    },
  },
  beforeMount() {
    this.currentPage = 0;
    this.getProducts();
  },
  components: {
    ProductNotFound: ProductNotFound,
  },
};
</script>
