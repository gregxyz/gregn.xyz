require('dotenv-flow').config();

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/_fonts.scss',
    '~/assets/scss/_type.scss',
    '~/assets/scss/_animations.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/gsap.client.js',
    '~/plugins/components.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://gapi.storyblok.com/v1/api',
        httpLinkOptions: {
          headers: {
            token: process.env.STORYBLOK_TOKEN,
            version: process.env.STORYBLOK_VERSION,
          },
        },
      },
    },
  },
};
