import React from 'react';
import ReactDOM from 'react-dom';
import Base from '../components/Base.jsx'; // Import the Home component

// Hydrate the Home component
ReactDOM.hydrate(
  <Base />,
  document.getElementById('root') // This matches the placeholder div in home.html
);
