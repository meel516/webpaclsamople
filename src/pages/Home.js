import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Home.jsx'; // Import the Home component

// Hydrate the Home component
ReactDOM.hydrate(
  <Home />,
  document.getElementById('root') // This matches the placeholder div in home.html
);
