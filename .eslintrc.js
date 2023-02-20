module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['react-hooks', 'react', '@typescript-eslint'],
  rules: {
    'object-curly-newline': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/react-in-jsx-scope': 0,
    'no-bitwise': 0,
    'prefer-arrow-callback': 0,
    'react/jsx-one-expression-per-line': [0, { allow: 'none' | 'literal' | 'single-child' }],
    'no-empty': 'error',
    'no-unused-vars': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'arrow-body-style': 0,
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'react/function-component-definition': 0,
    'function-paren-newline': [1, 'multiline-arguments'],
    'no-unused-expressions': 0,
    'babel/no-unused-expressions': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }]
  }
}
