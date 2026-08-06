import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// If you deploy to `https://<username>.github.io` (a user site), leave base as '/'.
// If you deploy to a project repo, e.g. `https://<username>.github.io/portfolio/`,
// change this to '/portfolio/' — the repo name, with slashes on both sides.
const base = '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
