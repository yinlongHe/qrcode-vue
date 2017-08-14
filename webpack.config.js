// 将 CSS 打包成一个独立的文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // 项目入口文件
  entry: './src/guest.js',

  // 编译后文件输出路径及文件名
  output: {
    path: __dirname,
    filename: './webapp/dist/js/guest.js'
  },

  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue',
    },
    {
      test: /\.js$/,
      loader: 'babel',
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
    }],
  },

  vue: {
    loaders: {
      sass: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!sass-loader'),
    },
  },

  plugins: [
    new ExtractTextPlugin('./webapp/dist/css/guest.css', {
      allChunks: true,
    }),
  ],
};
