export default defineNuxtRouteMiddleware((to) => {
  // Set default meta tags for all pages
  useHead({
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow' },
      { name: 'theme-color', content: '#38bdf8' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
  });

  // Track page views for analytics
  if (import.meta.client) {
    // You can integrate with Google Analytics, Plausible, or other analytics here
    console.log('Page view:', to.path);
  }
});
