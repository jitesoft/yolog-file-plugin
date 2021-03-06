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
  ],
  externals: {
    fs: 'fs',
    '@jitesoft/yolog': '@jitesoft/yolog',
    '@jitesoft/sprintf': '@jitesoft/sprintf'
  },
  target: 'node',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2'
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
