import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from 'vite-plugin-prerender'
// MODIFIÉ : On importe le nouveau moteur de rendu JSDOM
import JSDOMRenderer from '@prerenderer/renderer-jsdom'

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: 'dist',
      routes: ['/'],

      // MODIFIÉ : On spécifie explicitement le moteur de rendu JSDOM
      // C'est la correction clé pour que ça fonctionne sur Vercel.
      renderer: new JSDOMRenderer({
        // On attend que l'application React soit montée dans la div #root avant de sauvegarder le HTML
        renderAfterElementExists: '#root',
      })
    }),
  ],
})