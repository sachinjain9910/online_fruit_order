import js from '@eslint/js';
import globals from 'globals';

export default [
  // Base config for all JS files
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  },

  // Jest test files
  {
    files: ['**/*.spec.js', '**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
];
