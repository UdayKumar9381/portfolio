import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // Changed from @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
})