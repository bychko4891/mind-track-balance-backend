// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

// Коли ESLINT_NO_TYPE_CHECK=1 -> швидкий режим без type-aware правил
const useTypeInfo = process.env.ESLINT_NO_TYPE_CHECK !== '1';

const typedOnlyRules = useTypeInfo
  ? {
    // ці правила працюють лише коли є type info
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
  }
  : {
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
  };

export default tseslint.config(
  // ESLint 9: заміна .eslintignore
  { ignores: ['eslint.config.mjs', 'dist', 'coverage', 'node_modules'] },

  // Базові правила ESLint
  eslint.configs.recommended,

  // TS-рекомендації: з type-info або швидкі без нього
  ...(useTypeInfo
    ? tseslint.configs.recommendedTypeChecked
    : tseslint.configs.recommended),

  // Підключаємо Prettier як lint-правила
  prettierRecommended,

  // Налаштування парсера/оточення
  {
    languageOptions: {
      sourceType: 'commonjs',
      parserOptions: useTypeInfo
        ? { projectService: true, tsconfigRootDir: import.meta.dirname }
        : {}, // швидкий режим — без type-info
      globals: { ...globals.node, ...globals.jest },
    },
  },

  // Кастомні правила (частина вимикається у fast-режимі)
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      ...typedOnlyRules,
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",              // ← для аргументів функцій
          caughtErrors: "none",                 // ← не сваритися на catch-параметри
          // або, якщо хочеш лишити суворість для catch, але ігнорити _error:
          // caughtErrorsIgnorePattern: "^_",
        }
      ],
    },
  },
);