<script>
export default {
  name: 'SiteFooter'
}
</script>

<template>
  <footer>
    <div class="centralizarDiv">
      <div class="fileiraLogos">
        <nuxt-link to="/" class="translate">
          <img class="alturaTotal" src="~/assets/img/logos/logoFatecBranco.svg" alt="Logo" />
        </nuxt-link>
        <a href="https://www.cps.sp.gov.br/" class="translate">
          <img class="alturaTotal" src="~/assets/img/logos/logoCPSBranco.svg" alt="Logo" />
        </a>
        <a href="http://www.saopaulo.sp.gov.br/" class="translate">
          <img class="alturaTotal" src="~/assets/img/logos/logoGovernoBranco.svg" alt="Logo" />
        </a>
      </div>
      <div class="fileiraEndereco">
        <div>
          <img class="alturaTotal" src="~/assets/img/icones/iconeLocalizacao.svg" alt="Icone" />
          <p>Av. Dr. Flávio Henrique Lemos, 585, Portal Itamaracá, Taquaritinga-SP. CEP: 15906-522</p>
        </div>
        <div>
          <img class="alturaTotal" src="~/assets/img/icones/iconeFone.svg" alt="Icone" />
          <p>
            (16) 3252-5250
            <br />(16) 3252-5152
          </p>
        </div>
      </div>
      <div class="fileiraRedesSociais">
        <p>Acompanhe-nos:</p>
        <a href="#" class="translate">
          <img
            class="alturaTotal"
            src="~/assets/img/icones/iconeFacebookBranco.svg"
            alt="Icone"
            title="Facebook"
          />
        </a>
        <a href="#" class="translate">
          <img
            class="alturaTotal"
            src="~/assets/img/icones/iconeInstagramBranco.svg"
            alt="Icone"
            title="Instagram"
          />
        </a>
        <a href="#" class="translate">
          <img
            class="alturaTotal"
            src="~/assets/img/icones/iconeYoutubeBranco.svg"
            alt="Icone"
            title="Youtube"
          />
        </a>
      </div>
      <div class="fileiraCreditos">
        <p>@2020 Fatec Taquaritinga. Todos os direitos reservados.</p>
        <a href="#" class="aBotao texto11">Créditos</a>
      </div>
    </div>
  </footer>
</template>
