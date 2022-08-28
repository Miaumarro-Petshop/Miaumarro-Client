<template>
  <main>
    <article class="account">
      <section>
        <h1 class="ts40 ts-purple">Adicionar bichinho</h1>
      </section>
      <section>
        <p class="ts12r ts-green">Nos fale mais sobre o seu bichinho!</p>
      </section>
      <form method="post" action="" class="ts14r row g-3 my-pet-container">
        <div class="col">
          <div class="col-12">
            <label for="pet-name"></label>
            <input
              v-model="name"
              class="form-black form-data"
              id="pet-name"
              name="pet-name"
              type="name"
              placeholder="Nome do seu bichinho"
            />
          </div>
          <div class="col-12">
            <label for="pet-type"></label>
            <select
              v-model="type"
              class="form-select form-black form-data ts14r"
              id="pet-type"
              name="pet-type"
            >
              <option selected disabled>Qual é o seu bichinho?</option>
              <option value="0">Cachorro</option>
              <option value="1">Gato</option>
              <option value="2">Pássaro</option>
              <option value="3">Coelho</option>
              <option value="4">Peixe</option>
            </select>
          </div>
          <div class="col-12 space">
            <label for="pet-gender"></label>
            <select
              v-model="gender"
              class="form-select form-black form-data ts14r"
              id="pet-gender"
              name="pet-gender"
            >
              <option selected disabled>Seu bichinho é...</option>
              <option value="0">Macho</option>
              <option value="1">Fêmea</option>
            </select>
          </div>
          <div class="col-12 space">
            <label for="pet-date-of-birth"></label>
            <input
              v-model="dateOfBirth"
              class="form-black form-data"
              id="pet-date-of-birth"
              name="pet-date-of-birth"
              type="date"
              placeholder="Data de nascimento"
            />
          </div>
          <div class="col-12 space">
            <label for="pet-breed"></label>
            <input
              v-model="breed"
              class="form-black form-data"
              id="pet-breed"
              name="pet-breed"
              type="text"
              placeholder="Raça do seu bichinho"
            />
          </div>
        </div>
        <div class="col pet-image-col">
          <div class="col-8">
            <img
              class="pet-image"
              src="../../../assets/img/miaumarro/logo_icon.svg"
            />
          </div>
          <div class="col-8 file-container">
            <input
              id="file-button"
              type="file"
              class="btn-purple ts14b space"
            />
          </div>
        </div>
      </form>
      <div class="col-md-8 col-lg-8 space" id="edit-button">
        <a href="">
          <button
            v-on:click="createPet()"
            class="btn btn-purple ts18b"
            type="submit"
          >
            Salvar bichinho
          </button>
        </a>
      </div>
    </article>
  </main>
</template>
<script>
export default {
  data() {
    return {
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
      name: null,
      type: null,
      gender: null,
      dateOfBirth: null,
      breed: null,
      image: null,
      imagePet: document.getElementById("file-button"),
    };
  },
  methods: {
    async createPet() {
      var dateApi = formatDateMiauToApi(this.dateOfBirth)
      fetch("https://localhost:7016/api/v1/Pet/create", {
        method: "POST",
        body: JSON.stringify({
          userId: this.userId,
          name: this.name,
        type: this.type,
        gender: this.gender,
        dateOfBirth: dateApi,
        breed: this.breed,
        image: null,
        }),
        headers: {
          'Authorization': `bearer ${this.token}`,
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          //redirectToPet();
        });
    },
    redirectToPet(){
      this.$router.push(`/minha-conta/pets`);
    },
    formatDateApiToMiau(dateString){
      var seconds = Date.parse(dateString);
      var date = new Date(seconds);
      return date
    },
    formatDateMiauToApi(dateJs){
      var date = dateJs + "T00:00:00.001Z"
      return date;
    },
  },
};
</script>
