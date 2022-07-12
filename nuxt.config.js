export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Set dir of src file
  srcDir: 'src/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Salemkode',
    htmlAttrs: {
      lang: 'en',
    },
    script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // social media meta tag
      { name: 'og:title', content: 'Salemkode' },
      { name: 'og:description', content: 'Personal website of salemkode - Full web stack developer' },
      { name: 'og:image', content: '/preview.png' },

      // twitter card
      { name: 'twitter:title', content: 'Salemkode' },
      { name: 'twitter:description', content: 'Personal website of salemkode - Full web stack developer' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'https://salemkode.com' },
      { name: 'twitter:image', content: '/preview.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: '',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap',
      },
      {
        rel: 'stylesheet',
        href: '/style/main.css',
      },
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-windicss',
    'nuxt-purgecss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  },

  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const project = await $content("project").only(['path']).fetch()
      return project.map(file => file.path === '/index' ? '/' : file.path)
    }
  }

  /* 
  i18n: {
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' },
    ],
    langDir: '~/lang',
  },
  */
}
