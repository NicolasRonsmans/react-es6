'user strict';

module.exports = {
  entry: {
    app: ['./app/App.js']
  },
  output: {
    path: './public/assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0', 'react']
      },
      plugins: [
        'transform-es2015-classes'
      ]
    }]
  }
};
