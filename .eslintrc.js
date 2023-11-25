module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended"],
  plugins: ["react", "react-hooks"],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-vars": "error",
    "prefer-const": "error",
    "no-var": "error",
    "no-undef": "error",
    "react/prop-types": "off", // Disable prop-types checking (if preferred)
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-console": "warn",
    "no-alert": "warn",
    "no-eval": "error",
    strict: ["error", "global"],
    "react/no-unescaped-entities": "off",
    "react/no-unknown-property": "off",
    "react-hooks/exhaustive-deps": "off",
    // Add more rules as needed based on your preferences
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
