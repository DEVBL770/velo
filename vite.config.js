import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// MODIFIÉ : Import du bon paquet
import prerender from 'vite-plugin-prerender'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // MODIFIÉ : Configuration du bon paquet
    prerender({
      // Le dossier où se trouve le site buildé
      staticDir: 'dist',
      // Les routes à pré-rendre
      routes: ['/'],
    }),
  ],
})