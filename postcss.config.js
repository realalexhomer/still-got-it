module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('postcss-cssnext'),
    // add other plugins here
    require('postcss-browser-reporter')
  ]
}
