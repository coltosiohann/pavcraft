import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';

// Apply dark mode class to root html element (required for Tailwind darkMode: "class")
document.documentElement.classList.add('dark');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
