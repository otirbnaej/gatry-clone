module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
  },
};
