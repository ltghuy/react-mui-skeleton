import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import EnvironmentPlugin from 'vite-plugin-environment';
import mkcert from 'vite-plugin-mkcert';

const execSyncWrapper = (command: string) => {
  try {
    return execSync(command).toString().trim();
  } catch (error) {
    console.error(error);
  }
};

export default defineConfig(configEnv => {
  process.env = {
    ...process.env,
    GIT_BRANCH: execSyncWrapper('git rev-parse --abbrev-ref HEAD'),
    GIT_COMMIT: execSyncWrapper('git rev-parse --short=7 HEAD'),
  };
  return {
    plugins: [
      react(),
      mkcert({
        hosts: ['*.localhost'],
      }),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint .',
        },
        enableBuild: true,
        terminal: true,
      }),
      EnvironmentPlugin('all'),
    ],
    server: {
      port: 5000,
      https: true,
    },
    preview: {
      port: 5000,
      https: true,
    },
    build: {
      sourcemap: false,
      chunkSizeWarningLimit: 1024, //1024 KiB
    },
    resolve: {
      alias: {
        '@public': resolve(__dirname, 'public'),
        '@assets': resolve(__dirname, 'src/assets'),
        '@components': resolve(__dirname, 'src/components'),
        '@constants': resolve(__dirname, 'src/constants'),
        '@contexts': resolve(__dirname, 'src/contexts'),
        '@hocs': resolve(__dirname, 'src/hocs'),
        '@hooks': resolve(__dirname, 'src/hooks'),
        '@models': resolve(__dirname, 'src/models'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@routes': resolve(__dirname, 'src/routes'),
        '@services': resolve(__dirname, 'src/services'),
        '@stores': resolve(__dirname, 'src/stores'),
        '@tests': resolve(__dirname, 'src/tests'),
        '@utils': resolve(__dirname, 'src/utils'),
      },
    },
  };
});
