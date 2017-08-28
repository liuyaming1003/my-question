// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
        browsers: [
          'last 3 versions',
          'ie >= 9',
          'ie_mob >= 9',
          'chrome >= 34',
          'safari >= 6',
          'opera >= 12.1',
          'ios >= 6',
          'android >= 4.4'
        ]
    }
  }
}
