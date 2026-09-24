import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/melissa-portfolio',
  build: {
    cssMinify: 'esbuild',
    sourcemap: false,
    target: 'es2020',
  },
})