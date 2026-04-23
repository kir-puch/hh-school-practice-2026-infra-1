import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['eslint.config.js'],
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            react,
        },
        rules: {
            // Базовые
            curly: 'error',
            eqeqeq: 'error',
            'no-var': 'error',
            'prefer-const': 'error',
            'no-console': 'warn',

            // Чистота кода
            'no-else-return': 'error',
            'prefer-template': 'error',
            'prefer-arrow-callback': 'error',
            'arrow-body-style': ['error', 'as-needed'],
            'object-shorthand': 'error',
            'no-unneeded-ternary': 'error',

            // TypeScript
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/prefer-optional-chain': 'error',

            // React
            'react/jsx-boolean-value': 'error',
            'react/jsx-curly-brace-presence': 'error',
            'react/self-closing-comp': 'error',
            'react/jsx-no-useless-fragment': 'error',

            // Безопасность
            'no-eval': 'error',
            'no-implied-eval': 'error',
            'require-await': 'error',
        },
    },
]);
