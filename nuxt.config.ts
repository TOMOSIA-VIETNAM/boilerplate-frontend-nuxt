// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Performance optimizations
  vite: {
    build: {
      sourcemap: false,
      cssCodeSplit: true,
    },
    css: {
      devSourcemap: false,
    },
    optimizeDeps: {
      exclude: ['@tailwindcss/oxide', 'lightningcss'],
    },
    ssr: {
      noExternal: ['@tailwindcss/oxide', 'lightningcss'],
    },
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
  ],

  components: [
    { path: '~/components/ui', pathPrefix: false },
    { path: '~/components', pathPrefix: false },
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'vi', iso: 'vi-VN', name: 'Tiếng Việt', file: 'vi.json' },
      { code: 'ja', iso: 'ja-JP', name: 'Japanese', file: 'ja.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: '../app/assets/locales/',
    strategy: 'prefix_except_default',
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },

  colorMode: {
    classSuffix: '',
    preference: 'light', // 'light' | 'dark' | 'system'
    fallback: 'light',
  },

  compatibilityDate: '2024-11-27',

  // Global middleware
  routeRules: {
    '/**': { middleware: ['auth'] },
  },

  // Performance & SEO optimizations
  app: {
    head: {
      title: 'Nuxt Boilerplate',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: 'A modern Nuxt 3 boilerplate with PWA support, i18n, and performance optimizations' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#38bdf8' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Nuxt Boilerplate' },
        { property: 'og:description', content: 'A modern Nuxt 3 boilerplate with PWA support, i18n, and performance optimizations' },
        { property: 'og:image', content: '/favicon.ico' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Nuxt Boilerplate' },
        { name: 'twitter:description', content: 'A modern Nuxt 3 boilerplate with PWA support, i18n, and performance optimizations' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
      script: [
        {
          innerHTML: `
            // Performance monitoring
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js');
              });
            }
          `,
        },
      ],
    },
  },

  // Image optimization
  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 50,
          height: 50,
        },
      },
    },
  },

  // Nitro optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true,
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
    storage: {
      redis: {
        driver: 'redis',
        /* redis connection options */
      },
    },
  },

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'https://your-domain.com',
      apiBase: process.env.API_BASE || '/api',
    },
  },

  // You are seeing this error because your local types are out of date and do not recognize the pwa property from the @vite-pwa/nuxt module. This is a common issue after adding a new Nuxt module.
  // npx nuxi prepare
  pwa: {
    injectRegister: 'script',
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico'],
    manifest: {
      name: 'Nuxt Boilerplate',
      short_name: 'NuxtBP',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#38bdf8',
      icons: [
        {
          src: '/favicon.ico',
          sizes: '64x64 32x32 24x24 16x16',
          type: 'image/x-icon',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
  },
});
