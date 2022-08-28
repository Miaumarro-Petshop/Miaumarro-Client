<template>
  <main>
    <article class="account">
      <section>
        <h1 class="ts40 ts-purple">Editar bichinho</h1>
      </section>
      <div>
            <form method="post" action="" class="ts14r row g-3 my-pet-container">
              <div class="col">
              <div class="col-12">
                <label for="pet-name"></label>
                <input
                v-model="name"
                  class="form-black form-data"
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Nome do seu bichinho"
                />
              </div>
              <div class="col-12">
                <label for="pet-type"></label>
                <select
                v-model="type"
                  class="form-select form-black form-data ts14r"
                  id="type"
                  name="type"
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
            <div class="col-md-8 col-lg-6" id="edit-button">
          <a href="">
            <button
              v-on:click="editPet()"
              class="btn btn-purple ts18b"
              type="submit"
            >
              Salvar informações
            </button>
          </a>
        </div>
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
      petId: localStorage.getItem("petId"),
      name: null,
      type: null,
      gender: null,
      dateOfBirth: null,
      breed: null,
      image: null,
      detail: false,
    };
  },
  methods: {
     async getPet() {
      var resposta = await fetch(
        `https://localhost:7016/api/v1/Pet/details?id=${this.petId}`,
        {
          headers: {
            'Authorization': `bearer ${this.token}`,
          },
        }
      );
      var json = await resposta.json();
      var dateMiau = this.formatDateApiToMiau(json.dateOfBirth);
      this.name = json.name;
      this.type = json.type;
      this.gender = json.gender;
      this.dateOfBirth = dateMiau;
      this.breed = json.breed;
      this.image = json.image;
    },
    async editPet() {
      await fetch(`https://localhost:7016/api/v1/Pet/update`, {
        method: "PUT",
        body: JSON.stringify({
        id: this.petId,
        userId: this.userId,
        name: this.name,
        type: this.type,
        gender: this.gender,
        dateOfBirth: this.dateOfBirth,
        breed: this.breed,
        image: this.image,
        }),
        headers: {
          'Authorization': `bearer ${this.token}`,
          'Content-Type' : 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          //this.$router.push(`/minha-conta/pets/${petId}`);
        });
    },
     formatDateApiToMiau(dateString){
      var date = dateString.substring(0, dateString.indexOf('T'));
      return date;
    },
    /*
    formatDateMiauToApi(dateString){
    },*/
  },
  beforeMount() {
    this.getPet();
  },
}
</script>

