import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import { importX } from 'eslint-plugin-import-x'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    ignores: [
      'dist/**',
      'build/**',
      'node_modules/**',
      'src-tauri/**',
      '**/*.gen.ts',
      '**/*.gen.js',
      '**/target/**',
      '**/out/**',
    ],
  },
  {
    plugins: {
      'import-x': importX,
    },
    extends: ['import-x/flat/recommended'],
    rules: {
      'import-x/no-dynamic-require': 'warn',
    },
    settings: {
      'import-x/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
])
