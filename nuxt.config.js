const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const customEnv = process.env.CUSTOM_ENV

require('dotenv').config({ path: customEnv ? `.env.${customEnv}` : '.env' })

module.exports = {
  server: {
    port: 3333
  },
  env: {
    ...process.env
  },
  router: {
    linkActiveClass: 'select'
    // extendRoutes (routes, resolve) {
    //   routes.push({
    //     name: 'custom',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/404.vue')
    //   })
    // }
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'description', content: '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
    ],
    script: [
      { type: 'text/javascript', src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#666' },
  // loading: '~/components/Loading.vue',
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './assets/main.scss',
    './static/scss/TLstyle.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/bus',
    '@/plugins/element-ui',
    '@/plugins/utils',
    '@/plugins/vee-validate',
    '@/plugins/components',
    '@/plugins/mixins',
    '@/plugins/filters',
    { src: '@/plugins/store2', mode: 'client' },
    '@/plugins/modular-api'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'passport/member/login', method: 'post', propertyName: 'access_token' },
          logout: { url: 'client/logout', method: 'get' },
          user: { url: 'client/profile', method: 'get', propertyName: '' }
        },
        autoFetchUser: false
      }
    },
    localStorage: true,
    watchLoggedIn: false,
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/'
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    // proxyHeaders: true,
    withCredentials: true,
    prefix: '/api/'
  },
  proxy: {
    '/api/': {
      target: `${process.env.PROTOCOL}://${process.env.API_BASE_URL}`,
      pathRewrite: {
        '^/api/': '/'
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ],
    transpile: [
      /^element-ui/,
      'vee-validate/dist/rules'
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vue-slick/]
          })
        ]
      }

      // config.module.rules.push({
      //   enforce: 'pre',
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   exclude: /(node_modules)/,
      //   options: {
      //     fix: true
      //   }
      // })
    }
  },
  serverMiddleware: [
  ]
}
