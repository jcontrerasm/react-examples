const webpack = require('webpack')
      path = require('path')
      endPath = path.resolve(__dirname, 'public');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.json', '.css', '.scss'],
    alias: {
      '@app': path.resolve(__dirname)
    }
  },
  cache: true,
  entry: [
    'react-hot-loader/patch', // Activa Hot Module Reloading HMR para React
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  output: {
    path: endPath,
    filename: 'app.js',
    publicPath: '/' // Necesario para el Hot-Reloading
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: 'babel-loader'
      },
      {
        test: /.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'inline-soruce-map',
  devServer: {
    hot: true,
    contentBase: endPath,
    inline: true,
    compress: true,
    port: 9000,
    publicPath: '/'
  }
};
