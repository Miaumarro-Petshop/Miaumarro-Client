<template>
  <main>
    <article class="account">
      <section>
        <h1 class="ts40 ts-purple">Meus bichinhos</h1>
      </section>
      <section>
        <p class="ts12r ts-green">Que bichinho mais lindo!</p>
      </section>
      <div v-if="resultAmount">
        <section>
          <div class="result-count space">
            <p class="ts18b">{{ resultAmount }} bichinhos adicionados</p>
          </div>
        </section>
        <div div v-for="p in pets" :key="p.id" class="cards-list">
          <a v-on:click="showPetDetail(p.id)">
            <div class="card card-item">
              <div v-if="p.image" class="col col-lg-2">
                <img id="card-img-pet" src="{{ p.image }}" alt="Pet Image" />
              </div>
              <div v-else class="col col-lg-2">
                <img
                  id="card-img-pet"
                  src="../../../assets/img/miaumarro/logo_icon.svg"
                  alt="Pet Image"
                />
              </div>
              <div class="card-body-data col col-lg-10">
                <div class="card-info">
                  <div class="card-title">
                    <h1 class="ts18b ts-green">{{ p.name }}</h1>
                    <p class="ts14r ts-green">{{ p.type }}</p>
                    <p class="ts14r ts-green">{{ p.gender }}</p>
                    <p class="ts14r ts-green">{{ p.dateOfBirth }} anos</p>
                    <p class="ts14r ts-green">{{ p.breed }}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div v-else>
        <PetEmpty></PetEmpty>
      </div>
      <div class="col-md-8 col-lg-3" id="center-btn">
        <a href="#" class="row">
          <button
            v-on:click="addPet()"
            class="btn btn-purple btn-48 ts18b"
            type="submit"
          >
            Adicionar bichinho
          </button>
        </a>
      </div>
    </article>
  </main>
</template>
<script>
import PetEmpty from "./PetEmpty.vue";
export default {
  data() {
    return {
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
      pets: [],
      currentPage: 0,
      resultAmount: 0,
      totalPages: 0,
      hasPreviousPage: false,
      hasNextPage: false,
    };
  },
  methods: {
    async getPets() {
      var resposta = await fetch(
        `https://localhost:7016/api/v1/Pet?UserId=${this.userId}`,
        {
          headers: {
            Authorization: `bearer ${this.token}`,
          },
        }
      );
      var json = await resposta.json();
      this.pets = json.response;
      this.currentPage = json.pageNumber;
      this.resultAmount = json.previousCount + json.amount + json.nextCount;
      this.totalPages = Math.ceil(this.resultAmount / json.pageSize);
      this.hasPreviousPage = json.previousCount != 0;
      this.hasNextPage = json.nextCount != 0;
    },
    showPetDetail(petId) {
      this.$router.push(`/minha-conta/pets/${petId}`);
      localStorage.setItem("petId", petId);
    },
    addPet() {
      this.$router.push(`/minha-conta/pets/adicionar`);
    },
    calculateAge(date){
        var bornYear = date.getYear();
        var currentYear = new Date().getFullYear();
        var petAge = currentYear - bornYear;
        return petAge;
    },
    getPetGender(genderInt){
        var petGender;
        switch(genderInt){
            case 0:
                petGender = "Macho";
                break;
            case 1:
                petGender = "Fêmea";
                break
        }
        return petGender;
    },
    getPetType(typeInt){
        var petType;
        switch(typeInt){
            case 0:
                petType = "Cachorro";
                break;
            case 1:
                petType = "Gato";
                break;
            case 2:
                petType = "Pássaro";
                break;
            case 3:
                petType = "Coelho";
                break;
            case 4:
                petType = "Peixe";
                break;
        }
        return petType;
    },
  },
  beforeMount() {
    this.currentPage = 0;
    this.getPets();
  },
  components: {
    PetEmpty: PetEmpty,
  },
};
</script>
