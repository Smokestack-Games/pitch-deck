import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Smokestack Games | Pitch Deck Q1 2026',
  description: 'Smokestack Games Pitch Deck with Parallax Scrolling',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap', rel: 'stylesheet' }]
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    }
  }
})
