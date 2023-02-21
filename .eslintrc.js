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
    'no-undef': 0,
    'no-shadow': 0,
    'no-bitwise': 0,
    'no-empty': 'error',
    'import/extensions': 0,
    'object-curly-newline': 0,
    'import/no-unresolved': 0,
    'react/button-has-type': 0,
    'prefer-arrow-callback': 0,
    'operator-linebreak': 0,
    'no-param-reassign': 0,
    'implicit-arrow-linebreak': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-no-constructed-context-values': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-one-expression-per-line': [0, { allow: 'none' | 'literal' | 'single-child' }],
    'arrow-body-style': 0,
    semi: ['error', 'never'],
    'no-unused-vars': 1,
    'comma-dangle': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/function-component-definition': 0,
    'function-paren-newline': [1, 'multiline-arguments'],
    'no-unused-expressions': 0,
    'babel/no-unused-expressions': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }]
  }
}
