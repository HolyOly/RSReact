/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  build: {
    minify: false,
  },
});
