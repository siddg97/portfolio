module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': ['error', 'never', { json: 'always' }],
    'import/no-extraneous-dependencies': [
      'warn',
      { devDependencies: ['!./src/**/*.test.ts'] },
    ],
    'lines-between-class-members': 'off',
    'no-unused-vars': ['off', { args: 'after-used' }],
    '@typescript-eslint/no-unused-vars': 'off',
    'comma-dangle': ['warn', 'only-multiline'],
    'import/prefer-default-export': 'off',
  },
};
