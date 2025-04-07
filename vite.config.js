import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: '../dist', // Specify where the build output should go (out of client)
  },
  server: {
    open: true, // Automatically open the browser when Vite starts
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png','**/*.jpeg','**/*.JPEG', '**/*.svg'], // Add the file types you use
  plugins: [react()],
})
