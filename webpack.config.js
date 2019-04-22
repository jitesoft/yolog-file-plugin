const getEnv = () => {
  return process.env.NODE_ENV === 'production' ? 'production' : 'development';
};
const Path = require('path');

module.exports = {
  mode: getEnv(),
  optimization: {
    minimize: getEnv() === 'production'
  },
  entry: [
    Path.join(__dirname, 'src', 'index.js')
  ]
  ,
  externals: {
    '@jitesoft/yolog': {
      root: "@jitesoft/yolog",
      commonjs2: '@jitesoft/yolog',
      commonjs: '@jitesoft/yolog'
    }
  },
  target: 'node',
  output: {
    filename: 'index.js',
    globalObject: 'this',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        include: Path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
