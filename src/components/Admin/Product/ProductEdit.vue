<template>
  <main>
        <section class="admin-page">
            <div class="admin-header-subtitle">
                <h1 class="ts28b ts-purple">Produtos</h1>
                <h2 class="ts18b">Editar</h2>
            </div>

              <form method="post" action=""  id="form-product" class="ts14r row">
                <div class="col-md-8 col-lg-8">
                    <p class="ts18b" id="id" name="id">ID: 000001</p>
                </div>
                <div class="col-md-8 col-lg-8">
                    <label for="name"></label>
                    <input class="form-grey form-data" id="name" name="name" type="name" placeholder="Nome">
                </div>
                <div class="col-md-8 col-lg-8">
                    <label for="description"></label>
                    <textarea rows="4" placeholder="Descrição" id="description" name="description" class="form-grey form-data input-textarea"></textarea>
                </div>
                <div class="form-line row">
                <div id="form-price-item" class="col-md-8 col-lg-5">
                    <label for="price"></label>
                    <input class="form-grey form-data" id="price" name="price" type="price" placeholder="Preço (R$)">
                </div>
                <div id="form-discount-item" class="col-md-8 col-lg-3">
                    <label for="discount"></label>
                    <input class="form-grey form-data" id="discount" name="discount" type="text" placeholder="Desconto (entre 0 e 1)">
                </div>
                </div>
                <div class="col-md-8 col-lg-8">
                    <label for="amount"></label>
                    <input class="form-grey form-data" id="amount" name="amount" type="number" min="0" placeholder="Quantidade (und)">
                </div>
                <div class="col-md-8 col-lg-8">
                    <label></label>
                    <div class="checkbox-item">
                        <input type="checkbox" id="IsActive" name="IsActive">
                        <label for="IsActive" class="ts14b">Ativar produto</label>
                    </div>
                </div>
                <div class="col-md-8 col-lg-8">
                    <label></label>
                    <fieldset id="Tags" class="space">
                        <legend class="ts14b">Tags</legend>
                        <div class="product-tags">
                            <div class="checkbox-item">
                                <input type="checkbox" id="SmallPet" name="SmallPet" value="0">
                                <label for="SmallPet" class="ts14b">Pequeno porte</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="MediumPet" name="MediumPet" value="1">
                                <label for="MediumPet" class="ts14b">Médio porte</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="LargePet" name="LargePet" value="2">
                                <label for="LargePet" class="ts14b">Grande porte</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="Clothing" name="Clothing" value="3">
                                <label for="Clothing" class="ts14b">Roupas</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="Medicine" name="Medicine" value="4">
                                <label for="Medicine" class="ts14b">Medicamentos</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="Furniture" name="Furniture" value="5">
                                <label for="Furniture" class="ts14b">Mobília</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="Food" name="Food" value="6">
                                <label for="Food" class="ts14b">Alimentação</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="Toy" name="Toy" value="7">
                                <label for="Toy" class="ts14b">Brinquedos</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="Accessory" name="Accessory" value="8">
                                <label for="Accessory" class="ts14b">Acessórios</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="Dog" name="Dog" value="9">
                                <label for="Dog" class="ts14b">Cachorros</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="Cat" name="Cat" value="10">
                                <label for="Cat" class="ts14b">Gatos</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="Bird" name="Bird" value="11">
                                <label for="Bird" class="ts14b">Pássaros</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="Fish" name="Fish" value="12">
                                <label for="Fish" class="ts14b">Peixes</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="OtherPet" name="OtherPet" value="13">
                                <label for="OtherPet" class="ts14b">Outros pets</label>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <a href="">
                    <button class="btn btn-purple ts18b col-md-8 col-lg-6" method="post" type="submit">Cadastrar produto</button>
                </a>
            </form>
        </section>

    </main>
</template>
<script></script>
