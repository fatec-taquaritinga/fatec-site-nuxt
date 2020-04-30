<script>
export default {
  name: 'SiteHeader'
}
</script>

<template>
  <header>
    <nav>
      <nuxt-link id="logoFatec" to="/" class="translate">
        <img src="~/assets/img/logos/logoFatec.svg" alt="Logo" />
      </nuxt-link>

      <ul class="menuTopo">
        <li>
          <a id="botaoMenu">
            <img src="~/assets/img/icones/iconeMenu.svg" alt="Menu" />
          </a>
          <ul class="itensMenu">
            <li class="itemMenu">
              <a>Cursos</a>
              <ul class="submenu">
                <li id="primeiroSubtitulo" class="subtituloMenu">Graduação presencial:</li>
                <li>
                  <a href="#" class="aItemMenu aItemMenuCursos textoVerde">
                    <div class="fundoVerde"></div>
                    <img src="~/assets/img/icones/iconeAgro.svg" alt="Icone" />Agronegócio
                  </a>
                </li>
                <li>
                  <a href="#" class="aItemMenu aItemMenuCursos textoAzul">
                    <div class="fundoAzul"></div>
                    <img src="~/assets/img/icones/iconeADS.svg" alt="Icone" />Análise e Desenvolvimento de Sistemas
                  </a>
                </li>
                <li>
                  <a href="#" class="aItemMenu aItemMenuCursos textoVermelho">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconePI.svg" alt="Icone" />Produção Industrial
                  </a>
                </li>
                <li>
                  <a href="#" class="aItemMenu aItemMenuCursos textoAzulClaro">
                    <div class="fundoAzulClaro"></div>
                    <img src="~/assets/img/icones/iconeSI.svg" alt="Icone" />Sistemas para Internet
                  </a>
                </li>
                <li class="subtituloMenu">Pós-Graduação Lato Sensu:</li>
                <li>
                  <a href="#" class="aItemMenu aItemMenuCursos textoVermelhoCPS">
                    <div class="fundoVermelhoCPS"></div>
                    <img src="~/assets/img/icones/iconePos.svg" alt="Icone" />Gestão da Produção Industrial
                  </a>
                </li>
                <li class="subtituloMenu">Suporte ao ensino:</li>
                <li>
                  <a href class="aItemMenu aItemMenuCursos">
                    <div class="fundoAzulCPS"></div>
                    <img src="~/assets/img/icones/iconeChapeu.svg" alt="Icone" />Trabalho de Conclusão de Curso (TCC)
                  </a>
                </li>
                <li>
                  <a href class="aItemMenu aItemMenuCursos">
                    <div class="fundoAzulCPS"></div>
                    <img src="~/assets/img/icones/iconeMaleta.svg" alt="Icone" />Estágio e emprego
                  </a>
                </li>
                <li class="subtituloMenu">Eventos extracurriculares:</li>
                <li>
                  <a href="#" class="aItemMenu aItemMenuCursos textoAzulCPS">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeEvento.svg" alt="Icone" />Central de Eventos
                  </a>
                </li>
                <li>
                  <a href="#" class="aItemMenu aItemMenuCursos textoAzulCPS">
                    <div class="fundoAzulCPS"></div>
                    <img src="~/assets/img/icones/iconeNovoEvento.svg" alt="Icone" />Propor um novo evento
                  </a>
                </li>
              </ul>
            </li>
            <li class="itemMenu">
              <a>Institucional</a>
              <ul class="submenu">
                <li>
                  <nuxt-link to="institucional/quem-somos" exact class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconePredio.svg" alt="Icone" />Quem somos
                  </nuxt-link>
                </li>
                <li>
                  <a href="#" class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeDepartamentos.svg" alt="Icone" />Departamentos
                  </a>
                </li>
                <li>
                  <a href="#" class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeMembros.svg" alt="Icone" />Docentes e Servidores
                  </a>
                </li>
                <li>
                  <a href class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeDownload.svg" alt="Icone" />Central de Downloads
                  </a>
                </li>
                <li>
                  <a href="#" class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeNoticias.svg" alt="Icone" />Central de Notícias
                  </a>
                </li>
                <li>
                  <a href="#" class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeCalendario.svg" alt="Icone" />Calendário letivo
                  </a>
                </li>
                <li>
                  <a href="#" class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeGrupoPesquisa.svg" alt="Icone" />Grupos de Pesquisa
                  </a>
                </li>
                <li>
                  <a href="#" class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeGrupoEstudantes.svg" alt="Icone" />Grupos Estudantis
                  </a>
                </li>
                <li>
                  <a href="#" class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <div class="fundoADS"></div>
                    <img src="~/assets/img/icones/iconePrancheta.svg" alt="Icone" />Projetos Acadêmicos
                  </a>
                </li>
                <li>
                  <a href="#" class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeMaos.svg" alt="Icone" />Monitoria
                  </a>
                </li>
                <li>
                  <a href="#" class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeContato.svg" alt="Icone" />Fale conosco
                  </a>
                </li>
              </ul>
            </li>
            <li class="itemMenu">
              <a>Acesso</a>
              <ul class="submenu">
                <li>
                  <a href class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconePortal.svg" alt="Icone" />Portal Acadêmico
                  </a>
                </li>
                <li>
                  <a href class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeSIGA.svg" alt="Icone" />SIGA (para alunos)
                  </a>
                </li>
                <li>
                  <a href class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeSIGA.svg" alt="Icone" />SIGA (para docentes)
                  </a>
                </li>
                <li>
                  <a href class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeMail.svg" alt="Icone" />E-mail institucional
                  </a>
                </li>
                <li>
                  <a href class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeBiblioteca.svg" alt="Icone" />Biblioteca
                  </a>
                </li>
                <li>
                  <a href class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeMoodle.svg" alt="Icone" />Moodle
                  </a>
                </li>
                <li>
                  <a href class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeInterfaceTecnologica.svg" alt="Icone" />Revista Interface Tecnológica
                  </a>
                </li>
                <li>
                  <a href class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeSIMTEC.svg" alt="Icone" />Simpósio de Tecnologia
                  </a>
                </li>
                <li>
                  <a href class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeReserva.svg" alt="Icone" />Sistema de Reservas (docentes)
                  </a>
                </li>
              </ul>
            </li>
            <li class="itemMenu">
              <a>Vestibular</a>
              <ul class="submenu">
                <li>
                  <a href class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeVestibular.svg" alt="Icone" />Inscrições
                  </a>
                </li>
                <li>
                  <a href class="aItemMenu">
                    <div class="fundoVermelho"></div>
                    <img src="~/assets/img/icones/iconeLivroAberto.svg" alt="Icone" />Provas anteriores
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <a id="logoCPS" href="https://www.cps.sp.gov.br/" class="translate">
        <img src="~/assets/img/logos/logoCPS.svg" alt="Logo" />
      </a>
      <a id="logoGoverno" href="http://www.saopaulo.sp.gov.br/" class="translate">
        <img src="~/assets/img/logos/logoGoverno.svg" alt="Logo" />
      </a>
    </nav>
  </header>
</template>
