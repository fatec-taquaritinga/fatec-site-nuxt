<script>
export default {
  name: 'QuemSomos'
}
</script>

<template>
  <main id="quem-somos">
    <section class="bannerGeral bannerMenor primeiraSecao">
      <img src="~/assets/img/banners/bannerFatec.jpg" alt="Foto" />
    </section>

    <section class="quemSomos">
      <div class="centralizarDiv">
        <h1 class="textoVermelhoCPS">Quem somos</h1>
        <div class="divFlex resumoQuemSomos">
          <div class="logoFatecAlt">
            <img src="~/assets/img/logos/logoFatec.svg" alt="Logo" />
          </div>
          <div class="quemSomosInfo">
            <p>
              Uma
              <span class="textoVermelhoCPS">
                <strong>faculdade pública estadual</strong>
              </span>, com mais de 27 anos de história!
            </p>
            <p>
              Localizada em uma das mais privilegiadas regiões do estado de São Paulo, a
              <span class="textoVermelhoCPS">
                <strong>Faculdade de Tecnologia de Taquaritinga</strong>
              </span> foi criada em 1 de julho de 1992, tornando-se a primeira
              <span class="textoVermelhoCPS">
                <strong>Instituição de Ensino Superior</strong>
              </span> desta cidade.
            </p>
            <p>
              Atualmente, a Fatec Taquaritinga oferece os cursos superiores de
              <a href="#">Agronegócio</a>,
              <a href="#">Análise e Desenvolvimento de Sistemas</a>,
              <a href="#">Produção Industrial</a> e
              <a href="#">Sistemas para Internet</a>, além do curso de Pós-Graduação Lato Sensu em
              <a href="#">Gestão da Produção Industrial</a>.
            </p>
          </div>
        </div>

        <div class="divisaoDownload">
          <h2 class="textoAzulCPS">Regulamento e Regimento da Fatec Taquaritinga</h2>
          <p class="centralizarTexto">
            Para mais informações sobre os departamentos que compõe a Fatec Taquaritinga,
            <a href="#">
              <b>clique aqui</b>
            </a>.
          </p>
          <div class="framesDownloads">
            <div class="frameDownload">
              <div class="divFlex">
                <img src="~/assets/img/icones/iconePDF.svg" alt="Icone" />
                <a href="#">Regimento Geral da Fatec Taquaritinga</a>
              </div>
              <a href="#" class="botaoDownload fundoVerde divFlex translate">
                <img class="iconeGeral" src="~/assets/img/icones/iconeDownloadBranco.svg" alt="Icone" />
                <p class="textoBranco">Download</p>
              </a>
            </div>
            <div class="frameDownload">
              <div class="divFlex">
                <img src="~/assets/img/icones/iconePDF.svg" alt="Icone" />
                <a href="#">Regulamento de Graduação da Fatec Taquaritinga</a>
              </div>
              <a href="#" class="botaoDownload fundoVerde divFlex translate">
                <img class="iconeGeral" src="~/assets/img/icones/iconeDownloadBranco.svg" alt="Icone" />
                <p class="textoBranco">Download</p>
              </a>
            </div>
            <div class="frameDownload">
              <div class="divFlex">
                <img src="~/assets/img/icones/iconePDF.svg" alt="Icone" />
                <a href="#">Síntese do Regimento e Regulamento Geral da Fatec Taquaritinga</a>
              </div>
              <a href="#" class="botaoDownload fundoVerde divFlex translate">
                <img class="iconeGeral" src="~/assets/img/icones/iconeDownloadBranco.svg" alt="Icone" />
                <p class="textoBranco">Download</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="fundoCinza240 secaoTimeline">
      <div class="centralizarDiv">
        <h1 class="textoAzulCPS">Nossa história</h1>
        <p class="centralizarTexto">Conheça alguns fatos marcantes na história de nossa instituição:</p>
        <div class="timeline">
          <div class="frameTimeline ladoEsquerdo">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">2017</h2>
              <ul>
                <li>Institucionalização do Sistema de Gerenciamento de Biblioteca - BiblioCPS.</li>
                <li>Fatec Taquaritinga sedia a 6ª Edição da Maratona de Programação InterFatecs.</li>
                <li>Fatec Taquaritinga completa 25 anos.</li>
              </ul>
              <div class="filaFotos divFlex">
                <a id="logoFatec25" href="#" class="logoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/logos/logoFatec25.svg" alt="Foto" />
                </a>
                <a id="logoMaratona" href="#" class="logoHistoria translate">
                  <img
                    class="alturaTotal"
                    src="~/assets/img/logos/logoMaratonaInterFatecs.svg"
                    alt="Foto"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="frameTimeline ladoDireito">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">2016</h2>
              <ul>
                <li>Parceria com a Secretaria de Agricultura e Abastecimento do Estado de São Paulo.</li>
                <li>Conquista do selo de Instituição Socialmente Responsável.</li>
                <li>Implantação do Sistema Integrado de Gestão Acadêmica - SIGA.</li>
              </ul>
              <div class="filaFotos divFlex">
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/16.jpg" alt="Foto" />
                </a>
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/17.jpg" alt="Foto" />
                </a>
                <a id="logoSIGA" href="#" class="logoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/icones/iconeSIGA.svg" alt="Foto" />
                </a>
                <a href="#" class="logoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/18.jpg" alt="Foto" />
                </a>
              </div>
            </div>
          </div>
          <div class="frameTimeline ladoEsquerdo">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">2015</h2>
              <ul>
                <li>Indexação da Revista Interface Tecnológica.</li>
                <li>Implantação do projeto de acessibilidade no Campus da Fatec Taquaritinga.</li>
              </ul>
              <div class="filaFotos divFlex">
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/14.jpg" alt="Foto" />
                </a>
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/15.jpg" alt="Foto" />
                </a>
              </div>
            </div>
          </div>
          <div class="frameTimeline ladoDireito">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">2014</h2>
              <ul>
                <li>Reforma do Campus: Blocos Administrativo, A1 e A2.</li>
                <li>Implantação do Curso Superior de Tecnologia em Gestão Empresarial (EaD).</li>
                <li>Conquista do selo de Instituição Socialmente Responsável.</li>
              </ul>
              <div class="filaFotos divFlex">
                <a href="#" class="logoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/icones/iconeGE.svg" alt="Foto" />
                </a>
                <a href="#" class="logoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/13.jpg" alt="Foto" />
                </a>
              </div>
            </div>
          </div>
          <div class="frameTimeline ladoEsquerdo">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">2013</h2>
              <ul>
                <li>Destaque na participação em Programas de Intercâmbio: Ciência sem Fronteiras e Intercâmbio Cultural do Centro Paula Souza.</li>
              </ul>
            </div>
          </div>
          <div class="frameTimeline ladoDireito">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">2012</h2>
              <ul>
                <li>Conquista do 1º lugar na 6ª Edição da Feteps.</li>
                <li>Criação do Sistema de Gerenciamento de Biblioteca - BiblioCPS.</li>
              </ul>
            </div>
          </div>
          <div class="frameTimeline ladoEsquerdo">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">2011</h2>
              <ul>
                <li>Implantação do curso de Pós-Graduação Lato Sensu em Gestão da Produção Industrial.</li>
                <li>Conquista do 1º lugar na 5ª Edição da Feteps.</li>
                <li>Inauguração do complexo de laboratórios de Produção Industrial.</li>
              </ul>
              <div class="filaFotos divFlex">
                <a href="#" class="logoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/icones/iconePos.svg" alt="Foto" />
                </a>
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/11.jpg" alt="Foto" />
                </a>
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/12.jpg" alt="Foto" />
                </a>
              </div>
            </div>
          </div>
          <div class="frameTimeline ladoDireito">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">2010</h2>
              <ul>
                <li>Implantação do Curso Superior de Tecnologia em Sistemas para Internet.</li>
                <li>Alteração do Curso Superior de Tecnologia em Processamento de Dados para Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas.</li>
                <li>O Curso Superior de Tecnologia de Produção passa a se chamar Curso Superior de Tecnologia em Produção Industrial.</li>
                <li>Início da construção da Vila Agroindustrial de Alimentos e da urbanização do Campus.</li>
              </ul>
              <div class="filaFotos divFlex">
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/09.jpg" alt="Foto" />
                </a>
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/10.jpg" alt="Foto" />
                </a>
                <a href="#" class="logoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/icones/iconeADS.svg" alt="Foto" />
                </a>
                <a href="#" class="logoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/icones/iconeSI.svg" alt="Foto" />
                </a>
              </div>
            </div>
          </div>
          <div class="frameTimeline ladoEsquerdo">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">2009</h2>
              <ul>
                <li>Implantação da primeira Congregação da Fatec Taquaritinga.</li>
              </ul>
            </div>
          </div>
          <div class="frameTimeline ladoDireito">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">2008</h2>
              <ul>
                <li>Elaboração do projeto da Vila Agroindustrial de Alimentos e da urbanização do Campus.</li>
              </ul>
            </div>
          </div>
          <div class="frameTimeline ladoEsquerdo">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">2007</h2>
              <ul>
                <li>O Curso Superior de Tecnologia em Produção – Ênfase: Industrial passa a se chamar Curso Superior de Tecnologia de Produção.</li>
              </ul>
              <div class="filaFotos divFlex">
                <a href="#" class="logoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/icones/iconePI.svg" alt="Foto" />
                </a>
              </div>
            </div>
          </div>
          <div class="frameTimeline ladoDireito">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">2006</h2>
              <ul>
                <li>Implantação do Curso Superior de Tecnologia em Agronegócio.</li>
              </ul>
              <div class="filaFotos divFlex">
                <a href="#" class="logoHistoria translate">
                  <img class="alturatotal" src="~/assets/img/icones/iconeAgro.svg" alt="Foto" />
                </a>
              </div>
            </div>
          </div>
          <div class="frameTimeline ladoEsquerdo">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">2004</h2>
              <ul>
                <li>Ampliação e reforma do Bloco Administrativo.</li>
                <li>Primeira edição da Revista Interface Tecnológica.</li>
                <li>Criação do Cadastro Geral de Alunos - CGA.</li>
              </ul>
              <div class="filaFotos divFlex">
                <a href="#" class="logoHistoria translate">
                  <img
                    class="alturaTotal"
                    src="~/assets/img/icones/iconeInterfaceTecnologica.svg"
                    alt="Foto"
                  />
                </a>
                <a href="#" class="logoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/icones/iconeCGA.svg" alt="Foto" />
                </a>
              </div>
            </div>
          </div>
          <div class="frameTimeline ladoDireito">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">2002</h2>
              <ul>
                <li>Implantação do Curso Superior de Tecnologia em Produção – Ênfase: Industrial.</li>
                <li>Início da construção do Bloco A2.</li>
              </ul>
              <div class="filaFotos divFlex">
                <a href="#" class="logoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/icones/iconePI.svg" alt="Foto" />
                </a>
              </div>
            </div>
          </div>
          <div class="frameTimeline ladoEsquerdo">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">1998</h2>
              <ul>
                <li>O Campus recebe o nome da Profa. Marlene Maria Miletta Servidoni.</li>
                <li>A Biblioteca recebe o nome da Profa. Marilda Arlete Bertaco Peria.</li>
              </ul>
              <div class="filaFotos divFlex">
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/07.jpg" alt="Foto" />
                </a>
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/08.jpg" alt="Foto" />
                </a>
              </div>
            </div>
          </div>
          <div class="frameTimeline ladoDireito">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">1997</h2>
              <ul>
                <li>Inauguração do Campus: Blocos A1 e Administrativo.</li>
              </ul>
              <div class="filaFotos divFlex">
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/05.jpg" alt="Foto" />
                </a>
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/06.jpg" alt="Foto" />
                </a>
              </div>
            </div>
          </div>
          <div class="frameTimeline ladoEsquerdo">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">1995</h2>
              <ul>
                <li>Formação da primeira turma do Curso Superior de Tecnologia em Processamento de Dados.</li>
                <li>Início da construção do Campus.</li>
              </ul>
              <div class="filaFotos divFlex">
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/03.jpg" alt="Foto" />
                </a>
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/04.jpg" alt="Foto" />
                </a>
              </div>
            </div>
          </div>
          <div class="frameTimeline ladoDireito">
            <div>
              <h2 class="textoEsquerda textoVermelhoCPS">1992</h2>
              <h4 class="texto13 textoAzul textoEsquerda">
                <strong>Implantação da Fatec Taquaritinga</strong>
              </h4>
              <ul>
                <li>
                  <strong>1 de julho:</strong> ato de criação da Fatec Taquaritinga.
                </li>
                <li>
                  <strong>1 de agosto:</strong> início das atividades nas dependências da Etec “Dr. Adail Nunes da Silva”.
                </li>
                <li>
                  <strong>22 de agosto:</strong> implantação do Curso Superior de Tecnologia em Processamento de Dados e da Comissão de Implantação da Fatec Taquaritinga.
                </li>
              </ul>
              <div class="filaFotos divFlex">
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/01.jpg" alt="Foto" />
                </a>
                <a href="#" class="fotoHistoria translate">
                  <img class="alturaTotal" src="~/assets/img/timeline/02.jpg" alt="Foto" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p class="centralizarTexto">
          Algumas fotos antigas da Fatec Taquaritinga podem ser visualizadas em um álbum criado em nosso perfil do Facebook.
          <br />
          <a
            href="https://www.facebook.com/pg/fatec.taquaritinga/photos/?tab=album&album_id=1811771308840487"
          >Clique aqui</a> para acessar.
        </p>
      </div>
    </section>
  </main>
</template>
