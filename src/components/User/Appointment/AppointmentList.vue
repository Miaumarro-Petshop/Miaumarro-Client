<template>
  <main>
        <article class="account">
            <section>
                <h1 class="ts40 ts-purple">Meus agendamentos</h1>
            </section>
            <section>
                <p class="ts12r ts-green">Acompanhe aqui os seus serviços agendados!</p>
            </section>
            <div v-if="resultAmount">
            <section>
                <div class="result-count">
                    <p class="ts18b">{{ resultAmount }} serviços agendados</p>
                </div>
            </section>
            <div v-for="a in appointments" :key="a.id" class="cards-list">
                    <a href="">
                        <div class="card card-item">
                            <div class="col col-lg-2">
                                <img id="card-img-pet" src="../../../assets/img/miaumarro/logo_icon.svg" alt="House Image">
                            </div>
                            <div class="card-body-data col col-lg-10">
                                <div class="card-info">
                                    <div class="card-title">
                                        <h1 class="ts18b ts-green">{{ getService(a.type)}}</h1>
                                        <p class="ts14r ts-green">Nome do bichinho</p>
                                        <p class="ts14r ts-green">Dia</p>
                                        <p class="ts14r ts-green">Horário</p>
                                        <p class="ts14r ts-green">{{ a.price}}</p>
                                    </div>
                                    <div>
                                        <nav>
                                            <a class="ts14b link-green" href="">Editar</a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
            </div>
            <div>
                <nav>
                    <a class="ts14b link-green">
                        <p>
                            histórico de agendamentos
                        </p>
                    </a>
                </nav>
            </div>
            </div>
            <div v-else>
        <AppointmentEmpty></AppointmentEmpty>
      </div>
            <div class="col-md-8 col-lg-8" id="center-btn">
                <a href="">
                    <button v-on:click="addAppointment()" class="btn btn-purple ts18b" type="submit">Novo agendamento</button>
                </a>
            </div>
        </article>
    </main>
</template>
<script>
import AppointmentEmpty from "./AppointmentEmpty.vue";
export default {
  data() {
    return {
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
      appointments: [],
      currentPage: 0,
      resultAmount: 0,
      totalPages: 0,
      hasPreviousPage: false,
      hasNextPage: false,
    };
  },
  methods: {
    async getAppointments() {
      var resposta = await fetch(
        `https://localhost:7016/api/v1/Address?UserId=${this.userId}`,
        {
          headers: {
            Authorization: `bearer ${this.token}`,
          },
        }
      );
      var json = await resposta.json();
      this.appointments = json.response;
      this.currentPage = json.pageNumber;
      this.resultAmount = json.previousCount + json.amount + json.nextCount;
      this.totalPages = Math.ceil(this.resultAmount / json.pageSize);
      this.hasPreviousPage = json.previousCount != 0;
      this.hasNextPage = json.nextCount != 0;
    },
    showAppointmentsDetail(appointmentsId) {
      this.$router.push(`/minha-conta/servicos/${appointmentsId}`);
      localStorage.setItem("appointmentsId", appointmentsId);
    },
    addAppointment() {
      this.$router.push(`/minha-conta/servicos/adicionar`);
    },
  },
  beforeMount() {
    this.currentPage = 0;
    this.getAppointments();
  },
  components: {
    AppointmentEmpty: AppointmentEmpty,
  },
};
</script>