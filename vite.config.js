import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/p4/',   // add this line
  plugins: [react()]
})
