const path = require('path'); // CommonJS

module.exports = {
  mode: 'production',
  entry: './frontend/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },

  // performance: {
  //   maxAssetSize:1000000000000,
  //   maxEntrypointSize: 40000000000,
  //   hints: 'warning'
  // },
  stats: {
    warningsFilter: ['filter', /filter/, (warning) => true],
  },
  
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }
     //{
    //   test: /\.css$/,
    //   use: ['style-loader', 'css-loader']
    // }
  ]
  },
  devtool: 'source-map'
};
