// Register Babel to transpile JSX and modern JavaScript code
require('@babel/register')({
  extensions: ['.js', '.jsx'], // Handle both .js and .jsx files
  presets: ['@babel/preset-env', '@babel/preset-react'], // Use React and modern JS presets
  ignore: [/node_modules/], // Optional: Avoid transpiling node_modules
});

// Now you can import React and your components

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const routes = require('./routes/routes.js');  // Make sure the path is correct

// Read the template HTML file (make sure it's in the correct location)
const template = fs.readFileSync('./public/template.html', 'utf8');

// Loop through each route and generate the static HTML
routes.forEach(({ component, fileName }) => {
  // Render the React component to static HTML
  const content = ReactDOMServer.renderToStaticMarkup(React.createElement(component));

  // Replace the placeholder in the template with the component content
  const html = template.replace('<!-- CONTENT -->', content);

  // Write the generated HTML to the dist folder
  fs.writeFileSync(path.resolve('./pages', `${fileName}.html`), html);
});

console.log('HTML pages generated successfully!');
