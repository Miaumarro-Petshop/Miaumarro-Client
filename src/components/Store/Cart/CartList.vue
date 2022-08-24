<template>
  <button @click="getProducts">Show Products</button>
  <hr />
  <div v-for="p in products" :key="p.id">
    <h2>{{ p.id }} - {{ p.name }}</h2>
    <p>{{ p.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      var resposta = await fetch("https://localhost:7016/api/v1/Product");
      var json = await resposta.json();
      this.products = JSON.stringify(json.response);
      window.alert(JSON.stringify(json.response));
    },
  },
  beforeMount() {
    this.getProducts();
  },
};
</script>
