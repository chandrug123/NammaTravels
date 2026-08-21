import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Set base to your GitHub repo name, e.g. '/NammaTravels/'
// This is read from the VITE_BASE_URL env var so CI can inject it,
// and falls back to '/' for local dev.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_URL || '/',
})
