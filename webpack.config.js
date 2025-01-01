const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

const pagesDir = path.resolve(__dirname, 'src', 'pages');
const baseTemplate = fs.readFileSync(path.resolve(__dirname, 'src', 'templates', 'template.html'), 'utf8');
const entryPoints = {};
const htmlPlugins = [];
const tempDir = path.resolve(__dirname, '.temp');

// Ensure the temporary directory exists
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// Process each page in the 'src/pages' directory
fs.readdirSync(pagesDir).forEach(file => {
  const filePath = path.join(pagesDir, file);

  if (file.endsWith('.jsx')) {
    const pageName = file.replace('.jsx', '');

    // Generate hydration code for this page
    const hydrationCode = `
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Component from '${filePath.replace(/\\/g, '\\\\')}';
      
      ReactDOM.hydrate(
        <Component />,
        document.getElementById('root')
      );
    `;

    // Write the hydration code to a temporary file
    const hydrationFilePath = path.join(tempDir, `${pageName}.jsx`);
    fs.writeFileSync(hydrationFilePath, hydrationCode);

    // Add the temporary file as an entry point
    entryPoints[pageName] = hydrationFilePath;

    // Create an HTML file for this page
    htmlPlugins.push(
      new HtmlWebpackPlugin({
        filename: `${pageName}.html`, // e.g., home.html
        templateContent: baseTemplate.replace('<!-- CONTENT -->', `<div id="root"></div>`),
        chunks: [pageName], // Include the correct JS bundle
      })
    );
  }
});

module.exports = {
  entry: entryPoints, // Dynamic entry points for each page
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', // e.g., home.bundle.js
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
  plugins: htmlPlugins, // Dynamic HTML generation
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
  },
};
