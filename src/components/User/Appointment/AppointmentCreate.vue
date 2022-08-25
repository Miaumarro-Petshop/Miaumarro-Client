<template>
  <main>
        <article class="account">
            <div class="appointment-container">
            <section>
                <h1 class="ts40 ts-purple">Banho e tosa</h1>
            </section>
            <section>
                <p class="ts12r ts-green">Bem-vindo ao Serviço de Agendamento!
                    Aqui você consegue agendar diversos serviços para o seu bichinho.</p>
            </section>
            <section>
                <p class="ts18b step">Passo 1</p>
            </section>
            <section>
                <h1 class="ts40 ts-purple step">Selecione o pet</h1>
            </section>
            <li id="choose-pet">
                <ul>
                    <a href="">
                        <div>
                            <div class="col col-lg-2">
                                <img id="img-pet-2" src="../../../assets/img/miaumarro/logo_icon.svg" alt="Pet Image">
                            </div>
                        </div>
                    </a>
                </ul>
                <ul>
                    <a href="">
                        <div class="">
                            <div class="col col-lg-2">
                                <img id="img-pet-2" src="../../../assets/img/miaumarro/logo_icon.svg" alt="Pet Image">
                            </div>
                        </div>
                    </a>
                </ul>
                <ul>
                    <a href="">
                        <div class="">
                            <div class="col col-lg-2">
                                <img id="img-pet-2" src="../../../assets/img/icon/plus-square-fill.svg" alt="Plus Image">
                            </div>
                        </div>
                    </a>
                </ul>
            </li>
            <section>
                <p class="ts18b step">Passo 2</p>
            </section>
            <section>
                <h1 class="ts40 ts-purple step">Selecione o serviço</h1>
            </section>
            <form method="post" action="" class="ts14r">
                <select class="form-select form-black form-data ts-green" id="pet-type" name="pet-type">
                    <option selected disabled>Qual serviço deseja agendar?</option>
                    <option value="1">Banho</option>
                    <option value="2">Tosa</option>
                    <option value="3">Banho e tosa</option>
                </select>
            </form>
            <section>
                <p class="ts18b step">Passo 3</p>
            </section>
            <section>
                <h1 class="ts40 ts-purple step">Selecione o dia</h1>
            </section>
            <section>
                <p class="ts18b step">Passo 4</p>
            </section>
            <section>
                <h1 class="ts40 ts-purple step">Selecione o horário</h1>
            </section>
            <form method="post" action="" class="ts14r">
                <select class="form-select form-black form-data ts-green" id="pet-type" name="pet-type">
                    <option selected disabled>Em qual horário deseja agendar?</option>
                    <option>08:00h</option>
                    <option>09:00h</option>
                    <option>10:00h</option>
                    <option>11:00h</option>
                    <option>12:00h</option>
                    <option>14:00h</option>
                    <option>15:00h</option>
                    <option>16:00h</option>
                    <option>17:00h</option>
                    <option>18:00h</option>
                </select>
            </form>
            <section id="service-price">
                <span class="ts18b step">Valor de serviço:</span>
                <span class="ts28b step">R$ 100,00</span>
            </section>
            <div class="col-md-8 col-lg-3" id="edit-button">
                <a href="">
                    <button class="btn btn-purple ts18b" type="submit">Agendar serviço</button>
                </a>
            </div>
            </div>
        </article>
    </main>
</template>
<script></script>
