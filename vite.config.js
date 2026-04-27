import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        projects: resolve(__dirname, 'projects.html'),
        quote: resolve(__dirname, 'quote.html'),
      },
    },
  },
})
