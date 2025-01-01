import React from 'react';
import ReactDOM from 'react-dom';

import About from '../components/About.jsx';

// Hydrate the Home component
ReactDOM.hydrate(
  <About />,
  document.getElementById('root') // This matches the placeholder div in home.html
);
