import * as fs from 'fs'
import * as path from 'path'

const isDev = process.env.NODE_ENV === 'development'

export default {
  mode: 'spa',
  head: {
    titleTemplate: (title) => title ? '%s - Fatec Taquaritinga' : 'Fatec Taquaritinga',
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ],
    meta: [
      { name: 'apple-mobile-web-app-title', content: 'Fatec Taquaritinga' },
      { name: 'application-name', content: 'Fatec Taquaritinga' },
      { name: 'msapplication-TileColor', content: '#b01116' },
      { name: 'theme-color', content: '#b01116' }
    ]
  },
  loading: { color: '#b01116' },
  css: [
    './assets/variables.css',
    './assets/base.css'
  ],
  plugins: [],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',

    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',

    // Doc: https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg'
  ],
  modules: [
    // Doc: https://github.com/nuxt-community/pwa-module
    '@nuxtjs/pwa',

    // Doc: https://github.com/nuxt-community/axios-module
    '@nuxtjs/axios'
  ],
  pwa: {
    workbox: {
      dev: false,
      debug: isDev,
      cleanupOutdatedCaches: true,
      cacheNames: {
        prefix: 'fatec',
        suffix: 'v2004301200'
      }
    },
    meta: {
      lang: 'pt-BR',
      display: 'browser',
      name: 'Fatec Taquaritinga',
      author: 'Erick Eduardo Petrucelli <erick.petrucelli@fatectq.edu.br>',
      description:
        'A Faculdade de Tecnologia de Taquariginta é uma tradicional instituição de Ensino Superior que oferece cursos de graduação gratuitos de qualidade. Localizada em uma das mais privilegiadas regiões do estado de São Paulo, a Fatec Taquaritinga foi criada em 1° de julho de 1992, tornando-se a primeira instituição de ensino superior dessa cidade. Atualmente, oferece os cursos superiores tecnológicos presenciais em Agronegócio, Análise e Desenvolvimento de Sistemas, Produção Industrial e Sistemas para Internet. Também oferece o curso de Pós-Graduação em Gestão da Produção Industrial.'
    },
    icon: false,
    manifest: false
  },
  webfontloader: {
    custom: {
      families: [
        'Roboto:n4,n7'
      ],
      urls: [
        'https://fonts.googleapis.com/css?family=Roboto:400,700&display=fallback'
      ]
    }
  },
  purgeCSS: {
    content: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './app.html'
    ],
    whitelist: ['html', 'body']
  },
  server: {
    https: isDev
      ? {
        key: fs.readFileSync(path.resolve(__dirname, 'private/localhost.key')),
        cert: fs.readFileSync(path.resolve(__dirname, 'private/localhost.crt'))
      }
      : false
  },
  build: {
    postcss: {
      plugins: {
        'postcss-color-mod-function': {
          importFrom: './assets/variables.css'
        }
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },

    parallel: isDev,

    extend (config, { isDev, isClient }) {
      if (isDev) {
        config.devtool = isClient ? 'source-map' : 'inline-source-map'
      } else {
        config.optimization.splitChunks.maxSize = 220000
      }
    }
  }
}
