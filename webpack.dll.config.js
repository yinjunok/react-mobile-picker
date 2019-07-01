const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry:  {
    vendor: [
      'react',
      'react-dom',
      '@babel/polyfill',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dll'),
    filename: 'dll_[name].js',
    library: "[name]_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "dll", "[name]-manifest.json"),
      name: "[name]_[hash]"
    })
  ]
}