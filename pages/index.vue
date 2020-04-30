<script>
export default {
  name: 'Index'
}
</script>

<template>
  <main id="index">
    <section class="carrosselIndex primeiraSecao">
      <div class="setasCarrossel">
        <a href="#" class="translate">
          <img src="~/assets/img/icones/iconeSetaEsquerda.svg" alt="Icone" />
        </a>
        <a href="#" class="translate">
          <img src="~/assets/img/icones/iconeSetaDireita.svg" alt="Icone" />
        </a>
      </div>
      <div class="carrosselLegenda">
        <h1 class="textoBranco">Fatec Taquaritinga promove curso de servidores</h1>
        <h2 class="textoBranco">Evento é realizado entre os dias 4 e 8 de abril</h2>
        <a href="#" class="aBotao fundoAzulClaro textoBranco">Saiba mais...</a>
      </div>
      <div class="fadeBaixo"></div>
    </section>

    <section class="secaoRedesSociais">
      <p>
        <b>Acompanhe-nos:</b>
      </p>
      <div>
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
            src="~/assets/img/icones/iconeInstagram.svg"
            alt="Icone"
            title="Instagram"
          />
        </a>
        <a href="#" class="translate">
          <img
            class="alturaTotal"
            src="~/assets/img/icones/iconeYoutube.svg"
            alt="Icone"
            title="Youtube"
          />
        </a>
      </div>
    </section>

    <section class="secaoCursos fundoCinza240">
      <div>
        <h1>Nossos cursos</h1>
        <p class="centralizarTexto">
          Conheça nossos 4
          <b>Cursos Superiores de Graduação</b>, além do nosso curso de
          <b>Pós-Graduação Lato Sensu</b>.
        </p>
        <div class="framesCursos">
          <a href="#" class="frameCurso translate">
            <img src="~/assets/img/icones/iconeAgro.svg" alt="Símbolo curso" />
            <p class="textoVerde">
              <b>Graduação em</b>
            </p>
            <h3 class="textoVerde">Agronegócio</h3>
            <p class="texto11">(tarde ou noite)</p>
            <p class="aBotao fundoVerde textoBranco">Conheça...</p>
          </a>
          <a href="#" class="frameCurso translate">
            <img src="~/assets/img/icones/iconeADS.svg" alt="Símbolo curso" />
            <p class="textoAzul">
              <b>Graduação em</b>
            </p>
            <h3 class="textoAzul">
              Análise e
              <br />Desenvolvimento
              <br />de Sistemas
            </h3>
            <p class="texto11">(tarde ou noite)</p>
            <p class="aBotao fundoAzul textoBranco">Conheça...</p>
          </a>
          <a href="#" class="frameCurso translate">
            <img src="~/assets/img/icones/iconePI.svg" alt="Símbolo curso" />
            <p class="textoVermelho">
              <b>Graduação em</b>
            </p>
            <h3 class="textoVermelho">
              Produção
              <br />Industrial
            </h3>
            <p class="texto11">(manhã ou noite)</p>
            <p class="aBotao fundoVermelho textoBranco">Conheça...</p>
          </a>
          <a a href="#" class="frameCurso translate">
            <img src="~/assets/img/icones/iconeSI.svg" alt="Símbolo curso" />
            <p class="textoAzulClaro">
              <b>Graduação em</b>
            </p>
            <h3 class="textoAzulClaro">
              Sistemas
              <br />para Internet
            </h3>
            <p class="texto11">(manhã)</p>
            <p class="aBotao fundoAzulClaro textoBranco">Conheça...</p>
          </a>
          <a a href="#" class="frameCurso translate">
            <img src="~/assets/img/icones/iconePos.svg" alt="Símbolo curso" />
            <p class="textoAzulCPS">
              <b>Pós-Graduação em</b>
            </p>
            <h3 class="textoVermelhoCPS">
              Gestão da
              <br />Produção
              <br />Industrial
            </h3>
            <p class="texto11">(sextas e sábados)</p>
            <p class="aBotao fundoVermelhoCPS textoBranco">Conheça...</p>
          </a>
        </div>
      </div>
    </section>

    <section class="secaoVestibular fundoAzul">
      <h1>
        <a href="#" class="bigLink translate">Vestibular</a>
      </h1>
      <div>
        <div class="divisaoTexto">
          <h2>Como se inscrever</h2>
          <p
            class="texto13"
          >Para ingressar em um de nossos Cursos de Graduação, você deve prestar o Vestibular, que acontece 1 vez a cada semestre, geralmente nos meses de julho e dezembro.</p>
          <p class="texto13">
            Quer ser avisado com antecedência sobre o próximo Vestibular? Preencha nosso
            <a
              href="#"
            >Formulário de Interesse</a>.
          </p>
          <a href="#" class="aBotao fundoBranco">Quero ser avisado...</a>
        </div>
        <img src="~/assets/img/gerais/arteVestibular.svg" alt="Icone" />
      </div>
    </section>

    <section class="secaoEventos fundoCinza250">
      <div class="centralizarDiv">
        <h1>Eventos</h1>
        <p
          class="centralizarTexto"
        >Inscreva-se nos eventos promovidos pela Fatec Taquaritinga e ganhe ainda mais conhecimento!</p>

        <div class="framesEventos">
          <div class="frameEvento">
            <a href="#" class="imagemEvento">
              <img src="~/assets/img/noticias/noticia2.jpg" alt="Foto" />
            </a>
            <div class="eventoTags divFlex">
              <p class="eventoNatureza texto10 fundoVermelhoCPS textoBranco">Palestra</p>
              <p class="texto11">
                <span class="textoVerde">Gratuito</span> •
                <span class="textoVerde">Aberto ao público</span>
              </p>
            </div>
            <a href="#" class="eventoTitulo texto13">
              <b>Desenvolvimento de sistemas em servidores avançados</b>
            </a>
            <div class="eventoPessoa texto11 divFlex" href="#">
              <a href="#">
                <img class="alturaTotal" src="~/assets/img/noticias/noticia4.jpg" alt="Foto" />
              </a>
              <div>
                <p class="texto10">
                  <b>Responsável:</b>
                </p>
                <a class="texto11" href="#">
                  <b>Gustavo Del Vechio</b>
                </a>
              </div>
            </div>
            <p class="texto11 eventoData divFlex">
              <img src="~/assets/img/icones/iconeData.svg" alt="Icone" />Início: 28/02 • 14h30
            </p>
            <div>
              <a href="#" class="aBotao fundoAzulClaro textoBranco texto10">Saiba mais...</a>
              <a href="#" class="aBotao fundoVerde textoBranco texto10">Inscreva-se...</a>
            </div>
          </div>
          <div class="frameEvento">
            <a href="#" class="imagemEvento">
              <img src="~/assets/img/noticias/noticia1.jpg" alt="Foto" />
            </a>
            <div class="eventoTags divFlex">
              <p class="eventoNatureza texto10 fundoVermelhoCPS textoBranco">Palestra</p>
              <p class="texto11">
                <span class="textoVerde">Gratuito</span> •
                <span class="textoVerde">Aberto ao público</span>
              </p>
            </div>
            <a href="#" class="eventoTitulo texto13">
              <b>Caminhada pela vida</b>
            </a>
            <div class="eventoPessoa texto11 divFlex" href="#">
              <a href="#">
                <img class="alturaTotal" src="~/assets/img/noticias/noticia4.jpg" alt="Foto" />
              </a>
              <div>
                <p class="texto10">
                  <b>Responsável:</b>
                </p>
                <a class="texto11" href="#">
                  <b>Gustavo Del Vechio</b>
                </a>
              </div>
            </div>
            <p class="texto11 eventoData divFlex">
              <img src="~/assets/img/icones/iconeData.svg" alt="Icone" />Início: 28/02 • 14h30
            </p>
            <div>
              <a href="#" class="aBotao fundoAzulClaro textoBranco texto10">Saiba mais...</a>
              <a href="#" class="aBotao fundoVerde textoBranco texto10">Inscreva-se...</a>
            </div>
          </div>
          <div class="frameEvento">
            <a href="#" class="imagemEvento">
              <img src="~/assets/img/noticias/noticia3.jpg" alt="Foto" />
            </a>
            <div class="eventoTags divFlex">
              <p class="eventoNatureza texto10 fundoVermelhoCPS textoBranco">Palestra</p>
              <p class="texto11">
                <span class="textoVerde">Gratuito</span> •
                <span class="textoVerde">Aberto ao público</span>
              </p>
            </div>
            <a href="#" class="eventoTitulo texto13">
              <b>Semana da criança</b>
            </a>
            <div class="eventoPessoa texto11 divFlex" href="#">
              <a href="#">
                <img class="alturaTotal" src="~/assets/img/noticias/noticia4.jpg" alt="Foto" />
              </a>
              <div>
                <p class="texto10">
                  <b>Responsável:</b>
                </p>
                <a class="texto11" href="#">
                  <b>Gustavo Del Vechio</b>
                </a>
              </div>
            </div>
            <p class="texto11 eventoData divFlex">
              <img src="~/assets/img/icones/iconeData.svg" alt="Icone" />Início: 28/02 • 14h30
            </p>
            <div>
              <a href="#" class="aBotao fundoAzulClaro textoBranco texto10">Saiba mais...</a>
              <a href="#" class="aBotao fundoVerde textoBranco texto10">Inscreva-se...</a>
            </div>
          </div>
        </div>

        <div class="centralizarTexto">
          <a href="#" class="aBotao fundoAzul textoBranco">Mais eventos...</a>
        </div>
      </div>
    </section>

    <section class="secaoNoticias fundoCinza240">
      <div class="centralizarDiv">
        <h1 class="textoVermelhoCPS">Notícias recentes</h1>
        <p class="centralizarTexto">
          Fique por dentro do que acontece na
          <span class="textoVermelhoCPS">Fatec Taquaritinga</span>.
        </p>
        <div class="framesNoticias">
          <div class="frameNoticia">
            <a href="#" class="imagemNoticia">
              <img src="~/assets/img/noticias/noticia1.jpg" alt="Foto da notícia" />
            </a>
            <div>
              <a href="#" class="tituloNoticia">
                <b>Fatec Taquaritinga promove semana da saúde</b>
              </a>
              <p class="dataNoticia texto10">
                <img src="~/assets/img/icones/iconeData.svg" alt="Icone" />26/02/2020 • 18h30
              </p>
              <div class="fileiraBotoes">
                <p class="texto10">
                  <b>Compartilhe:</b>
                </p>
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
          <div class="frameNoticia">
            <a href="#" class="imagemNoticia">
              <img src="~/assets/img/noticias/noticia2.jpg" alt="Foto da notícia" />
            </a>
            <div>
              <a href="#" class="tituloNoticia">
                <b>Curso de servidores começa nesta quarta</b>
              </a>
              <p class="dataNoticia texto10">
                <img src="~/assets/img/icones/iconeData.svg" alt="Icone" />26/02/2020 • 18h30
              </p>
              <div class="fileiraBotoes">
                <p class="texto10">
                  <b>Compartilhe:</b>
                </p>
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
          <div class="frameNoticia">
            <a href="#" class="imagemNoticia">
              <img src="~/assets/img/noticias/noticia3.jpg" alt="Foto da notícia" />
            </a>
            <div>
              <a href="#" class="tituloNoticia">
                <b>Vem aí a semana da criança</b>
              </a>
              <p class="dataNoticia texto10">
                <img src="~/assets/img/icones/iconeData.svg" alt="Icone" />26/02/2020 • 18h30
              </p>
              <div class="fileiraBotoes">
                <p class="texto10">
                  <b>Compartilhe:</b>
                </p>
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
          <div class="frameNoticia">
            <a href="#" class="imagemNoticia">
              <img src="~/assets/img/noticias/noticia4.jpg" alt="Foto da notícia" />
            </a>
            <div>
              <a href="#" class="tituloNoticia">
                <b>Curso de AutoCad</b>
              </a>
              <p class="dataNoticia texto10">
                <img src="~/assets/img/icones/iconeData.svg" alt="Icone" />26/02/2020 • 18h30
              </p>
              <div class="fileiraBotoes">
                <p class="texto10">
                  <b>Compartilhe:</b>
                </p>
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
          <div class="frameNoticia">
            <a href="#" class="imagemNoticia">
              <img src="~/assets/img/noticias/noticia5.jpg" alt="Foto da notícia" />
            </a>
            <div>
              <a href="#" class="tituloNoticia">
                <b>Semana de estudos começa nesta quinta para todos os cursos</b>
              </a>
              <p class="dataNoticia texto10">
                <img src="~/assets/img/icones/iconeData.svg" alt="Icone" />26/02/2020 • 18h30
              </p>
              <div class="fileiraBotoes">
                <p class="texto10">
                  <b>Compartilhe:</b>
                </p>
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
          <div class="frameNoticia">
            <a href="#" class="imagemNoticia">
              <img src="~/assets/img/noticias/noticia5.jpg" alt="Foto da notícia" />
            </a>
            <div>
              <a href="#" class="tituloNoticia">
                <b>Semana de estudos começa nesta quinta para todos os cursos</b>
              </a>
              <p class="dataNoticia texto10">
                <img src="~/assets/img/icones/iconeData.svg" alt="Icone" />26/02/2020 • 18h30
              </p>
              <div class="fileiraBotoes">
                <p class="texto10">
                  <b>Compartilhe:</b>
                </p>
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
        <div class="centralizarTexto">
          <a href="#" class="aBotao fundoAzul textoBranco">Mais notícias...</a>
        </div>
      </div>
    </section>

    <section class="secaoCampus bordaCima220 bordaBaixo220">
      <a href="#" class="translate">
        <img src="~/assets/img/icones/iconePlay.svg" alt="Icone" />
      </a>
      <h1 class="translate">
        <a href="#">Conheça o Campus da Fatec Taquaritinga</a>
      </h1>
      <p class="textoBranco texto14 centralizarTexto">
        <b>Salas de aula e laboratórios preparados para seus estudos!</b>
      </p>
    </section>

    <section class="secaoDepoimentos fundoCinza240">
      <div class="centralizarDiv">
        <h1 class>Depoimentos dos nossos alunos</h1>

        <div class="framesDepoimentos">
          <div class="frameDepoimento">
            <p
              class="depoimentoTexto texto11"
            >"Estou cursando Análise e Desenvolvimento de Sistemas na Fatec Taquaritinga e já consegui um emprego. Vale muito a pena!"</p>
            <a href="#" class="depoimentoNome texto11">
              <b>Gustavo Del Vechio</b>
            </a>
            <p class="depoimentoCargo texto10">
              Desenvolvedor -
              <a class="texto10" href="#">Beblue</a>
            </p>
            <p class="depoimentoCurso texto10">
              Aluno de
              <a href="#" class="texto10">Análise e Desenvolvimento de Sistemas</a>
            </p>
            <a href="#" class="depoimentoFoto translate">
              <img class="alturaTotal" src="~/assets/img/noticias/noticia1.jpg" alt="Foto" />
            </a>
          </div>
          <div class="frameDepoimento">
            <p
              class="depoimentoTexto texto11"
            >"Estou cursando Análise e Desenvolvimento de Sistemas na Fatec Taquaritinga e já consegui um emprego. Vale muito a pena!"</p>
            <a href="#" class="depoimentoNome texto11">
              <b>Gustavo Del Vechio</b>
            </a>
            <p class="depoimentoCargo texto10">
              Desenvolvedor -
              <a class="texto10" href="#">Beblue</a>
            </p>
            <p class="depoimentoCurso texto10">
              Aluno de
              <a href="#" class="texto10">Análise e Desenvolvimento de Sistemas</a>
            </p>
            <a href="#" class="depoimentoFoto translate">
              <img class="alturaTotal" src="~/assets/img/noticias/noticia1.jpg" alt="Foto" />
            </a>
          </div>
          <div class="frameDepoimento">
            <p
              class="depoimentoTexto texto11"
            >"Estou cursando Análise e Desenvolvimento de Sistemas na Fatec Taquaritinga e já consegui um emprego. Vale muito a pena!"</p>
            <a href="#" class="depoimentoNome texto11">
              <b>Gustavo Del Vechio</b>
            </a>
            <p class="depoimentoCargo texto10">
              Desenvolvedor -
              <a class="texto10" href="#">Beblue</a>
            </p>
            <p class="depoimentoCurso texto10">
              Aluno de
              <a href="#" class="texto10">Análise e Desenvolvimento de Sistemas</a>
            </p>
            <a href="#" class="depoimentoFoto translate">
              <img class="alturaTotal" src="~/assets/img/noticias/noticia1.jpg" alt="Foto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
