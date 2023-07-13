// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/eslint-module',
      {
        /* module options */
      },
    ],
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@invictus.codes/nuxt-vuetify',
  ],
  vuetify: {
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
      useVuetifyLabs: true,
    },
  },
  components: { global: true },
})
