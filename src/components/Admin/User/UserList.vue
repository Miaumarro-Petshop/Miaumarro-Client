<template>
  <main>
        <section class="admin-page">
            <div class="admin-header">
                <h1 class="ts28b ts-purple">Usuários</h1>
                <button class="btn btn-purple ts18b" type="submit" action="./create">Novo</button>
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
                            <form class="form-admin-filter">
                                <div class="row">
                                    <input class="ts12r form-grey col col-lg-4" type="text" id="searchedTerm" placeholder="CPF" aria-label="Search"/>
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
                        <th scope="col">CPF</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Sobrenome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody class="ts12r">
                    <tr>
                        <th scope="row">00001</th>
                        <td class="text-right">000.000.000-00</td>
                        <td>Lorem ipsum dolor sit amet, co</td>
                        <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae</td>
                        <td>email@email.com</td>
                        <td>(00) 00000-0000</td>
                        <td class="action-icons">
                            <button class="btn" type="submit" action="./edit.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--purple)" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg>
                            </button>
                            <button class="btn" type="submit" action="./delete.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--purple)" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">00001</th>
                        <td class="text-right">000.000.000-00</td>
                        <td>Lorem ipsum dolor sit amet, co</td>
                        <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae</td>
                        <td>email@email.com</td>
                        <td>(00) 00000-0000</td>
                        <td class="action-icons">
                            <button class="btn" type="submit" action="./edit.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--purple)" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg>
                            </button>
                            <button class="btn" type="submit" action="./delete.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--purple)" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">00001</th>
                        <td class="text-right">000.000.000-00</td>
                        <td>Lorem ipsum dolor sit amet, co</td>
                        <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae</td>
                        <td>email@email.com</td>
                        <td>(00) 00000-0000</td>
                        <td class="action-icons">
                            <button class="btn" type="submit" action="./edit.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--purple)" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg>
                            </button>
                            <button class="btn" type="submit" action="./delete.html">
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
