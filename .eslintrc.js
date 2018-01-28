var eslintConfig = { // use es5 as this file will not be compiled and we don't know Node version of server
  "extends": [
    "airbnb",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "flowtype",
  ],
  "rules": {
    "semi": [2, "never"], // I dislike semicolons
    "no-return-assign": 0, // This rule is annoying for destructuring objects when writing reducers. See https://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html
  },
  "env": {
    "browser": true
  }
};

if (process.env.NODE_ENV === "test") { // use slightly different config to lint our test files
  eslintConfig.env.mocha = true;
  eslintConfig.rules["func-names"] = 0;
}

module.exports = eslintConfig;
