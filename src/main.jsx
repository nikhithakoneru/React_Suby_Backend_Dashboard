import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Using ReactDOM.createRoot for rendering
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App.jsx file is here which is App/> */}
    <App /> 
    </BrowserRouter>
  
  </React.StrictMode>
);
