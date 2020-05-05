<script>
export default {
  name: 'Carousel',
  props: {
    items: {
      type: Array,
      default: null
    },

    schema: {
      type: Object,
      default () {
        return {
          id: 'id',
          title: 'titulo',
          subtitle: 'subtitulo',
          buttonColor: 'corBotao',
          buttonURL: 'urlBotao',
          backgroundColor: 'corFundo',
          backgroundImageURL: 'urlImagem'
        }
      }
    }
  },
  data () {
    return {
      current: 0,
      direction: ''
    }
  },
  computed: {
    total () {
      return this.items ? this.items.length : 0
    }
  },
  methods: {
    next () {
      this.direction = 'forward'
      if (this.current < this.total - 1) {
        this.current++
      } else {
        this.current = 0
      }
    },

    previous () {
      this.direction = 'backwards'
      if (this.current > 0) {
        this.current--
      } else {
        this.current = this.total - 1
      }
    }
  }
}
</script>

<template>
  <section class="carrosselContainer">
    <div v-if="total > 0" class="setasCarrossel">
      <a href="/" class="translate" @click.prevent="previous">
        <img src="~/assets/img/icones/iconeSetaEsquerda.svg" alt="Seta para Esquerda" />
      </a>
      <a href="/" class="translate" @click.prevent="next">
        <img src="~/assets/img/icones/iconeSetaDireita.svg" alt="Seta para Direita" />
      </a>
    </div>
    <transition-group
      enter-active-class="transition-enter-active"
      leave-active-class="transition-leave-active"
      :enter-class="direction === 'forward' ? 'translate-100vw' : '-translate-100vw'"
      enter-to-class="translate-0"
      leave-class="translate-0"
      :leave-to-class="direction === 'forward' ? '-translate-100vw' : 'translate-100vw'"
      tag="div"
      mode="in-out"
    >
      <div
        v-for="(item, index) of items"
        v-show="index === current"
        :key="item[schema.id]"
        class="carrosselItem"
      >
        <div class="carrosselImagem" :style="{ backgroundColor: item[schema.backgroundColor] }">
          <img
            v-if="item[schema.backgroundImageURL]"
            :src="item[schema.backgroundImageURL]"
            alt="Foto"
          />
        </div>
        <div class="carrosselLegenda">
          <h1 class="textoBranco">{{ item[schema.title] }}</h1>
          <h2 v-if="item[schema.subtitle]" class="textoBranco">{{ item[schema.subtitle] }}</h2>
          <a
            :href="item[schema.buttonURL]"
            class="aBotao fundoAzulClaro textoBranco"
            :style="{ backgroundColor: item[schema.buttonColor] }"
          >Saiba mais...</a>
        </div>
      </div>
    </transition-group>
  </section>
</template>

<style scoped>
.transition-enter-active {
  transition: all 500ms ease-out;
  z-index: 1;
}

.transition-leave-active {
  transition: all 500ms ease-in;
  z-index: 0;
}

.translate-100vw {
  opacity: 0;
  transform: translateX(100vw);
}

.translate-0 {
  opacity: 1;
  transform: translateX(0);
}

.-translate-100vw {
  opacity: 0;
  transform: translateX(-100vw);
}
</style>
