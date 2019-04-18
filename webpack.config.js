const getEnv = () => {
  return process.env.NODE_ENV === 'production' ? 'production' : 'development';
};
const Path = require('path');

module.exports = {
  mode: getEnv(),
  optimization: {
    minimize: getEnv() === 'production'
  },
  entry: {
    'node': [
      Path.join(__dirname, 'src', 'index.js')
    ]
  },
  externals: {
    '@jitesoft/yolog': {
      root: "@jitesoft/yolog"
    }
  },
  target: 'node',
  output: {
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        include: Path.resolve(__dirname, 'src'),
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
