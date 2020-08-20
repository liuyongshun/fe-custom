module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
      modules: true
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", "ts", "tsx"] }],
    "@typescript-eslint/explicit-function-return-type": [0, { allowTypedFunctionExpressions: true }],
    "react/state-in-constructor": 0,
    // import/extensions 这个规则不能正确处理文件后缀名
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/jsx-props-no-spreading": 0,
    "no-unused-expressions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    "no-nested-ternary": 0,
    "react/static-property-placement": 0,
    "object-curly-newline": 0,
  },
  settings: {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      typescript: {
        directory: "./tsconfig.json"
      }
    },
  },
};
