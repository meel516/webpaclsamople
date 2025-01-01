const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: './src/pages/Home.js',  // Entry point for the home page
    about: './src/pages/Next.js', // Entry point for the about page (if any)
    base: './src/pages/Base.js',   // Entry point for the base page (if any)
  },
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory for the build
    filename: '[name].bundle.js',  // Outputs home.bundle.js, about.bundle.js, and base.bundle.js
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
  optimization: {
    splitChunks: {
      chunks: 'all',  // This will split common code across all chunks
      name: 'vendor',  // Output the common code (like React) into vendor.bundle.js
    },
  },
  plugins: [
    // HTML Plugin for Home Page
    new HtmlWebpackPlugin({
      filename: 'home.html',  // Output home.html in the dist directory
      template: path.resolve(__dirname, 'src', 'pages', 'home.html'),  // Path to the home.html template
      chunks: ['home', 'vendor'],  // Include home.js and vendor.js in this page
    }),
    
    // HTML Plugin for About Page
    new HtmlWebpackPlugin({
      filename: 'about.html',  // Output about.html in the dist directory
      template: path.resolve(__dirname, 'src', 'pages', 'about.html'),  // Path to the about.html template
      chunks: ['about', 'vendor'],  // Include about.js and vendor.js in this page
    }),

    // HTML Plugin for Base Page
    new HtmlWebpackPlugin({
      filename: 'base.html',  // Output base.html in the dist directory
      template: path.resolve(__dirname, 'src', 'pages', 'base.html'),  // Path to the base.html template
      chunks: ['base', 'vendor'],  // Include base.js and vendor.js in this page
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve JS and JSX files
  },
  devServer: {
    contentBase: './dist',  // Serve content from the dist directory
    port: 3000,  // Port for the development server
  },
};
