// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui'
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    fonts : false,
    colorMode : true,
    theme : {
      colors : ['primary', 'error'],
      transitions : false
    }
  }
})