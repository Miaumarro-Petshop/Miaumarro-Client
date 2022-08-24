<template>
  <main>
    <div v-for="p in products" :key="p.id">
      <h2>{{ p.id }} - {{ p.name }}</h2>
      <p>Descrição: {{ p.description }}</p>
      <p>Marca: {{ p.brand }}</p>
    </div>
  </main>
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
      this.products = json.response;
      //this.products = JSON.stringify(json.response);
      //window.alert(this.products);
    },
  },
  beforeMount() {
    this.getProducts();
  },
};
</script>
