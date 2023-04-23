/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  projectId: 'cxtfo1',
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      codeCoverageTask(on, config);
      return config;
    },
    baseUrl: 'http://localhost:7456',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    video: false,
    defaultCommandTimeout: 15000,
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
