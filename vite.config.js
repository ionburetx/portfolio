import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js', // opcional, si necesitás setup como jest-dom
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // opcional si usás @/ para imports
    },
  },
})

