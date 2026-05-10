import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site: https://<user>.github.io/AS-BistroDemo.io/
const repoBase = '/AS-BistroDemo.io/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.GH_PAGES === 'true' ? repoBase : '/',
})
