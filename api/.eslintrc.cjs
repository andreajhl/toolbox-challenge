module.exports = {
  root: true,
  env: { browser: true, es2020: true, mocha: true },
  extends: [
    'eslint:recommended',
    'plugin:mocha/recommended'
  ],
  plugins: ["mocha"],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  rules: {
    "mocha/no-mocha-arrows": "off"
  },
}
