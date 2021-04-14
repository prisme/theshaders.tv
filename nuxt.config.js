const title = "The Shaders";
const description = "Immersive Music Visualization, Live Visual Performance, Digital Art";

export default {
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title,
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: description }],
    link: [
      { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Exo+2|Libre+Franklin" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "nuxt-svg-loader",
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
      name: title,
      short_name: title,
      description,
      background_color: "#000",
    },
    meta: {
      name: title,
      description,
      author: title,
      nativeUI: true,
      appleStatusBarStyle: "black-translucent",
      theme_color: "#000",
      author: title,
      ogSiteName: title,
      ogDescription: description,
      ogHost: "https://www.theshaders.tv",
      ogImage: "/images/fb_img.jpg",
      twitterCard: "summary_large_image",
      twitterSite: "@theshaders",
      twitterCreator: "@theshaders",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: true,
  },
};
