<script>
export default {
  name: 'CursoAGRO'
}
</script>

<template>
  <main id="curso-agro">
    <section class="primeiraSecao cursoBanner">
      <div>
        <div class="bannerLogo fundoCurso">
          <img src="~/assets/img/icones/iconeAGROBranco.svg" alt="Logo" />
        </div>
        <h2>Curso Superior</h2>
        <h1 class="textoCurso">Agronegócio</h1>
        <h3>Tarde ou noite</h3>
      </div>
    </section>

    <section class="cursoSobre">
      <div class="centralizarDiv">
        <h1 class="textoCurso">Sobre o curso</h1>
        <p class="centralizarTexto texto13 textoCurso">
          <b>Curso Superior de Graduação</b>
        </p>
        <p class="centralizarTexto texto13">
          <b>Tarde: 6 semestres | Noite: 6 semestres</b>
        </p>

        <div class="descricaoCurso divFlex">
          <img src="~/assets/img/gerais/destaqueADS.svg" alt="Foto" />
          <p>
            O
            <span class="textoCurso">
              <b>Curso Superior de Tecnologia em Agronegócio</b>
            </span> forma o tecnólogo que analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.
          </p>
        </div>
        <div class="divLeitura">
          <div class="divIconeLeitura fundoCurso">
            <div></div>
          </div>
          <p>
            Se você é ingressante, leia a seção de
            <a href="#">
              <b>Informações gerais ao aluno</b>
            </a> para saber mais sobre seus direitos e deveres na Fatec Taquaritinga.
          </p>
        </div>

        <div class="grupoFacebook">
          <a href="#" class="translate">
            <img src="~/assets/img/icones/iconeFacebook.svg" alt="Logo" />
            <div>
              <img src="~/assets/img/icones/iconeAGRO.svg" alt="Logo" />
            </div>
          </a>
          <p>
            <strong>
              Acompanhe o grupo oficial do AGRO no Facebook.
              <a href="#">Clique aqui</a> para acessar!
            </strong>
          </p>
        </div>
      </div>
    </section>

    <section class="secaoVestibular fundoCurso">
      <h1>
        <a href="#" class="bigLink translate">Vestibular</a>
      </h1>
      <div>
        <div class="divisaoTexto">
          <h2>Como se inscrever</h2>
          <p
            class="texto13"
          >Para ingressar no Curso Superior de Tecnologia em Agronegócio, você deve prestar o Vestibular, que acontece 1 vez a cada semestre, geralmente nos meses de julho e dezembro.</p>
          <p class="texto13">
            Quer ser avisado com antecedência sobre o próximo Vestibular? Preencha nosso
            <a href="#">Formulário de Interesse</a>.
          </p>
          <a href="#" class="aBotao fundoBranco">Quero ser avisado...</a>
        </div>
        <img src="~/assets/img/gerais/arteVestibular.svg" alt="Icone" />
      </div>
    </section>

    <section class="secaoMatrizCurricular">
      <div class="centralizarDiv">
        <h1 class="textoCurso">Matriz curricular</h1>
        <p class="centralizarTexto">Conheça a grade do curso, horários e locais de aula</p>
        <div class="divSelect">
          <label for="periodo">Período:</label>
          <select id="periodo" class="campoPeriodo" name="periodo">
            <option value>Tarde</option>
            <option value>Noite</option>
          </select>
        </div>
        <div class="divDica">
          <img src="~/assets/img/icones/iconeLuz.svg" alt="Ícone" />
          <p>Clique sobre o nome da disciplina para obter mais informações sobre ela.</p>
        </div>
        <h2 class="textoCurso cursoTurno">AGRO - Noite</h2>
        <div class="divOverflow">
          <table>
            <thead>
              <tr>
                <th class="fundoCurso">Dias</th>
                <th class="fundoCurso">Hor.</th>
                <th class="fundoCurso semestre">1º Semestre</th>
                <th class="fundoCurso semestre">2º Semestre</th>
                <th class="fundoCurso semestre">3º Semestre</th>
                <th class="fundoCurso semestre">4º Semestre</th>
                <th class="fundoCurso semestre">5º Semestre</th>
                <th class="fundoCurso semestre">6º Semestre</th>
                <th class="fundoCurso semestre">7º Semestre</th>
                <th class="fundoCurso semestre">8º Semestre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="4" class="dia">Seg.</td>
                <td class="horario">19:00 - 19:50</td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Sistema de Informação</a> (
                  <a href="#">Freire</a>)
                  <br />
                  <p>Sala 1 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Administração Geral</a> (
                  <a href="#">Ricardo</a>)
                  <br />
                  <p>Sala 2 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Estrutura de Dados</a> (
                  <a href="#">Takeda</a>)
                  <br />
                  <p>Sala 3 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Programação Orientada a Objeto</a> (
                  <a href="#">Marcus</a>)
                  <br />
                  <p>Sala 4 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Sociedade e Tecnologia</a> (
                  <a href="#">Gustavo</a>)
                  <br />
                  <p>Sala 5 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Inglês IV</a> (
                  <a href="#">Mirela</a>)
                  <br />
                  <p>Sala 6 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Tópicos Especiais em Informática</a> (
                  <a href="#">João</a>)
                  <br />
                  <p>Sala 7 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Ética e Responsabilidade Profissional</a> (
                  <a href="#">Mônica</a>)
                  <br />
                  <p>Sala 8 (Bloco A)</p>
                </td>
              </tr>
              <tr>
                <td class="horario">19:50 - 20:40</td>
              </tr>
              <tr>
                <td class="horario">20:50 - 21:40</td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Inglês III</a> (
                  <a href="#">Mirela</a>)
                  <br />
                  <p>Sala 6 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Segurança da Informação</a> (
                  <a href="#">João</a>)
                  <br />
                  <p>Sala 7 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Inglês VI</a> (
                  <a href="#">Mirela</a>)
                  <br />
                  <p>Sala 8 (Bloco A)</p>
                </td>
              </tr>
              <tr>
                <td class="horario">21:40 - 22:30</td>
              </tr>

              <tr>
                <td rowspan="4" class="dia">Ter.</td>
                <td class="horario">19:00 - 19:50</td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Programação em Microinformática</a> (
                  <a href="#">Tiosso</a>)
                  <br />
                  <p>Sala 1 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Linguagem de Programação</a> (
                  <a href="#">Tiosso</a>)
                  <br />
                  <p>Sala 2 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Contabilidade</a> (
                  <a href="#">Ricardo</a>)
                  <br />
                  <p>Sala 3 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Inglês II</a> (
                  <a href="#">Mirela</a>)
                  <br />
                  <p>Sala 4 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Estatística Aplicada</a> (
                  <a href="#">Bárbara</a>)
                  <br />
                  <p>Sala 5 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Gerenciamento de Projetos</a> (
                  <a href="#">Nivaldo</a>)
                  <br />
                  <p>Sala 6 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Empreendedorismo</a> (
                  <a href="#">Nivaldo</a>)
                  <br />
                  <p>Sala 7 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Gestão de Governança em TI</a> (
                  <a href="#">Medeiros</a>)
                  <br />
                  <p>Sala 8 (Bloco A)</p>
                </td>
              </tr>
              <tr>
                <td class="horario">19:50 - 20:40</td>
              </tr>
              <tr>
                <td class="horario">20:50 - 21:40</td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Laboratório de Hardware</a> (
                  <a href="#">Douglas</a>)
                  <br />
                  <p>Sala 6 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Economia e Finanças</a> (
                  <a href="#">Guilherme</a>)
                  <br />
                  <p>Sala 7 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Gestão de Equipes</a> (
                  <a href="#">Ricardo</a>)
                  <br />
                  <p>Sala 8 (Bloco A)</p>
                </td>
              </tr>
              <tr>
                <td class="horario">21:40 - 22:30</td>
              </tr>

              <tr>
                <td rowspan="4" class="dia">Qua.</td>
                <td class="horario">19:00 - 19:50</td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Sistema de Informação</a> (
                  <a href="#">Freire</a>)
                  <br />
                  <p>Sala 1 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Administração Geral</a> (
                  <a href="#">Ricardo</a>)
                  <br />
                  <p>Sala 2 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Estrutura de Dados</a> (
                  <a href="#">Takeda</a>)
                  <br />
                  <p>Sala 3 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Programação Orientada a Objeto</a> (
                  <a href="#">Marcus</a>)
                  <br />
                  <p>Sala 4 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Sociedade e Tecnologia</a> (
                  <a href="#">Gustavo</a>)
                  <br />
                  <p>Sala 5 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Inglês IV</a> (
                  <a href="#">Mirela</a>)
                  <br />
                  <p>Sala 6 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Tópicos Especiais em Informática</a> (
                  <a href="#">João</a>)
                  <br />
                  <p>Sala 7 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Ética e Responsabilidade Profissional</a> (
                  <a href="#">Mônica</a>)
                  <br />
                  <p>Sala 8 (Bloco A)</p>
                </td>
              </tr>
              <tr>
                <td class="horario">19:50 - 20:40</td>
              </tr>
              <tr>
                <td class="horario">20:50 - 21:40</td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Inglês III</a> (
                  <a href="#">Mirela</a>)
                  <br />
                  <p>Sala 6 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Segurança da Informação</a> (
                  <a href="#">João</a>)
                  <br />
                  <p>Sala 7 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Inglês VI</a> (
                  <a href="#">Mirela</a>)
                  <br />
                  <p>Sala 8 (Bloco A)</p>
                </td>
              </tr>
              <tr>
                <td class="horario">21:40 - 22:30</td>
              </tr>

              <tr>
                <td rowspan="4" class="dia">Qui.</td>
                <td class="horario">19:00 - 19:50</td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Programação em Microinformática</a> (
                  <a href="#">Tiosso</a>)
                  <br />
                  <p>Sala 1 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Linguagem de Programação</a> (
                  <a href="#">Tiosso</a>)
                  <br />
                  <p>Sala 2 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Contabilidade</a> (
                  <a href="#">Ricardo</a>)
                  <br />
                  <p>Sala 3 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Inglês II</a> (
                  <a href="#">Mirela</a>)
                  <br />
                  <p>Sala 4 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Estatística Aplicada</a> (
                  <a href="#">Bárbara</a>)
                  <br />
                  <p>Sala 5 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Gerenciamento de Projetos</a> (
                  <a href="#">Nivaldo</a>)
                  <br />
                  <p>Sala 6 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Empreendedorismo</a> (
                  <a href="#">Nivaldo</a>)
                  <br />
                  <p>Sala 7 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Gestão de Governança em TI</a> (
                  <a href="#">Medeiros</a>)
                  <br />
                  <p>Sala 8 (Bloco A)</p>
                </td>
              </tr>
              <tr>
                <td class="horario">19:50 - 20:40</td>
              </tr>
              <tr>
                <td class="horario">20:50 - 21:40</td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Laboratório de Hardware</a> (
                  <a href="#">Douglas</a>)
                  <br />
                  <p>Sala 6 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Economia e Finanças</a> (
                  <a href="#">Guilherme</a>)
                  <br />
                  <p>Sala 7 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Gestão de Equipes</a> (
                  <a href="#">Ricardo</a>)
                  <br />
                  <p>Sala 8 (Bloco A)</p>
                </td>
              </tr>
              <tr>
                <td class="horario">21:40 - 22:30</td>
              </tr>

              <tr>
                <td rowspan="4" class="dia">Sex.</td>
                <td class="horario">19:00 - 19:50</td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Sistema de Informação</a> (
                  <a href="#">Freire</a>)
                  <br />
                  <p>Sala 1 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Administração Geral</a> (
                  <a href="#">Ricardo</a>)
                  <br />
                  <p>Sala 2 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Estrutura de Dados</a> (
                  <a href="#">Takeda</a>)
                  <br />
                  <p>Sala 3 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Programação Orientada a Objeto</a> (
                  <a href="#">Marcus</a>)
                  <br />
                  <p>Sala 4 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Sociedade e Tecnologia</a> (
                  <a href="#">Gustavo</a>)
                  <br />
                  <p>Sala 5 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Inglês IV</a> (
                  <a href="#">Mirela</a>)
                  <br />
                  <p>Sala 6 (Bloco A)</p>
                </td>
                <td rowspan="4" class="disciplina">
                  <a href="#">Tópicos Especiais em Informática</a> (
                  <a href="#">João</a>)
                  <br />
                  <p>Sala 7 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Ética e Responsabilidade Profissional</a> (
                  <a href="#">Mônica</a>)
                  <br />
                  <p>Sala 8 (Bloco A)</p>
                </td>
              </tr>
              <tr>
                <td class="horario">19:50 - 20:40</td>
              </tr>
              <tr>
                <td class="horario">20:50 - 21:40</td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Inglês III</a> (
                  <a href="#">Mirela</a>)
                  <br />
                  <p>Sala 6 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Segurança da Informação</a> (
                  <a href="#">João</a>)
                  <br />
                  <p>Sala 7 (Bloco A)</p>
                </td>
                <td rowspan="2" class="disciplina">
                  <a href="#">Inglês VI</a> (
                  <a href="#">Mirela</a>)
                  <br />
                  <p>Sala 8 (Bloco A)</p>
                </td>
              </tr>
              <tr>
                <td class="horario">21:40 - 22:30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="divisaoDownload">
          <h2 class="textoCurso">Documentos para download</h2>
          <p class="centralizarTexto">
            Para o download de marcas, modelos de trabalho e outros materiais do curso, consulte a
            <a href="#">
              <b>Central de Downloads</b>
            </a>.
          </p>
          <div class="framesDownloads">
            <div class="frameDownload">
              <div class="divFlex">
                <img src="~/assets/img/icones/iconePDF.svg" alt="Icone" />
                <a href="#">Matriz Curricular - AGRO</a>
              </div>
              <a href="#" class="botaoDownload fundoVerde divFlex translate">
                <img class="iconeGeral" src="~/assets/img/icones/iconeDownloadBranco.svg" alt="Icone" />
                <p class="textoBranco">Download</p>
              </a>
            </div>
            <div class="frameDownload">
              <div class="divFlex">
                <img src="~/assets/img/icones/iconePDF.svg" alt="Icone" />
                <a href="#">Projeto pedagógico - AGRO</a>
              </div>
              <a href="#" class="botaoDownload fundoVerde divFlex translate">
                <img class="iconeGeral" src="~/assets/img/icones/iconeDownloadBranco.svg" alt="Icone" />
                <p class="textoBranco">Download</p>
              </a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>

    <section class="secaoInfra">
      <div class="largura70">
        <h1 class="textoCurso">Infraestrutura</h1>
        <p
          class="centralizarTexto"
        >Salas de aula, laboratórios e outros ambientes disponíveis para o curso:</p>
      </div>
      <div class="carrosselInfra bordaCima240 bordaBaixo240">
        <div class="setasCarrossel">
          <a href="#" class="translate">
            <img src="~/assets/img/icones/iconeSetaEsquerda.svg" alt="Icone" />
          </a>
          <a href="#" class="translate">
            <img src="~/assets/img/icones/iconeSetaDireita.svg" alt="Icone" />
          </a>
        </div>
        <h2 class="fundoCurso">Biblioteca</h2>
      </div>
      <div class="largura70">
        <p class="centralizarTexto">
          A Biblioteca da Fatec Taquaritinga conta com um acervo de mais de 5.000 livros, divividos em diversas áreas ou campos do conhecimento científico. Para acessar a Biblioteca, use o sistema
          <a>BiblioCPS</a>.
        </p>
      </div>
    </section>

    <section class="secaoOportunidades fundoCinza240">
      <div class="centralizarDiv">
        <h1 class="textoCurso">Empregos e estágios</h1>
        <p class="centralizarTexto">
          Para mais informações sobre os documentos necessários ao estágio supervisionado, acesse a
          <a href="#">
            <b>Central de Estágio e TCC</b>
          </a>.
        </p>
        <div class="framesEstagios">
          <div class="frameEstagio">
            <a href="#" class="empresaLogo translate">
              <img class="larguraTotal" src="~/assets/img/logos/logoFatec.svg" alt="Logo" />
            </a>
            <div class="empresaInfo">
              <a href="#" class="empresaNome">
                <h3 class="textoCurso">Fatec Taquaritinga</h3>
              </a>
              <p class="textoCursoCPS">
                <strong>Oportunidade de estágio</strong>
              </p>
              <p>
                <b>Área ou cargo:</b> Desenvolvedor de Sistemas Pleno I
              </p>
              <p>
                <b>Cidade:</b> Taquaritinga
              </p>
              <p>
                <strong>Inscrições até 12/04</strong>
              </p>
              <a href="#" class="aBotao fundoCurso textoBranco texto10">Mais informações...</a>
              <div class="divFlex filaCompartilhar">
                <p class="texto12">
                  <strong>Compartilhar:</strong>
                </p>
                <div class="divFlex">
                  <a href="#" class="translate">
                    <img
                      class="alturaTotal"
                      src="~/assets/img/icones/iconeCopiar.svg"
                      alt="Icone"
                      title="Copiar link"
                    />
                  </a>
                  <a href="#" class="translate">
                    <img
                      class="alturaTotal"
                      src="~/assets/img/icones/iconeFacebook.svg"
                      alt="Icone"
                      title="Facebook"
                    />
                  </a>
                  <a href="#" class="translate">
                    <img
                      class="alturaTotal"
                      src="~/assets/img/icones/iconeTwitter.svg"
                      alt="Icone"
                      title="Twitter"
                    />
                  </a>
                  <a href="#" class="translate">
                    <img
                      class="alturaTotal"
                      src="~/assets/img/icones/iconeWhatsApp.svg"
                      alt="Icone"
                      title="WhatsApp"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="frameEstagio">
            <a href="#" class="empresaLogo translate">
              <img class="larguraTotal" src="~/assets/img/logos/logoFatec.svg" alt="Logo" />
            </a>
            <div class="empresaInfo">
              <a href="#" class="empresaNome">
                <h3 class="textoCurso">Fatec Taquaritinga</h3>
              </a>
              <p class="textoCursoCPS">
                <strong>Oportunidade de estágio</strong>
              </p>
              <p>
                <b>Área ou cargo:</b> Desenvolvedor de Sistemas Pleno I
              </p>
              <p>
                <b>Cidade:</b> Taquaritinga
              </p>
              <p>
                <strong>Inscrições até 12/04</strong>
              </p>
              <a href="#" class="aBotao fundoCurso textoBranco texto10">Mais informações...</a>
              <div class="divFlex filaCompartilhar">
                <p class="texto12">
                  <strong>Compartilhar:</strong>
                </p>
                <div class="divFlex">
                  <a href="#" class="translate">
                    <img
                      class="alturaTotal"
                      src="~/assets/img/icones/iconeCopiar.svg"
                      alt="Icone"
                      title="Copiar link"
                    />
                  </a>
                  <a href="#" class="translate">
                    <img
                      class="alturaTotal"
                      src="~/assets/img/icones/iconeFacebook.svg"
                      alt="Icone"
                      title="Facebook"
                    />
                  </a>
                  <a href="#" class="translate">
                    <img
                      class="alturaTotal"
                      src="~/assets/img/icones/iconeTwitter.svg"
                      alt="Icone"
                      title="Twitter"
                    />
                  </a>
                  <a href="#" class="translate">
                    <img
                      class="alturaTotal"
                      src="~/assets/img/icones/iconeWhatsApp.svg"
                      alt="Icone"
                      title="WhatsApp"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="frameEstagio">
            <a href="#" class="empresaLogo translate">
              <img class="larguraTotal" src="~/assets/img/logos/logoFatec.svg" alt="Logo" />
            </a>
            <div class="empresaInfo">
              <a href="#" class="empresaNome">
                <h3 class="textoCurso">Fatec Taquaritinga</h3>
              </a>
              <p class="textoCursoCPS">
                <strong>Oportunidade de estágio</strong>
              </p>
              <p>
                <b>Área ou cargo:</b> Desenvolvedor de Sistemas Pleno I
              </p>
              <p>
                <b>Cidade:</b> Taquaritinga
              </p>
              <p>
                <strong>Inscrições até 12/04</strong>
              </p>
              <a href="#" class="aBotao fundoCurso textoBranco texto10">Mais informações...</a>
              <div class="divFlex filaCompartilhar">
                <p class="texto12">
                  <strong>Compartilhar:</strong>
                </p>
                <div class="divFlex">
                  <a href="#" class="translate">
                    <img
                      class="alturaTotal"
                      src="~/assets/img/icones/iconeCopiar.svg"
                      alt="Icone"
                      title="Copiar link"
                    />
                  </a>
                  <a href="#" class="translate">
                    <img
                      class="alturaTotal"
                      src="~/assets/img/icones/iconeFacebook.svg"
                      alt="Icone"
                      title="Facebook"
                    />
                  </a>
                  <a href="#" class="translate">
                    <img
                      class="alturaTotal"
                      src="~/assets/img/icones/iconeTwitter.svg"
                      alt="Icone"
                      title="Twitter"
                    />
                  </a>
                  <a href="#" class="translate">
                    <img
                      class="alturaTotal"
                      src="~/assets/img/icones/iconeWhatsApp.svg"
                      alt="Icone"
                      title="WhatsApp"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="centralizarTexto">
          <a href="#" class="aBotao fundoCurso textoBranco">Mais oportunidades...</a>
        </div>
      </div>
    </section>

    <section class="secaoDepoimentos paginaCursos">
      <div class="centralizarDiv">
        <h1 class="textoCurso">Apoiadores</h1>
        <p
          class="centralizarTexto"
        >Conheça as empresas que apoiam o Curso Superior de Agronegócio:</p>
        <div class="divApoiadores">
          <a href="#" class="apoiador translate">
            <img
              class="alturaTotal"
              src="~/assets/img/logos/logoFatec.svg"
              alt="Logo"
              title="Fatec Taquaritinga"
            />
          </a>
          <a href="#" class="apoiador translate">
            <img
              class="alturaTotal"
              src="~/assets/img/logos/logoCPS.svg"
              alt="Logo"
              title="Fatec Taquaritinga"
            />
          </a>
          <a href="#" class="apoiador translate">
            <img
              class="alturaTotal"
              src="~/assets/img/logos/logoGoverno.svg"
              alt="Logo"
              title="Fatec Taquaritinga"
            />
          </a>
          <a href="#" class="apoiador translate">
            <img
              class="alturaTotal"
              src="~/assets/img/logos/logoFatec.svg"
              alt="Logo"
              title="Fatec Taquaritinga"
            />
          </a>
          <a href="#" class="apoiador translate">
            <img
              class="alturaTotal"
              src="~/assets/img/logos/logoCPS.svg"
              alt="Logo"
              title="Fatec Taquaritinga"
            />
          </a>
          <a href="#" class="apoiador translate">
            <img
              class="alturaTotal"
              src="~/assets/img/logos/logoGoverno.svg"
              alt="Logo"
              title="Fatec Taquaritinga"
            />
          </a>
          <a href="#" class="apoiador translate">
            <img
              class="alturaTotal"
              src="~/assets/img/logos/logoFatec.svg"
              alt="Logo"
              title="Fatec Taquaritinga"
            />
          </a>
        </div>
        <div class="framesDepoimentos">
          <div class="frameDepoimento">
            <p
              class="depoimentoTexto texto11"
            >"Estou cursando Agronegócio na Fatec Taquaritinga e já consegui um emprego. Vale muito a pena!"</p>
            <a href="#" class="depoimentoNome texto11">
              <b>Gustavo Del Vechio</b>
            </a>
            <p class="depoimentoCargo texto10">
              Desenvolvedor -
              <a class="texto10" href="#">Beblue</a>
            </p>
            <p class="depoimentoCurso texto10">
              Aluno de
              <a href="#" class="texto10">Agronegócio</a>
            </p>
            <a href="#" class="depoimentoFoto translate">
              <img class="alturaTotal" src="~/assets/img/noticias/noticia1.jpg" alt="Foto" />
            </a>
          </div>
          <div class="frameDepoimento">
            <p
              class="depoimentoTexto texto11"
            >"Estou cursando Agronegócio na Fatec Taquaritinga e já consegui um emprego. Vale muito a pena!"</p>
            <a href="#" class="depoimentoNome texto11">
              <b>Gustavo Del Vechio</b>
            </a>
            <p class="depoimentoCargo texto10">
              Desenvolvedor -
              <a class="texto10" href="#">Beblue</a>
            </p>
            <p class="depoimentoCurso texto10">
              Aluno de
              <a href="#" class="texto10">Agronegócio</a>
            </p>
            <a href="#" class="depoimentoFoto translate">
              <img class="alturaTotal" src="~/assets/img/noticias/noticia1.jpg" alt="Foto" />
            </a>
          </div>
          <div class="frameDepoimento">
            <p
              class="depoimentoTexto texto11"
            >"Estou cursando Agronegócio na Fatec Taquaritinga e já consegui um emprego. Vale muito a pena!"</p>
            <a href="#" class="depoimentoNome texto11">
              <b>Gustavo Del Vechio</b>
            </a>
            <p class="depoimentoCargo texto10">
              Desenvolvedor -
              <a class="texto10" href="#">Beblue</a>
            </p>
            <p class="depoimentoCurso texto10">
              Aluno de
              <a href="#" class="texto10">Agronegócio</a>
            </p>
            <a href="#" class="depoimentoFoto translate">
              <img class="alturaTotal" src="~/assets/img/noticias/noticia1.jpg" alt="Foto" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="secaoDocentes fundoCinza240">
      <div class="centralizarDiv">
        <h1 class="textoCurso">Corpo docente</h1>
        <p
          class="centralizarTexto"
        >Conheça um pouco mais dos professores e as disciplinas que ministram no curso:</p>
        <div class="frameDocente">
          <div class="docenteGeral">
            <a href="#" class="imagemDocente translate">
              <img class="alturaTotal" src="~/assets/img/noticias/noticia3.jpg" alt="Foto" />
            </a>
            <div>
              <h3 class="nomeDocente">
                <a href="#">
                  <strong>Gustavo Del Vechio</strong>
                </a>
              </h3>
              <p class="texto12">
                <strong>Coordenador do curso</strong>
              </p>
              <p class="texto12">Doutor em Comunicação Social</p>
            </div>
          </div>
          <div class="divFlex mailLattes">
            <a class="divFlex" href="mailto:name@email.com">
              <img class="iconeGeral" src="~/assets/img/icones/iconeMailAzul.svg" alt="Icone" />
              <div class="enderecoMail divFlex">
                <span>gustavo.vechio</span>
                <span>@fatectq.edu.br</span>
              </div>
            </a>
            <a class="divFlex" href="#">
              <img class="iconeGeral" src="~/assets/img/icones/iconeLattes.svg" alt="Icone" />Currículo Lattes
            </a>
          </div>
          <div class="docenteDisciplinas">
            <p>Disciplinas:</p>
            <div>
              <a href="#" class="aBotao fundoCinza80 textoBranco texto10">Web Design I</a>
              <a href="#" class="aBotao fundoCinza80 textoBranco texto10">Web Design II</a>
              <a
                href="#"
                class="aBotao fundoCinza80 textoBranco texto10"
              >Design para Multiplataforma</a>
              <a href="#" class="aBotao fundoCinza80 textoBranco texto10">Projeto Integrador I</a>
              <a href="#" class="aBotao fundoCinza80 textoBranco texto10">Projeto Integrador II</a>
            </div>
          </div>
        </div>
        <div class="frameDocente">
          <div class="docenteGeral">
            <a href="#" class="imagemDocente translate">
              <img class="alturaTotal" src="~/assets/img/noticias/noticia3.jpg" alt="Foto" />
            </a>
            <div>
              <h3 class="nomeDocente">
                <a href="#">
                  <strong>Gustavo Del Vechio</strong>
                </a>
              </h3>
              <p class="texto12">Doutor em Comunicação Social</p>
            </div>
          </div>
          <div class="divFlex mailLattes">
            <a class="divFlex" href="mailto:name@email.com">
              <img class="iconeGeral" src="~/assets/img/icones/iconeMailAzul.svg" alt="Icone" />
              <div class="enderecoMail divFlex">
                <span>gustavo.vechio</span>
                <span>@fatectq.edu.br</span>
              </div>
            </a>
            <a class="divFlex" href="#">
              <img class="iconeGeral" src="~/assets/img/icones/iconeLattes.svg" alt="Icone" />Currículo Lattes
            </a>
          </div>
          <div class="docenteDisciplinas">
            <p>Disciplinas:</p>
            <div>
              <a href="#" class="aBotao fundoCinza80 textoBranco texto10">Web Design I</a>
              <a href="#" class="aBotao fundoCinza80 textoBranco texto10">Web Design II</a>
              <a
                href="#"
                class="aBotao fundoCinza80 textoBranco texto10"
              >Design para Multiplataforma</a>
              <a href="#" class="aBotao fundoCinza80 textoBranco texto10">Projeto Integrador I</a>
              <a href="#" class="aBotao fundoCinza80 textoBranco texto10">Projeto Integrador II</a>
            </div>
          </div>
        </div>
        <div class="frameDocente">
          <div class="docenteGeral">
            <a href="#" class="imagemDocente translate">
              <img class="alturaTotal" src="~/assets/img/noticias/noticia3.jpg" alt="Foto" />
            </a>
            <div>
              <h3 class="nomeDocente">
                <a href="#">
                  <strong>Gustavo Del Vechio</strong>
                </a>
              </h3>
              <p class="texto12">Doutor em Comunicação Social</p>
            </div>
          </div>
          <div class="divFlex mailLattes">
            <a class="divFlex" href="mailto:name@email.com">
              <img class="iconeGeral" src="~/assets/img/icones/iconeMailAzul.svg" alt="Icone" />
              <div class="enderecoMail divFlex">
                <span>gustavo.vechio</span>
                <span>@fatectq.edu.br</span>
              </div>
            </a>
            <a class="divFlex" href="#">
              <img class="iconeGeral" src="~/assets/img/icones/iconeLattes.svg" alt="Icone" />Currículo Lattes
            </a>
          </div>
          <div class="docenteDisciplinas">
            <div>
              <a href="#" class="aBotao fundoCinza80 textoBranco texto10">Web Design I</a>
              <a href="#" class="aBotao fundoCinza80 textoBranco texto10">Web Design II</a>
              <a
                href="#"
                class="aBotao fundoCinza80 textoBranco texto10"
              >Design para Multiplataforma</a>
              <a href="#" class="aBotao fundoCinza80 textoBranco texto10">Projeto Integrador I</a>
              <a href="#" class="aBotao fundoCinza80 textoBranco texto10">Projeto Integrador II</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import url('@/assets/variables.css');

.textoCurso,
.textoCurso:hover {
  color: var(--cor-verde-texto);
}

.fundoCurso {
  background-color: var(--cor-verde);
}
</style>
