var eslintConfig = { // use es5 as this file will not be compiled and we don't know Node version of server
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "semi": [2, "never"]
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
