module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    babelOptions: {
      configFile: "./babel.config.json",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: "off",
    "quote-props": "off",
    "linebreak-style": "off",
    "require-jsdoc": "off",
    indent: "off",
    "no-debugger": "off",
    "object-curly-spacing": "off",
    "max-len": "off",
    "operator-linebreak": "off",
  },
};
