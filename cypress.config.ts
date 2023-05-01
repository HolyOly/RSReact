import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  projectId: 'cxtfo1',
  e2e: {
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
    baseUrl: 'http://localhost:7456',
    specPattern: 'cypress/e2e/**/*.{js,ts,tsx}',
    excludeSpecPattern: ['*.cy.ts', 'src/**/*.test.tsx', '*/**/FolderToExclude', '*.ts'],
    video: false,
    defaultCommandTimeout: 15000,
  },
});
