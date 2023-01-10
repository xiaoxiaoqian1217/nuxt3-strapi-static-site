// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

 
export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo"],
  apollo: {
    clients: {
      default: {
        httpEndpoint:"http://danyanpi.site:1337/graphql" || "http://127.0.0.1:1337/graphql",
      },
    },
  },
  runtimeConfig: {
    public: {
      strapiURL: "http://danyanpi.site:1337" || "http://127.0.0.1:1337",
    },
  },
})
