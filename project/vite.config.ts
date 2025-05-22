import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // This ensures assets are properly referenced at the root level
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
