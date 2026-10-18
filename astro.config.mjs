import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://abeloqui.github.io',
  base: '/SoberaniaTech',
  vite: {
    plugins: [tailwindcss()],
  },
});