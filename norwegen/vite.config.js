import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/norwegen/',
  build: {
    outDir: '../dist/norwegen',
    emptyOutDir: true,
  },
});
