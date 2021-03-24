module.exports = {
  env: {
    browser: true, // 浏览器环境
    es2021: true
  },
  extends: ['plugin:prettier/recommended', 'plugin:vue/essential'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {}
};
