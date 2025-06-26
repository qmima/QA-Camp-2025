import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  tseslint.configs.recommended,
  {
    ignores: [
      'node_modules/',
      'test-results/',
      'playwright-report',
      'summary.json',
      '.vscode/*',
      '.DS_Store',
      'Thumbs.db',
      '*_spec3.json',
    ],
  },
]);
