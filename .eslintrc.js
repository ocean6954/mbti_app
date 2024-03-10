module.exports = {
  root: true,
  extends: ["airbnb", "airbnb/hooks"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/function-component-definition": [
      1,
      { namedComponents: "arrow-function" },
    ],
    "no-console": 0,
    "no-alert": 0,
    quotes: [2, "double"],
    "implicit-arrow-linebreak": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: false, // devDependenciesのimportを禁止
        optionalDependencies: false,
      },
    ],
  },
  env: {
    browser: true,
  },
};
