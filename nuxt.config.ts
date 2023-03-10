// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    // https://github.com/nuxt/nuxt/discussions/16014
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/vue-fontawesome',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },

  // https://tailwindcss.com/docs/guides/nuxtjs#3
  // https://fontawesome.com/docs/web/use-with/vue/use-with
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css', 'yakuhanjp/dist/css/yakuhanjp_s-narrow.css'],

  // https://tailwindcss.com/docs/guides/nuxtjs#3
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // https://content.nuxtjs.org/get-started#add-to-a-project
  // https://v1.image.nuxtjs.org/get-started/
  modules: ['@nuxt/content', '@nuxt/image-edge'],

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  image: {
    // https://v1.image.nuxtjs.org/configuration
    screens: {
      sm3x: 1920,
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
      link: [
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', href: '/icons/icon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' },
      ],
      script: [
        {
          async: true,
          defer: true,
          src: 'https://platform.twitter.com/widgets.js',
        },
        {
          async: true,
          defer: true,
          src: 'https://www.instagram.com/embed.js',
        },
      ],
    },
  },
});
