/** @format */

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import', '@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',

    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    'no-unused-vars': 'error',
    curly: 'error',
    eqeqeq: 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/named': 'error',
    'import/namespace': 'off',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-unresolved': 'error',
    'import/no-unused-modules': 'error',
    'import/prefer-default-export': 'off',
    'no-alert': 'error',
    'no-async-promise-executor': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-function': 'off',
    'no-empty': 'error',
    'no-useless-escape': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prettier/prettier': [
      'off',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
