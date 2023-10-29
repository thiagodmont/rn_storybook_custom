module.exports = {
  root: true,
  env: {
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    semi: ['error', 'never'],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@acme*/**',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
