import react from 'eslint-plugin-react';

export default [
  {
    ignores: ['dist'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        requireConfigFile: false,
      },
    },
    rules: {
      quotes: ['error', 'single'],
      'no-console': 'off',
    },
  },
  // .js 파일 전용 설정
  {
    files: ['**/*.js'],
    rules: {
      'no-console': 'warn',
    },
  },
  // .jsx 파일 전용 설정
  {
    files: ['**/*.jsx'],
    plugins: { react },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/prop-types': 'off',
    },
  },
];
