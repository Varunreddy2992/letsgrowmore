import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM instead of ReactDOM/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a React root and render the App component into the 'root' element
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create a root for concurrent mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure and report performance metrics if needed
reportWebVitals();
