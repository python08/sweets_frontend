module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx", ".ts"] },
    ], //should add ".ts" if typescript project
    "react/jsx-props-no-spreading": "off",
    "arrow-body-style": ["error", "as-needed"],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/require-default-props": "off",
    "import/prefer-default-export": "off",
    // do more research
    "import/no-cycle": ["off", { maxDepth: "∞" }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
