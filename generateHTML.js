const React = require("react");
const ReactDOMServer = require("react-dom/server");
const fs = require("fs");
const path = require("path");

// Import React components
const Home = require("./pages/Home").default;
const Next = require("./pages/Next").default;

// HTML template
const template = fs.readFileSync(path.resolve(__dirname, "../public/template.html"), "utf8");

// Function to generate static HTML
function generatePage(Component, fileName) {
  const content = ReactDOMServer.renderToStaticMarkup(React.createElement(Component));
  const html = template.replace("<!-- CONTENT -->", content);
  fs.writeFileSync(path.resolve(__dirname, `../dist/${fileName}.html`), html);
}

// Generate pages
generatePage(Home, "home");
generatePage(Next, "next");
