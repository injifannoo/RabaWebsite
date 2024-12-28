import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png','**/*.jpeg','**/*.JPEG'], // Add the file types you use
  plugins: [react()],
})
