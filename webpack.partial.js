const webpack = require('webpack')
const path = require('path')

module.exports = {
  output: {
    libraryTarget: 'var',
    library: 'angularHiApp',
  },
  devServer: {
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    },
    contentBase: __dirname,
  },
}
