module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 0,
    'vue/no-unused-vars': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
