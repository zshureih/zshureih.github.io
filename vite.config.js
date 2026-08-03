import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/app/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
