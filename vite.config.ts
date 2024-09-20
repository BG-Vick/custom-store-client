import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  /*server: {
    proxy: {
      '/api': {
        target: 'https://dummyjson.com',
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true,
      },
      '/foo': {
        target: 'http://jsonplaceholder.typicode.com',
        rewrite: (path) => path.replace(/^\/foo/, ''),
        changeOrigin: true,
        secure: false,
      },
    },
  },*/
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  //envPrefix: 'APP_',
});
