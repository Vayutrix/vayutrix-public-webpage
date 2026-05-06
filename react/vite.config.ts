import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative asset paths so deployments under sub-paths
  // (and some static hosts that rewrite unknown routes) don't
  // accidentally serve index.html for /assets/*.js.
  base: './',
})
