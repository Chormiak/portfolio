// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false
    
   },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "William Chormiak – Desenvolvedor Backend Node.js & Django",

      meta: [
        { charset: "utf-8" },

        { name: "viewport", content: "width=device-width, initial-scale=1" },

        {
          name: "description",
          content:
            "Desenvolvedor Frontend especializado em Vue, Nuxt e performance web. Projetos reais com foco em arquitetura limpa e boas práticas.",
        },

        // // Open Graph
        // {
        //   property: "og:title",
        //   content: "Seu Nome – Desenvolvedor Frontend",
        // },
        // {
        //   property: "og:description",
        //   content:
        //     "Projetos em Vue e Nuxt com foco em performance, SEO e arquitetura moderna.",
        // },
        // {
        //   property: "og:type",
        //   content: "website",
        // },
        // {
        //   property: "og:url",
        //   content: "https://seusite.com",
        // },
        // {
        //   property: "og:image",
        //   content: "https://seusite.com/og-image.png",
        // },

        // // Twitter
        // {
        //   name: "twitter:card",
        //   content: "summary_large_image",
        // },
        // {
        //   name: "twitter:title",
        //   content: "Seu Nome – Desenvolvedor Frontend",
        // },
        // {
        //   name: "twitter:description",
        //   content: "Portfólio com projetos em Vue, Nuxt e foco em performance.",
        // },
        // {
        //   name: "twitter:image",
        //   content: "https://seusite.com/og-image.png",
        // },
      ],

      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },
});
