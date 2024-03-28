// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  ui: {
    global: true,
    icons: ["mdi", "simple-icons"],
  },
  colorMode: {
    preference: "light",
  },
  devtools: { enabled: true },
});
