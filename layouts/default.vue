<script>
export default {
  name: 'LayoutDefault',
  components: {
    'site-header': () => import('~/components/SiteHeader'),
    'site-footer': () => import('~/components/SiteFooter')
  }
}
</script>

<template>
  <div id="app">
    <site-header />

    <!-- Conteúdo injetado dinamicamente -->
    <nuxt />

    <site-footer />
  </div>
</template>
