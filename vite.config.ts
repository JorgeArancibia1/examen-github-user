import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';

const cherryPickedKeys = [
  "REACT_APP_GITHUB_TOKEN",
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const processEnv: { [key: string]: string } = {};
  cherryPickedKeys.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
      // you might want to disable it, if you don't have tests that rely on CSS
      // since parsing CSS is slow
      css: true,
    },
    base: 'https://jorgearancibia1.github.io/examen-github-user',
  }
})