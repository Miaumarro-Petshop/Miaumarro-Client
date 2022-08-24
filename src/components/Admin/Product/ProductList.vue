<template>
  <main>
        <section class="admin-page">
            <div class="admin-header">
                <h1 class="ts28b ts-purple">Produtos</h1>
                <button class="btn btn-purple ts18b" type="submit" action="./Product/product-create">Novo</button>
            </div>
            <div class="accordion" id="accordionProductFilter">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button ts18b " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Filtros
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <form class="form-product-filter">
                                <div class="product-filter-options">
                                    <div class="product-filter-text col col-lg-4">
                                        <div class="row">
                                            <label class="ts14b">Palavra-chave</label>
                                        </div>
                                        <div class="row">
                                            <input class="ts12r form-grey" type="text" id="searchedTerm" placeholder="Palavra-chave" aria-label="Search"/>
                                        </div>
                                        <div class="row">
                                            <label class="ts14b">Marca</label>
                                        </div>
                                        <div class="row">
                                            <input class="ts12r form-grey" type="text" id="brand" placeholder="Marca" aria-label="Brand"/>
                                        </div>
                                        <div class="row">
                                            <label class="ts14b">Preço</label>
                                        </div>
                                        <div class="row">
                                            <input class="ts12r form-grey col-6" type="text" id="MinPrice" placeholder="Mínimo" aria-label="Preço Mínimo"/>
                                            <input class="ts12r form-grey col-6" type="text" id="MaxPrice" placeholder="Máximo" aria-label="Preço Máximo"/>
                                        </div>
                                    </div>
                                    <div class="product-filter-select col col-lg-8">
                                        <fieldset id="Tags">
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

                                        <div class="row product-discount">
                                            <div class="checkbox-item">
                                                <input type="checkbox" id="ActiveDiscount" name="activeDiscount">
                                                <label for="ActiveDiscount" class="ts14b">Somente produtos com desconto</label>
                                            </div>
                                        </div>

                                        <div class="row product-sort-order">
                                            <label class="ts14b col-4 col-lg-2" for="sort-order">Ordernar por:</label>
                                            <select name="sort-order" id="sort-order" form="sortform" class="col-8 ts14b">
                                                <option value="PriceAsc" selected>Menor preço</option>
                                                <option value="PriceDes">Maior preço</option>
                                                <option value="DiscountAsc">Menor desconto</option>
                                                <option value="DiscountDesc">Maior Desconto</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-filter-button">
                                    <button class="btn btn-purple ts18b col col-md-4 col-lg-4" type="submit">Filtrar resultados</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <table class="table table-hover table-responsive align-middle">
                <thead>
                    <tr class="ts14b ts-purple align-middle">
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço (R$)</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Desconto</th>
                        <th scope="col">Status</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Tags</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody class="ts12r">
                    <tr>
                        <th scope="row">00001</th>
                        <td>Lorem ipsum dolor sit amet, consectetuer adipiscin</td>
                        <td>100,00</td>
                        <td>Golden</td>
                        <td>0,1</td>
                        <td>Ativo</td>
                        <td>100</td>
                        <td>SmallPet, Food, Dog</td>
                        <td class="action-icons">
                            <button class="btn" type="submit" action="./Product/product-edit.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--purple)" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg>
                            </button>
                            <button class="btn" type="submit" action="./Product/product-delete.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--purple)" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">00001</th>
                        <td>Lorem ipsum dolor sit amet, consectetuer adipiscin</td>
                        <td>100,00</td>
                        <td>Golden</td>
                        <td>0,1</td>
                        <td>Ativo</td>
                        <td>100</td>
                        <td>SmallPet, Food, Dog</td>
                        <td class="action-icons">
                            <button class="btn" type="submit" action="./Product/product-edit.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--purple)" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg>
                            </button>
                            <button class="btn" type="submit" action="./Product/product-delete.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--purple)" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">00001</th>
                        <td>Lorem ipsum dolor sit amet, consectetuer adipiscin</td>
                        <td>100,00</td>
                        <td>Golden</td>
                        <td>0,1</td>
                        <td>Ativo</td>
                        <td>100</td>
                        <td>SmallPet, Food, Dog</td>
                        <td class="action-icons">
                            <button class="btn" type="submit" action="./Product/product-edit.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--purple)" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg>
                            </button>
                            <button class="btn" type="submit" action="./Product/product-delete.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--purple)" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link ts-purple ts18b" href="#" tabindex="-1">
                            <span aria-hidden="true" class="ts24r">&lt;</span>
                            <span class="sr-only">Anterior</span>
                        </a>
                    </li>
                    <li class="page-item">
                        <p class="ts24b ts-purple" href="#">01</p>
                    </li>
                    <li class="page-item">
                        <p class="ts24r" href="#">de 02</p>
                    </li>
                    <li class="page-item">
                        <a class="page-link ts18b ts-purple" href="#">
                            <span class="sr-only">Próxima</span>
                            <span aria-hidden="true" class="ts24r">&gt;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    </main>
</template>
<script></script>
