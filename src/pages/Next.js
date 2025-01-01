import React from 'react';
import ReactDOM from 'react-dom';
import Next from '../components/Next.jsx'; // Import the Home component

// Hydrate the Home component
ReactDOM.hydrate(
  <Next />,
  document.getElementById('root') // This matches the placeholder div in home.html
);
