<template>
  <main>
        <article class="account">
        <section>
            <h1 class="ts40 ts-purple">Editar bichinho</h1>
        </section>
        <div class="my-pet-container">
            <div class="col">
        <form method="post" action="" class="ts14r row g-3">
        <div class="col-12">
            <label for="pet-name"></label>
            <input class="form-black form-data" id="pet-name" name="pet-name" type="name" placeholder="Nome do seu bichinho">
        </div>
        <div class="col-12">
            <label for="pet-type"></label>
            <select class="form-select form-black form-data" id="pet-type" name="pet-type">
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
            <select class="form-select form-black form-data" id="pet-gender" name="pet-gender">
                <option selected disabled>Seu bichinho é...</option>
                <option value="0">Macho</option>
                <option value="1">Fêmea</option>
            </select>
        </div>
        <div class="col-12 space">
            <label for="pet-date-of-birth"></label>
            <input class="form-black form-data" id="pet-date-of-birth" name="pet-date-of-birth" type="date" placeholder="Data de nascimento">
        </div>
        <div class="col-12 space">
            <label for="pet-breed"></label>
            <input class="form-black form-data" id="pet-breed" name="pet-breed" type="text" placeholder="Raça do seu bichinho">
        </div>
        <div class="col-md-8 col-lg-8 space" id="edit-button">
            <a href="">
                <button class="btn btn-purple ts18b" type="submit">Salvar alterações</button>
            </a>
        </div>
      </form>
    </div>
    <div class="col pet-image-col">
            <div class="col-8">
                <img class="pet-image" src="../../../assets/img/miaumarro/logo_icon.svg">
            </div>
            <div class="col-8">
                <button class="btn btn-purple ts14b" type="submit">Alterar foto</button>
              </div>
              
    </div>
    </div>
    </article>
</main>
</template>
<script></script>
