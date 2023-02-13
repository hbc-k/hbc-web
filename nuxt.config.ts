// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/content'],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
      charset: 'utf-8',
      title: 'HBC Web - 県広放送部公式Webサイト',
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'description',
          content: '広島県立広島中学校・広島高等学校 放送部（Hiroshima Broadcasting Club）の公式Webサイトです。放送部の活動などを紹介しています。',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      link: [
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },
});
