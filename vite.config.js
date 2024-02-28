import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh'; // Agrega esta línea

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()], // Agrega reactRefresh
});