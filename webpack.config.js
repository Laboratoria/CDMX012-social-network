const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
  },
  watch: true,
};
