import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- O SEGREDO ESTÁ NESTA LINHA AQUI!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 
  ],
})