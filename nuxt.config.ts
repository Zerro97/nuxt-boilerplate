export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    'nuxt-headlessui',
    '@unocss/nuxt',
  ],
  extends: [
    'nuxt-seo-kit',
  ],
  runtimeConfig: {
    // https://github.com/harlan-zw/nuxt-seo-kit#1-define-config
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Awesome Site',
      siteDescription: 'Welcome to my awesome site!',
      language: 'en',
    },
  },
})
