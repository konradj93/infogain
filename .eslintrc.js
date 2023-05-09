module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ["airbnb", "eslint:recommended", "prettier", "plugin:react/recommended", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "import/prefer-default-export": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": "off",
    "react/jsx-indent": ["warn", 2],
    "prettier/prettier": ["off", {}, { usePrettierrc: true, endOfLine: "auto" }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
