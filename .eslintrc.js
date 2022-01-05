const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "eslint-config-prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": RULES.OFF,
    "react/react-in-jsx-scope": RULES.OFF,
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        variables: false,
      },
    ],
  },
}
