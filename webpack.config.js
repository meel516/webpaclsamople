const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: './src/pages/Home.js',  // Entry point for the home page
    about: './src/pages/Next.js', // Entry point for the about page (if any)
  },
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory for the build
    filename: '[name].bundle.js',  // Outputs home.bundle.js and about.bundle.js
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Transpile JS/JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'home.html',  // Output home.html in the dist directory
      template: path.resolve(__dirname, 'src', 'pages', 'home.html'),  // Correct path to the home.html template
      chunks: ['home'],  // Include only the home.js bundle for this page
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',  // Output about.html in the dist directory
      template: path.resolve(__dirname, 'src', 'pages', 'about.html'),  // Correct path to the about.html template
      chunks: ['about'],  // Include only the about.js bundle for this page
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve JS and JSX files
  },
  devServer: {
    contentBase: './dist',  // Serve content from the dist directory
    port: 3000,
  },
};
